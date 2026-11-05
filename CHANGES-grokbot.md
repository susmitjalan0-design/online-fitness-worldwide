# CHANGES by Grok Bot

Branch: `grokbot/seo-theme-blog`. Nothing here is merged to `main` or deployed.

## 5 Nov 2026 (IST), batch 16: strength exercises for type 2 diabetes, shorter "Read next" on the fat-loss page, FAQ open/closed marks

### Blog
- New post: **"Best strength exercises for type 2 diabetes: 7 moves and a sample week"** at `/blog/best-strength-exercises-for-type-2-diabetes` (`src/content/blog/type-2-diabetes.ts`, export `diabetesPost`). It targets "strength exercises for type 2 diabetes" / "exercise for diabetes at home". No existing post covers it, and it fits an Indian and Gulf audience. (Hip and shoulder mobility and posture, the backlog ideas, still overlap the warm-up, cool-down and desk-workers posts.)
- The English coached card leads with Lean Reset (20 sessions a month, 1:1, "enough that you rarely go two days without training", which matches ADA's "no more than 2 days in a row without activity") and links to `/personal-trainer-for-fat-loss` (`programLink`). Iron Hour is minute by minute (set-up 0 with water, a quick snack and the meter within reach "if your doctor wants you to check"; warm-up 4; primary 14; accessories 28; cool-down 50). It also names Return (45 minutes, 12 alternate-day sessions a month), Open Floor and the Consultation (30 minutes, not training). New line: "I'm a coach, not your doctor: your doctor sets the medicine and the limits, and we train inside them." No prices: booking holds a time and the fee is agreed directly. Live on Meet, Zoom or FaceTime, from Pune, in Hindi or English, on IST.
- "See also" under the intro: the desk-workers post (sitting breaks) and the long-break post.
- The 7 items: sit-to-stand, wall push-up, one-arm row, glute bridge, step-up, calf raise, farmer's carry. Each has a "breathe out on the effort, don't hold your breath" cue where it matters (ADA lists breath holding among things to avoid with severe retinopathy). Doses follow ADA's starting dose (1 to 3 sets of 10 to 15, near tired).
- "How much, how hard, how often":
  - ADA: 2–3 resistance sessions a week on non-consecutive days; 8–10 exercises, 1–3 sets of 10–15 to near fatigue early on; 150+ minutes of moderate to vigorous activity over 3+ days, no more than 2 days in a row without activity; break up sitting every 30 minutes.
  - **The trials disagree on resistance training alone, and the post says so**: Sigal 2007 found combined training beat either alone (extra −0.46 vs aerobic, −0.59 vs resistance); in Church 2010 only the combined group improved HbA1c vs control, with resistance alone (−0.16) and aerobic alone (−0.24) not significant. Umpierre 2011 (47 trials) linked structured resistance training with HbA1c about 0.57 points lower, and >150 min/week with a bigger drop (0.89 vs 0.36).
  - Dempsey 2016: 3-minute breaks every 30 minutes (light walking, or half-squats, calf raises and similar) cut the post-meal glucose rise by about 39% (iAUC 24.2 vs 14.7) in 24 adults with type 2 diabetes. The copy notes these were 8-hour lab days, not months.
  - India context in the intro: ICMR-INDIAB (113,043 adults, 2008–2020): diabetes 11.4%, prediabetes 15.3%.
  - ACSM's 2–10% progression rule.
- "Before you start": **ADA and ACSM differ on medical clearance, and the post gives both** (ADA: generally not needed before low or moderate activity if no symptoms; ACSM: inactive with diabetes, get clearance first even for light exercise), then says to talk to your doctor before starting. Hypo risk with insulin and insulin secretagogues (ADA), "any change to your dose is your doctor's call"; NHS hypo symptoms and the NHS below-4 mmol/L steps (the copy adds "about 72 mg/dL" for Indian meters); stop the session. ADA retinopathy limits; ADA foot care with neuropathy; stop for chest pain, dizziness or sharp pain.
- The sample week (three ~30-minute strength days on Monday, Wednesday and Friday, walks on the other days, 3 minutes up after every 30 minutes sitting) is labelled "Sample only. Not a prescription. Adjust it with your doctor…". No client results or quotes. Credentials line in the CTA card (ASCA Level 1 and ACE; neither body endorses the business or the article). One WhatsApp CTA.
- Localised versions at `/{ar,hi,es,zh,ja,gu}/blog/best-strength-exercises-for-type-2-diabetes`, each with its own title, description and canonical and the full reciprocal hreflang set (7 languages and x-default). Arabic renders `dir="rtl"`. JSON-LD from `postHead`: Article, ItemList (7 items with `#item-n` URLs) and BreadcrumbList. Meta descriptions: en 160, ar 160, hi 160, es 160, gu 153, zh 57, ja 70 characters.
- All 10 sources are real and were opened on 5 Nov 2026. Each paper's title, authors, journal, year, volume/pages and the finding used were checked against its Europe PMC record and abstract (the ADA statement read in full on PMC); each DOI is registered at doi.org (handle API 200). The WHO and NHS pages returned 200 and the wording used was read on the page.
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. Colberg et al., ADA position statement, Physical activity/exercise and diabetes, Diabetes Care 2016;39(11):2065–2079: https://doi.org/10.2337/dc16-1728
  3. Umpierre et al., JAMA 2011;305(17):1790–1799: https://doi.org/10.1001/jama.2011.576
  4. Sigal et al., Ann Intern Med 2007;147(6):357–369: https://doi.org/10.7326/0003-4819-147-6-200709180-00005
  5. Church et al., JAMA 2010;304(20):2253–2262: https://doi.org/10.1001/jama.2010.1710
  6. Dempsey et al., Diabetes Care 2016;39(6):964–972: https://doi.org/10.2337/dc15-2336
  7. Anjana et al., ICMR-INDIAB-17, Lancet Diabetes Endocrinol 2023;11(7):474–489: https://doi.org/10.1016/S2213-8587(23)00119-5
  8. NHS, Low blood sugar (hypoglycaemia): https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/
  9. ACSM position stand, Progression models in resistance training, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  10. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- New routes: `src/routes/blog.best-strength-exercises-for-type-2-diabetes.tsx` and `src/routes/$lang.blog.best-strength-exercises-for-type-2-diabetes.tsx`. `/en/...` and `/xx/...` return 404. `src/routeTree.gen.ts` regenerated by the TanStack Router plugin during this run's build. `src/content/blog/index.ts` lists 22 posts, newest first.

### Internal links and UX: `/personal-trainer-for-fat-loss`
- "Training is one part" gets a line: "Living with type 2 diabetes? Keep your doctor in the loop, and read the 7 best strength exercises for type 2 diabetes."
- Its "Read next" listed every post (21, growing each day). It now shows 5: the type 2 diabetes post and the beginners strength post first, then the newest others, skipping the hybrid-race cluster, the same pattern as the other landing pages. `READ_MAX` in the route sets the number. The blog index still links every post; the sitemap is unchanged.

### Theme and accessibility: FAQ open/closed marks
- The landing-page FAQ cards (`/personal-trainer-for-fat-loss`, `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach` and the India/Dubai/Singapore pages) hid the native disclosure marker and showed nothing in its place, so there was no visible sign a question opens. They now get a heavy logo-blue (#014ffe, 5.5:1 on the card) "+" that turns to "−" when open, at the end side (flips in RTL), matching the home FAQ. CSS only (`details.card-lift > summary` in `src/styles.css`); `<details>` already tells screen readers open or closed. No new colours.

### SEO: sitemap
- `public/sitemap.xml` has 168 URLs: home, six landing pages, 7 blog indexes, and 7 language URLs for each of the 22 posts, with reciprocal `xhtml:link` hreflang and x-default. `lastmod` is 2026-11-05 for the new post, the 7 blog indexes and `/personal-trainer-for-fat-loss`.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- Built a copy of the branch in `/workspace/ofw-verify` with `vite build` and the local-only verify config (stub for the missing `src/lib/preview-host-bridge.ts`, no PWA plugin, Nitro `node-server` preset, restored binaries; none of it committed). The build passed on Node 24.
- The built server returned 200 for all 168 sitemap URLs, and 404 for `/en/blog/best-strength-exercises-for-type-2-diabetes` and `/xx/blog/best-strength-exercises-for-type-2-diabetes`.
- On all 168 URLs: one title, one description, one h1, one canonical matching the sitemap URL; every JSON-LD block parses; every post page has 8 hreflang links and 7 `#item-n` cards; no raw `{n}`; Arabic pages render `dir="rtl"`.
- New post, all 7 languages: Article, ItemList and BreadcrumbList; headings h1, h2, h3 with no skips; citations 1–10 each with a matching `#source-n`. No Google Fonts request on en/es/zh/ja; the script font on hi/gu/ar.
- Headless Chrome: English and Arabic posts at 390px (Arabic RTL right), and the fat-loss page at 1280px with the new FAQ marks and the 5-item "Read next".
- `tsc --noEmit`: the same 14 errors as before, all from the missing platform files.
- Pushed through the GitHub connector as normal commits on top of the branch head. Nothing force-pushed, `main` untouched.

### Still open (needs Susmit)
- **Diabetes post: please get a doctor or diabetes educator to read "Before you start"** (hypo steps, the clearance disagreement, retinopathy and feet) before launch. It names NHS thresholds in mmol/L with a mg/dL conversion; Indian readers may follow different local advice from their doctor.
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing, so `npm run build` fails from a clean clone.
- Deploy step: run `node scripts/restore-binaries.mjs` before building (images and the Outfit font).
- Knee, back-pain, busy-parents (postpartum) and grip posts: still waiting for your read.
- Native-speaker review of ar, hi, es, zh, ja and gu for all twenty-two posts. In this post: Hindi "इंसुलिन सीक्रेटागॉग", Gujarati "ઇન્સ્યુલિન સિક્રીટાગૉગ" and Arabic "محفزات إفراز الإنسولين" for "insulin secretagogues" (each explained in brackets).
- `clientNotes`: still labelled as samples. Replace them with real, consented quotes, or delete them.
- `home.tsx` still uses the lifted blue underline on its light-background blog list (too big for the connector).
- The country pages are English only.

## 4 Nov 2026 (IST), batch 15: knee-friendly leg exercises, self-hosted Outfit, shorter "More from the blog"

### Blog
- New post: **"Best leg exercises for knee-friendly strength: 7 moves and a sample week"** at `/blog/best-leg-exercises-for-knee-friendly-strength` (`src/content/blog/knee-friendly-legs.ts`, export `kneeFriendlyPost`). It targets "knee-friendly leg exercises" / "leg exercises for bad knees". It doesn't overlap an existing post: the runners and over-60s posts touch on knees but neither is about leg training around the knee.
- The English coached card leads with Iron Hour (set-up 0 with the camera on feet, knees and hips; warm-up 4; primary 14 "at the depth we agreed"; accessories 28; cool-down 50) and links to `/online-strength-and-conditioning-coach` (`programLink`). It also names Return (45 minutes, 12 alternate-day sessions a month), Lean Reset, Open Floor and the Consultation (30 minutes, not training). New line: "I'm a coach, not a physio: if your doctor or physio has set limits, we train inside them." No prices: booking holds a time and the fee is agreed directly. Live on Meet, Zoom or FaceTime, from Pune, in Hindi or English, on IST.
- "See also" under the intro: the runners post and the over-60s post.
- The 7 items: box squat, step-up, Romanian deadlift, glute bridge, side-lying leg raise, split squat, seated knee extension. Each lets the reader set the depth or height.
- "How deep, how hard, how often":
  - Knee forces in the squat rise with knee bend and peak near the bottom; the parallel squat was not injurious to a healthy knee (Escamilla 2001).
  - **The two squat-depth reviews disagree, and the post says so**: Escamilla favours parallel over deep for healthy knees; Hartmann 2013 concludes deep squats with supervised technique and progressive loads did not add injury risk, and warns that very heavy half and quarter squats are not the safe option they look like. The coach line is "earn your depth".
  - Patellofemoral pain: the 2018 consensus backs exercise therapy, especially hip-focused plus knee-focused exercises (Collins 2018). Hip plus thigh work cut pain and improved function, with some (limited) evidence of more benefit at 1 year than thigh work alone (Lack 2015).
  - Knee osteoarthritis: Cochrane (44 trials) found exercise cut pain by about 12 points and improved function by about 10 on 0–100 scales; the benefit on pain lasted 2–6 months after programmes ended; one-to-one programmes tended to do better than classes or home programmes, **with the copy noting the studies varied a lot** (Fransen 2015). NICE NG226: therapeutic exercise is a core treatment (local muscle strengthening named), and pain may increase at the start while regular exercise still benefits the joints. The copy tells readers to ask their doctor or physio how much is fine.
  - WHO 2+ days a week; ACSM's 2–10% progression rule.
- "Before you start": ACSM screening; the NHS "see a GP if knee pain doesn't improve within a few weeks" and the NHS urgent list (very painful, can't move or bear weight, badly swollen or changed shape, locks, gives way or painfully clicks, very high temperature with redness or heat; painless clicking is normal). Outside the UK that means "your doctor or local urgent care". After recent injury or surgery, follow the surgeon's or physio's plan first. Stop for sharp pain, chest pain or dizziness.
- The sample week (two ~30-minute sessions, Monday and Thursday, plus walks; "Knees grumpy the next day? Keep the session, shrink it") is labelled "Sample only. Not a prescription." No client results or quotes. Credentials line in the CTA card (ASCA Level 1 and ACE; neither body endorses the business or the article). One WhatsApp CTA.
- Localised versions at `/{ar,hi,es,zh,ja,gu}/blog/best-leg-exercises-for-knee-friendly-strength`, each with its own title, description and canonical and the full reciprocal hreflang set (7 languages and x-default). Arabic renders `dir="rtl"`. JSON-LD from `postHead`: Article, ItemList (7 items with `#item-n` URLs) and BreadcrumbList. Meta descriptions: en 155, ar 156, hi 155, es 154, gu 148, zh 50, ja 74 characters.
- All 10 sources are real and were opened on 4 Nov 2026. Each paper's title, authors, journal, year, volume/pages and the finding used were checked against its Europe PMC record and abstract; each DOI is registered at doi.org (handle API 200). The WHO, NHS and NICE pages returned 200 and the wording used was read on each page.
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. NHS, Knee pain: https://www.nhs.uk/conditions/knee-pain/
  3. NICE NG226, Osteoarthritis in over 16s (2022), recommendations 1.2.2, 1.3.1–1.3.3: https://www.nice.org.uk/guidance/ng226/chapter/Recommendations
  4. Fransen et al., Exercise for osteoarthritis of the knee, Cochrane 2015;(1):CD004376: https://doi.org/10.1002/14651858.CD004376.pub3
  5. Collins et al., 2018 consensus on exercise therapy for patellofemoral pain, Br J Sports Med 2018;52(18):1170–1178: https://doi.org/10.1136/bjsports-2018-099397
  6. Lack et al., Proximal muscle rehabilitation for patellofemoral pain, Br J Sports Med 2015;49(21):1365–1376: https://doi.org/10.1136/bjsports-2015-094723
  7. Escamilla, Knee biomechanics of the dynamic squat, MSSE 2001;33(1):127–141: https://doi.org/10.1097/00005768-200101000-00020
  8. Hartmann, Wirth & Klusemann, Load on the knee and spine with squat depth, Sports Med 2013;43(10):993–1008: https://doi.org/10.1007/s40279-013-0073-6
  9. ACSM position stand, Progression models in resistance training, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  10. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- New routes: `src/routes/blog.best-leg-exercises-for-knee-friendly-strength.tsx` and `src/routes/$lang.blog.best-leg-exercises-for-knee-friendly-strength.tsx`. `/en/...` and `/xx/...` return 404. `src/routeTree.gen.ts` regenerated by the TanStack Router plugin during this run's build. `src/content/blog/index.ts` lists 21 posts, newest first.

### Internal links
- `/online-strength-and-conditioning-coach`, in "How Iron Hour runs": "Knees grumpy on squats? We set the depth first: the 7 best leg exercises for knee-friendly strength."
- `/getting-back-into-exercise`, in "How Return runs": "Knees complain on the stairs? Read the 7 best leg exercises for knee-friendly strength."

### Speed: Outfit is self-hosted (backlog item 10)
- The render-blocking Google Fonts stylesheet for Outfit is gone. One variable woff2 (Latin, 32 KB, the same file and unicode range Google served, weights 100–900, so 400/500/640/800 all still work) is now `public/fonts/outfit-latin.woff2`, declared with `@font-face` (`font-display: swap`) at the top of `src/styles.css` and preloaded from `__root.tsx`.
- Like the images, the file is committed as base64 in `binary-parts/parts/public__fonts__outfit-latin.woff2.000` with a manifest entry, and `node scripts/restore-binaries.mjs` writes it out. `.gitignore` ignores the restored `public/fonts/*.woff2`. **Any deploy must run the restore step** (it already has to for the images); if it doesn't, text falls back to the system sans, nothing breaks.
- English, Spanish, Chinese and Japanese pages and the home page now make no request to Google Fonts at all. The `fonts.googleapis.com` / `fonts.gstatic.com` preconnects moved from the root into `scriptFontLinks`, so only the hi, gu and ar pages that load a Noto script font open those connections.
- Outfit is under the SIL Open Font License 1.1 (noted in the CSS comment).

### UX and SEO: "More from the blog"
- Every post listed every other post (19 links and growing, longer than most articles' source lists). It now shows the newest 6, skipping posts already in "See also" (and, as before, the hybrid-race cluster on cluster posts). The "Blog" button under it still goes to the index, which links every post, and the sitemap is unchanged. `RELATED_MAX` in `src/components/blog-post.tsx` sets the number.

### Theme: logo blue
- Underlines on light-background link lists (post "More from the blog" and cluster lists, the "Read next" lists on `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach` and `/personal-trainer-for-fat-loss`, and the country pages) now use the exact logo blue #014ffe (5.0:1 on bone) instead of the lifted #3d7bff (3.3:1), matching `.prose-links`. Links on ink keep #3d7bff, where it is the readable one. `home.tsx` (44 KB) was left alone: it is too large to push safely through the connector. No new colours, no orange; ink stays #030406.

### SEO: sitemap
- `public/sitemap.xml` has 161 URLs: home, six landing pages, 7 blog indexes, and 7 language URLs for each of the 21 posts, with reciprocal `xhtml:link` hreflang and x-default. `lastmod` is 2026-11-04 for home, `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach`, the 7 blog indexes and the new post.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- Built a copy of the branch in `/workspace/ofw-verify` with `vite build` and the local-only verify config (stub for the missing `src/lib/preview-host-bridge.ts`, no PWA plugin, Nitro `node-server` preset, restored binaries including the new font; none of it committed). Dependencies reinstalled with npm 10 and `--legacy-peer-deps`. The build passed on Node 24.
- The built server returned 200 for all 161 sitemap URLs, and 404 for `/en/blog/best-leg-exercises-for-knee-friendly-strength` and `/xx/blog/best-leg-exercises-for-knee-friendly-strength`. `/fonts/outfit-latin.woff2` served as `font/woff2`.
- On all 161 URLs: one title, one description, one h1, one canonical matching the sitemap URL; every JSON-LD block parses; every post page has 8 hreflang links and 7 `#item-n` cards; no raw `{n}`; Arabic pages render `dir="rtl"`.
- New post, all 7 languages: Article, ItemList (7) and BreadcrumbList; headings with no skips; citations 1–10 each with a matching `#source-n`; 7 "Jump to" links; "More from the blog" has 6 links. No Google Fonts request on en/es/zh/ja; the script font and its preconnects on hi/gu/ar.
- Headless Chrome at 390px: English and Arabic posts render with Outfit; Arabic RTL is right.
- `tsc --noEmit`: the same 14 errors as before, all from the missing platform files. ESLint on the changed files: no errors, the same fast-refresh warning in `blog-post.tsx`.
- Pushed through the GitHub connector (signed in as `susmitjalan0-design`) because the box `gh` is `sydneysoutreach` with no push access (403). Normal commits on top of the branch head, nothing force-pushed, `main` untouched.

### Still open (needs Susmit)
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing, so `npm run build` fails from a clean clone.
- Deploy step: run `node scripts/restore-binaries.mjs` before building, now for the font as well as the images.
- Knee post: a physio or doctor read of "Before you start" and the osteoarthritis lines would be good (same ask as the back-pain and busy-parents posts). The NHS urgent advice names NHS 111; the copy adds "outside the UK, your doctor or local urgent care".
- Busy-parents post postpartum lines, grip post tone, back-pain post wording: still waiting for your read.
- Native-speaker review of ar, hi, es, zh, ja and gu for all twenty-one posts. In this post: Hindi/Gujarati use "घुटनों के लिए आसान" / "ઘૂંટણ માટે સરળ" for "knee-friendly", Spanish "amables con la rodilla", Arabic "لطيفة على الركبة".
- `clientNotes`: still labelled as samples. Replace them with real, consented quotes, or delete them.
- `home.tsx` still uses the lifted blue underline on its light-background blog list (too big for the connector).
- The country pages are English only.

## 3 Nov 2026 (IST), batch 14: strength exercises for busy parents, .gitignore, meta lengths, new-tab labels

### Blog
- New post: **"Best strength exercises for busy parents: 7 moves and a sample week"** at `/blog/best-strength-exercises-for-busy-parents` (`src/content/blog/busy-parents.ts`, export `busyParentsPost`). It targets "strength exercises for busy parents" / "workouts for busy parents". Picked from the backlog because it doesn't overlap an existing post: posture would overlap the desk-workers post, and hip and shoulder mobility would overlap the warm-up and cool-down posts.
- It leads into Return (45 minutes, 12 alternate-day sessions a month). The English coached card links to `/getting-back-into-exercise` (`programLink`). It also names Iron Hour (set-up 0, warm-up 4, primary 14, accessories 28, cool-down 50), Lean Reset, Open Floor and the Consultation (30 minutes, not training). No prices: booking holds a time and the fee is agreed directly. Coached live on Meet, Zoom or FaceTime, from Pune, in Hindi or English, on IST.
- "See also" under the intro: the one-dumbbell post and the long-break post.
- The 7 items:
  1. Goblet squat ("Hold a weight, not your child. Children wriggle.")
  2. Hip hinge, then Romanian deadlift
  3. Push-up, counter then floor
  4. One-arm row
  5. Reverse lunge
  6. Suitcase carry
  7. Dead bug (with a pointer to "Before you start" for anyone who has recently given birth)
- The section "How little is enough, and how to fit it in" covers:
  - At least 4 sets per muscle group a week at a 6–15RM load, with weekly volume mattering more than frequency, and the minimum menu of one leg press, one upper-body pull and one upper-body push (Iversen 2021).
  - Supersets roughly halve training time with the same volume. A short warm-up specific to the exercise is enough (Iversen 2021).
  - Minimal-dose and "exercise snack" training can improve strength and function (Fyfe 2022).
  - Muscle-strengthening was linked to 10–17% lower risk, with the biggest drop at about 30–60 min a week (Momma 2022). **Labelled as observational: a link, not proof.**
  - ACSM's 2–10% progression rule.
- The intro cites Bellows-Riecken & Rhodes: parents were less active than non-parents, and mothers generally less active than fathers. **It says plainly that most of those studies were cross-sectional and self-reported.** It also cites the NHS, which counts lifting and carrying children as muscle-strengthening.
- Safety note:
  - ACSM screening.
  - NHS after pregnancy: match activity to your pre-pregnancy level and include strength training; more intense activity after the 6–8-week postnatal check if you feel able; vigorous activity not recommended if you were inactive before pregnancy.
  - NHS on separated stomach muscles: avoid sit-ups, planks and high-impact exercise at first; see a GP or health visitor if the gap is still obvious at 8 weeks, or with leaking or heaviness.
  - Ask a doctor after a caesarean or a difficult birth.
  - Keep children clear of weights, and keep weights on the floor.
  - Stop for chest pain, dizziness or sharp pain.
- The sample week (two 20-minute paired sessions on Monday and Thursday, snacks on Wednesday, walks, "Missed a session? Let it go.") is labelled "Sample only. Not a prescription." There are no client results or quotes. The credentials line is in the CTA card (ASCA Level 1 and ACE; neither body endorses the business or the article). There is one WhatsApp CTA, as in recent posts.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-strength-exercises-for-busy-parents`. Each has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). Arabic renders `dir="rtl"` and uses "بالتناوب: يوم تمرين ويوم راحة" for Return. JSON-LD comes from `postHead`: Article, ItemList (7 items with `#item-n` URLs) and BreadcrumbList. The English and Spanish meta descriptions are 150 characters each; Hindi 143, Gujarati 148, Arabic 151.
- All 9 sources are real and were opened on 3 Nov 2026. Each paper's title, authors, journal, year, volume/pages and the finding used were checked against its Europe PMC record and abstract. Each DOI was confirmed as registered at doi.org (handle API 200). The WHO and both NHS pages returned 200, and the wording used was read on each page.
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. NHS, Physical activity guidelines for adults aged 19 to 64: https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/ (strength on at least 2 days; "lifting and carrying children" listed as muscle-strengthening; the after-pregnancy lines above)
  3. NHS, Your post-pregnancy body: https://www.nhs.uk/conditions/baby/support-and-services/your-post-pregnancy-body/ (postnatal check at around 6–8 weeks; separated stomach muscles; avoid sit-ups, planks and high-impact exercise to start with; GP if the gap is still obvious at 8 weeks; ask a GP or health visitor about any physical problem)
  4. Bellows-Riecken & Rhodes, A birth of inactivity? A review of physical activity and parenthood, Prev Med 2008;46(2):99–110: https://doi.org/10.1016/j.ypmed.2007.08.003 (25 independent samples; parents less active than non-parents; mothers generally less active than fathers; mostly cross-sectional and self-report)
  5. Iversen, Norum, Schoenfeld & Fimland, No time to lift?, Sports Med 2021;51(10):2079–2095: https://doi.org/10.1007/s40279-021-01490-1
  6. Fyfe, Hamilton & Daly, Minimal-dose resistance training, Sports Med 2022;52(3):463–479: https://doi.org/10.1007/s40279-021-01605-8
  7. Momma, Kawakami, Honda & Sawada, Muscle-strengthening activities and non-communicable diseases, Br J Sports Med 2022;56(13):755–763: https://doi.org/10.1136/bjsports-2021-105061 (16 cohort studies; 10–17% lower risk; maximum reduction at about 30–60 min/week; J-shaped)
  8. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  9. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- New routes: `src/routes/blog.best-strength-exercises-for-busy-parents.tsx` and `src/routes/$lang.blog.best-strength-exercises-for-busy-parents.tsx`. `/en/...` and `/xx/...` return 404. `src/routeTree.gen.ts` was generated by the TanStack Router plugin during this run's build. `src/content/blog/index.ts` now lists 20 posts, newest first, so the home footer's "From the blog" and every "More from the blog" list pick the new post up.

### Internal links
- `/getting-back-into-exercise`, in "How Return runs": "Kids at home and 20 minutes free? Read the 7 best strength exercises for busy parents."
- `/online-strength-and-conditioning-coach`, in "How Iron Hour runs": "No hour free this week? Two 20-minute sessions still count: the 7 best strength exercises for busy parents."

### SEO, accessibility and speed
- **`.gitignore` added** (backlog item 9). It ignores `node_modules/`, build output (`.output/`, `.nitro/`, `.tanstack/`, `.vinxi/`, `dist/`), local lockfiles, `public/__grok/` (the files already tracked there stay tracked), the images restored from `binary-parts/` (`src/assets/*.png|jpg`, `public/og.jpg`, `public/og-card.jpg`), logs and `.env*`. After a local install and restore, `git status` is now clean.
- **Meta descriptions in Hindi, Gujarati and Arabic** (open since batch 12). Eleven ran over 160 characters. All are now 160 or fewer. Each was shortened by dropping a repeated word or one example from the list. No facts changed, and the post `modified` dates were left alone.
  - Arabic: core 164 to 156, over 60s 161 to 153.
  - Gujarati: core 165 to 159, over 60s 198 to 155, runners 166 to 153, travel 167 to 153, warm-up 163 to 145.
  - Hindi: over 60s 199 to 147, runners 168 to 155, travel 166 to 152, women over 40 172 to 155.
  - Chinese and Japanese descriptions are 47–67 characters. CJK characters are wide, so that is a normal length.
- **The home header's WhatsApp button had no accessible name on phones.** Its only text was `hidden sm:inline`, which removes it from the accessibility tree, and the icon is `aria-hidden`. The text is now `sr-only sm:not-sr-only`, so it reads as "WhatsApp" at every width. The layout is unchanged.
- **New-tab notes on the remaining `target="_blank"` links**: both home WhatsApp buttons, the two WhatsApp buttons and the WHO link on `/personal-trainer-for-fat-loss`, and "Add to Google Calendar" and "Open the Meet room" in the booking dialog. Each now has a visually hidden "(opens in a new tab)". The Hindi home copy maps it to "(नए टैब में खुलता है)" in `src/studio/hindi.ts`. A scan of all 154 sitemap URLs now finds no new-tab link without a note.
- Site-wide scan of all 154 URLs: no heading skips, no `<img>` without alt, no duplicate ids, no link without a name.

### Theme: logo blue
- `.source-item:target`: click a citation number and the source it jumps to gets the same logo-blue (#014ffe) start edge and 1px outline as a jumped-to card, on an `ink-2` background. That makes it easy to spot in a long list.
- `.note-safety`: "Before you start" on every post now has a 4px logo-blue rule on the start side. It uses `border-inline-start`, so it mirrors in Arabic. The text keeps mist (6.2:1 on bone). No new colours, no orange; ink stays #030406.

### SEO: sitemap
- `public/sitemap.xml` now has 154 URLs: home, six landing pages, 7 blog indexes, and 7 language URLs for each of the 20 posts, with reciprocal `xhtml:link` hreflang and x-default. `lastmod` is 2026-11-03 for home, `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach`, the 7 blog indexes and the new post.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- Built a copy of the branch in `/workspace/ofw-verify` with `vite build` and the local-only verify config (stub for the missing `src/lib/preview-host-bridge.ts`, no PWA plugin, Nitro `node-server` preset, restored binaries; none of it committed). The build passed on Node 24.
- The built server returned 200 for all 154 sitemap URLs, and 404 for `/en/blog/best-strength-exercises-for-busy-parents` and `/xx/blog/best-strength-exercises-for-busy-parents`.
- On all 154 URLs:
  - one title, one description, one h1, and one canonical, which matches the sitemap URL;
  - every JSON-LD block parses;
  - every post page has exactly 8 hreflang links and 7 `#item-n` cards;
  - no raw `{n}` markers;
  - Arabic pages render `dir="rtl"`.
- New post: Article, ItemList (7) and BreadcrumbList; headings go h1 → h2 → h3 with no skips; citations 1–9 all have a matching `#source-n`; 7 "Jump to" links.
- Headless Chrome screenshots at 390px of the Arabic post (RTL correct) and the English post (safety rule and sources render).
- `tsc --noEmit`: the same 14 errors as before, all from the missing platform files. ESLint on the changed files: no errors, and the same fast-refresh warning in `blog-post.tsx` as before.
- How it was pushed: `git push` from the box failed. The box's `gh` is signed in as a different GitHub account (`sydneysoutreach`), which has no push access to this repo (403). So the commits went onto the branch through the GitHub connector, which is signed in as `susmitjalan0-design`. Each push was a normal commit on top of the branch head. Nothing was force-pushed, and `main` was not touched. The connector takes at most 4 files per call, so the batch went in as 10 small commits (this note included) rather than 6.

### Still open (needs Susmit)
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing, so `npm run build` fails from a clean clone.
- Busy-parents post: the postpartum lines quote the NHS (UK). "Health visitor" is a UK role; the translations give the nearest local wording. A physio or doctor read of "Before you start" would be good, as for the back-pain post.
- Native-speaker review of ar, hi, es, zh, ja and gu for all twenty posts, including the shortened meta descriptions.
- Grip post tone (mortality and sarcopenia cut-offs) and back-pain post wording: still waiting for your read.
- `clientNotes`: still labelled as samples. Replace them with real, consented quotes, or delete them.
- Fonts: Outfit is still a render-blocking Google Fonts request (self-hosting needs a woff2 file through binary-parts).
- The country pages are English only.

## 2 Nov 2026 (IST), batch 13: worldwide hybrid-race posts (HYROX, ATHX, DEKA)

### Why
- Susmit asked for blog posts on hybrid fitness races (HYROX, ATHX, DEKA, The Yoddha Race) for a **worldwide** audience, with India as one market among several. The earlier marathon/running scope was cancelled; no marathon drafts were ever pushed, so nothing needed removing.
- Base: kept `grokbot/seo-theme-blog`. The cPanel zip in the fork `a-new-wave/online-fitness-worldwide` (v1.0) is identical to upstream `main` (`ba352fb`). It is an older single-page build with no blog section, no hreflang and a plain black theme, so it has nothing to match; every blog feature lives on this branch. `main` was not touched.

### Plumbing (all posts)
- `src/components/blog-post.tsx`: the "coached live" card can now sit **mid-article** (`ctaMid: true`, straight after the list) and a post can show a **"See also"** line under the intro (`seeAlso: [slugs]`). Existing posts are unchanged (they keep the card after the sample).
- `src/content/blog/shared.ts`: `SEE_ALSO_LABEL` in 7 languages; `ctaMid` and `seeAlso` on `BlogPost`.
- `src/content/blog/common.ts`: shared race-post copy in 7 languages (byline, credentials note, sample label, CTA, program lines, "not affiliated with X" line, ACSM screening safety text), plus `copyFor()` that assembles a post.
- `src/content/blog/race-sources.ts`: every source used by the race posts. Each web page was opened on 2 Nov 2026 and the facts used were read on the page. Third-party figures (RoxTimes etc.) are labelled as third party in the copy.

### Rules followed in every race post
- Cited sources; unpublished things are said to be unpublished. No prices (entry fees are "on the event page"). No client results. Programs: Iron Hour 60 min 1:1; Lean Reset 20 sessions a month 1:1; Return 45 min, 12 alternate-day sessions a month; Open Floor small group; Consultation 30 min, not training. Booking holds a time; fee agreed directly.
- A "not affiliated with / not endorsed by" line in the CTA card. ASCA and ACE are named only as the coach's credentials, with "neither body endorses this business or this article".
- Sample plans are labelled "Sample only". Weights are given in kg with pounds in brackets (rounded).
- Translations (ar, hi, es, zh, ja, gu) were drafted for this batch and **need a native-speaker review**.

### Posts shipped
- **HYROX training plan for beginners: 12 weeks, 7 rules that matter** (`/blog/hyrox-training-plan-for-beginners`; `src/content/blog/hyrox-training-plan.ts`). Sources: HYROX the-fitness-race page, HYROX 2026/27 Singles Rulebook (weights, age, wall-ball heights), HYROX Sports Science Report 2025 (86.2 min median: 51.2 run, 32.8 stations, 11 recreational athletes), HYROX Find My Race (66 events, 11 Nov 2026 to 10 Jun 2027, 36 country-filter options), RoxTimes benchmarks (third party, 1,274,586 finishes), WHO 2020, ACSM 2009 progression models, Schumann 2022, Nielsen 2014 (explicitly: exploratory, not statistically significant), Bosquet 2007, Riebe 2015. The 12-week plan is labelled a sample.

- **What is HYROX? 7 things to know before your first race** (`/blog/what-is-hyrox`; `src/content/blog/what-is-hyrox.ts`). Sources: HYROX the-fitness-race page (format, stations, divisions, station descriptions), 2026/27 Singles Rulebook (8,000 m of running in eight segments, weights, age groups, 16+, 2-minute penalties, wall-ball standard and heights, World Championship qualification), HYROX India site (the organiser's own "80+ races, 550,000 athletes" claim, labelled as theirs), HYROX Find My Race (66 events, example cities and dates by region, World Championships Hong Kong 10–13 Jun 2027), Sports Science Report 2025, RoxTimes (third party), HYROX Gujarat event page (India as one section of seven). Not found, so said plainly: any official average or target time.

- **How to train for HYROX at home: 7 swaps when you have no sled** (`/blog/how-to-train-for-hyrox-at-home`; `src/content/blog/how-to-train-for-hyrox-at-home.ts`). Sources: HYROX the-fitness-race page (sled push "try at least once", grippy shoes, farmers carry "easy to practise on your weekly shop"), HYROX "Best HYROX Preparation" page (50% running, about 90 minutes, run after working legs and arms, don't start too fast), 2026/27 Singles Rulebook (weights in kg and lb, wall-ball standard and heights), ACSM 2009, Schumann 2022 meta-analysis (43 studies), Riebe 2015. The home swaps are the coach's approximations and are said to be approximations, not equivalents; the week is labelled a sample.

- **HYROX vs CrossFit: 7 differences that matter before you choose** (`/blog/hyrox-vs-crossfit`; `src/content/blog/hyrox-vs-crossfit.ts`). Sources: HYROX the-fitness-race page and 2026/27 rulebook; CrossFit "What is CrossFit?"; CrossFit Games "A Guide To Competing in CrossFit in 2027" (21 Oct 2026) and "2027 CrossFit Open Dates Revealed" (23 Jul 2026), both opened on 2 Nov 2026: registration opens 7 Jan 2027; 27.1 17–22 Feb, 27.2 24 Feb–1 Mar, 27.3 3–8 Mar 2027; workouts released Wednesdays, score due Monday 5 p.m. PT; top 25% to Quarterfinals, top 2,000 men and women to Semifinals, top 40 and 40 to the Games. The 2027 Open workouts and their scoring are not published, and the post says so. No injury rates are quoted (none found that I trust). Schumann 2022, WHO 2020, Riebe 2015, HYROX Find My Race.
- **HYROX vs DEKA vs ATHX: 7 differences that decide which to enter** (`/blog/hyrox-vs-deka-vs-athx`; `src/content/blog/hyrox-vs-deka-vs-athx.ts`). The hub of the cluster. Each card has three lines, HYROX, DEKA, ATHX. Sources: the three organisers' own pages, DEKA Rules of Competition v20261015, DEKA World Championship page, DEKA Spain ticketing, Spartan finder (US), Spartan Arabia (Dubai, past), DEKA Thailand (Bangkok, past), HYROX Find My Race, RoxTimes and Kracey (both third party, labelled). Regions covered: US, UK and EU, Middle East, Asia-Pacific, India. India: HYROX Gujarat and Noida only; "I found no DEKA or ATHX listing in India". I could not confirm a UK DEKA date on an official page and say so.
- **DEKA guide: FIT, MILE and STRONG explained, zone by zone** (`/blog/deka-fit-mile-strong-guide`; `src/content/blog/deka-fit-mile-strong-guide.ts`). Zone standards read from the standards chart in the rulebook PDF (page images checked, not just extracted text). Rulebook v20261015 is source 3 and is linked in the post. Zone 1 weight: men 25 kg (55 lb) as printed; the women's pound figure is printed inconsistently ("33 / 35 lb"), so the post gives no number for it and points to the rulebook (editorial rule from the parent). Penalties, 80% rule, age groups (age on 30 Sep), team and ruck rules, the World Championship (Fort Worth, 10–13 Dec 2026) and regional dates. Finish-time medians are third party (Kracey) and labelled.
- **What is ATHX? 7 things to know before you enter** (`/blog/what-is-athx`; `src/content/blog/what-is-athx.ts`). Wired in and pushed. India wording changed so nothing implies an ATHX event there: it now says "On that page I found no listing in India, the Middle East or Asia-Pacific", and the "will ATHX run in India" line was removed. `seeAlso` now points to the final slugs.

### Editorial rules applied in this batch
- HYROX Bengaluru dates removed from every post and from `race-sources.ts` until the official event page and the event finder agree.
- DEKA zone 1: only as the current rulebook states it; the ambiguous women's figure is described without a number.
- Never imply that ATHX or DEKA has events in India.

### Topic cluster and conversion changes (from the reading-list notes, section 2)
- Hub and spokes: `HYBRID_HUB` and `HYBRID_CLUSTER` in `shared.ts`. Every race post shows "The hybrid fitness race guide" box with all seven posts, the hub tagged "start here: the comparison". Cluster posts are left out of the generic "More from the blog" list on cluster pages. Intent map: `src/content/blog/CLUSTER-hybrid-races.md`.
- One primary CTA per page: in the "Train for it with Jalan PT" card the WhatsApp button is now the only button style; "See the programs" is a text link.
- Trust signals next to the CTA: the credentials line (ASCA Level 1 and ACE, "neither body endorses this business or this article") moved from the foot of the page into the CTA card. Applies to all blog posts.
- Client as hero: the new posts open with the reader's goal ("You want to…") and the CTA opener says what the reader does and what the coach does.
- Translation-ready copy and RTL: short sentences, no idioms; in Arabic every run of Latin letters or numbers (HYROX, 27.5 kg, 1:27:59) is isolated with `<bdi>` so units and numbers keep their order. Glossary: `src/content/blog/TRANSLATION-GLOSSARY.md`.
- Landing pages: "Read next" on `/online-strength-and-conditioning-coach` now also links the hub and the HYROX training plan; `/getting-back-into-exercise` links the at-home HYROX post. The generic fill no longer picks race posts by accident.
## 2 Nov 2026 (IST), batch 12: grip strength post, "Jump to" links with item anchors, shorter meta descriptions

### Blog
- New post: **"Best exercises for grip strength: 7 moves and a sample week"** at `/blog/best-exercises-for-grip-strength`. It targets "exercises for grip strength" / "grip strength exercises" and ties to "online strength and conditioning coach" and "personal trainer at home". It leads into Iron Hour (60 min 1:1; set-up 0, warm-up 4, primary 14, accessories 28 "where carries, hangs and holds go", cool-down 50), and the English coached card links to `/online-strength-and-conditioning-coach` (`programLink`). It also names Lean Reset, Return (45 minutes, 12 alternate-day sessions a month), Open Floor and the Consultation.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-exercises-for-grip-strength`. Arabic renders `lang="ar" dir="rtl"` and uses "بالتناوب: يوم تمرين ويوم راحة" for Return. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD comes from the shared `postHead`: Article, ItemList and BreadcrumbList.
- The 7 items: farmer's carry, dead hang (only from a bar rated for your weight; feet on a stool to make it easier), towel row, pinch hold (plates or thick books), wrist curl and reverse wrist curl, squeeze (hand gripper or soft ball), and finger extensions with a rubber band.
- The section "How often, how heavy, and what grip tells you" covers:
  - WHO: muscle-strengthening on 2 or more days a week; grip goes at the end of 2–3 strength sessions, not every day.
  - ACSM's 8–12 rep / 2–10% rule; for holds, add seconds first, then weight.
  - Does it work? Exercise raised grip in older adults, but the gain was small (24 trials, 3,018 people, average age 73). Task-specific and mixed programmes looked best.
  - Grip and health: PURE (139,691 adults aged 35–70, 17 countries including India and the UAE; every 5 kg less grip linked to 16% higher all-cause mortality over about 4 years), UK Biobank (half a million aged 40–69) and the Honolulu Heart Program (6,089 men; weakest third more than twice as likely to have self-care disability 25 years later).
  - **All labelled as links, not causes.** The intro quotes the PURE authors' own caution that more research is needed to test whether getting stronger lowers the risk. A later line says weak grip goes with weak muscles overall, illness and poor nutrition, so squeezing a gripper alone won't undo that.
  - EWGSOP2 sarcopenia cut-offs (under 27 kg men, under 16 kg women, on a dynamometer) are given as a clinic test, not a home one, with "ask your doctor" if worried about losing strength.
- Content is in `src/content/blog/grip-strength.ts` (export `gripStrengthPost`). All 9 sources are real and were checked on 2 Nov 2026. For each paper, title, authors, journal, year, volume/pages and the finding used were checked against the Europe PMC record and abstract (the EWGSOP2 cut-offs against the full text, PMC6322506), and each DOI was confirmed as registered at doi.org. The WHO page returned 200. The PURE country list was checked in the Lancet press release on EurekAlert.
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. Leong et al., Prognostic value of grip strength: PURE study, Lancet 2015;386(9990):266–273: https://doi.org/10.1016/S0140-6736(14)62000-6 (HR 1.16 per 5 kg lower grip for all-cause mortality; stronger predictor than systolic blood pressure; "further research is needed … to test whether improvement in strength reduces mortality").
  3. Celis-Morales et al., Grip strength and cardiovascular, respiratory and cancer outcomes and all-cause mortality, UK Biobank, BMJ 2018;361:k1651: https://doi.org/10.1136/bmj.k1651
  4. Rantanen et al., Midlife hand grip strength as a predictor of old age disability, JAMA 1999;281(6):558–560: https://doi.org/10.1001/jama.281.6.558
  5. Bohannon, Grip strength: an indispensable biomarker for older adults, Clin Interv Aging 2019;14:1681–1691: https://doi.org/10.2147/CIA.S194543
  6. Cruz-Jentoft et al., Sarcopenia: revised European consensus (EWGSOP2), Age Ageing 2019;48(1):16–31: https://doi.org/10.1093/ageing/afy169
  7. Labott et al., Effects of exercise training on handgrip strength in older adults: meta-analytical review, Gerontology 2019;65(6):686–698: https://doi.org/10.1159/000501203 (24 trials, 3,018 participants, SMD 0.28, small).
  8. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  9. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- The sample week (strength Monday, Wednesday and Friday with two grip moves at the end of each, walks between, carrying the shopping on Saturday, never two hard grip days in a row) is labelled "Sample only. Not a prescription." No client results, quotes or prices. Credentials line (ASCA Level 1 and ACE; neither body endorses the business or the article).
- Safety note: ACSM screening; breathe through every hold (no breath-holding, especially with high blood pressure); ask a doctor or physiotherapist first with hand, wrist, elbow or shoulder pain, arthritis in the hands, a recent injury or surgery, or numbness or tingling in the fingers; hang only from a fixed bar rated for your weight and step down onto a stool; stop for sharp pain, numbness or tingling.
- `src/content/blog/index.ts` lists twelve posts, newest first. The home footer's "From the blog" picks up the grip post automatically (two newest: grip, core).
- New routes: `src/routes/blog.best-exercises-for-grip-strength.tsx` and `src/routes/$lang.blog.best-exercises-for-grip-strength.tsx` (`/en/...` and unknown codes return 404). `src/routeTree.gen.ts` is the file the TanStack Router plugin generated during this run's build (not hand-edited).

### Internal links
- `/online-strength-and-conditioning-coach`: new line in "How Iron Hour runs": "Carries and hangs go in there too. Grip on your own days: the 7 best exercises for grip strength."
- `/getting-back-into-exercise`: new line in "How Return runs": "Shopping bags feel heavier than they used to? Read the 7 best exercises for grip strength."
- Every post's "More from the blog", `/blog` in all 7 languages, the country pages, the fat-loss page and the home footer pick the new post up automatically (newest first).

### SEO, accessibility and speed
- **Item anchors and ItemList URLs (every post, every language).** Each of the 7 list cards now has a stable id (`#item-1` … `#item-7`), and each `ListItem` in the ItemList JSON-LD now carries a `url` pointing at that anchor (for example `https://onlinefitness.com/blog/best-exercises-for-grip-strength#item-3`). That is the shape Google's list guidance asks for, and it lets search results and shares deep-link to one exercise.
- **"Jump to" links (every post, every language).** Under each list heading there is now a short `nav` of numbered chips, one per item, linking to those anchors. Its accessible name is localised ("Jump to: …", new `JUMP_LABEL` in `shared.ts`, 7 languages). Chips are at least 44px tall (tap target). Cards have `scroll-mt-24` so a jumped-to card isn't hidden at the top. Smooth scrolling for in-page jumps is on, and the existing reduced-motion rule turns it off.
- **Meta descriptions trimmed to 160 characters or fewer** where they ran long, so Google is less likely to cut them mid-sentence:
  - The blog index in all 7 languages. It used to list every post title and grew with each batch (over 400 characters in English). It is now one fixed line per language (English: "Short, sourced training notes from an online personal trainer in Pune: the best exercises for strength, grip, core and getting back into it, with sample weeks."). The Blog JSON-LD still lists every post.
  - English: core / lower back (175 to 158), over 60s (173 to 155), runners (173 to 159), travel (166 to 156).
  - Spanish: core (202 to 153), desk workers (162 to 156), one dumbbell (201 to 145), over 60s (211 to 159), runners (220 to 159), travel (215 to 159), warm-up (178 to 152), women over 40 (181 to 151).
  - `/online-personal-trainer-singapore` (171 to 150): "Live online personal training for Singapore, coached from Pune on Meet, Zoom or FaceTime. 1:1 or small group, Hindi or English. 2½ hours ahead of IST."
  - No facts changed. Post `modified` dates were left as they were (meta text only).
- New post checked: headings go h1 → h2 → h3 with no skips; citation links 1–9 all have a matching `#source-n`; no `<img>` without alt.

### Theme: logo blue on the new list navigation
- `.jump-chip`: bone pill with a hairline border that turns into a 2px exact logo-blue (#014ffe, 5.0:1 on bone) ring on hover and focus, matching the card hover. Numbers are in the deeper logo blue (#0147d6) with tabular figures.
- `.card-lift:target`: the card you jumped to (from a chip or a search result) gets a 4px logo-blue edge on the start side and a 1px logo-blue outline. It mirrors in RTL. No new colours, no orange.

### SEO: sitemap
- `public/sitemap.xml`: 98 URLs. That is home, six landing pages, 7 blog indexes, and 7 language URLs for each of the 12 posts, with reciprocal `xhtml:link` hreflang and x-default (landing pages list `en` + x-default). `lastmod` 2026-11-02 for home, `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach`, the 7 blog indexes and the new post.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- Built a copy of the branch with `vite build` and the local-only verify config (stub for the missing `src/lib/preview-host-bridge.ts`, no PWA plugin, Nitro `node-server` preset; not committed), using the restored binaries already on the box. The build passed (Node 24).
- The real `npm run build` still fails, with the same error as before: `Could not resolve './grok-pwa-shared.mjs' in scripts/grok-pwa-plugin.mjs`. The platform files are still missing.
- The built server returned 200 for all 98 sitemap URLs, and 404 for `/en/blog/best-exercises-for-grip-strength` and `/xx/blog/best-exercises-for-grip-strength`.
- On all 98 sitemap URLs: one title, one description, one h1, one canonical (matching the sitemap URL), every JSON-LD block parses, og:image is `og-card.jpg`, every post page has exactly 8 hreflang `<link>`s, no raw `{n}` markers, and Arabic pages render `dir="rtl"`. On every post page in every language: 7 `#item-n` cards, 7 "Jump to" links, and 7 ItemList URLs that match the page's own URL.
- Headless Chrome screenshots of the English and Arabic posts at 390px: chips wrap cleanly, and RTL is correct.
- `tsc --noEmit`: the same 14 errors as before, all from the missing platform files. ESLint on the changed files: no errors (the same fast-refresh warning in `blog-post.tsx` as before).

### Still open (needs Susmit)
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing, so `npm run build` fails from a clean clone.
- Grip post: it quotes mortality and disability links. They are framed as observational, with the authors' own caution, but please read the "what grip tells you" section and confirm you're happy with the tone. The EWGSOP2 cut-offs are clinic numbers. Remove them if you'd rather not show numbers readers might self-test against.
- Back-pain post: still worth a physio's read of "Before you start".
- Meta descriptions in Hindi, Gujarati and Arabic: several still run 160–200 characters (for example Hindi and Gujarati over 60s, Hindi women over 40). Devanagari and Gujarati character counts include vowel signs, so the real display width is shorter, but a native speaker could tighten them during the translation review.
- Social card: `og-card.jpg` is a clean, logo-based card made on the box. Swap in a designed version at the same path if you have one.
- `clientNotes`: labelled as samples. Replace them with real, consented quotes or delete them before any are shown.
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all twelve posts, the blog index copy, `SOURCE_LABEL`, `NEW_TAB_LABEL` and the new `JUMP_LABEL`.
- Fonts: Outfit is still a third-party, render-blocking Google Fonts request on every page. Self-hosting needs a woff2 file in the repo (through binary-parts).
- The country pages are English only. Hindi versions of the India page (and Arabic for Dubai) would be the next step, if wanted.
- There is no `.gitignore` in the repo, so `node_modules`, `.output` and lockfiles show up as untracked after a local install.

## 1 Nov 2026 (IST), batch 11: core exercises for lower back health, exact logo colours, image sizes and new-tab labels

### Blog
- New post: **"Best core exercises for lower back health: 7 moves and a sample week"** at `/blog/best-core-exercises-for-lower-back-health`. It targets "core exercises for lower back" / "exercises for lower back health" and ties to "getting back into exercise" and "personal trainer at home". It leads into Return (45 minutes, 12 alternate-day sessions a month), "cleared to train" only, and the English coached card links to `/getting-back-into-exercise` (`programLink`). It also names Iron Hour (set-up 0, warm-up 4, primary 14, accessories 28, cool-down 50), Lean Reset, Open Floor and the Consultation.
- **Careful, non-medical framing.** The intro says the list is for keeping a back strong and is not a treatment, and sends anyone in pain to "Before you start" first. The coached card says "I'm a coach, not a doctor or physio". "Before you start" gives the NHS's see-a-doctor signs (no better after a few weeks, stops daily activities, not eased by rest or worse at night, unexplained weight loss) and its urgent signs (symptoms in both legs, numbness around the genitals or bottom, new bladder or bowel trouble, chest pain, fever or feeling unwell, sudden severe or fast-worsening pain, pain after a serious accident). It also covers ACSM screening, asking a doctor or physio about pregnancy, recent birth, recent back surgery or a diagnosed spine condition, and stopping if pain spreads down a leg or gets sharply worse.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-core-exercises-for-lower-back-health`. Arabic renders `lang="ar" dir="rtl"` and uses "بالتناوب: يوم تمرين ويوم راحة" for Return. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD comes from the shared `postHead`: Article, ItemList and BreadcrumbList.
- The 7 items: dead bug, bird dog, side plank (knees, then feet), glute bridge, Pallof press with a band (forearm plank if no band), suitcase carry, and hip hinge, then Romanian deadlift.
- The section "Which exercise is best, how often, and should it hurt?" covers:
  - No single exercise wins: "core" motor control exercise was no better than other exercise (Cochrane, 29 trials, 2,431 people).
  - Pilates ranked highest for pain, and strength and core stability work highest for function; stretching alone did no better than no treatment. **Labelled as low-quality evidence.**
  - Size of effect: exercise probably reduces long-term low back pain by about 15 points on a 0–100 scale versus no treatment; the effect on function was smaller ("Useful. Not magic.").
  - Prevention: exercise alone cut the risk of low back pain by 33% (8 trials, 1,634 people), with strength plus stretching or aerobic work 2–3 times a week suggested. Exercise with education lowered the risk of an episode; education alone, back belts and shoe insoles didn't appear to.
  - ACSM's 8–12 rep / 2–10% rule.
  - Soreness: most reported side effects were minor, such as muscle soreness. Pain that gets worse means stop and see a doctor (NHS).
- Content is in `src/content/blog/core-lower-back.ts` (export `coreBackPost`). All 10 sources are real and were opened on 1 Nov 2026. For each paper, title, authors, journal, year, volume/pages and the finding used were checked against the Europe PMC record and abstract, and each DOI was confirmed as registered at doi.org. The WHO, NICE and NHS pages each returned 200, and the wording used was checked on the page (WHO's recommendation text via the guideline's recommendations table).
  1. WHO guideline for non-surgical management of chronic primary low back pain in adults in primary and community care settings (2023): https://www.who.int/publications/i/item/9789240081789 ("A structured exercise therapy or programme may be offered as part of care to adults, including older people, with CPLBP"; conditional recommendation, low-certainty evidence).
  2. NICE NG59, Low back pain and sciatica in over 16s (2016, last updated 29 July 2026): https://www.nice.org.uk/guidance/ng59 (1.2.2: consider a group exercise programme for a specific episode or flare-up).
  3. NHS, Back pain (page last reviewed 5 March 2026): https://www.nhs.uk/conditions/back-pain/ (usually improves within a few weeks; stay active; don't stay in bed for long periods; see-a-GP, urgent and emergency signs; stop if pain gets worse).
  4. Hayden et al., Exercise therapy for chronic low back pain, Cochrane 2021;9(9):CD009790: https://doi.org/10.1002/14651858.CD009790.pub2 (249 trials; pain MD −15.2 on 0–100 vs no treatment/usual care/placebo, moderate certainty; function MD −6.8; harms mostly minor, e.g. muscle soreness).
  5. Owen et al., Which specific modes of exercise training are most effective for treating low back pain? Network meta-analysis, Br J Sports Med 2020;54(21):1279–1287: https://doi.org/10.1136/bjsports-2019-100886 (89 studies, 5,578 patients; Pilates for pain, resistance and stabilisation/motor control for function; stretching and McKenzie not different from true control; low-quality evidence).
  6. Saragiotto et al., Motor control exercise for chronic non-specific low-back pain, Cochrane 2016;(1):CD012004: https://doi.org/10.1002/14651858.CD012004 (29 trials, 2,431 people; similar outcomes to other exercise; choice by preference, cost and safety).
  7. Shiri, Coggon & Falah-Hassani, Exercise for the prevention of low back pain, Am J Epidemiol 2018;187(5):1093–1101: https://doi.org/10.1093/aje/kwx337 (exercise alone RR 0.67, 8 RCTs, n = 1,634; strengthening with stretching or aerobic exercise 2–3 times a week).
  8. Steffens et al., Prevention of low back pain, JAMA Intern Med 2016;176(2):199–208: https://doi.org/10.1001/jamainternmed.2015.7431 (exercise plus education RR 0.55, moderate quality; education alone, back belts, shoe insoles no effect).
  9. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  10. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- The sample week (Core A Monday and Friday, Core B Wednesday, walks between, swimming/yoga/Pilates optional on Saturday) is labelled "Sample only. Not a prescription." No client results, quotes or prices. Credentials line (ASCA Level 1 and ACE; neither body endorses the business or the article).
- `src/content/blog/index.ts` lists eleven posts, newest first. `BLOG_INDEX_COPY` descriptions lead with the new post in all 7 languages. The home footer's "From the blog" now shows the core post and the over-60s post.
- New routes: `src/routes/blog.best-core-exercises-for-lower-back-health.tsx` and `src/routes/$lang.blog.best-core-exercises-for-lower-back-health.tsx` (`/en/...` and unknown codes return 404). `src/routeTree.gen.ts` is the file the TanStack Router plugin generated during this run's build (not hand-edited).

### Internal links
- `/getting-back-into-exercise`: new line in "How Return runs": "Back been sore? Once your doctor or physio says exercise is fine, read the 7 best core exercises for lower back health."
- `/online-strength-and-conditioning-coach`: new line in "How Iron Hour runs": "Core work goes in the accessories, from minute 28. On your own days: the 7 best core exercises for lower back health."
- The India, Dubai and Singapore pages, the fat-loss page, every post's "More from the blog" and the home footer pick the new post up automatically (newest first).

### SEO, accessibility and speed
- **Image sizes (layout shift):** the home page's images now carry their real intrinsic `width`/`height`, so the browser reserves space before they load: header and footer logo 1840×330, the hero video-call image 1287×782, coach photo 1500×1800, ASCA logo 800×368, ACE logo 417×120. The content-page header logo said `160×44` (ratio 3.6), but the file is 1840×330 (ratio 5.6). It now has the real size. Displayed sizes are unchanged (CSS still sets the height).
- **New-tab links:** every source link and the WhatsApp button on post pages open in a new tab. Each now has a visually hidden "(opens in a new tab)" note in the page's language (`NEW_TAB_LABEL` in `shared.ts`, 7 languages), so screen-reader users aren't surprised.
- New post checked: headings go h1 → h2 → h3 with no skips; citation links 1–10 all have a matching `#source-n`; no `<img>` without alt.

### Theme: exact logo colours
- The logo's own pixels were sampled (`src/assets/ofw-logo.png`): the ink is #030406 and the blue is #014ffe. `--color-ink` is now #030406 (was #06070a). The same change applies to `theme-color` in `__root.tsx`, the ink-based shadows in `styles.css`, and the home, booking and note overlays, which now use the `ink` token instead of a hard-coded hex.
- New token `--color-logo: #014ffe` (the exact logo blue). It now draws the eyebrow bar, list bullets, the card hover border and the underline of inline links in long copy. On bone it is 5.0:1, against 3.3:1 for the lifted blue used before, so the marks and underlines are clearer. Marks on ink keep the lifted blue #3d7bff (the exact blue is only 3.5:1 on ink). Text colours are unchanged. No orange.
- Not changed: `src/lib/og/site.json` still says `06070a`. It is written by the platform's brand-asset task, so it was left alone.

### SEO: sitemap
- `public/sitemap.xml`: 91 URLs. That is home, six landing pages, 7 blog indexes, and 7 language URLs for each of the 11 posts, with reciprocal `xhtml:link` hreflang and x-default (landing pages list `en` + x-default). `lastmod` 2026-11-01 for home, `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach`, the 7 blog indexes and the new post.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- `node_modules` was gone from the box, so I reinstalled it with `npm@10 install --legacy-peer-deps`. The lockfile is local only and not committed. Then I restored the binaries with `node scripts/restore-binaries.mjs` and built a copy of the branch with `vite build` and the local-only verify config (stub for the missing `src/lib/preview-host-bridge.ts`, no PWA plugin, Nitro `node-server` preset; not committed). The build passed (Node 24 on the box).
- The built server returned 200 for all 91 sitemap URLs, and 404 for `/en/blog/best-core-exercises-for-lower-back-health` and `/xx/blog/best-core-exercises-for-lower-back-health`.
- On all 91 sitemap URLs: one title, one description, one h1, one canonical (matching the sitemap URL), every JSON-LD block parses, og:image is `og-card.jpg`, every post page has exactly 8 hreflang `<link>`s, no raw `{n}` markers, Arabic pages render `dir="rtl"`, and no page contains "يوماً بعد يوم". The new post in en, ar and gu (and hi, es, zh, ja) has Article, ItemList and BreadcrumbList JSON-LD.
- Headless Chrome screenshots: the English and Arabic posts at 390px (RTL correct, citation links render), and `/getting-back-into-exercise` at 1280px.
- `tsc --noEmit`: the same 14 errors as before, all from the missing platform files. ESLint on the changed files: no errors (the same fast-refresh warning in `blog-post.tsx` as before).
- The real `npm run build` from a clean clone still fails, because the same platform files are missing.

### Still open (needs Susmit)
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing.
- Back-pain post: it is careful and sourced, but it touches health. Please read "Before you start" and the coached card and confirm you're happy with the wording. A physio's read would be ideal. The urgent-care signs come from the NHS (UK). The post says "get urgent medical help" and names no phone number, so it works in India, Dubai and Singapore.
- Social card: `og-card.jpg` is a clean, logo-based card made on the box. Swap in a designed version at the same path if you have one.
- `clientNotes`: labelled as samples. Replace them with real, consented quotes or delete them before any are shown.
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all eleven posts, the blog index copy, `SOURCE_LABEL` and the new `NEW_TAB_LABEL`.
- Fonts: Outfit is still a third-party, render-blocking Google Fonts request on every page. Self-hosting needs a woff2 file in the repo (through binary-parts); not done this batch.
- The country pages are English only. Hindi versions of the India page (and Arabic for Dubai) would be the next step, if wanted.
- There is no `.gitignore` in the repo, so `node_modules`, `.output` and lockfiles show up as untracked after a local install. A short `.gitignore` would help, if you want one.

## 31 Oct 2026 (IST), batch 10: over-60s strength post, blue social card, Arabic "alternate days" fix

### Blog
- New post: **"Best strength exercises for over 60s: 7 moves and a sample week"** at `/blog/best-strength-exercises-for-over-60s`. It targets "strength exercises for over 60s" / "strength training for seniors". It leads into Return (45 minutes, 12 alternate-day sessions a month), and the English coached card links to `/getting-back-into-exercise` (`programLink`). It also names Iron Hour (set-up 0, warm-up 4, primary 14, accessories 28, cool-down 50), Lean Reset, Open Floor and the Consultation.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-strength-exercises-for-over-60s`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD comes from the shared `postHead`: Article, ItemList and BreadcrumbList.
- The 7 items: sit-to-stand from a chair, step-up on the bottom stair, hip hinge with dumbbells or a bag, push-up (wall, then counter, then a low step), one-arm row, carry, and balance (feet together, heel-to-toe, one leg) at the kitchen counter.
- The section "How often, how heavy, and is it too late?" covers:
  - 2–3 strength sessions a week (most of the 121 Cochrane trials), plus balance to reach WHO's 3 or more days.
  - ACSM's 8–12 rep / 2–10% rule, and no breath-holding.
  - Not too late: strength and muscle size went up in trials of people 75 and over, and strength even in those 80 and over (Grgic).
  - "Stand up fast, sit down slow": power training was linked to a modest extra gain in function. **Labelled as low-certainty evidence.**
  - Some joint pain and muscle soreness is common at the start; serious problems were rare in the Cochrane review.
- Falls are said carefully: balance and functional exercises cut the rate of falls by 24%; adding strength work probably cut it by 34%; **strength training alone had an uncertain effect on falls**, so the post does both.
- Content is in `src/content/blog/over-60-strength.ts` (export `over60StrengthPost`). All 9 sources are real. Title, authors, journal, year, volume/pages and the finding used were checked against each Europe PMC record and abstract on 31 Oct 2026, and each DOI was confirmed as registered at doi.org (WHO page returns 200). WHO's older-adult wording was checked in the Bull et al. 2020 full text (PMC7719906).
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128 (adults 65+: "varied multicomponent physical activity that emphasises functional balance and strength training at moderate or greater intensity on 3 or more days a week, to enhance functional capacity and to prevent falls").
  2. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  3. Liu & Latham, Progressive resistance strength training for improving physical function in older adults, Cochrane 2009;(3):CD002759: https://doi.org/10.1002/14651858.CD002759.pub2 (121 trials, 6,700 participants; mostly 2–3×/week at high intensity; large effect on strength; moderate-to-large for getting out of a chair; modest for gait speed; serious adverse events rare, none reported as directly caused by the exercise).
  4. Sherrington et al., Exercise for preventing falls in older people living in the community, Cochrane 2019;1:CD012424: https://doi.org/10.1002/14651858.CD012424.pub2 (108 RCTs, 23,407 participants, average age 76; balance and functional exercises RaR 0.76; multiple types probably RaR 0.66; resistance alone uncertain).
  5. Grgic et al., Resistance training on muscle size and strength in very elderly adults, Sports Med 2020;50(11):1983–1999: https://doi.org/10.1007/s40279-020-01331-7 (22 studies, 75+; strength and whole-muscle size up; 80+ subgroup strength up).
  6. Fiatarone et al., Exercise training and nutritional supplementation for physical frailty in very elderly people, NEJM 1994;330(25):1769–1775: https://doi.org/10.1056/NEJM199406233302501 (100 frail nursing-home residents, mean age 87.1, 10 weeks; strength +113%, gait velocity +11.8%, stair-climbing power +28.4%). **Labelled as one small trial in very old, frail people.**
  7. Balachandran et al., Power training vs traditional strength training on physical function in older adults, JAMA Netw Open 2022;5(5):e2211623: https://doi.org/10.1001/jamanetworkopen.2022.11623 (20 RCTs, 566 adults, mean age 70.1; SMD 0.30, low certainty).
  8. Guralnik et al., A short physical performance battery assessing lower extremity function, J Gerontol 1994;49(2):M85–M94: https://doi.org/10.1093/geronj/49.2.M85 (more than 5,000 people aged 71+; balance, 8-foot walk, 5 chair rises; strongly associated with disability; predicted short-term mortality and nursing-home admission). **Labelled as a link, not a cause.**
  9. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- The sample week (Strength A Monday and Friday, B Wednesday, walks between, balance every day) is labelled "Sample only. Not a prescription." No client results, quotes or prices. Credentials line (ASCA Level 1 and ACE; neither body endorses the business or the article).
- Safety note: ACSM screening; a sturdy chair against a wall, a counter or rail within reach, clear floor, good light, shoes with grip; breathe out as you lift; with osteoporosis, a joint replacement or a recent fall, ask a doctor or physiotherapist first; stop for chest pain, dizziness or sharp pain.
- The English title and h1 say "over 60s" (no hyphen, with a non-breaking space in the h1) so the heading doesn't break as "over-/60s" on phones. The slug keeps the hyphen.
- `src/content/blog/index.ts` lists ten posts, newest first. `BLOG_INDEX_COPY` descriptions lead with the new post in all 7 languages. The home footer's "From the blog" shows the two newest posts (over 60s, runners).
- New routes: `src/routes/blog.best-strength-exercises-for-over-60s.tsx` and `src/routes/$lang.blog.best-strength-exercises-for-over-60s.tsx` (`/en/...` and unknown codes return 404). `src/routeTree.gen.ts` is the file the TanStack Router plugin generated during this run's build (not hand-edited).

### Internal links
- `/getting-back-into-exercise`: new line in "How Return runs" ("Over 60? Read the 7 best strength exercises for over 60s"). Read next now leads with the long-break post, then the over-60s post, then the two newest others. New FAQ "I'm over 60. Is it too late?" (no numbers, no promise; medical clearance with a heart, metabolic or kidney condition or symptoms). FAQPage JSON-LD now has 7 questions.
- The India, Dubai and Singapore pages and `/online-strength-and-conditioning-coach` pick the new post up in Read next automatically (newest first). `/personal-trainer-for-fat-loss` lists every post.

### Translation fix: Arabic "alternate days" (open since batch 9)
- The 8 older posts gave Return's "alternate days" as "يوماً بعد يوم", which can read as "day after day". All 8 now use the runners post's wording, "بالتناوب: يوم تمرين ويوم راحة" (alternating: a training day and a rest day): desk workers, long break, women over 40, warm-up, S&C beginners, cool-down, one dumbbell, travel. No other strings changed. Post `modified` dates were left as they were (one Arabic phrase).

### SEO and theme: social card matched to the logo
- New `public/og-card.jpg` (1200×630 JPEG, 56 KB): the real logo (`src/assets/ofw-logo.png`) on the site's bone background, "Live 1:1 and small-group coaching on video" in Outfit, and an ink band with a logo-blue rule: "Jalan PT", "Google Meet · Zoom · FaceTime", "Pune · IST", "Hindi or English". No prices, numbers or claims.
- It ships like the other images: base64 in `binary-parts/parts/public__og-card.jpg.000`, listed in `binary-parts/manifest.json`, restored by `node scripts/restore-binaries.mjs`. The binary itself is not committed.
- `OG_IMAGE` in `src/lib/seo.ts` now points at `/og-card.jpg`, with new alt text. That covers og:image, twitter:image and the Article `image` on every page. The old copper `public/og.jpg` is untouched and no longer referenced. **If you'd rather keep the old card, or have a designed one, change the one URL in `OG_IMAGE`.**
- Structured data: the coach `Person` (Article `author` on every post) now has a `url`, as Google's article guidance recommends.
- Theme: the eyebrow bar and the CTA-card crossbar (`.mark-cap`) now have an angled end, echoing the blue diagonal of the W in the logo. Both mirror in RTL. Colours unchanged (ink #06070a, blue #0147d6 / #3d7bff). No orange.

### SEO: sitemap
- `public/sitemap.xml`: 84 URLs. That is home, six landing pages (three of them the country pages), 7 blog indexes, and 7 language URLs for each of the 10 posts, with reciprocal `xhtml:link` hreflang and x-default (landing pages list `en` + x-default). `lastmod` 2026-10-31 for home, `/getting-back-into-exercise`, the 7 blog indexes and the new post.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- Restored the binaries with `node scripts/restore-binaries.mjs` (including the new `og-card.jpg`, byte-identical to the source) and built a copy of the branch with `vite build` and the local-only verify config (stub for the missing `src/lib/preview-host-bridge.ts`, no PWA plugin, Nitro `node-server` preset; not committed). The build passed (Node 20 on the box).
- The built server returned 200 for all 84 sitemap URLs, and 404 for `/en/blog/best-strength-exercises-for-over-60s` and `/xx/blog/best-strength-exercises-for-over-60s`. `/og-card.jpg` returned 200 as `image/jpeg`.
- On all 84 sitemap URLs: one title, one h1, one canonical (matching the sitemap URL), every JSON-LD block parses, og:image is `og-card.jpg`, every post page has exactly 8 hreflang `<link>`s, no raw `{n}` markers, and Arabic pages render `dir="rtl"`. New post: headings go h1 → h2 → h3 with no skips; citation links 1–9 all have a matching `#source-n`; no `<img>` without alt. No page contains "يوماً بعد يوم".
- Headless Chrome screenshots: the English post at 390px (h1 keeps "over 60s" together), the Arabic post at 390px (RTL, angled eyebrow bar mirrored), and `/getting-back-into-exercise` at 1280px (new link, FAQ and Read next).
- `tsc --noEmit`: the same 14 errors as before, all from the missing platform files. ESLint on the changed files: no errors.
- The real `npm run build` from a clean clone still fails, because the same platform files are missing.

### Still open (needs Susmit)
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing.
- Social card: `og-card.jpg` is a clean, logo-based card made on the box. It replaces the copper `og.jpg` in the tags. Swap in a designed version at the same path if you have one.
- `clientNotes`: labelled as samples. Replace them with real, consented quotes or delete them before any are shown.
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all ten posts, the blog index copy and `SOURCE_LABEL`. The Arabic "alternate days" wording is now the same in every post, but still needs a native check.
- Fonts: Outfit is still a third-party, render-blocking Google Fonts request on every page. Self-hosting needs a woff2 file in the repo (through binary-parts, like the images); not done this batch.
- The country pages are English only. Hindi versions of the India page (and Arabic for Dubai) would be the next step, if wanted.

## 30 Oct 2026 (IST), batch 9: India, Dubai and Singapore pages, runners post, home stats band

### New landing pages: `/online-personal-trainer-india`, `/online-personal-trainer-dubai`, `/online-personal-trainer-singapore`
- Ported from the prototypes in `/workspace/jalanpt/site/online-personal-trainer-*`. Titles and descriptions are the prototype's, for example "Online Personal Trainer in Dubai, Live 1:1 at Home | Jalan PT".
- The three pages share one component, `src/components/country-landing.tsx` (`CountryLandingPage` + `countryHead`). Copy and facts live in `src/content/country-pages.ts`. Each route file (`src/routes/online-personal-trainer-{india,dubai,singapore}.tsx`) is 9 lines.
- Sections: breadcrumb, eyebrow, one h1 and short lead lines; "Same clock" (India) or "The clock" (Dubai and Singapore); "A coach on the call"; "Pick a program" (cards link to the Iron Hour, Lean Reset and Return pages; Open Floor goes to `/#programs`); FAQ; Read next; "Also coaching" (links to the other two country pages); the consultation card (30 minutes, not training); and the credentials line (neither body endorses the business).
- Time zones: Dubai is 1½ hours behind IST and Singapore is 2½ hours ahead. Neither place uses daylight saving. The example-conversion table from the prototype is now a real `<table>` with a `<caption>` ("Example conversions only. Not set slots") and `<th scope="col">` headers. All 10 rows were checked: IST is UTC+5:30, GST UTC+4, SGT UTC+8.
- Singapore leads with Lean Reset. India and Dubai lead with Iron Hour (the prototype's order). Read next leads with the desk-workers and one-dumbbell posts (India), or with the travel post (Dubai, Singapore).
- FAQ: the prototype's questions, plus "What do I need at home?", "Where do I start?" and, for Dubai, "I travel a lot". The cost answer gives no price: booking holds a time and the fee is agreed directly. No results, numbers or quotes.
- JSON-LD on each page: Service (provider = the business; `areaServed` is Country India, City Dubai in the UAE, or Country Singapore), FAQPage (6 questions) and BreadcrumbList. English only (hreflang `en` + `x-default`).
- Internal links in: the content-page footer (India, Dubai, Singapore) and the home footer ("Online personal trainer in …").

### Home stats band: unverified numbers removed
- Removed "3500+ live sessions conducted", "4–5 average sessions per day" and "10+ countries with 90% consistency". None of them had a source, and they had been flagged since 22 Oct.
- The band now states only facts from the brief: "Mon–Sat · Morning, midday, evening." (unchanged), "Live 1:1 · Or a small group, on video.", "On video · Meet, Zoom or FaceTime." and "IST · From Pune. Hindi or English."
- Hindi strings were added to `src/studio/hindi.ts` and the three old ones removed. The third icon is now `Laptop` instead of `Repeat`.
- **If the old numbers are real and you can back them up, they can go back.** It's one commit to revert, in `src/components/home.tsx` and `src/studio/hindi.ts`.

### Blog
- New post: **"Best strength exercises for runners: 7 moves and a sample week"** at `/blog/best-strength-exercises-for-runners`. It targets "strength exercises for runners" / "strength training for runners" and leads into Iron Hour (set-up 0, warm-up 4, primary 14, accessories 28, cool-down 50). It also names Return, Lean Reset, Open Floor and the Consultation. The English coached card links to `/online-strength-and-conditioning-coach` (`programLink`).
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-strength-exercises-for-runners`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD comes from the shared `postHead`: Article, ItemList and BreadcrumbList.
- The 7 items: squat (goblet, then barbell), Romanian deadlift, rear-foot-elevated split squat, single-leg calf raise (straight and bent knee), single-leg glute bridge, side plank, and pogo hops and skips.
- The section "How often, how heavy, and will it slow me down?" covers:
  - 2–3 sessions a week (Blagrove).
  - ACSM's 8–12 rep / 2–10% rule, and building up to the heavier sets of 4 used in the squat trial.
  - No bulking: body composition was unharmed in the review, and there was no change in body or lean mass over 40 weeks (Beattie).
  - Injuries are "promising, not promised". Lauersen found strength training cut sports injuries to under a third across many sports, not only runners. The Toresdahl 2020 RCT in 720 first-time marathoners found that a self-guided 10-minute routine did not reduce injuries that stopped people finishing (7.1% vs 7.3%). That null result is reported plainly.
- Content is in `src/content/blog/runners-strength.ts` (export `runnersStrengthPost`). All 10 sources are real. Title, authors, journal, year, volume/pages and the finding used were checked against each Europe PMC record and abstract on 30 Oct 2026, and each DOI was confirmed as registered at doi.org (WHO page returns 200):
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  3. Blagrove, Howatson & Hayes, Strength training and the physiological determinants of middle- and long-distance running: systematic review, Sports Med 2018;48(5):1117–1149: https://doi.org/10.1007/s40279-017-0835-7 (24 studies; running economy generally 2–8% better; 1.5–10 km time trials tended to improve; "not a consistent finding"; body composition not negatively affected; 2–3 sessions/week suggested).
  4. Balsalobre-Fernández, Santos-Concejero & Grivas, Strength training and running economy in highly trained runners: meta-analysis, J Strength Cond Res 2016;30(8):2361–2368: https://doi.org/10.1519/JSC.0000000000001316 (5 studies, 93 runners; 2–4 lower-body lifts plus up to 200 jumps and 5–10 short sprints, 2–3×/week for 8–12 weeks; large effect).
  5. Støren, Helgerud, Støa & Hoff, Maximal strength training improves running economy in distance runners, MSSE 2008;40(6):1087–1092: https://doi.org/10.1249/MSS.0b013e318168da2f (17 well-trained runners; half-squats 4×4RM, 3×/week, 8 weeks; running economy +5.0%, time to exhaustion at maximal aerobic speed +21.3%; no change in VO2max or body weight). **Labelled as small.**
  6. Beattie, Carson, Lyons, Rossiter & Kenny, Strength training and performance indicators in distance runners, J Strength Cond Res 2017;31(1):9–23: https://doi.org/10.1519/JSC.0000000000001464 (20 competitive runners, 40 weeks; stronger and more economical; no change in body composition).
  7. Lauersen, Bertelsen & Andersen, Exercise interventions to prevent sports injuries: meta-analysis of RCTs, Br J Sports Med 2014;48(11):871–877: https://doi.org/10.1136/bjsports-2013-092538 (25 trials, 26,610 participants; strength training RR 0.315, stretching no effect). **Said to be across sports, not only runners.**
  8. Toresdahl et al., Strength training program to prevent injuries in runners of the New York City Marathon: randomized study, Sports Health 2020;12(1):74–79: https://doi.org/10.1177/1941738119877180 (720 first-time marathoners; 10-minute self-guided program 3×/week; overuse injury causing non-completion 7.1% vs 7.3%, RR 0.97; 20 of 52 overuse major injuries were bone stress injuries).
  9. Toresdahl et al., Strength and flexibility self-assessment and subsequent training injuries among NYC Marathon runners, Clin J Sport Med 2025;35(4):471–477: https://doi.org/10.1097/JSM.0000000000001370 (867 runners; holding a single-leg glute bridge on the weaker side for 20–29 s or ≥30 s was linked to lower overuse-injury risk than 0–9 s). **Labelled as observational and self-reported: a link, not a cause.**
  10. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- The sample running week (quality runs on Tuesday and Friday, with strength A and B on those same days) is labelled "Sample only. Not a prescription." The coaching line "Lift on hard days, so easy days stay easy" is given as advice, not as a research finding.
- No client results, quotes or prices. The post carries the credentials line (ASCA Level 1 and ACE; neither body endorses the business or the article).
- Safety note: ACSM screening; don't ramp up lifting and running in the same weeks; get shin, foot or hip pain that worsens with running checked (bone stress injuries were a common reason for not finishing in source 8); stop for sharp pain; get advice first with a joint problem, in pregnancy or after recently giving birth.
- `src/content/blog/index.ts` lists nine posts, newest first. The blog index descriptions (`BLOG_INDEX_COPY`, all 7 languages) now lead with the runners post. The home footer's "From the blog" shows the two newest posts (runners, travel). Read next on `/online-strength-and-conditioning-coach` picks the runners post up automatically.
- New routes: `src/routes/blog.best-strength-exercises-for-runners.tsx` and `src/routes/$lang.blog.best-strength-exercises-for-runners.tsx` (`/en/...` and unknown codes return 404). `src/routeTree.gen.ts` is the file the TanStack Router plugin generated during this run's build (not hand-edited).

### SEO: sitemap
- `public/sitemap.xml`: 77 URLs. That is home, six landing pages, 7 blog indexes, and 7 language URLs for each of the 9 posts, with reciprocal `xhtml:link` hreflang and x-default (landing pages list `en` + x-default). `lastmod` is 2026-10-30 for home, the blog indexes, the three new pages and the new post.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- Built a copy of the branch, with the binaries restored, using `vite build` and the local-only verify config: a stub for the missing `src/lib/preview-host-bridge.ts`, no PWA plugin, and the Nitro `node-server` preset (not committed). The build passed (Node 20 on the box).
- The built server returned 200 for all 77 sitemap URLs. It returned 404 for `/en/blog/best-strength-exercises-for-runners`, `/xx/blog/best-strength-exercises-for-runners` and `/online-personal-trainer-uk`.
- On all 77 URLs:
  - one title, one h1 and one canonical (matching the sitemap URL);
  - every JSON-LD block parses;
  - every post page has exactly 8 hreflang `<link>`s;
  - no raw `{n}` markers;
  - Arabic pages render `dir="rtl"`.
- The home page no longer contains "3500" or "countries with". The three country links are in the home footer.
- Headless Chrome screenshots: the Dubai page at 390px (the table fits, no horizontal scroll), the Arabic runners post at 390px (RTL correct, citation links render), and the home page at 1280px (new stats band).
- `tsc --noEmit`: the same 14 errors as before, all from the missing platform files. ESLint on the changed files: no errors, and one fast-refresh warning in `country-landing.tsx` (same kind as `blog-post.tsx`).
- The real `npm run build` from a clean clone still fails, because the same platform files are missing.

### Still open (needs Susmit)
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing.
- `og.jpg` is the warm, copper-lit card and does not match the blue logo. A blue and near-black 1200×630 version at the same path needs no code change.
- Home stats: the unverified numbers are gone (see above). Restore them only with a source.
- `clientNotes`: labelled as samples. Replace them with real, consented quotes or delete them before any are shown.
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all nine posts, the blog index copy and `SOURCE_LABEL`. One specific item: older Arabic posts give Return's "alternate days" as "يوماً بعد يوم", which can read as "day after day". The runners post uses "بالتناوب: يوم تمرين ويوم راحة". The 7 older strings should be checked.
- Fonts: Outfit is still a third-party, render-blocking Google Fonts request on every page (self-hosting not done this batch).
- The country pages are English only. Hindi versions of the India page (and Arabic for Dubai) would be the next step, if wanted.

## 29 Oct 2026 (IST): /online-strength-and-conditioning-coach, travel bodyweight post, fonts per language

### New landing page: `/online-strength-and-conditioning-coach`
- `src/routes/online-strength-and-conditioning-coach.tsx`, ported from the prototype in `/workspace/jalanpt/site/online-strength-and-conditioning-coach`, same pattern as `/getting-back-into-exercise`. Title and description are the prototype's: "Online Strength and Conditioning Coach, Live 1:1 | Jalan PT". It targets "online strength and conditioning coach" and leads to Iron Hour: 60 minutes, 1:1, at home on Meet/Zoom/FaceTime, Hindi or English, IST.
- Copy is the prototype's, with short lines. Sections: "Strength first", "The hour, minute by minute" (set-up 0, warm-up 4, primary 14, accessories 28, cool-down 50, as numbered logo-tile badges), "How Iron Hour runs", "Not the right fit?" (Return, Lean Reset, Open Floor, Consultation), FAQ (the prototype's 3 questions, plus form on video, cost with no price, and where to start), Read next, and the consultation card (30 minutes, not training). No prices, results or quotes. Credentials line (ASCA Level 1 and ACE; neither body endorses the business).
- JSON-LD: Service (provider = the business), FAQPage (6 questions) and BreadcrumbList. English only (hreflang `en` + `x-default`).
- Internal links in: the content-page footer ("Strength coaching"), the home footer ("Online strength and conditioning coach"), and the English coached card of the S&C beginners post, the one-dumbbell post and the new travel post (`programLink`). Links out: the S&C beginners, one-dumbbell, warm-up and cool-down posts, `/getting-back-into-exercise`, `/personal-trainer-for-fat-loss`, and Read next (which also picks up the travel post).

### Blog
- New post: **"Best bodyweight exercises for travel: 7 hotel-room moves and a sample week"** at `/blog/best-bodyweight-exercises-for-travel`. It targets "bodyweight exercises for travel" / "hotel room workout" and leads into Iron Hour (set-up 0, warm-up 4, primary 14, accessories 28, cool-down 50), coached in a hotel room on Meet/Zoom/FaceTime, on IST (Dubai 1½ hours behind, Singapore 2½ hours ahead). Return, Lean Reset, Open Floor and the Consultation are named.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-bodyweight-exercises-for-travel`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD: Article (with image, citations and translation links), ItemList and BreadcrumbList, via the shared `postHead`.
- The 7 items: rear-foot-elevated split squat (back foot on the bed), push-up (raised, then floor, then feet up), single-leg Romanian deadlift, backpack row, pike push-up, side plank, stair climbs or on-the-spot intervals.
- "Is bodyweight enough? And how little keeps your gains?" covers: ACSM's 8–12 rep / 2–10% rule and changing the lever when there is no weight; light loads to failure gave similar muscle growth but heavy loads built more maximal strength (so bodyweight has a ceiling for top-end strength); and the Bickel maintenance trial, said with its age split (one-third or one-ninth of the training kept muscle size in 20–35-year-olds, not in 60–75-year-olds; strength largely held even with no training). Travel-day advice uses WHO's "replace sitting with activity of any intensity".
- Content is in `src/content/blog/travel-bodyweight.ts` (export `travelBodyweightPost`). Sources, all real; title, journal, year, volume/pages and the finding checked against the Europe PMC record and abstract on 29 Oct 2026 (WHO's "2 or more days", "all major muscle groups" and "replacing sedentary time with physical activity of any intensity" checked in the Bull et al. 2020 full text, PMC7719906):
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  3. Kikuchi & Nakazato, Low-load bench press and push-up induce similar muscle hypertrophy and strength gain, J Exerc Sci Fit 2017;15(1):37–42: https://doi.org/10.1016/j.jesf.2017.06.003 (18 young men, 9 per group, 8 weeks, twice weekly; push-ups adjusted to 40% 1RM load comparable to bench press at 40% 1RM). **Labelled as small.**
  4. Calatayud et al., Bench press and push-up at comparable levels of muscle activity results in similar strength gains, J Strength Cond Res 2015;29(1):246–253: https://doi.org/10.1519/JSC.0000000000000589 (30 students with advanced training experience, 5 weeks, 6RM band push-up vs 6RM bench press; similar strength gains). **Labelled as small.**
  5. Schoenfeld, Grgic, Ogborn & Krieger, low- vs high-load training, J Strength Cond Res 2017;31(12):3508–3523: https://doi.org/10.1519/JSC.0000000000002200 (21 studies).
  6. Bickel, Cross & Bamman, Exercise dosing to retain resistance training adaptations in young and older adults, MSSE 2011;43(7):1177–1187: https://doi.org/10.1249/MSS.0b013e318207c15d (70 adults; 16 weeks at 3 days/week, then 32 weeks of detraining or one-third or one-ninth of the dose).
  7. Jenkins et al., Do stair climbing exercise "snacks" improve cardiorespiratory fitness?, Appl Physiol Nutr Metab 2019;44(6):681–684: https://doi.org/10.1139/apnm-2018-0675 (sedentary young adults, 12 per group, 3 × 60 steps a day, 3 days/week, 6 weeks; peak VO2 up, modest). **Said to be modest.**
  8. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- The sample travel week (A/B/A around a travel day) is labelled "Sample only. Not a prescription." No client results, no quotes, no prices. Credentials line (ASCA Level 1 and ACE; neither body endorses the business or the article). Safety note: ACSM screening; a chair without wheels against a wall; check the floor; hold the stair rail; anyone with a past blood clot or a doctor's warning about clots asks their doctor about long flights; stop for sharp pain; advice first with a joint problem, in pregnancy or after recently giving birth.
- `src/content/blog/index.ts` lists eight posts, newest first. Blog index descriptions (all 7 languages, `BLOG_INDEX_COPY`) now lead with the travel post.
- New routes: `src/routes/blog.best-bodyweight-exercises-for-travel.tsx` and `src/routes/$lang.blog.best-bodyweight-exercises-for-travel.tsx` (`/en/...` and unknown codes return 404). `src/routeTree.gen.ts` is the file the TanStack Router plugin generated during this run's build (not hand-edited).

### Speed: fonts per language (open item since 22 Oct)
- The root used to load Noto Sans Devanagari together with Outfit on every page, as one render-blocking Google Fonts stylesheet. Now the root loads Outfit only (`BASE_FONT_HREF` in the new `src/lib/fonts.ts`).
- `seoHead` adds the script font for the page language only: Noto Sans Devanagari on `/hi/...`, Noto Sans Gujarati on `/gu/...`, Noto Sans Arabic on `/ar/...` (the Gujarati and Arabic pages used to fall back to system fonts, often without an 800 weight for headings). Google serves each family in unicode-range slices, so only the script's slices download.
- Home page: Devanagari is no longer requested up front. `src/studio/region.tsx` loads it client-side (`loadScriptFont("hi")`) when the visitor switches the copy to Hindi, or on return visits with Hindi saved. Until it arrives, the Hindi text shows in the system Devanagari font (`display=swap`).
- Chinese and Japanese keep the system CJK fonts (no multi-MB web font). English, Spanish, Chinese, Japanese pages and all landing pages now send one font stylesheet instead of the Outfit+Devanagari bundle. All four stylesheet URLs were checked to return 200.
- Theme unchanged and still matched to the logo (ink #06070a, blue #0147d6 / #3d7bff). No orange added.

### SEO: sitemap
- `public/sitemap.xml`: 67 URLs. Home, the three landing pages, 7 blog indexes and 7 language URLs for each of the 8 posts, with reciprocal `xhtml:link` hreflang and x-default (landing pages list `en` + x-default). Home, indexes, landing pages and the new post `lastmod` 2026-10-29.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- Restored the binaries with `node scripts/restore-binaries.mjs` and built a copy of the branch with `vite build` and the local-only verify config (stub for the missing `src/lib/preview-host-bridge.ts`, no PWA plugin, Nitro `node-server` preset; not committed). The build passed (Node 20 on the box).
- The built server returned 200 for all 67 sitemap URLs, including `/online-strength-and-conditioning-coach` and the new post in all 7 languages. It returned 404 for `/en/blog/best-bodyweight-exercises-for-travel`, `/xx/blog/best-bodyweight-exercises-for-travel` and `/en/blog`.
- On all 67 sitemap URLs: one title, one canonical (matching the sitemap URL), every JSON-LD block parses, every post page has exactly 8 hreflang `<link>`s, no raw `{n}` markers, and Arabic pages render `<html lang="ar" dir="rtl">`. Font links checked in the HTML: `/` and English/es/zh/ja pages load Outfit only; `/hi/...` adds Devanagari, `/gu/...` Gujarati, `/ar/...` Arabic. The coach page links are present in the English S&C, one-dumbbell and travel posts and in both footers.
- Headless Chrome screenshots at 390px of the landing page and the Arabic post: layout and RTL look right.
- `tsc --noEmit`: the same 14 errors as before (all from the missing platform files). ESLint on the changed files: no new errors (the one error, `no-control-regex` in `src/studio/region.tsx`, was already there), only the existing fast-refresh warnings.
- The real `npm run build` from a clean clone still fails, because the same platform files are missing.

### Still open (needs Susmit)
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing.
- `og.jpg` is the warm, copper-lit card and does not match the blue logo. A blue and near-black 1200×630 version at the same path needs no code change.
- Home stats band ("3500+ live sessions conducted", "4–5 average sessions per day", "10+ countries with 90% consistency"): still unverified. Confirm or remove.
- `clientNotes`: labelled as samples. Replace with real, consented quotes or delete them before any are shown.
- Three prototype landing pages are still not ported: `/online-personal-trainer-india`, `/online-personal-trainer-dubai` and `/online-personal-trainer-singapore` (the travel post is a natural link for Dubai and Singapore).
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all eight posts, the blog index copy and `SOURCE_LABEL`.
- Fonts: Outfit is still a third-party, render-blocking Google Fonts request on every page. Self-hosting it (woff2 via `binary-parts/`, with `font-display: swap` and a preload) would remove the extra origin; not done because the font files would add another restore step to the build.

## 28 Oct 2026 (IST): og:image, /getting-back-into-exercise, one-dumbbell post, blue-logo clean-up

### SEO: social card
- `public/og.jpg` is on the branch (via `binary-parts/`). Checked after restore: a 1200×630 JPEG.
- `seoHead` (`src/lib/seo.ts`) now sends on every page: `og:image` (`https://onlinefitness.com/og.jpg`, the absolute URL on the `SITE_URL` canonical domain), `og:image:type`, `og:image:width` 1200, `og:image:height` 630, `og:image:alt`, `twitter:card=summary_large_image`, `twitter:image` and `twitter:image:alt`. New exports `OG_IMAGE` and `ogImageLd`.
- Article JSON-LD (`postHead`) and each BlogPosting in the blog index JSON-LD now carry `image` (ImageObject, 1200×630).

### New landing page: `/getting-back-into-exercise`
- `src/routes/getting-back-into-exercise.tsx`, ported from the prototype in `/workspace/jalanpt/site/getting-back-into-exercise`, using the same pattern as `/personal-trainer-for-fat-loss`. It targets "getting back into exercise after a long break" and leads to Return: 45 minutes, 12 alternate-day sessions a month, at home on Meet/Zoom/FaceTime, Hindi or English, IST.
- Copy is the prototype's, with short lines. Sections: "Don't pick up where you left off", "How Return runs", "Not the right fit?" (Iron Hour, Lean Reset, Open Floor, Consultation), FAQ (the prototype's 3 questions, plus number of sessions, cost with no price, and where to start), Read next, and the consultation card (30 minutes, not training). No prices, results or quotes. Credentials line, no endorsement.
- JSON-LD: Service (provider = the business), FAQPage (6 questions) and BreadcrumbList. English only (hreflang `en` + `x-default`).
- Internal links: the content-page footer ("Back after a break"), the home footer ("Getting back into exercise"), the fat-loss page's Return line ("How Return works"), and the English long-break post's coached card (new optional `programLink` on `BlogPost`, shown only in English because the page is English). The page itself links to the long-break post and to `/personal-trainer-for-fat-loss`.

### Blog
- New post: **"Best home workouts with one dumbbell: 7 exercises and a sample week"** at `/blog/best-home-workouts-with-one-dumbbell`. It targets "home workouts with one dumbbell" / "one dumbbell workout at home" and leads into Iron Hour (set-up 0, warm-up 4, primary 14, accessories 28, cool-down 50). Return, Lean Reset, Open Floor and the Consultation are named.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-home-workouts-with-one-dumbbell`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD: Article (with image, citations and translation links), ItemList and BreadcrumbList, via the shared `postHead`.
- The 7 items: goblet squat, Romanian deadlift (two legs, then one), rear-foot-elevated split squat, one-arm row, one-arm floor press (then push-ups), half-kneeling one-arm overhead press, suitcase carry.
- "How do you make one dumbbell hard enough?" covers: ACSM's 2–10% rule, and what to do with a fixed dumbbell instead (reps, then sets, then a harder version). Light loads to failure gave similar muscle growth, but heavy loads built more maximal strength, so it says plainly that one light dumbbell has a ceiling for top-end strength. You don't need to go to failure. Slow reps are a tool, not magic.
- Content is in `src/content/blog/one-dumbbell.ts` (export `oneDumbbellPost`). Sources, all real; metadata and findings checked against Europe PMC records and abstracts on 28 Oct 2026 (WHO's "2 or more days" checked in the Bull et al. 2020 full text, PMC7719906):
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  3. Schoenfeld, Grgic, Ogborn & Krieger, low- vs high-load training, J Strength Cond Res 2017;31(12):3508–3523: https://doi.org/10.1519/JSC.0000000000002200 (21 studies).
  4. Refalo et al., proximity-to-failure and hypertrophy, Sports Med 2023;53(3):649–665: https://doi.org/10.1007/s40279-022-01784-y (15 studies; trivial edge for set failure vs non-failure, no edge for momentary failure).
  5. Schoenfeld, Ogborn & Krieger, repetition duration and hypertrophy, Sports Med 2015;45(4):577–585: https://doi.org/10.1007/s40279-015-0304-0 (8 studies; 0.5–8 s per rep similar).
  6. Speirs et al., unilateral vs bilateral squat training, J Strength Cond Res 2016;30(2):386–392: https://doi.org/10.1519/JSC.0000000000001096 (18 academy rugby players, 5 weeks; similar gains). **Labelled as small, in trained athletes.**
  7. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- The sample week (A/B/A) is labelled "Sample only. Not a prescription." No client results, no quotes, no prices. Credentials line (ASCA Level 1 and ACE; neither body endorses the business or the article). Safety note: ACSM screening; check the dumbbell (collars on adjustables) and the floor; stop for sharp pain; get advice first with a back or shoulder problem, in pregnancy or after recently giving birth.
- `src/content/blog/index.ts` lists seven posts, newest first. Blog index descriptions (all 7 languages, `BLOG_INDEX_COPY`) now lead with the one-dumbbell post.
- New routes: `src/routes/blog.best-home-workouts-with-one-dumbbell.tsx` and `src/routes/$lang.blog.best-home-workouts-with-one-dumbbell.tsx` (`/en/...` and unknown codes return 404). `src/routeTree.gen.ts` is the file the TanStack Router plugin generated during this run's build (not hand-edited).
- **Bug fix (found in verification):** `{n}` citations in an item's "How" field were printed as raw text, as in "…by the NHS definition.{2}" in the long-break post (7 places, all languages). The How field now renders linked citations like Why and Dose.

### SEO: sitemap
- `public/sitemap.xml`: 59 URLs. Home, the two landing pages, 7 blog indexes and 7 language URLs for each of the 7 posts, with reciprocal `xhtml:link` hreflang and x-default (landing pages list `en` + x-default). Home, indexes and landing pages `lastmod` 2026-10-28.

### Theme polish (real logo: ink #030406, blue #014ffe)
- Leftover orange wording removed from `src/styles.css` comments (`.eyebrow`, `.mark-badge`, `.list-mark`, `.mark-cap`, `.card-lift`, `.prose-links`, `.btn-accent`). They now say logo blue, and the contrast notes are corrected to the real values: #0147d6 is 6.2:1 on bone, and #3d7bff is 5.3:1 against ink (the old comments said 5.4:1 and 6.3:1, the orange figures).
- Warm-brown shadows from the old ink (`rgba(18,17,14,…)` on `.card-lift` and `.btn-accent`) now use the real ink (`rgba(6,7,10,…)`). Warm overlays `#14120f` (the hour section photo) and `#0c0b09` (book and note dialogs) now use ink `#06070a`. Same opacity, so text contrast is unchanged or slightly higher.
- No `#e07a3d` or `#9c4615` left anywhere in `src/` or `public/` SVGs.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- Restored the binaries with `node scripts/restore-binaries.mjs`, so the build used the real images, not placeholders. Built a copy of the branch with `vite build` and a local-only verify config: a stub for the missing `src/lib/preview-host-bridge.ts`, no PWA plugin, and the Nitro `node-server` preset. The build passed (Node 20 on the box). The stub and config are not committed.
- The built server returned 200 for `/`, `/blog`, `/ar/blog`, `/getting-back-into-exercise`, `/personal-trainer-for-fat-loss`, the new post in all 7 languages, `/og.jpg` and `/sitemap.xml`. It returned 404 for `/xx/blog/best-home-workouts-with-one-dumbbell` and `/en/blog/best-home-workouts-with-one-dumbbell`.
- I checked all 59 sitemap URLs. Every page has one title and one canonical, and every JSON-LD block parses. Every post page has exactly 8 hreflang `<link>`s, and no raw `{n}` markers are left. Every page has the og:image set and `summary_large_image`. The Arabic post renders `<html lang="ar" dir="rtl">`. I took headless Chrome screenshots at 390px of the landing page and the Arabic post, and the layout and RTL look right.
- `tsc --noEmit`: the same 14 errors before and after (all from the missing platform files: grok-pwa, preview bridge, app-data, auth, multiplayer). ESLint on the changed files shows no errors, only the existing fast-refresh warning in `blog-post.tsx`.
- The real `npm run build` from a clean clone still fails, because the same platform files are missing.

### Still open (needs Susmit)
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing.
- `og.jpg` is the warm, copper-lit "JALAN Personal Training" card. It does not match the blue logo. Consider a blue and near-black 1200×630 version. Keep the same path and size, and no code change is needed.
- Home stats band ("3500+ live sessions conducted", "4–5 average sessions per day", "10+ countries with 90% consistency"): still unverified. Confirm or remove.
- `clientNotes`: labelled as samples. Replace with real, consented quotes or delete them before any are shown.
- Four prototype landing pages are still not ported: `/online-strength-and-conditioning-coach` (natural links: the S&C post and the one-dumbbell post), `/online-personal-trainer-india`, `/online-personal-trainer-dubai` and `/online-personal-trainer-singapore`.
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all seven posts, the blog index copy and `SOURCE_LABEL`.
- Fonts: self-host, or load Devanagari only on Hindi pages, to cut a render-blocking request.

## 27 Oct 2026 (IST, late): real images from the cPanel zip, theme matched to the real logo

### Images
- The 13 original images recovered from the cPanel zip (ofw-logo.png, coach.jpg, ace.png, asca.png, hour-setup/warmup/primary/accessories/cooldown.jpg, iron-barbell.jpg, laptop-call.jpg, open-floor.jpg, room.jpg) plus `public/og.jpg`, `public/__grok/icon-180.png` and the two `ob-*.png` install images are now on the branch.
- The GitHub connector only writes text, so they are stored as base64 in `binary-parts/parts/` and listed in `binary-parts/manifest.json`. Run `node scripts/restore-binaries.mjs` from the repo root before building to write them to `src/assets/` and `public/`. Round-trip checked byte for byte.
- The manifest now lists only files whose parts really exist. Old entries for images that are no longer referenced (coach-squat, mat, barbell, session, call-coach, call-main, iron-grid, iron-squat, desk, coach-template, macbook-frame, susmit) and the cPanel zip entry were removed. `binary-parts/parts/src__assets__coach-squat.jpg.002` is a stale leftover that is not used (the connector can't delete files).
- `public/__grok/manifest.webmanifest` is not committed; the build's PWA plugin serves it.

### Theme
- The real logo is near-black (#030406) and electric blue (#014ffe), not copper/orange as guessed from the placeholder mark. Changed: `--color-ink` #12110e to #06070a; `--color-copper` (text/links on light) #9c4615 to #0147d6 (6.2:1 on bone); `--color-copper-2` (fills, icons on ink, buttons with ink text) #e07a3d to #3d7bff (5.3:1 on ink). Token names are kept to avoid touching every component. `favicon.svg`, the `theme-color` meta and the OG card colour now match.

### Build
- Built locally as a static prerender (51 routes) and packaged with the zip's `.htaccess` for cPanel. Not deployed.

## 27 Oct 2026 (IST): cool-down post, hour links on the home page, J crossbar on ink cards

### Blog
- New post: **"Best cool-down stretches after strength training: 7 to finish with"** at `/blog/best-cool-down-stretches-after-strength-training`. It targets "cool-down stretches after strength training" and "stretches after lifting", pairs with the warm-up post, and leads into Iron Hour (cool-down at minute 50; set-up 0, warm-up 4, primary 14, accessories 28). Return, Lean Reset, Open Floor and the Consultation are named.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-cool-down-stretches-after-strength-training`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD: Article (citations, translation links), ItemList and BreadcrumbList, via the shared `postHead`.
- The 7 items: easy walk or slow cycling (3–5 min), lying hamstring stretch with a towel, standing quad stretch at a wall, figure-four glute stretch, calf stretch (straight and bent knee), doorway chest stretch, child's pose with slow breathing.
- The post says plainly what a cool-down does **not** do: it does not reliably cut soreness or prevent injury, and stretching barely moves next-day soreness. It covers ACSM hold times (10–30 s, 30–60 s for older adults, about 60 s per stretch in 2–4 holds, to tightness not pain, 2–3 days a week, daily best), why long static holds go at the end, and that strength training improves range about as much as stretching.
- Content is in `src/content/blog/cool-down.ts` (export `coolDownPost`). Sources, all real; metadata checked against Europe PMC records and abstracts on 27 Oct 2026:
  1. Van Hooren & Peake, Do we need a cool-down after exercise?, Sports Med 2018;48(7):1575–1595: https://doi.org/10.1007/s40279-018-0916-2 (narrative review: active cool-down largely ineffective for soreness, performance and injury; faster recovery of heart rate/breathing and blood lactate).
  2. Garber et al., ACSM position stand, MSSE 2011;43(7):1334–1359: https://doi.org/10.1249/MSS.0b013e318213fefb (flexibility prescription).
  3. Herbert, de Noronha & Kamper, Stretching to prevent or reduce muscle soreness after exercise, Cochrane 2011, CD004577: https://doi.org/10.1002/14651858.CD004577.pub3 (12 studies; post-exercise stretching cut next-day soreness by about 1 point on a 100-point scale).
  4. Behm et al., Acute effects of muscle stretching, Appl Physiol Nutr Metab 2016;41(1):1–11: https://doi.org/10.1139/apnm-2015-0235 (≥60 s static stretch per muscle −4.6% vs <60 s −1.1%, tested right after stretching).
  5. Afonso et al., Strength training versus stretching for improving range of motion, Healthcare (Basel) 2021;9(4):427: https://doi.org/10.3390/healthcare9040427 (11 RCTs, 452 participants; no difference; **studies very heterogeneous**, said in the post).
  6. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- The sample 10-minute cool-down is labelled "Sample only. Not a prescription." No client results, no quotes, no prices. Credentials line (ASCA Level 1 and ACE; neither body endorses the business or the article) and a safety note (ACSM screening; mild tension only; stop for sharp pain, numbness or tingling; follow surgeon/physio after joint surgery, with a hip-replacement note on the figure-four stretch; advice first if pregnant or recently given birth).
- `src/content/blog/index.ts` now lists six posts, newest first. Related blocks, the blog indexes, the home "From the blog" list and the fat-loss "Read next" list pick it up automatically.
- New routes: `src/routes/blog.best-cool-down-stretches-after-strength-training.tsx` and `src/routes/$lang.blog.best-cool-down-stretches-after-strength-training.tsx` (`/en/...` and unknown codes return 404). `src/routeTree.gen.ts` is the file the TanStack Router plugin generated during this run's build (not hand-edited).
- Blog index descriptions (all 7 languages, `BLOG_INDEX_COPY`) now lead with cool-down stretches.

### SEO, accessibility, internal links
- `public/sitemap.xml`: 51 URLs. Home, the fat-loss page, 7 blog indexes and 7 language URLs for each of the 6 posts, with reciprocal `xhtml:link` hreflang and x-default. Home, index and fat-loss `lastmod` set to 2026-10-27.
- Home, "The hour": when Warm-up or Cool-down is the active beat, a link appears under its description to the warm-up post or the new cool-down post. The beat buttons now expose `aria-pressed`, so screen readers hear which beat is selected.
- Home footer: the hard-coded desk-workers link is gone (open item from earlier batches). It now lists the two newest posts from `BLOG_POSTS`, the fat-loss page, and "All articles" (`/blog`), each with a 44px tap height.
- **Schumann 2022 citation (open item from 26 Oct) confirmed**: Sports Med 2022;52(3):601–612, per the Europe PMC record. No change needed.

### Theme polish (logo mark: ink #12110e, orange #e07a3d)
- New `.mark-cap`: the ink call-to-action cards ("Want it coached live?" in every post, the start card on the fat-loss page) carry a short, heavy, square logo-orange bar on the top edge, like the crossbar of the J. It sits at the start side, so it flips in Arabic. Decorative only; no contrast change.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Verified this run
- **Built on the box for the first time in four batches.** A copy of the branch was built with `vite build` using a local-only verify config, with a stub for the missing `src/lib/preview-host-bridge.ts`, without the PWA plugin (it needs the missing `scripts/grok-pwa-shared.mjs`), and with 1×1 placeholder images for the missing `src/assets/*`. Build passed. The server returned 200 for the new post in en, ar and gu, `/blog`, `/ja/blog`, `/` and the fat-loss page, and 404 for `/xx/...` and `/en/...`. The Arabic page rendered `<html lang="ar" dir="rtl">`, the right canonical, 8 hreflang links and Article, ItemList and BreadcrumbList JSON-LD, and no raw `{n}` markers.
- `tsc --noEmit` shows only the existing missing-file errors (`grok-pwa-shared.mjs`, `use-connector-readiness.ts`, `client.server.ts`, `multiplayer/p2p`, preview bridge). None of them are in files changed this batch.
- The real `npm run build` from a clean clone still fails, for the same missing platform files and images.

### Still open (needs Susmit)
- Same build blockers: missing platform files and images (most `binary-parts/parts/*` listed in `binary-parts/manifest.json` are not in the repo, including the one for `public/og.jpg`).
- No `og:image` yet. Add a 1200×630 `public/og.jpg` (or its binary part), then set `og:image` and `twitter:card=summary_large_image` in `seoHead`, and add `image` to the Article JSON-LD.
- Home stats band ("3500+ live sessions conducted", "4–5 average sessions per day", "10+ countries with 90% consistency"): still unverified. Confirm or remove. Now that the box can edit `home.tsx`, this is a one-line change once you decide.
- `clientNotes`: labelled as samples. Replace with real, consented quotes or delete before any are shown.
- Five prototype landing pages still not ported: `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach`, `/online-personal-trainer-india`, `/online-personal-trainer-dubai`, `/online-personal-trainer-singapore`.
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all six posts, the blog index copy and `SOURCE_LABEL`.
- Fonts: self-host, or load Devanagari only on Hindi pages, to cut a render-blocking request.

## 26 Oct 2026 (IST): strength and conditioning post, localised citation names, list markers

### Blog
- New post: **"Best strength and conditioning exercises for beginners: 7 to build on"** at `/blog/best-strength-and-conditioning-exercises-for-beginners`. It targets "strength and conditioning exercises for beginners" and leads into Iron Hour (set-up at 0, warm-up from 4, primary lift at 14, accessories at 28, cool-down at 50). Return, Lean Reset, Open Floor and the Consultation are named.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-strength-and-conditioning-exercises-for-beginners`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD: Article (citations, translation links), ItemList and BreadcrumbList, via the shared `postHead`.
- The 7 items: goblet squat, dumbbell Romanian deadlift, incline push-up, one-arm dumbbell row, reverse lunge or step-up, farmer's carry, and intervals (bike, uphill walk or stairs).
- "How much is enough" covers ACSM's beginner starting point (2–3 days a week, 1–3 sets of 8–12 reps, add 2–10% when you beat the target by 1–2 reps), that light and heavy loads taken to failure gave similar muscle growth, that adding cardio did not blunt muscle size or maximal strength, and one small trial on 1:1 supervision.
- Content is in `src/content/blog/strength-conditioning.ts` (export `strengthConditioningPost`). Sources, all real:
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. Garber et al., ACSM position stand, Quantity and quality of exercise, MSSE 2011;43(7):1334–1359: https://doi.org/10.1249/MSS.0b013e318213fefb (neuromotor work 2–3 days a week).
  3. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009;41(3):687–708: https://doi.org/10.1249/MSS.0b013e3181915670
  4. Schoenfeld et al., Strength and hypertrophy adaptations between low- vs high-load resistance training, J Strength Cond Res 2017;31(12):3508–3523: https://doi.org/10.1519/JSC.0000000000002200 (meta-analysis, 21 studies; similar muscle growth with light and heavy loads taken to failure, more maximal strength with heavy loads).
  5. Milanović et al., HIT vs continuous endurance training for VO2max, Sports Med 2015;45(10):1469–1481: https://doi.org/10.1007/s40279-015-0365-0 (28 trials, 723 participants, healthy adults aged 18–45; both large gains, intervals a little ahead). The post says the age range plainly.
  6. Schumann et al., Compatibility of concurrent aerobic and strength training, Sports Med 2022: https://doi.org/10.1007/s40279-021-01587-7 (meta-analysis, 43 studies; no blunting of muscle size or maximal strength; smaller explosive-strength gains, mostly when done in the same session).
  7. Leong et al., grip strength in the PURE study, Lancet 2015;386(9990):266–273: https://doi.org/10.1016/S0140-6736(14)62000-6 (139,691 adults, 17 countries). **Labelled as observational** in the post: a link, not a cause.
  8. Mazzetti et al., direct supervision of resistance training, MSSE 2000;32(6):1175–1184: https://doi.org/10.1097/00005768-200006000-00023 (20 men who already trained, 12 weeks). **Labelled as small, and in trained men, not beginners.**
  9. Riebe et al., ACSM preparticipation screening, MSSE 2015;47(11):2473–2479: https://doi.org/10.1249/MSS.0000000000000664
- The sample week is labelled "Sample only. Not a prescription." No client results, no quotes, no prices. The post has the credentials line (ASCA Level 1 and ACE; neither body endorses the business or the article) and a safety note (ACSM screening: heart, metabolic or kidney disease, or symptoms such as chest pain, unusual breathlessness or dizziness, means medical clearance first; build up to intervals; stop if in pain; get advice first if pregnant or recently given birth).
- `src/content/blog/index.ts` now lists five posts, newest first. Every post's "More from the blog" block, the home "From the blog" list, the blog indexes and the fat-loss page "Read next" list pick it up automatically.
- New routes: `src/routes/blog.best-strength-and-conditioning-exercises-for-beginners.tsx` and `src/routes/$lang.blog.best-strength-and-conditioning-exercises-for-beginners.tsx` (`/en/...` and unknown codes return 404, same as the other posts). `src/routeTree.gen.ts` updated by hand.
- Blog index descriptions (all 7 languages, `BLOG_INDEX_COPY`) now lead with strength and conditioning for beginners.

### SEO and accessibility
- `public/sitemap.xml`: 44 URLs. Home, the fat-loss page, 7 blog indexes and 7 language URLs for each of the 5 posts, with reciprocal `xhtml:link` hreflang and x-default. Index and fat-loss `lastmod` set to 2026-10-26.
- Citation links had the English accessible name "Source 3" in every language. New `SOURCE_LABEL` in `src/content/blog/shared.ts` gives a localised name (المصدر, स्रोत, Fuente, 来源, 出典, સ્રોત); `Cited` takes a `label` prop (defaults to "Source").
- Footer WhatsApp link (content pages) now says "(opens in a new tab)" to screen readers.
- `/personal-trainer-for-fat-loss`: the Iron Hour line links to the new post ("New to lifting? Start with these 7 strength and conditioning moves"), and the "Not the right fit?" list gets `.prose-links` so the link is styled.

### Theme polish (logo mark: ink #12110e, orange #e07a3d)
- `.eyebrow` bar is now 4px and fully square (was 3px, 1px radius), closer to the heavy squared stroke of the J.
- New `.list-mark`: bullet markers in logo orange at weight 800. Used on the sample block in every post and the Lean Reset month list. Text stays ink, so contrast is unchanged.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Not verified this run (please read)
- **Nothing was built.** The box computer never finished starting during this run, so nothing was cloned, built, type-checked, linted or rendered. Everything was written and pushed through the GitHub connector. Please run the build (or the Vite stub config) and check `/blog`, `/ar/blog`, the new post in `en`, `ar` and `gu`, `/personal-trainer-for-fat-loss`, and `/xx/blog/best-strength-and-conditioning-exercises-for-beginners` (should be 404).
- Source checks: the WHO and Riebe pages timed out, so they were checked through search snippets. The Schumann 2022 DOI and findings were checked, but the volume and pages in the post's citation (52(3):601–612) were not seen on a fetched page. Please confirm. PubMed and publisher pages blocked the fetcher, so abstracts were checked through search results.

### Still open (needs Susmit)
- Same build blockers as below. Missing platform files and images mean `npm run build` fails from a clean clone.
- No `og:image` yet. Add a 1200×630 `public/og.jpg` by hand, then set `og:image` and `twitter:card=summary_large_image` in `seoHead`, and add `image` to the Article JSON-LD.
- Home stats band ("3500+ live sessions conducted", "4–5 average sessions per day", "10+ countries with 90% consistency"): still unverified. Confirm or remove. `home.tsx` is too large for the connector to edit safely.
- `clientNotes`: labelled as samples. Replace with real, consented quotes or delete before any are shown.
- Five prototype landing pages still not ported: `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach`, `/online-personal-trainer-india`, `/online-personal-trainer-dubai`, `/online-personal-trainer-singapore`. The new post would be a good internal link for `/online-strength-and-conditioning-coach`.
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all five posts, the blog index copy and the new `SOURCE_LABEL` words.
- The home footer still hard-codes one blog link (desk workers). Point it at `/blog` when you next edit `home.tsx`.
- Fonts: self-host or load Devanagari only on Hindi pages to cut a render-blocking request.

## 25 Oct 2026 (IST): warm-up post, fat-loss landing page, sample notes labelled, badge shape

### Blog
- New post: **"Best warm-up exercises before strength training: 7 to do first"** at `/blog/best-warm-up-exercises-before-strength-training`. It targets "warm-up exercises before strength training" and "how to warm up before lifting", and leads into Iron Hour (warm-up at minute 4, primary lift at 14).
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-warm-up-exercises-before-strength-training`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD: Article (citations, translation links), ItemList and BreadcrumbList, via the shared `postHead`.
- The 7 items: march on the spot or brisk walk, bodyweight squat, leg swings, lunge with a reach, shoulder rolls and band pull-aparts, hip hinge drill with a broomstick, and ramp-up sets of the first lift.
- Content is in `src/content/blog/warm-up.ts` (export `warmUpPost`). Sources, all real:
  1. NHS, How to warm up before exercising: https://www.nhs.uk/live-well/exercise/how-to-warm-up-before-exercising/
  2. American Heart Association, Warm up, cool down: https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/warm-up-cool-down
  3. Fradkin et al., Effects of warming-up on physical performance, J Strength Cond Res 2010: https://doi.org/10.1519/JSC.0b013e3181c643a0 (systematic review, 32 studies; performance improved in 79% of criteria; little evidence of harm).
  4. Behm & Chaouachi, Effects of static and dynamic stretching on performance, Eur J Appl Physiol 2011: https://doi.org/10.1007/s00421-011-1879-2 (short static holds, under about 90 s total, impair less; dynamic stretching has no effect or improves; suggested order: aerobic, then large-amplitude dynamic, then sport-specific).
  5. McCrary et al., upper-body warm-up systematic review, Br J Sports Med 2015: https://doi.org/10.1136/bjsports-2014-094228 (high-load dynamic warm-ups enhance strength and power; no studies on injury prevention found). The post says this plainly.
  6. Ribeiro et al., specific warm-up and reps to failure, Percept Mot Skills 2014: https://doi.org/10.2466/25.29.PMS.119c17z7 (15 men, 80% 1RM; no difference in reps). Labelled as small, with a null result.
  7. Riebe et al., ACSM preparticipation screening, MSSE 2015: https://doi.org/10.1249/MSS.0000000000000664
- The sample 10-minute warm-up is labelled "Sample only. Not a prescription." No client results, no quotes, no prices. The post has the credentials no-endorsement line and a safety note.
- `src/content/blog/index.ts` now lists four posts, newest first. Blog index descriptions (all 7 languages, `BLOG_INDEX_COPY`) now mention warming up.
- New routes: `src/routes/blog.best-warm-up-exercises-before-strength-training.tsx` and `src/routes/$lang.blog.best-warm-up-exercises-before-strength-training.tsx` (`/en/...` and unknown codes return 404, same as the other posts).

### New landing page: `/personal-trainer-for-fat-loss`
- `src/routes/personal-trainer-for-fat-loss.tsx`. English only (hreflang `en` + `x-default`). The prototype in `/workspace/jalanpt/site` could not be read this run, so the copy is written from the brief only: Lean Reset, 20 sessions a month, 1:1, coached live; "Nothing is pulled from a generic fat-loss sheet".
- One cited fact: WHO 2020, 150 to 300 minutes of moderate activity a week plus muscle-strengthening on 2 or more days (https://www.who.int/publications/i/item/9789240015128).
- No prices, no promised results, no before-and-after numbers, no quotes. Food and clinical-diet note points to a doctor or registered dietitian. Credentials line says neither body endorses the business.
- JSON-LD: Service (provider = the business), FAQPage (6 questions) and BreadcrumbList. Links to all four blog posts, `/#programs` and WhatsApp.
- Footer on content pages (`SiteFooter`) now links "Fat loss coaching".

### Open items addressed
- **`clientNotes` are now labelled as samples.** `src/studio/content.ts`: a doc comment says they are placeholder copy, not testimonials; each entry has `sample: true`; `SessionNote` gets an optional `sample` flag; new `SAMPLE_NOTE_LABEL` ("Sample note. Not a real client quote.") for any place that ever renders one. They are still not rendered anywhere. Nothing else in the file changed.
- **Home stats band not changed.** `src/routes/home.tsx` (about 41 KB) is too large for the connector to read in full, so it could not be edited safely. Still open.

### SEO
- `public/sitemap.xml`: 37 URLs. Home, the fat-loss page, 7 blog indexes and 7 language URLs for each of the 4 posts, with reciprocal `xhtml:link` hreflang and x-default (the fat-loss page lists `en` + x-default only).
- `src/routeTree.gen.ts` updated by hand for the 3 new routes. The TanStack Router plugin regenerates it on the next dev/build.

### Theme polish (logo mark: ink rounded square, heavy squared orange J)
- New `.mark-badge`: list-number badges in posts now use the logo tile shape (about 22% corner radius, like rx 7 on the 32px favicon) instead of a circle, with heavy tabular numerals in logo orange on ink.
- `.eyebrow` bar corners squared (1px radius) to match the squared letterform.
- `.prose-links` links turn copper on hover.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Not verified this run (please read)
- **The box computer never finished starting during this run**, so nothing was cloned, built, type-checked or rendered. Everything was written and pushed through the GitHub connector. Please run the build (or the Vite stub config) and check `/blog`, `/ar/blog`, the warm-up post in `en`, `ar` and `gu`, `/personal-trainer-for-fat-loss`, and `/xx/blog/best-warm-up-exercises-before-strength-training` (should be 404).
- The desk-workers `lastmod` in the sitemap is set to 2026-10-22 (its publish date) because the post file could not be read in full.

### Still open (needs Susmit)
- Same build blockers as below. Missing platform files and images mean `npm run build` fails from a clean clone.
- No `og:image` yet. Add a 1200×630 `public/og.jpg` by hand, then set `og:image` and `twitter:card=summary_large_image` in `seoHead`, and add `image` to the Article JSON-LD.
- Home stats band ("3500+ live sessions conducted", "4–5 average sessions per day", "10+ countries with 90% consistency"): confirm or remove.
- `clientNotes`: now labelled as samples. Replace with real, consented quotes or delete before any are shown.
- Five prototype landing pages still not ported: `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach`, `/online-personal-trainer-india`, `/online-personal-trainer-dubai`, `/online-personal-trainer-singapore`. Please also compare the new fat-loss page with the prototype copy.
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all four posts and the blog index copy.
- The home footer still hard-codes one blog link (desk workers). Point it at `/blog` when you next edit `home.tsx`. The home page could also link the fat-loss page.
- Fonts: self-host or load Devanagari only on Hindi pages to cut a render-blocking request.

## 24 Oct 2026 (IST): third post, localised blog indexes, citation fix

### Blog
- New post: **"Best strength exercises for women over 40: 7 moves to start with"** at `/blog/best-strength-exercises-for-women-over-40`. It targets "strength exercises for women over 40" and "strength training for women over 40", and leads into Iron Hour (with Return, Lean Reset, Open Floor and the Consultation named).
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-strength-exercises-for-women-over-40`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD: Article (with citations and translation links), ItemList (the 7 moves) and BreadcrumbList.
- The 7 moves: squat to a chair, hip hinge with dumbbells or a backpack, press-up (wall, desk, floor), one-arm row, split squat or step-up, back extension lying face down, and heel drops / small hops (only if bones allow).
- Content is in `src/content/blog/women-over-40.ts`. Sources, all real. Each URL was opened and each claim checked against the abstract or page text on 24 Oct 2026:
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. NHS physical activity guidelines for adults 19–64: https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/
  3. NHS strength exercises: https://www.nhs.uk/live-well/exercise/strength-exercises/
  4. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009: https://doi.org/10.1249/MSS.0b013e3181915670 (8–12 RM for novices, 2–3 days a week, add 2–10% when you beat the target by 1–2 reps, multi-joint first, bilateral and unilateral).
  5. Westcott, Resistance training is medicine, Curr Sports Med Rep 2012: https://doi.org/10.1249/JSR.0b013e31825dabb8 (3–8% muscle loss per decade in inactive adults; labelled as one review).
  6. Watson et al., LIFTMOR RCT, J Bone Miner Res 2018: https://doi.org/10.1002/jbmr.3284 (101 postmenopausal women with low bone mass, 8 months, twice weekly 30-min supervised 5x5 >85% 1RM + impact; lumbar spine BMD +2.9% vs −1.2%; one minor adverse event). The post says plainly this was closely supervised and screened, and is not a home plan.
  7. Brooke-Wavell et al., Strong, steady and straight: UK consensus statement on exercise for osteoporosis, BJSM 2022: https://doi.org/10.1136/bjsports-2021-104634 (resistance and impact for bone, spinal extension for posture, avoid high spinal flexion, impact up to brisk walking after vertebral or multiple low-trauma fractures).
  8. Momma et al., muscle-strengthening and mortality, BJSM 2022: https://doi.org/10.1136/bjsports-2021-105061 (labelled observational).
  9. Riebe et al., ACSM preparticipation screening, MSSE 2015: https://doi.org/10.1249/MSS.0000000000000664
- The sample week is labelled "Sample only. Not a prescription." There are no client results, no quotes and no prices. The post includes the credentials no-endorsement line and a safety note covering osteoporosis/fractures, pregnancy, postnatal and pelvic floor symptoms.
- `src/content/blog/index.ts` now lists three posts, newest first. Every post's "More from the blog" block, the home page "From the blog" list and the blog indexes pick up the new post automatically.

### Localised blog indexes (new)
- New route `src/routes/$lang.blog.index.tsx` serves `/ar/blog`, `/hi/blog`, `/es/blog`, `/zh/blog`, `/ja/blog` and `/gu/blog`. `/en/blog` and unknown codes return 404.
- New shared component `src/components/blog-index.tsx` (`BlogIndexPage`, `blogIndexHead`) drives both `/blog` and the localised indexes. Each index has its own localised title, description, canonical, the full reciprocal hreflang set (7 + x-default), Blog JSON-LD listing every post in that language, and BreadcrumbList. A language switcher links the 7 indexes.
- Index copy lives in `BLOG_INDEX_COPY` in `src/content/blog/shared.ts`, with new helpers `blogIndexPathFor()` and `blogIndexAlternates()`. The English `/blog` title is unchanged; its description now mentions the new post.
- Localised posts now point to their own-language index: header Blog link, breadcrumb link, breadcrumb JSON-LD and the Article `isPartOf`. Each post also ends with a button back to its blog index.

### SEO, accessibility, speed
- `public/sitemap.xml`: 29 URLs. Home, 7 blog indexes and 7 language URLs for each of the 3 posts, every one with reciprocal `xhtml:link` hreflang and x-default.
- **Bug fix:** citations written as `{n}` inside the "Dose" field were printed as literal text (for example "Start with 5 slow reps.{3}" in the long-break post). The Dose field now renders linked citations like the other fields.
- External links (`target="_blank"`) now use `rel="noopener noreferrer"` (sources, WhatsApp).
- Header nav links on content pages get a 44px minimum tap height (`min-h-11`). The header logo gets `decoding="async"`.
- "Read the list" buttons on the indexes have localised, unique accessible names, and their arrow icons flip in RTL.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Not verified this run (please read)
- **The box computer never finished starting during this run**, so nothing was cloned, built, type-checked or rendered locally. All changes were written and pushed through the GitHub connector only. The code follows the existing patterns line for line, but please run the local build (or the Vite stub config from earlier batches) and check `/blog`, `/ar/blog`, the new post in `en`, `ar` and `gu`, and `/xx/blog` (should be 404) before relying on it.
- `src/routeTree.gen.ts` was updated by hand to add the 3 new routes. The TanStack Router plugin regenerates it on the next dev/build, so any ordering differences there are harmless.

### Still open (needs Susmit)
- Same build blockers as below. Missing platform files and images mean `npm run build` fails from a clean clone.
- No `og:image` yet. Add a 1200×630 `public/og.jpg` by hand (the connector can only write text files), then set `og:image` and `twitter:card=summary_large_image` in `seoHead`. Google's Article rich results also want an `image`, so add it to the Article JSON-LD at the same time.
- The home stats band ("3500+ live sessions conducted", "4–5 average sessions per day", "10+ countries with 90% consistency") is still unverified. Confirm or remove. Nothing was changed there.
- The unused `clientNotes` quotes in `src/studio/content.ts`: delete, or confirm they are real and have consent.
- The six prototype landing pages from `/workspace/jalanpt/site` are still not ported (the box was unavailable this run, so the prototypes could not be read).
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all three posts and the new blog index copy.
- The home footer still hard-codes one blog link (desk workers). Worth pointing it at `/blog` or the newest post when you next edit `home.tsx`.
- Fonts: the root still loads Outfit and Noto Sans Devanagari from Google Fonts on every page (with preconnect and `display=swap`). Self-hosting them, or loading Devanagari only on Hindi pages, would cut a render-blocking request.

## 23 Oct 2026 (IST): second post, Return program card, blog plumbing, theme polish

### Blog
- New post: **"Best exercises for getting back into exercise after a long break: 7 to start with"** at `/blog/best-exercises-after-a-long-break`. It targets "getting back into exercise after a long break" and "personal trainer at home", and leads into Return.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-exercises-after-a-long-break`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD: Article, ItemList (the 7 moves) and BreadcrumbList.
- The 7 moves: brisk walking, sit-to-stand, wall press-up (then desk, then floor), glute bridge, band or backpack row, dead bug, and walk-run intervals.
- Content is in `src/content/blog/back-after-a-break.ts`. Sources, all real, with each claim checked against the source text or abstract:
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. NHS physical activity guidelines for adults 19–64: https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/
  3. NHS strength exercises: https://www.nhs.uk/live-well/exercise/strength-exercises/
  4. NHS Couch to 5K: https://www.nhs.uk/live-well/exercise/running-and-aerobic-exercises/get-running-with-couch-to-5k/
  5. Riebe et al., ACSM preparticipation screening, MSSE 2015: https://doi.org/10.1249/MSS.0000000000000664
  6. Paluch et al., daily steps and mortality, Lancet Public Health 2022: https://doi.org/10.1016/S2468-2667(21)00302-9
  7. Momma et al., muscle-strengthening and mortality, BJSM 2022: https://doi.org/10.1136/bjsports-2021-105061
  8. Ogasawara et al., continuous vs periodic strength training, Eur J Appl Physiol 2013: https://doi.org/10.1007/s00421-012-2511-9
- Observational findings (6, 7) are labelled as observational. The small trial (8) is labelled as small, with short breaks. The sample month is labelled "Sample only. Not a prescription." There are no client results, no quotes and no prices. The post includes the credentials no-endorsement line and a medical-clearance note covering injury, surgery and a baby.
- The blog now runs on shared plumbing. `src/content/blog/shared.ts` holds languages, types and the path/hreflang helpers. `src/content/blog/index.ts` lists posts newest first. `BlogPostPage` and `postHead` now take a post, and the desk-workers post uses the same code (its URLs are unchanged).
- Every post ends with a localised "More from the blog" block that links to the other posts in the same language. The `/blog` index lists both posts with their language links.

### SEO, accessibility, speed
- `public/sitemap.xml`: 16 URLs. Home, `/blog`, and 7 language URLs for each post, each with reciprocal `xhtml:link` hreflang and x-default.
- Home FAQ section gets a "From the blog" list linking both posts (internal links from the strongest page).
- `/blog` gets a new title, "Fitness Blog: Notes from an Online Personal Trainer | Jalan PT", and Blog JSON-LD now lists every post with its description and dates.
- New root 404 page. It sends `noindex`, has one h1 and links to Home, Programs and Blog. Unknown URLs used to fall back to the default router page.
- The post "Read the list" buttons now have unique accessible names (`aria-label="Read: <title>"`).
- Checked in server-rendered HTML: one title, description and canonical per page, one h1, headings in order (h1, h2, h3), parseable JSON-LD, and 8 hreflang links on every post.

### Programs (facts from the brief)
- **Return is now a program card and a booking option.** It shows 45 min per session and 12 sessions a month on alternate days, plus four benefit lines. It uses the existing Hindi strings and adds new ones. The Consultation detail now names Return.
- **Iron Hour no longer says "20 sessions a month".** It now reads "60 min per session · 1:1, coached live". Only Lean Reset says 20 sessions a month.
- The program grid is now 2×2 on tablet and desktop, so four cards sit evenly.

### Theme polish (logo mark: ink #12110e, orange #e07a3d)
- `.eyebrow`: section labels get a short logo-orange bar, echoing the crossbar of the mark. It flips correctly in RTL. Used on the home sections, the blog index, posts and the 404 page.
- `.card-lift`: program cards, blog list cards and post items pick up an orange-tinted border and a soft shadow on hover and focus-within.
- `.prose-links`: inline links in post copy get a 2px orange underline on ink text.
- Display h1/h2 get tighter tracking (-0.02em) to match the heavy mark. Times and doses use tabular numbers. Form controls and the caret use copper (`accent-color`, `caret-color`). Scrollbar colours are warm.
- No new fonts or downloads.

### Verified
- Built with the same local-only Vite config as last time (it stubs the missing platform files and uses placeholder images). It built cleanly.
- The built server returned 200 for `/`, `/blog`, both English posts and the `ar`, `gu`, `ja` and `hi` versions. It returned 404 for `/xx/blog/...` and `/nope`.
- Arabic and the home page were checked in headless Chrome at 1280px: RTL is right, and the Return card renders.
- `tsc` adds no new errors (the remaining ones are the missing platform files). ESLint has no new errors. The one error, in `src/studio/region.tsx`, was already there.

### Still open
- Same build blockers as below. Missing platform files and images mean `npm run build` fails from a clean clone.
- No `og:image` yet. The GitHub connector can only write text files, so a 1200×630 `public/og.jpg` has to be added by hand. Then set `og:image` and `twitter:card=summary_large_image` in `seoHead`.
- The six prototype landing pages (`/personal-trainer-for-fat-loss` and others) are still not ported.
- The home stats band numbers and the unused `clientNotes` still need your check (see below).
- Get a native speaker to review the ar, hi, es, zh, ja and gu translations of both posts before launch.

## 22 Oct 2026 (IST): SEO, theme, first blog post

### SEO, accessibility, speed
- `src/lib/seo.ts`: a new helper. Every route now sets its own title, meta description, canonical, Open Graph and Twitter tags, hreflang alternates and JSON-LD. The domain lives in one constant, `SITE_URL = https://onlinefitness.com`.
- Home (`/`): title "Online Personal Trainer, Live 1:1 on Video | Jalan PT", plus a new description. JSON-LD graph has WebSite, ProfessionalService (Jalan PT, Pune, Hindi and English, programs listed with **no prices**), Person (Susmit Jalan, credentials named only) and FAQPage.
- Root `<html>` now takes `lang` and `dir` from the route. `/ar/...` renders `lang="ar" dir="rtl"` on the server.
- `public/robots.txt` (allows all, blocks `/__grok/`, lists the sitemap) and `public/sitemap.xml` (home, `/blog`, all 7 language URLs of the post, each with reciprocal `xhtml:link` hreflang and x-default).
- Headings: one h1 per page, h2 then h3 in order (checked in server-rendered HTML).
- Alt text: the Lean Reset photo had an empty alt and now has one. Coach photo and credential logos have fuller alts.
- Images below the fold load with `loading="lazy"` and `decoding="async"`. The hero image gets `fetchPriority="high"`.
- Focus ring is now 3px copper: 5.4:1 on bone, and logo orange on dark sections (6.3:1). The EN/हिंदी toggles now have `aria-pressed` and `lang`.
- FAQ copy aimed at target searches, with no new facts beyond the brief:
  - "How do I pay?" is now "What does an online personal trainer cost?" Same answer, no price.
  - New: "Can I train at home?"
  - New: "I have not trained in years. Where do I start?" Answer: Return, 45 min, 12 alternate-day sessions a month.
  - New: "I live in Dubai or Singapore. Does that work?"
  - Hindi strings added for each one in `src/studio/hindi.ts`.
- Hero eyebrow now reads "Online personal trainer · Live from Pune". The hero line adds "at home". Header nav and footer link to the blog. The footer gives business facts and says ASCA and ACE don't endorse the business.

### Theme (from the logo mark in `public/favicon.svg`)
- Ink `#12110e` and logo orange `#e07a3d` (`--color-copper-2`) on the existing bone paper. `--color-copper` is now `#9c4615`, a darker copper for text and links that passes AA on light backgrounds. Before, both copper variables were plain `#111111`.
- The off-brand blue (`#0050f8`) hero WhatsApp button and closing CTA band are gone. WhatsApp uses the existing `.btn-wa`. The CTA band is ink, with a new `.btn-accent` button (orange with ink text, 6.3:1).
- `.btn` gets a thin orange underline. Icons on ink use the orange. Selected text is orange with ink text.
- Font stack falls back to Noto Gujarati, Arabic, SC and JP for the new languages. Nothing extra is downloaded.

### Blog
- `/blog` index, plus a post: **"Best exercises for desk workers: 7 moves that fit a workday"** at `/blog/best-exercises-for-desk-workers`.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-exercises-for-desk-workers`. Each has its own title, description and canonical, the full reciprocal hreflang set (7 languages plus x-default), and Article and BreadcrumbList JSON-LD. Unknown language codes return 404.
- Content is in `src/content/blog/desk-workers.ts`. Citations are written as `{n}` and link to a numbered source list.
- Sources, all real and opened:
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. Bull et al., Br J Sports Med 2020: https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/
  3. NHS physical activity guidelines for adults 19–64: https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/
  4. Dunstan et al., Diabetes Care 2012: https://doi.org/10.2337/dc11-1931
  5. Andersen et al., Pain 2011: https://doi.org/10.1016/j.pain.2010.11.016
  6. Ekelund et al., Lancet 2016: https://doi.org/10.1016/S0140-6736(16)30370-1
- No invented stats, no client results, no prices. The sample week is labelled "Sample only. Not a prescription." The post includes a medical-safety note and the credentials no-endorsement line.

### Verified
- `npm run build` cannot run on this repo as committed (see blockers below). The build was checked with a local-only Vite config that stubs the missing platform files and uses placeholder images. It built cleanly.
- The built server returned 200 for `/`, `/blog`, the English post and the `ar` and `gu` posts, and 404 for `/xx/blog/...`.
- Server-rendered HTML has exactly one title, description and canonical per page, hreflang on posts, and parseable JSON-LD.
- Arabic was checked in headless Chrome at 390px: RTL layout is right and there are no console errors.
- `tsc` adds no new errors. ESLint shows no errors and one fast-refresh warning.

## Blockers found (not fixed here)
- **The repo cannot build from a clean clone.** These are missing:
  - `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and `src/lib/auth/{client,server,verify.server}`, `src/lib/app-data/{client.server,use-connector-readiness}.ts` and `src/lib/multiplayer/p2p`.
  - Every image in `src/assets/` (including `ofw-logo.png`), plus `public/og.jpg`. `binary-parts/manifest.json` lists about 29 files, but only 2 parts are committed.
  - The cPanel zip parts look incomplete (`part-09`/`part-10` are a few bytes).
- `npm install` fails with the box's npm 9 (`edgesOut` error). It works with npm 10 and `--legacy-peer-deps`. TanStack Start packages also want Node ≥ 22.12.

## Please check (facts I did not change)
- `src/studio/content.ts` has `clientNotes`: eight named first-person quotes that read like testimonials. They are not rendered anywhere today. Delete them, or confirm they are real and have consent. (Labelled as samples 25 Oct.)
- ~~The Iron Hour card says "20 sessions a month".~~ Fixed 23 Oct.
- ~~The home stats band claims "3500+ live sessions", "4–5 average sessions per day" and "10+ countries with 90% consistency".~~ Removed 30 Oct (unsourced); restore only with a source.
- ~~Return is not a program card or a booking option yet.~~ Added 23 Oct.

## Suggested next steps
1. Restore the missing platform files and images so `npm run build` works from a clean clone.
2. ~~Add a 1200×630 social card and set `og:image` and `twitter:card=summary_large_image` in `seoHead`.~~ Done 28 Oct; logo-based `og-card.jpg` 31 Oct. A designed card can replace it at the same path.
3. ~~Port the prototype landing pages from `/workspace/jalanpt/site` as routes~~: all six done (`/personal-trainer-for-fat-loss` 25 Oct, `/getting-back-into-exercise` 28 Oct, `/online-strength-and-conditioning-coach` 29 Oct, India/Dubai/Singapore 30 Oct), all in the sitemap.
4. ~~Add Return as a program card and a booking option.~~ Done 23 Oct.
5. Get a native speaker to review the ar, hi, es, zh, ja and gu translations before launch.
6. Point DNS for onlinefitness.com at the host before shipping canonicals. Earlier notes say GoDaddy NS had lame delegation.
7. Next blog post ideas: "Best mobility exercises for hips and shoulders", "Best exercises for posture" (check overlap with the warm-up, cool-down and desk-workers posts first). (~~Type 2 diabetes~~ done 5 Nov. ~~Knee-friendly leg exercises~~ done 4 Nov. ~~Busy parents~~ done 3 Nov. ~~Grip strength~~ done 2 Nov. ~~Women over 40~~ done 24 Oct. ~~Warm-up before strength training~~ done 25 Oct. ~~Strength and conditioning for beginners~~ done 26 Oct. ~~Home workouts with one dumbbell~~ done 28 Oct. ~~Core exercises for lower back health~~ done 1 Nov; it covers the back-pain angle, so a separate "back pain at a desk" post would overlap.)
8. Get a physio or doctor to read the "Before you start" section of the lower back post (and the knee-friendly legs post), and a doctor or diabetes educator to read the type 2 diabetes post.
9. ~~Add a `.gitignore` (`node_modules`, `.output`, local lockfiles, `public/__grok/`) so local installs stop showing as untracked.~~ Done 3 Nov (also ignores restored binaries).
10. ~~Self-host Outfit (woff2 via binary-parts) to drop the render-blocking Google Fonts request.~~ Done 4 Nov (`public/fonts/outfit-latin.woff2`, restored like the images).
11. ~~Tighten Hindi, Gujarati and Arabic meta descriptions over 160 characters.~~ Done 3 Nov (11 trimmed).
