import re,json,urllib.request,html,urllib.error
base='http://localhost:4311'; B='https://onlinefitness.com'
sm=open('/workspace/ofw/public/sitemap.xml').read()
locs=re.findall(r'<loc>([^<]+)</loc>',sm)
print('sitemap urls',len(locs),'unique',len(set(locs)))
bad=[]
for loc in locs:
    path=loc.replace(B,'') or '/'
    try: s=urllib.request.urlopen(base+path).read().decode()
    except Exception as e: bad.append((path,str(e))); continue
    t=len(re.findall(r'<title>',s)); h1=len(re.findall(r'<h1[ >]',s))
    can=re.findall(r'rel="canonical" href="([^"]+)"',s)
    desc=re.findall(r'<meta name="description" content="([^"]*)"',s)
    hl=len(re.findall(r'<link[^>]*hreflang=',s,re.I))
    body=re.sub(r'<script.*?</script>','',s,flags=re.S)
    raw=re.findall(r'\{\d+\}',body)
    ld=re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>',s,re.S)
    for x in ld:
        try: json.loads(html.unescape(x))
        except Exception: bad.append((path,'ld parse'))
    if t!=1 or h1!=1 or len(can)!=1 or can[0]!=loc or len(desc)!=1 or raw: bad.append((path,t,h1,can,len(desc),raw[:2]))
    if '/blog/' in path and hl!=8: bad.append((path,'hreflang',hl))
    if path.startswith('/ar') and 'dir="rtl"' not in s: bad.append((path,'rtl'))
    if '/blog/' in path:
        items=len(set(re.findall(r'id="item-(\d)"',s)))
        if items!=7: bad.append((path,'items',items))
print('bad',bad)
for p in ['/en/blog/best-strength-exercises-for-type-2-diabetes','/xx/blog/best-strength-exercises-for-type-2-diabetes']:
    try: urllib.request.urlopen(base+p); print(p,'200?!')
    except urllib.error.HTTPError as e: print(p,e.code)
