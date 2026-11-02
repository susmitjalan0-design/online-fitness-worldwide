import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { hyroxVsDekaVsAthxPost } from "@/content/blog/hyrox-vs-deka-vs-athx";

export const Route = createFileRoute("/blog/hyrox-vs-deka-vs-athx")({
  head: () => postHead(hyroxVsDekaVsAthxPost, "en"),
  component: () => <BlogPostPage post={hyroxVsDekaVsAthxPost} lang="en" />,
});
