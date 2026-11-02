import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { hyroxPlanPost } from "@/content/blog/hyrox-training-plan";

export const Route = createFileRoute("/blog/hyrox-training-plan-for-beginners")({
  head: () => postHead(hyroxPlanPost, "en"),
  component: () => <BlogPostPage post={hyroxPlanPost} lang="en" />,
});
