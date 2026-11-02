/**
 * Shared blog types and helpers. Each post lives in its own file and exports a
 * BlogPost. Citations in copy are written as {n} and point at sources[n - 1].
 */

export const POST_LANGS = ["en", "ar", "hi", "es", "zh", "ja", "gu"] as const;
export type PostLang = (typeof POST_LANGS)[number];

export const LANG_META: Record<PostLang, { name: string; dir: "ltr" | "rtl"; ogLocale: string }> = {
  en: { name: "English", dir: "ltr", ogLocale: "en_IN" },
  ar: { name: "العربية", dir: "rtl", ogLocale: "ar_AE" },
  hi: { name: "हिन्दी", dir: "ltr", ogLocale: "hi_IN" },
  es: { name: "Español", dir: "ltr", ogLocale: "es_ES" },
  zh: { name: "中文", dir: "ltr", ogLocale: "zh_CN" },
  ja: { name: "日本語", dir: "ltr", ogLocale: "ja_JP" },
  gu: { name: "ગુજરાતી", dir: "ltr", ogLocale: "gu_IN" },
};

/** "More from the blog", per language. Used for the related-posts block. */
export const RELATED_LABEL: Record<PostLang, string> = {
  en: "More from the blog",
  ar: "المزيد من المدونة",
  hi: "ब्लॉग से और",
  es: "Más del blog",
  zh: "更多博客文章",
  ja: "ブログの他の記事",
  gu: "બ્લોગમાંથી વધુ",
};

/** Accessible name for citation links ("Source 3"), per language. */
export const SOURCE_LABEL: Record<PostLang, string> = {
  en: "Source",
  ar: "المصدر",
  hi: "स्रोत",
  es: "Fuente",
  zh: "来源",
  ja: "出典",
  gu: "સ્રોત",
};

/** Screen-reader note for links that open in a new tab (sources, WhatsApp), per language. */
export const NEW_TAB_LABEL: Record<PostLang, string> = {
  en: "opens in a new tab",
  ar: "يفتح في علامة تبويب جديدة",
  hi: "नए टैब में खुलता है",
  es: "se abre en una pestaña nueva",
  zh: "在新标签页中打开",
  ja: "新しいタブで開きます",
  gu: "નવા ટૅબમાં ખૂલે છે",
};

/** Label for the "jump to an item" links above each list, per language. */
export const JUMP_LABEL: Record<PostLang, string> = {
  en: "Jump to",
  ar: "انتقل إلى",
  hi: "सीधे जाएँ",
  es: "Ir a",
  zh: "跳转到",
  ja: "移動",
  gu: "સીધા જાઓ",
};

/** Label for the "See also" line under the intro (links to closely related posts), per language. */
export const SEE_ALSO_LABEL: Record<PostLang, string> = {
  en: "See also",
  ar: "انظر أيضاً",
  hi: "यह भी देखें",
  es: "Véase también",
  zh: "另见",
  ja: "関連記事",
  gu: "આ પણ જુઓ",
};

export function isPostLang(value: string): value is PostLang {
  return (POST_LANGS as readonly string[]).includes(value);
}

export function postPathFor(slug: string, lang: PostLang): string {
  return lang === "en" ? `/blog/${slug}` : `/${lang}/blog/${slug}`;
}

/** Blog index per language: /blog for English, /{lang}/blog for the rest. */
export function blogIndexPathFor(lang: PostLang): string {
  return lang === "en" ? "/blog" : `/${lang}/blog`;
}

/** hreflang set shared by every language version (reciprocal, plus x-default). */
export function alternatesFor(slug: string) {
  return [
    ...POST_LANGS.map((lang) => ({ hrefLang: lang, path: postPathFor(slug, lang) })),
    { hrefLang: "x-default", path: postPathFor(slug, "en") },
  ];
}

/** hreflang set for the blog index pages (reciprocal, plus x-default). */
export function blogIndexAlternates() {
  return [
    ...POST_LANGS.map((lang) => ({ hrefLang: lang, path: blogIndexPathFor(lang) })),
    { hrefLang: "x-default", path: blogIndexPathFor("en") },
  ];
}

export type BlogIndexCopy = {
  metaTitle: string;
  metaDescription: string;
  home: string;
  blog: string;
  h1: string;
  dek: string;
  articles: string;
  alsoIn: string;
  read: string;
  readIn: string;
  skip: string;
};

/** Copy for the blog index in each language. Facts only from the posts themselves. */
export const BLOG_INDEX_COPY: Record<PostLang, BlogIndexCopy> = {
  en: {
    metaTitle: "Fitness Blog: Notes from an Online Personal Trainer | Jalan PT",
    metaDescription:
      "Short, sourced training notes from an online personal trainer in Pune: the best exercises for strength, grip, core and getting back into it, with sample weeks.",
    home: "Home",
    blog: "Blog",
    h1: "Notes from the session.",
    dek: "Short lines. Real sources. What we would tell you on the call.",
    articles: "Articles",
    alsoIn: "Also in:",
    read: "Read the list",
    readIn: "This blog in",
    skip: "Skip to content",
  },
  ar: {
    metaTitle: "مدونة اللياقة: ملاحظات مدرب شخصي عبر الإنترنت | Jalan PT",
    metaDescription:
      "ملاحظات تدريب قصيرة وموثّقة من مدرب شخصي عبر الإنترنت في بونه: أفضل تمارين القوة والقبضة والجذع والعودة إلى الرياضة، مع نماذج لأسابيع تدريب.",
    home: "الرئيسية",
    blog: "المدونة",
    h1: "ملاحظات من الجلسة.",
    dek: "جُمل قصيرة. مصادر حقيقية. ما نقوله لك في المكالمة.",
    articles: "المقالات",
    alsoIn: "متوفر أيضاً بـ:",
    read: "اقرأ القائمة",
    readIn: "المدونة بلغات أخرى",
    skip: "انتقل إلى المحتوى",
  },
  hi: {
    metaTitle: "फिटनेस ब्लॉग: ऑनलाइन पर्सनल ट्रेनर के नोट्स | Jalan PT",
    metaDescription:
      "पुणे के ऑनलाइन पर्सनल ट्रेनर के छोटे, स्रोत-आधारित ट्रेनिंग नोट्स: स्ट्रेंथ, ग्रिप, कोर और ब्रेक के बाद वापसी के लिए बेस्ट एक्सरसाइज़, सैंपल हफ़्तों के साथ।",
    home: "होम",
    blog: "ब्लॉग",
    h1: "सेशन से नोट्स।",
    dek: "छोटी लाइनें। असली स्रोत। जो हम कॉल पर आपसे कहेंगे।",
    articles: "लेख",
    alsoIn: "इन भाषाओं में भी:",
    read: "लिस्ट पढ़ें",
    readIn: "यह ब्लॉग इन भाषाओं में",
    skip: "सामग्री पर जाएँ",
  },
  es: {
    metaTitle: "Blog de fitness: notas de un entrenador personal online | Jalan PT",
    metaDescription:
      "Notas de entrenamiento breves y con fuentes de un entrenador personal online en Pune: los mejores ejercicios de fuerza, agarre y core, con semanas de ejemplo.",
    home: "Inicio",
    blog: "Blog",
    h1: "Notas de la sesión.",
    dek: "Frases cortas. Fuentes reales. Lo que te diríamos en la llamada.",
    articles: "Artículos",
    alsoIn: "También en:",
    read: "Leer la lista",
    readIn: "Este blog en",
    skip: "Saltar al contenido",
  },
  zh: {
    metaTitle: "健身博客：在线私人教练的训练笔记 | Jalan PT",
    metaDescription:
      "来自浦那在线私人教练的简短、有出处的训练笔记：力量、握力、核心训练以及重新开始运动的最佳动作，附一周训练示例。",
    home: "首页",
    blog: "博客",
    h1: "来自训练课的笔记。",
    dek: "短句。真实来源。就是我们在通话中会告诉你的。",
    articles: "文章",
    alsoIn: "其他语言：",
    read: "阅读清单",
    readIn: "本博客的其他语言",
    skip: "跳到正文",
  },
  ja: {
    metaTitle: "フィットネスブログ：オンラインパーソナルトレーナーのノート | Jalan PT",
    metaDescription:
      "プネーのオンラインパーソナルトレーナーによる、短く出典付きのトレーニングノート。筋力、握力、体幹、運動の再開のためのベストエクササイズと1週間の例。",
    home: "ホーム",
    blog: "ブログ",
    h1: "セッションからのノート。",
    dek: "短い言葉。本物の出典。通話で伝えることをそのまま。",
    articles: "記事",
    alsoIn: "他の言語：",
    read: "リストを読む",
    readIn: "このブログの他の言語",
    skip: "本文へスキップ",
  },
  gu: {
    metaTitle: "ફિટનેસ બ્લોગ: ઑનલાઇન પર્સનલ ટ્રેનરની નોંધ | Jalan PT",
    metaDescription:
      "પુણેના ઑનલાઇન પર્સનલ ટ્રેનરની ટૂંકી, સ્રોતવાળી ટ્રેનિંગ નોંધ: સ્ટ્રેન્થ, ગ્રિપ, કોર અને બ્રેક પછી પાછા આવવા માટે બેસ્ટ કસરતો, સેમ્પલ અઠવાડિયાં સાથે.",
    home: "હોમ",
    blog: "બ્લોગ",
    h1: "સેશનમાંથી નોંધ.",
    dek: "ટૂંકી લીટીઓ. સાચા સ્રોતો. જે અમે કૉલ પર તમને કહીએ.",
    articles: "લેખો",
    alsoIn: "આ ભાષાઓમાં પણ:",
    read: "યાદી વાંચો",
    readIn: "આ બ્લોગ આ ભાષાઓમાં",
    skip: "સામગ્રી પર જાઓ",
  },
};

export type Source = { readonly cite: string; readonly url: string };

export type PostItem = { name: string; why: string; how: string; dose: string };

export type PostCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  dek: string;
  updated: string;
  byline: string;
  credentialsNote: string;
  labels: {
    home: string;
    blog: string;
    why: string;
    how: string;
    dose: string;
    sources: string;
    readIn: string;
    programs: string;
    whatsapp: string;
    whatsappText: string;
    skip: string;
    crumb: string;
  };
  intro: string[];
  listHeading: string;
  items: PostItem[];
  enoughHeading: string;
  enough: string[];
  sampleHeading: string;
  sampleLabel: string;
  sample: string[];
  coachedHeading: string;
  coached: string[];
  safetyHeading: string;
  safety: string;
};

export type BlogPost = {
  slug: string;
  published: string;
  modified: string;
  /** Short English topic for JSON-LD "about". */
  about: string;
  sources: readonly Source[];
  copy: Record<PostLang, PostCopy>;
  /** Optional link from the English "Want it coached live?" card to a program landing page (English only). */
  programLink?: { href: string; label: string };
  /** Put the "Want it coached live?" call to action straight after the list (mid-article) instead of after the sample. */
  ctaMid?: boolean;
  /** Slugs of closely related posts, shown as a "See also" line under the intro in each language. */
  seeAlso?: readonly string[];
};
