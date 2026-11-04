import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { kneeFriendlyPost } from "@/content/blog/knee-friendly-legs";

export const Route = createFileRoute("/blog/best-leg-exercises-for-knee-friendly-strength")({
  head: () => postHead(kneeFriendlyPost, "en"),
  component: () => <BlogPostPage post={kneeFriendlyPost} lang="en" />,
});
