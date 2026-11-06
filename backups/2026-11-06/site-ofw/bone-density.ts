/**
 * Blog post: "Best strength exercises for bone density".
 * Citations in copy are written as {n} and point at BONE_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (title, authors, journal,
 * year, volume/pages and finding checked against the Europe PMC record and
 * abstract / Crossref, and each DOI checked as registered at doi.org, on
 * 6 Nov 2026; the WHO and NHS pages opened the same day and the wording used
 * read on the page). LIFTMOR was supervised HiRIT in screened postmenopausal
 * women, and the copy says plainly it is not a home plan. Cochrane found small
 * BMD gains and no clear fracture effect; ESSA and the UK consensus agree on
 * progressive resistance plus impact, and the UK statement adds spinal
 * extension and avoiding high spinal flexion. This is general training
 * information, not treatment: osteoporosis, fracture history and medicines
 * route to the reader's doctor or physio. No client results, no quotes, no
 * prices. Translations were drafted for this batch and need a native-speaker
 * review before launch (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const BONE_SLUG = "best-strength-exercises-for-bone-density";
export const BONE_PUBLISHED = "2026-11-06";
export const BONE_MODIFIED = "2026-11-06";

export const BONE_SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "Beck BR, Daly RM, Fiatarone Singh MA, Taaffe DR. Exercise and Sports Science Australia (ESSA) position statement on exercise prescription for the prevention and management of osteoporosis. J Sci Med Sport. 2017;20(5):438–445.",
    url: "https://doi.org/10.1016/j.jsams.2016.10.001",
  },
  {
    cite: "Watson SL, Weeks BK, Weis LJ, Harding AT, Horan SA, Beck BR. High-intensity resistance and impact training improves bone mineral density and physical function in postmenopausal women with osteopenia and osteoporosis: the LIFTMOR randomized controlled trial. J Bone Miner Res. 2018;33(2):211–220.",
    url: "https://doi.org/10.1002/jbmr.3284",
  },
  {
    cite: "Brooke-Wavell K, Skelton DA, Barker KL, et al. Strong, steady and straight: UK consensus statement on physical activity and exercise for osteoporosis. Br J Sports Med. 2022;56(15):837–846.",
    url: "https://doi.org/10.1136/bjsports-2021-104634",
  },
  {
    cite: "Howe TE, Shea B, Dawson LJ, et al. Exercise for preventing and treating osteoporosis in postmenopausal women. Cochrane Database Syst Rev. 2011;(7):CD000333.",
    url: "https://doi.org/10.1002/14651858.CD000333.pub2",
  },
  {
    cite: "NHS. Keep bones healthy over 65. nhs.uk.",
    url: "https://www.nhs.uk/live-well/bone-health/keep-your-bones-strong-over-65/",
  },
  {
    cite: "NHS. Osteoporosis. nhs.uk.",
    url: "https://www.nhs.uk/conditions/osteoporosis/",
  },
  {
    cite: "American College of Sports Medicine. Position stand: Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
    url: "https://doi.org/10.1249/MSS.0b013e3181915670",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;
const en: PostCopy = {
  metaTitle: "Best Strength Exercises for Bone Density: 7 Moves and a Sample Week | Online Fitness Worldwide",
  metaDescription:
    "The 7 best strength exercises for bone density: sit-to-stands, hinges, step-ups and more. How often to lift, what the trials found, a sample week.",
  h1: "Best strength exercises for bone density: 7 moves and a sample week",
  dek: "Bone responds to load. Lift what you can progress. Walk. Stay tall. Your doctor runs the scan and the medicines. We run the training.",
  updated: "Updated 6 November 2026",
  byline: "By Susmit Jalan, coach at Online Fitness Worldwide, Pune.",
  credentialsNote:
    "ASCA Level 1 (strength and conditioning) and ACE (anatomy and biomechanics). These are credentials held by the coach. Neither body endorses this business or this article.",
  labels: {
    home: "Home",
    blog: "Blog",
    why: "Why",
    how: "How",
    dose: "Dose",
    sources: "Sources",
    readIn: "Read this in",
    programs: "See the programs",
    whatsapp: "Ask on WhatsApp",
    whatsappText: "Hi Susmit, I read the article on strength exercises for bone density and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best strength exercises for bone density",
  },
  intro: [
    "A DEXA scan. A family history. Or you just want denser bones before they thin. Bone is living tissue. It adapts when muscle and impact load it.",
    "Exercise and Sports Science Australia (ESSA) says bone responds to impact and to high-intensity progressive resistance training, and that a plan should also train balance to cut falls risk.{2} A UK consensus statement puts it as resistance and impact for bone strength, strength and balance for falls, and spinal extension for posture — while avoiding a high degree of spinal flexion in exercise or daily life.{4}",
    "A Cochrane review of 43 trials in postmenopausal women found exercise produced small gains in bone mineral density. Lower-limb progressive resistance looked most useful at the femoral neck; combined programmes looked most useful at the spine. There was no clear effect on fracture numbers.{5}",
    "This list is simple home strength for the big muscles that pull on bone: a chair, a step, a bag. Progressive load is the point. It is training, not treatment. Osteoporosis, a fracture history, steroids or spine issues? Read \"Before you start\" first.",
  ],
  listHeading: "The 7 best strength exercises for bone density",
  items: [
    {
      name: "Sit-to-stand",
      why: "Thighs and hips, standing up against your own weight. Weight-bearing work for the legs that load the hips.",
      how: "Sit near the front of a sturdy chair, feet flat, hip-width. Arms forward. Lean in and stand up tall. Sit back down slowly, don't drop. Keep your back long; don't round forward as you sit. Breathe out as you stand. Too easy? Hold a bag of rice at your chest.",
      dose: "1 to 3 sets of 8 to 12, stopping near tired.{8}",
    },
    {
      name: "Hip hinge with a bag",
      why: "The back of the legs and the hips, with the spine long. A hinge, not a bend. The UK consensus flags high spinal flexion as something to avoid; hinge at the hips instead.{4}",
      how: "Hold a bag or dumbbells in front of your thighs. Soft knees. Push your hips back as if closing a car door with your hips. Keep your back long and your chest proud. Feel a stretch in the hamstrings. Drive the hips forward to stand. Don't round the lower back.",
      dose: "1 to 3 sets of 8 to 12.{8}",
    },
    {
      name: "Step-up",
      why: "One leg at a time, on your feet. Weight-bearing with a little impact as you step. Start low.",
      how: "Start on the bottom stair. Whole foot on the step. Push through it and stand tall. Lower the other foot slowly. Hold the rail. Go higher only when it stays smooth. Good shoes on. Diagnosed osteoporosis or a vertebral fracture? Keep the impact gentle and ask your doctor or physio first.{4}",
      dose: "1 to 3 sets of 8 to 10 each leg.",
    },
    {
      name: "Wall push-up",
      why: "Chest, shoulders and arms. Upper-body loading you can progress: wall, then counter, then floor.",
      how: "Hands on the wall at shoulder height, a little wider than your shoulders. Step your feet back. Body straight from head to heels. Bend your elbows and bring your chest towards the wall. Push away. Breathe out as you push.",
      dose: "1 to 3 sets of 8 to 12.{8}",
    },
    {
      name: "One-arm row",
      why: "Upper back and arms. Pulling balances the pushing, and it helps you stay tall.",
      how: "One hand on a table, feet a step apart, back long. Hold a water bottle, a bag or a dumbbell in the other hand. Pull it up towards your hip. Lower slowly. All reps one side, then the other. Don't twist or round.",
      dose: "1 to 3 sets of 8 to 12 each arm.{8}",
    },
    {
      name: "Calf raise",
      why: "Calves and ankles. Standing load through the lower legs. Easy to progress: two feet, then one.",
      how: "Stand tall, hands on a counter. Rise up onto the balls of your feet. Pause. Lower slowly. Easy? One foot at a time. Hold the counter if you need it for balance.",
      dose: "1 to 3 sets of 10 to 15.",
    },
    {
      name: "Farmer's carry",
      why: "Grip, shoulders, trunk and legs all at once. Walking with load — functional weight-bearing.",
      how: "Hold a heavy bag or water bottle in each hand. Stand tall, shoulders down, ribs quiet. Walk slowly across the room and back. Breathe normally. Put them down before your grip fails. Don't lean or twist.",
      dose: "3 walks of 20 to 40 seconds.",
    },
  ],
  enoughHeading: "How much, how hard, how often",
  enough: [
    "WHO advises adults to do muscle-strengthening work for all major muscle groups on 2 or more days a week.{1} NHS advice for bone health over 65 includes strength work at least twice a week, plus balance work to cut falls risk.{6}",
    "ESSA's bone position statement recommends a minimum of two progressive resistance sessions a week, plus regular brief weight-bearing impact and balance training, with variety so the skeleton keeps meeting new patterns of load.{2} The UK consensus likewise pairs resistance and impact for bone with strength and balance for falls, and adds spinal extension for posture.{4}",
    "Progressive load matters. When you beat 8 to 12 good reps by 1 or 2, add a little: about 2 to 10% more load.{8} No heavier bag? Slow the lowering, or add a set. Bone adapts to force; easy forever is not the plan.",
    "High-intensity supervised training can move the needle. In the LIFTMOR trial, 101 postmenopausal women with low bone mass did twice-weekly, 30-minute, supervised high-intensity resistance and impact sessions (5 sets of 5 at more than 85% of a 1-rep max) for 8 months. Lumbar spine BMD rose about 2.9% versus a 1.2% drop in the low-intensity home control; femoral neck BMD held better too. One minor adverse event (a brief lower-back spasm).{3} That was screened women, coached in a clinic. It is not a home plan. Do not copy the 5×5 heavy lifts alone.",
    "Cochrane's review found small BMD gains and no clear cut in fractures.{5} So: train for stronger muscle and safer movement; do not treat a denser DEXA as a promise. Medicines and fall-proofing still matter — your doctor's call.",
    "Stay tall. Add simple spinal extension on the floor if your doctor or physio is happy: lie face down and gently lift the chest a little, looking at the floor, without cranking the neck.{4} Avoid loaded round-back bending and twisting under load.{4}{7}",
  ],
  sampleHeading: "A sample week of strength training for bone density",
  sampleLabel: "Sample only. Not a prescription. Adjust it with your doctor or physio to your body, your scan and your history.",
  sample: [
    "Monday, about 30 minutes: sit-to-stand, hip hinge, wall push-up, one-arm row. 1 to 3 sets each.",
    "Tuesday: a 30-minute brisk walk. Add 5 minutes of easy balance work (heel-to-toe along a counter).",
    "Wednesday, about 30 minutes: step-up, wall push-up, one-arm row, calf raise, farmer's carry.",
    "Thursday: a 30-minute walk, or rest if your legs are still heavy.",
    "Friday, about 30 minutes: Monday's session again. Add a few gentle prone back extensions if cleared.",
    "Saturday: something you enjoy on your feet. A longer walk, dancing, a game of tennis if that suits you.",
    "Sunday: rest, or an easy walk.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "Iron Hour is 60 minutes, 1:1. Set-up at minute 0: camera so I can see your whole body, and any limits your doctor set. Warm-up from minute 4. The primary lift at 14 — progressive, not a max test. Accessories at 28. Cool-down at 50.",
    "Lean Reset is 20 sessions a month, 1:1, if you want more frequent coached days. Return is 45 minutes, 1:1, 12 alternate-day sessions a month, if you haven't trained in years. Open Floor is a small group.",
    "I'm a coach, not a doctor or a physio: if you have osteoporosis, a fracture history or spine limits, your doctor or physio sets the rules, and we train inside them.",
    "Coached live on Google Meet, Zoom or FaceTime, in your own living room. From Pune. In Hindi or English. On IST. Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{9} Diagnosed osteoporosis, a fracture history (especially of the spine), long-term steroids, or known spine issues? See your doctor or physio before you start or before you add impact or heavy load. The UK consensus: after a vertebral fracture or multiple low-trauma fractures, keep impact no higher than brisk walking unless a specialist says otherwise.{4} NHS advice with high fracture risk or spinal fractures: look after your back, bend your knees when you lift, avoid awkward bending and lifting, and be cautious with high-impact work — ask your GP.{6} NHS also lists regular weight-bearing, strengthening and balance exercise among things that help keep bones strong.{7} Stop for sharp pain, chest pain or dizziness. No breath-holding on hard efforts. This page does not change a medicine, a DEXA result or a physio plan.",
};
const ar: PostCopy = {
  metaTitle: "أفضل تمارين القوة لكثافة العظام: 7 تمارين ونموذج لأسبوع | Online Fitness Worldwide",
  metaDescription:
    "أفضل 7 تمارين قوة لكثافة العظام: النهوض من الكرسي، ومفصلة الورك، والصعود على درجة. كم مرة تتمرن، وما وجدته التجارب، ونموذج لأسبوع.",
  h1: "أفضل تمارين القوة لكثافة العظام: 7 تمارين ونموذج لأسبوع",
  dek: "العظم يستجيب للحمل. ارفع ما تستطيع زيادته تدريجياً. امشِ. ابقَ منتصباً. طبيبك يتولى الفحص والأدوية. ونحن نتولى التدريب.",
  updated: "تم التحديث في 6 نوفمبر 2026",
  byline: "بقلم سوسميت جالان، مدرب في Online Fitness Worldwide، بونه.",
  credentialsNote:
    "ASCA المستوى 1 (القوة والتكييف البدني) وACE (التشريح والميكانيكا الحيوية). هذه شهادات يحملها المدرب. لا تؤيد أيّ من الجهتين هذا العمل أو هذا المقال.",
  labels: {
    home: "الرئيسية",
    blog: "المدونة",
    why: "لماذا",
    how: "كيف",
    dose: "الجرعة",
    sources: "المصادر",
    readIn: "اقرأ بلغة أخرى",
    programs: "اطّلع على البرامج",
    whatsapp: "اسأل عبر واتساب",
    whatsappText: "مرحباً سوسميت، قرأت مقال تمارين القوة لكثافة العظام وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل تمارين القوة لكثافة العظام",
  },
  intro: [
    "فحص DEXA. تاريخ عائلي. أو تريد عظاماً أكثر كثافة قبل أن ترقّ. العظم نسيج حي. يتكيّف عندما تحمّله العضلة والصدمة.",
    "تقول Exercise and Sports Science Australia (ESSA) إن العظم يستجيب للصدمة ولتدريب المقاومة التصاعدي عالي الشدة، وإن الخطة يجب أن تدرب التوازن أيضاً لتقليل خطر السقوط.{2} ويصيغ بيان إجماع بريطاني الأمر هكذا: مقاومة وصدمة لقوة العظم، وقوة وتوازن للسقوط، وتمديد للعمود لتحسين القوام — مع تجنّب درجة عالية من ثني العمود في التمرين أو الحياة اليومية.{4}",
    "وجدت مراجعة كوكرين لـ43 تجربة على نساء بعد انقطاع الطمث أن التمرين أنتج زيادات صغيرة في كثافة المعادن بالعظم. بدت مقاومة الأطراف السفلية التصاعدية الأكثر فائدة عند عنق الفخذ؛ والبرامج المجمّعة عند العمود. ولم يظهر أثر واضح على أعداد الكسور.{5}",
    "هذه القائمة قوة بسيطة في البيت للعضلات الكبيرة التي تسحب العظم: كرسي ودرجة وحقيبة. الحمل التصاعدي هو الهدف. هذا تدريب، وليس علاجاً. هشاشة عظام أو كسور أو ستيرويدات أو مشاكل في العمود؟ اقرأ «قبل أن تبدأ» أولاً.",
  ],
  listHeading: "أفضل 7 تمارين قوة لكثافة العظام",
  items: [
    {
      name: "النهوض من الكرسي",
      why: "الفخذان والوركان، النهوض ضد وزنك. عمل تحميل للساقين يحمّل الوركين.",
      how: "اجلس قرب مقدمة كرسي متين، القدمان مسطحتان بعرض الوركين. الذراعان إلى الأمام. مِل وانهض مستقيماً. اجلس ببطء بلا سقوط. الظهر طويل؛ لا تتقوّس وأنت تجلس. أخرج النفس وأنت تنهض. سهل جداً؟ أمسك كيس أرز أمام صدرك.",
      dose: "من 1 إلى 3 مجموعات من 8 إلى 12، حتى قرب التعب.{8}",
    },
    {
      name: "مفصلة الورك مع حقيبة",
      why: "خلف الساقين والوركان، والعمود طويلاً. مفصلة، لا انحناء. ينبّه الإجماع البريطاني إلى تجنّب ثني العمود الشديد؛ اثنِ من الوركين.{4}",
      how: "أمسك حقيبة أو دمبلين أمام فخذيك. ركبتان ليّنتان. ادفع الوركين للخلف كأنك تغلق باب سيارة بوركين. الظهر طويل والصدر مرفوع. اشعر بتمدد أوتار الركبة. ادفع الوركين للأمام لتقف. لا تدوّر أسفل الظهر.",
      dose: "من 1 إلى 3 مجموعات من 8 إلى 12.{8}",
    },
    {
      name: "الصعود على درجة",
      why: "ساق واحدة كل مرة، وأنت واقف. تحميل مع قليل من الصدمة عند الصعود. ابدأ منخفضاً.",
      how: "ابدأ بالدرجة الأولى. القدم كلها على الدرجة. ادفع وانهض مستقيماً. أنزل القدم الأخرى ببطء. أمسك الدرابزين. ارفع الارتفاع فقط حين تبقى الحركة سلسة. حذاء مناسب. هشاشة عظام مشخصة أو كسر فقري؟ اجعل الصدمة خفيفة واسأل طبيبك أو أخصائي العلاج الطبيعي أولاً.{4}",
      dose: "من 1 إلى 3 مجموعات من 8 إلى 10 لكل ساق.",
    },
    {
      name: "الضغط على الجدار",
      why: "الصدر والكتفان والذراعان. تحميل للجزء العلوي يمكنك تصعيده: جدار، ثم طاولة، ثم أرض.",
      how: "اليدان على الجدار بارتفاع الكتفين، وأوسع قليلاً. أرجع قدميك. الجسم مستقيم من الرأس إلى الكعبين. اثنِ المرفقين وقرّب الصدر من الجدار. ادفع. أخرج النفس وأنت تدفع.",
      dose: "من 1 إلى 3 مجموعات من 8 إلى 12.{8}",
    },
    {
      name: "التجديف بذراع واحدة",
      why: "أعلى الظهر والذراعان. السحب يوازن الدفع ويساعدك على البقاء منتصباً.",
      how: "يد على طاولة، القدمان بينهما خطوة، الظهر طويل. في اليد الأخرى زجاجة أو حقيبة أو دمبل. اسحب نحو الورك. أنزل ببطء. كل التكرارات على جانب ثم الآخر. بلا التواء أو تقوّس.",
      dose: "من 1 إلى 3 مجموعات من 8 إلى 12 لكل ذراع.{8}",
    },
    {
      name: "رفع الكعبين",
      why: "الساق الخلفية والكاحلان. تحميل واقف عبر أسفل الساقين. سهل التصعيد: قدمان ثم قدم واحدة.",
      how: "قف مستقيماً، اليدان على طاولة. ارتفع على مقدمة القدمين. توقّف. انزل ببطء. سهل؟ قدم واحدة. أمسك الطاولة إن احتجت للتوازن.",
      dose: "من 1 إلى 3 مجموعات من 10 إلى 15.",
    },
    {
      name: "مشية المزارع",
      why: "القبضة والكتفان والجذع والساقان معاً. المشي مع حمل — تحميل وظيفي.",
      how: "حقيبة ثقيلة أو زجاجة في كل يد. قف مستقيماً، الكتفان لأسفل، الأضلاع هادئة. امشِ ببطء عبر الغرفة وعُد. تنفّس عادياً. ضعهما قبل أن تفشل القبضة. بلا ميل أو التواء.",
      dose: "3 جولات مشي من 20 إلى 40 ثانية.",
    },
  ],
  enoughHeading: "كم، وما الشدة، وكم مرة",
  enough: [
    "تنصح منظمة الصحة العالمية البالغين بتمارين تقوية العضلات للمجموعات الرئيسية في يومين أو أكثر أسبوعياً.{1} ونصيحة NHS لصحة العظام فوق 65 تشمل القوة مرتين أسبوعياً على الأقل، إضافة إلى التوازن لتقليل السقوط.{6}",
    "يوصي بيان ESSA للعظام بحد أدنى جلستين أسبوعياً لمقاومة تصاعدية، مع صدمة قصيرة مع تحميل وتدريب توازن، وتنويع حتى يظل الهيكل يلتقي أنماط حمل جديدة.{2} والإجماع البريطاني يجمع المقاومة والصدمة للعظم مع القوة والتوازن للسقوط، ويضيف تمديد العمود للقوام.{4}",
    "الحمل التصاعدي مهم. عندما تتجاوز 8 إلى 12 تكراراً جيداً بتكرار أو اثنين، أضف قليلاً: نحو 2 إلى 10% أكثر.{8} لا حقيبة أثقل؟ أبطئ النزول أو أضف مجموعة. العظم يتكيّف مع القوة؛ السهل دائماً ليس الخطة.",
    "التدريب عالي الشدة تحت إشراف يمكن أن يحرّك المؤشر. في تجربة LIFTMOR، أدّت 101 امرأة بعد انقطاع الطمث ذات كتلة عظم منخفضة جلستين أسبوعياً مدة 30 دقيقة بإشراف، مقاومة وصدمة عاليتي الشدة (5 مجموعات من 5 بأكثر من 85% من أقصى تكرار) لمدة 8 أشهر. ارتفعت كثافة العمود القطني نحو 2.9% مقابل انخفاض 1.2% في الضابط المنزلي الخفيف؛ وصمد عنق الفخذ أفضل أيضاً. حدث ضار طفيف واحد (تشنّج قطني قصير).{3} نساء مفحوصات، تدريب في عيادة. ليست خطة منزلية. لا تنسخ الرفعات الثقيلة 5×5 وحدك.",
    "وجدت مراجعة كوكرين زيادات صغيرة في الكثافة بلا قطع واضح في الكسور.{5} إذن: تدرّب لعضلة أقوى وحركة أكثر أماناً؛ لا تعامل فحصاً أعلى كثافة كوعد. الأدوية ومنع السقوط ما زالا مهمّين — قرار طبيبك.",
    "ابقَ منتصباً. أضف تمديداً بسيطاً للعمود على الأرض إن وافق طبيبك أو أخصائي العلاج الطبيعي: استلقِ على البطن وارفع الصدر قليلاً ناظراً إلى الأرض بلا ليّ عنق.{4} تجنّب ثني الظهر المستدير مع حمل والالتواء تحت الحمل.{4}{7}",
  ],
  sampleHeading: "نموذج لأسبوع من تمارين القوة لكثافة العظام",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله مع طبيبك أو أخصائي العلاج الطبيعي بحسب جسمك وفحصك وتاريخك.",
  sample: [
    "الاثنين، نحو 30 دقيقة: النهوض من الكرسي، ومفصلة الورك، والضغط على الجدار، والتجديف بذراع واحدة. من 1 إلى 3 مجموعات لكل تمرين.",
    "الثلاثاء: مشي سريع 30 دقيقة. أضف 5 دقائق توازناً سهلاً (كعب إلى أصابع بجانب طاولة).",
    "الأربعاء، نحو 30 دقيقة: الصعود على درجة، والضغط على الجدار، والتجديف بذراع واحدة، ورفع الكعبين، ومشية المزارع.",
    "الخميس: مشي 30 دقيقة، أو راحة إن كانت الساقان ما زالتا ثقيلتين.",
    "الجمعة، نحو 30 دقيقة: حصة الاثنين مرة أخرى. أضف بضع تمديدات لطيفة على البطن إن سُمح لك.",
    "السبت: شيء تستمتع به وأنت واقف. مشي أطول، رقص، تنس إن ناسبك.",
    "الأحد: راحة، أو مشي سهل.",
  ],
  coachedHeading: "تريد تدريباً مباشراً؟",
  coached: [
    "Iron Hour مدته 60 دقيقة، فردياً. التجهيز في الدقيقة 0: كاميرا ترى جسمك كاملاً وحدود طبيبك. الإحماء من الدقيقة 4. الرفعة الأساسية في 14 — تصاعدية، لا اختبار أقصى. المساعدة في 28. التهدئة في 50.",
    "Lean Reset عشرون جلسة في الشهر، فردياً، إن أردت أياماً مدربة أكثر. Return 45 دقيقة، فردياً، 12 جلسة شهرياً يوماً بعد يوم، إن لم تتدرب منذ سنوات. Open Floor مجموعة صغيرة.",
    "أنا مدرب، لست طبيباً ولا أخصائي علاج طبيعي: إن كانت لديك هشاشة عظام أو كسور أو حدود في العمود، يضع الطبيب أو الأخصائي القواعد، ونتدرب داخلها.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime في غرفة معيشتك. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند (IST). لم تقرر بعد؟ ابدأ باستشارة 30 دقيقة. محادثة، وليست تدريباً. الحجز يثبّت موعداً فقط. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. نموذج فحص ACSM: إن كنت غير نشيط وبلا أعراض وبلا مرض معروف في القلب أو الأيض أو الكلى، يمكنك بدء تمرين خفيف إلى معتدل دون إذن طبي والبناء تدريجياً. إن كانت لديك إحدى هذه الحالات أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{9} هشاشة عظام مشخصة، أو كسور (خصوصاً العمود)، أو ستيرويدات طويلة الأمد، أو مشاكل معروفة في العمود؟ راجع طبيبك أو أخصائي العلاج الطبيعي قبل البدء أو قبل إضافة صدمة أو حمل ثقيل. الإجماع البريطاني: بعد كسر فقري أو عدة كسور منخفضة الصدمة، أبقِ الصدمة بما لا يزيد عن المشي السريع ما لم يقل أخصائي غير ذلك.{4} نصيحة NHS مع خطر كسر مرتفع أو كسور فقرية: اعتنِ بظهرك، اثنِ الركبتين عند الرفع، تجنّب الانحناء والرفع المحرجين، وكن حذراً مع الصدمة العالية — اسأل طبيبك.{6} ويذكر NHS أيضاً التمرين مع تحميل والتقوية والتوازن ضمن ما يساعد على إبقاء العظام قوية.{7} توقّف عند ألم حاد أو ألم صدر أو دوار. لا تحبس النفس في الجهود الشاقة. هذه الصفحة لا تغيّر دواءً ولا نتيجة فحص ولا خطة علاج طبيعي.",
};
const hi: PostCopy = {
  metaTitle: "बोन डेंसिटी के लिए बेस्ट स्ट्रेंथ एक्सरसाइज़: 7 मूव्स और एक सैंपल हफ़्ता | Online Fitness Worldwide",
  metaDescription:
    "बोन डेंसिटी के लिए 7 बेस्ट स्ट्रेंथ एक्सरसाइज़: सिट-टू-स्टैंड, हिप हिंज, स्टेप-अप। कितनी बार करें, ट्रायल क्या कहते हैं, सैंपल हफ़्ता।",
  h1: "बोन डेंसिटी के लिए बेस्ट स्ट्रेंथ एक्सरसाइज़: 7 मूव्स और एक सैंपल हफ़्ता",
  dek: "हड्डी लोड पर प्रतिक्रिया करती है। जो आगे बढ़ा सकें वो उठाएँ। चलें। सीधा रहें। स्कैन और दवा डॉक्टर देखेंगे। ट्रेनिंग हम।",
  updated: "6 नवंबर 2026 को अपडेट किया गया",
  byline: "लेखक: सुस्मित जालान, कोच, Online Fitness Worldwide, पुणे।",
  credentialsNote:
    "ASCA लेवल 1 (स्ट्रेंथ और कंडीशनिंग) और ACE (एनाटॉमी और बायोमैकेनिक्स)। ये कोच के पास मौजूद क्रेडेंशियल हैं। इनमें से कोई भी संस्था इस बिज़नेस या इस लेख का समर्थन नहीं करती।",
  labels: {
    home: "होम",
    blog: "ब्लॉग",
    why: "क्यों",
    how: "कैसे",
    dose: "डोज़",
    sources: "स्रोत",
    readIn: "इस भाषा में पढ़ें",
    programs: "प्रोग्राम देखें",
    whatsapp: "WhatsApp पर पूछें",
    whatsappText: "नमस्ते सुस्मित, मैंने बोन डेंसिटी के लिए स्ट्रेंथ एक्सरसाइज़ वाला लेख पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
    skip: "सीधे कंटेंट पर जाएँ",
    crumb: "बोन डेंसिटी के लिए बेस्ट स्ट्रेंथ एक्सरसाइज़",
  },
  intro: [
    "एक DEXA स्कैन। पारिवारिक इतिहास। या हड्डियाँ पतली होने से पहले उन्हें घना रखना चाहते हैं। हड्डी जीवित ऊतक है। जब मसल और इम्पैक्ट उस पर लोड डालते हैं, वह अनुकूल होती है।",
    "Exercise and Sports Science Australia (ESSA) कहता है कि हड्डी इम्पैक्ट और हाई-इंटेंसिटी प्रोग्रेसिव रेज़िस्टेंस ट्रेनिंग पर प्रतिक्रिया करती है, और प्लान में गिरने का ख़तरा घटाने के लिए बैलेंस ट्रेनिंग भी होनी चाहिए।{2} ब्रिटेन का एक कंसेंसस इसे ऐसे कहता है: हड्डी की मजबूती के लिए रेज़िस्टेंस और इम्पैक्ट, गिरने के लिए स्ट्रेंथ और बैलेंस, और पोस्चर के लिए स्पाइनल एक्सटेंशन — और एक्सरसाइज़ या रोज़मर्रा में स्पाइन की ज़्यादा फ्लेक्शन से बचें।{4}",
    "पोस्टमेनोपॉज़ल महिलाओं के 43 ट्रायल की Cochrane समीक्षा में एक्सरसाइज़ से बोन मिनरल डेंसिटी में छोटी बढ़ोतरी मिली। फेमोरल नेक पर लोअर-लिम्ब प्रोग्रेसिव रेज़िस्टेंस सबसे उपयोगी लगी; स्पाइन पर कम्बाइंड प्रोग्राम। फ्रैक्चर की संख्या पर साफ़ असर नहीं दिखा।{5}",
    "यह लिस्ट घर पर उन बड़ी मसल्स के लिए सीधी स्ट्रेंथ है जो हड्डी खींचती हैं: कुर्सी, सीढ़ी, थैला। प्रोग्रेसिव लोड ही बात है। यह ट्रेनिंग है, इलाज नहीं। ऑस्टियोपोरोसिस, फ्रैक्चर इतिहास, स्टेरॉयड या रीढ़ की समस्या? पहले \"शुरू करने से पहले\" पढ़ें।",
  ],
  listHeading: "बोन डेंसिटी के लिए 7 बेस्ट स्ट्रेंथ एक्सरसाइज़",
  items: [
    {
      name: "सिट-टू-स्टैंड",
      why: "जाँघें और हिप्स, अपने वज़न के ख़िलाफ़ उठना। पैरों का वेट-बेयरिंग काम जो हिप्स पर लोड डालता है।",
      how: "मज़बूत कुर्सी के आगे वाले हिस्से पर बैठें, पैर ज़मीन पर, हिप्स जितनी दूरी। हाथ आगे। आगे झुकें और सीधे खड़े हों। धीरे बैठें, धम्म से नहीं। पीठ लंबी; बैठते समय गोल न करें। उठते समय साँस छोड़ें। बहुत आसान? छाती पर चावल का थैला पकड़ें।",
      dose: "8 से 12 के 1 से 3 सेट, थकान के क़रीब।{8}",
    },
    {
      name: "थैले के साथ हिप हिंज",
      why: "पैरों का पिछला हिस्सा और हिप्स, स्पाइन लंबी। हिंज है, झुकना नहीं। ब्रिटेन का कंसेंसस ज़्यादा स्पाइनल फ्लेक्शन से बचने को कहता है; हिप्स से मोड़ें।{4}",
      how: "जाँघों के सामने थैला या डंबल पकड़ें। घुटने नरम। हिप्स पीछे धकेलें जैसे कार का दरवाज़ा हिप्स से बंद कर रहे हों। पीठ लंबी, छाती खुली। हैमस्ट्रिंग में खिंचाव महसूस करें। खड़े होने के लिए हिप्स आगे धकेलें। निचली पीठ गोल न करें।",
      dose: "8 से 12 के 1 से 3 सेट।{8}",
    },
    {
      name: "स्टेप-अप",
      why: "एक समय में एक पैर, खड़े। वेट-बेयरिंग, कदम पर थोड़ा इम्पैक्ट। कम ऊँचाई से शुरू करें।",
      how: "सबसे नीचे की सीढ़ी से। पूरा पैर सीढ़ी पर। धक्का देकर सीधे खड़े हों। दूसरा पैर धीरे नीचे। रेलिंग पकड़ें। मूव स्मूद रहे तभी ऊँचाई बढ़ाएँ। अच्छे जूते। डायग्नोज़्ड ऑस्टियोपोरोसिस या वर्टिब्रल फ्रैक्चर? इम्पैक्ट हल्का रखें और पहले डॉक्टर या फिज़ियो से पूछें।{4}",
      dose: "हर पैर से 8 से 10 के 1 से 3 सेट।",
    },
    {
      name: "वॉल पुश-अप",
      why: "छाती, कंधे और बाँहें। ऊपरी शरीर का लोड जिसे आगे बढ़ा सकते हैं: दीवार, फिर काउंटर, फिर फ़र्श।",
      how: "हाथ दीवार पर कंधे की ऊँचाई, कंधों से थोड़े चौड़े। पैर एक क़दम पीछे। सिर से एड़ी तक सीधा। कोहनियाँ मोड़ें, छाती दीवार की ओर। धक्का दें। धक्के पर साँस छोड़ें।",
      dose: "8 से 12 के 1 से 3 सेट।{8}",
    },
    {
      name: "वन-आर्म रो",
      why: "ऊपरी पीठ और बाँहें। खींचना धकेलने का संतुलन बनाता है, और सीधा रहने में मदद करता है।",
      how: "एक हाथ टेबल पर, पैर एक क़दम दूर, पीठ लंबी। दूसरे हाथ में बोतल, थैला या डंबल। हिप की ओर खींचें। धीरे नीचे। एक तरफ़ सारे रेप, फिर दूसरी। मोड़ें या गोल न करें।",
      dose: "हर हाथ से 8 से 12 के 1 से 3 सेट।{8}",
    },
    {
      name: "काफ़ रेज़",
      why: "पिंडलियाँ और टखने। निचले पैरों से खड़े लोड। आगे बढ़ाना आसान: दो पैर, फिर एक।",
      how: "सीधे खड़े, हाथ काउंटर पर। पंजों पर उठें। रुकें। धीरे नीचे। आसान? एक-एक पैर। बैलेंस चाहिए तो पकड़ें।",
      dose: "10 से 15 के 1 से 3 सेट।",
    },
    {
      name: "फ़ार्मर्स कैरी",
      why: "ग्रिप, कंधे, धड़ और पैर एक साथ। लोड के साथ चलना — फ़ंक्शनल वेट-बेयरिंग।",
      how: "हर हाथ में भारी थैला या बोतल। सीधे, कंधे नीचे, पसलियाँ शांत। कमरे में धीरे चलें और वापस। सामान्य साँस। ग्रिप छूटे उससे पहले नीचे रखें। झुकें या मुड़ें नहीं।",
      dose: "20 से 40 सेकंड की 3 वॉक।",
    },
  ],
  enoughHeading: "कितना, कितना भारी, कितनी बार",
  enough: [
    "WHO वयस्कों को हफ़्ते में 2 या ज़्यादा दिन प्रमुख मसल ग्रुप्स की स्ट्रेंथनिंग की सलाह देता है।{1} 65+ की बोन हेल्थ के लिए NHS में हफ़्ते में कम से कम दो बार स्ट्रेंथ, और गिरने का ख़तरा घटाने के लिए बैलेंस भी है।{6}",
    "ESSA का बोन स्टेटमेंट हफ़्ते में कम से कम दो प्रोग्रेसिव रेज़िस्टेंस सेशन, साथ में संक्षिप्त वेट-बेयरिंग इम्पैक्ट और बैलेंस, और विविधता सुझाता है ताकि कंकाल नए लोड पैटर्न से मिलता रहे।{2} ब्रिटेन का कंसेंसस भी हड्डी के लिए रेज़िस्टेंस और इम्पैक्ट को गिरने के लिए स्ट्रेंथ और बैलेंस से जोड़ता है, और पोस्चर के लिए स्पाइनल एक्सटेंशन जोड़ता है।{4}",
    "प्रोग्रेसिव लोड मायने रखता है। जब 8 से 12 अच्छे रेप से 1 या 2 ज़्यादा हो जाएँ, थोड़ा बढ़ाएँ: लगभग 2 से 10% ज़्यादा लोड।{8} भारी थैला नहीं? नीचे आना धीमा करें, या एक सेट जोड़ें। हड्डी बल पर अनुकूल होती है; हमेशा आसान प्लान नहीं।",
    "सुपरवाइज़्ड हाई-इंटेंसिटी ट्रेनिंग सूई हिला सकती है। LIFTMOR ट्रायल में, कम बोन मास वाली 101 पोस्टमेनोपॉज़ल महिलाओं ने 8 महीने तक हफ़्ते में दो बार 30 मिनट सुपरवाइज़्ड हाई-इंटेंसिटी रेज़िस्टेंस और इम्पैक्ट किए (5 सेट × 5, 1RM के 85% से ज़्यादा)। लम्बर स्पाइन BMD लगभग 2.9% बढ़ा बनाम लो-इंटेंसिटी होम कंट्रोल में 1.2% गिरावट; फेमोरल नेक भी बेहतर रहा। एक मामूली प्रतिकूल घटना (संक्षिप्त लोअर-बैक स्पाज़्म)।{3} स्क्रीन की गई महिलाएँ, क्लिनिक में कोचिंग। यह होम प्लान नहीं। अकेले भारी 5×5 न दोहराएँ।",
    "Cochrane समीक्षा में छोटी BMD बढ़ोतरी और फ्रैक्चर में साफ़ कटौती नहीं मिली।{5} इसलिए: मज़बूत मसल और सुरक्षित मूवमेंट के लिए ट्रेन करें; घने DEXA को वादा न समझें। दवा और फॉल-प्रूफ़िंग अभी भी मायने रखते हैं — डॉक्टर का फ़ैसला।",
    "सीधे रहें। डॉक्टर या फिज़ियो राज़ी हों तो फ़र्श पर सरल स्पाइनल एक्सटेंशन जोड़ें: पेट के बल लेटें, छाती थोड़ी उठाएँ, फ़र्श देखें, गर्दन न झटकाएँ।{4} लोड के साथ गोल पीठ झुकने और लोड के नीचे मुड़ने से बचें।{4}{7}",
  ],
  sampleHeading: "बोन डेंसिटी के लिए स्ट्रेंथ ट्रेनिंग का एक सैंपल हफ़्ता",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। अपने डॉक्टर या फिज़ियो के साथ इसे अपने शरीर, अपने स्कैन और अपने इतिहास के हिसाब से बदलें।",
  sample: [
    "सोमवार, लगभग 30 मिनट: सिट-टू-स्टैंड, हिप हिंज, वॉल पुश-अप, वन-आर्म रो। हर एक के 1 से 3 सेट।",
    "मंगलवार: 30 मिनट तेज़ वॉक। 5 मिनट आसान बैलेंस जोड़ें (काउंटर के साथ हील-टू-टो)।",
    "बुधवार, लगभग 30 मिनट: स्टेप-अप, वॉल पुश-अप, वन-आर्म रो, काफ़ रेज़, फ़ार्मर्स कैरी।",
    "गुरुवार: 30 मिनट वॉक, या पैर अभी भारी हों तो आराम।",
    "शुक्रवार, लगभग 30 मिनट: सोमवार का सेशन फिर। क्लियर हो तो कुछ नरम प्रोन बैक एक्सटेंशन।",
    "शनिवार: जो खड़े होकर पसंद हो। लंबी वॉक, डांस, या अगर सूट करे तो टेनिस।",
    "रविवार: आराम, या आसान वॉक।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "Iron Hour 60 मिनट का है, 1:1। मिनट 0 पर सेट-अप: कैमरा ताकि पूरा शरीर दिखे, और डॉक्टर की सीमाएँ। मिनट 4 से वार्म-अप। मिनट 14 पर मुख्य लिफ़्ट — प्रोग्रेसिव, मैक्स टेस्ट नहीं। 28 पर एक्सेसरीज़। 50 पर कूल-डाउन।",
    "Lean Reset महीने में 20 सेशन, 1:1, अगर ज़्यादा कोच्ड दिन चाहिए। Return 45 मिनट, 1:1, महीने में 12 सेशन एक दिन छोड़कर, अगर सालों से ट्रेनिंग नहीं की। Open Floor छोटा ग्रुप।",
    "मैं कोच हूँ, डॉक्टर या फिज़ियो नहीं: ऑस्टियोपोरोसिस, फ्रैक्चर इतिहास या रीढ़ की सीमाएँ हों तो नियम डॉक्टर या फिज़ियो तय करते हैं, और हम उनके अंदर ट्रेन करते हैं।",
    "Google Meet, Zoom या FaceTime पर लाइव, आपके लिविंग रूम में। पुणे से। हिंदी या अंग्रेज़ी में। IST पर। अभी तय नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। बातचीत है, ट्रेनिंग नहीं। बुकिंग सिर्फ़ समय रोकती है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, मेडिकल सलाह नहीं। ACSM स्क्रीनिंग: अगर निष्क्रिय हैं, लक्षण नहीं, और दिल, मेटाबॉलिक या किडनी की ज्ञात बीमारी नहीं, तो हल्की से मध्यम एक्सरसाइज़ बिना क्लियरेंस शुरू करके धीरे बढ़ा सकते हैं। इनमें से कोई बीमारी हो, या सीने में दर्द, असामान्य साँस फूलना या चक्कर हों, तो पहले मेडिकल क्लियरेंस लें।{9} डायग्नोज़्ड ऑस्टियोपोरोसिस, फ्रैक्चर इतिहास (खासकर रीढ़), लंबे स्टेरॉयड, या ज्ञात रीढ़ समस्याएँ? शुरू करने से पहले, या इम्पैक्ट/भारी लोड जोड़ने से पहले डॉक्टर या फिज़ियो से मिलें। ब्रिटेन कंसेंसस: वर्टिब्रल फ्रैक्चर या कई लो-ट्रॉमा फ्रैक्चर के बाद इम्पैक्ट आमतौर पर तेज़ वॉक जितना ही रखें, जब तक स्पेशलिस्ट कुछ और न कहे।{4} ऊँचे फ्रैक्चर रिस्क या स्पाइनल फ्रैक्चर पर NHS: पीठ संभालें, उठाते समय घुटने मोड़ें, अजीब झुकाव/उठाव से बचें, हाई-इम्पैक्ट से सावधान — अपने डॉक्टर से पूछें।{6} NHS वेट-बेयरिंग, स्ट्रेंथनिंग और बैलेंस एक्सरसाइज़ को भी उन चीज़ों में गिनता है जो हड्डियों को मज़बूत रखने में मदद करती हैं।{7} तेज़ दर्द, सीने में दर्द या चक्कर पर रुकें। कठिन प्रयास पर साँस न रोकें। यह पेज कोई दवा, DEXA या फिज़ियो प्लान नहीं बदलता।",
};
const es: PostCopy = {
  metaTitle: "Mejores ejercicios de fuerza para la densidad ósea: 7 ejercicios y una semana de ejemplo | Online Fitness Worldwide",
  metaDescription:
    "Los 7 mejores ejercicios de fuerza para la densidad ósea: silla, bisagra de cadera, escalón y más. Cuánto entrenar, qué dicen los ensayos y una semana tipo.",
  h1: "Mejores ejercicios de fuerza para la densidad ósea: 7 ejercicios y una semana de ejemplo",
  dek: "El hueso responde a la carga. Levanta lo que puedas progresar. Camina. Mantente erguido. Tu médico lleva el escáner y los medicamentos. Nosotros, el entrenamiento.",
  updated: "Actualizado el 6 de noviembre de 2026",
  byline: "Por Susmit Jalan, entrenador en Online Fitness Worldwide, Pune.",
  credentialsNote:
    "ASCA Nivel 1 (fuerza y acondicionamiento) y ACE (anatomía y biomecánica). Son credenciales del entrenador. Ninguna de las dos entidades respalda este negocio ni este artículo.",
  labels: {
    home: "Inicio",
    blog: "Blog",
    why: "Por qué",
    how: "Cómo",
    dose: "Dosis",
    sources: "Fuentes",
    readIn: "Leer en",
    programs: "Ver los programas",
    whatsapp: "Pregunta por WhatsApp",
    whatsappText: "Hola Susmit, leí el artículo sobre ejercicios de fuerza para la densidad ósea y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Mejores ejercicios de fuerza para la densidad ósea",
  },
  intro: [
    "Un DEXA. Antecedentes familiares. O simplemente quieres huesos más densos antes de que se adelgacen. El hueso es tejido vivo. Se adapta cuando el músculo y el impacto lo cargan.",
    "Exercise and Sports Science Australia (ESSA) dice que el hueso responde al impacto y al entrenamiento de fuerza progresivo de alta intensidad, y que el plan también debe entrenar el equilibrio para reducir caídas.{2} Un consenso del Reino Unido lo resume así: fuerza e impacto para el hueso, fuerza y equilibrio para las caídas, y extensión de la columna para la postura, evitando un alto grado de flexión de la columna en el ejercicio o en la vida diaria.{4}",
    "Una revisión Cochrane de 43 ensayos en mujeres posmenopáusicas encontró que el ejercicio produjo pequeñas ganancias en la densidad mineral ósea. La fuerza progresiva de las piernas pareció más útil en el cuello femoral; los programas combinados, en la columna. No hubo un efecto claro sobre el número de fracturas.{5}",
    "Esta lista es fuerza sencilla en casa para los músculos grandes que tiran del hueso: una silla, un escalón, una bolsa. La carga progresiva es el punto. Es entrenamiento, no tratamiento. ¿Osteoporosis, fracturas, esteroides o problemas de columna? Lee primero «Antes de empezar».",
  ],
  listHeading: "Los 7 mejores ejercicios de fuerza para la densidad ósea",
  items: [
    {
      name: "Levantarse de la silla",
      why: "Muslos y caderas, levantándote contra tu propio peso. Trabajo de carga para las piernas que cargan las caderas.",
      how: "Siéntate cerca del borde de una silla firme, pies planos, a la anchura de las caderas. Brazos adelante. Inclínate y levántate bien erguido. Siéntate despacio, sin dejarte caer. Espalda larga; no redondees al sentarte. Expira al levantarte. ¿Demasiado fácil? Sujeta una bolsa de arroz al pecho.",
      dose: "1 a 3 series de 8 a 12, hasta cerca del cansancio.{8}",
    },
    {
      name: "Bisagra de cadera con bolsa",
      why: "Parte posterior de las piernas y caderas, con la columna larga. Es una bisagra, no una flexión. El consenso del Reino Unido señala evitar una flexión alta de la columna; pivota desde las caderas.{4}",
      how: "Sujeta una bolsa o mancuernas delante de los muslos. Rodillas suaves. Empuja las caderas atrás como si cerraras una puerta del coche con ellas. Espalda larga y pecho orgulloso. Nota el estiramiento en los isquiotibiales. Empuja las caderas adelante para ponerte de pie. No redondees la zona lumbar.",
      dose: "1 a 3 series de 8 a 12.{8}",
    },
    {
      name: "Subir al escalón",
      why: "Una pierna cada vez, de pie. Carga con un poco de impacto al subir. Empieza bajo.",
      how: "Empieza en el primer escalón. Todo el pie en el peldaño. Empuja y ponte erguido. Baja el otro pie despacio. Agárrate a la barandilla. Sube la altura solo cuando el movimiento sea limpio. Buen calzado. ¿Osteoporosis diagnosticada o fractura vertebral? Mantén el impacto suave y pregunta antes a tu médico o fisioterapeuta.{4}",
      dose: "1 a 3 series de 8 a 10 por pierna.",
    },
    {
      name: "Flexiones en la pared",
      why: "Pecho, hombros y brazos. Carga de tren superior que puedes progresar: pared, luego encimera, luego suelo.",
      how: "Manos en la pared a la altura de los hombros, un poco más anchas. Da un paso atrás. Cuerpo recto de la cabeza a los talones. Flexiona los codos y acerca el pecho a la pared. Empuja. Expira al empujar.",
      dose: "1 a 3 series de 8 a 12.{8}",
    },
    {
      name: "Remo a un brazo",
      why: "Espalda alta y brazos. Tirar equilibra el empujar y te ayuda a mantenerte erguido.",
      how: "Una mano en una mesa, pies separados un paso, espalda larga. En la otra, una botella, una bolsa o una mancuerna. Tira hacia la cadera. Baja despacio. Todas las repeticiones de un lado, luego el otro. Sin girar ni redondear.",
      dose: "1 a 3 series de 8 a 12 por brazo.{8}",
    },
    {
      name: "Elevación de talones",
      why: "Gemelos y tobillos. Carga de pie a través de las piernas. Fácil de progresar: dos pies, luego uno.",
      how: "De pie, erguido, manos en una encimera. Súbete a las puntas. Pausa. Baja despacio. ¿Fácil? Un pie cada vez. Agárrate si necesitas equilibrio.",
      dose: "1 a 3 series de 10 a 15.",
    },
    {
      name: "Paseo del granjero",
      why: "Agarre, hombros, tronco y piernas a la vez. Caminar con carga: peso funcional.",
      how: "Una bolsa pesada o botella en cada mano. Erguido, hombros abajo, costillas quietas. Camina despacio por la habitación y vuelve. Respira normal. Déjalas antes de que falle el agarre. Sin inclinarte ni girar.",
      dose: "3 paseos de 20 a 40 segundos.",
    },
  ],
  enoughHeading: "Cuánto, qué tan duro, con qué frecuencia",
  enough: [
    "La OMS aconseja a los adultos trabajo de fuerza para todos los grupos musculares principales en 2 o más días a la semana.{1} El NHS, para la salud ósea mayores de 65, incluye fuerza al menos dos veces por semana, más equilibrio para reducir caídas.{6}",
    "El posicionamiento óseo de ESSA recomienda un mínimo de dos sesiones semanales de fuerza progresiva, más impacto breve con carga y entrenamiento de equilibrio, con variedad para que el esqueleto siga encontrando patrones nuevos.{2} El consenso del Reino Unido une fuerza e impacto para el hueso con fuerza y equilibrio para las caídas, y añade extensión de la columna para la postura.{4}",
    "La carga progresiva importa. Cuando superas 8 a 12 buenas repeticiones por 1 o 2, añade un poco: unos 2 a 10% más de carga.{8} ¿Sin bolsa más pesada? Ralentiza la bajada o añade una serie. El hueso se adapta a la fuerza; fácil para siempre no es el plan.",
    "El entrenamiento supervisado de alta intensidad puede mover la aguja. En el ensayo LIFTMOR, 101 mujeres posmenopáusicas con baja masa ósea hicieron dos sesiones semanales de 30 minutos, supervisadas, de fuerza e impacto de alta intensidad (5 series de 5 a más del 85% de 1RM) durante 8 meses. La DMO de la columna lumbar subió unos 2,9% frente a una caída del 1,2% en el control ligero en casa; el cuello femoral también se sostuvo mejor. Un evento adverso menor (un breve espasmo lumbar).{3} Eran mujeres cribadas, entrenadas en clínica. No es un plan casero. No copies los 5×5 pesados a solas.",
    "La revisión Cochrane halló pequeñas ganancias de DMO y ningún recorte claro de fracturas.{5} Entrena para más músculo y un movimiento más seguro; no trates un DEXA más denso como una promesa. Los medicamentos y prevenir caídas siguen importando: lo decide tu médico.",
    "Mantente erguido. Añade extensión espinal sencilla en el suelo si tu médico o fisioterapeuta lo aprueba: boca abajo, eleva un poco el pecho mirando al suelo, sin forzar el cuello.{4} Evita flexionar la espalda redondeada con carga y girar bajo carga.{4}{7}",
  ],
  sampleHeading: "Una semana de ejemplo de fuerza para la densidad ósea",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo con tu médico o fisioterapeuta a tu cuerpo, tu escáner y tu historia.",
  sample: [
    "Lunes, unos 30 minutos: levantarse de la silla, bisagra de cadera, flexiones en la pared, remo a un brazo. 1 a 3 series cada uno.",
    "Martes: caminata enérgica de 30 minutos. Añade 5 minutos de equilibrio fácil (talón-punta junto a una encimera).",
    "Miércoles, unos 30 minutos: subir al escalón, flexiones en la pared, remo a un brazo, elevación de talones, paseo del granjero.",
    "Jueves: caminata de 30 minutos, o descanso si las piernas siguen pesadas.",
    "Viernes, unos 30 minutos: de nuevo la sesión del lunes. Añade unas extensiones prono suaves si estás autorizado.",
    "Sábado: algo que disfrutes de pie. Una caminata más larga, baile, tenis si te conviene.",
    "Domingo: descanso, o una caminata suave.",
  ],
  coachedHeading: "¿Lo quieres entrenado en directo?",
  coached: [
    "Iron Hour son 60 minutos, 1:1. Preparación en el minuto 0: cámara para ver todo el cuerpo y los límites que puso tu médico. Calentamiento desde el minuto 4. El ejercicio principal en el 14: progresivo, no un máximo. Accesorios en el 28. Vuelta a la calma en el 50.",
    "Lean Reset son 20 sesiones al mes, 1:1, si quieres más días entrenados. Return son 45 minutos, 1:1, 12 sesiones al mes en días alternos, si llevas años sin entrenar. Open Floor es un grupo pequeño.",
    "Soy entrenador, no médico ni fisioterapeuta: si tienes osteoporosis, fracturas o límites de columna, tu médico o fisioterapeuta pone las reglas y entrenamos dentro de ellas.",
    "En directo por Google Meet, Zoom o FaceTime, en tu salón. Desde Pune. En hindi o inglés. En horario IST. ¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva solo guarda una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. Modelo de cribado del ACSM: si eres inactivo, no tienes síntomas ni enfermedad conocida del corazón, metabólica o renal, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo. Si tienes una de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, consigue primero la autorización médica.{9} ¿Osteoporosis diagnosticada, fracturas (sobre todo de columna), esteroides a largo plazo o problemas conocidos de columna? Consulta a tu médico o fisioterapeuta antes de empezar o de añadir impacto o carga pesada. Consenso del Reino Unido: tras una fractura vertebral o varias fracturas de bajo traumatismo, mantén el impacto como máximo al de una caminata enérgica salvo que un especialista diga otra cosa.{4} Consejo del NHS con alto riesgo de fractura o fracturas vertebrales: cuida la espalda, flexiona las rodillas al levantar, evita flexiones y levantamientos torpes, y sé cauto con el alto impacto: pregunta a tu médico.{6} El NHS también incluye ejercicio con carga, de fuerza y de equilibrio entre lo que ayuda a mantener los huesos fuertes.{7} Para si hay dolor agudo, dolor en el pecho o mareo. No aguantes la respiración en esfuerzos duros. Esta página no cambia un medicamento, un DEXA ni un plan de fisioterapia.",
};
const zh: PostCopy = {
  metaTitle: "增强骨密度的7个最佳力量动作与一周示例 | Online Fitness Worldwide",
  metaDescription:
    "增强骨密度的7个力量动作：椅上起身、髋铰链、踏步等。练多久、试验怎么说、一周示例。",
  h1: "增强骨密度的最佳力量练习：7个动作与一周示例",
  dek: "骨骼会对负荷作出适应。举起你能逐步加重的重量。走路。保持直立。医生管检查和药物。我们管训练。",
  updated: "更新于2026年11月6日",
  byline: "作者：Susmit Jalan，Online Fitness Worldwide教练，浦那。",
  credentialsNote:
    "ASCA一级（力量与体能）和ACE（解剖学与生物力学）。这些是教练持有的资质证书。两家机构均不为本业务或本文背书。",
  labels: {
    home: "首页",
    blog: "博客",
    why: "为什么",
    how: "怎么做",
    dose: "训练量",
    sources: "参考来源",
    readIn: "其他语言版本",
    programs: "查看课程",
    whatsapp: "通过WhatsApp咨询",
    whatsappText: "你好Susmit，我读了关于骨密度力量训练的文章，想预约咨询",
    skip: "跳到正文",
    crumb: "增强骨密度的最佳力量练习",
  },
  intro: [
    "一次骨密度扫描。家族史。或者你只是想在骨质变薄之前让骨头更结实。骨头是活组织。肌肉和冲击给它负荷时，它会适应。",
    "澳大利亚运动科学协会（ESSA）指出，骨头会对冲击和高强度渐进抗阻训练作出反应，计划还应训练平衡以降低跌倒风险。{2}英国共识表述为：抗阻与冲击增强骨强度，力量与平衡减少跌倒，脊柱伸展改善姿势——同时避免在运动或日常生活中大幅度脊柱屈曲。{4}",
    "Cochrane对43项绝经后女性试验的综述发现，运动带来骨密度的小幅提高。下肢渐进抗阻对股骨颈似乎最有用；联合方案对脊柱似乎最有用。骨折数量未见明确效果。{5}",
    "这份清单是在家练大肌群、拉动骨头的简单力量：一把椅子、一级台阶、一个袋子。关键是逐步加重。这是训练，不是治疗。有骨质疏松、骨折史、激素药或脊柱问题？先读「开始之前」。",
  ],
  listHeading: "增强骨密度的7个最佳力量动作",
  items: [
    {
      name: "椅上起身",
      why: "大腿和髋部，用自身体重站起来。下肢负重，负荷传到髋部。",
      how: "坐在稳固椅子前缘，双脚平放，与髋同宽。双臂前伸。前倾，站直。慢慢坐下，不要砸下去。背部拉长；坐下时不要含胸驼背。站起时呼气。太轻松？胸前抱一袋米。",
      dose: "1到3组，每组8到12次，做到接近疲劳。{8}",
    },
    {
      name: "负重髋铰链",
      why: "腿后侧和髋部，脊柱保持拉长。是铰链，不是弯腰。英国共识提醒避免大幅度脊柱屈曲；从髋部折叠。{4}",
      how: "双手在大腿前持袋或哑铃。膝微屈。髋部向后推，像用髋关车门。背部拉长，胸部打开。感受腘绳肌拉伸。髋部向前推站直。不要弓腰。",
      dose: "1到3组，每组8到12次。{8}",
    },
    {
      name: "踏步上台阶",
      why: "一次一条腿，双脚承重。踏步时有一点冲击。从低开始。",
      how: "从最低一级台阶开始。整脚踩实。蹬腿站直。另一脚慢慢放下。扶好扶手。动作顺畅再升高。穿好鞋。已诊断骨质疏松或椎体骨折？冲击要轻，先问医生或理疗师。{4}",
      dose: "每腿1到3组，每组8到10次。",
    },
    {
      name: "墙壁俯卧撑",
      why: "胸、肩、臂。上肢负荷可进步：墙→台面→地面。",
      how: "双手撑墙与肩同高，略宽于肩。双脚后退一步。从头到脚跟身体成一线。屈肘，胸口靠近墙。推开。推时呼气。",
      dose: "1到3组，每组8到12次。{8}",
    },
    {
      name: "单臂划船",
      why: "上背和手臂。拉与推平衡，也帮助你保持直立。",
      how: "一手撑桌，双脚前后分开，背拉长。另一手持水瓶、袋子或哑铃。拉向髋侧。慢慢放下。一侧做完再换另一侧。不要扭转或弓背。",
      dose: "每臂1到3组，每组8到12次。{8}",
    },
    {
      name: "提踵",
      why: "小腿和脚踝。站立负荷经过小腿。易进步：双脚，再单脚。",
      how: "站直，手扶台面。踮起脚尖。停一下。慢慢放下。轻松？改为单脚。需要平衡就扶着。",
      dose: "1到3组，每组10到15次。",
    },
    {
      name: "农夫行走",
      why: "握力、肩、躯干和腿一起。负重行走——功能性负重。",
      how: "每手一只重袋或水瓶。站直，肩下沉，肋骨稳定。慢慢走过房间再回来。正常呼吸。握力撑不住前放下。不要侧倾或扭转。",
      dose: "3趟，每趟20到40秒。",
    },
  ],
  enoughHeading: "练多少、多用力、多频繁",
  enough: [
    "世卫组织建议成人每周至少2天做覆盖主要肌群的力量练习。{1} NHS对65岁以上骨健康建议包括每周至少两次力量练习，外加平衡练习以降低跌倒风险。{6}",
    "ESSA骨健康立场声明建议每周至少两次渐进抗阻，加上规律的短时负重冲击与平衡训练，并变换花样，让骨骼持续遇到新的负荷模式。{2}英国共识同样把抗阻与冲击用于骨头、力量与平衡用于防跌倒，并加上脊柱伸展改善姿势。{4}",
    "逐步加重很重要。当你能比目标多做1到2次良好的8到12次时，加一点：大约2%到10%的负荷。{8}没有更重的袋子？放慢下降，或加一组。骨头适应的是力；永远太轻松不是计划。",
    "高强度有监督训练可以推动指标。LIFTMOR试验中，101名低骨量绝经后女性每周两次、每次30分钟、有监督的高强度抗阻与冲击训练（5组×5次，强度超过1RM的85%），持续8个月。腰椎骨密度约上升2.9%，低强度居家对照则下降约1.2%；股骨颈也维持更好。一次轻微不良事件（短暂下背痉挛）。{3}受试者经过筛查，在诊所指导。这不是居家方案。不要独自照搬大重量5×5。",
    "Cochrane综述看到骨密度小幅提高，骨折未见明确减少。{5}所以：为更强的肌肉和更安全的动作而练；不要把更密的扫描结果当成承诺。药物和防跌倒仍然重要——由你的医生决定。",
    "保持直立。若医生或理疗师同意，可在地板上做简单脊柱伸展：俯卧，轻轻抬起胸口，眼睛看地向，不要猛抬头。{4}避免负重弓背弯腰，也避免负重扭转。{4}{7}",
  ],
  sampleHeading: "骨密度力量训练的一周示例",
  sampleLabel: "仅为示例，不是处方。请与医生或理疗师一起，按你的身体、扫描结果和病史调整。",
  sample: [
    "周一，约30分钟：椅上起身、髋铰链、墙壁俯卧撑、单臂划船。各1到3组。",
    "周二：30分钟快步走。再加5分钟简单平衡（扶台面脚跟对脚尖走）。",
    "周三，约30分钟：踏步、墙壁俯卧撑、单臂划船、提踵、农夫行走。",
    "周四：30分钟步行，或腿仍很沉就休息。",
    "周五，约30分钟：重复周一。若已获许可，加几次温和俯卧伸展。",
    "周六：喜欢的站立活动。更长的步行、跳舞，或适合你的网球。",
    "周日：休息，或轻松步行。",
  ],
  coachedHeading: "想要实时指导吗？",
  coached: [
    "Iron Hour是60分钟，一对一。第0分钟准备：摄像头能看到全身，以及医生设定的限制。第4分钟开始热身。第14分钟主项——渐进，不是测最大。第28分钟辅助。第50分钟放松。",
    "Lean Reset每月20次，一对一，如果你想要更多有指导的训练日。Return每次45分钟，一对一，每月12次隔天，如果多年没练。Open Floor是小组课。",
    "我是教练，不是医生或理疗师：若有骨质疏松、骨折史或脊柱限制，由医生或理疗师定规则，我们在规则内训练。",
    "通过Google Meet、Zoom或FaceTime在客厅实时指导。来自浦那。印地语或英语。印度标准时间（IST）。还没决定？先从30分钟咨询开始。那是交谈，不是训练。预约只保留时间。费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不是医疗建议。ACSM筛查模型：若平时不运动、无症状、无已知心脏/代谢/肾脏疾病，可在无医疗许可下从低到中等强度开始并逐步增加。若有上述疾病，或胸痛、异常气短、头晕等症状，请先取得医疗许可。{9}已诊断骨质疏松、骨折史（尤其脊柱）、长期激素药或已知脊柱问题？开始前，或增加冲击/大负荷前，先见医生或理疗师。英国共识：椎体骨折或多次低创伤骨折后，冲击通常不超过快步走，除非专科另有说明。{4} NHS对高骨折风险或脊柱骨折：护好背部，搬东西时屈膝，避免别扭的弯腰搬抬，对高冲击要谨慎——问你的医生。{6} NHS也将负重、力量和平衡练习列为有助骨骼强壮的做法。{7}出现锐痛、胸痛或头晕就停下。用力时不要憋气。本页不改变任何药物、扫描结果或理疗计划。",
};
const ja: PostCopy = {
  metaTitle: "骨密度のためのベスト筋力エクササイズ：7種目と1週間の例 | Online Fitness Worldwide",
  metaDescription:
    "骨密度のための筋力エクササイズ7種：椅子立ち、ヒンジ、ステップアップなど。頻度、試験の知見、1週間の例。",
  h1: "骨密度のためのベスト筋力エクササイズ：7種目と1週間の例",
  dek: "骨は負荷に応じて適応する。進められる重さを上げる。歩く。背筋を伸ばす。検査と薬は医師。トレーニングは私たち。",
  updated: "2026年11月6日更新",
  byline: "執筆：Susmit Jalan（Online Fitness Worldwide コーチ、プネー）",
  credentialsNote:
    "ASCA レベル1（ストレングス＆コンディショニング）と ACE（解剖学とバイオメカニクス）。これらはコーチが保有する資格です。いずれの団体も本事業および本記事を推奨するものではありません。",
  labels: {
    home: "ホーム",
    blog: "ブログ",
    why: "なぜ",
    how: "やり方",
    dose: "回数・量",
    sources: "出典",
    readIn: "他の言語で読む",
    programs: "プログラムを見る",
    whatsapp: "WhatsAppで質問する",
    whatsappText: "こんにちはSusmit、骨密度の筋力エクササイズの記事を読み、相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "骨密度のためのベスト筋力エクササイズ",
  },
  intro: [
    "DEXA検査。家族歴。あるいは薄くなる前に骨を強くしたい。骨は生きた組織です。筋肉と衝撃が負荷をかけると適応します。",
    "Exercise and Sports Science Australia（ESSA）は、骨は衝撃と高強度の漸進的レジスタンストレーニングに反応し、転倒リスクを下げるためのバランス訓練も計画に入れるべきだと述べています。{2}英国のコンセンサスは、骨のためのレジスタンスと衝撃、転倒のための筋力とバランス、姿勢のための脊柱伸展とし、運動や日常生活での強い脊柱屈曲を避けるよう求めています。{4}",
    "閉経後女性43試験のCochraneレビューでは、運動で骨密度に小さな改善が見られました。大腿骨頸部では下肢の漸進的レジスタンスが、脊柱では複合プログラムが最も有用に見えました。骨折数への明確な効果はありませんでした。{5}",
    "このリストは、骨を引っ張る大きな筋肉向けの、家でできるシンプルな筋力です。椅子、段差、袋。ポイントは負荷を進めること。治療ではなくトレーニングです。骨粗しょう症、骨折歴、ステロイド、背骨の問題がある方は、先に「始める前に」を読んでください。",
  ],
  listHeading: "骨密度のためのベスト筋力エクササイズ7種",
  items: [
    {
      name: "椅子立ち（シット・トゥ・スタンド）",
      why: "太ももと股関節。自分の体重に逆らって立つ。股関節に負荷がかかる下肢の体重支持。",
      how: "しっかりした椅子の前の方に座り、足は床、股関節幅。腕を前へ。前傾してまっすぐ立つ。ゆっくり座り、どすんと落とさない。背中を長く。座るときに丸めない。立つ息で吐く。簡単なら胸の前に米袋。",
      dose: "8〜12回を1〜3セット、疲れ近くまで。{8}",
    },
    {
      name: "袋を持ったヒップヒンジ",
      why: "脚の裏側と股関節。背骨は長く。曲げではなくヒンジ。英国コンセンサスは強い脊柱屈曲を避けるよう示し、股関節から折るよう求めています。{4}",
      how: "太もも前で袋やダンベルを持つ。膝は柔らかく。車のドアを尻で閉じるように股関節を後ろへ。背中長く、胸を開く。ハムストリングの伸びを感じる。股関節を前に押し出して立つ。腰を丸めない。",
      dose: "8〜12回を1〜3セット。{8}",
    },
    {
      name: "ステップアップ",
      why: "片脚ずつ、立ったまま。体重支持に、踏み込みの軽い衝撃。低く始める。",
      how: "一番下の段から。足全体を乗せる。押し込んでまっすぐ立つ。もう一方の足をゆっくり下ろす。手すりを持つ。動きが滑らかなときだけ高くする。靴を履く。骨粗しょう症や椎体骨折がある場合は衝撃を抑え、先に医師や理学療法士に確認。{4}",
      dose: "各脚8〜10回を1〜3セット。",
    },
    {
      name: "壁プッシュアップ",
      why: "胸、肩、腕。進められる上半身負荷：壁→カウンター→床。",
      how: "肩の高さで壁に手、肩より少し広く。足を一歩後ろ。頭からかかとまで一直線。肘を曲げ胸を壁へ。押し返す。押す息で吐く。",
      dose: "8〜12回を1〜3セット。{8}",
    },
    {
      name: "ワンアームロウ",
      why: "上背部と腕。押しのバランスを取り、姿勢を高く保つのにも役立つ。",
      how: "片手をテーブル、足は一歩分、背中長く。もう一方にボトル、袋、ダンベル。股関節へ引き寄せる。ゆっくり下ろす。片側すべて終えてから反対。ねじらない、丸めない。",
      dose: "各腕8〜12回を1〜3セット。{8}",
    },
    {
      name: "カーフレイズ",
      why: "ふくらはぎと足首。下腿への立位負荷。両足から片足へ進めやすい。",
      how: "まっすぐ立ち、手はカウンター。つま先立ち。一瞬止める。ゆっくり下ろす。簡単なら片足。バランスが必要なら支える。",
      dose: "10〜15回を1〜3セット。",
    },
    {
      name: "ファーマーズキャリー",
      why: "握力、肩、体幹、脚を同時に。負荷を持って歩く機能的な体重支持。",
      how: "両手に重い袋やボトル。背筋を伸ばし肩を下げ、肋骨は静か。部屋をゆっくり往復。普通に呼吸。握力が切れる前に下ろす。傾かない、ねじらない。",
      dose: "20〜40秒の歩行を3回。",
    },
  ],
  enoughHeading: "どのくらい、どれだけ強く、どのくらいの頻度",
  enough: [
    "WHOは成人に、主要な筋群の筋力強化を週2日以上行うよう勧めています。{1} NHSの65歳以上の骨の健康では、週少なくとも2回の筋力、加えて転倒を減らすバランスも挙げています。{6}",
    "ESSAの骨の声明は、週最低2回の漸進的レジスタンスに加え、短時間の体重支持衝撃とバランストレーニング、骨格が新しい負荷パターンに出会い続けるための多様性を勧めています。{2}英国コンセンサスも骨のためのレジスタンスと衝撃、転倒のための筋力とバランスを組み合わせ、姿勢のための脊柱伸展を加えます。{4}",
    "負荷の進歩が大切です。8〜12回を1〜2回上回れたら、少し増やす：およそ2〜10%。{8}重い袋がない？下ろすのを遅くする、またはセットを増やす。骨は力に適応します。ずっと楽なままは計画ではありません。",
    "高強度の監視下トレーニングは指標を動かせます。LIFTMOR試験では、低骨量の閉経後女性101人が、週2回30分の監視下高強度レジスタンス＋衝撃（5セット×5回、1RMの85%超）を8か月実施。腰椎BMDは約+2.9%、低強度自宅対照は約−1.2%。大腿骨頸部もより良好。有害事象は軽微な1件（短い腰痛けいれん）。{3}スクリーニング済みでクリニック指導。自宅プランではありません。重い5×5を一人で真似しないでください。",
    "Cochraneレビューは小さなBMD改善と、骨折の明確な減少なしを示しました。{5}だから：より強い筋肉と安全な動きのために鍛える。濃いDEXAを約束だと思わない。薬と転倒予防は今も重要で、医師の判断です。",
    "背筋を伸ばす。医師や理学療法士がよければ、床で簡単な脊柱伸展を：うつ伏せで胸を少し上げ、床を見、首を無理に反らさない。{4}負荷をかけた丸まった前屈や、負荷下のねじりは避ける。{4}{7}",
  ],
  sampleHeading: "骨密度のための筋力トレーニング：1週間の例",
  sampleLabel: "あくまで例です。処方ではありません。体、検査、これまでの経過に合わせて医師や理学療法士と調整してください。",
  sample: [
    "月曜、約30分：椅子立ち、ヒップヒンジ、壁プッシュアップ、ワンアームロウ。各1〜3セット。",
    "火曜：30分の速歩。簡単なバランス5分（カウンター沿いのかかと・つま先歩き）を追加。",
    "水曜、約30分：ステップアップ、壁プッシュアップ、ワンアームロウ、カーフレイズ、ファーマーズキャリー。",
    "木曜：30分の歩行、または脚がまだ重いなら休息。",
    "金曜、約30分：月曜のセッションをもう一度。許可があれば穏やかなうつ伏せ伸展を数回。",
    "土曜：立って楽しめること。長めの散歩、ダンス、合うならテニス。",
    "日曜：休息、または楽な散歩。",
  ],
  coachedHeading: "ライブでコーチを受けたい？",
  coached: [
    "Iron Hour は60分、1対1。0分にセットアップ：全身が見えるカメラと、医師が決めた制限。4分からウォームアップ。14分にメイン種目——漸進であり、最大テストではない。28分に補助。50分にクールダウン。",
    "Lean Reset は月20回、1対1。コーチ付きの日を増やしたい場合。Return は45分、1対1、月12回・隔日。何年もトレーニングしていない場合。Open Floor は少人数グループ。",
    "私はコーチであり、医師でも理学療法士でもありません。骨粗しょう症、骨折歴、背骨の制限がある場合、ルールは医師や理学療法士が決め、その中でトレーニングします。",
    "Google Meet、Zoom、FaceTime でリビングからライブ指導。プネーから。ヒンディー語か英語で。インド標準時（IST）。まだ迷っている？30分の相談から。会話であって、トレーニングではありません。予約は時間を押さえるだけ。料金は直接決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医学的な助言ではありません。ACSMのスクリーニング：運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽〜中程度から始め、少しずつ増やせます。これらの病気がある場合や、胸の痛み、普段と違う息切れ、めまいなどがある場合は、先に医師の許可を。{9}骨粗しょう症の診断、骨折歴（特に背骨）、長期ステロイド、既知の背骨の問題がある場合は、開始前や衝撃・重い負荷を増やす前に医師や理学療法士へ。英国コンセンサス：椎体骨折や複数の低外傷骨折の後は、専門家が別途示さない限り、衝撃は速歩相当まで。{4} NHSの高骨折リスクや脊柱骨折：背中を守り、持ち上げるときは膝を曲げ、ぎこちない前屈・持ち上げを避け、高衝撃には慎重に——GPに相談。{6} NHSは体重支持、筋力、バランス運動も骨を強く保つ助けに挙げています。{7}鋭い痛み、胸の痛み、めまいでは中止。きつい努力で息を止めない。このページは薬、DEXA、理学療法プランを変えません。",
};
const gu: PostCopy = {
  metaTitle: "બોન ડેન્સિટી માટે બેસ્ટ સ્ટ્રેન્થ કસરતો: 7 મૂવ્સ અને એક સેમ્પલ અઠવાડિયું | Online Fitness Worldwide",
  metaDescription:
    "બોન ડેન્સિટી માટે 7 બેસ્ટ સ્ટ્રેન્થ કસરતો: સિટ-ટુ-સ્ટેન્ડ, હિપ હિન્જ, સ્ટેપ-અપ. કેટલી વાર કરવી, ટ્રાયલ શું કહે છે, સેમ્પલ અઠવાડિયું.",
  h1: "બોન ડેન્સિટી માટે બેસ્ટ સ્ટ્રેન્થ કસરતો: 7 મૂવ્સ અને એક સેમ્પલ અઠવાડિયું",
  dek: "હાડકું લોડ પર પ્રતિક્રિયા આપે છે. આગળ વધારી શકાય એ વજન ઉપાડો. ચાલો. ટટ્ટાર રહો. સ્કેન અને દવા ડૉક્ટર જુએ. ટ્રેનિંગ અમે.",
  updated: "6 નવેમ્બર 2026 ના રોજ અપડેટ કર્યું",
  byline: "લેખક: સુસ્મિત જાલાન, કોચ, Online Fitness Worldwide, પુણે.",
  credentialsNote:
    "ASCA લેવલ 1 (સ્ટ્રેન્થ અને કન્ડિશનિંગ) અને ACE (એનાટોમી અને બાયોમિકેનિક્સ). આ કોચ પાસેના ક્રેડેન્શિયલ છે. આમાંથી કોઈ સંસ્થા આ વ્યવસાય કે આ લેખને સમર્થન આપતી નથી.",
  labels: {
    home: "હોમ",
    blog: "બ્લોગ",
    why: "શા માટે",
    how: "કેવી રીતે",
    dose: "ડોઝ",
    sources: "સ્રોતો",
    readIn: "આ ભાષામાં વાંચો",
    programs: "પ્રોગ્રામ જુઓ",
    whatsapp: "WhatsApp પર પૂછો",
    whatsappText: "નમસ્તે સુસ્મિત, મેં બોન ડેન્સિટી માટે સ્ટ્રેન્થ કસરતોનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવું છે",
    skip: "સામગ્રી પર જાઓ",
    crumb: "બોન ડેન્સિટી માટે બેસ્ટ સ્ટ્રેન્થ કસરતો",
  },
  intro: [
    "એક DEXA સ્કેન. પારિવારિક ઇતિહાસ. અથવા હાડકાં પાતળાં થાય તે પહેલાં તેમને ઘન રાખવા માંગો છો. હાડકું જીવંત પેશી છે. જ્યારે સ્નાયુ અને ઇમ્પેક્ટ તેના પર લોડ મૂકે, ત્યારે તે અનુકૂળ થાય છે.",
    "Exercise and Sports Science Australia (ESSA) કહે છે કે હાડકું ઇમ્પેક્ટ અને હાઇ-ઇન્ટેન્સિટી પ્રોગ્રેસિવ રેઝિસ્ટન્સ ટ્રેનિંગ પર પ્રતિક્રિયા આપે છે, અને પ્લાનમાં પડવાનું જોખમ ઘટાડવા બૅલેન્સ ટ્રેનિંગ પણ હોવી જોઈએ.{2} બ્રિટનનું કન્સેન્સસ આમ કહે છે: હાડકાની મજબૂતી માટે રેઝિસ્ટન્સ અને ઇમ્પેક્ટ, પડવા માટે સ્ટ્રેન્થ અને બૅલેન્સ, અને પોસ્ચર માટે સ્પાઇનલ એક્સટેન્શન — અને કસરત કે રોજિંદા જીવનમાં સ્પાઇનની વધુ ફ્લેક્શન ટાળો.{4}",
    "પોસ્ટમેનોપોઝલ મહિલાઓના 43 ટ્રાયલની Cochrane સમીક્ષામાં કસરતથી બોન મિનરલ ડેન્સિટીમાં નાની વૃદ્ધિ જોવા મળી. ફેમોરલ નેક પર લોઅર-લિમ્બ પ્રોગ્રેસિવ રેઝિસ્ટન્સ સૌથી ઉપયોગી લાગી; સ્પાઇન પર કમ્બાઇન્ડ પ્રોગ્રામ. ફ્રૅક્ચરની સંખ્યા પર સ્પષ્ટ અસર ન દેખાઈ.{5}",
    "આ યાદી ઘરે એ મોટા સ્નાયુઓ માટે સાદી સ્ટ્રેન્થ છે જે હાડકું ખેંચે છે: ખુરશી, પગથિયું, થેલી. પ્રોગ્રેસિવ લોડ જ મુદ્દો છે. આ ટ્રેનિંગ છે, ઇલાજ નહીં. ઑસ્ટિયોપોરોસિસ, ફ્રૅક્ચરનો ઇતિહાસ, સ્ટેરૉઇડ કે કરોડની સમસ્યા? પહેલાં «શરૂ કરતાં પહેલાં» વાંચો.",
  ],
  listHeading: "બોન ડેન્સિટી માટે 7 બેસ્ટ સ્ટ્રેન્થ કસરતો",
  items: [
    {
      name: "સિટ-ટુ-સ્ટેન્ડ",
      why: "જાંઘ અને હિપ્સ, પોતાના વજન વિરુદ્ધ ઊભા થવું. પગનું વેટ-બેરિંગ કામ જે હિપ્સ પર લોડ મૂકે.",
      how: "મજબૂત ખુરશીના આગળના ભાગ પર બેસો, પગ જમીન પર, હિપ્સ જેટલા અંતરે. હાથ આગળ. આગળ ઝૂકો અને ટટ્ટાર ઊભા થાઓ. ધીમેથી બેસો, ધબ દઈને નહીં. પીઠ લાંબી; બેસતી વખતે ગોળ ન કરો. ઊભા થતી વખતે શ્વાસ છોડો. બહુ સરળ? છાતી પર ચોખાની થેલી પકડો.",
      dose: "8 થી 12 ના 1 થી 3 સેટ, થાકની નજીક.{8}",
    },
    {
      name: "થેલી સાથે હિપ હિન્જ",
      why: "પગનો પાછળનો ભાગ અને હિપ્સ, સ્પાઇન લાંબી. હિન્જ છે, વળવું નહીં. બ્રિટનનું કન્સેન્સસ વધુ સ્પાઇનલ ફ્લેક્શન ટાળવાનું કહે છે; હિપ્સથી મોડો.{4}",
      how: "જાંઘની આગળ થેલી કે ડમ્બેલ પકડો. ઘૂંટણ નરમ. હિપ્સ પાછળ ધકેલો જાણે કારનું દરવાજું હિપ્સથી બંધ કરો છો. પીઠ લાંબી, છાતી ખુલ્લી. હૅમસ્ટ્રિંગમાં ખેંચાણ અનુભવો. ઊભા થવા હિપ્સ આગળ ધકેલો. નીચલી પીઠ ગોળ ન કરો.",
      dose: "8 થી 12 ના 1 થી 3 સેટ.{8}",
    },
    {
      name: "સ્ટેપ-અપ",
      why: "એક સમયે એક પગ, ઊભા. વેટ-બેરિંગ, પગલા પર થોડો ઇમ્પેક્ટ. ઓછી ઊંચાઈથી શરૂ કરો.",
      how: "સૌથી નીચેના પગથિયાથી. આખો પગ પગથિયા પર. ધક્કો મારીને ટટ્ટાર ઊભા થાઓ. બીજો પગ ધીમેથી નીચે. રેલિંગ પકડો. મૂવ સ્મૂધ રહે ત્યારે જ ઊંચાઈ વધારો. સારા જૂતાં. ડાયગ્નોઝ્ડ ઑસ્ટિયોપોરોસિસ કે વર્ટિબ્રલ ફ્રૅક્ચર? ઇમ્પેક્ટ હળવો રાખો અને પહેલાં ડૉક્ટર કે ફિઝિયોને પૂછો.{4}",
      dose: "દરેક પગે 8 થી 10 ના 1 થી 3 સેટ.",
    },
    {
      name: "વૉલ પુશ-અપ",
      why: "છાતી, ખભા અને હાથ. ઉપલા શરીરનો લોડ જે આગળ વધારી શકાય: દીવાલ, પછી કાઉન્ટર, પછી ફર્શ.",
      how: "હાથ દીવાલ પર ખભાની ઊંચાઈએ, ખભાથી થોડા પહોળા. પગ એક ડગલું પાછળ. માથાથી એડી સુધી સીધા. કોણી વાળો, છાતી દીવાલ તરફ. ધક્કો મારો. ધક્કા પર શ્વાસ છોડો.",
      dose: "8 થી 12 ના 1 થી 3 સેટ.{8}",
    },
    {
      name: "વન-આર્મ રો",
      why: "ઉપરની પીઠ અને હાથ. ખેંચવું ધકેલવાનું બૅલેન્સ કરે છે, અને ટટ્ટાર રહેવામાં મદદ કરે છે.",
      how: "એક હાથ ટેબલ પર, પગ એક ડગલાના અંતરે, પીઠ લાંબી. બીજા હાથમાં બૉટલ, થેલી કે ડમ્બેલ. હિપ તરફ ખેંચો. ધીમેથી નીચે. એક બાજુના બધા રેપ, પછી બીજી. વળો કે ગોળ ન કરો.",
      dose: "દરેક હાથે 8 થી 12 ના 1 થી 3 સેટ.{8}",
    },
    {
      name: "કાફ રેઇઝ",
      why: "પિંડી અને ઘૂંટી. નીચલા પગ દ્વારા ઊભા લોડ. આગળ વધારવું સરળ: બે પગ, પછી એક.",
      how: "ટટ્ટાર ઊભા, હાથ કાઉન્ટર પર. પંજા પર ઊંચા થાઓ. રોકાઓ. ધીમેથી નીચે. સરળ? એક-એક પગે. બૅલેન્સ જોઈએ તો પકડો.",
      dose: "10 થી 15 ના 1 થી 3 સેટ.",
    },
    {
      name: "ફાર્મર્સ કૅરી",
      why: "ગ્રિપ, ખભા, ધડ અને પગ એકસાથે. લોડ સાથે ચાલવું — ફંક્શનલ વેટ-બેરિંગ.",
      how: "દરેક હાથમાં ભારે થેલી કે બૉટલ. ટટ્ટાર, ખભા નીચે, પાંસળી શાંત. રૂમમાં ધીમે ચાલો અને પાછા આવો. સામાન્ય શ્વાસ. ગ્રિપ છૂટે એ પહેલાં નીચે મૂકો. ઝૂકો કે વળો નહીં.",
      dose: "20 થી 40 સેકન્ડની 3 વૉક.",
    },
  ],
  enoughHeading: "કેટલું, કેટલું ભારે, કેટલી વાર",
  enough: [
    "WHO પુખ્તોને અઠવાડિયે 2 કે વધુ દિવસ મુખ્ય સ્નાયુ જૂથોની સ્ટ્રેન્થનિંગની સલાહ આપે છે.{1} 65+ ની બોન હેલ્થ માટે NHSમાં અઠવાડિયે ઓછામાં ઓછા બે વાર સ્ટ્રેન્થ, અને પડવાનું જોખમ ઘટાડવા બૅલેન્સ પણ છે.{6}",
    "ESSA નું બોન સ્ટેટમેન્ટ અઠવાડિયે ઓછામાં ઓછા બે પ્રોગ્રેસિવ રેઝિસ્ટન્સ સેશન, સાથે ટૂંકું વેટ-બેરિંગ ઇમ્પેક્ટ અને બૅલેન્સ, અને વિવિધતા સૂચવે છે જેથી હાડપિંજર નવા લોડ પૅટર્ન સાથે મળતું રહે.{2} બ્રિટનનું કન્સેન્સસ પણ હાડકા માટે રેઝિસ્ટન્સ અને ઇમ્પેક્ટને પડવા માટે સ્ટ્રેન્થ અને બૅલેન્સ સાથે જોડે છે, અને પોસ્ચર માટે સ્પાઇનલ એક્સટેન્શન ઉમેરે છે.{4}",
    "પ્રોગ્રેસિવ લોડ મહત્વનો છે. 8 થી 12 સારા રેપ કરતાં 1 કે 2 વધુ થાય ત્યારે થોડું વધારો: લગભગ 2 થી 10% વધુ લોડ.{8} ભારે થેલી નથી? નીચે આવવાનું ધીમું કરો, કે એક સેટ ઉમેરો. હાડકું બળ પર અનુકૂળ થાય છે; હંમેશાં સરળ પ્લાન નથી.",
    "સુપરવાઇઝ્ડ હાઇ-ઇન્ટેન્સિટી ટ્રેનિંગ સોય હલાવી શકે. LIFTMOR ટ્રાયલમાં, ઓછા બોન માસવાળી 101 પોસ્ટમેનોપોઝલ મહિલાઓએ 8 મહિના સુધી અઠવાડિયે બે વાર 30 મિનિટ સુપરવાઇઝ્ડ હાઇ-ઇન્ટેન્સિટી રેઝિસ્ટન્સ અને ઇમ્પેક્ટ કર્યા (5 સેટ × 5, 1RM ના 85% થી વધુ). લમ્બર સ્પાઇન BMD લગભગ 2.9% વધ્યું વિરુદ્ધ લો-ઇન્ટેન્સિટી હોમ કન્ટ્રોલમાં 1.2% ઘટાડો; ફેમોરલ નેક પણ વધુ સારું રહ્યું. એક નાની પ્રતિકૂળ ઘટના (ટૂંકો લોઅર-બૅક સ્પાઝમ).{3} સ્ક્રીન કરેલી મહિલાઓ, ક્લિનિકમાં કોચિંગ. આ હોમ પ્લાન નથી. એકલા ભારે 5×5 ન કૉપી કરો.",
    "Cochrane સમીક્ષામાં નાની BMD વૃદ્ધિ અને ફ્રૅક્ચરમાં સ્પષ્ટ કાપ ન મળ્યો.{5} તેથી: મજબૂત સ્નાયુ અને સુરક્ષિત મૂવમેન્ટ માટે ટ્રેન કરો; ઘન DEXA ને વચન ન સમજો. દવા અને ફૉલ-પ્રૂફિંગ હજુ મહત્વનાં છે — ડૉક્ટરનો નિર્ણય.",
    "ટટ્ટાર રહો. ડૉક્ટર કે ફિઝિયો રાજી હોય તો ફર્શ પર સાદું સ્પાઇનલ એક્સટેન્શન ઉમેરો: પેટ પર સૂઈને છાતી થોડી ઉપાડો, ફર્શ જુઓ, ગરદન ન હચમચાવો.{4} લોડ સાથે ગોળ પીઠ વાળવું અને લોડ નીચે વળવું ટાળો.{4}{7}",
  ],
  sampleHeading: "બોન ડેન્સિટી માટે સ્ટ્રેન્થ ટ્રેનિંગનું એક સેમ્પલ અઠવાડિયું",
  sampleLabel: "માત્ર સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા ડૉક્ટર કે ફિઝિયો સાથે મળીને તમારા શરીર, તમારા સ્કેન અને તમારા ઇતિહાસ મુજબ બદલો.",
  sample: [
    "સોમવાર, લગભગ 30 મિનિટ: સિટ-ટુ-સ્ટેન્ડ, હિપ હિન્જ, વૉલ પુશ-અપ, વન-આર્મ રો. દરેકના 1 થી 3 સેટ.",
    "મંગળવાર: 30 મિનિટ ઝડપી વૉક. 5 મિનિટ સરળ બૅલેન્સ ઉમેરો (કાઉન્ટર સાથે હીલ-ટુ-ટો).",
    "બુધવાર, લગભગ 30 મિનિટ: સ્ટેપ-અપ, વૉલ પુશ-અપ, વન-આર્મ રો, કાફ રેઇઝ, ફાર્મર્સ કૅરી.",
    "ગુરુવાર: 30 મિનિટ વૉક, કે પગ હજુ ભારે હોય તો આરામ.",
    "શુક્રવાર, લગભગ 30 મિનિટ: સોમવારનું સેશન ફરી. ક્લિયર હોય તો થોડા હળવા પ્રોન બૅક એક્સટેન્શન.",
    "શનિવાર: ઊભા રહીને ગમે એવું. લાંબી વૉક, ડાન્સ, કે સૂટ થાય તો ટેનિસ.",
    "રવિવાર: આરામ, કે સરળ વૉક.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Iron Hour 60 મિનિટનું છે, 1:1. મિનિટ 0 પર સેટ-અપ: કૅમેરા જેથી આખું શરીર દેખાય, અને ડૉક્ટરની મર્યાદા. મિનિટ 4 થી વૉર્મ-અપ. મિનિટ 14 પર મુખ્ય લિફ્ટ — પ્રોગ્રેસિવ, મૅક્સ ટેસ્ટ નહીં. 28 પર એક્સેસરીઝ. 50 પર કૂલ-ડાઉન.",
    "Lean Reset મહિને 20 સેશન, 1:1, જો વધુ કોચ્ડ દિવસ જોઈએ. Return 45 મિનિટ, 1:1, મહિને 12 સેશન એકાંતરે, જો વર્ષોથી ટ્રેનિંગ નથી કરી. Open Floor નાનું ગ્રુપ.",
    "હું કોચ છું, ડૉક્ટર કે ફિઝિયો નહીં: ઑસ્ટિયોપોરોસિસ, ફ્રૅક્ચરનો ઇતિહાસ કે કરોડની મર્યાદા હોય તો નિયમ ડૉક્ટર કે ફિઝિયો નક્કી કરે, અને આપણે એની અંદર ટ્રેન કરીએ.",
    "Google Meet, Zoom કે FaceTime પર લાઇવ, તમારા લિવિંગ રૂમમાં. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર. હજુ નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ ફક્ત સમય રોકે છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM સ્ક્રીનિંગ: જો નિષ્ક્રિય છો, લક્ષણ નથી, અને હૃદય, મેટાબોલિક કે કિડનીની જાણીતી બીમારી નથી, તો હળવી થી મધ્યમ કસરત વગર ક્લિયરન્સ શરૂ કરીને ધીમે વધારી શકો. આમાંની કોઈ બીમારી હોય, કે છાતીમાં દુખાવો, અસામાન્ય શ્વાસ ચડવો કે ચક્કર હોય, તો પહેલાં તબીબી મંજૂરી લો.{9} ડાયગ્નોઝ્ડ ઑસ્ટિયોપોરોસિસ, ફ્રૅક્ચરનો ઇતિહાસ (ખાસ કરીને કરોડ), લાંબા સ્ટેરૉઇડ, કે જાણીતી કરોડ સમસ્યાઓ? શરૂ કરતાં પહેલાં, કે ઇમ્પેક્ટ/ભારે લોડ ઉમેરતાં પહેલાં ડૉક્ટર કે ફિઝિયોને મળો. બ્રિટન કન્સેન્સસ: વર્ટિબ્રલ ફ્રૅક્ચર કે અનેક લો-ટ્રૉમા ફ્રૅક્ચર પછી ઇમ્પેક્ટ સામાન્ય રીતે ઝડપી વૉક જેટલો જ રાખો, જ્યાં સુધી સ્પેશિયલિસ્ટ બીજું ન કહે.{4} ઊંચા ફ્રૅક્ચર રિસ્ક કે સ્પાઇનલ ફ્રૅક્ચર પર NHS: પીઠ સંભાળો, ઉપાડતી વખતે ઘૂંટણ વાળો, અજીબ વળવું/ઉપાડવું ટાળો, હાઇ-ઇમ્પેક્ટથી સાવધાન — તમારા ડૉક્ટરને પૂછો.{6} NHS વેટ-બેરિંગ, સ્ટ્રેન્થનિંગ અને બૅલેન્સ કસરતને પણ એ વસ્તુઓમાં ગણે છે જે હાડકાં મજબૂત રાખવામાં મદદ કરે.{7} તીવ્ર દુખાવો, છાતીમાં દુખાવો કે ચક્કર પર રોકાઈ જાઓ. મુશ્કેલ પ્રયાસ પર શ્વાસ ન રોકો. આ પેજ કોઈ દવા, DEXA કે ફિઝિયો પ્લાન બદલતું નથી.",
};

export const boneDensityPost: BlogPost = {
  slug: BONE_SLUG,
  published: BONE_PUBLISHED,
  modified: BONE_MODIFIED,
  about: "Strength training for bone density",
  sources: BONE_SOURCES,
  copy: { en, ar, hi, es, zh, ja, gu },
  programLink: {
    href: "/online-strength-and-conditioning-coach",
    label: "How Iron Hour works: 60 minutes, 1:1, coached live",
  },
  seeAlso: ["best-strength-exercises-for-women-over-40", "best-strength-exercises-for-over-60s"],
};
