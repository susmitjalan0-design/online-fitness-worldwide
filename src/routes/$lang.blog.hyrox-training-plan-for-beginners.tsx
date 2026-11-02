import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { hyroxPlanPost } from "@/content/blog/hyrox-training-plan";
import { isPostLang, type PostLang } from "@/content/blog/shared";

/** Localised versions: /ar, /hi, /es, /zh, /ja, /gu. English lives at /blog/... */
export const Route = createFileRoute("/$lang/blog/hyrox-training-plan-for-beginners")({
  beforeLoad: ({ params }) => {
    if (!isPostLang(params.lang) || params.lang === "en") throw notFound();
  },
  head: ({ params }) => (isPostLang(params.lang) ? postHead(hyroxPlanPost, params.lang) : {}),
  component: LocalisedPost,
});

function LocalisedPost() {
  const { lang } = Route.useParams();
  return <BlogPostPage post={hyroxPlanPost} lang={lang as PostLang} />;
}
