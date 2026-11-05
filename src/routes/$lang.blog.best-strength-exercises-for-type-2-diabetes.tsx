import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { diabetesPost } from "@/content/blog/type-2-diabetes";
import { isPostLang, type PostLang } from "@/content/blog/shared";

/** Localised versions: /ar, /hi, /es, /zh, /ja, /gu. English lives at /blog/... */
export const Route = createFileRoute("/$lang/blog/best-strength-exercises-for-type-2-diabetes")({
  beforeLoad: ({ params }) => {
    if (!isPostLang(params.lang) || params.lang === "en") throw notFound();
  },
  head: ({ params }) => (isPostLang(params.lang) ? postHead(diabetesPost, params.lang) : {}),
  component: LocalisedPost,
});

function LocalisedPost() {
  const { lang } = Route.useParams();
  return <BlogPostPage post={diabetesPost} lang={lang as PostLang} />;
}
