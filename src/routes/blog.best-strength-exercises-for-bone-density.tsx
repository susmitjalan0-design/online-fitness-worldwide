import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { boneDensityPost } from "@/content/blog/bone-density";

export const Route = createFileRoute("/blog/best-strength-exercises-for-bone-density")({
  head: () => postHead(boneDensityPost, "en"),
  component: () => <BlogPostPage post={boneDensityPost} lang="en" />,
});
