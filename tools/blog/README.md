# Blog generator for the cPanel site

> **Active branch: grokbot/blog-on-latest**. All ongoing edits and pushes belong here only. Do not push to `main`, the fork or `grokbot/seo-theme-blog`.

Renders the long-form blog posts as static HTML in the design of the cPanel upload zip
(`cpanel/online-fitness-worldwide-cpanel.zip` on `cpanel-white-theme`, commit b34b305: black, white and logo blue).

## Why this exists

The cPanel site is a prerendered static site. The git source on `cpanel-white-theme` is still the older app: the black/white/blue
theme and the six blog posts exist only inside the zip, as built HTML and CSS. So the posts can't be added to a source tree.
This generator writes the same kind of pages directly and leaves the zip's own files alone.

- 6 posts already in the zip stay exactly as they are: cool-down, strength and conditioning for beginners, warm-up, women over 40,
  getting back after a long break, desk workers.
- 19 new posts × 7 languages (en, ar RTL, hi, es, zh, ja, gu) = **133 new pages**, written to `cpanel-overlay/`.
- The 7 blog indexes list all 25 posts (new first, the 6 existing cards unchanged), with the new posts added to their JSON-LD.
- `sitemap.xml` has 184 URLs (51 before, plus 133), each with reciprocal `hreflang` and `x-default`.
- "More from the blog" on each post lists the 6 posts published just before it (then the nearest newer ones), skipping its race cluster and its "See also" posts. It is anchored to the post's own place in `data/order.json`, so adding a new post at the top changes only the new pages, the indexes, the fat-loss page and the sitemap, not every older post.
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

### Historical export command — do not run for ongoing work

The command below describes the initial migration only. Import a new post individually and apply the safety and brand edits in `data/`; never re-export the other posts.

```bash
npm install
node export-posts.mjs --src /path/to/repo/src/content/blog   # HISTORICAL ONLY: from branch grokbot/seo-theme-blog
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
   It adds `assets/blog-extra-<hash>.css`, the 133 post pages, and replaces the 7 blog indexes, `personal-trainer-for-fat-loss/index.html` and `sitemap.xml`.
   It touches none of the six existing posts or any other file. The existing `.htaccess` already serves each folder's `index.html` at its slash-less URL.

## What is in this folder

| File | What it is |
| --- | --- |
| `build.mjs` | the generator |
| `verify.mjs` | per-page checks: title, description, h1, canonical = sitemap URL, 8 hreflang links, JSON-LD parses, citations and internal links resolve, no prices, no old brand or location, `dir="rtl"` on Arabic |
| `export-posts.mjs` | turns the TypeScript posts into `data/` (needs esbuild) |
| `data/` | the 19 posts (copy in 7 languages, sources), the post order, shared labels |
| `template/` | pages copied from the zip: 7 blog indexes, one existing post per language (head, header, footer, byline), the fat-loss page, `sitemap.xml` |
| `blog-extra.css` | the few rules the zip's compiled stylesheet lacks (jump chips, highlighted source, "Before you start" rule, `font-normal`) in the zip's blue |
| `existing-posts.json` | the 6 posts that are already in the zip and are not re-rendered |

## Copy rules applied while rendering

The posts were written under the old "Jalan PT, Pune" brand. The generator rewrites that for the new site:
"Jalan PT" becomes "Online Fitness Worldwide", the "From Pune." sentence is dropped in all 7 languages, and the byline is the zip's own.
The build stops if "Jalan PT", "Pune" or its translations remain in any page. Program facts are unchanged: Iron Hour 60 min 1:1,
Lean Reset 20 sessions a month 1:1, Return 45 min with 12 alternate-day sessions a month, Open Floor small group,
Consultation 30 min (not training). No prices. ASCA Level 1 and ACE are named with "neither body endorses this business or this article".

## Bone-density import (6 November 2026)

Imported only `boneDensityPost` from `src/content/blog/bone-density.ts` at `e78125e`; existing post JSON and shared labels were not re-exported. All 7 copies retain the 9 sources and supervised-clinic LIFTMOR caveat. Added 1–3 RIR, the existing traffic-light pain check, a conservative 16-step-up session cap with supported sit-to-stand regression, and zero jumps/jump-landings in the sample week. These sample caps are coaching choices, not universal research limits. Removed the nonexistent old landing-page link; the production programs CTA remains. Native-speaker review and a doctor/physio review are still needed before publication.

## Desk neck/shoulders import (7 November 2026)

Added `best-strength-exercises-for-desk-neck-and-shoulders` in 7 languages with 10 sources (WHO, NHS neck, NHS shoulder, Andersen 2008 MSSE office RCT, Andersen 2008 Arthritis Rheum trapezius myalgia, Cochrane Gross 2015 mechanical neck, Chen 2018 workplace meta-analysis, Andersen CH 2014 scapular function, ACSM progression, Riebe ACSM screening). Physio-safety: RIR 1–3, traffic-light pain check, raises capped near 90°, no overhead presses in the sample week, wall push-up plus before floor. Flag for physio/doctor review of neck/shoulder safety wording and translation review before publication. Complements the existing zip post on desk workers without replacing it.

## High blood pressure post (8 November 2026)

Added `best-strength-exercises-for-high-blood-pressure` in 7 languages with 9 sources (WHO 2020, NHS high blood pressure, Edwards 2023 BJSM network meta-analysis, Cornelissen & Smart 2013 JAHA, Pescatello 2019 MSSE umbrella review, Paluch 2024 AHA statement, 2024 ESC hypertension guidelines, ACSM progression, Riebe ACSM screening). Physio-safety: RIR 1–3 on dynamic moves, effort 5–7/10 on holds, traffic-light pain check, breathe out on the effort with no breath-holding, wall sit kept well short of 90° at first, no max lifts, heavy overhead pressing or sprints in the sample week, rise slowly after floor work (some BP medicines cause light-headedness on standing). The 3 to 4 × 30–60 s hold dose and the one-third grip effort are coaching choices, not trial protocols. The type 2 diabetes post now lists it under "See also". **Medical post: needs a doctor's review of the safety wording, plus native-speaker review, before publication.**
