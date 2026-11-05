# Blog generator for the cPanel site

Renders the long-form blog posts as static HTML in the design of the cPanel upload zip
(`cpanel/online-fitness-worldwide-cpanel.zip` on `cpanel-white-theme`, commit b34b305: black, white and logo blue).

## Why this exists

The cPanel site is a prerendered static site. The git source on `cpanel-white-theme` is still the older app: the black/white/blue
theme and the six blog posts exist only inside the zip, as built HTML and CSS. So the posts can't be added to a source tree.
This generator writes the same kind of pages directly and leaves the zip's own files alone.

- 6 posts already in the zip stay exactly as they are: cool-down, strength and conditioning for beginners, warm-up, women over 40,
  getting back after a long break, desk workers.
- 16 new posts × 7 languages (en, ar RTL, hi, es, zh, ja, gu) = **112 new pages**, written to `cpanel-overlay/`.
- The 7 blog indexes list all 22 posts (new first, the 6 existing cards unchanged), with the new posts added to their JSON-LD.
- `sitemap.xml` has 163 URLs (51 before, plus 112), each with reciprocal `hreflang` and `x-default`.
- The fat-loss page's "Read next" shows five posts: the type 2 diabetes post, the beginners post, then the newest posts outside the race cluster.

Every URL is `https://onlinefitnessworldwide.com/...` with no trailing slash (canonical, hreflang, Open Graph URL, JSON-LD, sitemap).

## Build

Needs Node 18 or newer. `build.mjs` has no dependencies.

```bash
cd tools/blog
node build.mjs        # writes ../../cpanel-overlay/
node verify.mjs       # checks every generated page
```

`data/` is now the source of truth. It carries the physio safety pass (November 2026) and the Online Fitness Worldwide brand in all 7 languages, which the TypeScript sources on `grokbot/seo-theme-blog` do not have. Edit `data/posts/*.json` directly. Re-exporting would overwrite those edits, so only do it after the same changes are made in the `.ts` sources (needs `npm install` once, for esbuild):

```bash
npm install
node export-posts.mjs --src /path/to/repo/src/content/blog   # from branch grokbot/seo-theme-blog
```

If the zip's design changes (new CSS, header, footer, a new blog index), refresh `template/` from the current zip, then rebuild:

```bash
mkdir /tmp/zip && cd /tmp/zip && unzip /path/to/online-fitness-worldwide-cpanel.zip
for l in ar hi es zh ja gu; do cp $l/blog/index.html            <repo>/tools/blog/template/index/$l.html
                                cp $l/blog/best-exercises-for-desk-workers/index.html <repo>/tools/blog/template/sample/$l.html; done
cp blog/index.html <repo>/tools/blog/template/index/en.html
cp blog/best-exercises-for-desk-workers/index.html <repo>/tools/blog/template/sample/en.html
cp personal-trainer-for-fat-loss/index.html sitemap.xml <repo>/tools/blog/template/   # sitemap.xml next to the folder, not inside it
```

## Put it on the site (cPanel `public_html`)

Nothing here deploys anything. To publish:

1. Restore and extract the zip from `cpanel-white-theme` into `public_html` as usual
   (`node scripts/restore-binaries.mjs` writes it; the zip on this branch is the older one from `main`, so use the `cpanel-white-theme` zip).
2. Copy the **contents** of `cpanel-overlay/` over `public_html`, replacing files when asked.
   It adds `assets/blog-extra-<hash>.css`, the 112 post pages, and replaces the 7 blog indexes, `personal-trainer-for-fat-loss/index.html` and `sitemap.xml`.
   It touches none of the six existing posts or any other file. The existing `.htaccess` already serves each folder's `index.html` at its slash-less URL.

## What is in this folder

| File | What it is |
| --- | --- |
| `build.mjs` | the generator |
| `verify.mjs` | per-page checks: title, description, h1, canonical = sitemap URL, 8 hreflang links, JSON-LD parses, citations and internal links resolve, no prices, no old brand or location, `dir="rtl"` on Arabic |
| `export-posts.mjs` | turns the TypeScript posts into `data/` (needs esbuild) |
| `data/` | the 16 posts (copy in 7 languages, sources), the post order, shared labels |
| `template/` | pages copied from the zip: 7 blog indexes, one existing post per language (head, header, footer, byline), the fat-loss page, `sitemap.xml` |
| `blog-extra.css` | the few rules the zip's compiled stylesheet lacks (jump chips, highlighted source, "Before you start" rule, `font-normal`) in the zip's blue |
| `existing-posts.json` | the 6 posts that are already in the zip and are not re-rendered |

## Copy rules applied while rendering

The posts were written under the old "Jalan PT, Pune" brand. The generator rewrites that for the new site:
"Jalan PT" becomes "Online Fitness Worldwide", the "From Pune." sentence is dropped in all 7 languages, and the byline is the zip's own.
The build stops if "Jalan PT", "Pune" or its translations remain in any page. Program facts are unchanged: Iron Hour 60 min 1:1,
Lean Reset 20 sessions a month 1:1, Return 45 min with 12 alternate-day sessions a month, Open Floor small group,
Consultation 30 min (not training). No prices. ASCA Level 1 and ACE are named with "neither body endorses this business or this article".
