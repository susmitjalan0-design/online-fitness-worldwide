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
