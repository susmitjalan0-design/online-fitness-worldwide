/**
 * Country landing pages: /online-personal-trainer-india, -dubai, -singapore.
 * Ported from the prototypes in /workspace/jalanpt/site/online-personal-trainer-* (30 Oct 2026).
 * Facts only from the brief: live 1:1 and small-group coaching on Meet/Zoom/FaceTime,
 * Hindi or English, IST, from Pune. Iron Hour 60 min 1:1; Lean Reset 20 sessions a
 * month 1:1; Return 45 min, 12 alternate-day sessions a month; Open Floor small group;
 * Consultation 30 min, not training. No prices, no promised results, no client quotes.
 *
 * Time zones: IST is UTC+5:30, Gulf Standard Time (Dubai) UTC+4, Singapore UTC+8.
 * None of the three uses daylight saving, so the offsets hold all year.
 */

export type CountryFaq = { q: string; a: string };
export type CountryProgram = { key: "iron" | "lean" | "return" | "open"; meta: string; name: string; line: string; href: string; cta: string };

export type CountryPage = {
  path: string;
  title: string;
  description: string;
  /** Short name for breadcrumbs and JSON-LD. */
  crumb: string;
  eyebrow: string;
  h1: string;
  lead: string[];
  clockHeading: string;
  clock: string[];
  /** Example conversions only, [IST, local]. Empty for India. */
  table?: { localLabel: string; rows: ReadonlyArray<readonly [string, string]> };
  /** Programs in the order this page leads with. */
  programOrder: CountryProgram["key"][];
  faqs: CountryFaq[];
  /** schema.org areaServed for the Service. */
  areaServed: Record<string, unknown>;
  waText: string;
  /** Blog posts to lead "Read next" with, by slug. */
  leadSlugs: string[];
};

export const PROGRAMS: Record<CountryProgram["key"], CountryProgram> = {
  iron: {
    key: "iron",
    meta: "60 minutes · 1:1",
    name: "Iron Hour",
    line: "Strength first. One coach, one lifter.",
    href: "/online-strength-and-conditioning-coach",
    cta: "How Iron Hour works",
  },
  lean: {
    key: "lean",
    meta: "20 sessions a month · 1:1",
    name: "Lean Reset",
    line: "For fat loss. Frequent, steady work.",
    href: "/personal-trainer-for-fat-loss",
    cta: "How Lean Reset works",
  },
  return: {
    key: "return",
    meta: "45 minutes · 12 alternate-day sessions a month",
    name: "Return",
    line: "Back after a long break. We rebuild the base.",
    href: "/getting-back-into-exercise",
    cta: "How Return works",
  },
  open: {
    key: "open",
    meta: "Small group",
    name: "Open Floor",
    line: "A few people, one screen. Still cued by name.",
    href: "/#programs",
    cta: "Ask about Open Floor",
  },
};

const COST_FAQ: CountryFaq = {
  q: "What does it cost?",
  a: "No prices here. Booking only holds a time. We agree the fee directly, after the consultation.",
};
const LANGUAGE_FAQ: CountryFaq = { q: "Hindi or English?", a: "Either. Pick one when you book." };
const KIT_FAQ: CountryFaq = {
  q: "What do I need at home?",
  a: "A phone or laptop, floor space the size of a mat, and whatever kit you have. The camera goes at the side, whole body in frame.",
};
const START_FAQ: CountryFaq = {
  q: "Where do I start?",
  a: "A 30-minute consultation. A conversation, not a training session. Your history, your goals, your week. Then we pick the program.",
};

export const INDIA: CountryPage = {
  path: "/online-personal-trainer-india",
  title: "Online Personal Trainer in India, Live 1:1 at Home | Jalan PT",
  description:
    "Live online personal training anywhere in India, coached from Pune on Meet, Zoom or FaceTime. 1:1 or small group, Hindi or English, IST hours.",
  crumb: "Online personal trainer in India",
  eyebrow: "India · Live online coaching",
  h1: "An online personal trainer, anywhere in India.",
  lead: ["Bengaluru, Delhi, Kochi or a small town. You train at home.", "I coach from Pune. Live on video, every set watched."],
  clockHeading: "Same clock",
  clock: ["One time zone. Your 7 am is my 7 am.", "No conversions. No odd hours to make it work."],
  programOrder: ["iron", "lean", "return", "open"],
  faqs: [
    { q: "Do you only coach people in Pune?", a: "No. Anywhere in India with a stable connection. Pune is just where my camera is." },
    {
      q: "Why not just use a fitness app?",
      a: "An app gives you a plan and leaves. Here I'm on the call. I watch the rep, cue it mid-set, and change the next one.",
    },
    LANGUAGE_FAQ,
    KIT_FAQ,
    COST_FAQ,
    START_FAQ,
  ],
  areaServed: { "@type": "Country", name: "India" },
  waText: "Hi Susmit, I read the online personal trainer in India page and want to book a consultation",
  leadSlugs: ["best-exercises-for-desk-workers", "best-home-workouts-with-one-dumbbell"],
};

export const DUBAI: CountryPage = {
  path: "/online-personal-trainer-dubai",
  title: "Online Personal Trainer in Dubai, Live 1:1 at Home | Jalan PT",
  description:
    "Live online personal training for Dubai, coached from Pune on Meet, Zoom or FaceTime. 1:1 or small group, Hindi or English. Dubai is 1½ hours behind IST.",
  crumb: "Online personal trainer in Dubai",
  eyebrow: "Dubai · Live online coaching",
  h1: "An online personal trainer for Dubai.",
  lead: ["You train at home in Dubai. I coach from Pune.", "Live on video, every set watched."],
  clockHeading: "The clock",
  clock: ["Dubai runs 1½ hours behind IST. Neither side uses daylight saving, so that holds all year."],
  table: {
    localLabel: "Dubai",
    rows: [
      ["7:00 am", "5:30 am"],
      ["8:30 am", "7:00 am"],
      ["1:00 pm", "11:30 am"],
      ["7:30 pm", "6:00 pm"],
      ["9:00 pm", "7:30 pm"],
    ],
  },
  programOrder: ["iron", "lean", "return", "open"],
  faqs: [
    { q: "Can I train in Dubai with a coach in Pune?", a: "Yes. If I can see you, I can coach you. The distance doesn't change the session." },
    LANGUAGE_FAQ,
    KIT_FAQ,
    { q: "I travel a lot. Does that break it?", a: "No. The session moves with you. A hotel room works. We plan around the room you're in." },
    COST_FAQ,
    START_FAQ,
  ],
  areaServed: {
    "@type": "City",
    name: "Dubai",
    containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
  },
  waText: "Hi Susmit, I read the online personal trainer in Dubai page and want to book a consultation",
  leadSlugs: ["best-bodyweight-exercises-for-travel", "best-home-workouts-with-one-dumbbell"],
};

export const SINGAPORE: CountryPage = {
  path: "/online-personal-trainer-singapore",
  title: "Online Personal Trainer in Singapore, Live 1:1 at Home | Jalan PT",
  description:
    "Live online personal training for Singapore, coached from Pune on Meet, Zoom or FaceTime. Strength, fat loss or a return after a break. Singapore is 2½ hours ahead of IST.",
  crumb: "Online personal trainer in Singapore",
  eyebrow: "Singapore · Live online coaching",
  h1: "An online personal trainer for Singapore.",
  lead: ["You train at home in Singapore. I coach from Pune.", "Live on video. Hindi or English."],
  clockHeading: "The clock",
  clock: [
    "Singapore runs 2½ hours ahead of IST. Neither side uses daylight saving, so that holds all year.",
    "Before work in Singapore is early morning in Pune. After work is late afternoon here.",
  ],
  table: {
    localLabel: "Singapore",
    rows: [
      ["5:00 am", "7:30 am"],
      ["6:30 am", "9:00 am"],
      ["12:30 pm", "3:00 pm"],
      ["4:00 pm", "6:30 pm"],
      ["6:30 pm", "9:00 pm"],
    ],
  },
  programOrder: ["lean", "iron", "return", "open"],
  faqs: [
    { q: "Can I train in Singapore with a coach in Pune?", a: "Yes. If I can see you, I can coach you. The distance doesn't change the session." },
    {
      q: "I want to lose weight. Which program?",
      a: "Usually Lean Reset: 20 sessions a month, 1:1. It's built on frequency. No number is promised; we track what you do and adjust.",
    },
    LANGUAGE_FAQ,
    KIT_FAQ,
    COST_FAQ,
    START_FAQ,
  ],
  areaServed: { "@type": "Country", name: "Singapore" },
  waText: "Hi Susmit, I read the online personal trainer in Singapore page and want to book a consultation",
  leadSlugs: ["best-bodyweight-exercises-for-travel", "best-exercises-for-desk-workers"],
};

/** All country pages, for cross-links ("Also coaching"). */
export const COUNTRY_PAGES: CountryPage[] = [INDIA, DUBAI, SINGAPORE];
