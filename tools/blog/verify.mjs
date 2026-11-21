// Checks the generated output: one title/description/h1/canonical per page, canonical == sitemap URL, 8 hreflang links,
// JSON-LD parses, citations resolve, internal links resolve, no prices, no old brand or location, RTL on Arabic,
// header and breadcrumb <nav> labels and the footer blog button in the page language on non-English pages,
// FAQPage JSON-LD that mirrors the visible FAQ, <title> at most 78 characters, meta description at most 160, no English advice phrases (data-only rule) in the
// <article> of English posts or the <main> of the fat-loss page, no time-zone claim ("On IST" or a translation), and the ebook block: at most once per page,
// every Amazon link rel="sponsored nofollow noopener" target="_blank", no placeholder value from data/ebooks.json, no price or rating in the block,
// cover and sample PDF files present.
//   node verify.mjs [path to a merged public_html (zip contents + cpanel-overlay)]
// Without a path it checks cpanel-overlay alone and accepts links to the 6 posts that live only in the zip.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const overlay = join(here, "../../cpanel-overlay");
const root = process.argv[2] ?? overlay;
const ORIGIN = "https://onlinefitnessworldwide.com";
const existing = JSON.parse(readFileSync(join(here, "existing-posts.json"), "utf8"));
const walk = (d) => readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? walk(join(d, n)) : [join(d, n)]));

const sitemap = readFileSync(join(overlay, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
const problems = [];
// Data-only rule: posts report what named sources found and state; they give no advice, instructions or recommendations.
const ADVICE = /\b(you should|you can|you need|you must|try |aim for|we recommend|i recommend|recommend you|stop if|make sure|don't|do not lift|start with|start light|keep (1|it|your)|our take|best for you|consult your|talk to your|see your|ask your|get medical|i'm a coach|i coach)/i;
const bad = (page, msg) => problems.push(`${page}: ${msg}`);
// Copy scrub: "In Hindi or English. On IST." and its translations must not come back (same pattern as TIMEZONE_CLAIM in build.mjs).
const TIMEZONE_CLAIM = /\bIST\b|India Standard Time|Indian Standard Time|印度标准时间|インド標準時|भारतीय मानक समय|ભારતીય માનક સમય|توقيت الهند/;
// Ebook placeholders: every value of an ebook marked "placeholder", and any value containing PLACEHOLDER, must never reach a page.
const ebooksFile = join(here, "data/ebooks.json");
const ebookData = existsSync(ebooksFile) ? JSON.parse(readFileSync(ebooksFile, "utf8")) : { ebooks: {} };
const strings = (v) => (typeof v === "string" ? [v] : v && typeof v === "object" ? Object.values(v).flatMap(strings) : []);
const placeholderValues = Object.entries(ebookData.ebooks ?? {})
  .flatMap(([id, b]) => [...(b.placeholder ? [id] : []), ...strings({ t: b.title, d: b.description, a: b.amazonUrl, c: b.coverPath, p: b.samplePdfPath }).filter((v) => b.placeholder || /placeholder/i.test(v))])
  .filter((v) => v.trim().length >= 6);
let checked = 0;
const pages = walk(overlay).filter((f) => f.endsWith("index.html"));
for (const file of pages) {
  const rel = "/" + file.slice(overlay.length + 1).replace(/\/?index\.html$/, "");
  const url = rel === "/" ? ORIGIN + "/" : ORIGIN + rel;
  const h = readFileSync(file, "utf8");
  const count = (re) => (h.match(re) || []).length;
  checked++;
  if (count(/<title>/g) !== 1) bad(rel, "title count");
  if (count(/<meta name="description"/g) !== 1) bad(rel, "description count");
  if (count(/<h1[ >]/g) !== 1) bad(rel, "h1 count");
  const canon = h.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (canon !== url) bad(rel, `canonical ${canon} != ${url}`);
  if (canon && canon.length > ORIGIN.length + 1 && canon.endsWith("/")) bad(rel, "canonical has a trailing slash");
  if (!locs.includes(url)) bad(rel, "not in sitemap");
  const alt = [...h.matchAll(/<link rel="alternate" hrefLang="([^"]*)" href="([^"]*)"/g)];
  if (rel !== "/personal-trainer-for-fat-loss" && alt.length !== 8) bad(rel, `hreflang count ${alt.length}`);
  for (const [, , href] of alt) if (!locs.includes(href)) bad(rel, `hreflang target not in sitemap: ${href}`);
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      bad(rel, "JSON-LD does not parse");
    }
  }
  // FAQPage JSON-LD must mirror the visible FAQ: same number of questions, same question text, in order.
  const faqLd = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => { try { return JSON.parse(m[1]); } catch { return null; } }).find((o) => o?.["@type"] === "FAQPage");
  const faqVisible = [...h.matchAll(/<div id="faq-\d+" class="faq-item[^"]*"><h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => m[1].replace(/<[^>]+>/g, "").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"));
  if (rel.includes("/blog/") && (faqLd || faqVisible.length)) {
    const qs = (faqLd?.mainEntity ?? []).map((q) => q.name);
    if (qs.length !== faqVisible.length || qs.some((q, i) => q !== faqVisible[i])) bad(rel, "FAQPage JSON-LD does not match the visible FAQ");
    if ((faqLd?.mainEntity ?? []).some((q) => !q.acceptedAnswer?.text || /\{\d+\}/.test(q.acceptedAnswer.text))) bad(rel, "FAQPage answer missing or has a raw citation");
  }
  const lang = rel.match(/^\/(ar|hi|es|zh|ja|gu)(\/|$)/)?.[1] ?? "en";
  const tz = h.match(TIMEZONE_CLAIM);
  if (tz) bad(rel, `time-zone claim "${tz[0]}" (copy scrub)`);
  // Ebook block.
  const ebookBlocks = (h.match(/data-ebook-block=/g) || []).length;
  if (ebookBlocks > 1) bad(rel, `ebook block appears ${ebookBlocks} times`);
  if (ebookBlocks && !/<article[\s\S]*data-ebook-block=[\s\S]*<\/article>/.test(h)) bad(rel, "ebook block outside the article");
  for (const m of h.matchAll(/<a\b[^>]*\bhref="https?:\/\/(?:[a-z0-9-]+\.)*(?:amazon\.[a-z.]+|amzn\.[a-z]+)[\/"?][^>]*>/gi)) {
    const relTokens = (m[0].match(/\brel="([^"]*)"/)?.[1] ?? "").split(/\s+/);
    if (!relTokens.includes("sponsored")) bad(rel, "Amazon link without rel=sponsored");
    if (!relTokens.includes("nofollow") || !relTokens.includes("noopener") || !/\btarget="_blank"/.test(m[0])) bad(rel, "Amazon link without nofollow, noopener or target=_blank");
  }
  if (/placeholder/i.test(h.replace(/<style[\s\S]*?<\/style>/g, ""))) bad(rel, "PLACEHOLDER text in page");
  for (const v of placeholderValues) if (h.includes(v)) bad(rel, `placeholder ebook value in page: ${v.slice(0, 40)}`);
  const block = h.match(/<aside[^>]*data-ebook-block=[\s\S]*?<\/aside>/)?.[0];
  if (block) {
    const blockText = block.replace(/<[^>]+>/g, " ");
    if (/[$€£₹¥★☆]|\b(rating|ratings|rated|reviews?|stars?|bestseller|best-selling|price|free shipping)\b|\d(\.\d)? out of 5/i.test(blockText)) bad(rel, "price, rating or review wording in the ebook block");
    for (const m of block.matchAll(/(?:src|href)="(\/ebooks\/[^"]+)"/g)) if (!existsSync(join(root, m[1]))) bad(rel, `ebook file missing: ${m[1]}`);
  }
  if (!h.includes(`<html lang="${lang}" dir="${lang === "ar" ? "rtl" : "ltr"}">`)) bad(rel, "html lang/dir");
  if (/\{\d+\}/.test(h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ""))) bad(rel, "raw {n} citation");
  if (lang !== "en" && /<nav aria-label="(Site|Breadcrumb)"/.test(h)) bad(rel, "English nav aria-label on a non-English page");
  if (lang !== "en" && /<footer[\s\S]*?(href="\/blog"|>Read the blog<)[\s\S]*?<\/footer>/.test(h)) bad(rel, "footer blog button in English or pointing at the English blog");
  if (/aria-label="Online Fitness Worldwide, Online Fitness Worldwide:/.test(h)) bad(rel, "home-link aria-label repeats the brand");
  if (lang !== "en" && /<header[\s\S]*?>Programs<\/a>[\s\S]*?<\/header>/.test(h)) bad(rel, "header Programs link in English on a non-English page");
  if (/<header[\s\S]*?<\/header>/.test(h) && !/<header[\s\S]*?<a href="\/#programs"[^>]*>[^<]+<\/a>[\s\S]*?<\/header>/.test(h)) bad(rel, "header Programs link missing");
  // Logo <img>: width/height must match the file's ratio (1840 x 330), or the page shifts when it loads (fixLogoSize in build.mjs).
  const logos = h.match(/<img src="\/assets\/ofw-logo-[^"]*"[^>]*>/g) ?? [];
  if (logos.length < 2) bad(rel, `expected header and footer logo <img>, found ${logos.length}`);
  for (const img of logos) if (!img.includes('width="184" height="33"')) bad(rel, `logo <img> without width="184" height="33": ${img.slice(0, 90)}`);
  const title = h.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  if ([...title].length > 78) bad(rel, `title over 78 characters (${[...title].length})`);
  const desc = h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  if ([...desc.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&quot;/g, "'")].length > 160) bad(rel, "meta description over 160 characters");
  if (/Jalan PT|jalan-pt|Pune|पुणे|بونه|浦那|プネー|પુણે/.test(h)) bad(rel, "old brand or location");
  const text = h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ");
  if (/[₹€£]|\bRs\.?\s?\d|\bINR\b|\bUSD\b|\bAED\b|\$\s?\d|\d\s?(rupees|dollars)|\bper (session|month)\b.*\d{3,}/i.test(text)) bad(rel, "looks like a price");
  if (/<h1/.test(h) && rel.includes("/blog/")) {
    const cites = new Set([...h.matchAll(/href="#source-(\d+)"/g)].map((m) => m[1]));
    for (const n of cites) if (!h.includes(`id="source-${n}"`)) bad(rel, `citation ${n} has no source`);
    const jumps = [...h.matchAll(/href="#(item-\d+)"/g)].map((m) => m[1]);
    for (const id of jumps) if (!h.includes(`id="${id}"`)) bad(rel, `jump target ${id} missing`);
  }
  const scope = lang === "en" && (rel.startsWith("/blog/") ? h.match(/<article[\s\S]*?<\/article>/)?.[0] : rel === "/personal-trainer-for-fat-loss" ? h.match(/<main[\s\S]*?<\/main>/)?.[0] : null);
  if (scope) {
    // Skip the source list (cited titles are quoted as published) and link text (titles of other pages).
    const prose = scope.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<li id="source-\d+"[\s\S]*?<\/li>/g, " ").replace(/<a [\s\S]*?<\/a>/g, " ").replace(/<[^>]+>/g, " ").replace(/&#x27;|&#39;|&rsquo;/g, "'");
    const hit = prose.match(ADVICE);
    if (hit) bad(rel, `advice phrase "${hit[0]}"`);
  }
  for (const m of h.matchAll(/<a [^>]*href="(\/[^"#?]*)/g)) {
    const p = m[1];
    if (existing.includes(p.split("/").pop()) && /\/blog\//.test(p)) continue; // already in the zip, not in this folder
    if (p === "/" || p.startsWith("/assets/") || p.startsWith("/__grok") || p.startsWith("/ebooks/")) continue; // ebook files: checked with the block
    const dir = p.replace(/\/$/, "");
    if (!existsSync(join(root, dir, "index.html"))) bad(rel, `broken internal link ${p}`);
  }
}
if (problems.length) {
  console.log(problems.slice(0, 60).join("\n"));
  console.log(`${problems.length} problem(s) in ${checked} pages`);
  process.exit(1);
}
console.log(`OK: ${checked} pages, ${locs.length} sitemap URLs`);
