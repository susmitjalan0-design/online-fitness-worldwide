/**
 * Web fonts, loaded per script instead of on every page.
 *
 * Every page gets Outfit (Latin), self-hosted at /fonts/outfit-latin.woff2
 * (declared in src/styles.css, preloaded from the root route), so English,
 * Spanish, Chinese and Japanese pages make no Google Fonts request at all.
 * The script fonts come from Google Fonts and are only requested where that
 * script is the page language (with a preconnect to fonts.gstatic.com first):
 * - Noto Sans Devanagari on /hi/... pages, and on the home page only after the
 *   visitor switches the copy to Hindi (loaded client-side, see loadScriptFont).
 * - Noto Sans Gujarati on /gu/... pages.
 * - Noto Sans Arabic on /ar/... pages.
 * Chinese and Japanese use the system CJK fonts (PingFang, Hiragino, Yu Gothic,
 * Microsoft YaHei, Noto CJK on Android): a full CJK web font is several MB and
 * is not worth the download for article text.
 *
 * Google Fonts serves each family in unicode-range slices, so a browser only
 * downloads the slices whose characters are on the page.
 */

const GOOGLE_FONTS = "https://fonts.googleapis.com/css2";

/** Self-hosted Outfit (variable, Latin). Restored from binary-parts/ like the images. */
export const BASE_FONT_HREF = "/fonts/outfit-latin.woff2";

const SCRIPT_FONT_HREF: Record<string, string> = {
  hi: `${GOOGLE_FONTS}?family=Noto+Sans+Devanagari:wght@400;500;700;800&display=swap`,
  gu: `${GOOGLE_FONTS}?family=Noto+Sans+Gujarati:wght@400;500;700;800&display=swap`,
  ar: `${GOOGLE_FONTS}?family=Noto+Sans+Arabic:wght@400;500;700;800&display=swap`,
};

/** Stylesheet link for the page language's script font, or nothing (Latin, CJK). */
export function scriptFontLinks(lang: string | undefined): Array<Record<string, string>> {
  const href = lang ? SCRIPT_FONT_HREF[lang] : undefined;
  return href
    ? [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href },
      ]
    : [];
}

/** Client-side: add the script font stylesheet once, e.g. when the home page switches to Hindi. */
export function loadScriptFont(lang: string): void {
  const href = SCRIPT_FONT_HREF[lang];
  if (!href || typeof document === "undefined") return;
  const already = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')).some(
    (link) => link.href === href,
  );
  if (already) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}
