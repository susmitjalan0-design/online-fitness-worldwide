import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { whatIsHyroxPost } from "@/content/blog/what-is-hyrox";

export const Route = createFileRoute("/blog/what-is-hyrox")({
  head: () => postHead(whatIsHyroxPost, "en"),
  component: () => <BlogPostPage post={whatIsHyroxPost} lang="en" />,
});
