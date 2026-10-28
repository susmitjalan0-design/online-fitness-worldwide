import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { oneDumbbellPost } from "@/content/blog/one-dumbbell";

export const Route = createFileRoute("/blog/best-home-workouts-with-one-dumbbell")({
  head: () => postHead(oneDumbbellPost, "en"),
  component: () => <BlogPostPage post={oneDumbbellPost} lang="en" />,
});
