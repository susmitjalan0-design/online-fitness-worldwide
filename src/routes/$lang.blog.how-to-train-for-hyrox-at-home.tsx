import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { hyroxHomePost } from "@/content/blog/how-to-train-for-hyrox-at-home";
import { isPostLang, type PostLang } from "@/content/blog/shared";

/** Localised versions: /ar, /hi, /es, /zh, /ja, /gu. English lives at /blog/... */
export const Route = createFileRoute("/$lang/blog/how-to-train-for-hyrox-at-home")({
  beforeLoad: ({ params }) => {
    if (!isPostLang(params.lang) || params.lang === "en") throw notFound();
  },
  head: ({ params }) => (isPostLang(params.lang) ? postHead(hyroxHomePost, params.lang) : {}),
  component: LocalisedPost,
});

function LocalisedPost() {
  const { lang } = Route.useParams();
  return <BlogPostPage post={hyroxHomePost} lang={lang as PostLang} />;
}
