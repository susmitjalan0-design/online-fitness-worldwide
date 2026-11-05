import sys,re
slug,var,mod=sys.argv[1:4]
R='/workspace/ofw/'
# routes
en=f'''import {{ createFileRoute }} from "@tanstack/react-router";
import {{ BlogPostPage, postHead }} from "@/components/blog-post";
import {{ {var} }} from "@/content/blog/{mod}";

export const Route = createFileRoute("/blog/{slug}")({{
  head: () => postHead({var}, "en"),
  component: () => <BlogPostPage post={{{var}}} lang="en" />,
}});
'''
loc=f'''import {{ createFileRoute, notFound }} from "@tanstack/react-router";
import {{ BlogPostPage, postHead }} from "@/components/blog-post";
import {{ {var} }} from "@/content/blog/{mod}";
import {{ isPostLang, type PostLang }} from "@/content/blog/shared";

/** Localised versions: /ar, /hi, /es, /zh, /ja, /gu. English lives at /blog/... */
export const Route = createFileRoute("/$lang/blog/{slug}")({{
  beforeLoad: ({{ params }}) => {{
    if (!isPostLang(params.lang) || params.lang === "en") throw notFound();
  }},
  head: ({{ params }}) => (isPostLang(params.lang) ? postHead({var}, params.lang) : {{}}),
  component: LocalisedPost,
}});

function LocalisedPost() {{
  const {{ lang }} = Route.useParams();
  return <BlogPostPage post={{{var}}} lang={{lang as PostLang}} />;
}}
'''
open(R+f'src/routes/blog.{slug}.tsx','w').write(en)
open(R+f'src/routes/$lang.blog.{slug}.tsx','w').write(loc)
# index
p=R+'src/content/blog/index.ts'; s=open(p).read()
if var not in s:
    s=s.replace('import type { BlogPost }',f'import {{ {var} }} from "./{mod}";\nimport type {{ BlogPost }}',1)
    s=s.replace('export const BLOG_POSTS: BlogPost[] = [\n','export const BLOG_POSTS: BlogPost[] = [\n  '+var+',\n',1)
    s=s.replace('export { ','export { '+var+', ',1)
    open(p,'w').write(s)
# sitemap
p=R+'public/sitemap.xml'; s=open(p).read()
B='https://onlinefitness.com'
langs=['en','ar','hi','es','zh','ja','gu']
def u(l): return f'{B}/blog/{slug}' if l=='en' else f'{B}/{l}/blog/{slug}'
alts=''.join(f'<xhtml:link rel="alternate" hreflang="{l}" href="{u(l)}"/>' for l in langs)+f'<xhtml:link rel="alternate" hreflang="x-default" href="{u("en")}"/>'
if f'/blog/{slug}<' not in s:
    block=''.join(f'  <url><loc>{u(l)}</loc><lastmod>2026-11-05</lastmod>{alts}</url>\n' for l in langs)
    k=s.index(f'  <url><loc>{B}/blog/best-leg-exercises-for-knee-friendly-strength</loc>')
    s=s[:k]+block+s[k:]
    open(p,'w').write(s)
print('ok')
