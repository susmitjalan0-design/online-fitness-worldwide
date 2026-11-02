import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { hyroxHomePost } from "@/content/blog/how-to-train-for-hyrox-at-home";

export const Route = createFileRoute("/blog/how-to-train-for-hyrox-at-home")({
  head: () => postHead(hyroxHomePost, "en"),
  component: () => <BlogPostPage post={hyroxHomePost} lang="en" />,
});
