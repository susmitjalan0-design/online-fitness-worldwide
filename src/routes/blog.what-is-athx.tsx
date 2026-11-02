import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { whatIsAthxPost } from "@/content/blog/what-is-athx";

export const Route = createFileRoute("/blog/what-is-athx")({
  head: () => postHead(whatIsAthxPost, "en"),
  component: () => <BlogPostPage post={whatIsAthxPost} lang="en" />,
});
