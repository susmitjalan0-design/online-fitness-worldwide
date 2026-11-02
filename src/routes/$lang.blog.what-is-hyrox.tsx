import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { whatIsHyroxPost } from "@/content/blog/what-is-hyrox";
import { isPostLang, type PostLang } from "@/content/blog/shared";

/** Localised versions: /ar, /hi, /es, /zh, /ja, /gu. English lives at /blog/... */
export const Route = createFileRoute("/$lang/blog/what-is-hyrox")({
  beforeLoad: ({ params }) => {
    if (!isPostLang(params.lang) || params.lang === "en") throw notFound();
  },
  head: ({ params }) => (isPostLang(params.lang) ? postHead(whatIsHyroxPost, params.lang) : {}),
  component: LocalisedPost,
});

function LocalisedPost() {
  const { lang } = Route.useParams();
  return <BlogPostPage post={whatIsHyroxPost} lang={lang as PostLang} />;
}
