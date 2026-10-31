import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { BLOG_POSTS } from "@/content/blog";
import { postPathFor } from "@/content/blog/shared";
import { WHATSAPP_E164 } from "@/studio/content";
import { absoluteUrl, breadcrumbLd, BUSINESS_ID, businessLd, seoHead } from "@/lib/seo";

/**
 * Landing page for "getting back into exercise after a long break".
 * Ported from the prototype in /workspace/jalanpt/site/getting-back-into-exercise
 * (28 Oct 2026). Facts only from the brief: Return is 45 minutes, 12
 * alternate-day sessions a month, coached live. No prices, no promised results,
 * no client quotes.
 */
const PATH = "/getting-back-into-exercise";
const TITLE = "Getting Back Into Exercise After a Long Break | Jalan PT";
const DESCRIPTION =
  "Months or years off? Return is live online coaching that rebuilds your base at home: 45 minutes, 12 alternate-day sessions a month. Hindi or English.";
const WA_TEXT = "Hi Susmit, I read the getting back into exercise page and want to book a consultation";
const BREAK_POST_SLUG = "best-exercises-after-a-long-break";
const BREAK_POST_PATH = postPathFor(BREAK_POST_SLUG, "en");
const OVER_60_POST_PATH = postPathFor("best-strength-exercises-for-over-60s", "en");
/** Read next leads with the long-break post, then the over-60s post. */
const LEAD_SLUGS: readonly string[] = [BREAK_POST_SLUG, "best-strength-exercises-for-over-60s"];

const FAQS = [
  {
    q: "How long a break counts?",
    a: "Long enough that training doesn't feel normal any more. That's the only test.",
  },
  {
    q: "I've had an injury, surgery or a baby. Can I still start?",
    a: "Get clearance from your doctor first. Then tell me all of it in the consultation, and we plan around it.",
  },
  {
    q: "I'm over 60. Is it too late?",
    a: "No. Strength training still works after 60, including in trials of people aged 75 and over. Return's rest day between sessions suits a steady start. A heart, metabolic or kidney condition, or symptoms like chest pain or dizziness? Get medical clearance first.",
  },
  {
    q: "Why alternate days?",
    a: "The day off is where you recover. Coming back, that matters as much as the session.",
  },
  {
    q: "How many sessions is Return?",
    a: "12 sessions a month, one day on, one day off. 45 minutes each, 1:1, coached live on Google Meet, Zoom or FaceTime.",
  },
  {
    q: "What does it cost?",
    a: "Not on this page. Booking holds a time. The fee is agreed directly, before or on the first call.",
  },
  {
    q: "Where do I start?",
    a: "A 30-minute consultation. It is a conversation, not training. Your history, what stopped you, what you want back. Then we decide if Return fits.",
  },
] as const;

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(PATH)}#service`,
  name: "Return: live online coaching for getting back into exercise",
  serviceType: "Online personal training",
  description:
    "1:1 live coaching on video for getting back into exercise after a long break. 45-minute sessions, 12 a month on alternate days. No prices published; the fee is agreed directly.",
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

export const Route = createFileRoute("/getting-back-into-exercise")({
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
          { name: "Getting back into exercise", path: PATH },
        ]),
      ],
    }),
  component: GettingBackPage,
});

function GettingBackPage() {
  const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(WA_TEXT)}`;
  const reads = [
    ...LEAD_SLUGS.flatMap((slug) => BLOG_POSTS.filter((post) => post.slug === slug)),
    ...BLOG_POSTS.filter((post) => !LEAD_SLUGS.includes(post.slug)).slice(0, 2),
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
                Getting back into exercise
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 text-xs font-semibold tracking-widest text-copper uppercase">Return · Live online coaching</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">Getting back into exercise after a long break.</h1>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            Months off. Years, maybe. That's fine. We start from the body you have today.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/#programs" className="btn inline-flex min-h-12 items-center gap-1 rounded-full px-6 text-sm font-semibold">
              Book a consultation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">
              Ask on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <section aria-labelledby="left-off" className="mt-12">
            <h2 id="left-off" className="font-display text-3xl">
              Don't pick up where you left off
            </h2>
            <p className="mt-4 text-base leading-relaxed sm:text-lg">Your old numbers are a memory, not a starting point.</p>
            <p className="mt-3 text-base leading-relaxed sm:text-lg">
              The first weeks feel easy. That's the trap. We go lighter than you think you need, and build from there.
            </p>
          </section>

          <section aria-labelledby="how-return-runs" className="mt-12">
            <h2 id="how-return-runs" className="font-display text-3xl">
              How Return runs
            </h2>
            <ul className="prose-links list-mark mt-4 list-disc space-y-3 ps-5 text-base leading-relaxed sm:text-lg">
              <li>
                <strong>12 sessions a month. One day on, one day off.</strong> Steady, not sudden. Training becomes a habit again
                before it gets hard.
              </li>
              <li>
                <strong>45 minutes.</strong> Short enough to keep. Set-up, warm-up, the main work, cool-down. Every set watched and
                cued live.
              </li>
              <li>
                <strong>At home, on video.</strong> Google Meet, Zoom or FaceTime. From Pune. Hindi or English. IST hours.
              </li>
              <li>
                Want to start on your own first? <a href={BREAK_POST_PATH}>Read the 7 best exercises after a long break</a>.
              </li>
              <li>
                Over 60? <a href={OVER_60_POST_PATH}>Read the 7 best strength exercises for over 60s</a>.
              </li>
            </ul>
          </section>

          <section aria-labelledby="fit" className="mt-12">
            <h2 id="fit" className="font-display text-3xl">
              Not the right fit?
            </h2>
            <ul className="prose-links mt-4 space-y-3 text-base leading-relaxed sm:text-lg">
              <li>
                <strong>Iron Hour.</strong> Strength first: 60 minutes, 1:1. Set-up, warm-up, primary lift, accessories, cool-down.
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
              30 minutes. Not a training session. Your history, what stopped you, what you want back. Then we decide if Return fits.
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
