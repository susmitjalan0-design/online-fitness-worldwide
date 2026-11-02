/**
 * Blog post: "What is HYROX? 7 things to know before your first race".
 * Citations in copy are written as {n} and point at WHAT_IS_HYROX_SOURCES[n - 1].
 * Race facts come from HYROX's own pages and the 2026/27 Singles Rulebook, read 2 Nov 2026 (IST).
 * Weights: kg with pounds in brackets (rounded). Finish-time figures are third party and said so.
 * No client results, no prices, no implied affiliation. Translations were drafted for this batch
 * and need a native-speaker review (see CHANGES-grokbot.md).
 */

import { copyFor, RACE_MODIFIED, RACE_PUBLISHED, type Core } from "./common";
import { SRC } from "./race-sources";
import { POST_LANGS, type BlogPost, type PostCopy, type PostLang } from "./shared";

export const WHAT_IS_HYROX_SLUG = "what-is-hyrox";

export const WHAT_IS_HYROX_SOURCES = [
  SRC.hyroxRace, // 1
  SRC.hyroxRules, // 2
  SRC.hyroxHome, // 3
  SRC.hyroxFind, // 4
  SRC.hyroxSsac, // 5
  SRC.roxtimes, // 6
  SRC.hyroxGujCom, // 7
  SRC.riebe, // 8
] as const;

const en: Core = {
  metaTitle: "What Is HYROX? 7 Things to Know Before Your First Race | Jalan PT",
  metaDescription:
    "What is HYROX? Eight rounds of a 1 km run plus a station: stations in order, weights in kg and lb, divisions, rules, typical times and where it runs.",
  h1: "What is HYROX? 7 things to know before your first race",
  dek: "HYROX is a fitness race. Eight runs of 1 km, each followed by a station. Same format in every city. Here is what the organiser publishes, and what third parties add.",
  crumb: "What is HYROX?",
  whatsappText: "Hi Susmit, I read the article on what HYROX is and want to book a consultation",
  preset: "explain",
  intro: [
    "HYROX is a fitness race. You run 1 km, then do one station. You do that 8 times.{1}",
    "The format is the same everywhere. So a time from one city can be compared with a time from another.{1}",
    "The organiser's India site says that over 80 global races in 2025 saw over 550,000 athletes and 350,000 spectators.{3} That is HYROX's own figure. I can't check it.",
    "Weights are the 2026/27 season's. Kilograms first, pounds in brackets (rounded). Rules change. Read the current rulebook before you race.{2}",
    "This is an independent explainer, not an official HYROX post.",
  ],
  listHeading: "What is HYROX? 7 things to know before your first race",
  items: [
    {
      name: "The format: 8 rounds, 8 km of running",
      why: "Run about 1,000 m. Then one workout station. Eight times. The running totals 8,000 m.{1}{2}",
      how: "The area between the run and the stations is the Roxzone, a transition zone. The run course, the Roxzone and the stations together make the race.{2}",
      dose: "Venues differ, so a 1 km run can be several laps. The rulebook says the full 8,000 m is still run.{2}",
    },
    {
      name: "The 8 stations, in order",
      why: "SkiErg 1,000 m. Sled push 50 m. Sled pull 50 m. Burpee broad jumps 80 m. Row 1,000 m. Farmers carry 200 m. Sandbag lunges 100 m. Wall balls, 100 reps.{1}{2}",
      how: "HYROX says the SkiErg works arms, shoulders and core, the sled push works the lower body and the posterior chain, the sled pull works glutes, back, biceps and trunk, the farmers carry works upper back, core and grip, and the lunges work thighs and glutes.{1}",
      dose: "Weights, Open women / Open men (also Pro women): sled push 102 / 152 kg (225 / 335 lb) including the sled; sled pull 78 / 103 kg (172 / 227 lb); carry 2 × 16 / 2 × 24 kg (35 / 53 lb); lunge bag 10 / 20 kg (22 / 44 lb); wall ball 4 / 6 kg (9 / 13 lb). Pro men: push 202 kg (445 lb), pull 153 kg (337 lb), carry 2 × 32 kg (71 lb), bag 30 kg (66 lb), ball 9 kg (20 lb).{2}",
    },
    {
      name: "Divisions: Open, Pro, Doubles, Relay",
      why: "Open is the standard race. Pro uses heavier weights. In Doubles, two people run together and split each station as they choose. In Relay, a team of four each runs 2 × 1 km and does 1 station.{1}",
      how: "Age groups: under 24 (16 to 24), then 5-year groups from 25-29 up to 85-89, by age on race day.{2} You must be at least 16 on race day.{2}",
      dose: "HYROX says it is for everybody, from professional athletes to everyday gym-goers.{1}",
    },
    {
      name: "The rules that cost people time",
      why: "Two-minute penalties apply, for example for using the wrong IN or OUT arch, or the wrong workout station.{2}",
      how: "Wall balls: a full squat with hips below the knees, and the ball must hit the correct target. 2.70 m for women, 3.00 m for men. Anything else is a no-rep.{2}",
      dose: "The rulebook is the only source that counts on the day. Read the current one at hyrox.com/rulebook.{2}",
    },
    {
      name: "What a typical finish looks like",
      why: "A third-party analysis of 1,274,586 official finishes (RoxTimes): typical Open men 1:27:59, Open women 1:36:00. The fastest 10% finish under 1:10:40 (men) and 1:18:24 (women).{6}",
      how: "In HYROX's own sports-science report, 11 recreational athletes simulated an Open race. The median was 86.2 minutes: 51.2 running, 32.8 on the stations. A tiny sample.{5}",
      dose: "These are not targets. They do show one thing: the running is the biggest block.{5}{6}",
    },
    {
      name: "Where it runs, and the World Championships",
      why: "On 2 November 2026 HYROX's race finder listed 66 events from 11 November 2026 to 10 June 2027, and 36 country options across five continents.{4}",
      how: "Examples: Europe (Dublin, Düsseldorf and Barcelona 11 to 15 Nov; Utrecht 26 to 30 Nov; London 2 to 6 Dec). North America (Denver 12 to 15 Nov; Dallas 18 to 22 Nov; Anaheim 3 to 6 Dec). Asia-Pacific (Seoul 13 to 15 Nov; Singapore 26 to 29 Nov; Melbourne 9 to 13 Dec). Middle East and Africa (Cairo 14 to 15 Nov; Dubai 27 to 28 Nov; Johannesburg 26 to 29 Nov). Latin America (Rio de Janeiro 21 to 22 Nov).{4}",
      dose: "The PUMA HYROX World Championships are in Hong Kong, 10 to 13 June 2027.{4} Each race class at every qualifying event offers one qualification spot. Racers aged 60 and over qualify through Open.{2}",
    },
    {
      name: "India is one market among many",
      why: "The finder lists IndusInd Bank HYROX Gujarat (Gandhinagar) on 26 to 28 November 2026, HYROX Noida on 15 to 17 January 2027, and HYROX Bengaluru in May 2027.{4}",
      how: "The Gujarat page calls it HYROX's debut in Gujarat, after sell-out events in Delhi and Mumbai.{7}",
      dose: "Same format, same weights. Entry details are on each event page. I don't quote fees.",
    },
  ],
  enoughHeading: "What I won't claim",
  enough: [
    "Finish-time figures here are third party. HYROX publishes no official average or target time that I found.{6}",
    "Participation figures are the organiser's own claim.{3}",
    "Event dates and venues change. Check the event page before you travel.{4}",
    "No client results here, and none implied. No prices.",
  ],
  sampleHeading: "A sample session to taste HYROX",
  sample: [
    "Warm-up, 10 minutes: easy jog, hips, shoulders.",
    "Round 1: 1 km easy run, then SkiErg 500 m.",
    "Round 2: 1 km easy run, then farmers carry 100 m, light.",
    "Round 3: 1 km easy run, then 20 wall balls, light ball.",
    "Walk 5 minutes. Note which station felt hardest.",
    "Stop when form breaks. This is a taste of the order, not a test.",
  ],
  opener: "Thinking about your first HYROX, or your next one? I coach the strength and conditioning side, live, online.",
  org: "HYROX",
  safetyN: 8,
  safetyExtra: "Sled work, burpee broad jumps and wall balls are hard on knees, back and shoulders. Build up over weeks. Ask a doctor first if you have a heart, blood-pressure or joint condition.",
};

const ar: Core = {
  metaTitle: "ما هو HYROX؟ 7 أشياء تعرفها قبل سباقك الأول | Jalan PT",
  metaDescription: "ما هو HYROX؟ ثماني جولات من جري 1 كم ومحطة: المحطات بالترتيب، والأوزان بالكغ والرطل، والفئات والقواعد والأزمنة النموذجية وأماكن إقامته حول العالم.",
  h1: "ما هو HYROX؟ 7 أشياء تعرفها قبل سباقك الأول",
  dek: "HYROX سباق لياقة. ثمانية أشواط جري كل منها 1 كم، يتبعها محطة. الصيغة نفسها في كل مدينة. هذا ما تنشره الجهة المنظمة، وما تضيفه جهات أخرى.",
  crumb: "ما هو HYROX؟",
  whatsappText: "مرحباً سوسميت، قرأت مقال «ما هو HYROX» وأريد حجز استشارة",
  preset: "explain",
  intro: [
    "HYROX سباق لياقة. تجري 1 كم ثم تؤدي محطة واحدة. وتكرر ذلك 8 مرات.{1}",
    "الصيغة نفسها في كل مكان. لذا يمكن مقارنة زمن من مدينة بزمن من مدينة أخرى.{1}",
    "يقول موقع الجهة المنظمة للهند إن أكثر من 80 سباقاً حول العالم في 2025 شهدت أكثر من 550,000 رياضي و350,000 متفرج.{3} هذا رقم HYROX نفسها. لا أستطيع التحقق منه.",
    "الأوزان لموسم 2026/27. الكيلوغرام أولاً، والأرطال بين قوسين (مقرّبة). القواعد تتغير. اقرأ الدليل الحالي قبل أن تسابق.{2}",
    "هذا شرح مستقل، وليس منشوراً رسمياً من HYROX.",
  ],
  listHeading: "ما هو HYROX؟ 7 أشياء تعرفها قبل سباقك الأول",
  items: [
    {
      name: "الصيغة: 8 جولات و8 كم جري",
      why: "اجرِ نحو 1000 م. ثم محطة تمرين واحدة. ثماني مرات. مجموع الجري 8000 م.{1}{2}",
      how: "المنطقة بين الجري والمحطات هي Roxzone، منطقة انتقال. يتكوّن السباق من مسار الجري وRoxzone والمحطات معاً.{2}",
      dose: "تختلف القاعات، فقد يكون الكيلومتر عدة لفات. يقول الدليل إن الـ 8000 م كاملة تُجرى مع ذلك.{2}",
    },
    {
      name: "المحطات الثماني بالترتيب",
      why: "SkiErg 1000 م. دفع الزلاجة 50 م. سحب الزلاجة 50 م. قفزات بيربي طويلة 80 م. تجديف 1000 م. حمل المزارع 200 م. اندفاعات بكيس رمل 100 م. رمي كرة الحائط 100 مرة.{1}{2}",
      how: "تقول HYROX إن SkiErg يعمل على الذراعين والكتفين والجذع، ودفع الزلاجة على الجزء السفلي والسلسلة الخلفية، وسحبها على الأرداف والظهر والعضلة ذات الرأسين والجذع، وحمل المزارع على أعلى الظهر والجذع والقبضة، والاندفاعات على الفخذين والأرداف.{1}",
      dose: "الأوزان، نساء Open / رجال Open (وكذلك نساء Pro): دفع الزلاجة 102 / 152 كغ (225 / 335 رطلاً) شاملة الزلاجة؛ سحب 78 / 103 كغ (172 / 227 رطلاً)؛ حمل 2 × 16 / 2 × 24 كغ (35 / 53 رطلاً)؛ كيس الاندفاعات 10 / 20 كغ (22 / 44 رطلاً)؛ كرة الحائط 4 / 6 كغ (9 / 13 رطلاً). رجال Pro: دفع 202 كغ (445 رطلاً)، سحب 153 كغ (337 رطلاً)، حمل 2 × 32 كغ (71 رطلاً)، كيس 30 كغ (66 رطلاً)، كرة 9 كغ (20 رطلاً).{2}",
    },
    {
      name: "الفئات: Open وPro وDoubles وRelay",
      why: "Open هو السباق القياسي. Pro بأوزان أثقل. في Doubles يجري شخصان معاً ويقتسمان كل محطة كما يشاءان. في Relay فريق من أربعة، يجري كل منهم 2 × 1 كم ويؤدي محطة واحدة.{1}",
      how: "الفئات العمرية: أقل من 24 (16 إلى 24)، ثم فئات من 5 سنوات من 25-29 حتى 85-89، بحسب العمر يوم السباق.{2} يجب أن يكون عمرك 16 عاماً على الأقل يوم السباق.{2}",
      dose: "تقول HYROX إنها للجميع، من الرياضيين المحترفين إلى مرتادي النوادي العاديين.{1}",
    },
    {
      name: "القواعد التي تكلّف الناس وقتاً",
      why: "تُفرض عقوبات من دقيقتين، مثلاً عند استخدام بوابة الدخول أو الخروج الخطأ، أو محطة التمرين الخطأ.{2}",
      how: "كرة الحائط: قرفصاء كاملة والوركان أدنى من الركبتين، ويجب أن تصيب الكرة الهدف الصحيح. 2.70 م للنساء و3.00 م للرجال. غير ذلك لا يُحتسب.{2}",
      dose: "الدليل هو المصدر الوحيد المعتمد يوم السباق. اقرأ الحالي في hyrox.com/rulebook.{2}",
    },
    {
      name: "كيف يبدو الزمن النموذجي",
      why: "تحليل من جهة خارجية لـ 1,274,586 نهاية رسمية (RoxTimes): الرجال في Open 1:27:59 والنساء 1:36:00 كوسيط. أسرع 10% ينهون دون 1:10:40 (رجال) و1:18:24 (نساء).{6}",
      how: "في تقرير HYROX العلمي الرياضي، حاكى 11 رياضياً ترفيهياً سباق Open. كان الوسيط 86.2 دقيقة: 51.2 جرياً و32.8 على المحطات. عينة صغيرة جداً.{5}",
      dose: "هذه ليست أهدافاً. لكنها تُظهر أمراً واحداً: الجري هو الكتلة الأكبر.{5}{6}",
    },
    {
      name: "أين يُقام، والبطولة العالمية",
      why: "في 2 نوفمبر 2026 عرض باحث سباقات HYROX ما مجموعه 66 فعالية من 11 نوفمبر 2026 إلى 10 يونيو 2027، و36 خيار دولة عبر خمس قارات.{4}",
      how: "أمثلة: أوروبا (دبلن ودوسلدورف وبرشلونة من 11 إلى 15 نوفمبر؛ أوترخت من 26 إلى 30 نوفمبر؛ لندن من 2 إلى 6 ديسمبر). أمريكا الشمالية (دنفر من 12 إلى 15 نوفمبر؛ دالاس من 18 إلى 22 نوفمبر؛ أنهايم من 3 إلى 6 ديسمبر). آسيا والمحيط الهادئ (سول من 13 إلى 15 نوفمبر؛ سنغافورة من 26 إلى 29 نوفمبر؛ ملبورن من 9 إلى 13 ديسمبر). الشرق الأوسط وأفريقيا (القاهرة من 14 إلى 15 نوفمبر؛ دبي من 27 إلى 28 نوفمبر؛ جوهانسبرغ من 26 إلى 29 نوفمبر). أمريكا اللاتينية (ريو دي جانيرو من 21 إلى 22 نوفمبر).{4}",
      dose: "بطولة PUMA HYROX العالمية في هونغ كونغ، من 10 إلى 13 يونيو 2027.{4} كل فئة سباق في كل فعالية مؤهِّلة تمنح مقعد تأهل واحداً. ومن بلغ 60 عاماً فأكثر يتأهل عبر Open.{2}",
    },
    {
      name: "الهند سوق واحد من أسواق كثيرة",
      why: "يعرض الباحث IndusInd Bank HYROX Gujarat (غانديناغار) من 26 إلى 28 نوفمبر 2026، وHYROX Noida من 15 إلى 17 يناير 2027، وHYROX Bengaluru في مايو 2027.{4}",
      how: "تصف صفحة غوجارات الفعالية بأنها أول ظهور لـ HYROX في غوجارات، بعد فعاليات نفدت تذاكرها في دلهي ومومباي.{7}",
      dose: "الصيغة نفسها والأوزان نفسها. تفاصيل التسجيل في صفحة كل فعالية. لا أذكر الرسوم.",
    },
  ],
  enoughHeading: "ما لن أدّعيه",
  enough: [
    "أرقام الأزمنة هنا من جهة خارجية. لم أجد متوسطاً أو زمناً مستهدفاً رسمياً تنشره HYROX.{6}",
    "أرقام المشاركة هي ادعاء الجهة المنظمة نفسها.{3}",
    "تتغير مواعيد الفعاليات وأماكنها. راجع صفحة الفعالية قبل السفر.{4}",
    "لا نتائج عملاء هنا، ولا إيحاء بها. لا أسعار.",
  ],
  sampleHeading: "جلسة نموذجية لتتذوق HYROX",
  sample: [
    "إحماء 10 دقائق: ركض خفيف، الوركان، الكتفان.",
    "الجولة 1: جري سهل 1 كم، ثم SkiErg 500 م.",
    "الجولة 2: جري سهل 1 كم، ثم حمل المزارع 100 م بوزن خفيف.",
    "الجولة 3: جري سهل 1 كم، ثم 20 رمية كرة حائط بكرة خفيفة.",
    "امشِ 5 دقائق. لاحظ أي محطة بدت الأصعب.",
    "توقف إذا اختل الأداء. هذا تذوّق للترتيب، وليس اختباراً.",
  ],
  opener: "تفكر في أول HYROX لك، أو في التالي؟ أدرّب جانب القوة والتكييف، مباشرة عبر الإنترنت.",
  org: "HYROX",
  safetyN: 8,
  safetyExtra: "عمل الزلاجة وقفزات البيربي ورمي كرة الحائط شاق على الركبتين والظهر والكتفين. ابنِ نفسك على مدى أسابيع. اسأل طبيباً أولاً إن كانت لديك حالة في القلب أو الضغط أو المفاصل.",
};

const hi: Core = {
  metaTitle: "HYROX क्या है? पहली रेस से पहले जानने लायक 7 बातें | Jalan PT",
  metaDescription: "HYROX क्या है? 1 किमी दौड़ और एक स्टेशन के आठ राउंड: क्रम से स्टेशन, किग्रा और lb में वज़न, डिवीज़न, नियम, सामान्य समय और दुनिया भर में कहाँ होता है।",
  h1: "HYROX क्या है? पहली रेस से पहले जानने लायक 7 बातें",
  dek: "HYROX एक फ़िटनेस रेस है। 1 किमी की आठ दौड़ें, हर एक के बाद एक स्टेशन। हर शहर में एक ही फ़ॉर्मैट। आयोजक क्या प्रकाशित करता है, और तीसरे पक्ष क्या जोड़ते हैं, यह यहाँ है।",
  crumb: "HYROX क्या है?",
  whatsappText: "नमस्ते सुस्मित, मैंने HYROX क्या है वाला लेख पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
  preset: "explain",
  intro: [
    "HYROX एक फ़िटनेस रेस है। आप 1 किमी दौड़ते हैं, फिर एक स्टेशन करते हैं। यह 8 बार।{1}",
    "फ़ॉर्मैट हर जगह एक है। इसलिए एक शहर का समय दूसरे शहर के समय से मिलाया जा सकता है।{1}",
    "आयोजक की इंडिया साइट कहती है कि 2025 में दुनिया भर की 80 से ज़्यादा रेस में 550,000 से ज़्यादा एथलीट और 350,000 दर्शक आए।{3} यह HYROX का अपना आँकड़ा है। मैं इसे जाँच नहीं सकता।",
    "वज़न 2026/27 सीज़न के हैं। पहले किलोग्राम, कोष्ठक में पाउंड (राउंड किए हुए)। नियम बदलते हैं। रेस से पहले मौजूदा रूलबुक पढ़ें।{2}",
    "यह स्वतंत्र व्याख्या है, HYROX की आधिकारिक पोस्ट नहीं।",
  ],
  listHeading: "HYROX क्या है? पहली रेस से पहले जानने लायक 7 बातें",
  items: [
    {
      name: "फ़ॉर्मैट: 8 राउंड, 8 किमी दौड़",
      why: "लगभग 1,000 मीटर दौड़ें। फिर एक वर्कआउट स्टेशन। आठ बार। कुल दौड़ 8,000 मीटर।{1}{2}",
      how: "दौड़ और स्टेशनों के बीच का हिस्सा Roxzone है, एक ट्रांज़िशन ज़ोन। रन कोर्स, Roxzone और स्टेशन मिलकर रेस बनते हैं।{2}",
      dose: "वेन्यू अलग होते हैं, इसलिए 1 किमी की दौड़ कई लैप की हो सकती है। रूलबुक कहती है कि पूरे 8,000 मीटर फिर भी दौड़े जाते हैं।{2}",
    },
    {
      name: "क्रम से 8 स्टेशन",
      why: "SkiErg 1,000 मीटर। स्लेड पुश 50 मीटर। स्लेड पुल 50 मीटर। बर्पी ब्रॉड जंप 80 मीटर। रो 1,000 मीटर। फ़ार्मर्स कैरी 200 मीटर। सैंडबैग लंज 100 मीटर। वॉल बॉल, 100 रेप।{1}{2}",
      how: "HYROX के अनुसार SkiErg बाँहों, कंधों और कोर पर काम करता है, स्लेड पुश निचले शरीर और पोस्टीरियर चेन पर, स्लेड पुल ग्लूट्स, पीठ, बाइसेप्स और ट्रंक पर, फ़ार्मर्स कैरी ऊपरी पीठ, कोर और ग्रिप पर, और लंज जाँघों और ग्लूट्स पर।{1}",
      dose: "वज़न, ओपन महिलाएँ / ओपन पुरुष (प्रो महिलाएँ भी): स्लेड पुश 102 / 152 किग्रा (225 / 335 lb) स्लेड समेत; स्लेड पुल 78 / 103 किग्रा (172 / 227 lb); कैरी 2 × 16 / 2 × 24 किग्रा (35 / 53 lb); लंज बैग 10 / 20 किग्रा (22 / 44 lb); वॉल बॉल 4 / 6 किग्रा (9 / 13 lb)। प्रो पुरुष: पुश 202 किग्रा (445 lb), पुल 153 किग्रा (337 lb), कैरी 2 × 32 किग्रा (71 lb), बैग 30 किग्रा (66 lb), बॉल 9 किग्रा (20 lb)।{2}",
    },
    {
      name: "डिवीज़न: ओपन, प्रो, डबल्स, रिले",
      why: "ओपन मानक रेस है। प्रो में भारी वज़न हैं। डबल्स में दो लोग साथ दौड़ते हैं और हर स्टेशन अपनी मर्ज़ी से बाँटते हैं। रिले में चार की टीम, हर सदस्य 2 × 1 किमी दौड़ता है और 1 स्टेशन करता है।{1}",
      how: "एज ग्रुप: 24 से कम (16 से 24), फिर 25-29 से 85-89 तक 5-5 साल के ग्रुप, रेस के दिन की उम्र के अनुसार।{2} रेस के दिन उम्र कम से कम 16 होनी चाहिए।{2}",
      dose: "HYROX कहता है कि यह सबके लिए है, पेशेवर एथलीट से लेकर रोज़ जिम जाने वालों तक।{1}",
    },
    {
      name: "वे नियम जो लोगों का समय खाते हैं",
      why: "दो मिनट की पेनल्टी लगती है, जैसे गलत IN या OUT आर्च से गुज़रने या गलत वर्कआउट स्टेशन के इस्तेमाल पर।{2}",
      how: "वॉल बॉल: पूरा स्क्वाट जिसमें कूल्हे घुटनों से नीचे जाएँ, और गेंद सही टारगेट पर लगे। महिलाओं के लिए 2.70 मीटर, पुरुषों के लिए 3.00 मीटर। वरना नो-रेप।{2}",
      dose: "रेस के दिन सिर्फ़ रूलबुक मान्य है। मौजूदा रूलबुक hyrox.com/rulebook पर पढ़ें।{2}",
    },
    {
      name: "सामान्य फ़िनिश कैसा दिखता है",
      why: "1,274,586 आधिकारिक फ़िनिश का तीसरे पक्ष का विश्लेषण (RoxTimes): ओपन पुरुष का सामान्य समय 1:27:59, ओपन महिला 1:36:00। सबसे तेज़ 10% पुरुष 1:10:40 से और महिलाएँ 1:18:24 से कम में पूरा करते हैं।{6}",
      how: "HYROX की अपनी स्पोर्ट्स-साइंस रिपोर्ट में 11 रिक्रिएशनल एथलीटों ने ओपन रेस का सिमुलेशन किया। मीडियन 86.2 मिनट: 51.2 दौड़, 32.8 स्टेशन। बहुत छोटा सैंपल।{5}",
      dose: "ये लक्ष्य नहीं हैं। ये एक बात दिखाते हैं: दौड़ सबसे बड़ा हिस्सा है।{5}{6}",
    },
    {
      name: "कहाँ होती है, और वर्ल्ड चैंपियनशिप",
      why: "2 नवंबर 2026 को HYROX के रेस फ़ाइंडर में 11 नवंबर 2026 से 10 जून 2027 तक 66 इवेंट और पाँच महाद्वीपों के 36 कंट्री विकल्प सूचीबद्ध थे।{4}",
      how: "उदाहरण: यूरोप (डबलिन, डसेलडॉर्फ़ और बार्सिलोना 11 से 15 नवंबर; उट्रेख़्त 26 से 30 नवंबर; लंदन 2 से 6 दिसंबर)। उत्तरी अमेरिका (डेनवर 12 से 15 नवंबर; डल्लास 18 से 22 नवंबर; एनाहाइम 3 से 6 दिसंबर)। एशिया-प्रशांत (सोल 13 से 15 नवंबर; सिंगापुर 26 से 29 नवंबर; मेलबर्न 9 से 13 दिसंबर)। मध्य पूर्व और अफ़्रीका (काहिरा 14 से 15 नवंबर; दुबई 27 से 28 नवंबर; जोहानिसबर्ग 26 से 29 नवंबर)। लैटिन अमेरिका (रियो डी जनेरियो 21 से 22 नवंबर)।{4}",
      dose: "PUMA HYROX वर्ल्ड चैंपियनशिप हांगकांग में 10 से 13 जून 2027 को है।{4} हर क्वालिफ़ाइंग इवेंट में हर रेस क्लास एक क्वालिफ़िकेशन स्लॉट देती है। 60 और उससे ऊपर के रेसर ओपन के ज़रिए क्वालिफ़ाई करते हैं।{2}",
    },
    {
      name: "भारत कई बाज़ारों में से एक है",
      why: "फ़ाइंडर में IndusInd Bank HYROX Gujarat (गांधीनगर) 26 से 28 नवंबर 2026, HYROX Noida 15 से 17 जनवरी 2027, और HYROX Bengaluru मई 2027 में सूचीबद्ध हैं।{4}",
      how: "गुजरात पेज इसे गुजरात में HYROX की शुरुआत कहता है, दिल्ली और मुंबई के सोल्ड-आउट इवेंट के बाद।{7}",
      dose: "वही फ़ॉर्मैट, वही वज़न। एंट्री की जानकारी हर इवेंट पेज पर है। मैं फ़ीस नहीं लिखता।",
    },
  ],
  enoughHeading: "जो मैं दावा नहीं करूँगा",
  enough: [
    "यहाँ के फ़िनिश-टाइम आँकड़े तीसरे पक्ष के हैं। HYROX का कोई आधिकारिक औसत या लक्ष्य समय मुझे नहीं मिला।{6}",
    "भागीदारी के आँकड़े आयोजक का अपना दावा हैं।{3}",
    "इवेंट की तारीख़ें और वेन्यू बदलते हैं। यात्रा से पहले इवेंट पेज देखें।{4}",
    "यहाँ कोई क्लाइंट रिज़ल्ट नहीं, और न ही इशारा। कोई क़ीमत नहीं।",
  ],
  sampleHeading: "HYROX चखने के लिए एक सैंपल सेशन",
  sample: [
    "वार्म-अप, 10 मिनट: हल्की जॉग, हिप्स, शोल्डर।",
    "राउंड 1: 1 किमी आसान दौड़, फिर SkiErg 500 मीटर।",
    "राउंड 2: 1 किमी आसान दौड़, फिर फ़ार्मर्स कैरी 100 मीटर, हल्का।",
    "राउंड 3: 1 किमी आसान दौड़, फिर 20 वॉल बॉल, हल्की गेंद।",
    "5 मिनट टहलें। देखें कौन सा स्टेशन सबसे कठिन लगा।",
    "फ़ॉर्म बिगड़े तो रुक जाएँ। यह क्रम का स्वाद है, टेस्ट नहीं।",
  ],
  opener: "अपनी पहली HYROX, या अगली, के बारे में सोच रहे हैं? स्ट्रेंथ और कंडीशनिंग वाला हिस्सा मैं ऑनलाइन लाइव कोच करता हूँ।",
  org: "HYROX",
  safetyN: 8,
  safetyExtra: "स्लेड का काम, बर्पी ब्रॉड जंप और वॉल बॉल घुटनों, पीठ और कंधों पर भारी पड़ते हैं। हफ़्तों में तैयारी करें। दिल, ब्लड प्रेशर या जोड़ों की समस्या हो तो पहले डॉक्टर से पूछें।",
};

const es: Core = {
  metaTitle: "¿Qué es HYROX? 7 cosas que debes saber antes de tu primera carrera | Jalan PT",
  metaDescription: "¿Qué es HYROX? Ocho rondas de 1 km más una estación: estaciones en orden, pesos en kg y lb, divisiones, reglas, tiempos típicos y dónde se corre.",
  h1: "¿Qué es HYROX? 7 cosas que debes saber antes de tu primera carrera",
  dek: "HYROX es una carrera de fitness. Ocho tramos de 1 km corriendo, cada uno seguido de una estación. El mismo formato en cada ciudad. Esto es lo que publica el organizador y lo que añaden terceros.",
  crumb: "¿Qué es HYROX?",
  whatsappText: "Hola Susmit, leí el artículo sobre qué es HYROX y quiero reservar una consulta",
  preset: "explain",
  intro: [
    "HYROX es una carrera de fitness. Corres 1 km y haces una estación. Eso, 8 veces.{1}",
    "El formato es el mismo en todas partes. Así que un tiempo de una ciudad se puede comparar con el de otra.{1}",
    "El sitio del organizador para la India dice que más de 80 carreras en el mundo en 2025 reunieron a más de 550.000 atletas y 350.000 espectadores.{3} Es una cifra de la propia HYROX. No puedo comprobarla.",
    "Los pesos son los de la temporada 2026/27. Primero kilos, y las libras entre paréntesis (redondeadas). Las reglas cambian. Lee el reglamento vigente antes de correr.{2}",
    "Es una explicación independiente, no una publicación oficial de HYROX.",
  ],
  listHeading: "¿Qué es HYROX? 7 cosas que debes saber antes de tu primera carrera",
  items: [
    {
      name: "El formato: 8 rondas, 8 km corriendo",
      why: "Corres unos 1.000 m. Luego una estación de trabajo. Ocho veces. En total, 8.000 m corriendo.{1}{2}",
      how: "La zona entre la carrera y las estaciones es la Roxzone, una zona de transición. El circuito de carrera, la Roxzone y las estaciones forman la carrera.{2}",
      dose: "Los recintos son distintos, así que 1 km puede ser varias vueltas. El reglamento dice que se corren igualmente los 8.000 m completos.{2}",
    },
    {
      name: "Las 8 estaciones, en orden",
      why: "SkiErg 1.000 m. Empuje de trineo 50 m. Arrastre de trineo 50 m. Burpee con salto largo 80 m. Remo 1.000 m. Paseo del granjero 200 m. Zancadas con saco 100 m. Wall balls, 100 repeticiones.{1}{2}",
      how: "HYROX dice que el SkiErg trabaja brazos, hombros y core, el empuje de trineo el tren inferior y la cadena posterior, el arrastre glúteos, espalda, bíceps y tronco, el paseo del granjero la parte alta de la espalda, el core y el agarre, y las zancadas muslos y glúteos.{1}",
      dose: "Pesos, mujeres Open / hombres Open (también mujeres Pro): empuje 102 / 152 kg (225 / 335 lb) con trineo incluido; arrastre 78 / 103 kg (172 / 227 lb); paseo 2 × 16 / 2 × 24 kg (35 / 53 lb); saco de zancadas 10 / 20 kg (22 / 44 lb); wall ball 4 / 6 kg (9 / 13 lb). Hombres Pro: empuje 202 kg (445 lb), arrastre 153 kg (337 lb), paseo 2 × 32 kg (71 lb), saco 30 kg (66 lb), balón 9 kg (20 lb).{2}",
    },
    {
      name: "Divisiones: Open, Pro, Doubles, Relay",
      why: "Open es la carrera estándar. Pro usa pesos más altos. En Doubles, dos personas corren juntas y se reparten cada estación como quieran. En Relay, un equipo de cuatro: cada uno corre 2 × 1 km y hace 1 estación.{1}",
      how: "Grupos de edad: menores de 24 (16 a 24), luego tramos de 5 años desde 25-29 hasta 85-89, según la edad el día de la carrera.{2} Hay que tener al menos 16 años ese día.{2}",
      dose: "HYROX dice que es para todos, desde atletas profesionales hasta quienes entrenan en el gimnasio a diario.{1}",
    },
    {
      name: "Las reglas que hacen perder tiempo",
      why: "Hay penalizaciones de dos minutos, por ejemplo por usar el arco de entrada o salida equivocado, o la estación equivocada.{2}",
      how: "Wall balls: sentadilla completa con la cadera por debajo de las rodillas, y el balón debe dar en el objetivo correcto. 2,70 m para mujeres, 3,00 m para hombres. Si no, no cuenta.{2}",
      dose: "El día de la carrera solo cuenta el reglamento. Lee el vigente en hyrox.com/rulebook.{2}",
    },
    {
      name: "Cómo es una llegada típica",
      why: "Un análisis de terceros de 1.274.586 llegadas oficiales (RoxTimes): Open hombres, típico 1:27:59; Open mujeres, 1:36:00. El 10% más rápido baja de 1:10:40 (hombres) y 1:18:24 (mujeres).{6}",
      how: "En el informe de ciencia deportiva de HYROX, 11 atletas recreativos simularon una carrera Open. La mediana fue 86,2 minutos: 51,2 corriendo, 32,8 en las estaciones. Muestra diminuta.{5}",
      dose: "No son objetivos. Sí muestran algo: correr es el bloque más grande.{5}{6}",
    },
    {
      name: "Dónde se corre, y el Mundial",
      why: "El 2 de noviembre de 2026, el buscador de carreras de HYROX listaba 66 eventos del 11 de noviembre de 2026 al 10 de junio de 2027, y 36 opciones de país en cinco continentes.{4}",
      how: "Ejemplos: Europa (Dublín, Düsseldorf y Barcelona del 11 al 15 nov; Utrecht del 26 al 30 nov; Londres del 2 al 6 dic). Norteamérica (Denver del 12 al 15 nov; Dallas del 18 al 22 nov; Anaheim del 3 al 6 dic). Asia-Pacífico (Seúl del 13 al 15 nov; Singapur del 26 al 29 nov; Melbourne del 9 al 13 dic). Oriente Medio y África (El Cairo del 14 al 15 nov; Dubái del 27 al 28 nov; Johannesburgo del 26 al 29 nov). Latinoamérica (Río de Janeiro del 21 al 22 nov).{4}",
      dose: "El Campeonato Mundial PUMA HYROX es en Hong Kong, del 10 al 13 de junio de 2027.{4} Cada clase de carrera en cada evento clasificatorio ofrece una plaza. Quienes tienen 60 años o más se clasifican por Open.{2}",
    },
    {
      name: "La India es un mercado entre muchos",
      why: "El buscador lista IndusInd Bank HYROX Gujarat (Gandhinagar) del 26 al 28 de noviembre de 2026, HYROX Noida del 15 al 17 de enero de 2027 y HYROX Bengaluru en mayo de 2027.{4}",
      how: "La página de Gujarat lo presenta como el debut de HYROX en Gujarat, tras eventos agotados en Delhi y Bombay.{7}",
      dose: "Mismo formato, mismos pesos. Los detalles de inscripción están en la página de cada evento. No cito tarifas.",
    },
  ],
  enoughHeading: "Lo que no voy a afirmar",
  enough: [
    "Las cifras de tiempos aquí son de terceros. No encontré ningún tiempo medio ni objetivo oficial publicado por HYROX.{6}",
    "Las cifras de participación son una afirmación del propio organizador.{3}",
    "Las fechas y sedes cambian. Consulta la página del evento antes de viajar.{4}",
    "Aquí no hay resultados de clientes, ni se insinúan. Sin precios.",
  ],
  sampleHeading: "Una sesión de ejemplo para probar HYROX",
  sample: [
    "Calentamiento, 10 minutos: trote suave, caderas, hombros.",
    "Ronda 1: 1 km suave, luego SkiErg 500 m.",
    "Ronda 2: 1 km suave, luego paseo del granjero 100 m, ligero.",
    "Ronda 3: 1 km suave, luego 20 wall balls con balón ligero.",
    "Camina 5 minutos. Anota qué estación te pareció más dura.",
    "Para cuando la técnica se rompa. Es una muestra del orden, no una prueba.",
  ],
  opener: "¿Piensas en tu primera HYROX, o en la siguiente? Entreno la parte de fuerza y acondicionamiento, en directo y online.",
  org: "HYROX",
  safetyN: 8,
  safetyExtra: "El trabajo con trineo, los burpees con salto largo y los wall balls castigan rodillas, espalda y hombros. Progresa durante semanas. Consulta antes con tu médico si tienes una afección del corazón, la tensión o las articulaciones.",
};

const zh: Core = {
  metaTitle: "HYROX是什么？第一次比赛前要知道的7件事 | Jalan PT",
  metaDescription: "HYROX是什么？八轮“1公里跑加一个站点”：站点顺序、公斤与磅重量、组别、规则、典型成绩，以及全球在哪里举办。",
  h1: "HYROX是什么？第一次比赛前要知道的7件事",
  dek: "HYROX是一项健身竞赛。八段1公里跑，每段后接一个站点。每个城市赛制相同。这里是主办方公布的内容，以及第三方的补充。",
  crumb: "HYROX是什么？",
  whatsappText: "你好Susmit，我读了“HYROX是什么”的文章，想预约一次咨询",
  preset: "explain",
  intro: [
    "HYROX是一项健身竞赛。跑1公里，再做一个站点。如此重复8次。{1}",
    "赛制在各地相同。所以一个城市的成绩可以和另一个城市比较。{1}",
    "主办方的印度网站称，2025年全球80多场比赛吸引了超过55万名运动员和35万名观众。{3}这是HYROX自己的数字，我无法核实。",
    "重量为2026/27赛季的。先写公斤，磅数放括号里（四舍五入）。规则会变。比赛前请阅读现行规则手册。{2}",
    "这是独立的说明文章，不是HYROX官方发布。",
  ],
  listHeading: "HYROX是什么？第一次比赛前要知道的7件事",
  items: [
    {
      name: "赛制：8轮，共8公里跑",
      why: "跑约1000米，然后做一个训练站点。共八次。跑步总计8000米。{1}{2}",
      how: "跑步与站点之间的区域是Roxzone，一个过渡区。跑道、Roxzone和各站点共同构成比赛。{2}",
      dose: "场馆不同，1公里可能是好几圈。规则手册说，仍须跑满8000米。{2}",
    },
    {
      name: "8个站点，按顺序",
      why: "SkiErg 1000米。推雪橇50米。拉雪橇50米。波比跳远80米。划船1000米。农夫行走200米。沙袋箭步蹲100米。药球上墙100次。{1}{2}",
      how: "HYROX说，SkiErg锻炼手臂、肩和核心；推雪橇锻炼下半身和后链；拉雪橇锻炼臀、背、肱二头肌和躯干；农夫行走锻炼上背、核心和握力；箭步蹲锻炼大腿和臀。{1}",
      dose: "重量，公开组女子 / 公开组男子（精英组女子同）：推雪橇102 / 152公斤（225 / 335磅），含雪橇；拉雪橇78 / 103公斤（172 / 227磅）；农夫行走2 × 16 / 2 × 24公斤（35 / 53磅）；箭步蹲沙袋10 / 20公斤（22 / 44磅）；药球4 / 6公斤（9 / 13磅）。精英组男子：推202公斤（445磅），拉153公斤（337磅），农夫行走2 × 32公斤（71磅），沙袋30公斤（66磅），药球9公斤（20磅）。{2}",
    },
    {
      name: "组别：公开组、精英组、双人、接力",
      why: "公开组（Open）是标准比赛。精英组（Pro）重量更大。双人组两人一起跑，每个站点自行分配。接力是四人一队，每人跑2 × 1公里并做1个站点。{1}",
      how: "年龄组：24岁以下（16到24岁），然后每5岁一组，从25-29到85-89，按比赛当天年龄。{2}比赛当天须年满16岁。{2}",
      dose: "HYROX说它适合所有人，从职业运动员到普通健身房爱好者。{1}",
    },
    {
      name: "最耗时间的规则",
      why: "有两分钟的罚时，例如走错进出口拱门，或使用了错误的训练站点。{2}",
      how: "药球上墙：完整深蹲，髋低于膝，球必须击中正确目标。女子2.70米，男子3.00米。否则不计数。{2}",
      dose: "比赛当天只认规则手册。请在hyrox.com/rulebook阅读现行版本。{2}",
    },
    {
      name: "典型完赛成绩是什么样",
      why: "第三方（RoxTimes）对1,274,586次官方完赛的分析：公开组男子典型成绩1:27:59，女子1:36:00。最快的10%：男子低于1:10:40，女子低于1:18:24。{6}",
      how: "在HYROX自己的运动科学报告中，11名业余运动员模拟了一场公开组比赛。中位数86.2分钟：跑步51.2，站点32.8。样本很小。{5}",
      dose: "这些不是目标。但它们说明了一点：跑步是最大的一块。{5}{6}",
    },
    {
      name: "在哪里举办，以及世锦赛",
      why: "2026年11月2日，HYROX赛事查询页列出了2026年11月11日至2027年6月10日的66场赛事，以及覆盖五大洲的36个国家选项。{4}",
      how: "举例：欧洲（都柏林、杜塞尔多夫和巴塞罗那11月11至15日；乌得勒支11月26至30日；伦敦12月2至6日）。北美（丹佛11月12至15日；达拉斯11月18至22日；阿纳海姆12月3至6日）。亚太（首尔11月13至15日；新加坡11月26至29日；墨尔本12月9至13日）。中东与非洲（开罗11月14至15日；迪拜11月27至28日；约翰内斯堡11月26至29日）。拉美（里约热内卢11月21至22日）。{4}",
      dose: "PUMA HYROX世锦赛2027年6月10至13日在香港举行。{4}每个资格赛事中的每个组别提供一个晋级名额。60岁及以上的选手通过公开组晋级。{2}",
    },
    {
      name: "印度只是众多市场之一",
      why: "查询页列出：IndusInd Bank HYROX Gujarat（甘地讷格尔）2026年11月26至28日，HYROX Noida 2027年1月15至17日，以及2027年5月的HYROX Bengaluru。{4}",
      how: "古吉拉特页面称这是HYROX在古吉拉特邦的首秀，此前德里和孟买的赛事已售罄。{7}",
      dose: "赛制相同，重量相同。报名信息在各赛事页面。我不引用费用。",
    },
  ],
  enoughHeading: "我不会声称的事",
  enough: [
    "这里的完赛成绩数字来自第三方。我没有找到HYROX公布的官方平均或目标成绩。{6}",
    "参赛人数是主办方自己的说法。{3}",
    "赛事日期和场地会变。出行前请查看赛事页面。{4}",
    "这里没有客户成果，也不暗示任何成果。没有价格。",
  ],
  sampleHeading: "体验HYROX的示例训练",
  sample: [
    "热身10分钟：轻松慢跑、髋、肩。",
    "第1轮：1公里轻松跑，然后SkiErg 500米。",
    "第2轮：1公里轻松跑，然后农夫行走100米，轻重量。",
    "第3轮：1公里轻松跑，然后20次药球上墙，轻球。",
    "走5分钟。记下哪个站点最难。",
    "动作变形就停。这是体验顺序，不是测试。",
  ],
  opener: "在考虑你的第一场或下一场HYROX？力量与体能这部分，我在线实时指导。",
  org: "HYROX",
  safetyN: 8,
  safetyExtra: "雪橇训练、波比跳远和药球上墙对膝盖、背部和肩部负担较大。请用数周逐步适应。如果有心脏、血压或关节问题，请先咨询医生。",
};

const ja: Core = {
  metaTitle: "HYROXとは？初レース前に知っておきたい7つのこと | Jalan PT",
  metaDescription: "HYROXとは？1kmのランとステーションを8回：ステーションの順番、kgとlbの重量、部門、ルール、典型的なタイム、世界での開催地。",
  h1: "HYROXとは？初レース前に知っておきたい7つのこと",
  dek: "HYROXはフィットネスレースです。1kmのランを8回、それぞれの後にステーション。どの都市でも同じ形式。主催者が公表していることと、第三者が補っていることをまとめます。",
  crumb: "HYROXとは？",
  whatsappText: "こんにちは Susmit さん、「HYROXとは」の記事を読みました。相談を予約したいです",
  preset: "explain",
  intro: [
    "HYROXはフィットネスレースです。1km走って、ステーションを1つこなす。それを8回。{1}",
    "形式はどこでも同じです。だから、ある都市のタイムを別の都市のタイムと比べられます。{1}",
    "主催者のインド向けサイトによると、2025年に世界80以上のレースで、55万人超の選手と35万人の観客が参加しました。{3}これはHYROX自身の数字で、私は確認できません。",
    "重量は2026/27シーズンのものです。kgを先に、ポンドはカッコ内（四捨五入）。ルールは変わります。レース前に最新のルールブックを読んでください。{2}",
    "これは独立した解説で、HYROX公式の投稿ではありません。",
  ],
  listHeading: "HYROXとは？初レース前に知っておきたい7つのこと",
  items: [
    {
      name: "形式：8ラウンド、8kmのラン",
      why: "約1,000m走り、ワークアウトのステーションを1つ。それを8回。ランの合計は8,000mです。{1}{2}",
      how: "ランとステーションの間のエリアがRoxzone（移行ゾーン）です。ランコース、Roxzone、ステーションが合わさってレースになります。{2}",
      dose: "会場によって異なり、1kmが数周になることもあります。ルールブックは、それでも8,000m全体を走ると述べています。{2}",
    },
    {
      name: "8つのステーション（順番どおり）",
      why: "SkiErg 1,000m。スレッドプッシュ50m。スレッドプル50m。バーピーブロードジャンプ80m。ロー1,000m。ファーマーズキャリー200m。サンドバッグランジ100m。ウォールボール100回。{1}{2}",
      how: "HYROXによれば、SkiErgは腕・肩・体幹、スレッドプッシュは下半身と後面の連鎖、スレッドプルは臀部・背中・上腕二頭筋・体幹、ファーマーズキャリーは上背部・体幹・握力、ランジは太ももと臀部を使います。{1}",
      dose: "重量、オープン女子 / オープン男子（プロ女子も同じ）：スレッドプッシュ102 / 152kg（225 / 335lb）スレッド込み。スレッドプル78 / 103kg（172 / 227lb）。キャリー2 × 16 / 2 × 24kg（35 / 53lb）。ランジのバッグ10 / 20kg（22 / 44lb）。ウォールボール4 / 6kg（9 / 13lb）。プロ男子：プッシュ202kg（445lb）、プル153kg（337lb）、キャリー2 × 32kg（71lb）、バッグ30kg（66lb）、ボール9kg（20lb）。{2}",
    },
    {
      name: "部門：オープン、プロ、ダブルス、リレー",
      why: "オープンが標準のレースです。プロはより重い重量。ダブルスは2人で一緒に走り、各ステーションを自由に分担します。リレーは4人チームで、各自が2 × 1kmを走り、1ステーションをこなします。{1}",
      how: "年齢区分：24歳未満（16〜24歳）、その後は25-29から85-89まで5歳刻み。レース当日の年齢で決まります。{2}レース当日に16歳以上であることが必要です。{2}",
      dose: "HYROXは、プロの選手から日常的にジムに通う人まで、誰のためのものだとしています。{1}",
    },
    {
      name: "時間を失いがちなルール",
      why: "2分のペナルティがあります。たとえば、間違ったIN/OUTアーチを通る、間違ったステーションを使う場合です。{2}",
      how: "ウォールボール：しっかりしゃがみ、股関節が膝より下に入り、ボールが正しいターゲットに当たること。女子2.70m、男子3.00m。満たさなければノーレップです。{2}",
      dose: "当日はルールブックだけが基準です。最新版はhyrox.com/rulebookで読めます。{2}",
    },
    {
      name: "典型的なフィニッシュタイム",
      why: "第三者（RoxTimes）による1,274,586件の公式完走の分析：オープン男子の典型は1:27:59、オープン女子は1:36:00。上位10%は男子1:10:40未満、女子1:18:24未満。{6}",
      how: "HYROX自身のスポーツ科学レポートでは、11人のレクリエーション選手がオープンのレースを模擬。中央値は86.2分：ラン51.2分、ステーション32.8分。非常に小さなサンプルです。{5}",
      dose: "これらは目標ではありません。ただ1つ示しているのは、ランが最大のブロックだということです。{5}{6}",
    },
    {
      name: "開催地と世界選手権",
      why: "2026年11月2日時点で、HYROXのレース検索には2026年11月11日から2027年6月10日までの66イベントと、5大陸にまたがる36の国の選択肢が載っていました。{4}",
      how: "例：ヨーロッパ（ダブリン、デュッセルドルフ、バルセロナ 11月11〜15日；ユトレヒト 11月26〜30日；ロンドン 12月2〜6日）。北米（デンバー 11月12〜15日；ダラス 11月18〜22日；アナハイム 12月3〜6日）。アジア太平洋（ソウル 11月13〜15日；シンガポール 11月26〜29日；メルボルン 12月9〜13日）。中東とアフリカ（カイロ 11月14〜15日；ドバイ 11月27〜28日；ヨハネスブルグ 11月26〜29日）。中南米（リオデジャネイロ 11月21〜22日）。{4}",
      dose: "PUMA HYROX世界選手権は2027年6月10〜13日、香港です。{4}予選となる各大会の各クラスに、出場枠が1つあります。60歳以上はオープンで出場権を得ます。{2}",
    },
    {
      name: "インドは数ある市場のひとつ",
      why: "検索には、IndusInd Bank HYROX Gujarat（ガンディナガル）2026年11月26〜28日、HYROX Noida 2027年1月15〜17日、HYROX Bengaluru 2027年5月が載っています。{4}",
      how: "グジャラートのページは、デリーとムンバイの完売イベントに続く、グジャラート初のHYROXだとしています。{7}",
      dose: "形式も重量も同じです。エントリー情報は各イベントページにあります。参加費は書きません。",
    },
  ],
  enoughHeading: "私が主張しないこと",
  enough: [
    "ここのフィニッシュタイムの数字は第三者のものです。HYROXが公表する公式の平均や目標タイムは見つけられませんでした。{6}",
    "参加者数は主催者自身の主張です。{3}",
    "イベントの日程や会場は変わります。移動の前にイベントページを確認してください。{4}",
    "ここにクライアントの成果はなく、ほのめかしもありません。価格もなし。",
  ],
  sampleHeading: "HYROXを味見するサンプルセッション",
  sample: [
    "ウォームアップ10分：軽いジョグ、股関節、肩。",
    "ラウンド1：1kmを楽に走り、SkiErg 500m。",
    "ラウンド2：1kmを楽に走り、ファーマーズキャリー100m（軽め）。",
    "ラウンド3：1kmを楽に走り、軽いボールでウォールボール20回。",
    "5分歩く。どのステーションが一番きつかったかメモ。",
    "フォームが崩れたら止める。順番の味見であり、テストではありません。",
  ],
  opener: "初めてのHYROX、または次のHYROXを考えていますか？筋力とコンディショニングの部分を、オンラインでライブ指導します。",
  org: "HYROX",
  safetyN: 8,
  safetyExtra: "スレッド種目、バーピーブロードジャンプ、ウォールボールは、膝、腰、肩に負担がかかります。数週間かけて慣らしてください。心臓、血圧、関節に持病がある場合は、先に医師に相談を。",
};

const gu: Core = {
  metaTitle: "HYROX શું છે? પહેલી રેસ પહેલાં જાણવા જેવી 7 બાબતો | Jalan PT",
  metaDescription: "HYROX શું છે? 1 કિમી દોડ અને એક સ્ટેશનના આઠ રાઉન્ડ: ક્રમ મુજબ સ્ટેશન, કિગ્રા અને lb માં વજન, ડિવિઝન, નિયમો, સામાન્ય સમય અને વિશ્વમાં ક્યાં યોજાય છે.",
  h1: "HYROX શું છે? પહેલી રેસ પહેલાં જાણવા જેવી 7 બાબતો",
  dek: "HYROX એક ફિટનેસ રેસ છે. 1 કિમીની આઠ દોડ, દરેક પછી એક સ્ટેશન. દરેક શહેરમાં એ જ ફૉર્મેટ. આયોજક શું પ્રકાશિત કરે છે, અને ત્રીજા પક્ષ શું ઉમેરે છે, તે અહીં છે.",
  crumb: "HYROX શું છે?",
  whatsappText: "નમસ્તે સુસ્મિત, મેં HYROX શું છે તે લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવું છે",
  preset: "explain",
  intro: [
    "HYROX એક ફિટનેસ રેસ છે. તમે 1 કિમી દોડો છો, પછી એક સ્ટેશન કરો છો. આવું 8 વાર.{1}",
    "ફૉર્મેટ બધે એક જ છે. એટલે એક શહેરનો સમય બીજા શહેરના સમય સાથે સરખાવી શકાય.{1}",
    "આયોજકની ઇન્ડિયા સાઇટ કહે છે કે 2025 માં દુનિયાભરની 80 થી વધુ રેસમાં 550,000 થી વધુ ઍથ્લીટ અને 350,000 પ્રેક્ષકો આવ્યા.{3} આ HYROX નો પોતાનો આંકડો છે. હું તે ચકાસી શકતો નથી.",
    "વજન 2026/27 સિઝનનાં છે. પહેલાં કિલોગ્રામ, કૌંસમાં પાઉન્ડ (રાઉન્ડ કરેલા). નિયમો બદલાય છે. રેસ પહેલાં હાલનું રૂલબુક વાંચો.{2}",
    "આ સ્વતંત્ર સમજૂતી છે, HYROX ની સત્તાવાર પોસ્ટ નહીં.",
  ],
  listHeading: "HYROX શું છે? પહેલી રેસ પહેલાં જાણવા જેવી 7 બાબતો",
  items: [
    {
      name: "ફૉર્મેટ: 8 રાઉન્ડ, 8 કિમી દોડ",
      why: "લગભગ 1,000 મીટર દોડો. પછી એક વર્કઆઉટ સ્ટેશન. આઠ વાર. કુલ દોડ 8,000 મીટર.{1}{2}",
      how: "દોડ અને સ્ટેશન વચ્ચેનો ભાગ Roxzone છે, એક ટ્રાન્ઝિશન ઝોન. રન કોર્સ, Roxzone અને સ્ટેશન મળીને રેસ બને છે.{2}",
      dose: "સ્થળો અલગ હોય છે, એટલે 1 કિમી ઘણા લૅપનું હોઈ શકે. રૂલબુક કહે છે કે પૂરા 8,000 મીટર તો દોડાય જ છે.{2}",
    },
    {
      name: "ક્રમ મુજબ 8 સ્ટેશન",
      why: "SkiErg 1,000 મીટર. સ્લેડ પુશ 50 મીટર. સ્લેડ પુલ 50 મીટર. બર્પી બ્રૉડ જમ્પ 80 મીટર. રો 1,000 મીટર. ફાર્મર્સ કૅરી 200 મીટર. સૅન્ડબૅગ લંજ 100 મીટર. વૉલ બૉલ, 100 રેપ.{1}{2}",
      how: "HYROX મુજબ SkiErg હાથ, ખભા અને કોર પર કામ કરે છે, સ્લેડ પુશ નીચલું શરીર અને પોસ્ટીરિયર ચેઇન પર, સ્લેડ પુલ ગ્લૂટ્સ, પીઠ, બાઇસેપ્સ અને ટ્રંક પર, ફાર્મર્સ કૅરી ઉપલી પીઠ, કોર અને ગ્રિપ પર, અને લંજ જાંઘ અને ગ્લૂટ્સ પર.{1}",
      dose: "વજન, ઓપન મહિલા / ઓપન પુરુષ (પ્રો મહિલા પણ): સ્લેડ પુશ 102 / 152 કિગ્રા (225 / 335 lb) સ્લેડ સહિત; સ્લેડ પુલ 78 / 103 કિગ્રા (172 / 227 lb); કૅરી 2 × 16 / 2 × 24 કિગ્રા (35 / 53 lb); લંજ બૅગ 10 / 20 કિગ્રા (22 / 44 lb); વૉલ બૉલ 4 / 6 કિગ્રા (9 / 13 lb). પ્રો પુરુષ: પુશ 202 કિગ્રા (445 lb), પુલ 153 કિગ્રા (337 lb), કૅરી 2 × 32 કિગ્રા (71 lb), બૅગ 30 કિગ્રા (66 lb), બૉલ 9 કિગ્રા (20 lb).{2}",
    },
    {
      name: "ડિવિઝન: ઓપન, પ્રો, ડબલ્સ, રિલે",
      why: "ઓપન પ્રમાણભૂત રેસ છે. પ્રોમાં ભારે વજન. ડબલ્સમાં બે જણ સાથે દોડે છે અને દરેક સ્ટેશન પોતાની રીતે વહેંચે છે. રિલેમાં ચાર જણની ટીમ, દરેક 2 × 1 કિમી દોડે છે અને 1 સ્ટેશન કરે છે.{1}",
      how: "એજ ગ્રૂપ: 24 થી ઓછા (16 થી 24), પછી 25-29 થી 85-89 સુધી 5-5 વર્ષના ગ્રૂપ, રેસના દિવસની ઉંમર મુજબ.{2} રેસના દિવસે ઉંમર ઓછામાં ઓછી 16 હોવી જોઈએ.{2}",
      dose: "HYROX કહે છે કે તે બધા માટે છે, વ્યાવસાયિક ઍથ્લીટથી લઈને રોજ જિમ જનારા સુધી.{1}",
    },
    {
      name: "જે નિયમો લોકોનો સમય ખાય છે",
      why: "બે મિનિટની પેનલ્ટી લાગે છે, જેમ કે ખોટા IN કે OUT આર્ચમાંથી પસાર થવા કે ખોટા વર્કઆઉટ સ્ટેશનના ઉપયોગ પર.{2}",
      how: "વૉલ બૉલ: પૂરો સ્ક્વૉટ જેમાં હિપ્સ ઘૂંટણથી નીચે જાય, અને બૉલ સાચા ટાર્ગેટ પર લાગે. મહિલા માટે 2.70 મીટર, પુરુષ માટે 3.00 મીટર. નહીંતર નો-રેપ.{2}",
      dose: "રેસના દિવસે ફક્ત રૂલબુક માન્ય છે. હાલનું hyrox.com/rulebook પર વાંચો.{2}",
    },
    {
      name: "સામાન્ય ફિનિશ કેવો દેખાય છે",
      why: "1,274,586 સત્તાવાર ફિનિશનું ત્રીજા પક્ષનું વિશ્લેષણ (RoxTimes): ઓપન પુરુષનો સામાન્ય સમય 1:27:59, ઓપન મહિલા 1:36:00. સૌથી ઝડપી 10% પુરુષ 1:10:40 થી અને મહિલા 1:18:24 થી ઓછામાં પૂરું કરે છે.{6}",
      how: "HYROX ના પોતાના સ્પોર્ટ્સ-સાયન્સ રિપોર્ટમાં 11 રિક્રિએશનલ ઍથ્લીટે ઓપન રેસનું સિમ્યુલેશન કર્યું. મીડિયન 86.2 મિનિટ: 51.2 દોડ, 32.8 સ્ટેશન. બહુ નાનો નમૂનો.{5}",
      dose: "આ લક્ષ્ય નથી. આ એક વાત બતાવે છે: દોડ સૌથી મોટો ભાગ છે.{5}{6}",
    },
    {
      name: "ક્યાં યોજાય છે, અને વર્લ્ડ ચૅમ્પિયનશિપ",
      why: "2 નવેમ્બર 2026 ના રોજ HYROX ના રેસ ફાઇન્ડરમાં 11 નવેમ્બર 2026 થી 10 જૂન 2027 સુધીની 66 ઇવેન્ટ અને પાંચ ખંડોના 36 કન્ટ્રી વિકલ્પો હતા.{4}",
      how: "ઉદાહરણ: યુરોપ (ડબલિન, ડસેલડૉર્ફ અને બાર્સેલોના 11 થી 15 નવેમ્બર; ઉટ્રેક્ટ 26 થી 30 નવેમ્બર; લંડન 2 થી 6 ડિસેમ્બર). ઉત્તર અમેરિકા (ડેન્વર 12 થી 15 નવેમ્બર; ડલાસ 18 થી 22 નવેમ્બર; ઍનાહાઇમ 3 થી 6 ડિસેમ્બર). એશિયા-પૅસિફિક (સિઓલ 13 થી 15 નવેમ્બર; સિંગાપોર 26 થી 29 નવેમ્બર; મેલબર્ન 9 થી 13 ડિસેમ્બર). મધ્ય પૂર્વ અને આફ્રિકા (કૈરો 14 થી 15 નવેમ્બર; દુબઈ 27 થી 28 નવેમ્બર; જોહાનિસબર્ગ 26 થી 29 નવેમ્બર). લેટિન અમેરિકા (રિયો ડી જાનેરો 21 થી 22 નવેમ્બર).{4}",
      dose: "PUMA HYROX વર્લ્ડ ચૅમ્પિયનશિપ હૉંગકૉંગમાં 10 થી 13 જૂન 2027 છે.{4} દરેક ક્વોલિફાઇંગ ઇવેન્ટમાં દરેક રેસ ક્લાસ એક ક્વોલિફિકેશન સ્લૉટ આપે છે. 60 અને તેથી વધુ ઉંમરના રેસર ઓપન દ્વારા ક્વોલિફાય થાય છે.{2}",
    },
    {
      name: "ભારત ઘણાં બજારોમાંથી એક છે",
      why: "ફાઇન્ડરમાં IndusInd Bank HYROX Gujarat (ગાંધીનગર) 26 થી 28 નવેમ્બર 2026, HYROX Noida 15 થી 17 જાન્યુઆરી 2027, અને HYROX Bengaluru મે 2027 માં દર્શાવ્યાં છે.{4}",
      how: "ગુજરાત પેજ તેને ગુજરાતમાં HYROX ની શરૂઆત કહે છે, દિલ્હી અને મુંબઈની સોલ્ડ-આઉટ ઇવેન્ટ પછી.{7}",
      dose: "એ જ ફૉર્મેટ, એ જ વજન. એન્ટ્રીની માહિતી દરેક ઇવેન્ટ પેજ પર છે. હું ફી લખતો નથી.",
    },
  ],
  enoughHeading: "જે હું દાવો નહીં કરું",
  enough: [
    "અહીંના ફિનિશ-ટાઇમ આંકડા ત્રીજા પક્ષના છે. HYROX નો કોઈ સત્તાવાર સરેરાશ કે લક્ષ્ય સમય મને મળ્યો નથી.{6}",
    "ભાગીદારીના આંકડા આયોજકનો પોતાનો દાવો છે.{3}",
    "ઇવેન્ટની તારીખો અને સ્થળ બદલાય છે. પ્રવાસ પહેલાં ઇવેન્ટ પેજ જુઓ.{4}",
    "અહીં કોઈ ક્લાયન્ટ પરિણામ નથી, અને તેનો ઇશારો પણ નથી. કોઈ કિંમત નથી.",
  ],
  sampleHeading: "HYROX ચાખવા એક સેમ્પલ સેશન",
  sample: [
    "વૉર્મ-અપ, 10 મિનિટ: હળવી જૉગ, હિપ્સ, ખભા.",
    "રાઉન્ડ 1: 1 કિમી સરળ દોડ, પછી SkiErg 500 મીટર.",
    "રાઉન્ડ 2: 1 કિમી સરળ દોડ, પછી ફાર્મર્સ કૅરી 100 મીટર, હળવું.",
    "રાઉન્ડ 3: 1 કિમી સરળ દોડ, પછી હળવા બૉલ સાથે 20 વૉલ બૉલ.",
    "5 મિનિટ ચાલો. નોંધો કે કયું સ્ટેશન સૌથી અઘરું લાગ્યું.",
    "ફૉર્મ બગડે તો અટકો. આ ક્રમનો સ્વાદ છે, ટેસ્ટ નહીં.",
  ],
  opener: "તમારી પહેલી HYROX, કે પછીની, વિશે વિચારો છો? સ્ટ્રેન્થ અને કન્ડિશનિંગનો ભાગ હું ઓનલાઇન લાઇવ કોચ કરું છું.",
  org: "HYROX",
  safetyN: 8,
  safetyExtra: "સ્લેડનું કામ, બર્પી બ્રૉડ જમ્પ અને વૉલ બૉલ ઘૂંટણ, પીઠ અને ખભા પર ભારે પડે છે. અઠવાડિયાં સુધી ધીમે ધીમે તૈયારી કરો. હૃદય, બ્લડ પ્રેશર કે સાંધાની તકલીફ હોય તો પહેલાં ડૉક્ટરને પૂછો.",
};

const cores: Record<PostLang, Core> = { en, ar, hi, es, zh, ja, gu };
const copy = Object.fromEntries(POST_LANGS.map((lang) => [lang, copyFor(lang, cores[lang])])) as Record<PostLang, PostCopy>;

export const whatIsHyroxPost: BlogPost = {
  slug: WHAT_IS_HYROX_SLUG,
  published: RACE_PUBLISHED,
  modified: RACE_MODIFIED,
  about: "HYROX fitness race",
  sources: WHAT_IS_HYROX_SOURCES,
  copy,
  ctaMid: true,
  seeAlso: ["hyrox-training-plan-for-beginners", "hyrox-vs-deka-vs-athx", "what-is-athx"],
};
