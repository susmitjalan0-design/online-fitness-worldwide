import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { BLOG_POSTS } from "@/content/blog";
import { postPathFor } from "@/content/blog/shared";
import { COUNTRY_PAGES, PROGRAMS, type CountryPage } from "@/content/country-pages";
import { WHATSAPP_E164 } from "@/studio/content";
import { absoluteUrl, breadcrumbLd, BUSINESS_ID, businessLd, seoHead } from "@/lib/seo";

/** Head for a country landing page: title, meta, canonical, en + x-default, Service + FAQPage + BreadcrumbList. */
export function countryHead(page: CountryPage) {
  const url = absoluteUrl(page.path);
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${page.crumb}: live online personal training`,
    serviceType: "Online personal training",
    description:
      "Live 1:1 and small-group personal training on video, coached from Pune on IST. Iron Hour, Lean Reset, Return and Open Floor. No prices published; the fee is agreed directly.",
    url,
    provider: { ...businessLd, "@id": BUSINESS_ID },
    areaServed: page.areaServed,
    availableLanguage: ["English", "Hindi"],
    availableChannel: {
      "@type": "ServiceChannel",
      name: "Live video: Google Meet, Zoom or FaceTime",
      serviceUrl: url,
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return seoHead({
    title: page.title,
    description: page.description,
    path: page.path,
    lang: "en",
    ogLocale: "en_IN",
    alternates: [
      { hrefLang: "en", path: page.path },
      { hrefLang: "x-default", path: page.path },
    ],
    jsonLd: [
      serviceLd,
      faqLd,
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: page.crumb, path: page.path },
      ]),
    ],
  });
}

export function CountryLandingPage({ page }: { page: CountryPage }) {
  const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(page.waText)}`;
  const reads = [
    ...page.leadSlugs.flatMap((slug) => BLOG_POSTS.filter((post) => post.slug === slug)),
    ...BLOG_POSTS.filter((post) => !page.leadSlugs.includes(post.slug)).slice(0, 2),
  ];
  const others = COUNTRY_PAGES.filter((other) => other.path !== page.path);
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
                {page.crumb}
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 text-xs font-semibold tracking-widest text-copper uppercase">{page.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">{page.h1}</h1>
          {page.lead.map((line) => (
            <p key={line} className="mt-4 text-lg leading-relaxed text-mist">
              {line}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/#programs" className="btn inline-flex min-h-12 items-center gap-1 rounded-full px-6 text-sm font-semibold">
              Book a consultation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">
              Ask on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <section aria-labelledby="clock" className="mt-12">
            <h2 id="clock" className="font-display text-3xl">
              {page.clockHeading}
            </h2>
            {page.clock.map((line) => (
              <p key={line} className="mt-4 text-base leading-relaxed sm:text-lg">
                {line}
              </p>
            ))}
            {page.table ? (
              <div className="mt-5 overflow-x-auto rounded-2xl border border-line bg-ink-2">
                <table className="w-full text-start text-base tabular-nums">
                  <caption className="px-5 pt-4 text-start text-sm text-mist">
                    Example conversions only. Not set slots; we pick yours in the consultation.
                  </caption>
                  <thead>
                    <tr className="border-b border-line">
                      <th scope="col" className="px-5 py-3 text-start font-semibold">
                        Pune (IST)
                      </th>
                      <th scope="col" className="px-5 py-3 text-start font-semibold">
                        {page.table.localLabel}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.table.rows.map(([ist, local]) => (
                      <tr key={ist} className="border-b border-line last:border-b-0">
                        <td className="px-5 py-3">{ist}</td>
                        <td className="px-5 py-3">{local}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>

          <section aria-labelledby="coach-not-app" className="mt-12">
            <h2 id="coach-not-app" className="font-display text-3xl">
              A coach on the call
            </h2>
            <ul className="list-mark mt-4 list-disc space-y-3 ps-5 text-base leading-relaxed sm:text-lg">
              <li>
                <strong>Live, not recorded.</strong> I watch the rep, cue it mid-set, and change the next one.
              </li>
              <li>
                <strong>At home, on video.</strong> Google Meet, Zoom or FaceTime. Camera at the side, whole body in frame.
              </li>
              <li>
                <strong>Hindi or English.</strong> Your pick, when you book.
              </li>
              <li>
                <strong>1:1 or a small group.</strong> One lifter, or a few people on one screen.
              </li>
            </ul>
          </section>

          <section aria-labelledby="programs" className="mt-12">
            <h2 id="programs" className="font-display text-3xl">
              Pick a program
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {page.programOrder.map((key) => {
                const program = PROGRAMS[key];
                return (
                  <li key={key} className="card-lift flex flex-col rounded-2xl border border-line bg-ink-2 p-5">
                    <p className="text-sm text-mist tabular-nums">{program.meta}</p>
                    <h3 className="mt-1 font-display text-xl">{program.name}</h3>
                    <p className="mt-2 leading-relaxed">{program.line}</p>
                    <a
                      href={program.href}
                      className="mt-auto inline-flex min-h-11 items-center gap-1 pt-3 font-semibold underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper"
                    >
                      {program.cta}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-mist">Not sure? The consultation is 30 minutes. A conversation, not training.</p>
          </section>

          <section aria-labelledby="faq" className="mt-12">
            <h2 id="faq" className="font-display text-3xl">
              Questions
            </h2>
            <div className="mt-4 space-y-3">
              {page.faqs.map((item) => (
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
            <p className="mt-6 text-sm text-mist">Also coaching:</p>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
              {others.map((other) => (
                <li key={other.path}>
                  <a href={other.path} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-copper">
                    {other.crumb}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="start" className="mark-cap mt-12 rounded-3xl bg-ink p-6 text-bone sm:p-8">
            <h2 id="start" className="font-display text-3xl text-bone">
              Start with thirty minutes
            </h2>
            <p className="mt-4 leading-relaxed text-bone/90">A consultation, not a training session. Your history, your goals, your week.</p>
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
