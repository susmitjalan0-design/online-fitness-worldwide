// Exports the blog posts from the TypeScript sources (grokbot/seo-theme-blog,
// src/content/blog/*.ts) to plain JSON in ./data, so build.mjs needs no TypeScript.
//
//   npm install
//   node export-posts.mjs --src /path/to/repo/src/content/blog
//
// Only needed when the post copy changes. data/ is committed, so build.mjs runs from this folder alone.
import { build } from "esbuild";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const argIndex = process.argv.indexOf("--src");
if (argIndex < 0 || !process.argv[argIndex + 1]) {
  console.error("Usage: node export-posts.mjs --src <path to src/content/blog>");
  process.exit(1);
}
const src = resolve(process.argv[argIndex + 1]);
const tmp = join(here, ".export-tmp.mjs");

await build({
  stdin: {
    contents: `export { BLOG_POSTS } from "./index.ts"; export * as SHARED from "./shared.ts";`,
    resolveDir: src,
    sourcefile: "entry.ts",
  },
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: tmp,
  logLevel: "error",
});
const { BLOG_POSTS, SHARED } = await import(pathToFileURL(tmp).href);
rmSync(tmp);

const out = join(here, "data");
rmSync(join(out, "posts"), { recursive: true, force: true });
mkdirSync(join(out, "posts"), { recursive: true });
// The six posts already in the cPanel zip are left alone: they are not re-rendered.
const existing = JSON.parse(readFileSync(join(here, "existing-posts.json"), "utf8"));
for (const post of BLOG_POSTS) {
  if (existing.includes(post.slug)) continue;
  writeFileSync(join(out, "posts", `${post.slug}.json`), JSON.stringify(post, null, 1) + "\n");
}
// Shared labels (language names, "Source", "Jump to", hybrid-race cluster, ...). Functions are dropped.
const shared = {};
for (const [key, value] of Object.entries(SHARED)) if (typeof value !== "function") shared[key] = value;
writeFileSync(join(out, "shared.json"), JSON.stringify(shared, null, 1) + "\n");
// Order of every post in the source, newest first (the blog index and "More from the blog" follow it).
writeFileSync(join(out, "order.json"), JSON.stringify(BLOG_POSTS.map((p) => p.slug), null, 1) + "\n");
console.log(`Exported ${BLOG_POSTS.length - existing.length} posts (skipped ${existing.length} already in the zip) to ${out}`);
