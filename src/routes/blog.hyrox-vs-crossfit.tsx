import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { hyroxVsCrossfitPost } from "@/content/blog/hyrox-vs-crossfit";

export const Route = createFileRoute("/blog/hyrox-vs-crossfit")({
  head: () => postHead(hyroxVsCrossfitPost, "en"),
  component: () => <BlogPostPage post={hyroxVsCrossfitPost} lang="en" />,
});
