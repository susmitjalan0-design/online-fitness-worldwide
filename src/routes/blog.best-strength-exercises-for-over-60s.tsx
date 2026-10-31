import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { over60StrengthPost } from "@/content/blog/over-60-strength";

export const Route = createFileRoute("/blog/best-strength-exercises-for-over-60s")({
  head: () => postHead(over60StrengthPost, "en"),
  component: () => <BlogPostPage post={over60StrengthPost} lang="en" />,
});
