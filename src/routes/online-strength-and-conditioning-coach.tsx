import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { BLOG_POSTS } from "@/content/blog";
import { postPathFor } from "@/content/blog/shared";
import { WHATSAPP_E164 } from "@/studio/content";
import { absoluteUrl, breadcrumbLd, BUSINESS_ID, businessLd, seoHead } from "@/lib/seo";

/**
 * Landing page for "online strength and conditioning coach".
 * Ported from the prototype in /workspace/jalanpt/site/online-strength-and-conditioning-coach
 * (29 Oct 2026). Facts only from the brief: Iron Hour is 60 minutes, 1:1, coached
 * live (set-up 0, warm-up 4, primary 14, accessories 28, cool-down 50). No prices,
 * no promised results, no client quotes.
 */
const PATH = "/online-strength-and-conditioning-coach";
const TITLE = "Online Strength and Conditioning Coach, Live 1:1 | Jalan PT";
const DESCRIPTION =
  "Iron Hour is live 1:1 strength training online with an ASCA Level 1 coach: 60 minutes at home on Google Meet, Zoom or FaceTime. Hindi or English, IST hours.";
const WA_TEXT = "Hi Susmit, I read the online strength and conditioning coach page and want to book a consultation";

/** Posts this page leads with, in order. The rest of the list follows. */
const LEAD_SLUGS = [
  "best-strength-and-conditioning-exercises-for-beginners",
  "best-home-workouts-with-one-dumbbell",
  "best-warm-up-exercises-before-strength-training",
  "best-cool-down-stretches-after-strength-training",
];
const SC_POST_PATH = postPathFor("best-strength-and-conditioning-exercises-for-beginners", "en");
const DB_POST_PATH = postPathFor("best-home-workouts-with-one-dumbbell", "en");
const WARM_POST_PATH = postPathFor("best-warm-up-exercises-before-strength-training", "en");
const COOL_POST_PATH = postPathFor("best-cool-down-stretches-after-strength-training", "en");

const HOUR = [
  { min: "00", name: "Set-up", text: "Camera, space, kit. Whole body in frame." },
  { min: "04", name: "Warm-up", text: "Ramps you into today's lift." },
  { min: "14", name: "Primary", text: "The heavy sets. This is where I earn my keep." },
  { min: "28", name: "Accessories", text: "Work on whatever the main lift exposed." },
  { min: "50", name: "Cool-down", text: "Breathe. Notes for next session." },
] as const;

const FAQS = [
  {
    q: "I've never lifted. Is Iron Hour for me?",
    a: "Yes, if you want to learn it properly. Coming back after months off? Return may suit you better. We decide in the consultation.",
  },
  {
    q: "Strength and conditioning: what's the difference?",
    a: "Strength is how much force you can make. Conditioning is how long you can keep making it. A good plan trains both.",
  },
  {
    q: "Do I need a barbell?",
    a: "Not necessarily. The main lift is chosen around the kit you have. A barbell, a pair of dumbbells, one dumbbell, a band. We sort that out in the consultation.",
  },
  {
    q: "How does a coach see my form on video?",
    a: "The camera goes at the side, whole body in frame. That's the first thing we fix at minute 0. Then every rep is watched and cued as it happens, on Google Meet, Zoom or FaceTime.",
  },
  {
    q: "What does it cost?",
    a: "Not on this page. Booking holds a time. The fee is agreed directly, before or on the first call.",
  },
  {
    q: "Where do I start?",
    a: "A 30-minute consultation. It is a conversation, not training. Your lifting history, your kit, your week. Then we decide if Iron Hour fits.",
  },
] as const;

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(PATH)}#service`,
  name: "Iron Hour: live online strength and conditioning coaching",
  serviceType: "Online strength and conditioning coaching",
  description:
    "1:1 live strength and conditioning coaching on video. 60-minute sessions built around one main lift: set-up, warm-up, primary lift, accessories, cool-down. No prices published; the fee is agreed directly.",
  url: absoluteUrl(PATH),
  provider: { ...businessLd, "@id": BUSINESS_ID },
  areaServed: businessLd.areaServed,
  availableLanguage: ["English", "Hindi"],
  availableChannel: {
    "@type": "ServiceChannel",
    name: "Live video: Google Meet, Zoom or FaceTime",
    serviceUrl: absoluteUrl(PATH),
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl(PATH)}#faq`,
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const Route = createFileRoute("/online-strength-and-conditioning-coach")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: PATH,
      lang: "en",
      ogLocale: "en_IN",
      alternates: [
        { hrefLang: "en", path: PATH },
        { hrefLang: "x-default", path: PATH },
      ],
      jsonLd: [
        serviceLd,
        faqLd,
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Online strength and conditioning coach", path: PATH },
        ]),
      ],
    }),
  component: StrengthCoachPage,
});

function StrengthCoachPage() {
  const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(WA_TEXT)}`;
  const reads = [
    ...LEAD_SLUGS.flatMap((slug) => BLOG_POSTS.filter((post) => post.slug === slug)),
    ...BLOG_POSTS.filter((post) => !LEAD_SLUGS.includes(post.slug)).slice(0, 1),
  ];
  return (
    <div className="min-h-screen bg-bone text-ink" lang="en" dir="ltr">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <article className="shell band max-w-3xl text-start">
          <nav aria-label="Breadcrumb" className="text-sm text-mist">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href="/" className="underline-offset-4 hover:underline">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                Online strength and conditioning coach
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 text-xs font-semibold tracking-widest text-copper uppercase">Iron Hour · Live online coaching</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
            An online strength and conditioning coach, live for the full hour.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-mist">Sixty minutes. One lifter. Every rep watched, cued as it happens.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/#programs" className="btn inline-flex min-h-12 items-center gap-1 rounded-full px-6 text-sm font-semibold">
              Book a consultation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">
              Ask on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <section aria-labelledby="strength-first" className="mt-12">
            <h2 id="strength-first" className="font-display text-3xl">
              Strength first
            </h2>
            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Strength sits under everything else. Sport, stairs, the bag you carry home.
            </p>
            <p className="mt-3 text-base leading-relaxed sm:text-lg">
              So Iron Hour is built around one main lift. The rest of the hour serves it.
            </p>
          </section>

          <section aria-labelledby="the-hour" className="mt-12">
            <h2 id="the-hour" className="font-display text-3xl">
              The hour, minute by minute
            </h2>
            <ol className="mt-4 space-y-3">
              {HOUR.map((beat) => (
                <li key={beat.min} className="card-lift flex items-start gap-4 rounded-2xl border border-line bg-ink-2 p-5">
                  <span className="mark-badge grid size-10 shrink-0 place-items-center bg-ink text-sm text-copper-2 tabular-nums" aria-hidden="true">
                    {beat.min}
                  </span>
                  <div>
                    <h3 className="font-display text-xl">
                      <span className="sr-only">Minute {Number(beat.min)}: </span>
                      {beat.name}
                    </h3>
                    <p className="mt-1 leading-relaxed text-mist">{beat.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="prose-links mt-4 text-base leading-relaxed sm:text-lg">
              Want the bookends on your own days? <a href={WARM_POST_PATH}>Warm-up exercises before strength training</a> and{" "}
              <a href={COOL_POST_PATH}>cool-down stretches after</a>.
            </p>
          </section>

          <section aria-labelledby="how-iron-hour-runs" className="mt-12">
            <h2 id="how-iron-hour-runs" className="font-display text-3xl">
              How Iron Hour runs
            </h2>
            <ul className="prose-links list-mark mt-4 list-disc space-y-3 ps-5 text-base leading-relaxed sm:text-lg">
              <li>
                <strong>Just you. 60 minutes, 1:1.</strong> No class to keep up with. The plan moves at your pace.
              </li>
              <li>
                <strong>Coached by a strength coach.</strong> ASCA Level 1. Strength and conditioning is the whole job here. Anatomy
                and biomechanics credential from the American Council on Exercise too.
              </li>
              <li>
                <strong>At home, on video.</strong> Google Meet, Zoom or FaceTime. From Pune. Hindi or English. IST hours.
              </li>
              <li>
                <strong>Whatever kit you have.</strong> Barbell, dumbbells, one dumbbell, a band. Short on kit?{" "}
                <a href={DB_POST_PATH}>Home workouts with one dumbbell</a>.
              </li>
              <li>
                New to all of it? <a href={SC_POST_PATH}>Read the 7 best strength and conditioning exercises for beginners</a>.
              </li>
            </ul>
          </section>

          <section aria-labelledby="fit" className="mt-12">
            <h2 id="fit" className="font-display text-3xl">
              Not the right fit?
            </h2>
            <ul className="prose-links mt-4 space-y-3 text-base leading-relaxed sm:text-lg">
              <li>
                <strong>Return.</strong> Months or years off: 45 minutes, 12 alternate-day sessions a month.{" "}
                <a href="/getting-back-into-exercise">Getting back into exercise</a>.
              </li>
              <li>
                <strong>Lean Reset.</strong> Fat loss and energy: 20 sessions a month, 1:1.{" "}
                <a href="/personal-trainer-for-fat-loss">Fat loss coaching</a>.
              </li>
              <li>
                <strong>Open Floor.</strong> Prefer company: small-group coaching.
              </li>
              <li>
                <strong>Consultation.</strong> Not sure: 30 minutes, a conversation, not training.
              </li>
            </ul>
          </section>

          <section aria-labelledby="faq" className="mt-12">
            <h2 id="faq" className="font-display text-3xl">
              Questions
            </h2>
            <div className="mt-4 space-y-3">
              {FAQS.map((item) => (
                <details key={item.q} className="card-lift rounded-2xl border border-line bg-ink-2 p-5">
                  <summary className="font-semibold">{item.q}</summary>
                  <p className="mt-3 leading-relaxed text-mist">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <nav aria-labelledby="read" className="mt-12 border-t border-line pt-8">
            <h2 id="read" className="font-display text-2xl">
              Read next
            </h2>
            <ul className="mt-4 space-y-3">
              {reads.map((post) => (
                <li key={post.slug}>
                  <a
                    href={postPathFor(post.slug, "en")}
                    className="inline-flex items-start gap-2 text-lg font-semibold underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper"
                  >
                    <span>{post.copy.en.h1}</span>
                    <ArrowUpRight className="mt-1 size-4 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="start" className="mark-cap mt-12 rounded-3xl bg-ink p-6 text-bone sm:p-8">
            <h2 id="start" className="font-display text-3xl text-bone">
              Start with a consultation
            </h2>
            <p className="mt-4 leading-relaxed text-bone/90">
              30 minutes. Not a training session. Your lifting history, your kit, your week. Then we decide if Iron Hour fits.
            </p>
            <p className="mt-3 leading-relaxed text-bone/90">Booking holds a time. The fee is agreed directly. No prices on this site.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/#programs" className="btn-accent inline-flex min-h-12 items-center gap-1 rounded-full px-6 text-sm font-semibold">
                Book a consultation
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">
                Ask on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </section>

          <p className="mt-6 text-sm leading-relaxed text-mist">
            Coached by Susmit Jalan. ASCA Level 1 (strength and conditioning) and ACE (anatomy and biomechanics). These are
            credentials held by the coach. Neither body endorses this business. General information, not medical advice.
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
