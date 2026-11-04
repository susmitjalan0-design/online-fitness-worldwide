import { Fragment, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { BLOG_POSTS } from "@/content/blog";
import {
  alternatesFor,
  CLUSTER_HEADING,
  CLUSTER_HUB_TAG,
  CLUSTER_HERE,
  HYBRID_CLUSTER,
  HYBRID_HUB,
  blogIndexPathFor,
  JUMP_LABEL,
  LANG_META,
  NEW_TAB_LABEL,
  POST_LANGS,
  postPathFor,
  RELATED_LABEL,
  SEE_ALSO_LABEL,
  SOURCE_LABEL,
  type BlogPost,
  type PostLang,
} from "@/content/blog/shared";
import { WHATSAPP_E164 } from "@/studio/content";
import {
  absoluteUrl,
  breadcrumbLd,
  businessLd,
  coachLd,
  ogImageLd,
  seoHead,
} from "@/lib/seo";

/** Latin words and numbers inside right-to-left text. Each run is isolated so units, names and numbers keep their order. */
const LATIN_RUN = /([A-Za-z0-9](?:[A-Za-z0-9.,:×/%+\-–]*[A-Za-z0-9%])?(?: [A-Za-z0-9](?:[A-Za-z0-9.,:×/%+\-–]*[A-Za-z0-9%])?)*)/g;

function Bidi({ text, rtl }: { text: string; rtl: boolean }): ReactNode {
  if (!rtl) return text;
  return text.split(LATIN_RUN).map((part, index) => (index % 2 === 1 ? <bdi key={index}>{part}</bdi> : <Fragment key={index}>{part}</Fragment>));
}

/** Turns "text{1}{3}" into text with linked superscript citations. `label` is the localised word for "Source". */
function Cited({ text, label = "Source", rtl = false }: { text: string; label?: string; rtl?: boolean }): ReactNode {
  const parts = text.split(/\{(\d+)\}/);
  return parts.map((part, index) => {
    if (index % 2 === 0) return <Bidi key={index} text={part} rtl={rtl} />;
    const n = Number(part);
    return (
      <sup key={index} className="ms-0.5">
        <a href={`#source-${n}`} className="text-copper underline underline-offset-2" aria-label={`${label} ${n}`}>
          [{n}]
        </a>
      </sup>
    );
  });
}

/** Stable anchor for list item n (1-based in the URL): #item-1 ... #item-7. Used by the ItemList JSON-LD and the cards. */
function itemAnchor(index: number): string {
  return `item-${index + 1}`;
}

/** How many posts the "More from the blog" list shows (it used to list every post, 19 links and growing). */
const RELATED_MAX = 6;

export function postHead(post: BlogPost, lang: PostLang) {
  const copy = post.copy[lang];
  const path = postPathFor(post.slug, lang);
  const blogPath = blogIndexPathFor(lang);
  const postPath = (l: PostLang) => postPathFor(post.slug, l);
  return seoHead({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path,
    lang,
    ogLocale: LANG_META[lang].ogLocale,
    type: "article",
    alternates: alternatesFor(post.slug),
    publishedTime: post.published,
    modifiedTime: post.modified,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${absoluteUrl(path)}#article`,
        headline: copy.h1,
        description: copy.metaDescription,
        inLanguage: lang,
        datePublished: post.published,
        dateModified: post.modified,
        mainEntityOfPage: absoluteUrl(path),
        image: { ...ogImageLd },
        author: { ...coachLd },
        publisher: { ...businessLd },
        about: { "@type": "Thing", name: post.about },
        isPartOf: { "@id": `${absoluteUrl(blogPath)}#blog` },
        citation: post.sources.map((source) => ({ "@type": "CreativeWork", name: source.cite, url: source.url })),
        workTranslation:
          lang === "en"
            ? POST_LANGS.filter((l) => l !== "en").map((l) => ({ "@type": "Article", "@id": `${absoluteUrl(postPath(l))}#article`, inLanguage: l }))
            : undefined,
        translationOfWork: lang === "en" ? undefined : { "@id": `${absoluteUrl(postPath("en"))}#article` },
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${absoluteUrl(path)}#list`,
        name: copy.listHeading,
        inLanguage: lang,
        numberOfItems: copy.items.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: copy.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: `${absoluteUrl(path)}#${itemAnchor(index)}`,
        })),
      },
      breadcrumbLd([
        { name: copy.labels.home, path: "/" },
        { name: copy.labels.blog, path: blogPath },
        { name: copy.labels.crumb, path },
      ]),
    ],
  });
}

export function BlogPostPage({ post, lang }: { post: BlogPost; lang: PostLang }) {
  const copy = post.copy[lang];
  const postPath = (l: PostLang) => postPathFor(post.slug, l);
  const blogPath = blogIndexPathFor(lang);
  const inCluster = (slug: string) => (HYBRID_CLUSTER as readonly string[]).includes(slug);
  const clusterPosts = post.slug && inCluster(post.slug)
    ? HYBRID_CLUSTER.map((slug) => BLOG_POSTS.find((other) => other.slug === slug)).filter((other): other is BlogPost => Boolean(other))
    : [];
  const seeAlso = (post.seeAlso ?? [])
    .map((slug) => BLOG_POSTS.find((other) => other.slug === slug))
    .filter((other): other is BlogPost => Boolean(other));
  /* "More from the blog": the newest RELATED_MAX other posts, skipping this cluster and anything already in "See also". The blog index links every post. */
  const related = BLOG_POSTS.filter(
    (other) =>
      other.slug !== post.slug &&
      !(clusterPosts.length > 0 && inCluster(other.slug)) &&
      !seeAlso.some((also) => also.slug === other.slug),
  ).slice(0, RELATED_MAX);
  const { dir } = LANG_META[lang];
  const sourceLabel = SOURCE_LABEL[lang];
  const newTab = NEW_TAB_LABEL[lang];
  const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(copy.labels.whatsappText)}`;

  const coachedSection = (
    <section aria-labelledby="coached" className="mark-cap mt-12 rounded-3xl bg-ink p-6 text-bone sm:p-8">
      <h2 id="coached" className="font-display text-3xl text-bone">
        {copy.coachedHeading}
      </h2>
      <div className="mt-4 space-y-3 leading-relaxed text-bone/90">
        {copy.coached.map((line) => (
          <p key={line}>{line}</p>
        ))}
        {lang === "en" && post.programLink ? (
          <p>
            <a
              href={post.programLink.href}
              className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-bone underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper-2"
            >
              {post.programLink.label}
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </p>
        ) : null}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-accent inline-flex min-h-12 items-center gap-1 rounded-full px-6 text-sm font-semibold">
          {copy.labels.whatsapp}
          <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          <span className="sr-only"> ({newTab})</span>
        </a>
        <a href="/#programs" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-bone underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper-2">
          {copy.labels.programs}
        </a>
      </div>
      <p className="mt-5 border-t border-bone/20 pt-4 text-xs leading-relaxed text-bone/70">
        <Bidi text={copy.credentialsNote} rtl={dir === "rtl"} />
      </p>
    </section>
  );

  return (
    <div className="min-h-screen bg-bone text-ink" lang={lang} dir={dir}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
      >
        {copy.labels.skip}
      </a>
      <SiteHeader homeLabel={copy.labels.home} blogLabel={copy.labels.blog} blogHref={blogPath} />

      <main id="main">
        <article className="shell band max-w-3xl text-start">
          <nav aria-label="Breadcrumb" className="text-sm text-mist">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href="/" className="underline-offset-4 hover:underline">
                  {copy.labels.home}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href={blogPath} className="underline-offset-4 hover:underline">
                  {copy.labels.blog}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {copy.labels.crumb}
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 text-xs font-semibold tracking-widest text-copper uppercase">{copy.labels.blog}</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
            {copy.h1}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-mist">{copy.dek}</p>
          <p className="mt-4 text-sm text-mist">
            <span>{copy.byline}</span> <time dateTime={post.modified}>{copy.updated}</time>
          </p>

          <nav aria-label={copy.labels.readIn} className="mt-5 rounded-2xl border border-line bg-ink-2 p-4 text-sm">
            <p className="font-medium">{copy.labels.readIn}</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {POST_LANGS.map((l) => (
                <li key={l}>
                  {l === lang ? (
                    <span aria-current="page" className="font-semibold" lang={l} dir={LANG_META[l].dir}>
                      {LANG_META[l].name}
                    </span>
                  ) : (
                    <a href={postPath(l)} hrefLang={l} lang={l} dir={LANG_META[l].dir} className="underline underline-offset-4">
                      {LANG_META[l].name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose-links mt-8 space-y-4 text-base leading-relaxed sm:text-lg">
            {copy.intro.map((line) => (
              <p key={line}>
                <Cited rtl={dir === "rtl"} text={line} label={sourceLabel} />
              </p>
            ))}
          </div>

          {seeAlso.length > 0 ? (
            <p className="mt-6 text-base leading-relaxed">
              <span className="font-semibold">{SEE_ALSO_LABEL[lang]}:</span>{" "}
              {seeAlso.map((other, index) => (
                <Fragment key={other.slug}>
                  {index > 0 ? " · " : null}
                  <a href={postPathFor(other.slug, lang)} className="text-copper underline underline-offset-4">
                    {other.copy[lang].h1}
                  </a>
                </Fragment>
              ))}
            </p>
          ) : null}

          <h2 className="mt-12 font-display text-3xl">{copy.listHeading}</h2>
          <nav aria-label={`${JUMP_LABEL[lang]}: ${copy.listHeading}`} className="mt-5">
            <ol className="flex flex-wrap gap-2 text-sm">
              {copy.items.map((item, index) => (
                <li key={item.name}>
                  <a href={`#${itemAnchor(index)}`} className="jump-chip inline-flex min-h-11 items-center gap-2 rounded-full px-4">
                    <span className="font-semibold text-copper tabular-nums" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <ol className="mt-6 space-y-6">
            {copy.items.map((item, index) => (
              <li key={item.name} id={itemAnchor(index)} className="card-lift scroll-mt-24 rounded-2xl border border-line bg-ink-2 p-5 sm:p-6">
                <h3 className="flex items-baseline gap-3 font-display text-2xl">
                  <span className="mark-badge grid size-9 shrink-0 place-items-center bg-ink text-base text-copper-2 tabular-nums" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>{item.name}</span>
                </h3>
                <dl className="mt-4 space-y-3 text-base leading-relaxed">
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-copper uppercase">{copy.labels.why}</dt>
                    <dd className="mt-1">
                      <Cited rtl={dir === "rtl"} text={item.why} label={sourceLabel} />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-copper uppercase">{copy.labels.how}</dt>
                    <dd className="mt-1">
                      <Cited rtl={dir === "rtl"} text={item.how} label={sourceLabel} />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-copper uppercase">{copy.labels.dose}</dt>
                    <dd className="mt-1">
                      <Cited rtl={dir === "rtl"} text={item.dose} label={sourceLabel} />
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>

          {post.ctaMid ? coachedSection : null}

          <h2 className="mt-12 font-display text-3xl">{copy.enoughHeading}</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed sm:text-lg">
            {copy.enough.map((line) => (
              <p key={line}>
                <Cited rtl={dir === "rtl"} text={line} label={sourceLabel} />
              </p>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl">{copy.sampleHeading}</h2>
          <div className="mt-4 rounded-2xl border-2 border-dashed border-copper/60 p-5">
            <p className="text-sm font-semibold text-copper">{copy.sampleLabel}</p>
            <ul className="list-mark mt-3 list-disc space-y-2 ps-5 text-base leading-relaxed">
              {copy.sample.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          {post.ctaMid ? null : coachedSection}

          <h2 className="mt-12 font-display text-2xl">{copy.safetyHeading}</h2>
          <p className="note-safety mt-3 text-base leading-relaxed text-mist">
            <Cited rtl={dir === "rtl"} text={copy.safety} label={sourceLabel} />
          </p>

          <h2 className="mt-12 font-display text-2xl">{copy.labels.sources}</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed" lang="en" dir="ltr">
            {post.sources.map((source, index) => (
              <li key={source.url} id={`source-${index + 1}`} className="source-item scroll-mt-24">
                <span className="tabular-nums">[{index + 1}]</span> {source.cite}{" "}
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="break-all text-copper underline underline-offset-2">
                  {source.url}
                  <span className="sr-only" lang={lang} dir={dir}>
                    {" "}
                    ({newTab})
                  </span>
                </a>
              </li>
            ))}
          </ol>

          {clusterPosts.length > 0 ? (
            <nav aria-labelledby="cluster" className="mt-12 rounded-2xl border border-line bg-ink-2 p-5">
              <h2 id="cluster" className="font-display text-2xl">
                {CLUSTER_HEADING[lang]}
              </h2>
              <ul className="mt-4 space-y-3">
                {clusterPosts.map((other) => (
                  <li key={other.slug}>
                    {other.slug === post.slug ? (
                      <span aria-current="page" className="font-semibold">
                        {other.copy[lang].h1} <span className="text-sm font-normal text-mist">({CLUSTER_HERE[lang]})</span>
                      </span>
                    ) : (
                      <a href={postPathFor(other.slug, lang)} className="group inline-flex items-start gap-2 text-base font-semibold underline decoration-logo decoration-2 underline-offset-4 hover:text-copper">
                        <span>
                          {other.copy[lang].h1}
                          {other.slug === HYBRID_HUB ? <span className="text-sm font-normal text-mist"> ({CLUSTER_HUB_TAG[lang]})</span> : null}
                        </span>
                        <ArrowUpRight className="mt-1 size-4 shrink-0 rtl:-scale-x-100" aria-hidden="true" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          {related.length > 0 ? (
            <nav aria-labelledby="related" className="mt-12 border-t border-line pt-8">
              <h2 id="related" className="font-display text-2xl">
                {RELATED_LABEL[lang]}
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((other) => (
                  <li key={other.slug}>
                    <a href={postPathFor(other.slug, lang)} className="group inline-flex items-start gap-2 text-lg font-semibold underline decoration-logo decoration-2 underline-offset-4 hover:text-copper">
                      <span>{other.copy[lang].h1}</span>
                      <ArrowUpRight className="mt-1 size-4 shrink-0 rtl:-scale-x-100" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <a href={blogPath} className="btn-light inline-flex min-h-11 items-center gap-1 rounded-full px-5 text-sm font-semibold">
                  {copy.labels.blog}
                  <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
                </a>
              </p>
            </nav>
          ) : null}
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
