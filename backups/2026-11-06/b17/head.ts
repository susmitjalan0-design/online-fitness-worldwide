/**
 * Blog post: "Best strength exercises for bone density".
 * Citations in copy are written as {n} and point at BONE_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (title, authors, journal,
 * year, volume/pages and finding checked against the Europe PMC record and
 * abstract / Crossref, and each DOI checked as registered at doi.org, on
 * 6 Nov 2026; the WHO and NHS pages opened the same day and the wording used
 * read on the page). LIFTMOR was supervised HiRIT in screened postmenopausal
 * women, and the copy says plainly it is not a home plan. Cochrane found small
 * BMD gains and no clear fracture effect; ESSA and the UK consensus agree on
 * progressive resistance plus impact, and the UK statement adds spinal
 * extension and avoiding high spinal flexion. This is general training
 * information, not treatment: osteoporosis, fracture history and medicines
 * route to the reader's doctor or physio. No client results, no quotes, no
 * prices. Translations were drafted for this batch and need a native-speaker
 * review before launch (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const BONE_SLUG = "best-strength-exercises-for-bone-density";
export const BONE_PUBLISHED = "2026-11-06";
export const BONE_MODIFIED = "2026-11-06";

export const BONE_SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "Beck BR, Daly RM, Fiatarone Singh MA, Taaffe DR. Exercise and Sports Science Australia (ESSA) position statement on exercise prescription for the prevention and management of osteoporosis. J Sci Med Sport. 2017;20(5):438–445.",
    url: "https://doi.org/10.1016/j.jsams.2016.10.001",
  },
  {
    cite: "Watson SL, Weeks BK, Weis LJ, Harding AT, Horan SA, Beck BR. High-intensity resistance and impact training improves bone mineral density and physical function in postmenopausal women with osteopenia and osteoporosis: the LIFTMOR randomized controlled trial. J Bone Miner Res. 2018;33(2):211–220.",
    url: "https://doi.org/10.1002/jbmr.3284",
  },
  {
    cite: "Brooke-Wavell K, Skelton DA, Barker KL, et al. Strong, steady and straight: UK consensus statement on physical activity and exercise for osteoporosis. Br J Sports Med. 2022;56(15):837–846.",
    url: "https://doi.org/10.1136/bjsports-2021-104634",
  },
  {
    cite: "Howe TE, Shea B, Dawson LJ, et al. Exercise for preventing and treating osteoporosis in postmenopausal women. Cochrane Database Syst Rev. 2011;(7):CD000333.",
    url: "https://doi.org/10.1002/14651858.CD000333.pub2",
  },
  {
    cite: "NHS. Keep bones healthy over 65. nhs.uk.",
    url: "https://www.nhs.uk/live-well/bone-health/keep-your-bones-strong-over-65/",
  },
  {
    cite: "NHS. Osteoporosis. nhs.uk.",
    url: "https://www.nhs.uk/conditions/osteoporosis/",
  },
  {
    cite: "American College of Sports Medicine. Position stand: Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
    url: "https://doi.org/10.1249/MSS.0b013e3181915670",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;
