import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { travelBodyweightPost } from "@/content/blog/travel-bodyweight";

export const Route = createFileRoute("/blog/best-bodyweight-exercises-for-travel")({
  head: () => postHead(travelBodyweightPost, "en"),
  component: () => <BlogPostPage post={travelBodyweightPost} lang="en" />,
});
