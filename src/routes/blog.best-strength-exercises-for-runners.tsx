import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { runnersStrengthPost } from "@/content/blog/runners-strength";

export const Route = createFileRoute("/blog/best-strength-exercises-for-runners")({
  head: () => postHead(runnersStrengthPost, "en"),
  component: () => <BlogPostPage post={runnersStrengthPost} lang="en" />,
});
