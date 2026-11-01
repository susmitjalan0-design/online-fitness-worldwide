import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { coreBackPost } from "@/content/blog/core-lower-back";

export const Route = createFileRoute("/blog/best-core-exercises-for-lower-back-health")({
  head: () => postHead(coreBackPost, "en"),
  component: () => <BlogPostPage post={coreBackPost} lang="en" />,
});
