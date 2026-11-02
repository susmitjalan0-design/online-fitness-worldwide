import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { dekaGuidePost } from "@/content/blog/deka-fit-mile-strong-guide";

export const Route = createFileRoute("/blog/deka-fit-mile-strong-guide")({
  head: () => postHead(dekaGuidePost, "en"),
  component: () => <BlogPostPage post={dekaGuidePost} lang="en" />,
});
