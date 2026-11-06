/**
 * Copy shared by the hybrid-race posts (ATHX, HYROX, The Yoddha Race, Spartan DEKA).
 * Program facts only: Iron Hour 60 min 1:1; Lean Reset 20 sessions a month 1:1;
 * Return 45 min, 12 alternate-day sessions a month; Open Floor small group;
 * Consultation 30 min, not training. No prices. Booking holds a time; the fee is agreed directly.
 * Translations were drafted for this batch and need a native-speaker review.
 */

import type { PostCopy, PostLang } from "./shared";

export const RACE_PUBLISHED = "2026-11-02";
export const RACE_MODIFIED = "2026-11-02";

export const UPDATED: Record<PostLang, string> = {
  en: "Updated 2 November 2026",
  ar: "تم التحديث في 2 نوفمبر 2026",
  hi: "अपडेट: 2 नवंबर 2026",
  es: "Actualizado el 2 de noviembre de 2026",
  zh: "更新于2026年11月2日",
  ja: "2026年11月2日更新",
  gu: "અપડેટ: 2 નવેમ્બર 2026",
};

export const BYLINE: Record<PostLang, string> = {
  en: "By Susmit Jalan, coach at Online Fitness Worldwide, Pune.",
  ar: "بقلم سوسميت جالان، مدرب في Online Fitness Worldwide، بونه.",
  hi: "सुस्मित जालान, कोच, Online Fitness Worldwide, पुणे।",
  es: "Por Susmit Jalan, entrenador en Online Fitness Worldwide, Pune.",
  zh: "作者：Susmit Jalan，Online Fitness Worldwide教练，浦那。",
  ja: "執筆：Susmit Jalan（Online Fitness Worldwide コーチ、プネー）",
  gu: "સુસ્મિત જાલાન, કોચ, Online Fitness Worldwide, પુણે.",
};

export const CREDENTIALS: Record<PostLang, string> = {
  en: "ASCA Level 1 (strength and conditioning) and ACE (anatomy and biomechanics). These are credentials held by the coach. Neither body endorses this business or this article.",
  ar: "ASCA المستوى 1 (القوة والتكييف البدني) وACE (التشريح والميكانيكا الحيوية). هذه شهادات يحملها المدرب. لا تؤيد أيّ من الجهتين هذا العمل أو هذا المقال.",
  hi: "ASCA लेवल 1 (स्ट्रेंथ और कंडीशनिंग) और ACE (एनाटॉमी और बायोमैकेनिक्स)। ये कोच के क्रेडेंशियल हैं। इनमें से कोई भी संस्था इस व्यवसाय या इस लेख का समर्थन नहीं करती।",
  es: "ASCA Nivel 1 (fuerza y acondicionamiento) y ACE (anatomía y biomecánica). Son credenciales del entrenador. Ninguna de las dos entidades respalda este negocio ni este artículo.",
  zh: "ASCA一级（力量与体能）和ACE（解剖学与生物力学）。这些是教练持有的资质证书。两家机构均不为本业务或本文背书。",
  ja: "ASCA レベル1（ストレングス＆コンディショニング）と ACE（解剖学とバイオメカニクス）。これらはコーチが保有する資格です。いずれの団体も本事業および本記事を推奨するものではありません。",
  gu: "ASCA લેવલ 1 (સ્ટ્રેન્થ અને કન્ડિશનિંગ) અને ACE (એનાટોમી અને બાયોમિકેનિક્સ). આ કોચ પાસેના ક્રેડેન્શિયલ છે. આમાંથી કોઈ સંસ્થા આ વ્યવસાય કે આ લેખને સમર્થન આપતી નથી.",
};

export const SAMPLE_LABEL: Record<PostLang, string> = {
  en: "Sample only. Not a prescription. Adjust it to your body, your health and your history.",
  ar: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك وصحتك وتاريخك.",
  hi: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। अपने शरीर, अपनी सेहत और अपने इतिहास के हिसाब से बदलें।",
  es: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo, tu salud y tu historia.",
  zh: "仅为示例，不是处方。请根据你的身体、健康状况和经历调整。",
  ja: "あくまで例です。処方ではありません。体、健康状態、これまでの経過に合わせて調整してください。",
  gu: "માત્ર સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર, તમારા સ્વાસ્થ્ય અને તમારા ઇતિહાસ મુજબ બદલો.",
};

export const CTA_HEADING: Record<PostLang, string> = {
  en: "Train for it with Online Fitness Worldwide",
  ar: "تدرّب له مع Online Fitness Worldwide",
  hi: "Online Fitness Worldwide के साथ इसकी ट्रेनिंग करें",
  es: "Entrena para ello con Online Fitness Worldwide",
  zh: "与Online Fitness Worldwide一起备战",
  ja: "Online Fitness Worldwideと一緒に準備する",
  gu: "Online Fitness Worldwide સાથે તેની ટ્રેનિંગ કરો",
};

/** Iron Hour, in the coach's voice. Timeline from the site: set-up 0, warm-up 4, primary lift 14, accessories 28, cool-down 50. */
export const IRON_HOUR: Record<PostLang, string> = {
  en: "Iron Hour is 60 minutes, 1:1, live. Set-up at minute 0: camera placed so I can see your whole body. Warm-up from minute 4. The primary lift at 14. Accessories at 28. Cool-down at 50.",
  ar: "Iron Hour مدته 60 دقيقة، فردياً ومباشراً. التجهيز في الدقيقة 0: الكاميرا بحيث أرى جسمك كاملاً. الإحماء من الدقيقة 4. التمرين الأساسي في الدقيقة 14. التمارين المساعدة في 28. التهدئة في 50.",
  hi: "Iron Hour 60 मिनट का है, 1:1, लाइव। मिनट 0 पर सेट-अप: कैमरा ऐसे कि मुझे आपका पूरा शरीर दिखे। मिनट 4 से वार्म-अप। मिनट 14 पर मुख्य लिफ़्ट। 28 पर एक्सेसरीज़। 50 पर कूल-डाउन।",
  es: "Iron Hour son 60 minutos, 1:1, en directo. Preparación en el minuto 0: cámara colocada para que vea todo tu cuerpo. Calentamiento desde el minuto 4. El ejercicio principal en el 14. Accesorios en el 28. Vuelta a la calma en el 50.",
  zh: "Iron Hour是60分钟，一对一，实时进行。第0分钟准备：摆好摄像头，让我能看到你的全身。第4分钟开始热身。第14分钟进入主项。第28分钟做辅助练习。第50分钟放松。",
  ja: "Iron Hour は60分、1対1、ライブ。0分にセットアップ：全身が見えるようにカメラを配置。4分からウォームアップ。14分にメイン種目。28分に補助種目。50分にクールダウン。",
  gu: "Iron Hour 60 મિનિટનું છે, 1:1, લાઇવ. મિનિટ 0 પર સેટ-અપ: કૅમેરા એવી રીતે કે મને તમારું આખું શરીર દેખાય. મિનિટ 4 થી વૉર્મ-અપ. મિનિટ 14 પર મુખ્ય લિફ્ટ. 28 પર એક્સેસરીઝ. 50 પર કૂલ-ડાઉન.",
};

/** Lean Reset, Open Floor, Return, channels, Consultation, booking. */
export const CTA_TAIL: Record<PostLang, string[]> = {
  en: [
    "Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Coming back after a long break? Return is 45 minutes, 12 alternate-day sessions a month. We build the base first.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST. Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  ar: [
    "Lean Reset عشرون جلسة في الشهر، فردياً. Open Floor مجموعة صغيرة.",
    "عائد بعد انقطاع طويل؟ برنامج Return مدته 45 دقيقة، 12 جلسة في الشهر بالتناوب: يوم تمرين ويوم راحة. نبني الأساس أولاً.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند (IST). لم تقرّر بعد؟ ابدأ باستشارة مدتها 30 دقيقة. هي محادثة، لا تدريب. الحجز يثبّت موعداً فقط. والرسوم يُتفق عليها مباشرة.",
  ],
  hi: [
    "Lean Reset महीने में 20 सेशन, 1:1। Open Floor एक छोटा ग्रुप है।",
    "लंबे ब्रेक के बाद लौट रहे हैं? Return 45 मिनट का है, महीने में 12 सेशन, एक दिन छोड़कर। पहले बेस बनाते हैं।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर। अभी तय नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग सिर्फ़ समय रोकती है। फ़ीस सीधे तय होती है।",
  ],
  es: [
    "Lean Reset son 20 sesiones al mes, 1:1. Open Floor es un grupo pequeño.",
    "¿Vuelves tras un parón largo? Return son 45 minutos, 12 sesiones al mes en días alternos. Primero construimos la base.",
    "En directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST. ¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva solo guarda una hora. La tarifa se acuerda directamente.",
  ],
  zh: [
    "Lean Reset每月20次，一对一。Open Floor是小组课。",
    "长期中断后重新开始？Return每次45分钟，每月12次，隔天一次。我们先打基础。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。印地语或英语。按印度标准时间（IST）。还没决定？先从30分钟的咨询开始。那是一次交谈，不是训练。预约只是保留一个时间。费用直接商定。",
  ],
  ja: [
    "Lean Reset は月20回、1対1。Open Floor は少人数グループです。",
    "長いブランクからの再開？Return は45分、月12回、1日おき。まず土台を作ります。",
    "Google Meet、Zoom、FaceTime でライブ指導。プネーから。ヒンディー語か英語で。インド標準時（IST）で。まだ迷っている？30分の相談から始めましょう。会話であって、トレーニングではありません。予約は時間を押さえるだけ。料金は直接決めます。",
  ],
  gu: [
    "Lean Reset મહિને 20 સેશન, 1:1. Open Floor નાનું ગ્રુપ છે.",
    "લાંબા બ્રેક પછી પાછા આવો છો? Return 45 મિનિટનું છે, મહિને 12 સેશન, એકાંતરે દિવસે. પહેલાં બેઝ બનાવીએ છીએ.",
    "Google Meet, Zoom કે FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર. હજુ નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. એ વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ ફક્ત સમય રોકે છે. ફી સીધી નક્કી થાય છે.",
  ],
};

/** "Online Fitness Worldwide is not affiliated with X" for the CTA card. `org` is the organiser name(s). */
export function notAffiliated(lang: PostLang, org: string): string {
  switch (lang) {
    case "ar":
      return `Online Fitness Worldwide غير تابعة لـ ${org} ولا مرتبطة بها، ولا تحظى بتأييدها. هذا تدريب مستقل.`;
    case "hi":
      return `Online Fitness Worldwide का ${org} से कोई संबंध नहीं है, और ${org} ने इसका समर्थन नहीं किया है। यह स्वतंत्र ट्रेनिंग है।`;
    case "es":
      return `Online Fitness Worldwide no está afiliada a ${org} ni cuenta con su respaldo. Es un entrenamiento independiente.`;
    case "zh":
      return `Online Fitness Worldwide与${org}没有任何关联，也未获得其认可。这是独立的训练指导。`;
    case "ja":
      return `Online Fitness Worldwide は ${org} とは提携しておらず、公認も受けていません。独立したトレーニング指導です。`;
    case "gu":
      return `Online Fitness Worldwide નો ${org} સાથે કોઈ સંબંધ નથી, અને ${org} એ તેને સમર્થન આપ્યું નથી. આ સ્વતંત્ર ટ્રેનિંગ છે.`;
    default:
      return `Online Fitness Worldwide is not affiliated with ${org} and is not endorsed by them. This is independent coaching.`;
  }
}

/** ACSM screening sentence plus a hard-effort note. `n` is the citation number of Riebe et al. 2015. */
export function safetyText(lang: PostLang, n: number, extra: string): string {
  const base: Record<PostLang, string> = {
    en: `General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{${n}} Race-style work is hard: heavy lifts, jumps, burpees, sprints and carries. Build up to it over weeks. Don't test a maximum lift alone or without a spotter or a coach watching.`,
    ar: `معلومات عامة، وليست نصيحة طبية. يقول نموذج الفحص المسبق من ACSM: إن كنت غير نشيط، وبلا أعراض، وبلا مرض معروف في القلب أو الأيض أو الكلى، يمكنك أن تبدأ تمريناً خفيفاً إلى معتدل دون إذن طبي وأن تزيده تدريجياً. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{${n}} العمل بأسلوب السباق شاق: أثقال ثقيلة، وقفزات، وبيربي، وركض سريع، وحمل. ابنِ نفسك له على مدى أسابيع. لا تختبر أقصى ثقل وحدك أو دون مراقب أو مدرب يراقبك.`,
    hi: `सामान्य जानकारी, मेडिकल सलाह नहीं। ACSM का स्क्रीनिंग मॉडल कहता है: अगर आप एक्टिव नहीं हैं, कोई लक्षण नहीं है और दिल, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल क्लियरेंस के हल्की से मध्यम एक्सरसाइज़ शुरू करके धीरे-धीरे बढ़ा सकते हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल क्लियरेंस लें।{${n}} रेस-स्टाइल काम कठिन है: भारी लिफ़्ट, जंप, बर्पी, स्प्रिंट और कैरी। इसके लिए हफ़्तों में तैयारी करें। अकेले या बिना स्पॉटर या कोच के मैक्स लिफ़्ट टेस्ट न करें।`,
    es: `Información general, no consejo médico. El modelo de cribado del ACSM dice: si eres inactivo, no tienes síntomas ni enfermedad conocida del corazón, metabólica o renal, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo poco a poco. Si tienes una de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, consigue primero la autorización médica.{${n}} El trabajo de estilo carrera es duro: levantamientos pesados, saltos, burpees, sprints y acarreos. Llega a él en semanas. No pruebes un máximo a solas, ni sin ayudante o entrenador que te vea.`,
    zh: `一般信息，不是医疗建议。ACSM的运动前筛查模型指出：如果你平时不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以在没有医疗许可的情况下从低到中等强度开始，逐步增加。如果有上述疾病，或出现胸痛、异常气短、头晕等症状，请先取得医疗许可。{${n}}比赛式训练强度很大：大重量、跳跃、波比、冲刺和负重行走。请用数周时间逐步过渡。不要独自测试最大重量，也不要在没有保护者或教练观察的情况下测试。`,
    ja: `一般的な情報であり、医学的な助言ではありません。ACSMのスクリーニングモデルによると：運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽〜中程度の運動を始め、少しずつ増やせます。これらの病気がある場合や、胸の痛み、普段と違う息切れ、めまいなどの症状がある場合は、先に医師の許可を得てください。{${n}}レース形式の運動はハードです。重い挙上、ジャンプ、バーピー、ダッシュ、キャリー。数週間かけて段階的に慣らしてください。最大重量のテストは、一人で、または補助者やコーチの目がない状態で行わないでください。`,
    gu: `સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM ના સ્ક્રીનિંગ મોડલ મુજબ: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણ નથી અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, કે છાતીમાં દુખાવો, અસામાન્ય શ્વાસ ચડવો કે ચક્કર જેવા લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{${n}} રેસ-સ્ટાઇલ કામ અઘરું છે: ભારે લિફ્ટ, જમ્પ, બર્પી, સ્પ્રિન્ટ અને કૅરી. અઠવાડિયાં સુધી ધીમે ધીમે તૈયારી કરો. એકલા, કે સ્પોટર કે કોચ જોતા ન હોય ત્યારે મેક્સ લિફ્ટનો ટેસ્ટ ન કરો.`,
  };
  return `${base[lang]} ${extra}`.trim();
}

type LabelOptions = { crumb: string; whatsappText: string; why?: string; how?: string; dose?: string };

const BASE_LABELS: Record<PostLang, PostCopy["labels"]> = {
  en: { home: "Home", blog: "Blog", why: "Why", how: "How", dose: "Dose", sources: "Sources", readIn: "Read this in", programs: "See the programs", whatsapp: "Ask on WhatsApp", whatsappText: "", skip: "Skip to content", crumb: "" },
  ar: { home: "الرئيسية", blog: "المدونة", why: "لماذا", how: "كيف", dose: "الجرعة", sources: "المصادر", readIn: "اقرأ بلغة أخرى", programs: "اطّلع على البرامج", whatsapp: "اسأل عبر واتساب", whatsappText: "", skip: "انتقل إلى المحتوى", crumb: "" },
  hi: { home: "होम", blog: "ब्लॉग", why: "क्यों", how: "कैसे", dose: "डोज़", sources: "स्रोत", readIn: "इसे इस भाषा में पढ़ें", programs: "प्रोग्राम देखें", whatsapp: "WhatsApp पर पूछें", whatsappText: "", skip: "सामग्री पर जाएँ", crumb: "" },
  es: { home: "Inicio", blog: "Blog", why: "Por qué", how: "Cómo", dose: "Dosis", sources: "Fuentes", readIn: "Leer en", programs: "Ver los programas", whatsapp: "Pregunta por WhatsApp", whatsappText: "", skip: "Saltar al contenido", crumb: "" },
  zh: { home: "首页", blog: "博客", why: "为什么", how: "怎么做", dose: "训练量", sources: "参考来源", readIn: "其他语言版本", programs: "查看课程", whatsapp: "通过WhatsApp咨询", whatsappText: "", skip: "跳到正文", crumb: "" },
  ja: { home: "ホーム", blog: "ブログ", why: "なぜ", how: "やり方", dose: "回数・量", sources: "出典", readIn: "他の言語で読む", programs: "プログラムを見る", whatsapp: "WhatsAppで質問する", whatsappText: "", skip: "本文へスキップ", crumb: "" },
  gu: { home: "હોમ", blog: "બ્લોગ", why: "શા માટે", how: "કેવી રીતે", dose: "ડોઝ", sources: "સ્રોતો", readIn: "આ ભાષામાં વાંચો", programs: "પ્રોગ્રામ જુઓ", whatsapp: "WhatsApp પર પૂછો", whatsappText: "", skip: "સામગ્રી પર જાઓ", crumb: "" },
};

/** Labels block. `why`, `how` and `dose` can be renamed per post (for example "What it is" / "What you do" / "What to know"). */
export function labelsFor(lang: PostLang, o: LabelOptions): PostCopy["labels"] {
  const b = BASE_LABELS[lang];
  return { ...b, why: o.why ?? b.why, how: o.how ?? b.how, dose: o.dose ?? b.dose, whatsappText: o.whatsappText, crumb: o.crumb };
}

/** Standard call-to-action card: heading, a post-specific opener, the not-affiliated line, Iron Hour and the rest. */
export function coachedFor(lang: PostLang, opener: string, org: string): string[] {
  return [opener, notAffiliated(lang, org), IRON_HOUR[lang], ...CTA_TAIL[lang]];
}

export const SAFETY_HEADING: Record<PostLang, string> = {
  en: "Before you start",
  ar: "قبل أن تبدأ",
  hi: "शुरू करने से पहले",
  es: "Antes de empezar",
  zh: "开始之前",
  ja: "始める前に",
  gu: "શરૂ કરતાં પહેલાં",
};

type Trio = { why: string; how: string; dose: string };

/** Ready-made names for the three fields on each list card. */
const THREE: Record<PostLang, Trio> = Object.fromEntries(
  (["en", "ar", "hi", "es", "zh", "ja", "gu"] as const).map((l) => [l, { why: "HYROX", how: "DEKA", dose: "ATHX" }]),
) as Record<PostLang, Trio>;

export const CARD_LABELS: Record<"explain" | "train" | "compare" | "plan" | "three", Record<PostLang, Trio>> = {
  three: THREE,
  explain: {
    en: { why: "What it is", how: "What you do", dose: "Good to know" },
    ar: { why: "ما هو", how: "ماذا تفعل", dose: "مفيد أن تعرف" },
    hi: { why: "यह क्या है", how: "आप क्या करते हैं", dose: "जानने लायक" },
    es: { why: "Qué es", how: "Qué haces", dose: "Conviene saber" },
    zh: { why: "是什么", how: "怎么做", dose: "要点" },
    ja: { why: "内容", how: "やること", dose: "知っておくこと" },
    gu: { why: "શું છે", how: "તમે શું કરો છો", dose: "જાણવા જેવું" },
  },
  train: {
    en: { why: "Why it matters", how: "How to train it", dose: "How much" },
    ar: { why: "لماذا يهم", how: "كيف تتدرب عليه", dose: "الكمية" },
    hi: { why: "क्यों ज़रूरी", how: "कैसे ट्रेन करें", dose: "कितना" },
    es: { why: "Por qué importa", how: "Cómo entrenarlo", dose: "Cuánto" },
    zh: { why: "为什么重要", how: "怎么练", dose: "练多少" },
    ja: { why: "なぜ大事か", how: "鍛え方", dose: "量" },
    gu: { why: "કેમ મહત્વનું", how: "કેવી રીતે ટ્રેન કરવું", dose: "કેટલું" },
  },
  compare: {
    en: { why: "The format", how: "What is different", dose: "A good fit if" },
    ar: { why: "الصيغة", how: "ما الذي يميّزه", dose: "مناسب إذا" },
    hi: { why: "फ़ॉर्मैट", how: "क्या अलग है", dose: "आपके लिए ठीक है अगर" },
    es: { why: "El formato", how: "Qué lo distingue", dose: "Te encaja si" },
    zh: { why: "赛制", how: "特点", dose: "适合你，如果" },
    ja: { why: "形式", how: "違い", dose: "こんな人に" },
    gu: { why: "ફોર્મેટ", how: "શું અલગ છે", dose: "આમને માટે સારું" },
  },
  plan: {
    en: { why: "The goal", how: "What you do", dose: "How much" },
    ar: { why: "الهدف", how: "ماذا تفعل", dose: "الكمية" },
    hi: { why: "लक्ष्य", how: "क्या करें", dose: "कितना" },
    es: { why: "Objetivo", how: "Qué haces", dose: "Cuánto" },
    zh: { why: "目标", how: "怎么做", dose: "训练量" },
    ja: { why: "目標", how: "やること", dose: "量" },
    gu: { why: "લક્ષ્ય", how: "શું કરવું", dose: "કેટલું" },
  },
};

export type Core = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  dek: string;
  crumb: string;
  whatsappText: string;
  preset: keyof typeof CARD_LABELS;
  intro: string[];
  listHeading: string;
  items: PostCopy["items"];
  enoughHeading: string;
  enough: string[];
  sampleHeading: string;
  sample: string[];
  /** First line of the call-to-action card. */
  opener: string;
  /** Organiser name(s) for the "not affiliated" line. */
  org: string;
  /** Citation number of Riebe et al. 2015 in this post's sources. */
  safetyN: number;
  /** Post-specific safety sentences. */
  safetyExtra: string;
  coachedHeading?: string;
};

/** Assemble a full PostCopy from the per-post core and the shared pieces. */
export function copyFor(lang: PostLang, c: Core): PostCopy {
  const t = CARD_LABELS[c.preset][lang];
  return {
    metaTitle: c.metaTitle,
    metaDescription: c.metaDescription,
    h1: c.h1,
    dek: c.dek,
    updated: UPDATED[lang],
    byline: BYLINE[lang],
    credentialsNote: CREDENTIALS[lang],
    labels: labelsFor(lang, { crumb: c.crumb, whatsappText: c.whatsappText, why: t.why, how: t.how, dose: t.dose }),
    intro: c.intro,
    listHeading: c.listHeading,
    items: c.items,
    enoughHeading: c.enoughHeading,
    enough: c.enough,
    sampleHeading: c.sampleHeading,
    sampleLabel: SAMPLE_LABEL[lang],
    sample: c.sample,
    coachedHeading: c.coachedHeading ?? CTA_HEADING[lang],
    coached: coachedFor(lang, c.opener, c.org),
    safetyHeading: SAFETY_HEADING[lang],
    safety: safetyText(lang, c.safetyN, c.safetyExtra),
  };
}
