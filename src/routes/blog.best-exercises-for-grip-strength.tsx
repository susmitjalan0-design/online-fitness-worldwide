import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { gripStrengthPost } from "@/content/blog/grip-strength";

export const Route = createFileRoute("/blog/best-exercises-for-grip-strength")({
  head: () => postHead(gripStrengthPost, "en"),
  component: () => <BlogPostPage post={gripStrengthPost} lang="en" />,
});
