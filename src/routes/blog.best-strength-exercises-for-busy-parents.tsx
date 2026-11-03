import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { busyParentsPost } from "@/content/blog/busy-parents";

export const Route = createFileRoute("/blog/best-strength-exercises-for-busy-parents")({
  head: () => postHead(busyParentsPost, "en"),
  component: () => <BlogPostPage post={busyParentsPost} lang="en" />,
});
