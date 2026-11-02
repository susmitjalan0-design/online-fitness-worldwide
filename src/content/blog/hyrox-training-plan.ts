/**
 * Blog post: "HYROX training plan for beginners: 12 weeks, 7 rules".
 * Citations in copy are written as {n} and point at HYROX_PLAN_SOURCES[n - 1].
 * Race facts: HYROX's own pages and the 2026/27 Singles Rulebook, read 2 Nov 2026 (IST).
 * Weights are given in kg with pounds in brackets (rounded). Finish-time benchmarks are third party
 * (RoxTimes) and labelled as such. The 12-week plan is a sample. No client results, no prices,
 * no implied affiliation. Translations were drafted for this batch and need a native-speaker review.
 */

import { copyFor, RACE_MODIFIED, RACE_PUBLISHED, type Core } from "./common";
import { SRC } from "./race-sources";
import { POST_LANGS, type BlogPost, type PostCopy, type PostLang } from "./shared";

export const HYROX_PLAN_SLUG = "hyrox-training-plan-for-beginners";

export const HYROX_PLAN_SOURCES = [
  SRC.hyroxRace, // 1
  SRC.hyroxRules, // 2
  SRC.hyroxSsac, // 3
  SRC.roxtimes, // 4
  SRC.who, // 5
  SRC.acsm09, // 6
  SRC.schumann, // 7
  SRC.nielsen, // 8
  SRC.bosquet, // 9
  SRC.hyroxFind, // 10
  SRC.riebe, // 11
] as const;

const en: Core = {
  metaTitle: "HYROX Training Plan for Beginners: 12 Weeks, 7 Rules | Jalan PT",
  metaDescription:
    "Sourced 12-week HYROX plan for beginners: 8 stations with weights in kg and lb, why running decides the race, and 7 rules. A sample, not a prescription.",
  h1: "HYROX training plan for beginners: 12 weeks, 7 rules that matter",
  dek: "Eight rounds. One kilometre of running, then one station. Here is how a coach would build the 12 weeks, with the race facts checked against HYROX's own pages.",
  crumb: "HYROX training plan",
  whatsappText: "Hi Susmit, I read the HYROX training plan article and want to book a consultation",
  preset: "train",
  intro: [
    "HYROX is 8 rounds. Each round is a 1 km run, then one station. Same format in every city.{1}",
    "This post gives you 7 rules and a 12-week sample plan. Rules first. Plan after.",
    "It is general. It can't know your run pace, your lifts, your injuries or your race date. A coach in the session can.",
    "Weights are the 2026/27 season's, in kg with pounds in brackets (rounded). Rules change. Read the current rulebook before race day.{2}",
    "This is independent coaching. It is not an official HYROX plan.",
  ],
  listHeading: "HYROX training plan for beginners: 7 rules that matter",
  items: [
    {
      name: "Know the race you are training for",
      why: "8 rounds of a 1 km run plus a station, in this order: SkiErg 1,000 m, sled push 50 m, sled pull 50 m, burpee broad jumps 80 m, row 1,000 m, farmers carry 200 m, sandbag lunges 100 m, wall balls 100 reps.{1}{2}",
      how: "Open women: sled push 102 kg (225 lb) and pull 78 kg (172 lb), both including the sled; carry 2 × 16 kg (35 lb); lunge bag 10 kg (22 lb); wall ball 4 kg (9 lb) to 2.70 m (about 9 ft). Open men and Pro women: push 152 kg (335 lb), pull 103 kg (227 lb), carry 2 × 24 kg (53 lb), bag 20 kg (44 lb), ball 6 kg (13 lb); target 3.00 m (about 10 ft) for men, 2.70 m for Pro women.{2}",
      dose: "Pro men: push 202 kg (445 lb), pull 153 kg (337 lb), carry 2 × 32 kg (71 lb), bag 30 kg (66 lb), ball 9 kg (20 lb). Anyone can enter Open. You must be 16 or older on race day.{2}",
    },
    {
      name: "Respect the running",
      why: "In HYROX's own sports-science report, 11 recreational athletes simulated an Open race. The median was 86.2 minutes: 51.2 running and 32.8 on the stations. Tiny sample. Read it as a hint, not a law.{3}",
      how: "Typical Open finish times in RoxTimes' analysis of 1,274,586 official finishes: men 1:27:59, women 1:36:00.{4} That is a third-party median, not an official target. Your first goal is to finish well, not to match a median.",
      dose: "So run 3 times a week. Most of it easy. You should be able to talk.",
    },
    {
      name: "Build the base before you load it",
      why: "The WHO says adults should do 150 to 300 minutes of moderate aerobic activity a week, plus muscle-strengthening on 2 or more days.{5} That is your floor, not your finish line.",
      how: "Raise running volume in small steps. In one study of 874 novice runners, those who raised weekly distance by more than 30% over two weeks seemed more vulnerable to distance-related injuries than those under 10%. The study was exploratory and the result was not statistically significant.{8}",
      dose: "Weeks 1 to 4: 3 easy runs and 2 strength days. No hero sessions.",
    },
    {
      name: "Lift for the stations",
      why: "Sleds, carries, lunges and wall balls are strength under fatigue. ACSM recommends 2 to 3 strength days a week for novices, at loads around 8 to 12 reps to failure.{6}",
      how: "Squat, hinge, push, pull, carry. Add station practice after the lifts are solid.",
      dose: "A meta-analysis of 43 studies found that adding aerobic training to strength training made no clear difference to maximal strength or muscle size, but explosive strength was lower, more so when both were in the same session.{7} Split runs and lifts when you can.",
    },
    {
      name: "Practise the stations that cost time",
      why: "Typical Open splits (men / women, RoxTimes): sled pull 4:58 / 5:47, burpee broad jumps 5:38 / 6:45, wall balls 7:03 / 6:42, Roxzone transitions 7:24 / 7:57. Third-party medians.{4}",
      how: "Once a week, run 1 km, then practise one or two stations. Technique first. Then weight.",
      dose: "HYROX itself says to try the sled push at least once before race day, in grippy shoes.{1}",
    },
    {
      name: "Rehearse once, not every week",
      why: "A half simulation (4 rounds, run plus station) shows you your pacing and your weak station.",
      how: "Do it around week 9 or 10. Race weights or lighter. Then rest.",
      dose: "Full simulations too often will leave you tired on race day.",
    },
    {
      name: "Taper for two weeks, not zero",
      why: "A meta-analysis of tapering found the best results from a 2-week taper with training volume cut by 41 to 60%, with intensity and frequency kept.{9}",
      how: "Cut the volume. Keep a few short, sharp efforts. Same number of sessions, shorter.",
      dose: "Race week: nothing new. Check the rulebook, your ID, your shoes.",
    },
  ],
  enoughHeading: "Pick a race, and what this plan can't do",
  enough: [
    "Where to race: on 2 November 2026 HYROX's official race finder listed 66 events from 11 November 2026 to 10 June 2027, and its country filter listed 36 options across five continents.{10}",
    "You will find dates in Europe, the US and Canada, Latin America, the Middle East, Africa, Asia-Pacific, Australia and New Zealand, and India.{10} Check the event page for your date.",
    "Count back 12 weeks from your race. If you have less, compress the base. Don't skip the taper.",
    "No client results here, and none implied. No prices. Entry fees are on each event page.",
  ],
  sampleHeading: "A 12-week sample plan",
  sample: [
    "Weekly shape: Mon strength A (squat, hinge, push, carry). Tue easy run, 30 to 40 minutes. Wed station practice, 30 minutes. Thu rest or a walk. Fri strength B (lunge, pull, press, carry). Sat easy run, 40 to 60 minutes. Sun rest.",
    "Weeks 1 to 4, base: 3 easy runs of 20 to 40 minutes, growing slowly. 2 strength days, 3 sets of 8 to 12. Stations: light, for technique.",
    "Weeks 5 to 8, build: 3 runs a week, one with 4 × 1 km at steady, controlled effort and 2 minutes of walking between. Strength heavier, 3 to 4 sets of 6 to 10. Once a week: 1 km, then a station, 3 rounds.",
    "Weeks 9 and 10, specific: one half simulation of 4 rounds. Practise your weakest station twice a week.",
    "Weeks 11 and 12, taper: about 40 to 60% less volume across the two weeks. Same number of sessions. A few short efforts at race pace.",
    "Adjust it to your body, your health and your history. If a week goes wrong, repeat the week. Don't double up.",
  ],
  opener: "Want this built around your run pace, your lifts and your race date? I coach HYROX preparation live, online.",
  org: "HYROX",
  safetyN: 11,
  safetyExtra: "Sled pushes, burpee broad jumps and wall balls are hard on knees, back and shoulders. Build the load over weeks. Ask a doctor first if you have a heart, blood-pressure or joint condition.",
};

const ar: Core = {
  metaTitle: "خطة تدريب HYROX للمبتدئين: 12 أسبوعاً و7 قواعد | Jalan PT",
  metaDescription: "خطة تدريب HYROX للمبتدئين بمصادر: المحطات الثماني بالأوزان بالكيلوغرام والرطل، ولماذا يحسم الجري السباق، و7 قواعد. نموذج وليس وصفة.",
  h1: "خطة تدريب HYROX للمبتدئين: 12 أسبوعاً و7 قواعد مهمة",
  dek: "ثماني جولات. كيلومتر جري ثم محطة. هكذا يبني المدرب الأسابيع الاثني عشر، مع مطابقة معلومات السباق على صفحات HYROX نفسها.",
  crumb: "خطة تدريب HYROX",
  whatsappText: "مرحباً سوسميت، قرأت مقال خطة تدريب HYROX وأريد حجز استشارة",
  preset: "train",
  intro: [
    "HYROX ثماني جولات. كل جولة كيلومتر جري ثم محطة. الصيغة نفسها في كل مدينة.{1}",
    "هذا المقال يعطيك 7 قواعد وخطة نموذجية من 12 أسبوعاً. القواعد أولاً. ثم الخطة.",
    "هي خطة عامة. لا تعرف وتيرة جريك ولا أوزانك ولا إصاباتك ولا موعد سباقك. المدرب داخل الجلسة يعرف.",
    "الأوزان لموسم 2026/27، بالكيلوغرام والرطل بين قوسين (مقرّبة). القواعد تتغير. اقرأ الدليل الحالي قبل السباق.{2}",
    "هذا تدريب مستقل. وليس خطة رسمية من HYROX.",
  ],
  listHeading: "خطة تدريب HYROX للمبتدئين: 7 قواعد مهمة",
  items: [
    {
      name: "اعرف السباق الذي تتدرب له",
      why: "8 جولات من جري 1 كم ثم محطة، بهذا الترتيب: SkiErg 1000 م، دفع الزلاجة 50 م، سحب الزلاجة 50 م، قفزات بيربي طويلة 80 م، تجديف 1000 م، حمل المزارع 200 م، اندفاعات بكيس رمل 100 م، 100 رمية كرة حائط.{1}{2}",
      how: "فئة النساء Open: دفع الزلاجة 102 كغ (225 رطلاً) وسحبها 78 كغ (172 رطلاً)، شاملة الزلاجة؛ الحمل 2 × 16 كغ (35 رطلاً)؛ كيس الاندفاعات 10 كغ (22 رطلاً)؛ كرة الحائط 4 كغ (9 أرطال) إلى 2.70 م (نحو 9 أقدام). الرجال Open والنساء Pro: دفع 152 كغ (335 رطلاً)، سحب 103 كغ (227 رطلاً)، حمل 2 × 24 كغ (53 رطلاً)، كيس 20 كغ (44 رطلاً)، كرة 6 كغ (13 رطلاً)؛ الهدف 3.00 م (نحو 10 أقدام) للرجال و2.70 م للنساء Pro.{2}",
      dose: "رجال Pro: دفع 202 كغ (445 رطلاً)، سحب 153 كغ (337 رطلاً)، حمل 2 × 32 كغ (71 رطلاً)، كيس 30 كغ (66 رطلاً)، كرة 9 كغ (20 رطلاً). يستطيع أي شخص دخول Open. يجب أن يكون عمرك 16 عاماً أو أكثر يوم السباق.{2}",
    },
    {
      name: "احترم الجري",
      why: "في تقرير HYROX العلمي الرياضي، حاكى 11 رياضياً ترفيهياً سباق Open. كان الوسيط 86.2 دقيقة: 51.2 جرياً و32.8 على المحطات. عينة صغيرة جداً. اقرأها كإشارة لا كقانون.{3}",
      how: "الأزمنة النموذجية في Open بحسب تحليل RoxTimes لـ 1,274,586 نهاية رسمية: الرجال 1:27:59 والنساء 1:36:00.{4} هذا وسيط من جهة خارجية، وليس هدفاً رسمياً. هدفك الأول أن تنهي جيداً، لا أن تطابق وسيطاً.",
      dose: "لذلك اجرِ 3 مرات في الأسبوع. معظمها بسهولة. يجب أن تستطيع الكلام.",
    },
    {
      name: "ابنِ الأساس قبل أن تحمّله",
      why: "تقول منظمة الصحة العالمية إن على البالغين ممارسة 150 إلى 300 دقيقة أسبوعياً من النشاط الهوائي المعتدل، إضافة إلى تقوية العضلات في يومين أو أكثر.{5} هذا حدّك الأدنى، لا خط نهايتك.",
      how: "ارفع حجم الجري بخطوات صغيرة. في دراسة على 874 عدّاءً مبتدئاً، بدا أن من زادوا المسافة الأسبوعية بأكثر من 30% خلال أسبوعين أكثر عرضة لإصابات مرتبطة بالمسافة ممن زادوا أقل من 10%. الدراسة استكشافية والنتيجة غير دالة إحصائياً.{8}",
      dose: "الأسابيع 1 إلى 4: 3 جريات سهلة ويومان للقوة. لا جلسات بطولية.",
    },
    {
      name: "ارفع الأثقال من أجل المحطات",
      why: "الزلاجات والحمل والاندفاعات ورمي الكرة هي قوة تحت التعب. يوصي ACSM بيومين إلى 3 أيام قوة أسبوعياً للمبتدئين، بأحمال نحو 8 إلى 12 تكراراً حتى الإنهاك.{6}",
      how: "سكوات، ثني الورك، دفع، سحب، حمل. أضف تمرين المحطات بعد أن تثبت الرفعات.",
      dose: "وجد تحليل جمعي لـ 43 دراسة أن إضافة التدريب الهوائي إلى تدريب القوة لم يُحدث فرقاً واضحاً في القوة القصوى أو حجم العضلة، لكن القوة الانفجارية كانت أقل، وأكثر عند الجمع في الجلسة نفسها.{7} افصل الجري عن الرفع متى استطعت.",
    },
    {
      name: "تمرّن على المحطات التي تأكل الوقت",
      why: "أزمنة Open النموذجية (رجال / نساء، RoxTimes): سحب الزلاجة 4:58 / 5:47، قفزات البيربي 5:38 / 6:45، رمي كرة الحائط 7:03 / 6:42، الانتقالات (Roxzone) 7:24 / 7:57. أوساط من جهة خارجية.{4}",
      how: "مرة في الأسبوع اجرِ 1 كم ثم تمرّن على محطة أو محطتين. التقنية أولاً. ثم الوزن.",
      dose: "تقول HYROX نفسها جرّب دفع الزلاجة مرة على الأقل قبل السباق، بحذاء ذي قبضة جيدة.{1}",
    },
    {
      name: "بروفة مرة واحدة، لا كل أسبوع",
      why: "المحاكاة النصفية (4 جولات من جري ومحطة) تريك وتيرتك ومحطتك الأضعف.",
      how: "افعلها نحو الأسبوع 9 أو 10. بأوزان السباق أو أخف. ثم استرح.",
      dose: "المحاكاة الكاملة المتكررة ستتركك متعباً يوم السباق.",
    },
    {
      name: "خفّف الحمل أسبوعين، لا صفراً",
      why: "وجد تحليل جمعي للتخفيف (tapering) أن أفضل النتائج مع تخفيف لأسبوعين يُخفض فيه حجم التدريب بنسبة 41 إلى 60% مع الإبقاء على الشدة والتكرار.{9}",
      how: "اخفض الحجم. أبقِ بعض الجهود القصيرة الحادة. العدد نفسه من الجلسات، أقصر.",
      dose: "أسبوع السباق: لا جديد. تحقق من الدليل وهويتك وحذائك.",
    },
  ],
  enoughHeading: "اختر سباقاً، وما لا تستطيعه هذه الخطة",
  enough: [
    "أين تسابق: في 2 نوفمبر 2026 عرض باحث السباقات الرسمي لـ HYROX ما مجموعه 66 فعالية من 11 نوفمبر 2026 إلى 10 يونيو 2027، وعرض مرشّح الدول 36 خياراً عبر خمس قارات.{10}",
    "ستجد مواعيد في أوروبا والولايات المتحدة وكندا وأمريكا اللاتينية والشرق الأوسط وأفريقيا وآسيا والمحيط الهادئ وأستراليا ونيوزيلندا والهند.{10} راجع صفحة الفعالية لموعدك.",
    "عُدّ 12 أسبوعاً إلى الوراء من سباقك. إن كان لديك أقل، اضغط مرحلة الأساس. لا تتخطَّ التخفيف.",
    "لا نتائج عملاء هنا، ولا إيحاء بها. لا أسعار. رسوم المشاركة في صفحة كل فعالية.",
  ],
  sampleHeading: "خطة نموذجية لـ 12 أسبوعاً",
  sample: [
    "شكل الأسبوع: الإثنين قوة A (سكوات، ثني ورك، دفع، حمل). الثلاثاء جري سهل 30 إلى 40 دقيقة. الأربعاء تمرين محطات 30 دقيقة. الخميس راحة أو مشي. الجمعة قوة B (اندفاعات، سحب، ضغط، حمل). السبت جري سهل 40 إلى 60 دقيقة. الأحد راحة.",
    "الأسابيع 1 إلى 4، الأساس: 3 جريات سهلة من 20 إلى 40 دقيقة تزداد ببطء. يومان للقوة، 3 مجموعات من 8 إلى 12. المحطات: خفيفة لتعلّم التقنية.",
    "الأسابيع 5 إلى 8، البناء: 3 جريات أسبوعياً، إحداها 4 × 1 كم بجهد ثابت ومضبوط مع مشي دقيقتين بينها. قوة أثقل، 3 إلى 4 مجموعات من 6 إلى 10. مرة أسبوعياً: 1 كم ثم محطة، 3 جولات.",
    "الأسبوعان 9 و10، التخصص: محاكاة نصفية واحدة من 4 جولات. تمرّن على أضعف محطة مرتين أسبوعياً.",
    "الأسبوعان 11 و12، التخفيف: حجم أقل بنحو 40 إلى 60% عبر الأسبوعين. العدد نفسه من الجلسات. بعض الجهود القصيرة بوتيرة السباق.",
    "عدّلها بحسب جسمك وصحتك وتاريخك. إن ساء أسبوع، كرّره. لا تضاعف.",
  ],
  opener: "تريد هذا مبنياً على وتيرة جريك وأوزانك وموعد سباقك؟ أدرّب الاستعداد لـ HYROX مباشرة عبر الإنترنت.",
  org: "HYROX",
  safetyN: 11,
  safetyExtra: "دفع الزلاجة وقفزات البيربي ورمي كرة الحائط شاقة على الركبتين والظهر والكتفين. ابنِ الحمل على مدى أسابيع. اسأل طبيباً أولاً إن كانت لديك حالة في القلب أو الضغط أو المفاصل.",
};

const hi: Core = {
  metaTitle: "शुरुआती के लिए HYROX ट्रेनिंग प्लान: 12 हफ़्ते, 7 नियम | Jalan PT",
  metaDescription: "शुरुआती के लिए 12 हफ़्ते का HYROX प्लान, स्रोतों सहित: 8 स्टेशन, किग्रा और lb में वज़न, दौड़ क्यों अहम है, 7 नियम। सैंपल, प्रिस्क्रिप्शन नहीं।",
  h1: "शुरुआती के लिए HYROX ट्रेनिंग प्लान: 12 हफ़्ते, 7 ज़रूरी नियम",
  dek: "आठ राउंड। एक किलोमीटर दौड़, फिर एक स्टेशन। कोच 12 हफ़्ते ऐसे बनाता है, और रेस के तथ्य HYROX के अपने पेजों से मिलाए गए हैं।",
  crumb: "HYROX ट्रेनिंग प्लान",
  whatsappText: "नमस्ते सुस्मित, मैंने HYROX ट्रेनिंग प्लान वाला लेख पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
  preset: "train",
  intro: [
    "HYROX में 8 राउंड हैं। हर राउंड में 1 किमी दौड़, फिर एक स्टेशन। हर शहर में यही फ़ॉर्मैट।{1}",
    "यह पोस्ट 7 नियम और 12 हफ़्ते का सैंपल प्लान देती है। पहले नियम। फिर प्लान।",
    "यह सामान्य है। यह आपकी दौड़ की रफ़्तार, लिफ़्ट, चोट या रेस की तारीख़ नहीं जानता। सेशन में मौजूद कोच जानता है।",
    "वज़न 2026/27 सीज़न के हैं, किग्रा में, पाउंड कोष्ठक में (राउंड किए हुए)। नियम बदलते हैं। रेस से पहले मौजूदा रूलबुक पढ़ें।{2}",
    "यह स्वतंत्र कोचिंग है। यह HYROX का आधिकारिक प्लान नहीं है।",
  ],
  listHeading: "शुरुआती के लिए HYROX ट्रेनिंग प्लान: 7 ज़रूरी नियम",
  items: [
    {
      name: "जिस रेस की ट्रेनिंग कर रहे हैं, उसे जानें",
      why: "1 किमी दौड़ और एक स्टेशन के 8 राउंड, इस क्रम में: SkiErg 1,000 मीटर, स्लेड पुश 50 मीटर, स्लेड पुल 50 मीटर, बर्पी ब्रॉड जंप 80 मीटर, रो 1,000 मीटर, फ़ार्मर्स कैरी 200 मीटर, सैंडबैग लंज 100 मीटर, वॉल बॉल 100 रेप।{1}{2}",
      how: "ओपन महिलाएँ: स्लेड पुश 102 किग्रा (225 lb) और पुल 78 किग्रा (172 lb), स्लेड समेत; कैरी 2 × 16 किग्रा (35 lb); लंज बैग 10 किग्रा (22 lb); वॉल बॉल 4 किग्रा (9 lb), लक्ष्य 2.70 मीटर (लगभग 9 फ़ीट)। ओपन पुरुष और प्रो महिलाएँ: पुश 152 किग्रा (335 lb), पुल 103 किग्रा (227 lb), कैरी 2 × 24 किग्रा (53 lb), बैग 20 किग्रा (44 lb), बॉल 6 किग्रा (13 lb); लक्ष्य पुरुषों के लिए 3.00 मीटर (लगभग 10 फ़ीट), प्रो महिलाओं के लिए 2.70 मीटर।{2}",
      dose: "प्रो पुरुष: पुश 202 किग्रा (445 lb), पुल 153 किग्रा (337 lb), कैरी 2 × 32 किग्रा (71 lb), बैग 30 किग्रा (66 lb), बॉल 9 किग्रा (20 lb)। ओपन में कोई भी एंटर कर सकता है। रेस के दिन उम्र 16 या अधिक होनी चाहिए।{2}",
    },
    {
      name: "दौड़ का सम्मान करें",
      why: "HYROX की अपनी स्पोर्ट्स-साइंस रिपोर्ट में 11 रिक्रिएशनल एथलीटों ने ओपन रेस का सिमुलेशन किया। मीडियन 86.2 मिनट: 51.2 दौड़ और 32.8 स्टेशन। बहुत छोटा सैंपल। इसे संकेत समझें, नियम नहीं।{3}",
      how: "RoxTimes के 1,274,586 आधिकारिक फ़िनिश के विश्लेषण में ओपन का सामान्य फ़िनिश: पुरुष 1:27:59, महिलाएँ 1:36:00।{4} यह तीसरे पक्ष का मीडियन है, आधिकारिक लक्ष्य नहीं। आपका पहला लक्ष्य अच्छे से पूरा करना है, मीडियन छूना नहीं।",
      dose: "इसलिए हफ़्ते में 3 बार दौड़ें। ज़्यादातर आराम से। बात कर पाएँ।",
    },
    {
      name: "लोड डालने से पहले बेस बनाएँ",
      why: "WHO कहता है कि वयस्कों को हफ़्ते में 150 से 300 मिनट मध्यम एरोबिक गतिविधि और 2 या अधिक दिन मसल-स्ट्रेंथनिंग करनी चाहिए।{5} यह आपकी न्यूनतम सीमा है, मंज़िल नहीं।",
      how: "दौड़ का वॉल्यूम छोटे कदमों में बढ़ाएँ। 874 नए धावकों के एक अध्ययन में, जिन्होंने दो हफ़्ते में साप्ताहिक दूरी 30% से ज़्यादा बढ़ाई वे 10% से कम बढ़ाने वालों की तुलना में दूरी-संबंधी चोटों के लिए ज़्यादा संवेदनशील दिखे। अध्ययन खोजपरक था और नतीजा सांख्यिकीय रूप से सार्थक नहीं था।{8}",
      dose: "हफ़्ते 1 से 4: 3 आसान दौड़ और 2 स्ट्रेंथ दिन। कोई हीरोगिरी वाला सेशन नहीं।",
    },
    {
      name: "स्टेशनों के लिए लिफ़्ट करें",
      why: "स्लेड, कैरी, लंज और वॉल बॉल थकान में स्ट्रेंथ हैं। ACSM नए लोगों के लिए हफ़्ते में 2 से 3 स्ट्रेंथ दिन सुझाता है, लगभग 8 से 12 रेप (थकने तक) वाले लोड पर।{6}",
      how: "स्क्वाट, हिंज, पुश, पुल, कैरी। लिफ़्ट पक्की होने के बाद स्टेशन प्रैक्टिस जोड़ें।",
      dose: "43 अध्ययनों के मेटा-विश्लेषण में पाया गया कि स्ट्रेंथ ट्रेनिंग में एरोबिक जोड़ने से अधिकतम स्ट्रेंथ या मसल साइज़ में साफ़ फ़र्क़ नहीं पड़ा, पर विस्फोटक स्ट्रेंथ कम रही, और एक ही सेशन में दोनों करने पर ज़्यादा।{7} जब हो सके, दौड़ और लिफ़्ट अलग रखें।",
    },
    {
      name: "वे स्टेशन अभ्यास करें जो समय खाते हैं",
      why: "ओपन के सामान्य स्प्लिट (पुरुष / महिला, RoxTimes): स्लेड पुल 4:58 / 5:47, बर्पी ब्रॉड जंप 5:38 / 6:45, वॉल बॉल 7:03 / 6:42, Roxzone ट्रांज़िशन 7:24 / 7:57। तीसरे पक्ष के मीडियन।{4}",
      how: "हफ़्ते में एक बार 1 किमी दौड़ें, फिर एक या दो स्टेशन का अभ्यास करें। पहले तकनीक। फिर वज़न।",
      dose: "HYROX खुद कहता है कि रेस से पहले कम से कम एक बार स्लेड पुश आज़माएँ, अच्छी ग्रिप वाले जूतों में।{1}",
    },
    {
      name: "एक बार रिहर्सल करें, हर हफ़्ते नहीं",
      why: "आधा सिमुलेशन (4 राउंड, दौड़ और स्टेशन) आपकी पेसिंग और सबसे कमज़ोर स्टेशन दिखाता है।",
      how: "इसे हफ़्ते 9 या 10 के आसपास करें। रेस वज़न या उससे हल्का। फिर आराम।",
      dose: "बार-बार पूरा सिमुलेशन करने से रेस के दिन थकान रहेगी।",
    },
    {
      name: "दो हफ़्ते टेपर करें, शून्य नहीं",
      why: "टेपरिंग के मेटा-विश्लेषण में सबसे अच्छे नतीजे 2 हफ़्ते के टेपर से मिले, जिसमें ट्रेनिंग वॉल्यूम 41 से 60% घटाया गया और तीव्रता व आवृत्ति बनी रही।{9}",
      how: "वॉल्यूम घटाएँ। कुछ छोटे, तेज़ प्रयास रखें। सेशन उतने ही, पर छोटे।",
      dose: "रेस वीक: कुछ नया नहीं। रूलबुक, अपनी ID और जूते देख लें।",
    },
  ],
  enoughHeading: "रेस चुनें, और यह प्लान क्या नहीं कर सकता",
  enough: [
    "कहाँ रेस करें: 2 नवंबर 2026 को HYROX के आधिकारिक रेस फ़ाइंडर में 11 नवंबर 2026 से 10 जून 2027 तक 66 इवेंट सूचीबद्ध थे, और उसके कंट्री फ़िल्टर में पाँच महाद्वीपों के 36 विकल्प थे।{10}",
    "तारीख़ें यूरोप, अमेरिका और कनाडा, लैटिन अमेरिका, मध्य पूर्व, अफ़्रीका, एशिया-प्रशांत, ऑस्ट्रेलिया और न्यूज़ीलैंड, और भारत में मिलेंगी।{10} अपनी तारीख़ के लिए इवेंट पेज देखें।",
    "अपनी रेस से 12 हफ़्ते पीछे गिनें। कम समय हो तो बेस छोटा करें। टेपर न छोड़ें।",
    "यहाँ कोई क्लाइंट रिज़ल्ट नहीं, और न ही इशारा। कोई क़ीमत नहीं। एंट्री फ़ीस हर इवेंट पेज पर है।",
  ],
  sampleHeading: "12 हफ़्ते का सैंपल प्लान",
  sample: [
    "हफ़्ते का ढाँचा: सोम स्ट्रेंथ A (स्क्वाट, हिंज, पुश, कैरी)। मंगल आसान दौड़, 30 से 40 मिनट। बुध स्टेशन प्रैक्टिस, 30 मिनट। गुरु आराम या वॉक। शुक्र स्ट्रेंथ B (लंज, पुल, प्रेस, कैरी)। शनि आसान दौड़, 40 से 60 मिनट। रवि आराम।",
    "हफ़्ते 1 से 4, बेस: 20 से 40 मिनट की 3 आसान दौड़, धीरे-धीरे बढ़ाते हुए। 2 स्ट्रेंथ दिन, 8 से 12 के 3 सेट। स्टेशन: हल्के, तकनीक के लिए।",
    "हफ़्ते 5 से 8, बिल्ड: हफ़्ते में 3 दौड़, एक में 4 × 1 किमी स्थिर, नियंत्रित प्रयास से, बीच में 2 मिनट वॉक। स्ट्रेंथ भारी, 6 से 10 के 3 से 4 सेट। हफ़्ते में एक बार: 1 किमी, फिर एक स्टेशन, 3 राउंड।",
    "हफ़्ते 9 और 10, स्पेसिफ़िक: 4 राउंड का एक आधा सिमुलेशन। सबसे कमज़ोर स्टेशन का हफ़्ते में दो बार अभ्यास।",
    "हफ़्ते 11 और 12, टेपर: दोनों हफ़्तों में लगभग 40 से 60% कम वॉल्यूम। सेशन उतने ही। रेस पेस पर कुछ छोटे प्रयास।",
    "इसे अपने शरीर, सेहत और इतिहास के हिसाब से बदलें। कोई हफ़्ता बिगड़े तो वही हफ़्ता दोहराएँ। दोगुना न करें।",
  ],
  opener: "चाहते हैं कि यह आपकी दौड़ की रफ़्तार, लिफ़्ट और रेस की तारीख़ के हिसाब से बने? मैं HYROX की तैयारी ऑनलाइन लाइव कोच करता हूँ।",
  org: "HYROX",
  safetyN: 11,
  safetyExtra: "स्लेड पुश, बर्पी ब्रॉड जंप और वॉल बॉल घुटनों, पीठ और कंधों पर भारी पड़ते हैं। लोड हफ़्तों में बढ़ाएँ। दिल, ब्लड प्रेशर या जोड़ों की समस्या हो तो पहले डॉक्टर से पूछें।",
};

const es: Core = {
  metaTitle: "Plan de entrenamiento HYROX para principiantes: 12 semanas, 7 reglas | Jalan PT",
  metaDescription: "Plan HYROX de 12 semanas para principiantes, con fuentes: 8 estaciones con pesos en kg y lb, por qué manda la carrera y 7 reglas. Solo un ejemplo.",
  h1: "Plan de entrenamiento HYROX para principiantes: 12 semanas, 7 reglas que importan",
  dek: "Ocho rondas. Un kilómetro corriendo y una estación. Así construye un entrenador las 12 semanas, con los datos de la carrera contrastados con las páginas de HYROX.",
  crumb: "Plan de entrenamiento HYROX",
  whatsappText: "Hola Susmit, leí el artículo del plan de entrenamiento HYROX y quiero reservar una consulta",
  preset: "train",
  intro: [
    "HYROX son 8 rondas. Cada ronda es 1 km corriendo y una estación. El mismo formato en cada ciudad.{1}",
    "Este artículo te da 7 reglas y un plan de ejemplo de 12 semanas. Primero las reglas. Luego el plan.",
    "Es general. No conoce tu ritmo, tus levantamientos, tus lesiones ni la fecha de tu carrera. Un entrenador en la sesión sí.",
    "Los pesos son los de la temporada 2026/27, en kg con las libras entre paréntesis (redondeadas). Las reglas cambian. Lee el reglamento vigente antes de la carrera.{2}",
    "Es entrenamiento independiente. No es un plan oficial de HYROX.",
  ],
  listHeading: "Plan de entrenamiento HYROX para principiantes: 7 reglas que importan",
  items: [
    {
      name: "Conoce la carrera para la que entrenas",
      why: "8 rondas de 1 km corriendo más una estación, en este orden: SkiErg 1000 m, empuje de trineo 50 m, arrastre de trineo 50 m, burpee con salto largo 80 m, remo 1000 m, paseo del granjero 200 m, zancadas con saco 100 m, wall balls 100 repeticiones.{1}{2}",
      how: "Mujeres Open: empuje 102 kg (225 lb) y arrastre 78 kg (172 lb), incluido el trineo; paseo 2 × 16 kg (35 lb); saco de zancadas 10 kg (22 lb); balón 4 kg (9 lb) a 2,70 m (unos 9 pies). Hombres Open y mujeres Pro: empuje 152 kg (335 lb), arrastre 103 kg (227 lb), paseo 2 × 24 kg (53 lb), saco 20 kg (44 lb), balón 6 kg (13 lb); objetivo a 3,00 m (unos 10 pies) para hombres y 2,70 m para mujeres Pro.{2}",
      dose: "Hombres Pro: empuje 202 kg (445 lb), arrastre 153 kg (337 lb), paseo 2 × 32 kg (71 lb), saco 30 kg (66 lb), balón 9 kg (20 lb). Cualquiera puede inscribirse en Open. Hay que tener 16 años o más el día de la carrera.{2}",
    },
    {
      name: "Respeta la carrera a pie",
      why: "En el informe de ciencia deportiva de HYROX, 11 atletas recreativos simularon una carrera Open. La mediana fue 86,2 minutos: 51,2 corriendo y 32,8 en las estaciones. Muestra diminuta. Tómalo como una pista, no como una ley.{3}",
      how: "Tiempos típicos Open en el análisis de RoxTimes de 1.274.586 llegadas oficiales: hombres 1:27:59, mujeres 1:36:00.{4} Es una mediana de un tercero, no un objetivo oficial. Tu primer objetivo es terminar bien, no igualar una mediana.",
      dose: "Así que corre 3 veces por semana. Casi todo suave. Que puedas hablar.",
    },
    {
      name: "Construye la base antes de cargarla",
      why: "La OMS dice que los adultos deberían hacer de 150 a 300 minutos semanales de actividad aeróbica moderada, más fortalecimiento muscular 2 o más días.{5} Es tu suelo, no tu meta.",
      how: "Sube el volumen de carrera en pasos pequeños. En un estudio con 874 corredores novatos, quienes subieron la distancia semanal más de un 30% en dos semanas parecieron más vulnerables a lesiones ligadas a la distancia que quienes la subieron menos de un 10%. El estudio fue exploratorio y el resultado no fue estadísticamente significativo.{8}",
      dose: "Semanas 1 a 4: 3 carreras suaves y 2 días de fuerza. Sin sesiones heroicas.",
    },
    {
      name: "Levanta pesas para las estaciones",
      why: "Trineos, paseos, zancadas y wall balls son fuerza bajo fatiga. El ACSM recomienda 2 a 3 días de fuerza por semana a novatos, con cargas de unas 8 a 12 repeticiones hasta el fallo.{6}",
      how: "Sentadilla, bisagra de cadera, empuje, tracción, acarreo. Añade práctica de estaciones cuando los levantamientos estén sólidos.",
      dose: "Un metaanálisis de 43 estudios halló que añadir entrenamiento aeróbico al de fuerza no marcó una diferencia clara en fuerza máxima ni en masa muscular, pero la fuerza explosiva fue menor, más si ambos iban en la misma sesión.{7} Separa carrera y pesas cuando puedas.",
    },
    {
      name: "Practica las estaciones que cuestan tiempo",
      why: "Parciales típicos Open (hombres / mujeres, RoxTimes): arrastre de trineo 4:58 / 5:47, burpee con salto largo 5:38 / 6:45, wall balls 7:03 / 6:42, transiciones Roxzone 7:24 / 7:57. Medianas de un tercero.{4}",
      how: "Una vez por semana, corre 1 km y practica una o dos estaciones. Primero técnica. Luego peso.",
      dose: "HYROX mismo dice que pruebes el empuje de trineo al menos una vez antes de la carrera, con zapatillas de buen agarre.{1}",
    },
    {
      name: "Ensaya una vez, no cada semana",
      why: "Una media simulación (4 rondas, carrera más estación) te muestra tu ritmo y tu estación débil.",
      how: "Hazla hacia la semana 9 o 10. Con pesos de carrera o más ligeros. Luego descansa.",
      dose: "Simulaciones completas muy seguidas te dejarán cansado el día de la carrera.",
    },
    {
      name: "Reduce dos semanas, no cero",
      why: "Un metaanálisis sobre el tapering halló los mejores resultados con 2 semanas, recortando el volumen entre un 41 y un 60% y manteniendo intensidad y frecuencia.{9}",
      how: "Recorta el volumen. Mantén unos pocos esfuerzos cortos y vivos. El mismo número de sesiones, más cortas.",
      dose: "Semana de carrera: nada nuevo. Revisa el reglamento, tu documento y tus zapatillas.",
    },
  ],
  enoughHeading: "Elige una carrera, y lo que este plan no puede hacer",
  enough: [
    "Dónde correr: el 2 de noviembre de 2026, el buscador oficial de carreras de HYROX listaba 66 eventos del 11 de noviembre de 2026 al 10 de junio de 2027, y su filtro de países tenía 36 opciones en cinco continentes.{10}",
    "Hay fechas en Europa, EE. UU. y Canadá, Latinoamérica, Oriente Medio, África, Asia-Pacífico, Australia y Nueva Zelanda, e India.{10} Consulta la página del evento para tu fecha.",
    "Cuenta 12 semanas hacia atrás desde tu carrera. Si tienes menos, comprime la base. No te saltes el tapering.",
    "Aquí no hay resultados de clientes, ni se insinúan. Sin precios. La inscripción está en la página de cada evento.",
  ],
  sampleHeading: "Un plan de ejemplo de 12 semanas",
  sample: [
    "Forma de la semana: lun fuerza A (sentadilla, bisagra, empuje, acarreo). Mar carrera suave, 30 a 40 minutos. Mié práctica de estaciones, 30 minutos. Jue descanso o paseo. Vie fuerza B (zancada, tracción, press, acarreo). Sáb carrera suave, 40 a 60 minutos. Dom descanso.",
    "Semanas 1 a 4, base: 3 carreras suaves de 20 a 40 minutos, creciendo despacio. 2 días de fuerza, 3 series de 8 a 12. Estaciones: ligeras, para la técnica.",
    "Semanas 5 a 8, construcción: 3 carreras por semana, una con 4 × 1 km a esfuerzo estable y controlado con 2 minutos caminando entre ellos. Fuerza más pesada, 3 a 4 series de 6 a 10. Una vez por semana: 1 km y una estación, 3 rondas.",
    "Semanas 9 y 10, específico: una media simulación de 4 rondas. Practica tu estación más débil dos veces por semana.",
    "Semanas 11 y 12, tapering: un 40 a 60% menos de volumen entre las dos semanas. El mismo número de sesiones. Unos pocos esfuerzos cortos a ritmo de carrera.",
    "Ajústalo a tu cuerpo, tu salud y tu historia. Si una semana sale mal, repítela. No dobles.",
  ],
  opener: "¿Quieres esto construido sobre tu ritmo, tus levantamientos y la fecha de tu carrera? Entreno la preparación para HYROX en directo y online.",
  org: "HYROX",
  safetyN: 11,
  safetyExtra: "Los empujes de trineo, los burpees con salto largo y los wall balls castigan rodillas, espalda y hombros. Sube la carga a lo largo de semanas. Consulta antes con tu médico si tienes una afección del corazón, la tensión o las articulaciones.",
};

const zh: Core = {
  metaTitle: "HYROX初学者训练计划：12周与7条规则 | Jalan PT",
  metaDescription: "有出处的HYROX初学者12周训练计划：8个站点及公斤与磅重量、为什么跑步决定比赛，以及7条规则。仅为示例，不是处方。",
  h1: "HYROX初学者训练计划：12周与7条重要规则",
  dek: "八轮。每轮先跑一公里，再做一个站点。教练会这样安排12周，比赛事实均对照HYROX自己的页面核实。",
  crumb: "HYROX训练计划",
  whatsappText: "你好Susmit，我读了HYROX训练计划的文章，想预约一次咨询",
  preset: "train",
  intro: [
    "HYROX共8轮。每轮先跑1公里，再做一个站点。每个城市赛制相同。{1}",
    "本文给出7条规则和一份12周示例计划。先规则，后计划。",
    "它是通用的。它不知道你的配速、力量、伤病或比赛日期。训练现场的教练知道。",
    "重量为2026/27赛季的，以公斤计，磅数放在括号里（四舍五入）。规则会变。比赛前请阅读现行规则手册。{2}",
    "这是独立的训练指导，不是HYROX官方计划。",
  ],
  listHeading: "HYROX初学者训练计划：7条重要规则",
  items: [
    {
      name: "了解你要备战的比赛",
      why: "8轮“1公里跑加一个站点”，顺序如下：SkiErg 1000米、推雪橇50米、拉雪橇50米、波比跳远80米、划船1000米、农夫行走200米、沙袋箭步蹲100米、药球上墙100次。{1}{2}",
      how: "公开组女子：推雪橇102公斤（225磅），拉78公斤（172磅），均含雪橇；农夫行走2 × 16公斤（35磅）；箭步蹲沙袋10公斤（22磅）；药球4公斤（9磅），目标高度2.70米（约9英尺）。公开组男子和精英组女子：推152公斤（335磅）、拉103公斤（227磅）、农夫行走2 × 24公斤（53磅）、沙袋20公斤（44磅）、药球6公斤（13磅）；男子目标高度3.00米（约10英尺），精英组女子2.70米。{2}",
      dose: "精英组男子：推202公斤（445磅）、拉153公斤（337磅）、农夫行走2 × 32公斤（71磅）、沙袋30公斤（66磅）、药球9公斤（20磅）。任何人都可报名公开组。比赛当天须年满16岁。{2}",
    },
    {
      name: "尊重跑步",
      why: "在HYROX自己的运动科学报告中，11名业余运动员模拟了一场公开组比赛。中位数为86.2分钟：跑步51.2分钟，站点32.8分钟。样本很小。当作提示，不是定律。{3}",
      how: "RoxTimes分析1,274,586次官方完赛成绩，公开组的典型成绩：男子1:27:59，女子1:36:00。{4}这是第三方的中位数，不是官方目标。你的第一个目标是好好完赛，而不是追平中位数。",
      dose: "所以每周跑3次。大部分轻松跑。能说话的强度。",
    },
    {
      name: "先打基础，再加负荷",
      why: "世卫组织建议成年人每周做150到300分钟中等强度有氧活动，并在2天或以上进行肌肉强化。{5}这是底线，不是终点。",
      how: "跑量小步增加。在一项874名新手跑者的研究中，两周内每周跑量增加超过30%的人，似乎比增加不到10%的人更容易出现与距离相关的损伤。该研究为探索性，结果在统计上不显著。{8}",
      dose: "第1到4周：3次轻松跑，2天力量。不要逞英雄。",
    },
    {
      name: "为站点而练力量",
      why: "雪橇、负重行走、箭步蹲和药球上墙，都是疲劳状态下的力量。ACSM建议新手每周2到3天力量训练，负荷约为8到12次力竭。{6}",
      how: "深蹲、髋铰链、推、拉、负重行走。动作稳定后再加入站点练习。",
      dose: "一项纳入43项研究的荟萃分析发现，在力量训练中加入有氧训练，对最大力量或肌肉量没有明显差异，但爆发力较低，两者放在同一次训练中时更明显。{7}可能的话，把跑步和举重分开。",
    },
    {
      name: "练习最耗时的站点",
      why: "公开组典型分段（男 / 女，RoxTimes）：拉雪橇4:58 / 5:47，波比跳远5:38 / 6:45，药球上墙7:03 / 6:42，Roxzone转换7:24 / 7:57。第三方中位数。{4}",
      how: "每周一次，跑1公里后练一两个站点。先技术，再重量。",
      dose: "HYROX自己也说，赛前至少试推一次雪橇，并穿抓地力好的鞋。{1}",
    },
    {
      name: "演练一次，不要每周都练",
      why: "半程模拟（4轮，跑加站点）能让你看到自己的配速和最弱的站点。",
      how: "大约在第9或10周做。用比赛重量或更轻。然后休息。",
      dose: "太频繁地完整模拟，比赛当天会很疲劳。",
    },
    {
      name: "减量两周，不是不练",
      why: "一项关于减量期的荟萃分析发现，最佳效果来自2周减量，训练量减少41%到60%，同时保持强度和频率。{9}",
      how: "减少量。保留几次短而有力的冲刺。次数不变，每次缩短。",
      dose: "比赛周：不尝试新东西。检查规则手册、证件和鞋子。",
    },
  ],
  enoughHeading: "选一场比赛，以及这份计划做不到的事",
  enough: [
    "在哪里比赛：2026年11月2日，HYROX官方赛事查询页列出了2026年11月11日至2027年6月10日的66场赛事，国家筛选项有36个，覆盖五大洲。{10}",
    "你能找到欧洲、美国和加拿大、拉丁美洲、中东、非洲、亚太、澳大利亚和新西兰，以及印度的赛事日期。{10}请查看赛事页面确认你的日期。",
    "从比赛日倒推12周。如果时间更短，压缩基础期。不要省掉减量期。",
    "这里没有客户成果，也不暗示任何成果。没有价格。报名费在每场赛事页面上。",
  ],
  sampleHeading: "12周示例计划",
  sample: [
    "每周结构：周一力量A（深蹲、髋铰链、推、负重行走）。周二轻松跑30到40分钟。周三站点练习30分钟。周四休息或散步。周五力量B（箭步蹲、拉、推举、负重行走）。周六轻松跑40到60分钟。周日休息。",
    "第1到4周，基础：3次20到40分钟的轻松跑，缓慢增加。2天力量，3组8到12次。站点：轻重量，练技术。",
    "第5到8周，增强：每周3次跑，其中一次4 × 1公里，稳定受控的强度，中间走2分钟。力量加重，3到4组6到10次。每周一次：1公里加一个站点，3轮。",
    "第9和10周，专项：一次4轮的半程模拟。每周两次练习最弱的站点。",
    "第11和12周，减量：两周内总量减少约40%到60%。次数不变。几次比赛配速的短冲刺。",
    "请根据你的身体、健康和经历调整。如果某一周不顺，重复那一周。不要加倍。",
  ],
  opener: "想让它围绕你的配速、力量和比赛日期来制定？我在线实时指导HYROX备赛。",
  org: "HYROX",
  safetyN: 11,
  safetyExtra: "推雪橇、波比跳远和药球上墙对膝盖、背部和肩部负担较大。请用数周逐步加量。如果有心脏、血压或关节问题，请先咨询医生。",
};

const ja: Core = {
  metaTitle: "初心者のHYROXトレーニング計画：12週間と7つのルール | Jalan PT",
  metaDescription: "出典付きの初心者向けHYROX 12週間計画：8つのステーションの重量（kgとlb）、なぜランがレースを決めるか、7つのルール。サンプルであり処方ではありません。",
  h1: "初心者のHYROXトレーニング計画：12週間と大事な7つのルール",
  dek: "8ラウンド。1kmのランのあとに1つのステーション。コーチが12週間をどう組むかを、HYROX自身のページで確認した事実とともに紹介します。",
  crumb: "HYROXトレーニング計画",
  whatsappText: "こんにちは Susmit さん、HYROXトレーニング計画の記事を読みました。相談を予約したいです",
  preset: "train",
  intro: [
    "HYROXは8ラウンド。各ラウンドは1kmのランと1つのステーション。どの都市でも同じ形式です。{1}",
    "この記事では7つのルールと12週間のサンプル計画を紹介します。まずルール。次に計画。",
    "一般的な内容です。あなたのペース、挙上重量、故障、レース日は分かりません。セッションの場にいるコーチなら分かります。",
    "重量は2026/27シーズンのもので、kgで示し、ポンドはカッコ内（四捨五入）です。ルールは変わります。レース前に最新のルールブックを読んでください。{2}",
    "これは独立したコーチングです。HYROX公式の計画ではありません。",
  ],
  listHeading: "初心者のHYROXトレーニング計画：大事な7つのルール",
  items: [
    {
      name: "目指すレースを知る",
      why: "1kmのランとステーションを8ラウンド。順番はこうです：SkiErg 1,000m、スレッドプッシュ50m、スレッドプル50m、バーピーブロードジャンプ80m、ロー1,000m、ファーマーズキャリー200m、サンドバッグランジ100m、ウォールボール100回。{1}{2}",
      how: "オープン女子：プッシュ102kg（225lb）、プル78kg（172lb）、いずれもスレッド込み。キャリー2 × 16kg（35lb）。ランジのバッグ10kg（22lb）。ウォールボール4kg（9lb）、目標2.70m（約9ft）。オープン男子とプロ女子：プッシュ152kg（335lb）、プル103kg（227lb）、キャリー2 × 24kg（53lb）、バッグ20kg（44lb）、ボール6kg（13lb）。目標は男子3.00m（約10ft）、プロ女子2.70m。{2}",
      dose: "プロ男子：プッシュ202kg（445lb）、プル153kg（337lb）、キャリー2 × 32kg（71lb）、バッグ30kg（66lb）、ボール9kg（20lb）。オープンは誰でも出場できます。レース当日に16歳以上であることが必要です。{2}",
    },
    {
      name: "ランを甘く見ない",
      why: "HYROX自身のスポーツ科学レポートでは、11人のレクリエーション選手がオープンのレースを模擬しました。中央値は86.2分：ランが51.2分、ステーションが32.8分。非常に小さなサンプルです。法則ではなく手がかりとして読んでください。{3}",
      how: "RoxTimesが公式の1,274,586件の完走を分析した、オープンの典型的なタイム：男子1:27:59、女子1:36:00。{4}これは第三者の中央値で、公式の目標ではありません。最初の目標は、中央値に合わせることではなく、しっかり完走することです。",
      dose: "だから週3回走ります。ほとんどは楽に。会話ができる強さで。",
    },
    {
      name: "負荷をかける前に土台を作る",
      why: "WHOは、成人に週150〜300分の中強度の有酸素運動と、週2日以上の筋力強化を勧めています。{5}これは最低ラインで、ゴールではありません。",
      how: "走る量は少しずつ増やします。新人ランナー874人の研究では、2週間で週間距離を30%超増やした人は、10%未満の人より距離関連の故障にかかりやすい傾向でした。ただし探索的研究で、結果は統計的に有意ではありませんでした。{8}",
      dose: "1〜4週：楽なラン3回と筋力2日。無理をするセッションはなし。",
    },
    {
      name: "ステーションのために挙げる",
      why: "スレッド、キャリー、ランジ、ウォールボールは、疲れた状態での筋力です。ACSMは初心者に週2〜3日の筋力トレーニングと、約8〜12回で限界になる負荷を勧めています。{6}",
      how: "スクワット、ヒンジ、プッシュ、プル、キャリー。挙上が安定してからステーション練習を足します。",
      dose: "43件の研究のメタ分析では、筋力トレーニングに有酸素運動を加えても、最大筋力や筋量に明確な差は出ませんでしたが、爆発的筋力は低く、同じセッションで行うほど顕著でした。{7}できればランと挙上は分けましょう。",
    },
    {
      name: "時間を食うステーションを練習する",
      why: "オープンの典型的なスプリット（男子 / 女子、RoxTimes）：スレッドプル4:58 / 5:47、バーピーブロードジャンプ5:38 / 6:45、ウォールボール7:03 / 6:42、Roxzone移動7:24 / 7:57。第三者の中央値です。{4}",
      how: "週1回、1km走ってから1〜2種目を練習します。まず技術。次に重量。",
      dose: "HYROX自身も、レース前に少なくとも一度、グリップの良いシューズでスレッドプッシュを試すよう言っています。{1}",
    },
    {
      name: "リハーサルは毎週ではなく1回",
      why: "ハーフのシミュレーション（4ラウンド、ラン＋ステーション）で、ペース配分と苦手なステーションが分かります。",
      how: "9〜10週目あたりに行います。レース重量か、それより軽く。その後は休む。",
      dose: "フルのシミュレーションを頻繁にやると、レース当日に疲れが残ります。",
    },
    {
      name: "テーパーは2週間。ゼロにはしない",
      why: "テーパリングのメタ分析では、強度と頻度を保ちつつトレーニング量を41〜60%減らす2週間のテーパーが最良の結果でした。{9}",
      how: "量を減らす。短く鋭い動きを少し残す。セッション数は同じで、短く。",
      dose: "レース週：新しいことはしない。ルールブック、身分証、シューズを確認。",
    },
  ],
  enoughHeading: "レースを選ぶ。そしてこの計画にできないこと",
  enough: [
    "どこで走るか：2026年11月2日時点で、HYROX公式のレース検索には2026年11月11日から2027年6月10日までの66イベントが載り、国フィルターは5大陸にまたがる36項目でした。{10}",
    "日程はヨーロッパ、米国とカナダ、中南米、中東、アフリカ、アジア太平洋、オーストラリアとニュージーランド、インドにあります。{10}あなたの日程はイベントページで確認してください。",
    "レースから逆算して12週間。それより短い場合は、土台を圧縮します。テーパーは飛ばさないでください。",
    "ここにクライアントの成果はなく、ほのめかしもありません。価格もなし。参加費は各イベントページにあります。",
  ],
  sampleHeading: "12週間のサンプル計画",
  sample: [
    "週の形：月 筋力A（スクワット、ヒンジ、プッシュ、キャリー）。火 楽なラン30〜40分。水 ステーション練習30分。木 休むか散歩。金 筋力B（ランジ、プル、プレス、キャリー）。土 楽なラン40〜60分。日 休み。",
    "1〜4週、土台：20〜40分の楽なランを3回、ゆっくり増やす。筋力2日、8〜12回を3セット。ステーション：技術のために軽く。",
    "5〜8週、強化：週3回のラン、うち1回は4 × 1kmを安定した管理された強度で、間に2分歩く。筋力はより重く、6〜10回を3〜4セット。週1回：1kmのあとにステーション、3ラウンド。",
    "9〜10週、専用：4ラウンドのハーフシミュレーションを1回。一番苦手なステーションを週2回練習。",
    "11〜12週、テーパー：2週間で量を約40〜60%減らす。セッション数は同じ。レースペースの短い動きを少し。",
    "体、健康状態、これまでの経過に合わせて調整してください。ある週がうまくいかなければ、その週を繰り返す。倍にはしない。",
  ],
  opener: "あなたのペース、挙上重量、レース日に合わせて組みたいですか？HYROXの準備を、オンラインでライブ指導しています。",
  org: "HYROX",
  safetyN: 11,
  safetyExtra: "スレッドプッシュ、バーピーブロードジャンプ、ウォールボールは、膝、腰、肩に負担がかかります。数週間かけて負荷を上げてください。心臓、血圧、関節に持病がある場合は、先に医師に相談を。",
};

const gu: Core = {
  metaTitle: "શરૂઆત કરનારા માટે HYROX ટ્રેનિંગ પ્લાન: 12 અઠવાડિયાં, 7 નિયમો | Jalan PT",
  metaDescription: "શરૂઆત કરનારા માટે 12 અઠવાડિયાંનો HYROX પ્લાન, સ્રોતો સાથે: 8 સ્ટેશન, કિગ્રા અને lb માં વજન, 7 નિયમો. સેમ્પલ છે, પ્રિસ્ક્રિપ્શન નહીં.",
  h1: "શરૂઆત કરનારા માટે HYROX ટ્રેનિંગ પ્લાન: 12 અઠવાડિયાં, 7 મહત્વના નિયમો",
  dek: "આઠ રાઉન્ડ. એક કિલોમીટર દોડ, પછી એક સ્ટેશન. કોચ 12 અઠવાડિયાં કેવી રીતે ગોઠવે છે, અને રેસની હકીકતો HYROX ના પોતાના પેજ સાથે ચકાસી છે.",
  crumb: "HYROX ટ્રેનિંગ પ્લાન",
  whatsappText: "નમસ્તે સુસ્મિત, મેં HYROX ટ્રેનિંગ પ્લાનનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવું છે",
  preset: "train",
  intro: [
    "HYROX માં 8 રાઉન્ડ છે. દરેક રાઉન્ડમાં 1 કિમી દોડ, પછી એક સ્ટેશન. દરેક શહેરમાં એ જ ફૉર્મેટ.{1}",
    "આ પોસ્ટ 7 નિયમો અને 12 અઠવાડિયાંનો સેમ્પલ પ્લાન આપે છે. પહેલાં નિયમો. પછી પ્લાન.",
    "આ સામાન્ય છે. તે તમારી દોડની ગતિ, લિફ્ટ, ઈજા કે રેસની તારીખ જાણતો નથી. સેશનમાં હાજર કોચ જાણે છે.",
    "વજન 2026/27 સિઝનનાં છે, કિગ્રામાં, પાઉન્ડ કૌંસમાં (રાઉન્ડ કરેલા). નિયમો બદલાય છે. રેસ પહેલાં હાલનું રૂલબુક વાંચો.{2}",
    "આ સ્વતંત્ર કોચિંગ છે. HYROX નો સત્તાવાર પ્લાન નથી.",
  ],
  listHeading: "શરૂઆત કરનારા માટે HYROX ટ્રેનિંગ પ્લાન: 7 મહત્વના નિયમો",
  items: [
    {
      name: "જે રેસની ટ્રેનિંગ કરો છો તેને જાણો",
      why: "1 કિમી દોડ અને એક સ્ટેશનના 8 રાઉન્ડ, આ ક્રમમાં: SkiErg 1,000 મીટર, સ્લેડ પુશ 50 મીટર, સ્લેડ પુલ 50 મીટર, બર્પી બ્રૉડ જમ્પ 80 મીટર, રો 1,000 મીટર, ફાર્મર્સ કૅરી 200 મીટર, સૅન્ડબૅગ લંજ 100 મીટર, વૉલ બૉલ 100 રેપ.{1}{2}",
      how: "ઓપન મહિલા: સ્લેડ પુશ 102 કિગ્રા (225 lb) અને પુલ 78 કિગ્રા (172 lb), સ્લેડ સહિત; કૅરી 2 × 16 કિગ્રા (35 lb); લંજ બૅગ 10 કિગ્રા (22 lb); વૉલ બૉલ 4 કિગ્રા (9 lb), લક્ષ્ય 2.70 મીટર (લગભગ 9 ફૂટ). ઓપન પુરુષ અને પ્રો મહિલા: પુશ 152 કિગ્રા (335 lb), પુલ 103 કિગ્રા (227 lb), કૅરી 2 × 24 કિગ્રા (53 lb), બૅગ 20 કિગ્રા (44 lb), બૉલ 6 કિગ્રા (13 lb); લક્ષ્ય પુરુષો માટે 3.00 મીટર (લગભગ 10 ફૂટ), પ્રો મહિલા માટે 2.70 મીટર.{2}",
      dose: "પ્રો પુરુષ: પુશ 202 કિગ્રા (445 lb), પુલ 153 કિગ્રા (337 lb), કૅરી 2 × 32 કિગ્રા (71 lb), બૅગ 30 કિગ્રા (66 lb), બૉલ 9 કિગ્રા (20 lb). ઓપનમાં કોઈ પણ એન્ટર કરી શકે. રેસના દિવસે ઉંમર 16 કે વધુ હોવી જોઈએ.{2}",
    },
    {
      name: "દોડનું સન્માન કરો",
      why: "HYROX ના પોતાના સ્પોર્ટ્સ-સાયન્સ રિપોર્ટમાં 11 રિક્રિએશનલ ઍથ્લીટે ઓપન રેસનું સિમ્યુલેશન કર્યું. મીડિયન 86.2 મિનિટ: 51.2 દોડ અને 32.8 સ્ટેશન. બહુ નાનો નમૂનો. તેને સંકેત ગણો, નિયમ નહીં.{3}",
      how: "RoxTimes ના 1,274,586 સત્તાવાર ફિનિશના વિશ્લેષણમાં ઓપનનો સામાન્ય ફિનિશ: પુરુષ 1:27:59, મહિલા 1:36:00.{4} આ ત્રીજા પક્ષનો મીડિયન છે, સત્તાવાર લક્ષ્ય નહીં. તમારું પહેલું લક્ષ્ય સારી રીતે પૂરું કરવાનું છે, મીડિયન સાથે મેળ બેસાડવાનું નહીં.",
      dose: "એટલે અઠવાડિયે 3 વાર દોડો. મોટા ભાગે આરામથી. વાત કરી શકો એટલી.",
    },
    {
      name: "લોડ ઉમેરતાં પહેલાં બેઝ બનાવો",
      why: "WHO કહે છે કે પુખ્તોએ અઠવાડિયે 150 થી 300 મિનિટ મધ્યમ એરોબિક પ્રવૃત્તિ અને 2 કે વધુ દિવસ સ્નાયુ મજબૂત કરતી કસરત કરવી.{5} આ તમારી ન્યૂનતમ હદ છે, અંતિમ રેખા નહીં.",
      how: "દોડનું વૉલ્યુમ નાનાં પગલાંમાં વધારો. 874 નવા દોડવીરોના એક અભ્યાસમાં, જેમણે બે અઠવાડિયામાં સાપ્તાહિક અંતર 30% થી વધુ વધાર્યું તેઓ 10% થી ઓછું વધારનારા કરતાં અંતર-સંબંધિત ઈજાઓ માટે વધુ સંવેદનશીલ જણાયા. અભ્યાસ અન્વેષણાત્મક હતો અને પરિણામ આંકડાકીય રીતે મહત્વનું નહોતું.{8}",
      dose: "અઠવાડિયાં 1 થી 4: 3 સરળ દોડ અને 2 સ્ટ્રેન્થ દિવસ. કોઈ હીરોગીરીવાળું સેશન નહીં.",
    },
    {
      name: "સ્ટેશનો માટે લિફ્ટ કરો",
      why: "સ્લેડ, કૅરી, લંજ અને વૉલ બૉલ થાક હેઠળની સ્ટ્રેન્થ છે. ACSM નવા લોકો માટે અઠવાડિયે 2 થી 3 સ્ટ્રેન્થ દિવસ સૂચવે છે, લગભગ 8 થી 12 રેપ (થાકી જાઓ ત્યાં સુધી) વાળા લોડ પર.{6}",
      how: "સ્ક્વૉટ, હિંજ, પુશ, પુલ, કૅરી. લિફ્ટ પાકી થયા પછી સ્ટેશન પ્રૅક્ટિસ ઉમેરો.",
      dose: "43 અભ્યાસોના મેટા-વિશ્લેષણમાં જણાયું કે સ્ટ્રેન્થ ટ્રેનિંગમાં એરોબિક ઉમેરવાથી મહત્તમ સ્ટ્રેન્થ કે સ્નાયુના કદમાં સ્પષ્ટ ફરક પડ્યો નહીં, પણ વિસ્ફોટક સ્ટ્રેન્થ ઓછી રહી, અને એક જ સેશનમાં બંને કરતાં વધુ.{7} શક્ય હોય ત્યારે દોડ અને લિફ્ટ અલગ રાખો.",
    },
    {
      name: "જે સ્ટેશનો સમય ખાય છે તેની પ્રૅક્ટિસ કરો",
      why: "ઓપનના સામાન્ય સ્પ્લિટ (પુરુષ / મહિલા, RoxTimes): સ્લેડ પુલ 4:58 / 5:47, બર્પી બ્રૉડ જમ્પ 5:38 / 6:45, વૉલ બૉલ 7:03 / 6:42, Roxzone ટ્રાન્ઝિશન 7:24 / 7:57. ત્રીજા પક્ષના મીડિયન.{4}",
      how: "અઠવાડિયે એક વાર 1 કિમી દોડો, પછી એક કે બે સ્ટેશનની પ્રૅક્ટિસ કરો. પહેલાં ટેકનિક. પછી વજન.",
      dose: "HYROX પોતે કહે છે કે રેસ પહેલાં ઓછામાં ઓછી એક વાર સ્લેડ પુશ અજમાવો, સારી ગ્રિપવાળા શૂઝમાં.{1}",
    },
    {
      name: "રિહર્સલ એક વાર કરો, દર અઠવાડિયે નહીં",
      why: "અડધું સિમ્યુલેશન (4 રાઉન્ડ, દોડ અને સ્ટેશન) તમારી ગતિ અને સૌથી નબળું સ્ટેશન બતાવે છે.",
      how: "અઠવાડિયું 9 કે 10 આસપાસ કરો. રેસના વજન કે તેથી હળવા સાથે. પછી આરામ.",
      dose: "વારંવાર પૂરું સિમ્યુલેશન કરશો તો રેસના દિવસે થાક રહેશે.",
    },
    {
      name: "બે અઠવાડિયાં ટેપર કરો, શૂન્ય નહીં",
      why: "ટેપરિંગના મેટા-વિશ્લેષણમાં શ્રેષ્ઠ પરિણામ 2 અઠવાડિયાના ટેપરથી મળ્યાં, જેમાં ટ્રેનિંગ વૉલ્યુમ 41 થી 60% ઘટાડ્યું અને તીવ્રતા તથા આવૃત્તિ જાળવી.{9}",
      how: "વૉલ્યુમ ઘટાડો. થોડા ટૂંકા, તેજ પ્રયાસ રાખો. સેશન એટલાં જ, પણ ટૂંકાં.",
      dose: "રેસ વીક: કંઈ નવું નહીં. રૂલબુક, તમારું ID અને શૂઝ તપાસો.",
    },
  ],
  enoughHeading: "રેસ પસંદ કરો, અને આ પ્લાન શું નથી કરી શકતો",
  enough: [
    "ક્યાં રેસ કરવી: 2 નવેમ્બર 2026 ના રોજ HYROX ના સત્તાવાર રેસ ફાઇન્ડરમાં 11 નવેમ્બર 2026 થી 10 જૂન 2027 સુધીની 66 ઇવેન્ટ હતી, અને તેના કન્ટ્રી ફિલ્ટરમાં પાંચ ખંડોના 36 વિકલ્પો હતા.{10}",
    "તારીખો યુરોપ, અમેરિકા અને કૅનેડા, લેટિન અમેરિકા, મધ્ય પૂર્વ, આફ્રિકા, એશિયા-પૅસિફિક, ઑસ્ટ્રેલિયા અને ન્યૂઝીલૅન્ડ, અને ભારતમાં મળશે.{10} તમારી તારીખ માટે ઇવેન્ટ પેજ જુઓ.",
    "તમારી રેસથી 12 અઠવાડિયાં પાછળ ગણો. ઓછો સમય હોય તો બેઝ ટૂંકો કરો. ટેપર છોડશો નહીં.",
    "અહીં કોઈ ક્લાયન્ટ પરિણામ નથી, અને તેનો ઇશારો પણ નથી. કોઈ કિંમત નથી. એન્ટ્રી ફી દરેક ઇવેન્ટ પેજ પર છે.",
  ],
  sampleHeading: "12 અઠવાડિયાંનો સેમ્પલ પ્લાન",
  sample: [
    "અઠવાડિયાનો આકાર: સોમ સ્ટ્રેન્થ A (સ્ક્વૉટ, હિંજ, પુશ, કૅરી). મંગળ સરળ દોડ, 30 થી 40 મિનિટ. બુધ સ્ટેશન પ્રૅક્ટિસ, 30 મિનિટ. ગુરુ આરામ કે વૉક. શુક્ર સ્ટ્રેન્થ B (લંજ, પુલ, પ્રેસ, કૅરી). શનિ સરળ દોડ, 40 થી 60 મિનિટ. રવિ આરામ.",
    "અઠવાડિયાં 1 થી 4, બેઝ: 20 થી 40 મિનિટની 3 સરળ દોડ, ધીમે ધીમે વધારતાં. 2 સ્ટ્રેન્થ દિવસ, 8 થી 12 ના 3 સેટ. સ્ટેશન: હળવાં, ટેકનિક માટે.",
    "અઠવાડિયાં 5 થી 8, બિલ્ડ: અઠવાડિયે 3 દોડ, એકમાં 4 × 1 કિમી સ્થિર, નિયંત્રિત પ્રયાસથી, વચ્ચે 2 મિનિટ વૉક. સ્ટ્રેન્થ ભારે, 6 થી 10 ના 3 થી 4 સેટ. અઠવાડિયે એક વાર: 1 કિમી, પછી એક સ્ટેશન, 3 રાઉન્ડ.",
    "અઠવાડિયાં 9 અને 10, સ્પેસિફિક: 4 રાઉન્ડનું એક અડધું સિમ્યુલેશન. સૌથી નબળા સ્ટેશનની અઠવાડિયે બે વાર પ્રૅક્ટિસ.",
    "અઠવાડિયાં 11 અને 12, ટેપર: બંને અઠવાડિયામાં લગભગ 40 થી 60% ઓછું વૉલ્યુમ. સેશન એટલાં જ. રેસ-પેસ પર થોડા ટૂંકા પ્રયાસ.",
    "તમારા શરીર, સ્વાસ્થ્ય અને ઇતિહાસ મુજબ બદલો. કોઈ અઠવાડિયું બગડે તો એ જ અઠવાડિયું ફરી કરો. બમણું ન કરો.",
  ],
  opener: "આ તમારી દોડની ગતિ, લિફ્ટ અને રેસની તારીખ મુજબ બનાવવો છે? હું HYROX ની તૈયારી ઓનલાઇન લાઇવ કોચ કરું છું.",
  org: "HYROX",
  safetyN: 11,
  safetyExtra: "સ્લેડ પુશ, બર્પી બ્રૉડ જમ્પ અને વૉલ બૉલ ઘૂંટણ, પીઠ અને ખભા પર ભારે પડે છે. લોડ અઠવાડિયાં સુધી ધીમે ધીમે વધારો. હૃદય, બ્લડ પ્રેશર કે સાંધાની તકલીફ હોય તો પહેલાં ડૉક્ટરને પૂછો.",
};

const cores: Record<PostLang, Core> = { en, ar, hi, es, zh, ja, gu };
const copy = Object.fromEntries(POST_LANGS.map((lang) => [lang, copyFor(lang, cores[lang])])) as Record<PostLang, PostCopy>;

export const hyroxPlanPost: BlogPost = {
  slug: HYROX_PLAN_SLUG,
  published: RACE_PUBLISHED,
  modified: RACE_MODIFIED,
  about: "HYROX training plan for beginners",
  sources: HYROX_PLAN_SOURCES,
  copy,
  ctaMid: true,
  seeAlso: ["what-is-hyrox", "hyrox-vs-deka-vs-athx", "what-is-athx"],
};
