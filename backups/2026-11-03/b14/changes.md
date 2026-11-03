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

### Still open (needs Susmit)
- Build blockers: `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and the auth, app-data and multiplayer files are still missing, so `npm run build` fails from a clean clone.
- Busy-parents post: the postpartum lines quote the NHS (UK). "Health visitor" is a UK role; the translations give the nearest local wording. A physio or doctor read of "Before you start" would be good, as for the back-pain post.
- Native-speaker review of ar, hi, es, zh, ja and gu for all twenty posts, including the shortened meta descriptions.
- Grip post tone (mortality and sarcopenia cut-offs) and back-pain post wording: still waiting for your read.
- `clientNotes`: still labelled as samples. Replace them with real, consented quotes, or delete them.
- Fonts: Outfit is still a render-blocking Google Fonts request (self-hosting needs a woff2 file through binary-parts).
- The country pages are English only.

