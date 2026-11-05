import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { diabetesPost } from "@/content/blog/type-2-diabetes";

export const Route = createFileRoute("/blog/best-strength-exercises-for-type-2-diabetes")({
  head: () => postHead(diabetesPost, "en"),
  component: () => <BlogPostPage post={diabetesPost} lang="en" />,
});
