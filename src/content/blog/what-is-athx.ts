/**
 * Blog post: "What is ATHX? 7 things to know before you enter".
 * Citations in copy are written as {n} and point at WHAT_IS_ATHX_SOURCES[n - 1].
 * Every fact comes from ATHX's own pages or coverage named in the sources, read on 2 Nov 2026 (IST).
 * Things ATHX doesn't publish (fees by event, dates beyond the list) are said plainly, not guessed.
 * No client results, no prices, no implied affiliation. Translations were drafted for this batch
 * and need a native-speaker review (see CHANGES-grokbot.md).
 */

import { copyFor, RACE_MODIFIED, RACE_PUBLISHED, type Core } from "./common";
import { SRC } from "./race-sources";
import { POST_LANGS, type BlogPost, type PostCopy, type PostLang } from "./shared";

export const WHAT_IS_ATHX_SLUG = "what-is-athx";

export const WHAT_IS_ATHX_SOURCES = [
  SRC.athxHow, // 1
  SRC.athxW26, // 2
  SRC.athxW27, // 3
  SRC.athxMS26, // 4
  SRC.athxFaq, // 5
  SRC.athxFinals, // 6
  SRC.athxEvents, // 7
  SRC.athxPast, // 8
  SRC.crossfit, // 9
  SRC.progrm, // 10
  SRC.athxChina, // 11
  SRC.athxChinaPress, // 12
  SRC.riebe, // 13
] as const;

const en: Core = {
  metaTitle: "What Is ATHX? 7 Things to Know Before You Enter | Jalan PT",
  metaDescription:
    "What is ATHX? The 2.5-hour hybrid fitness competition: six zones, three workouts, divisions, solo or pairs, and where it runs. Sourced, with gaps flagged.",
  h1: "What is ATHX? 7 things to know before you enter",
  dek: "ATHX is a 2.5-hour hybrid fitness competition. One strength test, one engine test, one conditioning circuit. Here is what is published, and what is not.",
  crumb: "What is ATHX?",
  whatsappText: "Hi Susmit, I read the article on what ATHX is and want to book a consultation",
  preset: "explain",
  intro: [
    "ATHX is a hybrid fitness competition. Strength, endurance and conditioning, all tested in one 2.5-hour block.{1}{9}",
    "It started in the UK in 2023.{10} adidas is the headline partner, and CrossFit calls it an official CrossFit Partner Event Series.{9} Those are their relationships. They are not mine.",
    "You do three timed workouts, with warm-up, refuel and recovery zones between them.{1} Every athlete gets the same conditions, and the three workouts stay fixed for a full season.{9}",
    "Every fact below comes from ATHX's own pages or from coverage I name. Where something is not published, I say so.",
    "Facts as published on 2 November 2026. Workouts, dates and rules change. Check the event page before you enter.",
  ],
  listHeading: "ATHX explained: 7 things to know before you enter",
  items: [
    {
      name: "The format: six zones in 2.5 hours",
      why: "A continuous 2.5-hour event in six zones: 30 minutes warm-up, 20 strength, 10 refuel, 30 endurance, 30 recovery, 30 MetCon X.{1}{9}",
      how: "You move through the zones with your heat. A judge counts every rep.{9} You can't leave the arena during the 2.5 hours, except for the toilet.{5}",
      dose: "Arrive at least an hour before your heat. Your heat time is when you enter the warm-up zone, not the floor.{5}",
    },
    {
      name: "Workout 1: Strength (20 minutes)",
      why: "A lifting test. 2026: strict press 1RM (minutes 0 to 6), back squat 3RM (6 to 12), deadlift 5RM (12 to 20). The score is the total weight lifted.{2}",
      how: "The 2027 test changes: shoulder to overhead 1RM, back squat 2RM, deadlift 3RM. The score is the sum of the three.{3}",
      dose: "In the strength workout, chalk, sleeves, belts, lifting shoes and wrist wraps are allowed. Straps, hand grips and knee wraps are not.{4} ATHX publishes the written movement standards for each lift.{4}",
    },
    {
      name: "Workout 2: Endurance (30-minute zone)",
      why: "2026: a 22-minute mix of running and rowing. In the ATHX division, individuals swap every 750 m (1,000 m in PRO). The score is total distance.{2}",
      how: "2027: a 24-minute cap. Run a set distance first, 3 km in ATHX and PRO and 2.4 km in LITE pairs. Then maximum distance on the SkiErg. The score is the SkiErg distance.{3}",
      dose: "ATHX publishes both the 2026 and 2027 sets. Your event page says what applies to your date. Check it before you train.{2}{3}",
    },
    {
      name: "Workout 3: MetCon X (25-minute cap)",
      why: "A seven-station circuit for time. 2026, ATHX division, individual: SkiErg 45 calories (men) or 30 (women), 30 alternating single-arm dumbbell ground-to-overhead (20 or 12.5 kg), 30 m sandbag carry (50 or 30 kg), 30 box jump-overs (24 or 20 inches), 30 m dumbbell walking lunges (20 or 12.5 kg), 30 m burpee broad jumps, then the SkiErg again.{2}",
      how: "2027, individual: RowErg 45 calories (men) or 35 (women), 30 dumbbell ground-to-overhead, 30 dumbbell bench press, 30 sandbag squats, 30 m sandbag carry, 30 burpees over a soft bench, RowErg again.{3}",
      dose: "The score is your finish time. A rep that misses the standard doesn't count, so you repeat it.{4}",
    },
    {
      name: "Divisions: LITE, ATHX and PRO, solo or pairs",
      why: "LITE is the entry level: lighter loads, simpler versions such as step-overs, and pairs only. ATHX is the core division, with full standards. PRO has the heaviest loads and the strictest standards.{1}{9}",
      how: "Enter solo (ATHX or PRO) or as a pair (LITE, ATHX or PRO). Pairs can be two men, two women or mixed.{1} There are age groups too: the 2026 Finals list individual groups from 35 to 39 up to 65+.{6}",
      dose: "ATHX says pairs suits a first event or a training partner.{1}",
    },
    {
      name: "Scoring, the leaderboard and the World Finals",
      why: "Same tests and standards at every event that season, so scores compare across events.{9} CrossFit's announcement says every athlete gets a fitness score out of 100, built from the workouts and the movements inside them.{9}",
      how: "The 2026 Finals run 27 to 29 November 2026 in Lisbon. At each event the top 4 individuals in the ATHX and PRO divisions, for men and for women, are in line for a place.{6}",
      dose: "Invited athletes have 7 days to accept and buy their entry. Then the place rolls down the leaderboard.{6}",
    },
    {
      name: "Where and when it runs",
      why: "On 2 November 2026 the official page listed 36 upcoming events in 14 countries: the US, UK, Germany, France, Spain, Italy, the Netherlands, Portugal, Belgium, Switzerland, Austria, Ireland, Poland and Sweden. Next are Amsterdam and Los Angeles on 7 November, then the Finals in Lisbon on 27 to 29 November. 2027 starts with London on 23 and 24 January.{7}",
      how: "Past events since 2023 were in the UK, then Europe and the US.{8} ATHX says it is building in China with adidas, starting with coach certification.{11} Chinese press reports first official events in Beijing and Shanghai in 2027.{12}",
      dose: "The official list covers Europe and the US. On that page I found no listing in India, the Middle East or Asia-Pacific.{7}",
    },
  ],
  enoughHeading: "What is not published, and what I won't claim",
  enough: [
    "Entry fees change by event. They are on each event page. I don't quote them.{5}",
    "Dates for 2027 outside the listed countries: not published.{7}",
    "Size: TheProgrm reports nearly 6,000 athletes across the six competitions of the 2025 season.{10} I have no figure I can check for 2026.",
    "Ordinary events: you register, pick a heat time and turn up.{5} I found no qualifying standard to enter.",
    "No client results here, and none implied. This is an explainer, not a promise.",
  ],
  sampleHeading: "A sample session to feel the shape of ATHX",
  sample: [
    "Warm-up, 10 minutes: easy row, hips, shoulders, a few light squats.",
    "Lift: build to one hard but clean set of 5 on a back squat. Stop with reps left. No max today.",
    "Rest 5 minutes. Walk. Drink.",
    "Engine: 10 minutes, alternate 250 m run and 250 m row. Steady.",
    "Rest 5 minutes.",
    "Circuit: 3 rounds of 10 dumbbell ground-to-overhead, 10 step-overs, a 20 m carry, 5 burpees. Move steadily.",
    "Stop any block when form breaks. This is a taste of the order, not a test.",
  ],
  opener: "Curious about ATHX, or another hybrid race? I coach the strength and conditioning side, live.",
  org: "ATHX, adidas or CrossFit",
  safetyN: 13,
  safetyExtra: "Entering any race? Read that event's own rules. Have a heart, blood-pressure or joint condition? Ask your doctor first.",
};

const ar: Core = {
  metaTitle: "ما هو ATHX؟ 7 أشياء تعرفها قبل أن تشارك | Jalan PT",
  metaDescription: "ما هو ATHX؟ مسابقة لياقة هجينة مدتها ساعتان ونصف: ست مناطق وثلاثة تمارين وفئات وفردي أو ثنائي وأين تُقام. بمصادر، مع بيان ما لم يُنشر.",
  h1: "ما هو ATHX؟ 7 أشياء تعرفها قبل أن تشارك",
  dek: "ATHX مسابقة لياقة هجينة مدتها ساعتان ونصف. اختبار قوة واحد، واختبار تحمّل واحد، ودائرة تكييف واحدة. هذا ما نُشر، وهذا ما لم يُنشر.",
  crumb: "ما هو ATHX؟",
  whatsappText: "مرحباً سوسميت، قرأت مقال «ما هو ATHX» وأريد حجز استشارة",
  preset: "explain",
  intro: [
    "ATHX مسابقة لياقة هجينة. القوة والتحمّل والتكييف، تُختبر كلها في كتلة واحدة مدتها ساعتان ونصف.{1}{9}",
    "بدأت في المملكة المتحدة عام 2023.{10} أديداس هي الشريك الرئيسي، وتصفها CrossFit بأنها سلسلة فعاليات شريكة رسمية لها.{9} هذه علاقاتهم هم، وليست علاقاتي.",
    "تؤدي ثلاثة تمارين بتوقيت محدد، وبينها مناطق للإحماء والتزوّد والتعافي.{1} يحصل كل رياضي على الظروف نفسها، وتبقى التمارين الثلاثة ثابتة طوال الموسم.{9}",
    "كل معلومة أدناه من صفحات ATHX نفسها أو من تغطية أذكرها. وما لم يُنشر أقول إنه لم يُنشر.",
    "المعلومات كما نُشرت في 2 نوفمبر 2026. تتغير التمارين والتواريخ والقواعد. راجع صفحة الفعالية قبل التسجيل.",
  ],
  listHeading: "ATHX مشروحاً: 7 أشياء تعرفها قبل أن تشارك",
  items: [
    {
      name: "الصيغة: ست مناطق في ساعتين ونصف",
      why: "فعالية متواصلة مدتها ساعتان ونصف في ست مناطق: 30 دقيقة إحماء، 20 قوة، 10 تزوّد، 30 تحمّل، 30 تعافٍ، 30 MetCon X.{1}{9}",
      how: "تنتقل بين المناطق مع دفعتك. وحَكَم يعدّ كل تكرار.{9} لا يمكنك مغادرة الساحة خلال الساعتين والنصف إلا لدورة المياه.{5}",
      dose: "احضر قبل موعد دفعتك بساعة على الأقل. موعد دفعتك هو دخولك منطقة الإحماء، لا أرضية المنافسة.{5}",
    },
    {
      name: "التمرين 1: القوة (20 دقيقة)",
      why: "اختبار رفع. في 2026: ضغط صارم بأقصى تكرار واحد (الدقائق 0 إلى 6)، وسكوات خلفي بأقصى 3 تكرارات (6 إلى 12)، ورفعة ميتة بأقصى 5 (12 إلى 20). النتيجة مجموع الوزن المرفوع.{2}",
      how: "يتغير الاختبار في 2027: من الكتف إلى فوق الرأس بتكرار واحد أقصى، وسكوات خلفي بتكرارين، ورفعة ميتة بثلاثة. النتيجة مجموع الثلاثة.{3}",
      dose: "في تمرين القوة يُسمح بالطباشير والأغطية والأحزمة وأحذية الرفع وأربطة المعصم. لا تُسمح أشرطة الرفع ومقابض اليد وأربطة الركبة.{4} تنشر ATHX معايير الحركة المكتوبة لكل رفعة.{4}",
    },
    {
      name: "التمرين 2: التحمّل (منطقة مدتها 30 دقيقة)",
      why: "في 2026: 22 دقيقة من الجري والتجديف. في فئة ATHX يبدّل الفرديون كل 750 م (1000 م في PRO). النتيجة المسافة الكلية.{2}",
      how: "في 2027: سقف 24 دقيقة. تجري أولاً مسافة محددة: 3 كم في ATHX وPRO و2.4 كم في ثنائيات LITE. ثم أقصى مسافة على جهاز SkiErg. النتيجة مسافة SkiErg.{3}",
      dose: "تنشر ATHX مجموعتي 2026 و2027. صفحة فعاليتك تبيّن ما ينطبق على تاريخك. راجعها قبل أن تتدرب.{2}{3}",
    },
    {
      name: "التمرين 3: MetCon X (سقف 25 دقيقة)",
      why: "دائرة من سبع محطات بأقل زمن. 2026، فئة ATHX، فردي: SkiErg بـ45 سعرة (رجال) أو 30 (نساء)، و30 رفعة دمبل بذراع واحدة بالتناوب من الأرض إلى فوق الرأس (20 أو 12.5 كغ)، وحمل كيس رمل 30 م (50 أو 30 كغ)، و30 قفزة فوق الصندوق (24 أو 20 بوصة)، و30 م اندفاعات مشي بالدمبل (20 أو 12.5 كغ)، و30 م بيربي مع قفزة طويلة، ثم SkiErg مرة أخرى.{2}",
      how: "2027، فردي: RowErg بـ45 سعرة (رجال) أو 35 (نساء)، و30 رفعة دمبل من الأرض إلى فوق الرأس، و30 ضغط صدر بالدمبل، و30 سكوات بكيس الرمل، وحمل كيس رمل 30 م، و30 بيربي فوق مقعد ناعم، ثم RowErg مرة أخرى.{3}",
      dose: "النتيجة هي زمن إنهائك. التكرار الذي لا يستوفي المعيار لا يُحتسب، فتعيده.{4}",
    },
    {
      name: "الفئات: LITE وATHX وPRO، فردي أو ثنائي",
      why: "LITE للمبتدئين: أحمال أخف ونسخ أبسط مثل الخطو فوق الصندوق، وللثنائيات فقط. ATHX هي الفئة الأساسية بالمعايير الكاملة. PRO بأثقل الأحمال وأشد المعايير.{1}{9}",
      how: "شارك فردياً (ATHX أو PRO) أو ثنائياً (LITE أو ATHX أو PRO). يمكن أن يكون الثنائي رجلين أو امرأتين أو مختلطاً.{1} وهناك فئات عمرية أيضاً: نهائيات 2026 تذكر فئات فردية من 35 إلى 39 حتى 65+.{6}",
      dose: "تقول ATHX إن الثنائي يناسب أول مشاركة أو شريك تدريب.{1}",
    },
    {
      name: "النتائج واللوحة والنهائيات العالمية",
      why: "الاختبارات والمعايير نفسها في كل فعالية من الموسم، فتُقارَن النتائج بين الفعاليات.{9} ويقول إعلان CrossFit إن كل رياضي يحصل على درجة لياقة من 100، مبنية على التمارين والحركات داخلها.{9}",
      how: "تُقام نهائيات 2026 من 27 إلى 29 نوفمبر 2026 في لشبونة. في كل فعالية، أول 4 فرديين في فئتي ATHX وPRO، للرجال وللنساء، في موقع المرشحين للتأهل.{6}",
      dose: "أمام المدعوين 7 أيام للقبول وشراء المشاركة. بعدها ينتقل المقعد إلى التالي في اللوحة.{6}",
    },
    {
      name: "أين ومتى تُقام",
      why: "في 2 نوفمبر 2026 عرضت الصفحة الرسمية 36 فعالية قادمة في 14 دولة: الولايات المتحدة والمملكة المتحدة وألمانيا وفرنسا وإسبانيا وإيطاليا وهولندا والبرتغال وبلجيكا وسويسرا والنمسا وأيرلندا وبولندا والسويد. التالي أمستردام ولوس أنجلوس في 7 نوفمبر، ثم النهائيات في لشبونة من 27 إلى 29 نوفمبر. و2027 تبدأ بلندن في 23 و24 يناير.{7}",
      how: "الفعاليات السابقة منذ 2023 كانت في المملكة المتحدة ثم أوروبا والولايات المتحدة.{8} وتقول ATHX إنها تبني حضورها في الصين مع أديداس، بدءاً بشهادات المدربين.{11} وتذكر الصحافة الصينية فعاليات رسمية أولى في بكين وشنغهاي في 2027.{12}",
      dose: "القائمة الرسمية تشمل أوروبا والولايات المتحدة. لم أجد في تلك الصفحة أي فعالية في الهند أو الشرق الأوسط أو آسيا والمحيط الهادئ.{7}",
    },
  ],
  enoughHeading: "ما لم يُنشر، وما لن أدّعيه",
  enough: [
    "رسوم المشاركة تتغير بحسب الفعالية. هي في صفحة كل فعالية. لا أذكرها.{5}",
    "تواريخ 2027 خارج الدول المذكورة: لم تُنشر.{7}",
    "الحجم: تذكر TheProgrm قرابة 6000 رياضي في المسابقات الست لموسم 2025.{10} ليس لدي رقم لـ 2026 أستطيع التحقق منه.",
    "الفعاليات العادية: تسجّل، وتختار موعد دفعتك، وتحضر.{5} لم أجد معياراً للتأهل للمشاركة.",
    "لا نتائج عملاء هنا، ولا إيحاء بها. هذا شرح، وليس وعداً.",
  ],
  sampleHeading: "نموذج جلسة لتتحسّس شكل ATHX",
  sample: [
    "إحماء 10 دقائق: تجديف خفيف، الوركان، الكتفان، بضع سكوات خفيفة.",
    "الرفع: ابنِ حتى مجموعة واحدة شاقة لكن نظيفة من 5 تكرارات في السكوات الخلفي. توقف وفي رصيدك تكرارات. لا أقصى اليوم.",
    "راحة 5 دقائق. امشِ. اشرب.",
    "التحمّل: 10 دقائق، بالتناوب 250 م جري و250 م تجديف. بإيقاع ثابت.",
    "راحة 5 دقائق.",
    "الدائرة: 3 جولات من 10 رفعات دمبل من الأرض إلى فوق الرأس، و10 خطوات فوق الصندوق، وحمل 20 م، و5 بيربي. بإيقاع ثابت.",
    "أوقف أي كتلة إذا اختل الأداء. هذه تذوّق للترتيب، وليست اختباراً.",
  ],
  opener: "فضولي تجاه ATHX أو سباق هجين آخر؟ أدرّب جانب القوة والتكييف، مباشرة.",
  org: "ATHX أو أديداس أو CrossFit",
  safetyN: 13,
  safetyExtra: "تشارك في أي سباق؟ اقرأ قواعد تلك الفعالية نفسها. لديك حالة في القلب أو الضغط أو المفاصل؟ اسأل طبيبك أولاً.",
};

const hi: Core = {
  metaTitle: "ATHX क्या है? एंटर करने से पहले जानने लायक 7 बातें | Jalan PT",
  metaDescription: "ATHX क्या है? 2.5 घंटे का हाइब्रिड फिटनेस कॉम्पिटिशन: छह ज़ोन, तीन वर्कआउट, डिवीज़न, सोलो या पेयर, और कहाँ होता है। स्रोतों के साथ, जो नहीं छपा वह बताया।",
  h1: "ATHX क्या है? एंटर करने से पहले जानने लायक 7 बातें",
  dek: "ATHX 2.5 घंटे का हाइब्रिड फिटनेस कॉम्पिटिशन है। एक स्ट्रेंथ टेस्ट, एक इंजन टेस्ट, एक कंडीशनिंग सर्किट। जो प्रकाशित है वह यहाँ है, और जो नहीं है वह भी बताया है।",
  crumb: "ATHX क्या है?",
  whatsappText: "नमस्ते सुस्मित, मैंने ATHX क्या है वाला लेख पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
  preset: "explain",
  intro: [
    "ATHX एक हाइब्रिड फिटनेस कॉम्पिटिशन है। स्ट्रेंथ, एंड्योरेंस और कंडीशनिंग, सब 2.5 घंटे के एक ब्लॉक में परखे जाते हैं।{1}{9}",
    "यह 2023 में UK में शुरू हुआ।{10} adidas हेडलाइन पार्टनर है, और CrossFit इसे आधिकारिक CrossFit पार्टनर इवेंट सीरीज़ कहता है।{9} ये उनके रिश्ते हैं। मेरे नहीं।",
    "आप तीन टाइम्ड वर्कआउट करते हैं, बीच में वार्म-अप, रीफ़्यूल और रिकवरी ज़ोन होते हैं।{1} हर एथलीट को एक जैसी स्थितियाँ मिलती हैं, और तीनों वर्कआउट पूरे सीज़न तय रहते हैं।{9}",
    "नीचे का हर तथ्य ATHX के अपने पेजों से या उस कवरेज से है जिसका मैं नाम देता हूँ। जो प्रकाशित नहीं है, उसे मैं साफ़ कहता हूँ।",
    "तथ्य 2 नवंबर 2026 तक प्रकाशित जानकारी के अनुसार हैं। वर्कआउट, तारीख़ें और नियम बदलते हैं। एंटर करने से पहले इवेंट पेज देखें।",
  ],
  listHeading: "ATHX समझें: एंटर करने से पहले जानने लायक 7 बातें",
  items: [
    {
      name: "फ़ॉर्मैट: 2.5 घंटे में छह ज़ोन",
      why: "छह ज़ोन में लगातार 2.5 घंटे का इवेंट: 30 मिनट वार्म-अप, 20 स्ट्रेंथ, 10 रीफ़्यूल, 30 एंड्योरेंस, 30 रिकवरी, 30 MetCon X।{1}{9}",
      how: "आप अपनी हीट के साथ ज़ोन में आगे बढ़ते हैं। हर रेप एक जज गिनता है।{9} 2.5 घंटे में टॉयलेट के अलावा आप एरीना से बाहर नहीं जा सकते।{5}",
      dose: "अपनी हीट से कम से कम एक घंटा पहले पहुँचें। हीट का समय वार्म-अप ज़ोन में जाने का समय है, फ़्लोर का नहीं।{5}",
    },
    {
      name: "वर्कआउट 1: स्ट्रेंथ (20 मिनट)",
      why: "लिफ़्टिंग टेस्ट। 2026: स्ट्रिक्ट प्रेस 1RM (मिनट 0 से 6), बैक स्क्वाट 3RM (6 से 12), डेडलिफ़्ट 5RM (12 से 20)। स्कोर उठाया गया कुल वज़न है।{2}",
      how: "2027 में टेस्ट बदलता है: शोल्डर टू ओवरहेड 1RM, बैक स्क्वाट 2RM, डेडलिफ़्ट 3RM। स्कोर तीनों का जोड़ है।{3}",
      dose: "स्ट्रेंथ वर्कआउट में चॉक, स्लीव, बेल्ट, लिफ़्टिंग शूज़ और रिस्ट रैप की अनुमति है। लिफ़्टिंग स्ट्रैप, हैंड ग्रिप और नी रैप की नहीं।{4} ATHX हर लिफ़्ट के लिखित मूवमेंट स्टैंडर्ड प्रकाशित करता है।{4}",
    },
    {
      name: "वर्कआउट 2: एंड्योरेंस (30 मिनट का ज़ोन)",
      why: "2026: 22 मिनट दौड़ और रोइंग का मेल। ATHX डिवीज़न में व्यक्तिगत एथलीट हर 750 मीटर पर बदलते हैं (PRO में 1,000 मीटर)। स्कोर कुल दूरी है।{2}",
      how: "2027: 24 मिनट की सीमा। पहले तय दूरी दौड़ें: ATHX और PRO में 3 किमी, LITE पेयर में 2.4 किमी। फिर SkiErg पर अधिकतम दूरी। स्कोर SkiErg की दूरी है।{3}",
      dose: "ATHX 2026 और 2027 दोनों सेट प्रकाशित करता है। आपकी तारीख़ पर क्या लागू है, यह आपका इवेंट पेज बताता है। ट्रेनिंग से पहले देखें।{2}{3}",
    },
    {
      name: "वर्कआउट 3: MetCon X (25 मिनट की सीमा)",
      why: "समय के लिए सात स्टेशन का सर्किट। 2026, ATHX डिवीज़न, व्यक्तिगत: SkiErg 45 कैलोरी (पुरुष) या 30 (महिला), 30 बारी-बारी सिंगल-आर्म डम्बल ग्राउंड-टू-ओवरहेड (20 या 12.5 किग्रा), 30 मीटर सैंडबैग कैरी (50 या 30 किग्रा), 30 बॉक्स जंप-ओवर (24 या 20 इंच), 30 मीटर डम्बल वॉकिंग लंज (20 या 12.5 किग्रा), 30 मीटर बर्पी ब्रॉड जंप, फिर दोबारा SkiErg।{2}",
      how: "2027, व्यक्तिगत: RowErg 45 कैलोरी (पुरुष) या 35 (महिला), 30 डम्बल ग्राउंड-टू-ओवरहेड, 30 डम्बल बेंच प्रेस, 30 सैंडबैग स्क्वाट, 30 मीटर सैंडबैग कैरी, सॉफ़्ट बेंच के ऊपर 30 बर्पी, फिर दोबारा RowErg।{3}",
      dose: "स्कोर आपका फ़िनिश टाइम है। जो रेप स्टैंडर्ड पूरा नहीं करता वह गिना नहीं जाता, इसलिए दोहराना पड़ता है।{4}",
    },
    {
      name: "डिवीज़न: LITE, ATHX और PRO, सोलो या पेयर",
      why: "LITE एंट्री लेवल है: हल्के वज़न, बॉक्स जंप की जगह स्टेप-ओवर जैसे आसान वर्ज़न, और सिर्फ़ पेयर। ATHX मुख्य डिवीज़न है, पूरे स्टैंडर्ड के साथ। PRO में सबसे भारी वज़न और सबसे सख़्त स्टैंडर्ड हैं।{1}{9}",
      how: "सोलो (ATHX या PRO) या पेयर (LITE, ATHX या PRO) में एंटर करें। पेयर दो पुरुष, दो महिलाएँ या मिक्स्ड हो सकता है।{1} एज ग्रुप भी हैं: 2026 फ़ाइनल्स में व्यक्तिगत ग्रुप 35 से 39 से लेकर 65+ तक सूचीबद्ध हैं।{6}",
      dose: "ATHX कहता है कि पेयर पहले इवेंट या ट्रेनिंग पार्टनर के लिए ठीक है।{1}",
    },
    {
      name: "स्कोरिंग, लीडरबोर्ड और वर्ल्ड फ़ाइनल्स",
      why: "उस सीज़न के हर इवेंट में वही टेस्ट और स्टैंडर्ड, इसलिए इवेंट्स के बीच स्कोर की तुलना हो सकती है।{9} CrossFit की घोषणा के अनुसार हर एथलीट को 100 में से एक फ़िटनेस स्कोर मिलता है, जो वर्कआउट और उनके भीतर के मूवमेंट से बनता है।{9}",
      how: "2026 फ़ाइनल्स 27 से 29 नवंबर 2026 को लिस्बन में हैं। हर इवेंट में ATHX और PRO डिवीज़न के टॉप 4 व्यक्तिगत एथलीट, पुरुषों और महिलाओं में, जगह के हक़दार हैं।{6}",
      dose: "आमंत्रित एथलीट के पास स्वीकार करने और एंट्री ख़रीदने के लिए 7 दिन होते हैं। फिर जगह लीडरबोर्ड में अगले को चली जाती है।{6}",
    },
    {
      name: "कहाँ और कब होता है",
      why: "2 नवंबर 2026 को आधिकारिक पेज पर 14 देशों में 36 आने वाले इवेंट सूचीबद्ध थे: अमेरिका, UK, जर्मनी, फ़्रांस, स्पेन, इटली, नीदरलैंड्स, पुर्तगाल, बेल्जियम, स्विट्ज़रलैंड, ऑस्ट्रिया, आयरलैंड, पोलैंड और स्वीडन। अगले हैं 7 नवंबर को एम्स्टर्डम और लॉस एंजिल्स, फिर 27 से 29 नवंबर को लिस्बन में फ़ाइनल्स। 2027 की शुरुआत 23 और 24 जनवरी को लंदन से है।{7}",
      how: "2023 से पिछले इवेंट UK में हुए, फिर यूरोप और अमेरिका में।{8} ATHX का कहना है कि वह adidas के साथ चीन में नींव रख रहा है, कोच सर्टिफ़िकेशन से शुरू करके।{11} चीनी मीडिया के अनुसार 2027 में बीजिंग और शंघाई में पहले आधिकारिक इवेंट होंगे।{12}",
      dose: "आधिकारिक सूची में यूरोप और अमेरिका हैं। उस पेज पर मुझे भारत, मध्य पूर्व या एशिया-प्रशांत में कोई इवेंट सूचीबद्ध नहीं मिला।{7}",
    },
  ],
  enoughHeading: "जो प्रकाशित नहीं है, और जो मैं दावा नहीं करूँगा",
  enough: [
    "एंट्री फ़ीस इवेंट के हिसाब से बदलती है। वह हर इवेंट पेज पर है। मैं उसे नहीं लिखता।{5}",
    "सूचीबद्ध देशों के बाहर 2027 की तारीख़ें: प्रकाशित नहीं।{7}",
    "आकार: TheProgrm के अनुसार 2025 सीज़न की छह प्रतियोगिताओं में लगभग 6,000 एथलीट थे।{10} 2026 का कोई आँकड़ा मेरे पास नहीं है जिसे जाँच सकूँ।",
    "आम इवेंट: आप रजिस्टर करते हैं, हीट टाइम चुनते हैं और पहुँचते हैं।{5} मुझे एंट्री के लिए कोई क्वालिफ़ाइंग स्टैंडर्ड नहीं मिला।",
    "यहाँ कोई क्लाइंट रिज़ल्ट नहीं हैं, और न ही इशारा। यह समझाने वाला लेख है, वादा नहीं।",
  ],
  sampleHeading: "ATHX का आकार महसूस करने के लिए एक सैंपल सेशन",
  sample: [
    "वार्म-अप, 10 मिनट: हल्की रोइंग, हिप्स, शोल्डर, कुछ हल्के स्क्वाट।",
    "लिफ़्ट: बैक स्क्वाट पर 5 रेप का एक भारी पर साफ़ सेट बनाएँ। रेप बचाकर रुकें। आज मैक्स नहीं।",
    "5 मिनट आराम। टहलें। पानी पिएँ।",
    "इंजन: 10 मिनट, बारी-बारी 250 मीटर दौड़ और 250 मीटर रो। स्थिर रफ़्तार।",
    "5 मिनट आराम।",
    "सर्किट: 10 डम्बल ग्राउंड-टू-ओवरहेड, 10 स्टेप-ओवर, 20 मीटर कैरी, 5 बर्पी, ऐसे 3 राउंड। स्थिर चलें।",
    "फ़ॉर्म बिगड़े तो वह ब्लॉक रोक दें। यह क्रम का स्वाद है, टेस्ट नहीं।",
  ],
  opener: "ATHX या किसी और हाइब्रिड रेस के बारे में जानना चाहते हैं? स्ट्रेंथ और कंडीशनिंग वाला हिस्सा मैं लाइव कोच करता हूँ।",
  org: "ATHX, adidas या CrossFit",
  safetyN: 13,
  safetyExtra: "कोई भी रेस एंटर कर रहे हैं? उस इवेंट के अपने नियम पढ़ें। दिल, ब्लड प्रेशर या जोड़ों की कोई समस्या है? पहले डॉक्टर से पूछें।",
};

const es: Core = {
  metaTitle: "¿Qué es ATHX? 7 cosas que debes saber antes de apuntarte | Jalan PT",
  metaDescription: "¿Qué es ATHX? La competición híbrida de 2,5 horas: seis zonas, tres entrenamientos, divisiones, solo o en pareja, y dónde se celebra. Con fuentes.",
  h1: "¿Qué es ATHX? 7 cosas que debes saber antes de apuntarte",
  dek: "ATHX es una competición de fitness híbrido de 2,5 horas. Una prueba de fuerza, una de resistencia, un circuito de acondicionamiento. Esto es lo publicado, y lo que no.",
  crumb: "¿Qué es ATHX?",
  whatsappText: "Hola Susmit, leí el artículo sobre qué es ATHX y quiero reservar una consulta",
  preset: "explain",
  intro: [
    "ATHX es una competición de fitness híbrido. Fuerza, resistencia y acondicionamiento, todo en un bloque de 2,5 horas.{1}{9}",
    "Empezó en el Reino Unido en 2023.{10} adidas es el patrocinador principal, y CrossFit la llama serie de eventos asociada oficial de CrossFit.{9} Esas son sus relaciones. No las mías.",
    "Haces tres entrenamientos cronometrados, con zonas de calentamiento, reposición y recuperación entre ellos.{1} Todos los atletas tienen las mismas condiciones, y los tres entrenamientos se mantienen fijos durante toda la temporada.{9}",
    "Cada dato de abajo viene de las páginas propias de ATHX o de una cobertura que nombro. Lo que no está publicado, lo digo.",
    "Datos publicados a 2 de noviembre de 2026. Los entrenamientos, las fechas y las reglas cambian. Consulta la página del evento antes de inscribirte.",
  ],
  listHeading: "ATHX explicado: 7 cosas que debes saber antes de apuntarte",
  items: [
    {
      name: "El formato: seis zonas en 2,5 horas",
      why: "Un evento continuo de 2,5 horas en seis zonas: 30 minutos de calentamiento, 20 de fuerza, 10 de reposición, 30 de resistencia, 30 de recuperación, 30 de MetCon X.{1}{9}",
      how: "Avanzas por las zonas con tu serie. Un juez cuenta cada repetición.{9} No puedes salir del recinto durante las 2,5 horas, salvo para ir al baño.{5}",
      dose: "Llega al menos una hora antes de tu serie. La hora de tu serie es cuando entras en la zona de calentamiento, no en la pista.{5}",
    },
    {
      name: "Entrenamiento 1: Fuerza (20 minutos)",
      why: "Una prueba de levantamiento. 2026: press estricto 1RM (minutos 0 a 6), sentadilla trasera 3RM (6 a 12), peso muerto 5RM (12 a 20). La puntuación es el peso total levantado.{2}",
      how: "La prueba de 2027 cambia: hombro a sobre la cabeza 1RM, sentadilla trasera 2RM, peso muerto 3RM. La puntuación es la suma de los tres.{3}",
      dose: "En el entrenamiento de fuerza se permiten magnesio, rodilleras y coderas, cinturones, zapatillas de levantamiento y muñequeras. No se permiten correas, agarres de mano ni vendas de rodilla.{4} ATHX publica por escrito los estándares de movimiento de cada levantamiento.{4}",
    },
    {
      name: "Entrenamiento 2: Resistencia (zona de 30 minutos)",
      why: "2026: 22 minutos combinando carrera y remo. En la división ATHX, los individuales cambian cada 750 m (1000 m en PRO). La puntuación es la distancia total.{2}",
      how: "2027: tope de 24 minutos. Primero una carrera de distancia fija: 3 km en ATHX y PRO y 2,4 km en parejas LITE. Después, distancia máxima en el SkiErg. La puntuación es la distancia en el SkiErg.{3}",
      dose: "ATHX publica los dos conjuntos, el de 2026 y el de 2027. La página de tu evento indica cuál se aplica a tu fecha. Consúltala antes de entrenar.{2}{3}",
    },
    {
      name: "Entrenamiento 3: MetCon X (tope de 25 minutos)",
      why: "Un circuito de siete estaciones contra el reloj. 2026, división ATHX, individual: SkiErg 45 calorías (hombres) o 30 (mujeres), 30 arrancadas de mancuerna a una mano alternas del suelo a sobre la cabeza (20 o 12,5 kg), 30 m de acarreo de saco de arena (50 o 30 kg), 30 saltos sobre cajón (24 o 20 pulgadas), 30 m de zancadas caminando con mancuernas (20 o 12,5 kg), 30 m de burpees con salto de longitud, y otra vez el SkiErg.{2}",
      how: "2027, individual: RowErg 45 calorías (hombres) o 35 (mujeres), 30 mancuernas del suelo a sobre la cabeza, 30 press de banca con mancuernas, 30 sentadillas con saco de arena, 30 m de acarreo de saco, 30 burpees sobre un banco blando, y otra vez el RowErg.{3}",
      dose: "La puntuación es tu tiempo final. Una repetición que no cumple el estándar no cuenta, así que se repite.{4}",
    },
    {
      name: "Divisiones: LITE, ATHX y PRO, solo o en pareja",
      why: "LITE es el nivel de entrada: cargas más ligeras, versiones más simples como pasar el cajón con paso, y solo parejas. ATHX es la división principal, con los estándares completos. PRO tiene las cargas más pesadas y los estándares más estrictos.{1}{9}",
      how: "Inscríbete solo (ATHX o PRO) o en pareja (LITE, ATHX o PRO). Las parejas pueden ser dos hombres, dos mujeres o mixtas.{1} También hay grupos de edad: las Finales 2026 listan grupos individuales de 35 a 39 hasta 65+.{6}",
      dose: "ATHX dice que la pareja encaja en un primer evento o con un compañero de entrenamiento.{1}",
    },
    {
      name: "Puntuación, clasificación y Finales Mundiales",
      why: "Las mismas pruebas y estándares en cada evento de la temporada, así que las puntuaciones se comparan entre eventos.{9} El anuncio de CrossFit dice que cada atleta recibe una puntuación de fitness sobre 100, calculada con los entrenamientos y los movimientos que contienen.{9}",
      how: "Las Finales 2026 son del 27 al 29 de noviembre de 2026 en Lisboa. En cada evento, los 4 mejores individuales de las divisiones ATHX y PRO, en hombres y en mujeres, optan a una plaza.{6}",
      dose: "Los atletas invitados tienen 7 días para aceptar y pagar su inscripción. Después la plaza pasa al siguiente de la clasificación.{6}",
    },
    {
      name: "Dónde y cuándo se celebra",
      why: "El 2 de noviembre de 2026, la página oficial listaba 36 eventos próximos en 14 países: EE. UU., Reino Unido, Alemania, Francia, España, Italia, Países Bajos, Portugal, Bélgica, Suiza, Austria, Irlanda, Polonia y Suecia. Los siguientes son Ámsterdam y Los Ángeles el 7 de noviembre, y luego las Finales en Lisboa del 27 al 29 de noviembre. 2027 empieza con Londres los días 23 y 24 de enero.{7}",
      how: "Los eventos pasados desde 2023 fueron en el Reino Unido, luego en Europa y EE. UU.{8} ATHX dice que está construyendo su presencia en China con adidas, empezando por la certificación de entrenadores.{11} La prensa china informa de los primeros eventos oficiales en Pekín y Shanghái en 2027.{12}",
      dose: "La lista oficial abarca Europa y EE. UU. En esa página no encontré ningún evento en la India, Oriente Medio ni Asia-Pacífico.{7}",
    },
  ],
  enoughHeading: "Lo que no está publicado, y lo que no voy a afirmar",
  enough: [
    "Las tarifas de inscripción cambian según el evento. Están en la página de cada evento. No las cito.{5}",
    "Fechas de 2027 fuera de los países listados: no publicadas.{7}",
    "Tamaño: TheProgrm informa de casi 6000 atletas en las seis competiciones de la temporada 2025.{10} No tengo una cifra de 2026 que pueda comprobar.",
    "Eventos normales: te registras, eliges hora de serie y te presentas.{5} No encontré ningún estándar de clasificación para entrar.",
    "Aquí no hay resultados de clientes, ni se insinúan. Esto es una explicación, no una promesa.",
  ],
  sampleHeading: "Una sesión de ejemplo para notar la forma de ATHX",
  sample: [
    "Calentamiento, 10 minutos: remo suave, caderas, hombros, unas sentadillas ligeras.",
    "Levantamiento: sube hasta una serie dura pero limpia de 5 en sentadilla trasera. Para con repeticiones en reserva. Hoy sin máximos.",
    "Descansa 5 minutos. Camina. Bebe.",
    "Resistencia: 10 minutos, alternando 250 m de carrera y 250 m de remo. A ritmo estable.",
    "Descansa 5 minutos.",
    "Circuito: 3 rondas de 10 mancuernas del suelo a sobre la cabeza, 10 pasos sobre cajón, un acarreo de 20 m, 5 burpees. Con ritmo estable.",
    "Para cualquier bloque cuando la técnica se rompa. Es una muestra del orden, no una prueba.",
  ],
  opener: "¿Te interesa ATHX u otra carrera híbrida? Entreno la parte de fuerza y acondicionamiento, en directo.",
  org: "ATHX, adidas o CrossFit",
  safetyN: 13,
  safetyExtra: "¿Vas a inscribirte en una carrera? Lee las reglas de ese evento. ¿Tienes una afección del corazón, de la tensión o de las articulaciones? Consulta antes con tu médico.",
};

const zh: Core = {
  metaTitle: "ATHX是什么？报名前要知道的7件事 | Jalan PT",
  metaDescription: "ATHX是什么？2.5小时的混合健身赛事：六个区域、三项测试、组别、单人或双人，以及在哪里举办。有出处，并标明尚未公布的内容。",
  h1: "ATHX是什么？报名前要知道的7件事",
  dek: "ATHX是一项2.5小时的混合健身赛事。一项力量测试，一项耐力测试，一个体能循环。已公布的内容在这里，没公布的也会说明。",
  crumb: "ATHX是什么？",
  whatsappText: "你好Susmit，我读了“ATHX是什么”的文章，想预约一次咨询",
  preset: "explain",
  intro: [
    "ATHX是一项混合健身赛事。力量、耐力和体能，在一个2.5小时的整块时间里全部测试。{1}{9}",
    "它2023年起源于英国。{10}adidas是主要合作伙伴，CrossFit称其为CrossFit官方合作赛事系列。{9}那是他们之间的关系，不是我的。",
    "你要完成三项计时测试，中间有热身、补给和恢复区域。{1}每位运动员条件相同，三项测试在整个赛季保持不变。{9}",
    "下面每个事实都来自ATHX自己的页面，或我注明的报道。没有公布的内容，我会直接说没有公布。",
    "信息截至2026年11月2日。测试、日期和规则会变化。报名前请查看赛事页面。",
  ],
  listHeading: "ATHX详解：报名前要知道的7件事",
  items: [
    {
      name: "赛制：2.5小时内六个区域",
      why: "连续2.5小时、六个区域：热身30分钟，力量20分钟，补给10分钟，耐力30分钟，恢复30分钟，MetCon X 30分钟。{1}{9}",
      how: "你随所在分组依次通过各区域。每一次动作都有裁判计数。{9}这2.5小时内，除上厕所外不能离开场馆。{5}",
      dose: "至少提前一小时到场。分组时间是你进入热身区的时间，不是上场地的时间。{5}",
    },
    {
      name: "测试1：力量（20分钟）",
      why: "一项举重测试。2026年：严格推举1RM（第0到6分钟）、后蹲3RM（第6到12分钟）、硬拉5RM（第12到20分钟）。成绩是举起的总重量。{2}",
      how: "2027年测试有变化：肩上推举1RM、后蹲2RM、硬拉3RM。成绩是三项之和。{3}",
      dose: "力量测试中允许使用镁粉、护套、腰带、举重鞋和护腕带。不允许助力带、手部护具和膝部缠带。{4}ATHX公布了每个动作的书面动作标准。{4}",
    },
    {
      name: "测试2：耐力（30分钟区域）",
      why: "2026年：22分钟跑步与划船结合。在ATHX组别，单人每750米交换一次（PRO为1000米）。成绩是总距离。{2}",
      how: "2027年：24分钟时限。先跑固定距离：ATHX和PRO为3公里，LITE双人为2.4公里。然后在SkiErg上完成最大距离。成绩是SkiErg的距离。{3}",
      dose: "ATHX同时公布了2026和2027两套测试。你的赛事页面会说明你的日期适用哪一套。训练前先看。{2}{3}",
    },
    {
      name: "测试3：MetCon X（25分钟时限）",
      why: "七个站点的计时循环。2026年，ATHX组别，单人：SkiErg 45卡（男）或30卡（女），30次交替单臂哑铃地面到头顶（20或12.5公斤），30米沙袋负重行走（50或30公斤），30次跳箱跨越（24或20英寸），30米哑铃行进箭步蹲（20或12.5公斤），30米波比跳远，然后再回到SkiErg。{2}",
      how: "2027年，单人：RowErg 45卡（男）或35卡（女），30次哑铃地面到头顶，30次哑铃卧推，30次沙袋深蹲，30米沙袋负重行走，30次软凳波比跨越，然后再回到RowErg。{3}",
      dose: "成绩是你的完成时间。不符合标准的动作不计数，要重做。{4}",
    },
    {
      name: "组别：LITE、ATHX和PRO，单人或双人",
      why: "LITE是入门级：较轻的重量、更简单的版本（如踩上箱子），且仅限双人。ATHX是核心组别，执行完整标准。PRO重量最大、标准最严。{1}{9}",
      how: "可单人（ATHX或PRO）或双人（LITE、ATHX或PRO）参赛。双人可以是两名男性、两名女性或混合。{1}还有年龄组：2026总决赛列出的个人年龄组从35到39岁直到65岁以上。{6}",
      dose: "ATHX表示，双人适合第一次参赛或有训练搭档的人。{1}",
    },
    {
      name: "计分、排行榜和世界总决赛",
      why: "同一赛季每场赛事使用相同的测试和标准，因此各场成绩可以比较。{9}CrossFit的公告称，每位运动员会得到一个满分100的体能分数，由各项测试及其中的动作计算得出。{9}",
      how: "2026年总决赛于2026年11月27日至29日在里斯本举行。每场赛事中，ATHX和PRO组别的个人前4名（男女分别计算）有资格获得名额。{6}",
      dose: "受邀运动员有7天时间确认并购买报名。逾期名额顺延给排行榜上的下一位。{6}",
    },
    {
      name: "在哪里、何时举办",
      why: "2026年11月2日，官方页面列出14个国家的36场即将举行的赛事：美国、英国、德国、法国、西班牙、意大利、荷兰、葡萄牙、比利时、瑞士、奥地利、爱尔兰、波兰和瑞典。接下来是11月7日的阿姆斯特丹和洛杉矶，然后是11月27至29日里斯本总决赛。2027年从1月23至24日的伦敦开始。{7}",
      how: "2023年以来的往届赛事先在英国，后来是欧洲和美国。{8}ATHX称正与adidas在中国布局，从教练认证开始。{11}中国媒体报道，2027年将在北京和上海举办首批官方赛事。{12}",
      dose: "官方列表涵盖欧洲和美国。在那个页面上，我没有找到印度、中东或亚太地区的赛事。{7}",
    },
  ],
  enoughHeading: "没有公布的内容，以及我不会声称的事",
  enough: [
    "报名费因赛事而异，在每场赛事页面上。我不引用。{5}",
    "所列国家以外的2027年日期：没有公布。{7}",
    "规模：TheProgrm报道，2025赛季的六场比赛共有近6000名运动员。{10}2026年我没有可核实的数字。",
    "普通赛事：注册、选择分组时间、到场。{5}我没有找到参赛的资格标准。",
    "这里没有客户成果，也不暗示任何成果。这是一篇说明文，不是承诺。",
  ],
  sampleHeading: "感受ATHX节奏的示例训练",
  sample: [
    "热身，10分钟：轻松划船、髋部、肩部，几个轻量深蹲。",
    "举重：逐步加到一组吃力但动作干净的5次后蹲。留有余力就停。今天不测最大重量。",
    "休息5分钟。走一走。喝水。",
    "耐力：10分钟，交替250米跑和250米划。保持稳定。",
    "休息5分钟。",
    "循环：3轮，每轮10次哑铃地面到头顶、10次踩箱、20米负重行走、5个波比。节奏稳定。",
    "动作变形就停止该部分。这是体验顺序，不是测试。",
  ],
  opener: "想了解ATHX或其他混合赛事？力量与体能这部分，我实时指导。",
  org: "ATHX、adidas或CrossFit",
  safetyN: 13,
  safetyExtra: "要报名任何比赛？请阅读该赛事自己的规则。有心脏、血压或关节问题？请先咨询医生。",
};

const ja: Core = {
  metaTitle: "ATHXとは？エントリー前に知っておきたい7つのこと | Jalan PT",
  metaDescription: "ATHXとは？2.5時間のハイブリッド・フィットネス競技を解説：6つのゾーン、3つのワークアウト、部門、個人かペアか、開催地。出典付きで、未公表の点も明記。",
  h1: "ATHXとは？エントリー前に知っておきたい7つのこと",
  dek: "ATHXは2.5時間のハイブリッド・フィットネス競技です。筋力テスト1つ、持久力テスト1つ、コンディショニングのサーキット1つ。公表されていることと、いないことをまとめます。",
  crumb: "ATHXとは？",
  whatsappText: "こんにちは Susmit さん、「ATHXとは」の記事を読みました。相談を予約したいです",
  preset: "explain",
  intro: [
    "ATHXはハイブリッド・フィットネス競技です。筋力、持久力、コンディショニングを、2.5時間の1ブロックでまとめて試します。{1}{9}",
    "2023年に英国で始まりました。{10}adidasがヘッドライン・パートナーで、CrossFitは公式のCrossFitパートナー・イベントシリーズと呼んでいます。{9}これは彼らの関係で、私のものではありません。",
    "計時される3つのワークアウトを行い、間にウォームアップ、補給、リカバリーのゾーンがあります。{1}全選手が同じ条件で、3つのワークアウトはシーズンを通して固定です。{9}",
    "以下の事実はすべて、ATHX自身のページか、名前を挙げた報道に基づきます。公表されていないことは、公表されていないと書きます。",
    "情報は2026年11月2日時点の公表内容です。ワークアウト、日程、ルールは変わります。エントリー前にイベントページを確認してください。",
  ],
  listHeading: "ATHX解説：エントリー前に知っておきたい7つのこと",
  items: [
    {
      name: "形式：2.5時間・6つのゾーン",
      why: "6つのゾーンで続く2.5時間の競技：ウォームアップ30分、筋力20分、補給10分、持久力30分、リカバリー30分、MetCon X 30分。{1}{9}",
      how: "ヒートごとにゾーンを移動します。審判が全レップを数えます。{9}2.5時間のあいだ、トイレ以外でアリーナを出ることはできません。{5}",
      dose: "ヒートの1時間以上前に到着してください。ヒート時間は、フロアではなくウォームアップゾーンに入る時刻です。{5}",
    },
    {
      name: "ワークアウト1：筋力（20分）",
      why: "挙上テストです。2026年：ストリクトプレス1RM（0〜6分）、バックスクワット3RM（6〜12分）、デッドリフト5RM（12〜20分）。スコアは挙げた総重量です。{2}",
      how: "2027年は内容が変わります：ショルダー・トゥ・オーバーヘッド1RM、バックスクワット2RM、デッドリフト3RM。スコアは3つの合計です。{3}",
      dose: "筋力ワークアウトでは、チョーク、スリーブ、ベルト、ウェイトリフティングシューズ、リストラップは使用可。リフティングストラップ、ハンドグリップ、ニーラップは不可です。{4}ATHXは各リフトの動作基準を文書で公開しています。{4}",
    },
    {
      name: "ワークアウト2：持久力（30分のゾーン）",
      why: "2026年：ランとローイングを22分間。ATHX部門の個人は750mごとに交代（PROは1,000m）。スコアは総距離です。{2}",
      how: "2027年：制限時間24分。まず決められた距離を走ります。ATHXとPROは3km、LITEペアは2.4km。その後SkiErgで最大距離。スコアはSkiErgの距離です。{3}",
      dose: "ATHXは2026年版と2027年版の両方を公開しています。あなたの日程にどちらが適用されるかはイベントページに書かれています。トレーニング前に確認を。{2}{3}",
    },
    {
      name: "ワークアウト3：MetCon X（制限時間25分）",
      why: "7種目のタイム勝負のサーキット。2026年、ATHX部門、個人：SkiErg 45カロリー（男子）または30（女子）、片手ダンベル交互グラウンド・トゥ・オーバーヘッド30回（20または12.5kg）、サンドバッグキャリー30m（50または30kg）、ボックスジャンプオーバー30回（24または20インチ）、ダンベル・ウォーキングランジ30m（20または12.5kg）、バーピーブロードジャンプ30m、最後にもう一度SkiErg。{2}",
      how: "2027年、個人：RowErg 45カロリー（男子）または35（女子）、ダンベル・グラウンド・トゥ・オーバーヘッド30回、ダンベルベンチプレス30回、サンドバッグスクワット30回、サンドバッグキャリー30m、ソフトベンチ越えバーピー30回、最後にもう一度RowErg。{3}",
      dose: "スコアはフィニッシュタイムです。基準を満たさないレップはカウントされず、やり直しです。{4}",
    },
    {
      name: "部門：LITE、ATHX、PRO。個人かペア",
      why: "LITEは入門：軽い重量、ステップオーバーのような簡単な版、ペアのみ。ATHXは中心となる部門で、基準はフルです。PROは最も重く、基準も最も厳格です。{1}{9}",
      how: "個人（ATHXまたはPRO）かペア（LITE、ATHX、PRO）で出場します。ペアは男男、女女、混合が可能です。{1}年齢別もあります：2026年ファイナルでは、個人は35〜39歳から65歳以上までの区分が示されています。{6}",
      dose: "ATHXは、ペアは初出場やトレーニング仲間と出る人に向くとしています。{1}",
    },
    {
      name: "スコア、リーダーボード、ワールドファイナル",
      why: "シーズン中はどの大会でも同じテストと基準なので、大会をまたいで比較できます。{9}CrossFitの発表では、各選手はワークアウトとその中の動作から算出される100点満点のフィットネススコアを受け取ります。{9}",
      how: "2026年ファイナルは2026年11月27〜29日、リスボンで開催。各大会で、ATHXとPRO部門の個人上位4名（男女別）に出場枠の対象が回ります。{6}",
      dose: "招待された選手は、承諾してエントリーを購入するまで7日間あります。過ぎるとリーダーボードの次の選手に枠が移ります。{6}",
    },
    {
      name: "開催地と時期",
      why: "2026年11月2日時点で、公式ページには14か国で36の今後の大会が載っていました：米国、英国、ドイツ、フランス、スペイン、イタリア、オランダ、ポルトガル、ベルギー、スイス、オーストリア、アイルランド、ポーランド、スウェーデン。次は11月7日のアムステルダムとロサンゼルス、その後11月27〜29日のリスボンでのファイナル。2027年は1月23〜24日のロンドンから。{7}",
      how: "2023年以降の過去の大会は、英国、その後ヨーロッパと米国でした。{8}ATHXはadidasとともに中国で基盤を作っており、コーチ認定から始めたとしています。{11}中国の報道では、2027年に北京と上海で初の公式大会が予定されています。{12}",
      dose: "公式リストはヨーロッパとアメリカです。そのページに、インド、中東、アジア太平洋の大会は見つかりませんでした。{7}",
    },
  ],
  enoughHeading: "公表されていないこと、そして私が主張しないこと",
  enough: [
    "エントリー料は大会ごとに変わります。各イベントページにあります。ここでは書きません。{5}",
    "掲載国以外の2027年の日程：未公表。{7}",
    "規模：TheProgrmは、2025年シーズンの6大会で約6,000人が参加したと報じています。{10}2026年について、私が確認できる数字はありません。",
    "通常の大会：登録し、ヒート時間を選んで会場に行きます。{5}エントリーのための資格基準は見つかりませんでした。",
    "ここにクライアントの成果はなく、ほのめかしもありません。これは解説であり、約束ではありません。",
  ],
  sampleHeading: "ATHXの流れを体験するサンプルセッション",
  sample: [
    "ウォームアップ10分：軽いロー、股関節、肩、軽いスクワット数回。",
    "挙上：バックスクワットで、きついが綺麗な5回を1セットまで上げる。余力を残して止める。今日は最大なし。",
    "5分休む。歩く。水分補給。",
    "持久力：10分、250mラン、250mローを交互に。一定のペースで。",
    "5分休む。",
    "サーキット：ダンベル・グラウンド・トゥ・オーバーヘッド10回、ステップオーバー10回、20mキャリー、バーピー5回を3ラウンド。一定のペースで。",
    "フォームが崩れたらそのブロックは中止。順番の味見であり、テストではありません。",
  ],
  opener: "ATHXや他のハイブリッドレースが気になりますか？筋力とコンディショニングの部分を、ライブで指導します。",
  org: "ATHX、adidas、CrossFit",
  safetyN: 13,
  safetyExtra: "レースに出る場合は、その大会自身のルールを読んでください。心臓、血圧、関節に持病がある場合は、先に医師に相談を。",
};

const gu: Core = {
  metaTitle: "ATHX શું છે? એન્ટર કરતાં પહેલાં જાણવા જેવી 7 બાબતો | Jalan PT",
  metaDescription: "ATHX શું છે? 2.5 કલાકની હાઇબ્રિડ ફિટનેસ સ્પર્ધા: છ ઝોન, ત્રણ વર્કઆઉટ, ડિવિઝન, સોલો કે પેર અને ક્યાં યોજાય છે. સ્રોતો સાથે, જે પ્રકાશિત નથી તે જણાવ્યું.",
  h1: "ATHX શું છે? એન્ટર કરતાં પહેલાં જાણવા જેવી 7 બાબતો",
  dek: "ATHX 2.5 કલાકની હાઇબ્રિડ ફિટનેસ સ્પર્ધા છે. એક સ્ટ્રેન્થ ટેસ્ટ, એક એન્ડ્યુરન્સ ટેસ્ટ, એક કન્ડિશનિંગ સર્કિટ. જે પ્રકાશિત છે તે અહીં છે, અને જે નથી તે પણ.",
  crumb: "ATHX શું છે?",
  whatsappText: "નમસ્તે સુસ્મિત, મેં ATHX શું છે તે લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવું છે",
  preset: "explain",
  intro: [
    "ATHX એક હાઇબ્રિડ ફિટનેસ સ્પર્ધા છે. સ્ટ્રેન્થ, એન્ડ્યુરન્સ અને કન્ડિશનિંગ, બધું 2.5 કલાકના એક બ્લૉકમાં ચકાસાય છે.{1}{9}",
    "તે 2023 માં UK માં શરૂ થયું.{10} adidas હેડલાઇન પાર્ટનર છે, અને CrossFit તેને સત્તાવાર CrossFit પાર્ટનર ઇવેન્ટ સિરીઝ કહે છે.{9} એ તેમના સંબંધો છે. મારા નથી.",
    "તમે ત્રણ ટાઇમ્ડ વર્કઆઉટ કરો છો, વચ્ચે વૉર્મ-અપ, રીફ્યુઅલ અને રિકવરી ઝોન હોય છે.{1} દરેક ઍથ્લીટને એકસરખી પરિસ્થિતિ મળે છે, અને ત્રણે વર્કઆઉટ આખી સિઝન નક્કી રહે છે.{9}",
    "નીચેની દરેક હકીકત ATHX ના પોતાના પેજ પરથી કે મેં નામ આપેલા કવરેજ પરથી છે. જે પ્રકાશિત નથી, તે હું સ્પષ્ટ કહું છું.",
    "હકીકતો 2 નવેમ્બર 2026 સુધીની પ્રકાશિત માહિતી મુજબ છે. વર્કઆઉટ, તારીખો અને નિયમો બદલાય છે. એન્ટર કરતાં પહેલાં ઇવેન્ટ પેજ જુઓ.",
  ],
  listHeading: "ATHX સમજો: એન્ટર કરતાં પહેલાં જાણવા જેવી 7 બાબતો",
  items: [
    {
      name: "ફૉર્મેટ: 2.5 કલાકમાં છ ઝોન",
      why: "છ ઝોનમાં સતત 2.5 કલાકની ઇવેન્ટ: 30 મિનિટ વૉર્મ-અપ, 20 સ્ટ્રેન્થ, 10 રીફ્યુઅલ, 30 એન્ડ્યુરન્સ, 30 રિકવરી, 30 MetCon X.{1}{9}",
      how: "તમે તમારી હીટ સાથે ઝોનમાં આગળ વધો છો. દરેક રેપ જજ ગણે છે.{9} 2.5 કલાક દરમિયાન ટૉઇલેટ સિવાય તમે એરેનામાંથી બહાર જઈ શકતા નથી.{5}",
      dose: "તમારી હીટથી ઓછામાં ઓછો એક કલાક વહેલા પહોંચો. હીટનો સમય વૉર્મ-અપ ઝોનમાં પ્રવેશવાનો સમય છે, ફ્લોર પર જવાનો નથી.{5}",
    },
    {
      name: "વર્કઆઉટ 1: સ્ટ્રેન્થ (20 મિનિટ)",
      why: "લિફ્ટિંગ ટેસ્ટ. 2026: સ્ટ્રિક્ટ પ્રેસ 1RM (મિનિટ 0 થી 6), બૅક સ્ક્વૉટ 3RM (6 થી 12), ડેડલિફ્ટ 5RM (12 થી 20). સ્કોર ઉપાડેલું કુલ વજન છે.{2}",
      how: "2027 માં ટેસ્ટ બદલાય છે: શોલ્ડર ટુ ઓવરહેડ 1RM, બૅક સ્ક્વૉટ 2RM, ડેડલિફ્ટ 3RM. સ્કોર ત્રણેનો સરવાળો છે.{3}",
      dose: "સ્ટ્રેન્થ વર્કઆઉટમાં ચૉક, સ્લીવ, બેલ્ટ, લિફ્ટિંગ શૂઝ અને રિસ્ટ રૅપની છૂટ છે. લિફ્ટિંગ સ્ટ્રેપ, હૅન્ડ ગ્રિપ અને ની રૅપની નથી.{4} ATHX દરેક લિફ્ટના લેખિત મૂવમેન્ટ સ્ટૅન્ડર્ડ પ્રકાશિત કરે છે.{4}",
    },
    {
      name: "વર્કઆઉટ 2: એન્ડ્યુરન્સ (30 મિનિટનો ઝોન)",
      why: "2026: 22 મિનિટ દોડ અને રોઇંગનું મિશ્રણ. ATHX ડિવિઝનમાં વ્યક્તિગત ઍથ્લીટ દર 750 મીટરે બદલે છે (PRO માં 1,000 મીટર). સ્કોર કુલ અંતર છે.{2}",
      how: "2027: 24 મિનિટની મર્યાદા. પહેલાં નક્કી અંતર દોડો: ATHX અને PRO માં 3 કિમી, LITE પેરમાં 2.4 કિમી. પછી SkiErg પર મહત્તમ અંતર. સ્કોર SkiErg નું અંતર છે.{3}",
      dose: "ATHX 2026 અને 2027 બંને સેટ પ્રકાશિત કરે છે. તમારી તારીખે શું લાગુ પડે છે તે તમારું ઇવેન્ટ પેજ કહે છે. ટ્રેનિંગ પહેલાં જુઓ.{2}{3}",
    },
    {
      name: "વર્કઆઉટ 3: MetCon X (25 મિનિટની મર્યાદા)",
      why: "સમય માટેનું સાત સ્ટેશનનું સર્કિટ. 2026, ATHX ડિવિઝન, વ્યક્તિગત: SkiErg 45 કૅલરી (પુરુષ) કે 30 (મહિલા), 30 વારાફરતી સિંગલ-આર્મ ડમ્બલ ગ્રાઉન્ડ-ટુ-ઓવરહેડ (20 કે 12.5 કિગ્રા), 30 મીટર સૅન્ડબૅગ કૅરી (50 કે 30 કિગ્રા), 30 બૉક્સ જમ્પ-ઓવર (24 કે 20 ઇંચ), 30 મીટર ડમ્બલ વૉકિંગ લંજ (20 કે 12.5 કિગ્રા), 30 મીટર બર્પી બ્રૉડ જમ્પ, પછી ફરી SkiErg.{2}",
      how: "2027, વ્યક્તિગત: RowErg 45 કૅલરી (પુરુષ) કે 35 (મહિલા), 30 ડમ્બલ ગ્રાઉન્ડ-ટુ-ઓવરહેડ, 30 ડમ્બલ બેન્ચ પ્રેસ, 30 સૅન્ડબૅગ સ્ક્વૉટ, 30 મીટર સૅન્ડબૅગ કૅરી, સૉફ્ટ બેન્ચ પરથી 30 બર્પી, પછી ફરી RowErg.{3}",
      dose: "સ્કોર તમારો ફિનિશ ટાઇમ છે. જે રેપ સ્ટૅન્ડર્ડ પૂરું ન કરે તે ગણાતો નથી, એટલે ફરી કરવો પડે.{4}",
    },
    {
      name: "ડિવિઝન: LITE, ATHX અને PRO, સોલો કે પેર",
      why: "LITE એન્ટ્રી લેવલ છે: હળવું વજન, બૉક્સ જમ્પની જગ્યાએ સ્ટેપ-ઓવર જેવાં સરળ વર્ઝન, અને ફક્ત પેર. ATHX મુખ્ય ડિવિઝન છે, પૂરા સ્ટૅન્ડર્ડ સાથે. PRO માં સૌથી ભારે વજન અને સૌથી કડક સ્ટૅન્ડર્ડ.{1}{9}",
      how: "સોલો (ATHX કે PRO) કે પેર (LITE, ATHX કે PRO) માં એન્ટર કરો. પેર બે પુરુષ, બે મહિલા કે મિક્સ્ડ હોઈ શકે.{1} એજ ગ્રૂપ પણ છે: 2026 ફાઇનલ્સમાં વ્યક્તિગત ગ્રૂપ 35 થી 39 થી 65+ સુધી દર્શાવ્યાં છે.{6}",
      dose: "ATHX કહે છે કે પહેલી ઇવેન્ટ કે ટ્રેનિંગ પાર્ટનર સાથે માટે પેર યોગ્ય છે.{1}",
    },
    {
      name: "સ્કોરિંગ, લીડરબોર્ડ અને વર્લ્ડ ફાઇનલ્સ",
      why: "તે સિઝનની દરેક ઇવેન્ટમાં એ જ ટેસ્ટ અને સ્ટૅન્ડર્ડ, એટલે ઇવેન્ટ વચ્ચે સ્કોરની સરખામણી થઈ શકે.{9} CrossFit ની જાહેરાત મુજબ દરેક ઍથ્લીટને 100 માંથી ફિટનેસ સ્કોર મળે છે, જે વર્કઆઉટ અને તેની અંદરની મૂવમેન્ટ પરથી બને છે.{9}",
      how: "2026 ફાઇનલ્સ 27 થી 29 નવેમ્બર 2026 દરમિયાન લિસ્બનમાં છે. દરેક ઇવેન્ટમાં ATHX અને PRO ડિવિઝનના ટોચના 4 વ્યક્તિગત ઍથ્લીટ, પુરુષ અને મહિલામાં, સ્થાન માટે હકદાર છે.{6}",
      dose: "આમંત્રિત ઍથ્લીટ પાસે સ્વીકારવા અને એન્ટ્રી ખરીદવા 7 દિવસ હોય છે. પછી સ્થાન લીડરબોર્ડમાં આગળના ઍથ્લીટને જાય છે.{6}",
    },
    {
      name: "ક્યાં અને ક્યારે યોજાય છે",
      why: "2 નવેમ્બર 2026 ના રોજ સત્તાવાર પેજ પર 14 દેશોમાં 36 આગામી ઇવેન્ટ દર્શાવી હતી: અમેરિકા, UK, જર્મની, ફ્રાન્સ, સ્પેન, ઇટાલી, નેધરલેન્ડ્સ, પોર્ટુગલ, બેલ્જિયમ, સ્વિટ્ઝર્લૅન્ડ, ઑસ્ટ્રિયા, આયર્લૅન્ડ, પોલૅન્ડ અને સ્વીડન. આગળ 7 નવેમ્બરે ઍમ્સ્ટરડૅમ અને લોસ ઍન્જલસ, પછી 27 થી 29 નવેમ્બરે લિસ્બનમાં ફાઇનલ્સ. 2027 ની શરૂઆત 23 અને 24 જાન્યુઆરીએ લંડનથી.{7}",
      how: "2023 થી ભૂતકાળની ઇવેન્ટ UK માં, પછી યુરોપ અને અમેરિકામાં થઈ.{8} ATHX કહે છે કે તે adidas સાથે ચીનમાં પાયો નાખી રહ્યું છે, કોચ સર્ટિફિકેશનથી શરૂ કરીને.{11} ચીનના મીડિયા મુજબ 2027 માં બેઇજિંગ અને શાંઘાઈમાં પ્રથમ સત્તાવાર ઇવેન્ટ થશે.{12}",
      dose: "સત્તાવાર યાદીમાં યુરોપ અને અમેરિકા છે. તે પેજ પર મને ભારત, મધ્ય પૂર્વ કે એશિયા-પેસિફિકમાં કોઈ ઇવેન્ટ મળી નથી.{7}",
    },
  ],
  enoughHeading: "જે પ્રકાશિત નથી, અને જે હું દાવો નહીં કરું",
  enough: [
    "એન્ટ્રી ફી ઇવેન્ટ મુજબ બદલાય છે. તે દરેક ઇવેન્ટ પેજ પર છે. હું તે લખતો નથી.{5}",
    "દર્શાવેલા દેશો સિવાય 2027 ની તારીખો: પ્રકાશિત નથી.{7}",
    "કદ: TheProgrm મુજબ 2025 સિઝનની છ સ્પર્ધાઓમાં લગભગ 6,000 ઍથ્લીટ હતા.{10} 2026 નો કોઈ આંકડો મારી પાસે નથી જે હું ચકાસી શકું.",
    "સામાન્ય ઇવેન્ટ: તમે રજિસ્ટર કરો, હીટ ટાઇમ પસંદ કરો અને પહોંચો.{5} મને એન્ટ્રી માટે કોઈ ક્વોલિફાઇંગ સ્ટૅન્ડર્ડ મળ્યું નથી.",
    "અહીં કોઈ ક્લાયન્ટ પરિણામ નથી, અને તેનો ઇશારો પણ નથી. આ સમજાવતો લેખ છે, વચન નહીં.",
  ],
  sampleHeading: "ATHX નો આકાર અનુભવવા એક સેમ્પલ સેશન",
  sample: [
    "વૉર્મ-અપ, 10 મિનિટ: હળવું રોઇંગ, હિપ્સ, ખભા, થોડા હળવા સ્ક્વૉટ.",
    "લિફ્ટ: બૅક સ્ક્વૉટ પર 5 રેપનો એક ભારે પણ સ્વચ્છ સેટ બનાવો. રેપ બચાવીને અટકો. આજે મૅક્સ નહીં.",
    "5 મિનિટ આરામ. ચાલો. પાણી પીઓ.",
    "એન્જિન: 10 મિનિટ, વારાફરતી 250 મીટર દોડ અને 250 મીટર રો. સ્થિર ગતિ.",
    "5 મિનિટ આરામ.",
    "સર્કિટ: 10 ડમ્બલ ગ્રાઉન્ડ-ટુ-ઓવરહેડ, 10 સ્ટેપ-ઓવર, 20 મીટર કૅરી, 5 બર્પી, એવા 3 રાઉન્ડ. સ્થિર ચાલો.",
    "ફૉર્મ બગડે તો તે બ્લૉક રોકો. આ ક્રમનો સ્વાદ છે, ટેસ્ટ નહીં.",
  ],
  opener: "ATHX કે બીજી હાઇબ્રિડ રેસ વિશે જાણવું છે? સ્ટ્રેન્થ અને કન્ડિશનિંગનો ભાગ હું લાઇવ કોચ કરું છું.",
  org: "ATHX, adidas કે CrossFit",
  safetyN: 13,
  safetyExtra: "કોઈ પણ રેસમાં એન્ટર કરો છો? તે ઇવેન્ટના પોતાના નિયમો વાંચો. હૃદય, બ્લડ પ્રેશર કે સાંધાની કોઈ તકલીફ છે? પહેલાં ડૉક્ટરને પૂછો.",
};

const cores: Record<PostLang, Core> = { en, ar, hi, es, zh, ja, gu };
const copy = Object.fromEntries(POST_LANGS.map((lang) => [lang, copyFor(lang, cores[lang])])) as Record<PostLang, PostCopy>;

export const whatIsAthxPost: BlogPost = {
  slug: WHAT_IS_ATHX_SLUG,
  published: RACE_PUBLISHED,
  modified: RACE_MODIFIED,
  about: "ATHX hybrid fitness competition",
  sources: WHAT_IS_ATHX_SOURCES,
  copy,
  ctaMid: true,
  seeAlso: ["hyrox-vs-deka-vs-athx", "hyrox-training-plan-for-beginners", "deka-fit-mile-strong-guide"],
};
