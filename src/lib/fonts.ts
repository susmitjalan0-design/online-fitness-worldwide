/**
 * Web fonts, loaded per script instead of on every page.
 *
 * Every page gets Outfit (Latin) from the root route. The script fonts are only
 * requested where that script is the page language:
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

export const BASE_FONT_HREF = `${GOOGLE_FONTS}?family=Outfit:wght@400;500;640;800&display=swap`;

const SCRIPT_FONT_HREF: Record<string, string> = {
  hi: `${GOOGLE_FONTS}?family=Noto+Sans+Devanagari:wght@400;500;700;800&display=swap`,
  gu: `${GOOGLE_FONTS}?family=Noto+Sans+Gujarati:wght@400;500;700;800&display=swap`,
  ar: `${GOOGLE_FONTS}?family=Noto+Sans+Arabic:wght@400;500;700;800&display=swap`,
};

/** Stylesheet link for the page language's script font, or nothing (Latin, CJK). */
export function scriptFontLinks(lang: string | undefined): Array<Record<string, string>> {
  const href = lang ? SCRIPT_FONT_HREF[lang] : undefined;
  return href ? [{ rel: "stylesheet", href }] : [];
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
