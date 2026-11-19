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
- 30 new posts × 7 languages (en, ar RTL, hi, es, zh, ja, gu) = **210 new pages**, written to `cpanel-overlay/`.
- The 7 blog indexes list all 36 posts (new first, the 6 existing cards unchanged), with the new posts added to their JSON-LD. Their meta/Open Graph/Twitter description is replaced with a short, current one from `INDEX_DESCRIPTION` in `data/shared.json` (the zip's lists only its 6 posts and runs past 160 characters); `INDEX_TITLE` shortens an over-long `<title>` (Spanish). `BREADCRUMB_LABEL` gives the breadcrumb `<nav>` an `aria-label` in the page language on the indexes and on every generated post (the zip's template says "Breadcrumb" in all languages). `SITE_NAV_LABEL` does the same for the header `<nav>` (the zip says "Site" in all languages); `verify.mjs` fails if a non-English page still carries either English label. `FOOTER_BLOG_LABEL` localises the footer "Read the blog" button and points it at the page language's blog index (the zip's button is English and links to `/blog` in every language); `verify.mjs` fails on an English footer button on a non-English page, a `<title>` over 78 characters or a meta description over 160. `localizeHeader` (in `build.mjs`) fixes two header issues from the zip on every generated page, the indexes and the fat-loss page: the logo link's `aria-label` said the brand twice ("Online Fitness Worldwide, Online Fitness Worldwide: Home") and now says it once; on non-English pages the "Programs" link (English, `lang="en"`) uses `PROGRAMS_LABEL` in the page language, with `hreflang="en"` because it still points at the English home section (`/#programs`; there are no language homes). `verify.mjs` fails on a repeated brand in that label, an English "Programs" link on a non-English page, or a missing Programs link.
- `sitemap.xml` has 261 URLs (51 before, plus 210), each with reciprocal `hreflang` and `x-default`.
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
   It adds `assets/blog-extra-<hash>.css`, the 210 post pages, and replaces the 7 blog indexes, `personal-trainer-for-fat-loss/index.html` and `sitemap.xml`.
   It touches none of the six existing posts or any other file. The existing `.htaccess` already serves each folder's `index.html` at its slash-less URL.

## What is in this folder

| File | What it is |
| --- | --- |
| `build.mjs` | the generator |
| `verify.mjs` | per-page checks: title, description, h1, canonical = sitemap URL, 8 hreflang links, JSON-LD parses, citations and internal links resolve, no prices, no old brand or location, `dir="rtl"` on Arabic |
| `export-posts.mjs` | turns the TypeScript posts into `data/` (needs esbuild) |
| `data/` | the 30 posts (copy in 7 languages, sources), the post order, shared labels |
| `template/` | pages copied from the zip: 7 blog indexes, one existing post per language (head, header, footer, byline), the fat-loss page, `sitemap.xml` |
| `blog-extra.css` | the few rules the zip's compiled stylesheet lacks (jump chips, highlighted source, "Before you start" rule, `font-normal`) in the zip's blue |
| `existing-posts.json` | the 6 posts that are already in the zip and are not re-rendered |

## Copy rules applied while rendering

The generator still strips leftover copy from the retired brand if it appears in post data: it substitutes Online Fitness Worldwide for the old business name, drops the old city sentence in all 7 languages, and keeps the zip's own byline.
The build stops if the retired brand name, the old city, or that city's name in the other six languages remains in any page. Program facts are unchanged: Iron Hour 60 min 1:1,
Lean Reset 20 sessions a month 1:1, Return 45 min with 12 alternate-day sessions a month, Open Floor small group,
Consultation 30 min (not training). No prices. ASCA Level 1 and ACE are named with "neither body endorses this business or this article".

## Bone-density import (6 November 2026)

Imported only `boneDensityPost` from `src/content/blog/bone-density.ts` at `e78125e`; existing post JSON and shared labels were not re-exported. All 7 copies retain the 9 sources and supervised-clinic LIFTMOR caveat. Added 1–3 RIR, the existing traffic-light pain check, a conservative 16-step-up session cap with supported sit-to-stand regression, and zero jumps/jump-landings in the sample week. These sample caps are coaching choices, not universal research limits. Removed the nonexistent old landing-page link; the production programs CTA remains. Native-speaker review and a doctor/physio review are still needed before publication.

## Desk neck/shoulders import (7 November 2026)

Added `best-strength-exercises-for-desk-neck-and-shoulders` in 7 languages with 10 sources (WHO, NHS neck, NHS shoulder, Andersen 2008 MSSE office RCT, Andersen 2008 Arthritis Rheum trapezius myalgia, Cochrane Gross 2015 mechanical neck, Chen 2018 workplace meta-analysis, Andersen CH 2014 scapular function, ACSM progression, Riebe ACSM screening). Physio-safety: RIR 1–3, traffic-light pain check, raises capped near 90°, no overhead presses in the sample week, wall push-up plus before floor. Flag for physio/doctor review of neck/shoulder safety wording and translation review before publication. Complements the existing zip post on desk workers without replacing it.

## High blood pressure post (8 November 2026)

Added `best-strength-exercises-for-high-blood-pressure` in 7 languages with 9 sources (WHO 2020, NHS high blood pressure, Edwards 2023 BJSM network meta-analysis, Cornelissen & Smart 2013 JAHA, Pescatello 2019 MSSE umbrella review, Paluch 2024 AHA statement, 2024 ESC hypertension guidelines, ACSM progression, Riebe ACSM screening). Physio-safety: RIR 1–3 on dynamic moves, effort 5–7/10 on holds, traffic-light pain check, breathe out on the effort with no breath-holding, wall sit kept well short of 90° at first, no max lifts, heavy overhead pressing or sprints in the sample week, rise slowly after floor work (some BP medicines cause light-headedness on standing). The 3 to 4 × 30–60 s hold dose and the one-third grip effort are coaching choices, not trial protocols. The type 2 diabetes post now lists it under "See also". **Medical post: needs a doctor's review of the safety wording, plus native-speaker review, before publication.**

## Mood, stress and sleep post (10 November 2026)

Added `best-strength-exercises-for-mood-stress-and-sleep` in 7 languages with 10 sources (WHO 2020, NHS Exercise for depression, NICE NG222, Gordon 2018 JAMA Psychiatry depressive symptoms meta-analysis, Gordon 2017 Sports Med anxiety meta-analysis, Noetel 2024 BMJ network meta-analysis, Kovacevic 2018 Sleep Med Rev, Tele MANAS (Government of India helpline), ACSM progression, Riebe ACSM screening). Physio-safety: RIR 1–3, traffic-light pain check, load cap (no maximal lifts, no failure, sessions under about 45 minutes), regressions on every move, rise slowly after floor work. Copy states the limits of the evidence (blinded trials smaller effects; BMJ confidence low to very low; sleep self-reported only) and that exercise sits alongside, not instead of, therapy and medicine; crisis line: local emergency number (112 in India) or Tele-MANAS 14416 / 1-800-891-4416. Time-of-day advice is labelled a coaching call. **Mental-health post: needs review by a doctor or mental-health professional, plus native-speaker review, before publication.**

## Menopause post (11 November 2026)

Added `best-strength-exercises-for-menopause` in 7 languages with 10 sources (WHO 2020, NHS menopause and perimenopause "things you can do", NICE NG23, Berin 2019 Maturitas hot-flush RCT, Cochrane Daley 2014 exercise for vasomotor symptoms, González-Gálvez 2024 Climacteric meta-analysis, Brooke-Wavell 2022 BJSM osteoporosis consensus, Cochrane Dumoulin 2018 pelvic floor muscle training, ACSM progression, Riebe ACSM screening). Copy says plainly that the hot-flush evidence is one small trial against a Cochrane review that found insufficient evidence, and that NICE offers HRT and menopause-specific CBT for hot flushes. Physio-safety: RIR 1–3, traffic-light pain check, hinge with a long spine and no loaded deep forward bends, impact capped at 2 × 10 heel drops (skipped with osteoporosis or a past fracture until a physio okays them; a coaching choice, not a research limit), regressions on every move, pelvic floor red flags (worsening leaks, heaviness, a bulge). The Arabic copy addresses the reader in the feminine, including this post's screening paragraph, programme lines and sample label. **Medical post: needs a doctor's or women's-health physio's review, plus native-speaker review, before publication.**

## Knee and hip osteoarthritis post (12 November 2026)

Added `best-strength-exercises-for-knee-and-hip-osteoarthritis` in 7 languages with 10 sources (WHO 2020, NHS osteoarthritis treatment, NICE NG226, Cochrane Fransen 2015 exercise for knee OA, Cochrane Fransen 2014 exercise for hip OA, Skou & Roos 2017 GLA:D registry, Juhl 2014 Arthritis Rheumatol exercise type and dose meta-regression, OARSI 2019 Bannuru, ACSM progression, Riebe ACSM screening). Copy states the limits: the hip evidence is smaller than the knee evidence, and the GLA:D figures are a before-and-after registry with no control group. Physio-safety: RIR 1–3, an explicit traffic-light pain check (0–2 green, 3–5 amber if settled by next morning, above 5 or worse next morning red; labelled a coaching rule of thumb, with NICE's note that pain may rise when starting exercise), no running or jumping and step height capped at a normal stair (a coaching choice, not a research limit), regressions on every move, "check with your doctor or physio before you start" in the intro, red flags (hot, red, swollen joint, especially with fever; pain after a fall; can't bear weight; locking or giving way) and joint replacement/surgery first-plan rule. **Medical post: needs a doctor's or physio's review, plus native-speaker review, before publication.**

## Fat loss post (13 November 2026)

Added `best-strength-exercises-for-fat-loss` in 7 languages with 10 sources (WHO 2020, NHS overweight and obesity in adults, NICE NG246 physical activity and diet, Cochrane Shaw 2006 exercise for overweight or obesity, Wewege 2022 Sports Med resistance training and body fat meta-analysis, Willis 2012 J Appl Physiol STRRIDE AT/RT, Donnelly 2009 ACSM weight-loss position stand, Villareal 2017 NEJM dieting obese older adults, ACSM progression, Riebe ACSM screening). Copy is plain that fat loss needs an energy deficit, that strength training alone gives small fat loss, that aerobic work cuts more weight, and that lifting protects lean mass. Physio-safety: RIR 1–3, traffic-light pain check (labelled a coaching rule of thumb), no jumping or running and no maximal lifts in the sample week (a coaching choice, not a research limit), regressions on every move, NHS "see a GP" list and weight-loss medicines line, coach not doctor or dietitian. The fat-loss page's "Read next" now includes it. **Health-related post: a doctor's or physio's review of the safety wording, plus native-speaker review, is recommended before publication.**

## PCOS post (14 November 2026)

Added `best-strength-exercises-for-pcos` in 7 languages with 10 sources (WHO 2020, NHS PMOS page (previously PCOS), Teede 2023 international PCOS guideline, Teede 2026 Lancet name-change consensus, Cochrane Lim 2019 lifestyle changes in PCOS, Kite 2019 Syst Rev exercise meta-analysis, Sabag 2024 ESSA position statement, Kogure 2016 MSSE resistance training, ACSM progression, Riebe ACSM screening). Copy explains the May 2026 rename to polyendocrine metabolic ovarian syndrome (PMOS), says lifting does not cure PCOS, that exercise effects are modest and low-certainty, that no trial measured live birth or period regularity, and that the one resistance-only study is single-arm. Physio-safety: RIR 1–3, traffic-light pain check (labelled a coaching rule of thumb), strength on non-consecutive days, no jumping or running and no maximal lifts in the sample week (a coaching choice, not a research limit), regressions on every move, NHS "see a GP" lines, pregnancy/fertility treatment: ask your doctor, coach not doctor or dietitian. Arabic addresses the reader in the feminine. **Health-related post: a doctor's or women's-health physio's review of the safety wording, plus native-speaker review, is recommended before publication.**

## Fatty liver (MASLD) post (15 November 2026)

Added `best-strength-exercises-for-fatty-liver` in 7 languages with 10 sources (WHO 2020, NHS NAFLD page (also known as MASLD), EASL–EASD–EASO 2024 MASLD guideline executive summary, Keating 2012 J Hepatol exercise meta-analysis, Stine 2023 Am J Gastroenterol MRI liver-fat meta-analysis, Hashida 2017 J Hepatol aerobic vs resistance review, Hallsworth 2011 Gut resistance exercise study, Zelber-Sagi 2014 World J Gastroenterol resistance training RCT, ACSM progression, Riebe ACSM screening). Copy explains the MASLD name (previously NAFLD), says exercise lowers liver fat even with little or no weight loss but did not change ALT, that the strength-specific studies are small, and that evidence for effects on fibrosis or long-term liver outcomes is less robust. Physio-safety: RIR 1–3, traffic-light pain check (labelled a coaching rule of thumb), strength on non-consecutive days, no jumping, running, maximal lifts or breath-holding in the sample week (a coaching choice, not a research limit), regressions on every move, NHS "see a GP" and yearly check-up lines, alcohol advice from the guideline, cirrhosis/swelling/varices: ask the liver team first, coach not doctor or dietitian. The fat-loss page's "Read next" now includes it. **Health-related post: a doctor's (hepatologist or GP) or physio's review of the safety wording, plus native-speaker review, is recommended before publication.**

## Postpartum recovery post (16 November 2026)

Added `best-strength-exercises-for-postpartum-recovery` in 7 languages with 10 sources (WHO 2020 (pregnant and postpartum women recommendations), NHS "Your post-pregnancy body", ACOG Committee Opinion 804 (2020, reaffirmed 2023), NICE NG210 pelvic floor dysfunction, Cochrane Woodley 2020 pelvic floor muscle training in antenatal and postnatal women, Sperstad 2016 BJSM diastasis recti prevalence, Gluppe 2018 Phys Ther postpartum training RCT, Goom/Donnelly/Brockwell 2019 returning to running postnatal guideline, ACSM progression, Riebe ACSM screening). Copy states the limits: the Cochrane review found the effect of pelvic floor training started after birth on later leaking uncertain; evidence that exercise closes a tummy gap is mixed (ACOG cites studies that reduced it; the Gluppe RCT did not change prevalence); the return-to-running guideline is based on evidence and clinical experience, not validated. Physio-safety: RIR 1–3, traffic-light pain check with leaking/heaviness/doming counted as amber (labelled a coaching rule of thumb), no running or jumping for at least 3 months and no impact, sit-ups, front planks, maximal lifts or breath-holding in the sample week, light loads (start no heavier than the baby in the car seat), regressions on every move, NHS "see a GP or health visitor" lines, NICE supervised pelvic floor training referral, caesarean: wound and doctor set the pace, low mood: tell the doctor or health visitor, red flags (heavy bleeding, chest pain, painful swollen leg). Arabic addresses the reader in the feminine. **Health-related post: a doctor's (GP or obstetrician) or women's-health/pelvic-health physio's review of the safety wording, plus native-speaker review, is recommended before publication.**

## Cancer survivors post (17 November 2026)

Added `best-strength-exercises-for-cancer-survivors` in 7 languages with 10 sources (WHO 2020 (people living with chronic conditions, including cancer), Macmillan Cancer Support "Exercising safely when you have cancer" (reviewed 1 November 2023), Campbell 2019 ACSM international roundtable exercise guidelines for cancer survivors, Ligibel 2022 ASCO guideline on exercise, diet and weight management during cancer treatment, Cormie 2018 COSA position statement, Cochrane Mishra 2012 exercise during active treatment, Schmitz 2009 NEJM weight lifting with breast-cancer-related lymphedema, Campbell 2022 bone metastases expert consensus, ACSM progression, Riebe ACSM screening). Copy states the limits: strength work does not treat cancer; the Cochrane review asks for cautious reading (heterogeneous programmes, high risk of bias); effects on chemo nerve damage and cognition are uncertain; WHO's survival finding in breast and colorectal cancer survivors is described as a link, not a promise; the roundtable found supervised start-low, progress-slow resistance training safe with lymphoedema and not enough evidence on unsupervised starts. Physio-safety: RIR 1–3, traffic-light check for pain and tiredness (labelled a coaching rule of thumb) with new or unusual bone, back or muscle pain always a stop, no impact, maximal lifts, failure, breath-holding or sit-ups in the sample week, regressions and line/lymphoedema/stoma/neuropathy notes on the moves, the roundtable's NCCN-adapted triage (who needs a medical check or clearance first), Macmillan's precautions (low white cells, low platelets, central/PICC lines) and stop-and-see-a-doctor symptoms, bone metastases: specialist plan only, fever or infection during treatment: call the hospital's emergency contact. **Health-related post: an oncologist's or oncology nurse's and a cancer-rehab physio's or exercise physiologist's review of the safety wording, plus native-speaker review, is recommended before publication.**

Added `best-strength-exercises-for-teenagers` in 7 languages with 10 sources (WHO 2020 (children and adolescents 5–17), NHS physical activity guidelines for children and young people (reviewed 23 October 2024), Stricker 2020 AAP clinical report on resistance training for children and adolescents (reaffirmed November 2024), Faigenbaum 2009 NSCA position statement, Lloyd 2014 international consensus, Faigenbaum and Myer 2010 safety and injury review, Behringer 2010 meta-analysis, Lesinski 2016 youth-athlete meta-analysis, Smith 2014 muscular fitness and health meta-analysis, Emery 2015 neuromuscular training injury-prevention meta-analysis). Copy states the limits: the health findings are associations, not proof of cause; links with pain and cognition are inconsistent or uncertain; the knee-injury estimate was not statistically significant; the heavy, low-rep doses from youth-athlete studies are not for home training. Safety: a parent or guardian knows and agrees (under 18) and is there for set-up; the NHS's qualified-adult supervision condition for weights; the AAP's see-a-doctor list (uncontrolled hypertension or seizures, certain heart conditions, previous anthracycline chemotherapy; paediatric cardiologist for complex congenital heart disease) and advice against resistance training with hypertrophic cardiomyopathy, pulmonary hypertension or Marfan syndrome; most reported lifting injuries happen on home equipment, unsupervised (so no heavy lifting alone, no max attempts); body-image and eating concerns go to a doctor; no performance-enhancing substances. Physio-safety: RIR 1–3, traffic-light pain check (labelled a coaching rule of thumb; joint, heel or below-kneecap pain is always a stop), small, few jumps with no box jumps or drop jumps, light loads, no failure, max tests or timed workouts in the sample week, total weekly training load counted with 1–2 days off sport. **Youth post: a paediatric sports-medicine doctor's or paediatric physio's review of the safety wording, plus native-speaker review, is recommended before publication, and the owner should confirm the under-18 booking and supervision wording.**

## Cyclists post (19 November 2026)

Added `best-strength-exercises-for-cyclists` in 7 languages with 10 sources (WHO 2020 guidelines (adults), Rønnestad and Mujika 2014 review (running and cycling), Beattie 2014 systematic review (26 studies, endurance athletes), Yamamoto 2010 systematic review (5 RCTs, highly trained road cyclists), Rønnestad, Hansen and Raastad 2011 (12 weeks, 5-min all-out after 185 min), Vikmoen 2016 (19 female cyclists, 11 weeks), Mujika, Rønnestad and Martin 2016 review (maintenance in season), Clarsen 2010 (overuse injuries, 109 professional road cyclists), Olmedillas 2012 systematic review (cycling and bone, 31 studies), Lauersen 2018 meta-analysis (strength training and sports injuries, not cyclist-specific)). Copy states the limits: the trials are small groups of well-trained riders; 2 of 5 RCTs in highly trained cyclists found no gain (both added lifting on top of the usual riding); the injury meta-analysis is not in cyclists; the heavy 4–10 RM doses of the trials are not the starting point. Physio-safety: RIR 1–3 (the trials' RM loads are not copied), traffic-light pain check (labelled a coaching rule of thumb; anterior knee pain that builds on the bike, back pain spreading down a leg, or pain that changes movement is always a stop), impact capped at 3 × 10 small hops, no drop jumps, hops left out with heel/Achilles/shin pain or diagnosed low bone density, regressions for every lift (split squat with the back foot on the floor, lower step, bent-knee side plank). Safety: see a doctor or physio first with a heart condition, high blood pressure, diabetes, a recent crash, fracture or concussion, or low bone density. **Recommended before publication: a sports physio's review of the safety wording, plus native-speaker review.**
