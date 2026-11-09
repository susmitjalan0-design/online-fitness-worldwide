// Renders the long-form blog posts as static pages in the cPanel site's design.
//
//   node build.mjs            writes ../../cpanel-overlay/  (copy its contents over public_html)
//
// Inputs, all in this folder:
//   data/posts/*.json   the posts (copy in 7 languages, sources), exported from the TypeScript sources by export-posts.mjs
//   data/order.json     every post, newest first (blog index order, "More from the blog")
//   data/shared.json    language names, "Source"/"Jump to" labels, the hybrid-race cluster
//   template/           pages taken from the live cPanel zip: the 7 blog indexes, one existing post per language
//                       (head, header, footer, byline), the fat-loss page and sitemap.xml
//
// Nothing is fetched and nothing outside this repo is touched. No dependencies, Node 18 or newer.
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
export const ORIGIN = "https://onlinefitnessworldwide.com";
export const WHATSAPP_E164 = "919881375047";
const RELATED_MAX = 6;
const PROGRAMS_PATH = "/#programs";

const read = (p) => readFileSync(join(here, p), "utf8");
const json = (p) => JSON.parse(read(p));

/* ------------------------------------------------------------------ helpers */

/** React's text/attribute escaping, so the markup matches the zip's server-rendered pages. */
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
const unesc = (s) =>
  s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
/** JSON for a <script type="application/ld+json">: "<" is escaped so the text can never close the tag. */
const ldJson = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

const ARROW = (cls) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right ${cls}" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>`;

export const postPathFor = (slug, lang) => (lang === "en" ? `/blog/${slug}` : `/${lang}/blog/${slug}`);
export const blogIndexPathFor = (lang) => (lang === "en" ? "/blog" : `/${lang}/blog`);
const abs = (path) => (path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`);

/** Text of the copy that was written for the old brand: new name, no business location. */
const PUNE_SENTENCE = {
  en: / From Pune\./g,
  ar: / من بونه\./g,
  hi: / पुणे से।/g,
  es: / Desde Pune\./g,
  zh: /来自浦那。/g,
  ja: /プネーから。/g,
  gu: / પુણેથી\./g,
};
export function rebrand(value, lang) {
  if (typeof value === "string") {
    return value.replace(/Jalan PT/g, "Online Fitness Worldwide").replace(PUNE_SENTENCE[lang], "");
  }
  if (Array.isArray(value)) return value.map((v) => rebrand(v, lang));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, rebrand(v, lang)]));
  return value;
}
/** Strings that must not survive in any page: the old brand and the old location. */
export const FORBIDDEN = /Jalan PT|jalan-pt|Pune|पुणे|بونه|浦那|プネー|પુણે/;

/* ----------------------------------------------------------------- template */

export function loadTemplate() {
  const shared = json("data/shared.json");
  const langs = shared.POST_LANGS;
  const sample = {};
  const index = {};
  for (const lang of langs) {
    const h = read(`template/sample/${lang}.html`);
    const must = (re, what) => {
      const m = h.match(re);
      if (!m) throw new Error(`template/sample/${lang}.html: ${what} not found`);
      return m;
    };
    const header = must(/<header[\s\S]*?<\/header>/, "header")[0];
    sample[lang] = {
      prefix: h.slice(0, h.indexOf("<title>")),
      iconLinks: h.slice(h.indexOf('<link rel="icon"'), h.indexOf('<link rel="canonical"')),
      gtag: must(/<script>window\.dataLayer[\s\S]*?<\/script>/, "gtag")[0],
      style: must(/<style id="blog-theme">[\s\S]*?<\/style>/, "theme style")[0],
      header,
      footer: must(/<footer[\s\S]*?<\/footer>/, "footer")[0],
      skip: unesc(must(/<a href="#main"[^>]*>([^<]*)<\/a>/, "skip link")[1]),
      byline: unesc(must(/<p class="mt-4 text-sm text-mist"><span>(.*?)<\/span> <time/, "byline")[1]),
      homeLabel: unesc(must(/aria-label="Online Fitness Worldwide, Online Fitness Worldwide: ([^"]*)"/, "home label")[1]),
      blogLabel: unesc(must(/<a href="[^"]*" class="inline-flex min-h-11 items-center text-mist hover:text-ink">([^<]*)<\/a><\/nav>/, "blog label")[1]),
    };
    index[lang] = read(`template/index/${lang}.html`);
  }
  /* The posts already in the zip: slug, and per language title, one-line summary and date, read from the cards of the blog indexes. */
  const existingSlugs = json("existing-posts.json");
  const old = Object.fromEntries(existingSlugs.map((slug) => [slug, { slug, copy: {} }]));
  for (const lang of langs) {
    const card = /<li class="card-lift[^"]*"><p class="text-sm text-mist"><time dateTime="([^"]*)">([^<]*)<\/time><\/p><h3 class="mt-2 font-display text-2xl"><a href="([^"]*)" class="[^"]*">([\s\S]*?)<\/a><\/h3><p class="mt-2 leading-relaxed text-mist">([\s\S]*?)<\/p>/g;
    for (const m of index[lang].matchAll(card)) {
      const slug = m[3].split("/").pop();
      if (!old[slug]) continue;
      old[slug].modified = m[1];
      old[slug].copy[lang] = { h1: unesc(m[4]), dek: unesc(m[5]), updated: unesc(m[2]) };
    }
  }
  for (const o of Object.values(old)) {
    for (const lang of langs) if (!o.copy[lang]) throw new Error(`index ${lang}: card for ${o.slug} not found`);
  }
  return { shared, langs, sample, index, old, sitemap: read("template/sitemap.xml"), fatLoss: read("template/personal-trainer-for-fat-loss.html") };
}

export function loadPosts(T) {
  const dir = join(here, "data/posts");
  const bySlug = {};
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".json"))) {
    const post = JSON.parse(readFileSync(join(dir, file), "utf8"));
    for (const lang of T.langs) post.copy[lang] = rebrand(post.copy[lang], lang);
    bySlug[post.slug] = post;
  }
  return bySlug;
}

/** Title, one-liner and date of any post (new or already in the zip) in one language. */
function brief(T, posts, slug, lang) {
  if (posts[slug]) return { h1: posts[slug].copy[lang].h1, dek: posts[slug].copy[lang].dek, updated: posts[slug].copy[lang].updated, modified: posts[slug].modified };
  const o = T.old[slug];
  return { ...o.copy[lang], modified: o.modified };
}

/* ------------------------------------------------------------------- a post */

/** Latin words and numbers inside right-to-left text are isolated so units, names and numbers keep their order. */
const LATIN_RUN = /([A-Za-z0-9](?:[A-Za-z0-9.,:×/%+\-–]*[A-Za-z0-9%])?(?: [A-Za-z0-9](?:[A-Za-z0-9.,:×/%+\-–]*[A-Za-z0-9%])?)*)/g;
function bidi(text, rtl) {
  if (!rtl) return esc(text);
  return text
    .split(LATIN_RUN)
    .map((part, i) => (i % 2 === 1 ? `<bdi>${esc(part)}</bdi>` : esc(part)))
    .join("");
}
/** "text{1}{3}" becomes text with linked superscript citations. */
function cited(text, label, rtl) {
  return text
    .split(/\{(\d+)\}/)
    .map((part, i) => {
      if (i % 2 === 0) return bidi(part, rtl);
      return `<sup class="ms-0.5"><a href="#source-${part}" class="text-copper underline underline-offset-2" aria-label="${esc(label)} ${part}">[<!-- -->${part}<!-- -->]</a></sup>`;
    })
    .join("");
}

export function postHeadTags(T, post, lang) {
  const s = T.sample[lang];
  const copy = post.copy[lang];
  const path = postPathFor(post.slug, lang);
  const url = abs(path);
  const ogLocale = T.shared.LANG_META[lang].ogLocale;
  const meta = [
    `<title>${esc(copy.metaTitle)}</title>`,
    `<meta name="theme-color" content="#ffffff"/>`,
    `<meta name="author" content="Susmit Jalan"/>`,
    `<meta name="description" content="${esc(copy.metaDescription)}"/>`,
    `<meta name="robots" content="index, follow, max-image-preview:large"/>`,
    `<meta property="og:type" content="article"/>`,
    `<meta property="og:site_name" content="Online Fitness Worldwide"/>`,
    `<meta property="og:title" content="${esc(copy.metaTitle)}"/>`,
    `<meta property="og:description" content="${esc(copy.metaDescription)}"/>`,
    `<meta property="og:url" content="${url}"/>`,
    `<meta property="og:locale" content="${ogLocale}"/>`,
    `<meta name="twitter:card" content="summary"/>`,
    `<meta name="twitter:title" content="${esc(copy.metaTitle)}"/>`,
    `<meta name="twitter:description" content="${esc(copy.metaDescription)}"/>`,
    `<meta property="article:published_time" content="${post.published}"/>`,
    `<meta property="article:modified_time" content="${post.modified}"/>`,
  ].join("");
  const alternates = [
    ...T.langs.map((l) => `<link rel="alternate" hrefLang="${l}" href="${abs(postPathFor(post.slug, l))}"/>`),
    `<link rel="alternate" hrefLang="x-default" href="${abs(postPathFor(post.slug, "en"))}"/>`,
  ].join("");
  return meta + s.iconLinks + `<link rel="canonical" href="${url}"/>` + alternates;
}

/** The author and publisher objects are copied from the live pages' own JSON-LD, so they stay identical to the existing posts. */
function entityLd(T) {
  const h = T.sample.en.prefix.length ? read("template/sample/en.html") : "";
  const first = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const article = first.find((o) => o["@type"] === "Article");
  return { author: article.author, publisher: article.publisher };
}

export function postJsonLd(T, post, lang, entities) {
  const copy = post.copy[lang];
  const path = postPathFor(post.slug, lang);
  const blogPath = blogIndexPathFor(lang);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${abs(path)}#article`,
    headline: copy.h1,
    description: copy.metaDescription,
    inLanguage: lang,
    datePublished: post.published,
    dateModified: post.modified,
    mainEntityOfPage: abs(path),
    author: entities.author,
    publisher: entities.publisher,
    about: { "@type": "Thing", name: post.about },
    isPartOf: { "@id": `${abs(blogPath)}#blog` },
    citation: post.sources.map((s) => ({ "@type": "CreativeWork", name: s.cite, url: s.url })),
  };
  if (lang === "en") {
    article.workTranslation = T.langs.filter((l) => l !== "en").map((l) => ({ "@type": "Article", "@id": `${abs(postPathFor(post.slug, l))}#article`, inLanguage: l }));
  } else {
    article.translationOfWork = { "@id": `${abs(postPathFor(post.slug, "en"))}#article` };
  }
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${abs(path)}#list`,
    name: copy.listHeading,
    inLanguage: lang,
    numberOfItems: copy.items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: copy.items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, url: `${abs(path)}#item-${i + 1}` })),
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: T.sample[lang].homeLabel, item: abs("/") },
      { "@type": "ListItem", position: 2, name: T.sample[lang].blogLabel, item: abs(blogPath) },
      { "@type": "ListItem", position: 3, name: copy.labels.crumb, item: abs(path) },
    ],
  };
  return [article, list, crumbs].map((o) => `<script type="application/ld+json">${ldJson(o)}</script>`).join("");
}

export function renderPost(T, posts, post, lang, ctx) {
  const { shared } = T;
  const copy = post.copy[lang];
  const s = T.sample[lang];
  const dir = shared.LANG_META[lang].dir;
  const rtl = dir === "rtl";
  const sourceLabel = shared.SOURCE_LABEL[lang];
  const newTab = shared.NEW_TAB_LABEL[lang];
  const blogPath = blogIndexPathFor(lang);
  const inCluster = (slug) => shared.HYBRID_CLUSTER.includes(slug);
  const clusterPosts = inCluster(post.slug) ? shared.HYBRID_CLUSTER : [];
  const seeAlso = post.seeAlso ?? [];
  /* "More from the blog": the RELATED_MAX posts published just before this one (then the nearest newer ones), skipping this
     cluster and anything already in "See also". Anchored to each post's own place in the order, so adding a new post at the
     top leaves every older post's list unchanged. */
  const at = ctx.order.indexOf(post.slug);
  const related = [...ctx.order.slice(at + 1), ...ctx.order.slice(0, Math.max(at, 0)).reverse()]
    .filter((slug) => slug !== post.slug && !(clusterPosts.length > 0 && inCluster(slug)) && !seeAlso.includes(slug))
    .slice(0, RELATED_MAX);
  const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(copy.labels.whatsappText)}`;
  const titleOf = (slug) => brief(T, posts, slug, lang).h1;

  const coached = `<section aria-labelledby="coached" class="mark-cap mt-12 rounded-3xl bg-ink p-6 text-bone sm:p-8"><h2 id="coached" class="font-display text-3xl text-bone">${esc(copy.coachedHeading)}</h2><div class="mt-4 space-y-3 leading-relaxed text-bone/90">${copy.coached.map((l) => `<p>${esc(l)}</p>`).join("")}${
    lang === "en" && post.programLink && ctx.sitePaths.has(post.programLink.href)
      ? `<p><a href="${esc(post.programLink.href)}" class="inline-flex min-h-11 items-center gap-1.5 font-semibold text-bone underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper-2">${esc(post.programLink.label)}${ARROW("size-4 shrink-0")}</a></p>`
      : ""
  }</div><div class="mt-6 flex flex-wrap gap-3"><a href="${PROGRAMS_PATH}" class="btn-accent inline-flex min-h-12 items-center gap-1 rounded-full px-6 text-sm font-semibold">${esc(copy.labels.programs)}${ARROW("size-4 rtl:-scale-x-100")}</a><a href="${wa}" target="_blank" rel="noopener noreferrer" class="btn-wa inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">${esc(copy.labels.whatsapp)}<span class="sr-only"> (${esc(newTab)})</span></a></div></section>`;

  const langNav = T.langs
    .map((l) =>
      l === lang
        ? `<li><span aria-current="page" class="font-semibold" lang="${l}" dir="${shared.LANG_META[l].dir}">${esc(shared.LANG_META[l].name)}</span></li>`
        : `<li><a href="${postPathFor(post.slug, l)}" hrefLang="${l}" lang="${l}" dir="${shared.LANG_META[l].dir}" class="underline underline-offset-4">${esc(shared.LANG_META[l].name)}</a></li>`,
    )
    .join("");

  const seeAlsoHtml = seeAlso.length
    ? `<p class="mt-6 text-base leading-relaxed"><span class="font-semibold">${esc(shared.SEE_ALSO_LABEL[lang])}:</span> ${seeAlso
        .map((slug) => `<a href="${postPathFor(slug, lang)}" class="text-copper underline underline-offset-4">${esc(titleOf(slug))}</a>`)
        .join(" · ")}</p>`
    : "";

  const jump = `<nav aria-label="${esc(`${shared.JUMP_LABEL[lang]}: ${copy.listHeading}`)}" class="mt-5"><ol class="flex flex-wrap gap-2 text-sm">${copy.items
    .map(
      (item, i) =>
        `<li><a href="#item-${i + 1}" class="jump-chip inline-flex min-h-11 items-center gap-2 rounded-full px-4"><span class="font-semibold text-copper tabular-nums" aria-hidden="true">${i + 1}</span><span>${esc(item.name)}</span></a></li>`,
    )
    .join("")}</ol></nav>`;

  const items = `<ol class="mt-6 space-y-6">${copy.items
    .map(
      (item, i) =>
        `<li id="item-${i + 1}" class="card-lift scroll-mt-24 rounded-2xl border border-line bg-ink-2 p-5 sm:p-6"><h3 class="flex items-baseline gap-3 font-display text-2xl"><span class="mark-badge grid size-9 shrink-0 place-items-center bg-ink text-base text-copper-2 tabular-nums" aria-hidden="true">${i + 1}</span><span>${esc(item.name)}</span></h3><dl class="mt-4 space-y-3 text-base leading-relaxed">${[
          ["why", item.why],
          ["how", item.how],
          ["dose", item.dose],
        ]
          .map(
            ([key, text]) =>
              `<div><dt class="text-xs font-semibold tracking-widest text-copper uppercase">${esc(copy.labels[key])}</dt><dd class="mt-1">${cited(text, sourceLabel, rtl)}</dd></div>`,
          )
          .join("")}</dl></li>`,
    )
    .join("")}</ol>`;

  const sources = `<ol class="mt-4 space-y-3 text-sm leading-relaxed" lang="en" dir="ltr">${post.sources
    .map(
      (src, i) =>
        `<li id="source-${i + 1}" class="source-item scroll-mt-24"><span class="tabular-nums">[<!-- -->${i + 1}<!-- -->]</span> <!-- -->${esc(src.cite)}<!-- --> <a href="${esc(src.url)}" target="_blank" rel="noopener noreferrer" class="break-all text-copper underline underline-offset-2">${esc(src.url)}<span class="sr-only" lang="${lang}" dir="${dir}"> (${esc(newTab)})</span></a></li>`,
    )
    .join("")}</ol>`;

  const clusterHtml = clusterPosts.length
    ? `<nav aria-labelledby="cluster" class="mt-12 rounded-2xl border border-line bg-ink-2 p-5"><h2 id="cluster" class="font-display text-2xl">${esc(shared.CLUSTER_HEADING[lang])}</h2><ul class="mt-4 space-y-3">${clusterPosts
        .map((slug) =>
          slug === post.slug
            ? `<li><span aria-current="page" class="font-semibold">${esc(titleOf(slug))} <span class="text-sm font-normal text-mist">(${esc(shared.CLUSTER_HERE[lang])})</span></span></li>`
            : `<li><a href="${postPathFor(slug, lang)}" class="group inline-flex items-start gap-2 text-base font-semibold underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper"><span>${esc(titleOf(slug))}${slug === shared.HYBRID_HUB ? `<span class="text-sm font-normal text-mist"> (${esc(shared.CLUSTER_HUB_TAG[lang])})</span>` : ""}</span>${ARROW("mt-1 size-4 shrink-0 rtl:-scale-x-100")}</a></li>`,
        )
        .join("")}</ul></nav>`
    : "";

  const relatedHtml = related.length
    ? `<nav aria-labelledby="related" class="mt-12 border-t border-line pt-8"><h2 id="related" class="font-display text-2xl">${esc(shared.RELATED_LABEL[lang])}</h2><ul class="mt-4 space-y-3">${related
        .map(
          (slug) =>
            `<li><a href="${postPathFor(slug, lang)}" class="group inline-flex items-start gap-2 text-lg font-semibold underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper"><span>${esc(titleOf(slug))}</span>${ARROW("mt-1 size-4 shrink-0 rtl:-scale-x-100")}</a></li>`,
        )
        .join("")}</ul><p class="mt-6"><a href="${blogPath}" class="btn-light inline-flex min-h-11 items-center gap-1 rounded-full px-5 text-sm font-semibold">${esc(s.blogLabel)}${ARROW("size-4 rtl:-scale-x-100")}</a></p></nav>`
    : "";

  const article = `<article class="shell band max-w-3xl text-start"><nav aria-label="Breadcrumb" class="text-sm text-mist"><ol class="flex flex-wrap items-center gap-2"><li><a href="/" class="underline-offset-4 hover:underline">${esc(s.homeLabel)}</a></li><li aria-hidden="true">/</li><li><a href="${blogPath}" class="underline-offset-4 hover:underline">${esc(s.blogLabel)}</a></li><li aria-hidden="true">/</li><li aria-current="page" class="text-ink">${esc(copy.labels.crumb)}</li></ol></nav><p class="eyebrow mt-8 text-xs font-semibold tracking-widest text-copper uppercase">${esc(s.blogLabel)}</p><h1 class="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">${esc(copy.h1)}</h1><p class="mt-5 text-lg leading-relaxed text-mist">${esc(copy.dek)}</p><p class="mt-4 text-sm text-mist"><span>${esc(s.byline)}</span> <time dateTime="${post.modified}">${esc(copy.updated)}</time></p><nav aria-label="${esc(copy.labels.readIn)}" class="mt-5 rounded-2xl border border-line bg-ink-2 p-4 text-sm"><p class="font-medium">${esc(copy.labels.readIn)}</p><ul class="mt-2 flex flex-wrap gap-x-4 gap-y-2">${langNav}</ul></nav><div class="prose-links mt-8 space-y-4 text-base leading-relaxed sm:text-lg">${copy.intro.map((l) => `<p>${cited(l, sourceLabel, rtl)}</p>`).join("")}</div>${seeAlsoHtml}<h2 class="mt-12 font-display text-3xl">${esc(copy.listHeading)}</h2>${jump}${items}${post.ctaMid ? coached : ""}<h2 class="mt-12 font-display text-3xl">${esc(copy.enoughHeading)}</h2><div class="mt-4 space-y-4 text-base leading-relaxed sm:text-lg">${copy.enough.map((l) => `<p>${cited(l, sourceLabel, rtl)}</p>`).join("")}</div><h2 class="mt-12 font-display text-3xl">${esc(copy.sampleHeading)}</h2><div class="mt-4 rounded-2xl border-2 border-dashed border-copper/60 p-5"><p class="text-sm font-semibold text-copper">${esc(copy.sampleLabel)}</p><ul class="list-mark mt-3 list-disc space-y-2 ps-5 text-base leading-relaxed">${copy.sample.map((l) => `<li>${esc(l)}</li>`).join("")}</ul></div>${post.ctaMid ? "" : coached}<h2 class="mt-12 font-display text-2xl">${esc(copy.safetyHeading)}</h2><p class="note-safety mt-3 text-base leading-relaxed text-mist">${cited(copy.safety, sourceLabel, rtl)}</p><p class="mt-6 text-sm leading-relaxed text-mist">${bidi(copy.credentialsNote, rtl)}</p><h2 class="mt-12 font-display text-2xl">${esc(copy.labels.sources)}</h2>${sources}${clusterHtml}${relatedHtml}</article>`;

  const skip = `<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bone">${esc(s.skip)}</a>`;
  const prefix = s.prefix
    .replace(/<html lang="[^"]*" dir="[^"]*">/, `<html lang="${lang}" dir="${dir}">`)
    .replace('<script async=""', `<link rel="stylesheet" href="${ctx.extraCssHref}" data-precedence="default"/><script async=""`);
  return (
    prefix +
    postHeadTags(T, post, lang) +
    s.gtag +
    postJsonLd(T, post, lang, ctx.entities) +
    s.style +
    `</head><body><!--$--><div class="min-h-screen bg-bone text-ink" lang="${lang}" dir="${dir}">` +
    skip +
    s.header +
    `<main id="main">` +
    article +
    `</main>` +
    s.footer +
    `</div><!--/$--></body></html>`
  );
}

/* --------------------------------------------------------------- blog index */

export function renderIndex(T, posts, lang, ctx) {
  const shared = T.shared;
  let html = T.index[lang];
  // "Also in:" and "Read the list" labels come from the card that is already there.
  const sampleCard = html.match(/<span class="text-mist">([^<]*)<!-- --> <\/span>/);
  const readLabel = html.match(/aria-label="([^"]*?): [^"]*" class="btn mt-5/);
  if (!sampleCard || !readLabel) throw new Error(`index ${lang}: card labels not found`);
  const alsoIn = unesc(sampleCard[1]);
  const read = unesc(readLabel[1]);
  const cards = ctx.newOrder
    .map((slug) => {
      const post = posts[slug];
      const copy = post.copy[lang];
      const path = postPathFor(slug, lang);
      const others = T.langs
        .filter((l) => l !== lang)
        .map((l, i) => {
          const a = `<a href="${postPathFor(slug, l)}" hrefLang="${l}" lang="${l}" dir="${shared.LANG_META[l].dir}" class="underline underline-offset-4">${esc(shared.LANG_META[l].name)}</a>`;
          return i === 0 ? `<span>${a}</span>` : `<span> · ${a}</span>`;
        })
        .join("");
      return `<li class="card-lift rounded-2xl border border-line bg-ink-2 p-5 sm:p-6"><p class="text-sm text-mist"><time dateTime="${post.modified}">${esc(copy.updated)}</time></p><h3 class="mt-2 font-display text-2xl"><a href="${path}" class="underline-offset-4 hover:underline">${esc(copy.h1)}</a></h3><p class="mt-2 leading-relaxed text-mist">${esc(copy.dek)}</p><p class="mt-4 text-sm"><span class="text-mist">${esc(alsoIn)}<!-- --> </span>${others}</p><a href="${path}" aria-label="${esc(read)}: ${esc(copy.h1)}" class="btn mt-5 inline-flex min-h-11 items-center gap-1 rounded-full px-5 text-sm font-semibold">${esc(read)}${ARROW("size-4 rtl:-scale-x-100")}</a></li>`;
    })
    .join("");
  const marker = '<ul class="mt-10 space-y-4">';
  if (!html.includes(marker)) throw new Error(`index ${lang}: list marker not found`);
  html = html.replace(marker, marker + cards);
  html = html.replace(
    '<script async=""',
    `<link rel="stylesheet" href="${ctx.extraCssHref}" data-precedence="default"/><script async=""`,
  );
  // The zip's index description lists only its 6 posts and runs past 160 characters: swap in a short, current one
  // (meta, Open Graph and Twitter all carry the same text). INDEX_TITLE shortens an over-long <title> where set.
  const swapAll = (from, to) => (from && to ? html.split(from).join(to) : html);
  const oldDesc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  html = swapAll(oldDesc, esc(shared.INDEX_DESCRIPTION?.[lang]));
  const oldTitle = html.match(/<title>([^<]*)<\/title>/)?.[1];
  html = swapAll(oldTitle, shared.INDEX_TITLE?.[lang] && esc(shared.INDEX_TITLE[lang]));
  // Blog JSON-LD: add the new posts to blogPost, newest first.
  html = html.replace(/<script type="application\/ld\+json">(\{"@context":"https:\/\/schema\.org","@type":"Blog"[\s\S]*?)<\/script>/, (_, body) => {
    const ld = JSON.parse(body);
    const added = ctx.newOrder.map((slug) => ({
      "@type": "BlogPosting",
      headline: posts[slug].copy[lang].h1,
      description: posts[slug].copy[lang].metaDescription,
      url: abs(postPathFor(slug, lang)),
      inLanguage: lang,
      datePublished: posts[slug].published,
      dateModified: posts[slug].modified,
    }));
    ld.blogPost = [...added, ...ld.blogPost];
    return `<script type="application/ld+json">${ldJson(ld)}</script>`;
  });
  return html;
}

/* ----------------------------------------------------- fat-loss page, sitemap */

/** "Read next" on the fat-loss page: the type 2 diabetes and beginners posts first, then the newest posts outside the race cluster, five in all. */
export function renderFatLoss(T, posts, ctx) {
  const lang = "en";
  const first = ["best-strength-exercises-for-type-2-diabetes", "best-strength-and-conditioning-exercises-for-beginners"];
  const rest = ctx.order.filter((s) => !first.includes(s) && !T.shared.HYBRID_CLUSTER.includes(s));
  const picks = [...first, ...rest].slice(0, 5);
  const li = (slug) =>
    `<li><a href="${postPathFor(slug, lang)}" class="inline-flex items-start gap-2 text-lg font-semibold underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper"><span>${esc(brief(T, posts, slug, lang).h1)}</span>${ARROW("mt-1 size-4 shrink-0 rtl:-scale-x-100")}</a></li>`;
  const re = /(<nav aria-labelledby="read"[^>]*><h2 id="read"[^>]*>[^<]*<\/h2><ul class="mt-4 space-y-3">)[\s\S]*?(<\/ul><\/nav>)/;
  if (!re.test(T.fatLoss)) throw new Error("fat-loss page: Read next list not found");
  return T.fatLoss
    .replace(re, (_, a, b) => a + picks.map(li).join("") + b)
    .replace('<script async=""', `<link rel="stylesheet" href="${ctx.extraCssHref}" data-precedence="default"/><script async=""`);
}

export function renderSitemap(T, posts, ctx) {
  let xml = T.sitemap;
  const latest = ctx.newOrder.map((s) => posts[s].modified).sort().pop();
  const url = (slug) => {
    const post = posts[slug];
    return T.langs
      .map((lang) => {
        const alts = [
          ...T.langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(postPathFor(slug, l))}"/>`),
          `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(postPathFor(slug, "en"))}"/>`,
        ].join("");
        return `  <url><loc>${abs(postPathFor(slug, lang))}</loc><lastmod>${post.modified}</lastmod>${alts}</url>\n`;
      })
      .join("");
  };
  // The blog indexes and the fat-loss page changed: bump their lastmod.
  const touch = [abs("/personal-trainer-for-fat-loss"), ...T.langs.map((l) => abs(blogIndexPathFor(l)))];
  for (const loc of touch) {
    const re = new RegExp(`(<loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc><lastmod>)[^<]*(</lastmod>)`);
    if (!re.test(xml)) throw new Error(`sitemap: ${loc} not found`);
    xml = xml.replace(re, `$1${latest}$2`);
  }
  return xml.replace("</urlset>", ctx.newOrder.map(url).join("") + "</urlset>");
}

/* --------------------------------------------------------------------- main */

export const EXTRA_CSS = () => read("blog-extra.css");

async function main() {
  const T = loadTemplate();
  const posts = loadPosts(T);
  const order = json("data/order.json");
  const newOrder = order.filter((s) => posts[s]);
  for (const s of order) if (!posts[s] && !T.old[s]) throw new Error(`${s}: in order.json but neither exported nor in the template`);
  const css = EXTRA_CSS();
  const hash = createHash("sha256").update(css).digest("hex").slice(0, 8);
  const extraCssName = `blog-extra-${hash}.css`;
  // Landing pages that exist on the live site (from its sitemap). A post's optional "program page" link is dropped when its target is not one of them.
  const sitePaths = new Set([...T.sitemap.matchAll(/<loc>https:\/\/onlinefitnessworldwide\.com(\/[^<]*)<\/loc>/g)].map((m) => m[1]));
  const ctx = { order, newOrder, sitePaths, entities: entityLd(T), extraCssHref: `/assets/${extraCssName}` };

  const out = join(here, "../../cpanel-overlay");
  rmSync(out, { recursive: true, force: true });
  const put = (rel, content) => {
    const file = join(out, rel);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, content);
  };

  put(`assets/${extraCssName}`, css);
  let pages = 0;
  for (const slug of newOrder) {
    for (const lang of T.langs) {
      const html = renderPost(T, posts, posts[slug], lang, ctx);
      const hit = html.match(FORBIDDEN);
      if (hit) throw new Error(`${postPathFor(slug, lang)}: contains "${hit[0]}"`);
      put(`${postPathFor(slug, lang).slice(1)}/index.html`, html);
      pages++;
    }
  }
  for (const lang of T.langs) put(`${blogIndexPathFor(lang).slice(1)}/index.html`, renderIndex(T, posts, lang, ctx));
  put("personal-trainer-for-fat-loss/index.html", renderFatLoss(T, posts, ctx));
  put("sitemap.xml", renderSitemap(T, posts, ctx));
  console.log(`${newOrder.length} posts x ${T.langs.length} languages = ${pages} post pages, ${T.langs.length} blog indexes, fat-loss page, sitemap, ${extraCssName}`);
  console.log(`Wrote ${out}`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) await main();
