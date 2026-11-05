/**
 * Blog post: "Best strength exercises for type 2 diabetes".
 * Citations in copy are written as {n} and point at DIABETES_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (title, authors, journal,
 * year, volume/pages and finding checked against the Europe PMC record and
 * abstract, and each DOI checked as registered at doi.org, on 5 Nov 2026; the
 * ADA position statement read in full on PMC; the WHO and NHS pages opened the
 * same day and the wording used read on the page). The trials differ on how
 * much resistance training alone moves HbA1c, and ADA and ACSM differ on
 * medical clearance: the copy says so and gives both. This is general training
 * information, not treatment: medicines, hypos and complications route to the
 * reader's doctor. No client results, no quotes, no prices. Translations were
 * drafted for this batch and need a native-speaker review before launch (see
 * CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const DIABETES_SLUG = "best-strength-exercises-for-type-2-diabetes";
export const DIABETES_PUBLISHED = "2026-11-05";
export const DIABETES_MODIFIED = "2026-11-05";

export const DIABETES_SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "Colberg SR, Sigal RJ, Yardley JE, et al. Physical activity/exercise and diabetes: a position statement of the American Diabetes Association. Diabetes Care. 2016;39(11):2065–2079.",
    url: "https://doi.org/10.2337/dc16-1728",
  },
  {
    cite: "Umpierre D, Ribeiro PA, Kramer CK, et al. Physical activity advice only or structured exercise training and association with HbA1c levels in type 2 diabetes: a systematic review and meta-analysis. JAMA. 2011;305(17):1790–1799.",
    url: "https://doi.org/10.1001/jama.2011.576",
  },
  {
    cite: "Sigal RJ, Kenny GP, Boulé NG, et al. Effects of aerobic training, resistance training, or both on glycemic control in type 2 diabetes: a randomized trial. Ann Intern Med. 2007;147(6):357–369.",
    url: "https://doi.org/10.7326/0003-4819-147-6-200709180-00005",
  },
  {
    cite: "Church TS, Blair SN, Cocreham S, et al. Effects of aerobic and resistance training on hemoglobin A1c levels in patients with type 2 diabetes: a randomized controlled trial. JAMA. 2010;304(20):2253–2262.",
    url: "https://doi.org/10.1001/jama.2010.1710",
  },
  {
    cite: "Dempsey PC, Larsen RN, Sethi P, et al. Benefits for type 2 diabetes of interrupting prolonged sitting with brief bouts of light walking or simple resistance activities. Diabetes Care. 2016;39(6):964–972.",
    url: "https://doi.org/10.2337/dc15-2336",
  },
  {
    cite: "Anjana RM, Unnikrishnan R, Deepa M, et al. Metabolic non-communicable disease health report of India: the ICMR-INDIAB national cross-sectional study (ICMR-INDIAB-17). Lancet Diabetes Endocrinol. 2023;11(7):474–489.",
    url: "https://doi.org/10.1016/S2213-8587(23)00119-5",
  },
  {
    cite: "NHS. Low blood sugar (hypoglycaemia). nhs.uk.",
    url: "https://www.nhs.uk/conditions/low-blood-sugar-hypoglycaemia/",
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
