/**
 * Blog post: "DEKA guide: FIT, MILE and STRONG explained, zone by zone".
 * Citations in copy are written as {n} and point at DEKA_GUIDE_SOURCES[n - 1].
 * Zone standards come from the DEKA Rules of Competition v20261015 (standards chart effective 16 Oct 2026; the adult
 * weights are the same on the chart that stays in force for the 2026 World Championship). The women's zone 1 weight is
 * printed inconsistently in pounds on the chart, so this post gives no number for it and points to the rulebook.
 * Finish-time figures are third party and say so. Nothing here implies a DEKA event in India.
 * No client results, no prices, no implied affiliation. Translations were drafted for this batch
 * and need a native-speaker review.
 */

import { copyFor, RACE_MODIFIED, RACE_PUBLISHED, type Core } from "./common";
import { SRC } from "./race-sources";
import { POST_LANGS, type BlogPost, type PostCopy, type PostLang } from "./shared";

export const DEKA_GUIDE_SLUG = "deka-fit-mile-strong-guide";

export const DEKA_GUIDE_SOURCES = [
  SRC.dekaHome, // 1
  SRC.dekaFormats, // 2
  SRC.dekaRules, // 3
  SRC.dekaWorld, // 4
  SRC.dekaFind, // 5
  SRC.dekaSpain, // 6
  SRC.dekaDubai, // 7
  SRC.dekaThai, // 8
  SRC.dekaKracey, // 9
  SRC.riebe, // 10
] as const;

const en: Core = {
  metaTitle: "DEKA FIT, MILE and STRONG Guide: The 10 Zones | Jalan PT",
  metaDescription:
    "DEKA guide: FIT, MILE and STRONG explained zone by zone, with weights in kg and lb, penalties, age groups, and where it runs. Sourced from the DEKA rulebook.",
  h1: "DEKA guide: FIT, MILE and STRONG explained, zone by zone",
  dek: "DEKA is ten fixed zones, in order. The only thing that changes between FIT, MILE and STRONG is the running. Here is each zone, the loads, and the rules that cost time.",
  crumb: "DEKA guide",
  whatsappText: "Hi Susmit, I read the DEKA guide and want to book a consultation",
  preset: "explain",
  intro: [
    "You want to walk into the arena knowing the ten zones.",
    "DEKA is Spartan's fitness race. Ten zones, always in the same order. FIT, MILE and STRONG use the same zones. Only the running changes.{2}",
    "Facts come from the DEKA Rules of Competition v20261015 and Spartan's own pages, read on 2 November 2026. Weights: kg first, pounds in brackets (rounded). The rulebook is the source of record, and it links in the sources below.{3}",
    "Rules change. Read the current rulebook before you race.",
    "Independent guide. Not an official Spartan or DEKA post.",
  ],
  listHeading: "DEKA guide: 7 things to know before you enter",
  items: [
    {
      name: "Three formats, one set of zones",
      why: "Ten zones, in order. FIT: a 500 m run or walk before each zone, 5,000 m in all. MILE: 160 m before each zone, 1,600 m (1 mile). STRONG: no running.{2}{3}",
      how: "FIT is run by Spartan DEKA, usually in large indoor venues, with Elite and Age Group categories.{3} Gym affiliate events are hand timed. World Championship events are chip timed.{3}",
      dose: "Two more formats: ATLAS, ten heavy zones with a 30-minute cap, and FIT Ultra, the FIT course five times, 25 km, with an 8-hour cut-off.{3}",
    },
    {
      name: "Zones 1 to 3: lunge, row, box",
      why: "Zone 1: 30 alternating reverse lunges, 15 a side, with a RAM or a dumbbell. Men: 25 kg (55 lb).{3} For women, the chart prints the pound figure inconsistently, so I give no number. Read the chart in the rulebook.{3}",
      how: "Zone 2: row 500 m. Zone 3: 20 box step-overs or jump-overs on a 60 cm (24 in) box. Both feet must land on the far side.{3}",
      dose: "A missed rep costs 10 seconds in zones 1 and 3, up to 20% of the reps.{3}",
    },
    {
      name: "Zones 4 to 6: med ball, ski, carry",
      why: "Zone 4: 25 med-ball sit-ups. In FIT you throw to a target centred 1.37 m (4.5 ft) up. Men 9 kg (20 lb), women 6 kg (14 lb).{3}",
      how: "Zone 5: ski 500 m. Zone 6: farmers carry, 100 m. Men 27.5 kg (60 lb) per hand, women 17.5 kg (40 lb) per hand. In FIT it is a maze course. In STRONG and MILE it is five lengths of 10 m.{3}",
      dose: "In FIT, dropping the weights costs 30 seconds. Leaving the ski 6 m or more short costs 2 minutes.{3}",
    },
    {
      name: "Zones 7 to 10: bike, dead ball, sled, burpee",
      why: "Zone 7: air bike, 25 calories. Zone 8: dead ball over a 1.22 m (4 ft) frame, 20 reps. Men 27.5 kg (60 lb), women 17.5 kg (40 lb).{3}",
      how: "Zone 9: sled push and pull, 100 m on an approved magnetic sled, five lengths of 10 m. The chart gives a resistance setting, not a weight. Zone 10: 20 weighted burpees. Men: a 20 kg (44 lb) RAM or two 10 kg dumbbells. Women: a 10 kg (22 lb) RAM or two 5 kg dumbbells.{3}",
      dose: "A missed rep costs 20 seconds in zones 8 and 10, and 1:30 per missed length on the sled.{3}",
    },
    {
      name: "The rules that cost time",
      why: "Less than 80% of a zone, or of the running, is an unofficial finish. You get the medal and shirt. Your time is not on the global leaderboard.{3}",
      how: "Zones out of order: 1 minute per violation. A missed running lap: 2 or 3 minutes, by course. Lifting straps and gymnastic-style grips are not allowed. Gloves and lifting belts are.{3}",
      dose: "The current rulebook is the one that counts. It is v20261015 as I write.{3}",
    },
    {
      name: "Categories, age groups and typical times",
      why: "Elite and Age Group. In FIT, Elite individuals can win prize money. Age Group athletes get podium awards.{3} Your age is your age on 30 September of the season: 14 to 17, 18 to 24, then five-year bands from 25 to 29 up to 65 to 69, and 70+. Youth 10 to 13 race lighter.{3}",
      how: "Teams of 2, and of 4 in FIT. Ruck: a 30 lb (13.6 kg) pack for men, 20 lb (9.1 kg) for women.{3}",
      dose: "Third party, from 14,580 ranked results on the 2026 leaderboard to 13 September 2026: median FIT time 48:20 for men and 54:32 for women. I found no official average.{9}",
    },
    {
      name: "Where and when it runs",
      why: "The World Championship is in Fort Worth, Texas, 10 to 13 December 2026. FIT is Thursday 10, MILE Friday 11 and STRONG Saturday 12, all invite-only. Public STRONG heats run on Saturday 12 and Sunday 13 and qualify for the 2027 World Championship.{4}",
      how: "US: Atlanta 7 to 8 Nov 2026, Denver 27 Mar 2027, Sacramento 24 to 25 Apr 2027, Anaheim 8 to 9 May 2027.{5} Spain and Portugal: Tenerife 21 to 22 Nov 2026, Torremolinos 27 to 28 Feb 2027, Lisboa 15 May 2027.{6}",
      dose: "Middle East and Asia-Pacific: DEKA FIT was in Dubai on 26 Sep 2026 and in Bangkok on 1 Nov 2026. Both are past.{7}{8} UK: I could not confirm a date on an official page.",
    },
  ],
  enoughHeading: "What I won't claim",
  enough: [
    "The women's zone 1 weight: the chart prints it inconsistently in pounds. Read the rulebook.{3}",
    "Times here are third party. DEKA publishes no average that I found.{9}",
    "Dates and venues change. Check the event page before you travel.{5}{6}",
    "No prices. Entry fees are on each event page. No client results, none implied.",
  ],
  sampleHeading: "A sample first DEKA practice",
  sample: [
    "Warm-up, 10 minutes.",
    "Run 500 m easy. Zone 1: 30 reverse lunges, light weight.",
    "Run 500 m easy. Zone 2: row 500 m at a steady pace.",
    "Run 500 m easy. Zone 3: 20 step-overs on a 60 cm (24 in) box.",
    "Stop there on day one. Add zones week by week. Write down your time for each.",
  ],
  opener: "You want to walk in knowing the ten zones. You do the work. I coach the lifts, the pacing and the weekly plan, live.",
  org: "Spartan and DEKA",
  safetyN: 10,
  safetyExtra: "Lunges, sled work, dead balls and weighted burpees are hard on knees, back and shoulders. Build up over weeks. Ask a doctor first if you have a heart, blood-pressure or joint condition.",
};

const ar: Core = {
  metaTitle: "دليل DEKA: FIT وMILE وSTRONG والمناطق العشر | Jalan PT",
  metaDescription: "دليل DEKA: شرح FIT وMILE وSTRONG منطقة بمنطقة، مع الأوزان بالكغ والرطل والعقوبات والفئات العمرية وأماكن الإقامة. من دليل قواعد DEKA.",
  h1: "دليل DEKA: شرح FIT وMILE وSTRONG منطقة بمنطقة",
  dek: "DEKA عشر مناطق ثابتة بالترتيب. والفرق الوحيد بين FIT وMILE وSTRONG هو الجري. إليك كل منطقة وأحمالها والقواعد التي تكلّف وقتاً.",
  crumb: "دليل DEKA",
  whatsappText: "مرحباً سوسميت، قرأت دليل DEKA وأريد حجز استشارة",
  preset: "explain",
  intro: [
    "تريد أن تدخل الساحة وأنت تعرف المناطق العشر.",
    "DEKA سباق اللياقة من Spartan. عشر مناطق بالترتيب نفسه دائماً. تستخدم FIT وMILE وSTRONG المناطق نفسها. الجري وحده هو ما يتغير.{2}",
    "المعلومات من دليل قواعد المنافسة DEKA الإصدار v20261015 وصفحات Spartan نفسها، قُرئت في 2 نوفمبر 2026. الأوزان: الكيلوغرام أولاً، والأرطال بين قوسين (مقرّبة). الدليل هو المرجع، وروابطه في المصادر أدناه.{3}",
    "القواعد تتغير. اقرأ الدليل الحالي قبل أن تتسابق.",
    "دليل مستقل. وليس مقالاً رسمياً من Spartan أو DEKA.",
  ],
  listHeading: "دليل DEKA: 7 أشياء تعرفها قبل أن تشارك",
  items: [
    {
      name: "ثلاث صيغ ومجموعة مناطق واحدة",
      why: "عشر مناطق بالترتيب. FIT: جري أو مشي 500 م قبل كل منطقة، 5000 م في المجموع. MILE: 160 م قبل كل منطقة، 1600 م (ميل). STRONG: لا جري.{2}{3}",
      how: "تنظّم Spartan DEKA سباق FIT عادة في قاعات داخلية كبيرة، بفئات نخبة وفئات عمرية.{3} فعاليات النوادي المنتسبة تُحتسب يدوياً. وفعاليات بطولة العالم تُحتسب بشريحة توقيت.{3}",
      dose: "صيغتان أخريان: ATLAS، عشر مناطق ثقيلة بحد 30 دقيقة، وFIT Ultra، أي مسار FIT خمس مرات، 25 كم، بحد أقصى 8 ساعات.{3}",
    },
    {
      name: "المناطق 1 إلى 3: اندفاع وتجديف وصندوق",
      why: "المنطقة 1: 30 اندفاعة خلفية متناوبة، 15 لكل جهة، بـ RAM أو دمبل. الرجال: 25 كغ (55 رطلاً).{3} للنساء يطبع الجدول رقم الأرطال بشكل غير متسق، فلا أذكر رقماً. اقرأ الجدول في الدليل.{3}",
      how: "المنطقة 2: تجديف 500 م. المنطقة 3: 20 صعوداً أو قفزاً فوق صندوق ارتفاعه 60 سم (24 بوصة). يجب أن تهبط القدمان على الجهة الأخرى.{3}",
      dose: "التكرار الفائت يكلّف 10 ثوانٍ في المنطقتين 1 و3، حتى 20% من التكرارات.{3}",
    },
    {
      name: "المناطق 4 إلى 6: كرة طبية وSki وحمل",
      why: "المنطقة 4: 25 تمرين بطن بكرة طبية. في FIT ترمي إلى هدف مركزه على ارتفاع 1.37 م (4.5 قدم). الرجال 9 كغ (20 رطلاً)، النساء 6 كغ (14 رطلاً).{3}",
      how: "المنطقة 5: Ski ‏500 م. المنطقة 6: حمل المزارع، 100 م. الرجال 27.5 كغ (60 رطلاً) لكل يد، النساء 17.5 كغ (40 رطلاً) لكل يد. في FIT هو مسار متاهة. وفي STRONG وMILE هو خمسة أطوال من 10 م.{3}",
      dose: "في FIT إسقاط الأوزان يكلّف 30 ثانية. ومغادرة الـ Ski قبل 6 م أو أكثر من نهايته تكلّف دقيقتين.{3}",
    },
    {
      name: "المناطق 7 إلى 10: دراجة وكرة ميتة وزلاجة وبيربي",
      why: "المنطقة 7: دراجة هوائية، 25 سعرة. المنطقة 8: رفع الكرة الميتة فوق إطار ارتفاعه 1.22 م (4 أقدام)، 20 تكراراً. الرجال 27.5 كغ (60 رطلاً)، النساء 17.5 كغ (40 رطلاً).{3}",
      how: "المنطقة 9: دفع وسحب الزلاجة، 100 م على زلاجة مغناطيسية معتمدة، خمسة أطوال من 10 م. يعطي الجدول إعداد مقاومة لا وزناً. المنطقة 10: 20 بيربي بثقل. الرجال: RAM ‏20 كغ (44 رطلاً) أو دمبلان 10 كغ. النساء: RAM ‏10 كغ (22 رطلاً) أو دمبلان 5 كغ.{3}",
      dose: "التكرار الفائت يكلّف 20 ثانية في المنطقتين 8 و10، و1:30 لكل طول فائت على الزلاجة.{3}",
    },
    {
      name: "القواعد التي تكلّف وقتاً",
      why: "إتمام أقل من 80% من منطقة أو من الجري يعني إنهاءً غير رسمي. تحصل على الميدالية والقميص. ولا يدخل زمنك في لوحة الصدارة العالمية.{3}",
      how: "ترتيب المناطق الخاطئ: دقيقة لكل مخالفة. فوات لفة جري: دقيقتان أو ثلاث، بحسب المسار. أحزمة الرفع وقبضات الجمباز غير مسموحة. القفازات وأحزمة الرفع مسموحة.{3}",
      dose: "الدليل الحالي هو المعتمد. وهو v20261015 وقت كتابتي هذا.{3}",
    },
    {
      name: "الفئات والفئات العمرية والأزمنة المعتادة",
      why: "نخبة وفئات عمرية. في FIT يمكن لأفراد النخبة الفوز بجوائز مالية. ولأصحاب الفئات العمرية جوائز المنصة.{3} عمرك هو عمرك في 30 سبتمبر من الموسم: 14 إلى 17، 18 إلى 24، ثم فئات من خمس سنوات من 25 إلى 29 حتى 65 إلى 69، ثم 70+. والناشئون من 10 إلى 13 بأحمال أخف.{3}",
      how: "فرق من 2، ومن 4 في FIT. Ruck: حقيبة 30 رطلاً (13.6 كغ) للرجال، و20 رطلاً (9.1 كغ) للنساء.{3}",
      dose: "من طرف ثالث، من 14,580 نتيجة مصنّفة في لوحة 2026 حتى 13 سبتمبر 2026: زمن FIT الوسيط 48:20 للرجال و54:32 للنساء. لم أجد متوسطاً رسمياً.{9}",
    },
    {
      name: "أين ومتى تُقام",
      why: "بطولة العالم في فورت وورث، تكساس، من 10 إلى 13 ديسمبر 2026. FIT الخميس 10، وMILE الجمعة 11، وSTRONG السبت 12، كلها بدعوات فقط. وتُقام تصفيات STRONG العامة السبت 12 والأحد 13 وتؤهل لبطولة العالم 2027.{4}",
      how: "الولايات المتحدة: أتلانتا 7 إلى 8 نوفمبر 2026، دنفر 27 مارس 2027، ساكرامنتو 24 إلى 25 أبريل 2027، أناهايم 8 إلى 9 مايو 2027.{5} إسبانيا والبرتغال: تينيريفي 21 إلى 22 نوفمبر 2026، توريمولينوس 27 إلى 28 فبراير 2027، لشبونة 15 مايو 2027.{6}",
      dose: "الشرق الأوسط وآسيا والمحيط الهادئ: أُقيم DEKA FIT في دبي في 26 سبتمبر 2026 وفي بانكوك في 1 نوفمبر 2026. وكلاهما مضى.{7}{8} بريطانيا: لم أستطع تأكيد موعد من صفحة رسمية.",
    },
  ],
  enoughHeading: "ما لن أدّعيه",
  enough: [
    "وزن المنطقة 1 للنساء: يطبع الجدول رقم الأرطال بشكل غير متسق. اقرأ الدليل.{3}",
    "الأزمنة هنا من طرف ثالث. ولم أجد متوسطاً تنشره DEKA.{9}",
    "المواعيد والأماكن تتغير. راجع صفحة الفعالية قبل أن تسافر.{5}{6}",
    "لا أسعار. رسوم المشاركة في صفحة كل فعالية. لا نتائج عملاء، ولا إيحاء بها.",
  ],
  sampleHeading: "أول تمرين DEKA نموذجي",
  sample: [
    "إحماء، 10 دقائق.",
    "اجرِ 500 م بسهولة. المنطقة 1: 30 اندفاعة خلفية بوزن خفيف.",
    "اجرِ 500 م بسهولة. المنطقة 2: تجديف 500 م بوتيرة ثابتة.",
    "اجرِ 500 م بسهولة. المنطقة 3: 20 صعوداً على صندوق 60 سم (24 بوصة).",
    "توقف هنا في اليوم الأول. أضف مناطق أسبوعاً بعد أسبوع. دوّن زمنك لكل منطقة.",
  ],
  opener: "تريد أن تدخل وأنت تعرف المناطق العشر. أنت تؤدي العمل. وأنا أدرّبك على الرفعات والوتيرة والخطة الأسبوعية، مباشرة.",
  org: "Spartan وDEKA",
  safetyN: 10,
  safetyExtra: "الاندفاعات والزلاجة والكرة الميتة والبيربي بثقل شاقة على الركبتين والظهر والكتفين. ابنِ نفسك على مدى أسابيع. اسأل طبيباً أولاً إن كانت لديك حالة في القلب أو الضغط أو المفاصل.",
};

const hi: Core = {
  metaTitle: "DEKA गाइड: FIT, MILE और STRONG के 10 ज़ोन | Jalan PT",
  metaDescription: "DEKA गाइड: FIT, MILE और STRONG ज़ोन-दर-ज़ोन, किग्रा और lb में वज़न, पेनल्टी, आयु वर्ग और कहाँ होता है। DEKA रूलबुक से।",
  h1: "DEKA गाइड: FIT, MILE और STRONG ज़ोन-दर-ज़ोन",
  dek: "DEKA दस तय ज़ोन हैं, क्रम से। FIT, MILE और STRONG में सिर्फ़ दौड़ बदलती है। हर ज़ोन, लोड, और वे नियम जो समय खाते हैं।",
  crumb: "DEKA गाइड",
  whatsappText: "नमस्ते सुस्मित, मैंने DEKA गाइड पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
  preset: "explain",
  intro: [
    "आप दसों ज़ोन जानकर मैदान में उतरना चाहते हैं।",
    "DEKA, Spartan की फ़िटनेस रेस है। दस ज़ोन, हमेशा एक ही क्रम में। FIT, MILE और STRONG में वही ज़ोन हैं। सिर्फ़ दौड़ बदलती है।{2}",
    "तथ्य DEKA रूल्स ऑफ़ कॉम्पिटिशन v20261015 और Spartan के अपने पेजों से हैं, 2 नवंबर 2026 को पढ़े गए। वज़न: पहले किग्रा, कोष्ठक में पाउंड (राउंड किए हुए)। रूलबुक ही असली स्रोत है, और उसका लिंक नीचे स्रोतों में है।{3}",
    "नियम बदलते हैं। रेस से पहले मौजूदा रूलबुक पढ़ें।",
    "स्वतंत्र गाइड। Spartan या DEKA की आधिकारिक पोस्ट नहीं।",
  ],
  listHeading: "DEKA गाइड: शामिल होने से पहले जानने की 7 बातें",
  items: [
    {
      name: "तीन फ़ॉर्मैट, ज़ोन का एक ही सेट",
      why: "दस ज़ोन, क्रम से। FIT: हर ज़ोन से पहले 500 मीटर दौड़ या वॉक, कुल 5,000 मीटर। MILE: हर ज़ोन से पहले 160 मीटर, कुल 1,600 मीटर (1 मील)। STRONG: दौड़ नहीं।{2}{3}",
      how: "FIT Spartan DEKA कराता है, आमतौर पर बड़े इनडोर वेन्यू में, एलीट और एज ग्रुप श्रेणियों के साथ।{3} जिम एफ़िलिएट इवेंट में हाथ से टाइमिंग होती है। वर्ल्ड चैंपियनशिप में चिप टाइमिंग।{3}",
      dose: "दो और फ़ॉर्मैट: ATLAS, दस भारी ज़ोन, 30 मिनट की सीमा, और FIT Ultra, FIT कोर्स पाँच बार, 25 किमी, 8 घंटे की कट-ऑफ़।{3}",
    },
    {
      name: "ज़ोन 1 से 3: लंज, रो, बॉक्स",
      why: "ज़ोन 1: 30 अल्टरनेटिंग रिवर्स लंज, हर तरफ़ 15, RAM या डम्बल के साथ। पुरुष: 25 किग्रा (55 lb)।{3} महिलाओं के लिए चार्ट में पाउंड का आँकड़ा असंगत छपा है, इसलिए मैं कोई संख्या नहीं देता। रूलबुक का चार्ट पढ़ें।{3}",
      how: "ज़ोन 2: रो 500 मीटर। ज़ोन 3: 60 सेमी (24 इंच) के बॉक्स पर 20 स्टेप-ओवर या जंप-ओवर। दोनों पैर दूसरी तरफ़ उतरने चाहिए।{3}",
      dose: "ज़ोन 1 और 3 में छूटे हर रेप पर 10 सेकंड, रेप के 20% तक।{3}",
    },
    {
      name: "ज़ोन 4 से 6: मेड बॉल, स्की, कैरी",
      why: "ज़ोन 4: 25 मेड-बॉल सिट-अप। FIT में आप 1.37 मीटर (4.5 फ़ीट) ऊँचाई पर केंद्रित टारगेट पर फेंकते हैं। पुरुष 9 किग्रा (20 lb), महिलाएँ 6 किग्रा (14 lb)।{3}",
      how: "ज़ोन 5: स्की 500 मीटर। ज़ोन 6: फ़ार्मर्स कैरी, 100 मीटर। पुरुष हर हाथ में 27.5 किग्रा (60 lb), महिलाएँ हर हाथ में 17.5 किग्रा (40 lb)। FIT में यह मेज़ कोर्स है। STRONG और MILE में 10 मीटर की पाँच लंबाइयाँ।{3}",
      dose: "FIT में वज़न गिराने पर 30 सेकंड। स्की 6 मीटर या ज़्यादा बाक़ी छोड़ने पर 2 मिनट।{3}",
    },
    {
      name: "ज़ोन 7 से 10: बाइक, डेड बॉल, स्लेड, बर्पी",
      why: "ज़ोन 7: एयर बाइक, 25 कैलोरी। ज़ोन 8: 1.22 मीटर (4 फ़ीट) के फ़्रेम के ऊपर डेड बॉल, 20 रेप। पुरुष 27.5 किग्रा (60 lb), महिलाएँ 17.5 किग्रा (40 lb)।{3}",
      how: "ज़ोन 9: मंज़ूर मैग्नेटिक स्लेड पर पुश और पुल, 100 मीटर, 10 मीटर की पाँच लंबाइयाँ। चार्ट में वज़न नहीं, रेज़िस्टेंस सेटिंग है। ज़ोन 10: 20 वज़न वाली बर्पी। पुरुष: 20 किग्रा (44 lb) RAM या दो 10 किग्रा डम्बल। महिलाएँ: 10 किग्रा (22 lb) RAM या दो 5 किग्रा डम्बल।{3}",
      dose: "ज़ोन 8 और 10 में छूटे हर रेप पर 20 सेकंड, और स्लेड की हर छूटी लंबाई पर 1:30।{3}",
    },
    {
      name: "वे नियम जो समय खाते हैं",
      why: "किसी ज़ोन या दौड़ का 80% से कम काम अनौपचारिक फ़िनिश है। मेडल और शर्ट मिलती है। आपका समय ग्लोबल लीडरबोर्ड पर नहीं जाता।{3}",
      how: "ज़ोन क्रम से बाहर: हर उल्लंघन पर 1 मिनट। छूटा दौड़ का चक्कर: कोर्स के हिसाब से 2 या 3 मिनट। लिफ़्टिंग स्ट्रैप और जिम्नास्टिक-शैली ग्रिप की अनुमति नहीं। दस्ताने और लिफ़्टिंग बेल्ट की अनुमति है।{3}",
      dose: "मौजूदा रूलबुक ही मायने रखती है। मेरे लिखते समय वह v20261015 है।{3}",
    },
    {
      name: "श्रेणियाँ, आयु वर्ग और सामान्य समय",
      why: "एलीट और एज ग्रुप। FIT में एलीट व्यक्तिगत एथलीट प्राइज़ मनी जीत सकते हैं। एज ग्रुप के एथलीटों को पोडियम अवॉर्ड मिलते हैं।{3} आपकी उम्र सीज़न की 30 सितंबर को आपकी उम्र है: 14 से 17, 18 से 24, फिर 25 से 29 से 65 से 69 तक पाँच-पाँच साल के वर्ग, और 70+। 10 से 13 साल के युवा हल्के लोड पर।{3}",
      how: "2 की टीमें, और FIT में 4 की। रक: पुरुषों के लिए 30 lb (13.6 किग्रा) का पैक, महिलाओं के लिए 20 lb (9.1 किग्रा)।{3}",
      dose: "तीसरे पक्ष से, 13 सितंबर 2026 तक 2026 लीडरबोर्ड के 14,580 रैंक किए गए परिणामों से: FIT का मध्यम समय पुरुषों के लिए 48:20 और महिलाओं के लिए 54:32। मुझे कोई आधिकारिक औसत नहीं मिला।{9}",
    },
    {
      name: "कहाँ और कब होता है",
      why: "वर्ल्ड चैंपियनशिप फ़ोर्ट वर्थ, टेक्सास में, 10 से 13 दिसंबर 2026। FIT गुरुवार 10, MILE शुक्रवार 11 और STRONG शनिवार 12, सभी सिर्फ़ निमंत्रण से। पब्लिक STRONG हीट शनिवार 12 और रविवार 13 को हैं और 2027 वर्ल्ड चैंपियनशिप के लिए क्वालिफ़ाई कराती हैं।{4}",
      how: "अमेरिका: अटलांटा 7 से 8 नवंबर 2026, डेनवर 27 मार्च 2027, सैक्रामेंटो 24 से 25 अप्रैल 2027, एनाहाइम 8 से 9 मई 2027।{5} स्पेन और पुर्तगाल: टेनेरिफ़ 21 से 22 नवंबर 2026, टोरेमोलिनोस 27 से 28 फ़रवरी 2027, लिस्बन 15 मई 2027।{6}",
      dose: "मध्य पूर्व और एशिया-प्रशांत: DEKA FIT दुबई में 26 सितंबर 2026 को और बैंकॉक में 1 नवंबर 2026 को हुआ। दोनों बीत चुके।{7}{8} ब्रिटेन: मैं किसी आधिकारिक पेज पर तारीख़ पक्की नहीं कर सका।",
    },
  ],
  enoughHeading: "जो मैं दावा नहीं करूँगा",
  enough: [
    "महिलाओं के ज़ोन 1 का वज़न: चार्ट में पाउंड असंगत छपे हैं। रूलबुक पढ़ें।{3}",
    "यहाँ के समय तीसरे पक्ष के हैं। मुझे DEKA का प्रकाशित कोई औसत नहीं मिला।{9}",
    "तारीख़ें और वेन्यू बदलते हैं। यात्रा से पहले इवेंट पेज देखें।{5}{6}",
    "कोई क़ीमत नहीं। एंट्री फ़ीस हर इवेंट पेज पर है। कोई क्लाइंट रिज़ल्ट नहीं, और न ही इशारा।",
  ],
  sampleHeading: "पहली DEKA प्रैक्टिस का एक सैंपल",
  sample: [
    "वार्म-अप, 10 मिनट।",
    "500 मीटर आसान दौड़। ज़ोन 1: हल्के वज़न के साथ 30 रिवर्स लंज।",
    "500 मीटर आसान दौड़। ज़ोन 2: स्थिर गति से 500 मीटर रो।",
    "500 मीटर आसान दौड़। ज़ोन 3: 60 सेमी (24 इंच) बॉक्स पर 20 स्टेप-ओवर।",
    "पहले दिन यहीं रुकें। हफ़्ते-दर-हफ़्ते ज़ोन जोड़ें। हर ज़ोन का समय लिखें।",
  ],
  opener: "आप दसों ज़ोन जानकर उतरना चाहते हैं। काम आप करते हैं। लिफ़्ट, पेसिंग और साप्ताहिक योजना मैं लाइव कोच करता हूँ।",
  org: "Spartan और DEKA",
  safetyN: 10,
  safetyExtra: "लंज, स्लेड, डेड बॉल और वज़न वाली बर्पी घुटनों, पीठ और कंधों पर भारी पड़ते हैं। हफ़्तों में तैयारी करें। दिल, ब्लड प्रेशर या जोड़ों की समस्या हो तो पहले डॉक्टर से पूछें।",
};

const es: Core = {
  metaTitle: "Guía DEKA FIT, MILE y STRONG: las 10 zonas | Jalan PT",
  metaDescription: "Guía DEKA: FIT, MILE y STRONG zona por zona, con pesos en kg y lb, penalizaciones, grupos de edad y dónde se celebra. Basada en el reglamento de DEKA.",
  h1: "Guía DEKA: FIT, MILE y STRONG explicados zona por zona",
  dek: "DEKA son diez zonas fijas, en orden. Lo único que cambia entre FIT, MILE y STRONG es la carrera. Aquí está cada zona, las cargas y las reglas que cuestan tiempo.",
  crumb: "Guía DEKA",
  whatsappText: "Hola Susmit, leí la guía de DEKA y quiero reservar una consulta",
  preset: "explain",
  intro: [
    "Quieres entrar en la arena conociendo las diez zonas.",
    "DEKA es la carrera de fitness de Spartan. Diez zonas, siempre en el mismo orden. FIT, MILE y STRONG usan las mismas zonas. Solo cambia la carrera.{2}",
    "Los datos vienen del reglamento DEKA Rules of Competition v20261015 y de las páginas de Spartan, leídos el 2 de noviembre de 2026. Pesos: primero kilos, y las libras entre paréntesis (redondeadas). El reglamento es la fuente de referencia, y está enlazado en las fuentes de abajo.{3}",
    "Las reglas cambian. Lee el reglamento vigente antes de competir.",
    "Guía independiente. No es una publicación oficial de Spartan ni de DEKA.",
  ],
  listHeading: "Guía DEKA: 7 cosas que saber antes de inscribirte",
  items: [
    {
      name: "Tres formatos, un mismo conjunto de zonas",
      why: "Diez zonas, en orden. FIT: 500 m corriendo o andando antes de cada zona, 5.000 m en total. MILE: 160 m antes de cada zona, 1.600 m (1 milla). STRONG: sin carrera.{2}{3}",
      how: "FIT lo organiza Spartan DEKA, normalmente en grandes recintos cubiertos, con categorías Élite y por grupos de edad.{3} Los eventos de gimnasios afiliados se cronometran a mano. Los del Mundial, con chip.{3}",
      dose: "Dos formatos más: ATLAS, diez zonas pesadas con un límite de 30 minutos, y FIT Ultra, el circuito FIT cinco veces, 25 km, con corte a las 8 horas.{3}",
    },
    {
      name: "Zonas 1 a 3: zancada, remo, cajón",
      why: "Zona 1: 30 zancadas atrás alternas, 15 por lado, con un RAM o una mancuerna. Hombres: 25 kg (55 lb).{3} Para las mujeres, la tabla imprime la cifra en libras de forma inconsistente, así que no doy ningún número. Lee la tabla en el reglamento.{3}",
      how: "Zona 2: remo 500 m. Zona 3: 20 pasos o saltos sobre un cajón de 60 cm (24 in). Ambos pies deben caer al otro lado.{3}",
      dose: "Una repetición fallada cuesta 10 segundos en las zonas 1 y 3, hasta el 20 % de las repeticiones.{3}",
    },
    {
      name: "Zonas 4 a 6: balón medicinal, ski, acarreo",
      why: "Zona 4: 25 abdominales con balón medicinal. En FIT lanzas a una diana con el centro a 1,37 m (4,5 ft). Hombres 9 kg (20 lb), mujeres 6 kg (14 lb).{3}",
      how: "Zona 5: ski 500 m. Zona 6: paseo del granjero, 100 m. Hombres 27,5 kg (60 lb) por mano, mujeres 17,5 kg (40 lb) por mano. En FIT es un recorrido en laberinto. En STRONG y MILE son cinco tramos de 10 m.{3}",
      dose: "En FIT, soltar las pesas cuesta 30 segundos. Dejar el ski con 6 m o más sin hacer cuesta 2 minutos.{3}",
    },
    {
      name: "Zonas 7 a 10: bici, balón muerto, trineo, burpee",
      why: "Zona 7: bici de aire, 25 calorías. Zona 8: balón muerto sobre una estructura de 1,22 m (4 ft), 20 repeticiones. Hombres 27,5 kg (60 lb), mujeres 17,5 kg (40 lb).{3}",
      how: "Zona 9: empuje y arrastre de trineo, 100 m en un trineo magnético homologado, cinco tramos de 10 m. La tabla da un ajuste de resistencia, no un peso. Zona 10: 20 burpees con peso. Hombres: un RAM de 20 kg (44 lb) o dos mancuernas de 10 kg. Mujeres: un RAM de 10 kg (22 lb) o dos mancuernas de 5 kg.{3}",
      dose: "Una repetición fallada cuesta 20 segundos en las zonas 8 y 10, y 1:30 por tramo fallado del trineo.{3}",
    },
    {
      name: "Las reglas que cuestan tiempo",
      why: "Menos del 80 % de una zona, o de la carrera, es un final no oficial. Recibes la medalla y la camiseta. Tu tiempo no entra en la clasificación global.{3}",
      how: "Zonas fuera de orden: 1 minuto por infracción. Una vuelta de carrera no hecha: 2 o 3 minutos, según el circuito. No se permiten correas de levantamiento ni agarres de gimnasia. Sí se permiten guantes y cinturones de levantamiento.{3}",
      dose: "Lo que cuenta es el reglamento vigente. Es el v20261015 mientras escribo.{3}",
    },
    {
      name: "Categorías, grupos de edad y tiempos típicos",
      why: "Élite y grupos de edad. En FIT, los individuales Élite pueden ganar premios en metálico. Los de grupos de edad reciben premios de podio.{3} Tu edad es la que tienes el 30 de septiembre de la temporada: 14 a 17, 18 a 24, luego tramos de cinco años de 25 a 29 hasta 65 a 69, y 70+. Los jóvenes de 10 a 13 compiten con menos carga.{3}",
      how: "Equipos de 2, y de 4 en FIT. Ruck: una mochila de 30 lb (13,6 kg) los hombres y de 20 lb (9,1 kg) las mujeres.{3}",
      dose: "De terceros, sobre 14.580 resultados clasificados de la tabla de 2026 hasta el 13 de septiembre de 2026: tiempo mediano en FIT 48:20 los hombres y 54:32 las mujeres. No encontré un promedio oficial.{9}",
    },
    {
      name: "Dónde y cuándo se celebra",
      why: "El Mundial es en Fort Worth, Texas, del 10 al 13 de diciembre de 2026. FIT el jueves 10, MILE el viernes 11 y STRONG el sábado 12, todos con invitación. Las mangas públicas de STRONG son el sábado 12 y el domingo 13 y clasifican para el Mundial de 2027.{4}",
      how: "EE. UU.: Atlanta 7 al 8 de noviembre de 2026, Denver 27 de marzo de 2027, Sacramento 24 al 25 de abril de 2027, Anaheim 8 al 9 de mayo de 2027.{5} España y Portugal: Tenerife 21 al 22 de noviembre de 2026, Torremolinos 27 al 28 de febrero de 2027, Lisboa 15 de mayo de 2027.{6}",
      dose: "Oriente Medio y Asia-Pacífico: DEKA FIT fue en Dubái el 26 de septiembre de 2026 y en Bangkok el 1 de noviembre de 2026. Ambos ya pasaron.{7}{8} Reino Unido: no pude confirmar una fecha en una página oficial.",
    },
  ],
  enoughHeading: "Lo que no voy a afirmar",
  enough: [
    "El peso de la zona 1 de las mujeres: la tabla imprime las libras de forma inconsistente. Lee el reglamento.{3}",
    "Los tiempos de aquí son de terceros. No encontré un promedio que publique DEKA.{9}",
    "Las fechas y las sedes cambian. Mira la página del evento antes de viajar.{5}{6}",
    "Sin precios. La inscripción está en la página de cada evento. Sin resultados de clientes, ni insinuados.",
  ],
  sampleHeading: "Un primer entrenamiento DEKA de ejemplo",
  sample: [
    "Calentamiento, 10 minutos.",
    "Corre 500 m suave. Zona 1: 30 zancadas atrás con poco peso.",
    "Corre 500 m suave. Zona 2: remo 500 m a ritmo constante.",
    "Corre 500 m suave. Zona 3: 20 pasos sobre un cajón de 60 cm (24 in).",
    "Para ahí el primer día. Añade zonas semana a semana. Anota tu tiempo en cada una.",
  ],
  opener: "Quieres entrar conociendo las diez zonas. Tú haces el trabajo. Yo te entreno los levantamientos, el ritmo y el plan semanal, en directo.",
  org: "Spartan y DEKA",
  safetyN: 10,
  safetyExtra: "Las zancadas, el trineo, el balón muerto y los burpees con peso castigan rodillas, espalda y hombros. Progresa durante semanas. Consulta antes con tu médico si tienes una afección del corazón, la tensión o las articulaciones.",
};

const zh: Core = {
  metaTitle: "DEKA FIT、MILE与STRONG指南：10个区域 | Jalan PT",
  metaDescription: "DEKA指南：逐个区域讲解FIT、MILE和STRONG，含公斤和磅的重量、罚时、年龄组和举办地区。依据DEKA规则手册。",
  h1: "DEKA指南：逐个区域讲解FIT、MILE和STRONG",
  dek: "DEKA是按顺序完成的十个固定区域。FIT、MILE和STRONG之间唯一不同的是跑步。这里讲每个区域、负荷，以及会损失时间的规则。",
  crumb: "DEKA指南",
  whatsappText: "你好Susmit，我读了DEKA指南，想预约一次咨询",
  preset: "explain",
  intro: [
    "你想在了解十个区域之后再走进赛场。",
    "DEKA是Spartan的体能赛。十个区域，顺序永远相同。FIT、MILE和STRONG用的是同样的区域。只有跑步不同。{2}",
    "事实来自DEKA竞赛规则v20261015和Spartan自己的页面，于2026年11月2日阅读。重量：先写公斤，磅数放括号里（四舍五入）。规则手册是权威来源，链接在下面的参考来源里。{3}",
    "规则会变。比赛前请阅读最新的规则手册。",
    "独立指南。不是Spartan或DEKA的官方文章。",
  ],
  listHeading: "DEKA指南：报名前要知道的7件事",
  items: [
    {
      name: "三种赛制，同一套区域",
      why: "十个区域，按顺序。FIT：每个区域前跑或走500米，共5000米。MILE：每个区域前160米，共1600米（1英里）。STRONG：不跑步。{2}{3}",
      how: "FIT由Spartan DEKA举办，通常在大型室内场馆，设精英组和年龄组。{3}加盟健身房的赛事为手动计时。世锦赛为芯片计时。{3}",
      dose: "还有两种：ATLAS，十个重负荷区域，限时30分钟；FIT Ultra，FIT赛道跑五遍，25公里，8小时关门。{3}",
    },
    {
      name: "区域1到3：箭步蹲、划船、跳箱",
      why: "区域1：30次交替后撤箭步蹲，每侧15次，用RAM或哑铃。男子：25公斤（55磅）。{3}女子的磅数在表上印得不一致，所以我不给数字。请看规则手册里的表。{3}",
      how: "区域2：划船500米。区域3：在60厘米（24英寸）的箱子上做20次跨上跨下或跳过。双脚必须落在另一侧。{3}",
      dose: "区域1和3每漏一次扣10秒，最多算总次数的20%。{3}",
    },
    {
      name: "区域4到6：药球、滑雪机、负重行走",
      why: "区域4：25次药球仰卧起坐。FIT中要把球投向中心高1.37米（4.5英尺）的靶。男子9公斤（20磅），女子6公斤（14磅）。{3}",
      how: "区域5：滑雪机500米。区域6：农夫行走100米。男子每手27.5公斤（60磅），女子每手17.5公斤（40磅）。FIT是迷宫路线。STRONG和MILE是5段10米。{3}",
      dose: "FIT中掉了重物扣30秒。离开滑雪机时还差6米或更多扣2分钟。{3}",
    },
    {
      name: "区域7到10：单车、死球、雪橇、波比",
      why: "区域7：风阻单车，25卡。区域8：把死球翻过1.22米（4英尺）的框架，20次。男子27.5公斤（60磅），女子17.5公斤（40磅）。{3}",
      how: "区域9：在认可的磁阻雪橇上推拉，100米，5段10米。表上给的是阻力设置，不是重量。区域10：20次负重波比。男子：20公斤（44磅）RAM或两个10公斤哑铃。女子：10公斤（22磅）RAM或两个5公斤哑铃。{3}",
      dose: "区域8和10每漏一次扣20秒，雪橇每漏一段扣1分30秒。{3}",
    },
    {
      name: "会损失时间的规则",
      why: "完成某区域或跑步不足80%，算非正式完赛。你会拿到奖牌和T恤，但成绩不进入全球排行榜。{3}",
      how: "区域顺序错：每次违规1分钟。漏跑一圈：2或3分钟，视赛道而定。不允许助力带和体操式握把。允许手套和举重腰带。{3}",
      dose: "以最新的规则手册为准。我写这篇时是v20261015。{3}",
    },
    {
      name: "组别、年龄组和典型成绩",
      why: "精英组和年龄组。FIT中精英个人可赢得奖金。年龄组选手获颁奖台奖项。{3}年龄按赛季的9月30日计算：14至17岁，18至24岁，然后从25至29岁到65至69岁每5岁一组，以及70+。10至13岁青少年使用较轻的负荷。{3}",
      how: "2人团队，FIT还有4人团队。负重背包组：男子30磅（13.6公斤）背包，女子20磅（9.1公斤）。{3}",
      dose: "第三方数据，基于2026年排行榜截至2026年9月13日的14,580个有排名的成绩：FIT中位成绩男子48:20，女子54:32。我没有找到官方平均成绩。{9}",
    },
    {
      name: "在哪里、何时举办",
      why: "世锦赛在美国得克萨斯州沃思堡，2026年12月10至13日。FIT在周四10日，MILE在周五11日，STRONG在周六12日，均需受邀参加。公开的STRONG分组赛在周六12日和周日13日，可获得2027年世锦赛资格。{4}",
      how: "美国：亚特兰大2026年11月7至8日，丹佛2027年3月27日，萨克拉门托2027年4月24至25日，阿纳海姆2027年5月8至9日。{5}西班牙和葡萄牙：特内里费2026年11月21至22日，托雷莫利诺斯2027年2月27至28日，里斯本2027年5月15日。{6}",
      dose: "中东和亚太：DEKA FIT于2026年9月26日在迪拜、2026年11月1日在曼谷举办。两场都已结束。{7}{8}英国：我没能在官方页面上确认日期。",
    },
  ],
  enoughHeading: "我不会声称的事",
  enough: [
    "女子区域1的重量：表上的磅数印得不一致。请看规则手册。{3}",
    "这里的成绩来自第三方。我没有找到DEKA公布的平均成绩。{9}",
    "日期和场馆会变。出行前请查看赛事页面。{5}{6}",
    "没有价格。报名费在各赛事页面上。没有客户成果，也不暗示。",
  ],
  sampleHeading: "第一次DEKA练习示例",
  sample: [
    "热身，10分钟。",
    "轻松跑500米。区域1：轻重量后撤箭步蹲30次。",
    "轻松跑500米。区域2：稳定配速划船500米。",
    "轻松跑500米。区域3：60厘米（24英寸）箱子上跨上跨下20次。",
    "第一天到此为止。每周增加几个区域。记下每个区域的用时。",
  ],
  opener: "你想在了解十个区域之后再走进赛场。训练由你来做。我实时指导举重、配速和每周计划。",
  org: "Spartan和DEKA",
  safetyN: 10,
  safetyExtra: "箭步蹲、雪橇、死球和负重波比对膝盖、背部和肩部负担较大。请用数周逐步加量。如果有心脏、血压或关节问题，请先咨询医生。",
};

const ja: Core = {
  metaTitle: "DEKA FIT・MILE・STRONGガイド：10のゾーン | Jalan PT",
  metaDescription: "DEKAガイド：FIT、MILE、STRONGをゾーンごとに解説。kgとlbの重量、ペナルティ、年齢区分、開催地。DEKAルールブックに基づきます。",
  h1: "DEKAガイド：FIT・MILE・STRONGをゾーンごとに解説",
  dek: "DEKAは順番に行う10の固定ゾーンです。FIT、MILE、STRONGで違うのはランだけ。各ゾーン、負荷、時間を失うルールをまとめます。",
  crumb: "DEKAガイド",
  whatsappText: "こんにちは Susmit さん、DEKAガイドを読みました。相談を予約したいです",
  preset: "explain",
  intro: [
    "10のゾーンを知ったうえでアリーナに入りたい。",
    "DEKAはSpartanのフィットネスレースです。10のゾーンが、いつも同じ順番で並びます。FIT、MILE、STRONGは同じゾーンを使います。変わるのはランだけです。{2}",
    "事実はDEKA競技規則v20261015とSpartan自身のページから。2026年11月2日に読んだものです。重量：kgを先に、ポンドはカッコ内（四捨五入）。ルールブックが一次情報で、下の出典にリンクがあります。{3}",
    "ルールは変わります。出場前に最新のルールブックを読んでください。",
    "独立したガイドです。SpartanやDEKAの公式記事ではありません。",
  ],
  listHeading: "DEKAガイド：エントリー前に知っておく7つのこと",
  items: [
    {
      name: "3つの形式、同じゾーン",
      why: "10ゾーンを順番に。FIT：各ゾーンの前に500mのランまたはウォーク、合計5,000m。MILE：各ゾーンの前に160m、合計1,600m（1マイル）。STRONG：ランなし。{2}{3}",
      how: "FITはSpartan DEKAが主催し、たいてい大きな屋内会場で、エリートとエイジグループの部門があります。{3}加盟ジムの大会は手計測。世界選手権はチップ計測です。{3}",
      dose: "ほかに2つの形式：ATLAS（重い10ゾーン、制限時間30分）と、FIT Ultra（FITコースを5周、25km、8時間のカットオフ）。{3}",
    },
    {
      name: "ゾーン1〜3：ランジ、ロー、ボックス",
      why: "ゾーン1：RAMまたはダンベルで、交互のリバースランジ30回（左右15回ずつ）。男子：25kg（55lb）。{3}女子は、表のポンドの数字の印刷が一貫していないため、数字は載せません。ルールブックの表を読んでください。{3}",
      how: "ゾーン2：ロー500m。ゾーン3：60cm（24インチ）のボックスをステップオーバーまたはジャンプオーバー20回。両足が反対側に着く必要があります。{3}",
      dose: "ゾーン1と3は、未達のレップ1回につき10秒、レップ数の20%まで。{3}",
    },
    {
      name: "ゾーン4〜6：メディシンボール、スキー、キャリー",
      why: "ゾーン4：メディシンボール・シットアップ25回。FITでは中心が1.37m（4.5フィート）の高さにあるターゲットに投げます。男子9kg（20lb）、女子6kg（14lb）。{3}",
      how: "ゾーン5：スキー500m。ゾーン6：ファーマーズキャリー100m。男子は片手27.5kg（60lb）、女子は片手17.5kg（40lb）。FITは迷路状のコース。STRONGとMILEは10mを5往復分。{3}",
      dose: "FITではウェイトを落とすと30秒。スキーを6m以上残して離れると2分。{3}",
    },
    {
      name: "ゾーン7〜10：バイク、デッドボール、スレッド、バーピー",
      why: "ゾーン7：エアバイク25カロリー。ゾーン8：1.22m（4フィート）のフレームを越えるデッドボール20回。男子27.5kg（60lb）、女子17.5kg（40lb）。{3}",
      how: "ゾーン9：承認されたマグネット式スレッドでのプッシュとプル100m、10mを5往復分。表にあるのは重量ではなく抵抗の設定です。ゾーン10：ウェイト付きバーピー20回。男子：20kg（44lb）のRAM、または10kgのダンベル2つ。女子：10kg（22lb）のRAM、または5kgのダンベル2つ。{3}",
      dose: "ゾーン8と10は未達のレップ1回につき20秒、スレッドは未達の1往復につき1分30秒。{3}",
    },
    {
      name: "時間を失うルール",
      why: "ゾーンまたはランの80%未満は、非公式フィニッシュです。メダルとシャツはもらえますが、タイムはグローバルランキングに載りません。{3}",
      how: "ゾーンの順番違い：違反1回につき1分。ランの周回の取りこぼし：コースにより2分または3分。リフティングストラップと体操用グリップは使えません。グローブとリフティングベルトは使えます。{3}",
      dose: "有効なのは最新のルールブックです。私が書いている時点ではv20261015です。{3}",
    },
    {
      name: "部門、年齢区分、典型的なタイム",
      why: "エリートとエイジグループ。FITでは、エリートの個人は賞金を得られます。エイジグループは表彰台の賞です。{3}年齢はシーズンの9月30日時点：14〜17歳、18〜24歳、その後25〜29歳から65〜69歳まで5歳刻み、そして70歳以上。10〜13歳のユースは軽い負荷です。{3}",
      how: "2人チーム、FITでは4人チームも。ラック：男子は30lb（13.6kg）、女子は20lb（9.1kg）のパック。{3}",
      dose: "第三者データ。2026年ランキングの2026年9月13日までの14,580件のランク入り結果から：FITの中央値は男子48:20、女子54:32。公式な平均は見つかりませんでした。{9}",
    },
    {
      name: "開催地と時期",
      why: "世界選手権は米国テキサス州フォートワース、2026年12月10〜13日。FITは木曜10日、MILEは金曜11日、STRONGは土曜12日で、いずれも招待制。一般向けのSTRONGヒートは土曜12日と日曜13日にあり、2027年世界選手権の予選になります。{4}",
      how: "米国：アトランタ2026年11月7〜8日、デンバー2027年3月27日、サクラメント2027年4月24〜25日、アナハイム2027年5月8〜9日。{5}スペインとポルトガル：テネリフェ2026年11月21〜22日、トレモリノス2027年2月27〜28日、リスボン2027年5月15日。{6}",
      dose: "中東とアジア太平洋：DEKA FITはドバイで2026年9月26日、バンコクで2026年11月1日に開催されました。どちらも終了しています。{7}{8}英国：公式ページで日程を確認できませんでした。",
    },
  ],
  enoughHeading: "主張しないこと",
  enough: [
    "女子のゾーン1の重量：表のポンドの印刷が一貫していません。ルールブックを読んでください。{3}",
    "ここのタイムは第三者のものです。DEKAが公表している平均は見つかりませんでした。{9}",
    "日程と会場は変わります。移動の前に大会ページを確認してください。{5}{6}",
    "価格はなし。参加費は各大会ページにあります。クライアントの成果もなく、ほのめかしもありません。",
  ],
  sampleHeading: "最初のDEKA練習のサンプル",
  sample: [
    "ウォームアップ、10分。",
    "500mを楽に走る。ゾーン1：軽い重量でリバースランジ30回。",
    "500mを楽に走る。ゾーン2：一定のペースでロー500m。",
    "500mを楽に走る。ゾーン3：60cm（24インチ）のボックスでステップオーバー20回。",
    "初日はここまで。週ごとにゾーンを足していきます。各ゾーンのタイムを書き留めましょう。",
  ],
  opener: "10のゾーンを知ったうえで臨みたい。やるのはあなたです。挙上、ペース配分、週ごとの計画を、私がライブで指導します。",
  org: "SpartanとDEKA",
  safetyN: 10,
  safetyExtra: "ランジ、スレッド、デッドボール、ウェイト付きバーピーは、膝、腰、肩に負担がかかります。数週間かけて慣らしてください。心臓、血圧、関節に持病がある場合は、先に医師に相談を。",
};

const gu: Core = {
  metaTitle: "DEKA FIT, MILE અને STRONG ગાઇડ: 10 ઝોન | Jalan PT",
  metaDescription: "DEKA ગાઇડ: FIT, MILE અને STRONG ઝોન-દર-ઝોન, કિગ્રા અને lb માં વજન, પેનલ્ટી, વય જૂથ અને ક્યાં યોજાય છે. DEKA રૂલબુક આધારિત.",
  h1: "DEKA ગાઇડ: FIT, MILE અને STRONG ઝોન-દર-ઝોન",
  dek: "DEKA ક્રમમાં દસ નક્કી ઝોન છે. FIT, MILE અને STRONG વચ્ચે ફક્ત દોડ બદલાય છે. દરેક ઝોન, લોડ, અને સમય ખાતા નિયમો અહીં છે.",
  crumb: "DEKA ગાઇડ",
  whatsappText: "નમસ્તે સુસ્મિત, મેં DEKA ગાઇડ વાંચી અને કન્સલ્ટેશન બુક કરવું છે",
  preset: "explain",
  intro: [
    "તમે દસે ઝોન જાણીને મેદાનમાં ઊતરવા માગો છો.",
    "DEKA એ Spartan ની ફિટનેસ રેસ છે. દસ ઝોન, હંમેશા એ જ ક્રમમાં. FIT, MILE અને STRONG માં એ જ ઝોન છે. ફક્ત દોડ બદલાય છે.{2}",
    "હકીકતો DEKA રૂલ્સ ઑફ કૉમ્પિટિશન v20261015 અને Spartan ના પોતાના પેજ પરથી છે, 2 નવેમ્બર 2026 ના રોજ વાંચેલી. વજન: પહેલાં કિગ્રા, કૌંસમાં પાઉન્ડ (રાઉન્ડ કરેલા). રૂલબુક જ મૂળ સ્રોત છે, અને તેની લિંક નીચે સ્રોતોમાં છે.{3}",
    "નિયમો બદલાય છે. રેસ પહેલાં વર્તમાન રૂલબુક વાંચો.",
    "સ્વતંત્ર ગાઇડ. Spartan કે DEKA ની સત્તાવાર પોસ્ટ નહીં.",
  ],
  listHeading: "DEKA ગાઇડ: જોડાતાં પહેલાં જાણવાની 7 વાતો",
  items: [
    {
      name: "ત્રણ ફોર્મેટ, ઝોનનો એક જ સેટ",
      why: "દસ ઝોન, ક્રમમાં. FIT: દરેક ઝોન પહેલાં 500 મીટર દોડ કે વૉક, કુલ 5,000 મીટર. MILE: દરેક ઝોન પહેલાં 160 મીટર, કુલ 1,600 મીટર (1 માઇલ). STRONG: દોડ નહીં.{2}{3}",
      how: "FIT Spartan DEKA કરાવે છે, સામાન્ય રીતે મોટા ઇન્ડોર સ્થળોએ, એલિટ અને એજ ગ્રુપ શ્રેણીઓ સાથે.{3} જિમ એફિલિએટ ઇવેન્ટમાં હાથે ટાઇમિંગ થાય છે. વર્લ્ડ ચૅમ્પિયનશિપમાં ચિપ ટાઇમિંગ.{3}",
      dose: "બે વધુ ફોર્મેટ: ATLAS, દસ ભારે ઝોન, 30 મિનિટની મર્યાદા, અને FIT Ultra, FIT કોર્સ પાંચ વાર, 25 કિમી, 8 કલાકની કટ-ઑફ.{3}",
    },
    {
      name: "ઝોન 1 થી 3: લંજ, રો, બૉક્સ",
      why: "ઝોન 1: RAM કે ડમ્બલ સાથે 30 અલ્ટરનેટિંગ રિવર્સ લંજ, દરેક બાજુ 15. પુરુષ: 25 કિગ્રા (55 lb).{3} મહિલાઓ માટે ચાર્ટમાં પાઉન્ડનો આંકડો અસંગત છપાયો છે, તેથી હું કોઈ સંખ્યા આપતો નથી. રૂલબુકનો ચાર્ટ વાંચો.{3}",
      how: "ઝોન 2: રો 500 મીટર. ઝોન 3: 60 સેમી (24 ઇંચ) ના બૉક્સ પર 20 સ્ટેપ-ઓવર કે જમ્પ-ઓવર. બંને પગ સામી બાજુ ઊતરવા જોઈએ.{3}",
      dose: "ઝોન 1 અને 3 માં ચૂકેલા દરેક રેપ માટે 10 સેકન્ડ, રેપના 20% સુધી.{3}",
    },
    {
      name: "ઝોન 4 થી 6: મેડ બૉલ, સ્કી, કૅરી",
      why: "ઝોન 4: 25 મેડ-બૉલ સિટ-અપ. FIT માં તમે 1.37 મીટર (4.5 ફૂટ) ઊંચાઈએ કેન્દ્રિત ટાર્ગેટ પર ફેંકો છો. પુરુષ 9 કિગ્રા (20 lb), મહિલા 6 કિગ્રા (14 lb).{3}",
      how: "ઝોન 5: સ્કી 500 મીટર. ઝોન 6: ફાર્મર્સ કૅરી, 100 મીટર. પુરુષ દરેક હાથમાં 27.5 કિગ્રા (60 lb), મહિલા દરેક હાથમાં 17.5 કિગ્રા (40 lb). FIT માં તે મેઝ કોર્સ છે. STRONG અને MILE માં 10 મીટરની પાંચ લંબાઈ.{3}",
      dose: "FIT માં વજન પાડી દો તો 30 સેકન્ડ. સ્કી 6 મીટર કે વધુ બાકી રાખીને છોડો તો 2 મિનિટ.{3}",
    },
    {
      name: "ઝોન 7 થી 10: બાઇક, ડેડ બૉલ, સ્લેડ, બર્પી",
      why: "ઝોન 7: એર બાઇક, 25 કૅલરી. ઝોન 8: 1.22 મીટર (4 ફૂટ) ના ફ્રેમ પરથી ડેડ બૉલ, 20 રેપ. પુરુષ 27.5 કિગ્રા (60 lb), મહિલા 17.5 કિગ્રા (40 lb).{3}",
      how: "ઝોન 9: માન્ય મેગ્નેટિક સ્લેડ પર પુશ અને પુલ, 100 મીટર, 10 મીટરની પાંચ લંબાઈ. ચાર્ટમાં વજન નહીં, રેઝિસ્ટન્સ સેટિંગ છે. ઝોન 10: 20 વજનવાળી બર્પી. પુરુષ: 20 કિગ્રા (44 lb) RAM કે બે 10 કિગ્રા ડમ્બલ. મહિલા: 10 કિગ્રા (22 lb) RAM કે બે 5 કિગ્રા ડમ્બલ.{3}",
      dose: "ઝોન 8 અને 10 માં ચૂકેલા દરેક રેપ માટે 20 સેકન્ડ, અને સ્લેડની ચૂકેલી દરેક લંબાઈ માટે 1:30.{3}",
    },
    {
      name: "સમય ખાતા નિયમો",
      why: "ઝોન કે દોડનો 80% થી ઓછો ભાગ પૂરો કરવો એ બિનસત્તાવાર ફિનિશ છે. તમને મેડલ અને શર્ટ મળે છે. તમારો સમય ગ્લોબલ લીડરબોર્ડ પર જતો નથી.{3}",
      how: "ઝોન ક્રમ બહાર: દરેક ઉલ્લંઘન માટે 1 મિનિટ. ચૂકેલો દોડનો ચક્કર: કોર્સ મુજબ 2 કે 3 મિનિટ. લિફ્ટિંગ સ્ટ્રેપ અને જિમ્નાસ્ટિક-શૈલીની ગ્રિપની મંજૂરી નથી. ગ્લવ્ઝ અને લિફ્ટિંગ બેલ્ટની મંજૂરી છે.{3}",
      dose: "વર્તમાન રૂલબુક જ માન્ય છે. હું લખું છું ત્યારે તે v20261015 છે.{3}",
    },
    {
      name: "શ્રેણીઓ, વય જૂથ અને સામાન્ય સમય",
      why: "એલિટ અને એજ ગ્રુપ. FIT માં એલિટ વ્યક્તિગત એથ્લીટ ઇનામી રકમ જીતી શકે. એજ ગ્રુપ એથ્લીટને પોડિયમ ઍવૉર્ડ મળે.{3} તમારી ઉંમર એટલે સીઝનની 30 સપ્ટેમ્બરે તમારી ઉંમર: 14 થી 17, 18 થી 24, પછી 25 થી 29 થી 65 થી 69 સુધી પાંચ-પાંચ વર્ષના વર્ગ, અને 70+. 10 થી 13 વર્ષના યુવા હળવા લોડ પર.{3}",
      how: "2 ની ટીમ, અને FIT માં 4 ની. રક: પુરુષો માટે 30 lb (13.6 કિગ્રા) નું પૅક, મહિલાઓ માટે 20 lb (9.1 કિગ્રા).{3}",
      dose: "ત્રીજા પક્ષ તરફથી, 13 સપ્ટેમ્બર 2026 સુધી 2026 લીડરબોર્ડના 14,580 રેન્ક થયેલા પરિણામો પરથી: FIT નો મધ્યમ સમય પુરુષો માટે 48:20 અને મહિલાઓ માટે 54:32. મને કોઈ સત્તાવાર સરેરાશ મળી નથી.{9}",
    },
    {
      name: "ક્યાં અને ક્યારે યોજાય છે",
      why: "વર્લ્ડ ચૅમ્પિયનશિપ ફોર્ટ વર્થ, ટેક્સાસમાં, 10 થી 13 ડિસેમ્બર 2026. FIT ગુરુવાર 10, MILE શુક્રવાર 11 અને STRONG શનિવાર 12, બધાં ફક્ત આમંત્રણથી. જાહેર STRONG હીટ શનિવાર 12 અને રવિવાર 13 ના રોજ છે અને 2027 વર્લ્ડ ચૅમ્પિયનશિપ માટે ક્વૉલિફાય કરાવે છે.{4}",
      how: "અમેરિકા: એટલાન્ટા 7 થી 8 નવેમ્બર 2026, ડેન્વર 27 માર્ચ 2027, સૅક્રામેન્ટો 24 થી 25 એપ્રિલ 2027, અનાહાઇમ 8 થી 9 મે 2027.{5} સ્પેન અને પોર્ટુગલ: ટેનેરિફ 21 થી 22 નવેમ્બર 2026, ટોરેમોલિનોસ 27 થી 28 ફેબ્રુઆરી 2027, લિસ્બન 15 મે 2027.{6}",
      dose: "મધ્ય પૂર્વ અને એશિયા-પેસિફિક: DEKA FIT દુબઈમાં 26 સપ્ટેમ્બર 2026 ના રોજ અને બૅંગકોકમાં 1 નવેમ્બર 2026 ના રોજ યોજાઈ. બંને થઈ ગયાં.{7}{8} બ્રિટન: હું કોઈ સત્તાવાર પેજ પર તારીખ પાકી કરી શક્યો નથી.",
    },
  ],
  enoughHeading: "જે હું દાવો નહીં કરું",
  enough: [
    "મહિલાઓના ઝોન 1 નું વજન: ચાર્ટમાં પાઉન્ડ અસંગત છપાયા છે. રૂલબુક વાંચો.{3}",
    "અહીંના સમય ત્રીજા પક્ષના છે. મને DEKA નો પ્રકાશિત કોઈ સરેરાશ મળ્યો નથી.{9}",
    "તારીખો અને સ્થળ બદલાય છે. મુસાફરી પહેલાં ઇવેન્ટ પેજ જુઓ.{5}{6}",
    "કોઈ કિંમત નથી. એન્ટ્રી ફી દરેક ઇવેન્ટ પેજ પર છે. કોઈ ક્લાયન્ટ પરિણામ નથી, અને તેનો ઇશારો પણ નથી.",
  ],
  sampleHeading: "પહેલી DEKA પ્રૅક્ટિસનું એક સેમ્પલ",
  sample: [
    "વૉર્મ-અપ, 10 મિનિટ.",
    "500 મીટર સરળ દોડ. ઝોન 1: હળવા વજન સાથે 30 રિવર્સ લંજ.",
    "500 મીટર સરળ દોડ. ઝોન 2: સ્થિર ગતિએ 500 મીટર રો.",
    "500 મીટર સરળ દોડ. ઝોન 3: 60 સેમી (24 ઇંચ) ના બૉક્સ પર 20 સ્ટેપ-ઓવર.",
    "પહેલા દિવસે ત્યાં અટકો. અઠવાડિયે અઠવાડિયે ઝોન ઉમેરો. દરેક ઝોનનો સમય લખો.",
  ],
  opener: "તમે દસે ઝોન જાણીને ઊતરવા માગો છો. કામ તમે કરો છો. લિફ્ટ, પેસિંગ અને સાપ્તાહિક યોજના હું લાઇવ કોચ કરું છું.",
  org: "Spartan અને DEKA",
  safetyN: 10,
  safetyExtra: "લંજ, સ્લેડ, ડેડ બૉલ અને વજનવાળી બર્પી ઘૂંટણ, પીઠ અને ખભા પર ભારે પડે છે. અઠવાડિયાં સુધી ધીમે ધીમે તૈયારી કરો. હૃદય, બ્લડ પ્રેશર કે સાંધાની તકલીફ હોય તો પહેલાં ડૉક્ટરને પૂછો.",
};

const cores: Record<PostLang, Core> = { en, ar, hi, es, zh, ja, gu };
const copy = Object.fromEntries(POST_LANGS.map((lang) => [lang, copyFor(lang, cores[lang])])) as Record<PostLang, PostCopy>;

export const dekaGuidePost: BlogPost = {
  slug: DEKA_GUIDE_SLUG,
  published: RACE_PUBLISHED,
  modified: RACE_MODIFIED,
  about: "DEKA FIT, MILE and STRONG",
  sources: DEKA_GUIDE_SOURCES,
  copy,
  ctaMid: true,
  seeAlso: ["hyrox-vs-deka-vs-athx", "what-is-hyrox", "what-is-athx"],
};
