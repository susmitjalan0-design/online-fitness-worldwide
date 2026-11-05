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

