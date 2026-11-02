import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { gripStrengthPost } from "@/content/blog/grip-strength";
import { isPostLang, type PostLang } from "@/content/blog/shared";

/** Localised versions: /ar, /hi, /es, /zh, /ja, /gu. English lives at /blog/... */
export const Route = createFileRoute("/$lang/blog/best-exercises-for-grip-strength")({
  beforeLoad: ({ params }) => {
    if (!isPostLang(params.lang) || params.lang === "en") throw notFound();
  },
  head: ({ params }) => (isPostLang(params.lang) ? postHead(gripStrengthPost, params.lang) : {}),
  component: LocalisedPost,
});

function LocalisedPost() {
  const { lang } = Route.useParams();
  return <BlogPostPage post={gripStrengthPost} lang={lang as PostLang} />;
}
