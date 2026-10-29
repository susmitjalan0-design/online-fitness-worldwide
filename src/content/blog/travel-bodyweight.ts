/**
 * Blog post: "Best bodyweight exercises for travel".
 * Citations in copy are written as {n} and point at TRAVEL_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (checked against the
 * Europe PMC record and abstract, or the Bull et al. 2020 full text for WHO, on
 * 29 Oct 2026). No client results, no quotes, no prices. Small studies are
 * labelled as such in the copy. Translations were drafted for this batch and
 * need a native-speaker review before launch (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const TRAVEL_SLUG = "best-bodyweight-exercises-for-travel";
export const TRAVEL_PUBLISHED = "2026-10-29";
export const TRAVEL_MODIFIED = "2026-10-29";

export const TRAVEL_SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "American College of Sports Medicine. Position stand: Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
    url: "https://doi.org/10.1249/MSS.0b013e3181915670",
  },
  {
    cite: "Kikuchi N, Nakazato K. Low-load bench press and push-up induce similar muscle hypertrophy and strength gain. J Exerc Sci Fit. 2017;15(1):37–42.",
    url: "https://doi.org/10.1016/j.jesf.2017.06.003",
  },
  {
    cite: "Calatayud J, Borreani S, Colado JC, Martin F, Tella V, Andersen LL. Bench press and push-up at comparable levels of muscle activity results in similar strength gains. J Strength Cond Res. 2015;29(1):246–253.",
    url: "https://doi.org/10.1519/JSC.0000000000000589",
  },
  {
    cite: "Schoenfeld BJ, Grgic J, Ogborn D, Krieger JW. Strength and hypertrophy adaptations between low- vs. high-load resistance training: a systematic review and meta-analysis. J Strength Cond Res. 2017;31(12):3508–3523.",
    url: "https://doi.org/10.1519/JSC.0000000000002200",
  },
  {
    cite: "Bickel CS, Cross JM, Bamman MM. Exercise dosing to retain resistance training adaptations in young and older adults. Med Sci Sports Exerc. 2011;43(7):1177–1187.",
    url: "https://doi.org/10.1249/MSS.0b013e318207c15d",
  },
  {
    cite: "Jenkins EM, Nairn LN, Skelly LE, Little JP, Gibala MJ. Do stair climbing exercise \"snacks\" improve cardiorespiratory fitness? Appl Physiol Nutr Metab. 2019;44(6):681–684.",
    url: "https://doi.org/10.1139/apnm-2018-0675",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Bodyweight Exercises for Travel: 7 Hotel-Room Moves | Jalan PT",
  metaDescription:
    "The 7 best bodyweight exercises for travel and hotel-room workouts. How to make no-kit training hard enough, how little keeps your gains on a trip, and a sample week.",
  h1: "Best bodyweight exercises for travel: 7 hotel-room moves and a sample week",
  dek: "No gym. No kit. A bed, a chair, a backpack and the floor. Seven moves that travel with you.",
  updated: "Updated 29 October 2026",
  byline: "By Susmit Jalan, coach at Jalan PT, Pune.",
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
    whatsappText: "Hi Susmit, I read the article on bodyweight exercises for travel and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best bodyweight exercises for travel",
  },
  intro: [
    "A trip doesn't have to stop your training. It changes the kit. That's all.",
    "WHO asks adults for muscle-strengthening work on all major muscle groups, 2 or more days a week.{1} A hotel room covers that.",
    "Travel days mean long sitting: airports, flights, meetings. WHO says replacing sitting with activity of any intensity, even light, has health benefits.{1} Stand up. Walk the terminal.",
    "You need a bed or a sturdy chair, a backpack, and enough floor to lie down. Twenty to thirty minutes.",
  ],
  listHeading: "The 7 best bodyweight exercises for travel",
  items: [
    {
      name: "Rear-foot-elevated split squat",
      why: "The big leg move with no weight. One leg does the work of two, so bodyweight gets hard fast. ACSM's advice includes one-sided exercises next to two-sided ones.{2}",
      how: "Back foot on the bed or a sturdy chair behind you. Lower straight down until the back knee is near the floor. Push up through the front foot. Hold the wall if you need to.",
      dose: "2 to 3 sets of 8 to 12 each leg. Too easy? Take 3 seconds on the way down, or wear the backpack.",
    },
    {
      name: "Push-up, raised then floor",
      why: "Your bench press on the road. In a small 8-week trial in 18 young men, push-ups set up to match 40% of bench-press max gave similar muscle and strength gains to bench pressing at that load.{3} In 30 experienced lifters, band-loaded push-ups matched the bench press for strength over 5 weeks.{4} Small studies. Still, push-ups are real training.",
      how: "Hands on the desk or bed edge to start. Body in one line, head to heels. Lower your chest to your hands. Press away. Then move to the floor. Then feet up on the bed.",
      dose: "2 to 3 sets of 8 to 15. Easy at 15? Make the angle harder, not the set longer.",
    },
    {
      name: "Single-leg Romanian deadlift",
      why: "The hinge: hamstrings and glutes, plus balance. Standing on one leg makes bodyweight enough for most people.",
      how: "Stand on one leg, a hand on the wall. Soft knee. Push the hips back and let the free leg rise behind you. Back long. Stop when the hamstring pulls. Stand by squeezing the glute.",
      dose: "2 to 3 sets of 8 to 12 each side. Hold the backpack in the free hand to load it.",
    },
    {
      name: "Backpack row",
      why: "The pull. Bodyweight plans skip it, and the back pays. WHO's advice covers all major muscle groups, and that includes the back.{1} A packed bag is your dumbbell.",
      how: "Fill the backpack: water bottles, shoes, a laptop in its sleeve. One hand and one knee on the bed. Back flat. Pull the bag to your hip, elbow close. Pause. Lower slowly.",
      dose: "2 to 3 sets of 10 to 15 each side. Light bag? Pause 2 seconds at the top.",
    },
    {
      name: "Pike push-up",
      why: "The overhead push without a weight. Hips high puts more of your body over the hands.",
      how: "Start in a push-up. Walk your feet in and lift the hips, so you look like an upside-down V. Bend the elbows and lower the top of your head towards the floor, a little in front of your hands. Press back up.",
      dose: "2 sets of 6 to 10. Too hard? Do it with hands on the bed. Skip it if pressing overhead hurts.",
    },
    {
      name: "Side plank",
      why: "Your trunk, from the side. It holds you upright when you carry a suitcase through an airport.",
      how: "Lie on your side, elbow under the shoulder. Lift the hips so the body is one straight line. Knees bent to start. Legs straight when that's easy. Breathe.",
      dose: "2 to 3 holds of 20 to 30 seconds each side.",
    },
    {
      name: "Stair climbs or on-the-spot intervals",
      why: "The conditioning. In a 6-week trial, sedentary young adults (12 per group) climbed 60 steps hard, 3 times a day with 1 to 4 hours between, 3 days a week. Their fitness (peak oxygen uptake) went up. The gain was modest.{7} Most hotels have a stairwell.",
      how: "Climb the stairs briskly, hand near the rail. Walk down. No stairwell? High knees or fast step-ups on the spot. Hard enough to breathe heavily, not so hard your form goes.",
      dose: "3 to 5 climbs, or 5 to 8 rounds of 20 seconds hard, 40 seconds easy.",
    },
  ],
  enoughHeading: "Is bodyweight enough? And how little keeps your gains?",
  enough: [
    "Make it harder, not longer. ACSM's starting point is a load you can lift 8 to 12 times; when you beat the target by 1 to 2 reps, add 2 to 10%.{2} With no weights, you change the lever instead: raised push-up to floor, two legs to one, slower lowering, a heavier bag.",
    "Light can work. A review of 21 studies found similar muscle growth with light and heavy loads when sets went to failure. Heavy loads built more maximal strength.{5} So bodyweight keeps and grows muscle. It has a ceiling for top-end strength.",
    "A trip won't undo your work. In one trial, adults trained 3 days a week for 16 weeks, then cut back for 32 weeks to one-third or one-ninth of that training. Both doses kept muscle size in the young adults (20 to 35), but not in the older adults (60 to 75). Strength was largely kept even by the group that stopped training, with only a small drop at the end.{6}",
    "So on a short trip, one or two solid sessions a week holds most of what you built. If you are older, do a bit more, not less.",
  ],
  sampleHeading: "A sample travel week",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body, your history and your trip.",
  sample: [
    "Travel day: walk the terminal instead of sitting at the gate. On a long flight, stand and move when the crew allows.",
    "Day 2 (A, 25 minutes): 5-minute warm-up, then split squat, push-up, backpack row, side plank. 2 to 3 rounds.",
    "Day 3: walk the city. One or two stair climbs if your day allows.",
    "Day 4 (B, 25 minutes): warm-up, then single-leg Romanian deadlift, pike push-up, backpack row, stair or on-the-spot intervals.",
    "Day 5: rest, or an easy walk.",
    "Day 6 (A again): add a rep, or a harder version, where the last session felt easy.",
    "Day 7: travel home. Back to your usual week.",
  ],
  coachedHeading: "Want it coached live, wherever you are?",
  coached: [
    "Iron Hour is strength and conditioning, coached live. 60 minutes, 1:1. Set-up at minute 0: we put the phone or laptop where I can see all of you. Warm-up from minute 4. The primary lift starts at minute 14. Accessories at 28. Cool-down at 50.",
    "It works in a hotel room, with whatever the room has. The plan changes to fit the trip, from what we see on the call.",
    "Coming back after time off? Return is 45 minutes, 12 alternate-day sessions a month. Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST: Dubai is 1½ hours behind, Singapore 2½ hours ahead. Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{8} In the room: use a chair without wheels, against a wall. Check the floor isn't slippery. Hold the rail on stairs. If you have had a blood clot, or your doctor has warned you about clots, ask them about long flights before you travel. Stop if you feel sharp pain, and get advice first if you have a joint problem, are pregnant or have recently given birth.",
};

const ar: PostCopy = {
  metaTitle: "أفضل تمارين وزن الجسم للسفر: 7 تمارين في غرفة الفندق | Jalan PT",
  metaDescription:
    "أفضل 7 تمارين بوزن الجسم للسفر والتمرين في غرفة الفندق. كيف تجعل التمرين بلا أدوات صعباً بما يكفي، وما أقل قدر يحفظ مكاسبك في الرحلة، مع نموذج لأسبوع.",
  h1: "أفضل تمارين وزن الجسم للسفر: 7 تمارين في غرفة الفندق ونموذج لأسبوع",
  dek: "لا نادي. لا أدوات. سرير وكرسي وحقيبة ظهر وأرضية. سبعة تمارين تسافر معك.",
  updated: "تم التحديث في 29 أكتوبر 2026",
  byline: "بقلم سوسميت جالان، مدرب في Jalan PT، بونه.",
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
    whatsappText: "مرحباً سوسميت، قرأت مقال تمارين وزن الجسم للسفر وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل تمارين وزن الجسم للسفر",
  },
  intro: [
    "الرحلة لا يجب أن توقف تمرينك. هي تغيّر الأدوات فقط. هذا كل شيء.",
    "توصي منظمة الصحة العالمية البالغين بتمارين تقوية العضلات لكل المجموعات العضلية الكبرى، يومين أو أكثر في الأسبوع.{1} غرفة الفندق تكفي لذلك.",
    "أيام السفر تعني جلوساً طويلاً: مطارات ورحلات واجتماعات. وتقول المنظمة إن استبدال الجلوس بنشاط بأي شدة، حتى الخفيف، له فوائد صحية.{1} قف. امشِ في صالة المطار.",
    "تحتاج سريراً أو كرسياً متيناً، وحقيبة ظهر، ومساحة من الأرض تكفي لتستلقي. من عشرين إلى ثلاثين دقيقة.",
  ],
  listHeading: "أفضل 7 تمارين بوزن الجسم للسفر",
  items: [
    {
      name: "القرفصاء المنقسمة مع رفع القدم الخلفية",
      why: "تمرين الساقين الكبير بلا وزن. ساق واحدة تقوم بعمل ساقين، فيصبح وزن الجسم صعباً بسرعة. تشمل توصيات ACSM تمارين الجانب الواحد إلى جانب تمارين الجانبين.{2}",
      how: "ضع القدم الخلفية على السرير أو على كرسي متين خلفك. انزل مباشرة إلى الأسفل حتى تقترب الركبة الخلفية من الأرض. ادفع للأعلى عبر القدم الأمامية. استند إلى الحائط إن احتجت.",
      dose: "من 2 إلى 3 مجموعات من 8 إلى 12 لكل ساق. سهل جداً؟ خذ 3 ثوانٍ في النزول، أو البس الحقيبة.",
    },
    {
      name: "الضغط، مرفوعاً ثم على الأرض",
      why: "هو ضغط البنش الخاص بك في السفر. في تجربة صغيرة لمدة 8 أسابيع على 18 شاباً، أعطى الضغط المضبوط ليعادل 40% من أقصى وزن في ضغط البنش مكاسب مماثلة في العضلات والقوة لضغط البنش بالحمل نفسه.{3} وعند 30 متدرباً متمرساً، عادل الضغط بحبل مطاطي ضغطَ البنش في القوة خلال 5 أسابيع.{4} دراسات صغيرة. لكن الضغط تمرين حقيقي.",
      how: "ابدأ واليدان على المكتب أو حافة السرير. الجسم خط واحد من الرأس إلى الكعبين. أنزل صدرك نحو يديك. ادفع بعيداً. ثم انتقل إلى الأرض. ثم القدمان على السرير.",
      dose: "من 2 إلى 3 مجموعات من 8 إلى 15. سهل عند 15؟ صعّب الزاوية، لا تُطِل المجموعة.",
    },
    {
      name: "الرفعة الرومانية على ساق واحدة",
      why: "حركة المفصلة: أوتار الركبة والألوية، ومعها التوازن. الوقوف على ساق واحدة يجعل وزن الجسم كافياً لمعظم الناس.",
      how: "قف على ساق واحدة ويدك على الحائط. ركبة مرنة. ادفع الوركين للخلف ودع الساق الحرة ترتفع خلفك. الظهر ممدود. توقف عندما تشعر بشدّ في أوتار الركبة. قف بشدّ الألوية.",
      dose: "من 2 إلى 3 مجموعات من 8 إلى 12 لكل جانب. أمسك الحقيبة باليد الحرة لزيادة الحمل.",
    },
    {
      name: "التجديف بحقيبة الظهر",
      why: "حركة السحب. برامج وزن الجسم تتجاهلها، والظهر يدفع الثمن. توصيات منظمة الصحة العالمية تشمل كل المجموعات العضلية الكبرى، والظهر منها.{1} الحقيبة الممتلئة هي الدمبل الخاص بك.",
      how: "املأ الحقيبة: زجاجات ماء، أحذية، حاسوب محمول في غلافه. يد وركبة على السرير. الظهر مستوٍ. اسحب الحقيبة نحو وركك، والمرفق قريب. توقف لحظة. أنزلها ببطء.",
      dose: "من 2 إلى 3 مجموعات من 10 إلى 15 لكل جانب. الحقيبة خفيفة؟ توقف ثانيتين في الأعلى.",
    },
    {
      name: "ضغط البايك",
      why: "دفع فوق الرأس بلا وزن. رفع الوركين يضع جزءاً أكبر من جسمك فوق اليدين.",
      how: "ابدأ في وضع الضغط. قرّب قدميك وارفع الوركين حتى يصبح جسمك مثل حرف V مقلوب. اثنِ المرفقين وأنزل أعلى رأسك نحو الأرض، أمام يديك بقليل. ادفع للأعلى.",
      dose: "مجموعتان من 6 إلى 10. صعب جداً؟ ضع يديك على السرير. تخطَّه إن كان الدفع فوق الرأس مؤلماً.",
    },
    {
      name: "البلانك الجانبي",
      why: "جذعك من الجانب. هو ما يبقيك مستقيماً حين تجرّ حقيبة السفر في المطار.",
      how: "استلقِ على جانبك، والمرفق تحت الكتف. ارفع الوركين حتى يصبح الجسم خطاً مستقيماً. ابدأ والركبتان مثنيتان. الساقان مفرودتان عندما يصبح ذلك سهلاً. تنفّس.",
      dose: "من 2 إلى 3 ثبات من 20 إلى 30 ثانية لكل جانب.",
    },
    {
      name: "صعود الدرج أو فترات في المكان",
      why: "التكييف البدني. في تجربة لمدة 6 أسابيع، صعد شباب قليلو الحركة (12 في كل مجموعة) 60 درجة بقوة، 3 مرات يومياً بفاصل من ساعة إلى 4 ساعات، 3 أيام في الأسبوع. ارتفعت لياقتهم (أقصى استهلاك للأكسجين). وكان التحسن متواضعاً.{7} معظم الفنادق فيها درج.",
      how: "اصعد الدرج بسرعة، واليد قرب الدرابزين. انزل مشياً. لا يوجد درج؟ رفع الركبتين أو صعود سريع في المكان. بقوة تجعلك تتنفس بعمق، لا لدرجة أن يختلّ أداؤك.",
      dose: "من 3 إلى 5 صعودات، أو من 5 إلى 8 جولات: 20 ثانية بقوة و40 ثانية بسهولة.",
    },
  ],
  enoughHeading: "هل وزن الجسم كافٍ؟ وما أقل قدر يحفظ مكاسبك؟",
  enough: [
    "اجعله أصعب، لا أطول. نقطة البداية لدى ACSM حملٌ تستطيع رفعه من 8 إلى 12 مرة؛ وعندما تتجاوز الهدف بتكرار أو اثنين، أضف من 2 إلى 10%.{2} بلا أوزان، غيّر الرافعة بدلاً من ذلك: من الضغط المرفوع إلى الأرض، من ساقين إلى ساق، نزول أبطأ، حقيبة أثقل.",
    "الخفيف قد ينجح. وجدت مراجعة لـ21 دراسة نمواً عضلياً متشابهاً مع الأحمال الخفيفة والثقيلة حين تُؤدّى المجموعات حتى الفشل. والأحمال الثقيلة بنت قوة قصوى أكبر.{5} إذن وزن الجسم يحفظ العضلات وينمّيها. لكن له سقفاً في القوة القصوى.",
    "الرحلة لن تمحو عملك. في تجربة واحدة، تدرّب بالغون 3 أيام في الأسبوع لمدة 16 أسبوعاً، ثم خفّضوا لمدة 32 أسبوعاً إلى ثلث ذلك التدريب أو تُسعه. حافظت الجرعتان على حجم العضلات عند الشباب (20 إلى 35 عاماً)، لا عند الأكبر سناً (60 إلى 75 عاماً). وبقيت القوة في معظمها حتى لدى المجموعة التي توقفت عن التدريب، مع انخفاض بسيط في النهاية فقط.{6}",
    "لذلك في رحلة قصيرة، جلسة أو جلستان جيدتان في الأسبوع تحفظان معظم ما بنيته. وإن كنت أكبر سناً، فزد قليلاً، لا تُنقص.",
  ],
  sampleHeading: "نموذج لأسبوع سفر",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك وتاريخك ورحلتك.",
  sample: [
    "يوم السفر: امشِ في صالة المطار بدل الجلوس عند البوابة. في الرحلة الطويلة، قف وتحرك حين يسمح طاقم الطائرة.",
    "اليوم 2 (أ، 25 دقيقة): إحماء 5 دقائق، ثم القرفصاء المنقسمة، الضغط، التجديف بالحقيبة، البلانك الجانبي. من 2 إلى 3 جولات.",
    "اليوم 3: امشِ في المدينة. صعود أو صعودان على الدرج إن سمح يومك.",
    "اليوم 4 (ب، 25 دقيقة): إحماء، ثم الرفعة الرومانية على ساق واحدة، ضغط البايك، التجديف بالحقيبة، فترات الدرج أو في المكان.",
    "اليوم 5: راحة، أو مشي هادئ.",
    "اليوم 6 (أ مجدداً): أضف تكراراً، أو نسخة أصعب، حيث شعرت أن الجلسة الماضية كانت سهلة.",
    "اليوم 7: العودة إلى البيت. وإلى أسبوعك المعتاد.",
  ],
  coachedHeading: "تريد تدريباً مباشراً أينما كنت؟",
  coached: [
    "Iron Hour هي قوة وتكييف بدني بتدريب مباشر. 60 دقيقة، فردية. التجهيز في الدقيقة 0: نضع الهاتف أو الحاسوب حيث أراك كاملاً. الإحماء من الدقيقة 4. تبدأ الرفعة الرئيسية في الدقيقة 14. التمارين المساندة في 28. التهدئة في 50.",
    "تنجح في غرفة الفندق، بما في الغرفة. تتغير الخطة لتناسب الرحلة، بناءً على ما نراه في المكالمة.",
    "تعود بعد انقطاع؟ Return: ‏45 دقيقة، 12 جلسة شهرياً يوماً بعد يوم. Lean Reset: ‏20 جلسة شهرياً، فردية. Open Floor مجموعة صغيرة.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند (IST): دبي متأخرة عنه ساعة ونصفاً، وسنغافورة متقدمة عليه ساعتين ونصفاً. لست متأكداً بعد؟ ابدأ باستشارة مدتها 30 دقيقة. إنها محادثة، وليست تدريباً. الحجز يثبّت موعداً. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. وفق نموذج الفحص لدى ACSM: إذا كنت غير نشط، بلا أعراض، ولا تعاني من مرض معروف في القلب أو الأيض أو الكلى، يمكنك البدء بتمارين خفيفة إلى معتدلة دون إذن طبي والتدرّج. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{8} في الغرفة: استخدم كرسياً بلا عجلات، مسنوداً إلى الحائط. تأكد أن الأرض ليست زلقة. أمسك الدرابزين على الدرج. إن أُصبت بجلطة دموية من قبل، أو حذّرك طبيبك من الجلطات، فاسأله عن الرحلات الطويلة قبل السفر. توقف إذا شعرت بألم حاد، واطلب المشورة أولاً إن كانت لديك مشكلة في المفاصل، أو كنتِ حاملاً أو أنجبتِ حديثاً.",
};

const hi: PostCopy = {
  metaTitle: "ट्रैवल के लिए सबसे अच्छी बॉडीवेट एक्सरसाइज़: होटल रूम के 7 मूव | Jalan PT",
  metaDescription:
    "ट्रैवल और होटल रूम वर्कआउट के लिए 7 सबसे अच्छी बॉडीवेट एक्सरसाइज़। बिना सामान की ट्रेनिंग को काफ़ी मुश्किल कैसे बनाएँ, ट्रिप पर कितना कम काफ़ी है, और एक सैंपल हफ़्ता।",
  h1: "ट्रैवल के लिए सबसे अच्छी बॉडीवेट एक्सरसाइज़: होटल रूम के 7 मूव और एक सैंपल हफ़्ता",
  dek: "जिम नहीं। सामान नहीं। एक बेड, एक कुर्सी, एक बैकपैक और फ़र्श। सात मूव जो आपके साथ सफ़र करते हैं।",
  updated: "अपडेट: 29 अक्टूबर 2026",
  byline: "सुस्मित जालान, कोच, Jalan PT, पुणे।",
  credentialsNote:
    "ASCA लेवल 1 (स्ट्रेंथ और कंडीशनिंग) और ACE (एनाटॉमी और बायोमैकेनिक्स)। ये कोच के क्रेडेंशियल हैं। इनमें से कोई भी संस्था इस व्यवसाय या इस लेख का समर्थन नहीं करती।",
  labels: {
    home: "होम",
    blog: "ब्लॉग",
    why: "क्यों",
    how: "कैसे",
    dose: "डोज़",
    sources: "स्रोत",
    readIn: "इसे इस भाषा में पढ़ें",
    programs: "प्रोग्राम देखें",
    whatsapp: "WhatsApp पर पूछें",
    whatsappText: "नमस्ते सुस्मित, मैंने ट्रैवल के लिए बॉडीवेट एक्सरसाइज़ का लेख पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
    skip: "सामग्री पर जाएँ",
    crumb: "ट्रैवल के लिए सबसे अच्छी बॉडीवेट एक्सरसाइज़",
  },
  intro: [
    "ट्रिप का मतलब ट्रेनिंग बंद होना नहीं है। बस सामान बदलता है। इतना ही।",
    "WHO वयस्कों को हफ़्ते में 2 या ज़्यादा दिन, सभी बड़े मसल ग्रुप्स के लिए मसल-स्ट्रेंथनिंग करने को कहता है।{1} होटल का कमरा इसके लिए काफ़ी है।",
    "ट्रैवल के दिनों में लंबा बैठना होता है: एयरपोर्ट, फ़्लाइट, मीटिंग। WHO कहता है कि बैठने की जगह किसी भी तीव्रता की एक्टिविटी, हल्की भी, सेहत के लिए फ़ायदेमंद है।{1} खड़े हों। टर्मिनल में चलें।",
    "आपको चाहिए एक बेड या मज़बूत कुर्सी, एक बैकपैक, और लेटने लायक फ़र्श। बीस से तीस मिनट।",
  ],
  listHeading: "ट्रैवल के लिए 7 सबसे अच्छी बॉडीवेट एक्सरसाइज़",
  items: [
    {
      name: "रियर-फ़ुट-एलिवेटेड स्प्लिट स्क्वैट",
      why: "बिना वज़न के पैरों का बड़ा मूव। एक पैर दो का काम करता है, इसलिए बॉडीवेट जल्दी मुश्किल हो जाता है। ACSM की सलाह में दोनों तरफ़ वाली एक्सरसाइज़ के साथ एक तरफ़ वाली भी शामिल हैं।{2}",
      how: "पीछे का पैर बेड या पीछे रखी मज़बूत कुर्सी पर। सीधे नीचे जाएँ जब तक पीछे का घुटना फ़र्श के पास न हो। आगे वाले पैर से ऊपर धकेलें। ज़रूरत हो तो दीवार पकड़ें।",
      dose: "हर पैर 8 से 12 के 2 से 3 सेट। बहुत आसान? नीचे जाने में 3 सेकंड लें, या बैकपैक पहन लें।",
    },
    {
      name: "पुश-अप, पहले ऊँचाई पर फिर फ़र्श पर",
      why: "सफ़र में यही आपका बेंच प्रेस है। 18 युवा पुरुषों पर 8 हफ़्ते के एक छोटे ट्रायल में, बेंच-प्रेस मैक्स के 40% के बराबर सेट किए गए पुश-अप से उसी लोड पर बेंच प्रेस जितनी मसल और स्ट्रेंथ बढ़ी।{3} 30 अनुभवी लिफ़्टर्स में, बैंड वाले पुश-अप ने 5 हफ़्तों में स्ट्रेंथ में बेंच प्रेस की बराबरी की।{4} छोटी स्टडीज़। फिर भी, पुश-अप असली ट्रेनिंग है।",
      how: "शुरुआत में हाथ डेस्क या बेड के किनारे पर। सिर से एड़ी तक शरीर एक सीध में। छाती हाथों तक नीचे लाएँ। धकेलकर ऊपर जाएँ। फिर फ़र्श पर। फिर पैर बेड पर।",
      dose: "8 से 15 के 2 से 3 सेट। 15 आसान लगें? सेट लंबा नहीं, एंगल मुश्किल करें।",
    },
    {
      name: "सिंगल-लेग रोमानियन डेडलिफ़्ट",
      why: "हिंज: हैमस्ट्रिंग और ग्लूट्स, साथ में बैलेंस। एक पैर पर खड़े होने से ज़्यादातर लोगों के लिए बॉडीवेट काफ़ी हो जाता है।",
      how: "एक पैर पर खड़े हों, एक हाथ दीवार पर। घुटना ढीला। कूल्हे पीछे धकेलें और खाली पैर को पीछे उठने दें। पीठ लंबी। हैमस्ट्रिंग खिंचे तो रुकें। ग्लूट दबाकर खड़े हों।",
      dose: "हर तरफ़ 8 से 12 के 2 से 3 सेट। लोड बढ़ाने के लिए खाली हाथ में बैकपैक पकड़ें।",
    },
    {
      name: "बैकपैक रो",
      why: "पुल। बॉडीवेट प्लान इसे छोड़ देते हैं, और कीमत पीठ चुकाती है। WHO की सलाह सभी बड़े मसल ग्रुप्स की है, और पीठ उनमें शामिल है।{1} भरा हुआ बैग आपका डम्बल है।",
      how: "बैकपैक भरें: पानी की बोतलें, जूते, कवर में लैपटॉप। एक हाथ और एक घुटना बेड पर। पीठ सीधी। बैग को कूल्हे तक खींचें, कोहनी पास। रुकें। धीरे से नीचे लाएँ।",
      dose: "हर तरफ़ 10 से 15 के 2 से 3 सेट। बैग हल्का है? ऊपर 2 सेकंड रुकें।",
    },
    {
      name: "पाइक पुश-अप",
      why: "बिना वज़न का ओवरहेड पुश। कूल्हे ऊँचे होने से शरीर का ज़्यादा हिस्सा हाथों के ऊपर आता है।",
      how: "पुश-अप पोज़िशन से शुरू करें। पैर पास लाएँ और कूल्हे उठाएँ, ताकि शरीर उल्टे V जैसा दिखे। कोहनियाँ मोड़ें और सिर का ऊपरी हिस्सा हाथों से थोड़ा आगे फ़र्श की ओर लाएँ। वापस ऊपर धकेलें।",
      dose: "6 से 10 के 2 सेट। बहुत मुश्किल? हाथ बेड पर रखकर करें। सिर के ऊपर धकेलने में दर्द हो तो छोड़ दें।",
    },
    {
      name: "साइड प्लैंक",
      why: "आपका कोर, बगल से। एयरपोर्ट पर सूटकेस खींचते समय यही आपको सीधा रखता है।",
      how: "करवट लेकर लेटें, कोहनी कंधे के नीचे। कूल्हे उठाएँ ताकि शरीर एक सीधी लाइन में हो। शुरुआत में घुटने मुड़े हुए। आसान लगे तो पैर सीधे। साँस लेते रहें।",
      dose: "हर तरफ़ 20 से 30 सेकंड के 2 से 3 होल्ड।",
    },
    {
      name: "सीढ़ियाँ चढ़ना या एक जगह पर इंटरवल",
      why: "कंडीशनिंग। 6 हफ़्ते के एक ट्रायल में, कम एक्टिव युवा वयस्क (हर ग्रुप में 12) दिन में 3 बार, बीच में 1 से 4 घंटे के अंतर से, हफ़्ते में 3 दिन, 60 सीढ़ियाँ तेज़ी से चढ़े। उनकी फ़िटनेस (पीक ऑक्सीजन अपटेक) बढ़ी। बढ़त मामूली थी।{7} ज़्यादातर होटलों में सीढ़ियाँ होती हैं।",
      how: "रेलिंग के पास हाथ रखकर तेज़ी से सीढ़ियाँ चढ़ें। चलकर उतरें। सीढ़ियाँ नहीं? एक जगह पर हाई नीज़ या तेज़ स्टेप-अप। इतना कि साँस तेज़ चले, इतना नहीं कि फ़ॉर्म बिगड़े।",
      dose: "3 से 5 बार चढ़ाई, या 20 सेकंड तेज़, 40 सेकंड आसान के 5 से 8 राउंड।",
    },
  ],
  enoughHeading: "क्या बॉडीवेट काफ़ी है? और गेन्स बचाने के लिए कितना कम चलेगा?",
  enough: [
    "लंबा नहीं, मुश्किल बनाएँ। ACSM की शुरुआत एक ऐसे लोड से है जिसे आप 8 से 12 बार उठा सकें; जब आप टारगेट से 1 से 2 रेप ज़्यादा कर लें, तो 2 से 10% बढ़ाएँ।{2} वज़न न हो तो लीवर बदलें: ऊँचाई वाले पुश-अप से फ़र्श, दो पैर से एक, धीमा नीचे आना, भारी बैग।",
    "हल्का भी काम करता है। 21 स्टडीज़ के एक रिव्यू में, सेट फ़ेल्योर तक ले जाने पर हल्के और भारी लोड से मसल ग्रोथ मिलती-जुलती रही। भारी लोड से मैक्सिमम स्ट्रेंथ ज़्यादा बनी।{5} यानी बॉडीवेट मसल बचाता और बढ़ाता है। टॉप-एंड स्ट्रेंथ के लिए इसकी एक सीमा है।",
    "एक ट्रिप आपकी मेहनत नहीं मिटाएगी। एक ट्रायल में वयस्कों ने 16 हफ़्ते, हफ़्ते में 3 दिन ट्रेनिंग की, फिर 32 हफ़्ते उसका एक-तिहाई या नौवाँ हिस्सा किया। दोनों डोज़ ने युवा वयस्कों (20 से 35) में मसल साइज़ बचाया, बड़ी उम्र वालों (60 से 75) में नहीं। स्ट्रेंथ ज़्यादातर बची रही, ट्रेनिंग पूरी तरह छोड़ने वाले ग्रुप में भी, बस आख़िर में थोड़ी गिरावट आई।{6}",
    "तो छोटी ट्रिप पर, हफ़्ते में एक या दो अच्छे सेशन आपकी बनाई हुई ज़्यादातर चीज़ बचा लेते हैं। उम्र ज़्यादा है, तो थोड़ा ज़्यादा करें, कम नहीं।",
  ],
  sampleHeading: "एक सैंपल ट्रैवल हफ़्ता",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। इसे अपने शरीर, अपने इतिहास और अपनी ट्रिप के हिसाब से बदलें।",
  sample: [
    "ट्रैवल का दिन: गेट पर बैठने की जगह टर्मिनल में चलें। लंबी फ़्लाइट में, क्रू इजाज़त दे तो खड़े होकर हिलें-डुलें।",
    "दिन 2 (A, 25 मिनट): 5 मिनट वार्म-अप, फिर स्प्लिट स्क्वैट, पुश-अप, बैकपैक रो, साइड प्लैंक। 2 से 3 राउंड।",
    "दिन 3: शहर में पैदल घूमें। दिन इजाज़त दे तो एक-दो बार सीढ़ियाँ।",
    "दिन 4 (B, 25 मिनट): वार्म-अप, फिर सिंगल-लेग रोमानियन डेडलिफ़्ट, पाइक पुश-अप, बैकपैक रो, सीढ़ी या एक जगह पर इंटरवल।",
    "दिन 5: आराम, या हल्की वॉक।",
    "दिन 6 (फिर A): जहाँ पिछला सेशन आसान लगा, वहाँ एक रेप या मुश्किल वर्ज़न जोड़ें।",
    "दिन 7: घर वापसी। अपने आम हफ़्ते पर लौटें।",
  ],
  coachedHeading: "जहाँ भी हों, लाइव कोचिंग चाहिए?",
  coached: [
    "Iron Hour लाइव कोच की गई स्ट्रेंथ और कंडीशनिंग है। 60 मिनट, 1:1। मिनट 0 पर सेट-अप: फ़ोन या लैपटॉप वहाँ रखते हैं जहाँ से मैं आपको पूरा देख सकूँ। मिनट 4 से वार्म-अप। प्राइमरी लिफ़्ट मिनट 14 पर शुरू होती है। मिनट 28 पर एक्सेसरीज़। मिनट 50 पर कूल-डाउन।",
    "यह होटल के कमरे में, कमरे में जो है उसी से चलता है। कॉल पर जो दिखता है, उसके हिसाब से प्लान ट्रिप के मुताबिक़ बदलता है।",
    "ब्रेक के बाद लौट रहे हैं? Return: 45 मिनट, महीने में 12 सेशन, एक दिन छोड़कर। Lean Reset: महीने में 20 सेशन, 1:1। Open Floor एक छोटा ग्रुप है।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर: दुबई डेढ़ घंटा पीछे, सिंगापुर ढाई घंटे आगे। अभी पक्का नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग से एक समय होल्ड होता है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, मेडिकल सलाह नहीं। ACSM का स्क्रीनिंग मॉडल कहता है: अगर आप इनएक्टिव हैं, कोई लक्षण नहीं हैं और दिल, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल क्लियरेंस के हल्की से मध्यम एक्सरसाइज़ शुरू करके धीरे-धीरे बढ़ा सकते हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल क्लियरेंस लें।{8} कमरे में: बिना पहियों वाली कुर्सी, दीवार से सटाकर। देखें कि फ़र्श फिसलन वाला न हो। सीढ़ियों पर रेलिंग पकड़ें। अगर पहले कभी ब्लड क्लॉट हुआ है, या डॉक्टर ने क्लॉट के बारे में चेताया है, तो सफ़र से पहले लंबी फ़्लाइट के बारे में उनसे पूछें। तेज़ दर्द हो तो रुकें, और अगर जोड़ों की कोई समस्या है, आप गर्भवती हैं या हाल ही में बच्चा हुआ है, तो पहले सलाह लें।",
};

const es: PostCopy = {
  metaTitle: "Mejores ejercicios con peso corporal para viajar: 7 en el hotel | Jalan PT",
  metaDescription:
    "Los 7 mejores ejercicios con peso corporal para viajar y entrenar en la habitación del hotel. Cómo hacer que entrenar sin material cueste lo suficiente, cuánto basta para no perder lo ganado y una semana de ejemplo.",
  h1: "Mejores ejercicios con peso corporal para viajar: 7 movimientos para la habitación del hotel y una semana de ejemplo",
  dek: "Sin gimnasio. Sin material. Una cama, una silla, una mochila y el suelo. Siete ejercicios que viajan contigo.",
  updated: "Actualizado el 29 de octubre de 2026",
  byline: "Por Susmit Jalan, entrenador en Jalan PT, Pune.",
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
    whatsappText: "Hola Susmit, leí el artículo sobre ejercicios con peso corporal para viajar y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Mejores ejercicios con peso corporal para viajar",
  },
  intro: [
    "Un viaje no tiene por qué parar tu entrenamiento. Cambia el material. Nada más.",
    "La OMS pide a los adultos actividades de fortalecimiento muscular que trabajen todos los grandes grupos musculares, 2 o más días a la semana.{1} Una habitación de hotel basta para eso.",
    "Los días de viaje son de estar sentado mucho tiempo: aeropuertos, vuelos, reuniones. La OMS dice que sustituir el tiempo sentado por actividad de cualquier intensidad, incluso ligera, es bueno para la salud.{1} Levántate. Camina por la terminal.",
    "Necesitas una cama o una silla firme, una mochila y suelo suficiente para tumbarte. De veinte a treinta minutos.",
  ],
  listHeading: "Los 7 mejores ejercicios con peso corporal para viajar",
  items: [
    {
      name: "Sentadilla búlgara (pie trasero elevado)",
      why: "El gran ejercicio de piernas sin peso. Una pierna hace el trabajo de dos, así que el peso corporal se vuelve duro enseguida. Las recomendaciones del ACSM incluyen ejercicios a una pierna o un brazo junto a los de dos.{2}",
      how: "Pie trasero sobre la cama o una silla firme detrás de ti. Baja en vertical hasta que la rodilla de atrás quede cerca del suelo. Sube empujando con el pie delantero. Apóyate en la pared si lo necesitas.",
      dose: "2 a 3 series de 8 a 12 por pierna. ¿Demasiado fácil? Tarda 3 segundos en bajar, o ponte la mochila.",
    },
    {
      name: "Flexiones, primero elevadas y luego en el suelo",
      why: "Tu press de banca de viaje. En un pequeño ensayo de 8 semanas con 18 hombres jóvenes, las flexiones ajustadas para igualar el 40% del máximo en press de banca dieron ganancias de músculo y fuerza similares al press de banca con esa carga.{3} En 30 levantadores con experiencia, las flexiones con banda elástica igualaron al press de banca en fuerza en 5 semanas.{4} Estudios pequeños. Aun así, las flexiones son entrenamiento de verdad.",
      how: "Manos en el escritorio o el borde de la cama para empezar. Cuerpo en línea, de la cabeza a los talones. Baja el pecho hacia las manos. Empuja. Luego pasa al suelo. Luego los pies sobre la cama.",
      dose: "2 a 3 series de 8 a 15. ¿Fácil a las 15? Haz más difícil el ángulo, no más larga la serie.",
    },
    {
      name: "Peso muerto rumano a una pierna",
      why: "La bisagra de cadera: isquiotibiales y glúteos, más equilibrio. Al apoyarte en una pierna, el peso corporal basta para casi todo el mundo.",
      how: "De pie sobre una pierna, una mano en la pared. Rodilla suelta. Lleva la cadera atrás y deja que la pierna libre suba por detrás. Espalda larga. Para cuando tiren los isquiotibiales. Sube apretando el glúteo.",
      dose: "2 a 3 series de 8 a 12 por lado. Sujeta la mochila en la mano libre para cargarlo.",
    },
    {
      name: "Remo con mochila",
      why: "El tirón. Los planes con peso corporal se lo saltan, y la espalda lo paga. La recomendación de la OMS abarca todos los grandes grupos musculares, y la espalda es uno de ellos.{1} Una mochila llena es tu mancuerna.",
      how: "Llena la mochila: botellas de agua, zapatos, el portátil en su funda. Una mano y una rodilla sobre la cama. Espalda plana. Lleva la mochila hacia la cadera, codo pegado. Pausa. Baja despacio.",
      dose: "2 a 3 series de 10 a 15 por lado. ¿Mochila ligera? Pausa de 2 segundos arriba.",
    },
    {
      name: "Flexión en pica",
      why: "El empuje por encima de la cabeza sin peso. Con la cadera alta, más parte de tu cuerpo queda sobre las manos.",
      how: "Empieza en posición de flexión. Acerca los pies y sube la cadera, como una V invertida. Dobla los codos y baja la coronilla hacia el suelo, un poco por delante de las manos. Empuja de vuelta.",
      dose: "2 series de 6 a 10. ¿Demasiado difícil? Hazla con las manos en la cama. Sáltala si empujar por encima de la cabeza duele.",
    },
    {
      name: "Plancha lateral",
      why: "Tu tronco, de lado. Es lo que te mantiene recto cuando arrastras la maleta por el aeropuerto.",
      how: "Túmbate de lado, codo bajo el hombro. Sube la cadera hasta que el cuerpo forme una línea recta. Rodillas dobladas para empezar. Piernas estiradas cuando eso sea fácil. Respira.",
      dose: "2 a 3 apoyos de 20 a 30 segundos por lado.",
    },
    {
      name: "Subir escaleras o intervalos en el sitio",
      why: "El acondicionamiento. En un ensayo de 6 semanas, adultos jóvenes sedentarios (12 por grupo) subieron 60 escalones a buen ritmo, 3 veces al día con 1 a 4 horas entre medias, 3 días a la semana. Su forma física (consumo máximo de oxígeno) mejoró. La mejora fue modesta.{7} Casi todos los hoteles tienen escalera.",
      how: "Sube las escaleras con brío, la mano cerca de la barandilla. Baja andando. ¿Sin escalera? Rodillas al pecho o subidas rápidas en el sitio. Lo bastante fuerte para respirar con esfuerzo, sin que se rompa la técnica.",
      dose: "3 a 5 subidas, o 5 a 8 rondas de 20 segundos fuerte y 40 suave.",
    },
  ],
  enoughHeading: "¿Basta con el peso corporal? ¿Y qué mínimo mantiene lo ganado?",
  enough: [
    "Hazlo más difícil, no más largo. El punto de partida del ACSM es una carga que puedas levantar de 8 a 12 veces; cuando superes el objetivo en 1 o 2 repeticiones, añade un 2 a 10%.{2} Sin pesas, cambias la palanca: de flexión elevada a suelo, de dos piernas a una, bajada más lenta, mochila más pesada.",
    "Lo ligero puede funcionar. Una revisión de 21 estudios halló un crecimiento muscular similar con cargas ligeras y pesadas cuando las series llegaban al fallo. Las cargas pesadas dieron más fuerza máxima.{5} Así que el peso corporal mantiene y hace crecer el músculo. Tiene un techo para la fuerza máxima.",
    "Un viaje no borra tu trabajo. En un ensayo, adultos entrenaron 3 días a la semana durante 16 semanas y luego, durante 32 semanas, bajaron a un tercio o a un noveno de ese entrenamiento. Ambas dosis mantuvieron el tamaño muscular en los jóvenes (20 a 35 años), pero no en los mayores (60 a 75). La fuerza se mantuvo en gran parte incluso en el grupo que dejó de entrenar, con solo un pequeño descenso al final.{6}",
    "Así que en un viaje corto, una o dos buenas sesiones a la semana conservan casi todo lo que has construido. Si eres mayor, haz un poco más, no menos.",
  ],
  sampleHeading: "Una semana de viaje de ejemplo",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo, tu historial y tu viaje.",
  sample: [
    "Día de viaje: camina por la terminal en vez de sentarte en la puerta de embarque. En un vuelo largo, levántate y muévete cuando la tripulación lo permita.",
    "Día 2 (A, 25 minutos): calentamiento de 5 minutos, luego sentadilla búlgara, flexiones, remo con mochila, plancha lateral. 2 a 3 rondas.",
    "Día 3: recorre la ciudad a pie. Una o dos subidas de escaleras si el día lo permite.",
    "Día 4 (B, 25 minutos): calentamiento, luego peso muerto rumano a una pierna, flexión en pica, remo con mochila, escaleras o intervalos en el sitio.",
    "Día 5: descanso, o un paseo suave.",
    "Día 6 (A otra vez): añade una repetición, o una versión más difícil, donde la última sesión te resultó fácil.",
    "Día 7: vuelta a casa. A tu semana de siempre.",
  ],
  coachedHeading: "¿Quieres que te lo entrenemos en directo, estés donde estés?",
  coached: [
    "Iron Hour es fuerza y acondicionamiento, entrenado en directo. 60 minutos, 1:1. Preparación en el minuto 0: colocamos el móvil o el portátil donde te vea entero. Calentamiento desde el minuto 4. El ejercicio principal empieza en el minuto 14. Accesorios en el 28. Vuelta a la calma en el 50.",
    "Funciona en una habitación de hotel, con lo que haya en ella. El plan se adapta al viaje, según lo que vemos en la llamada.",
    "¿Vuelves tras un parón? Return son 45 minutos, 12 sesiones al mes en días alternos. Lean Reset son 20 sesiones al mes, 1:1. Open Floor es un grupo pequeño.",
    "En directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST: Dubái va 1 hora y media por detrás y Singapur 2 horas y media por delante. ¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva guarda una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. El modelo de cribado del ACSM dice: si eres inactivo, no tienes síntomas ni enfermedad cardíaca, metabólica o renal conocida, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo poco a poco. Si tienes una de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, consigue antes la autorización médica.{8} En la habitación: usa una silla sin ruedas, contra la pared. Comprueba que el suelo no resbale. Sujétate a la barandilla en las escaleras. Si has tenido un coágulo o tu médico te ha advertido sobre ellos, pregúntale por los vuelos largos antes de viajar. Para si notas un dolor agudo, y consulta antes si tienes un problema articular, estás embarazada o has dado a luz hace poco.",
};

const zh: PostCopy = {
  metaTitle: "最适合旅行的徒手训练：酒店房间里的7个动作 | Jalan PT",
  metaDescription:
    "最适合旅行和酒店房间训练的7个徒手动作。没有器材时如何练得足够有挑战，出差期间最少练多少能保住训练成果，以及一周训练示例。",
  h1: "最适合旅行的徒手训练：酒店房间里的7个动作和一周示例",
  dek: "没有健身房。没有器材。一张床、一把椅子、一个背包和一块地面。七个随身带走的动作。",
  updated: "更新于2026年10月29日",
  byline: "作者：Susmit Jalan，Jalan PT教练，浦那。",
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
    whatsappText: "你好Susmit，我读了旅行徒手训练的文章，想预约一次咨询",
    skip: "跳到正文",
    crumb: "最适合旅行的徒手训练",
  },
  intro: [
    "出门不等于停练。变的只是器材。仅此而已。",
    "世卫组织建议成年人每周2天或更多天进行肌肉强化训练，练到所有主要肌群。{1}一个酒店房间就够了。",
    "出行的日子意味着久坐：机场、航班、会议。世卫组织指出，用任何强度的身体活动（哪怕是低强度）替代久坐，都对健康有益。{1}站起来。在航站楼里走一走。",
    "你需要一张床或一把结实的椅子、一个背包，以及能躺下的一块地面。二十到三十分钟。",
  ],
  listHeading: "最适合旅行的7个徒手训练动作",
  items: [
    {
      name: "后脚抬高分腿蹲",
      why: "不用负重的腿部大动作。一条腿做两条腿的活，自身体重很快就变得有挑战。ACSM的建议里，除了双侧动作，也包括单侧动作。{2}",
      how: "后脚放在床上或身后结实的椅子上。垂直下蹲，直到后膝接近地面。用前脚发力站起。需要的话扶着墙。",
      dose: "每条腿2到3组，每组8到12次。太轻松？下放用3秒，或者背上背包。",
    },
    {
      name: "俯卧撑：先抬高，再到地面",
      why: "这就是你出差时的卧推。在一项针对18名年轻男性、为期8周的小型试验中，调整到相当于卧推最大重量40%负荷的俯卧撑，与同等负荷的卧推带来了相近的肌肉和力量增长。{3}在30名有经验的训练者中，加弹力带的俯卧撑在5周内的力量增长与卧推相当。{4}都是小型研究。但俯卧撑是真正的训练。",
      how: "开始时双手撑在书桌或床沿上。从头到脚跟成一条直线。胸口下放到双手之间。推起。然后改到地面。再然后双脚放到床上。",
      dose: "2到3组，每组8到15次。15次很轻松？加大角度难度，而不是做更多次。",
    },
    {
      name: "单腿罗马尼亚硬拉",
      why: "髋铰链：腘绳肌和臀肌，再加上平衡。单腿站立，对大多数人来说自身体重就够了。",
      how: "单腿站立，一只手扶墙。膝盖微屈。髋部向后推，让另一条腿向后抬起。背部拉长。腘绳肌有拉伸感时停住。夹紧臀部站起。",
      dose: "每侧2到3组，每组8到12次。空着的手拎上背包来加负荷。",
    },
    {
      name: "背包划船",
      why: "拉的动作。徒手计划常常漏掉它，代价由背部承担。世卫组织的建议覆盖所有主要肌群，背部也在其中。{1}装满的背包就是你的哑铃。",
      how: "把背包装满：水瓶、鞋子、装在保护套里的笔记本电脑。一只手和一侧膝盖撑在床上。背部平直。把背包拉向髋部，肘部贴近身体。停一下。慢慢放下。",
      dose: "每侧2到3组，每组10到15次。背包太轻？顶端停2秒。",
    },
    {
      name: "屈体俯卧撑（派克俯卧撑）",
      why: "不用负重的过顶推。髋部抬高，让更多体重落在双手上方。",
      how: "从俯卧撑姿势开始。双脚往前走，抬高髋部，身体像一个倒V。屈肘，把头顶朝地面放下，落在双手稍前方。推回起始位置。",
      dose: "2组，每组6到10次。太难？双手撑在床上做。如果过顶推会痛，就跳过。",
    },
    {
      name: "侧平板支撑",
      why: "从侧面练核心。在机场拖着行李箱时，就是它让你保持挺直。",
      how: "侧躺，肘部在肩膀正下方。抬起髋部，让身体成一条直线。开始时屈膝。觉得轻松后再伸直双腿。保持呼吸。",
      dose: "每侧2到3次，每次保持20到30秒。",
    },
    {
      name: "爬楼梯或原地间歇",
      why: "体能部分。在一项为期6周的试验中，久坐的年轻人（每组12人）每天3次用力爬60级台阶，每次间隔1到4小时，每周3天。他们的体能（最大摄氧量）提高了，但提高幅度不大。{7}大多数酒店都有楼梯间。",
      how: "快步上楼，手靠近扶手。走下来。没有楼梯？原地高抬腿或快速踏步。强度要让你呼吸明显加重，但不至于动作变形。",
      dose: "爬3到5趟，或做5到8轮：20秒用力，40秒放松。",
    },
  ],
  enoughHeading: "徒手训练够吗？最少练多少能保住成果？",
  enough: [
    "加难度，不加时长。ACSM的起点是能举起8到12次的负荷；当你比目标多做1到2次时，增加2%到10%。{2}没有器械时，就改变杠杆：从抬高俯卧撑到地面，从双腿到单腿，放慢下放，背包装得更重。",
    "轻负荷也有效。一项纳入21项研究的综述发现，每组做到力竭时，轻负荷和大负荷带来的肌肉增长相近。大负荷带来的最大力量更多。{5}所以徒手训练能保住并增长肌肉，但在最大力量上有上限。",
    "一次出差不会抹掉你的努力。在一项试验中，成年人每周训练3天、持续16周，之后32周把训练量降到原来的三分之一或九分之一。两种剂量都保住了年轻人（20到35岁）的肌肉体积，但老年人（60到75岁）没有。即使是完全停练的那一组，力量也大部分保住了，只在最后略有下降。{6}",
    "所以短途出行时，每周一两次扎实的训练就能保住你练出来的大部分成果。年纪大一些的话，多练一点，别少练。",
  ],
  sampleHeading: "一周旅行训练示例",
  sampleLabel: "仅为示例。不是处方。请根据你的身体、过往经历和这次行程调整。",
  sample: [
    "出行日：在航站楼里走动，别一直坐在登机口。长途航班上，在机组允许时站起来活动。",
    "第2天（A，25分钟）：5分钟热身，然后分腿蹲、俯卧撑、背包划船、侧平板支撑。2到3轮。",
    "第3天：步行逛城市。时间允许的话，爬一两趟楼梯。",
    "第4天（B，25分钟）：热身，然后单腿罗马尼亚硬拉、屈体俯卧撑、背包划船、爬楼梯或原地间歇。",
    "第5天：休息，或轻松散步。",
    "第6天（再做A）：上次觉得轻松的动作，加一次，或换更难的版本。",
    "第7天：返程。回到你平常的一周。",
  ],
  coachedHeading: "无论身在何处，想要实时指导？",
  coached: [
    "Iron Hour是实时指导的力量与体能训练。60分钟，一对一。第0分钟准备：把手机或电脑放在我能看到你全身的位置。第4分钟开始热身。第14分钟开始主项。第28分钟辅助训练。第50分钟放松。",
    "在酒店房间也能练，房间里有什么就用什么。计划会根据通话中看到的情况，配合行程调整。",
    "停练后重新开始？Return：每次45分钟，每月12次，隔天进行。Lean Reset：每月20次，一对一。Open Floor是小组课。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。印地语或英语。按印度标准时间（IST）：迪拜比IST晚1个半小时，新加坡比IST早2个半小时。还没想好？先来一次30分钟的咨询。这是一次交流，不是训练。预约只是保留时间。费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不是医疗建议。ACSM的筛查模式指出：如果你平时不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以不经医生许可，从低到中等强度开始，逐步增加。如果你有上述疾病之一，或有胸痛、异常气短或头晕等症状，请先获得医生许可。{8}在房间里：用没有轮子的椅子，并靠墙放稳。确认地面不滑。上下楼梯时扶好扶手。如果你曾有过血栓，或医生提醒过你注意血栓，出行前请就长途飞行咨询医生。出现剧痛就停下；如果有关节问题、正在怀孕或刚生产不久，请先咨询专业意见。",
};

const ja: PostCopy = {
  metaTitle: "旅行に最適な自重トレーニング：ホテルの部屋でできる7種目 | Jalan PT",
  metaDescription:
    "旅行やホテルの部屋でのトレーニングに最適な自重トレーニング7種目。道具なしで十分きつくする方法、旅先で成果を保つのに必要な最小限の量、1週間のサンプル。",
  h1: "旅行に最適な自重トレーニング：ホテルの部屋でできる7種目と1週間のサンプル",
  dek: "ジムなし。道具なし。ベッド、椅子、リュック、そして床。旅に持っていける7種目。",
  updated: "2026年10月29日更新",
  byline: "執筆：Susmit Jalan（Jalan PT コーチ、プネー）",
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
    whatsappText: "こんにちは Susmit さん、旅行向け自重トレーニングの記事を読みました。相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "旅行に最適な自重トレーニング",
  },
  intro: [
    "旅に出てもトレーニングは止めなくていい。変わるのは道具だけです。",
    "WHO は成人に、すべての主要な筋群を使う筋力トレーニングを週2日以上勧めています。{1}ホテルの部屋で十分です。",
    "移動日は座りっぱなしになりがちです。空港、フライト、会議。WHO は、座っている時間をどんな強度の活動に置き換えても、軽い活動でも、健康上の利益があるとしています。{1}立ち上がる。ターミナルを歩く。",
    "必要なのは、ベッドか頑丈な椅子、リュック、そして横になれるだけの床。20〜30分です。",
  ],
  listHeading: "旅行に最適な自重トレーニング7種目",
  items: [
    {
      name: "ブルガリアンスクワット（後ろ足を台に乗せるスプリットスクワット）",
      why: "重りなしでできる脚の大きな種目。片脚で2本分の仕事をするので、自重でもすぐにきつくなります。ACSM の推奨には、両側の種目と並んで片側の種目も含まれています。{2}",
      how: "後ろ足をベッドか後ろに置いた頑丈な椅子に乗せます。後ろの膝が床に近づくまで真下に下ろします。前足で押して立ち上がります。必要なら壁に手をつきます。",
      dose: "片脚8〜12回を2〜3セット。簡単すぎる？ 3秒かけて下ろすか、リュックを背負います。",
    },
    {
      name: "腕立て伏せ：高い位置から床へ",
      why: "旅先でのベンチプレスです。若い男性18人を対象にした8週間の小規模な試験では、ベンチプレス最大重量の40%に相当するよう調整した腕立て伏せで、同じ負荷のベンチプレスと同程度の筋肥大と筋力向上が得られました。{3}経験のあるトレーニー30人では、バンドで負荷をかけた腕立て伏せが5週間でベンチプレスと同等の筋力向上を示しました。{4}小規模な研究です。それでも腕立て伏せは本物のトレーニングです。",
      how: "最初は机かベッドの縁に手をつきます。頭からかかとまで一直線。胸を手の間まで下ろします。押し返します。次は床で。その次は足をベッドに乗せて。",
      dose: "8〜15回を2〜3セット。15回が楽なら、回数を増やすのではなく角度をきつくします。",
    },
    {
      name: "シングルレッグ・ルーマニアンデッドリフト",
      why: "ヒップヒンジ：ハムストリングスと臀筋、そしてバランス。片脚で立つだけで、ほとんどの人には自重で十分な負荷になります。",
      how: "片脚で立ち、片手を壁に。膝は軽く緩めます。お尻を後ろに引き、浮いた脚を後ろに上げます。背中は長く。ハムストリングスが張ったら止めます。お尻を締めて立ち上がります。",
      dose: "片側8〜12回を2〜3セット。空いた手にリュックを持てば負荷が増えます。",
    },
    {
      name: "リュックロー",
      why: "引く動作。自重メニューでは抜けがちで、そのツケは背中に回ります。WHO の推奨はすべての主要な筋群を対象としており、背中もその一つです。{1}詰めたリュックがダンベル代わりです。",
      how: "リュックに水のボトル、靴、ケースに入れたノートPCなどを詰めます。片手と片膝をベッドにつきます。背中は平らに。リュックを腰へ引き、肘は体の近くに。一瞬止めて、ゆっくり下ろします。",
      dose: "片側10〜15回を2〜3セット。リュックが軽いなら、上で2秒止めます。",
    },
    {
      name: "パイクプッシュアップ",
      why: "重りなしの頭上へのプッシュ。お尻を高くすると、体重のより多くが手の上に乗ります。",
      how: "腕立て伏せの姿勢から始めます。足を手の方へ歩かせてお尻を上げ、逆V字になります。肘を曲げ、頭のてっぺんを手の少し前の床へ下ろします。押し戻します。",
      dose: "6〜10回を2セット。難しすぎるなら、手をベッドについて行います。頭上に押す動作で痛むなら省きます。",
    },
    {
      name: "サイドプランク",
      why: "体幹を横から。空港でスーツケースを引くとき、体をまっすぐ保つのがこの力です。",
      how: "横向きに寝て、肘を肩の真下に。体が一直線になるまでお尻を持ち上げます。最初は膝を曲げて。楽になったら脚を伸ばして。呼吸を続けます。",
      dose: "片側20〜30秒を2〜3回。",
    },
    {
      name: "階段上りか、その場インターバル",
      why: "コンディショニング。6週間の試験で、運動習慣のない若い成人（各群12人）が、60段の階段を力強く上る運動を1日3回（間隔1〜4時間）、週3日行いました。体力（最大酸素摂取量）は向上しましたが、その幅は控えめでした。{7}ほとんどのホテルには階段があります。",
      how: "手すりの近くに手を置き、きびきびと階段を上ります。下りは歩いて。階段がなければ、その場でもも上げか素早いステップ。息がはっきり上がる強さで、ただしフォームが崩れない範囲で。",
      dose: "3〜5回上る。または20秒強め・40秒楽にを5〜8ラウンド。",
    },
  ],
  enoughHeading: "自重で十分？ 成果を保つにはどれくらいで足りる？",
  enough: [
    "長くするより、きつくする。ACSM の出発点は8〜12回挙げられる負荷で、目標を1〜2回上回ったら2〜10%増やします。{2}重りがなければ、てこを変えます。高い位置の腕立て伏せから床へ、両脚から片脚へ、下ろす動作をゆっくり、リュックを重く。",
    "軽くても効果はあります。21件の研究をまとめたレビューでは、限界までセットを行った場合、軽い負荷と重い負荷で筋肥大は同程度でした。最大筋力は重い負荷のほうが伸びました。{5}つまり自重で筋肉は保て、増やせます。最大筋力には上限があります。",
    "1回の旅で努力は消えません。ある試験では、成人が週3日・16週間トレーニングした後、32週間にわたって量を3分の1または9分の1に減らしました。どちらの量でも、若い人（20〜35歳）の筋肉量は保たれましたが、高齢者（60〜75歳）では保たれませんでした。筋力は、トレーニングをやめた群でもほぼ維持され、最後にわずかに下がっただけでした。{6}",
    "ですから短い旅なら、週に1〜2回のしっかりしたセッションで、積み上げたもののほとんどを保てます。年齢が高い方は、減らすのではなく少し多めに。",
  ],
  sampleHeading: "旅行中の1週間のサンプル",
  sampleLabel: "あくまでサンプルです。処方ではありません。体、これまでの経験、旅の予定に合わせて調整してください。",
  sample: [
    "移動日：搭乗口で座り続けず、ターミナルを歩きます。長距離便では、乗務員が許可するときに立って体を動かします。",
    "2日目（A、25分）：5分のウォームアップ、そしてブルガリアンスクワット、腕立て伏せ、リュックロー、サイドプランク。2〜3周。",
    "3日目：街を歩いて回ります。余裕があれば階段を1〜2回。",
    "4日目（B、25分）：ウォームアップ、そしてシングルレッグ・ルーマニアンデッドリフト、パイクプッシュアップ、リュックロー、階段かその場インターバル。",
    "5日目：休養、または軽い散歩。",
    "6日目（再びA）：前回楽に感じた種目で、1回増やすか、きつい版にします。",
    "7日目：帰路。いつもの1週間に戻ります。",
  ],
  coachedHeading: "どこにいても、ライブで指導を受けたいですか？",
  coached: [
    "Iron Hour はライブ指導のストレングス＆コンディショニングです。60分、1対1。0分にセットアップ：スマホかノートPCを、全身が見える位置に置きます。4分からウォームアップ。14分にメインのリフト。28分に補助種目。50分にクールダウン。",
    "ホテルの部屋でも、部屋にあるもので行えます。通話で見た様子から、旅に合わせてプランを変えます。",
    "ブランクからの再開ですか？ Return は45分、月12回、1日おき。Lean Reset は月20回、1対1。Open Floor は少人数グループです。",
    "Google Meet、Zoom、FaceTime でライブ指導。プネーから。ヒンディー語または英語で。インド標準時（IST）：ドバイは1時間半遅れ、シンガポールは2時間半進んでいます。まだ迷っていますか？ まずは30分の相談から。会話であって、トレーニングではありません。予約は時間を確保するものです。料金は直接取り決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医療上の助言ではありません。ACSM のスクリーニングモデルでは、運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽〜中程度の運動を始めて徐々に増やしてよいとしています。これらの病気がある場合や、胸の痛み、いつもと違う息切れ、めまいなどの症状がある場合は、先に医師の許可を得てください。{8}部屋では、キャスターのない椅子を壁に付けて使います。床が滑らないか確認します。階段では手すりを持ちます。血栓を起こしたことがある方や、医師から血栓について注意を受けている方は、旅行前に長時間のフライトについて医師に相談してください。鋭い痛みを感じたら中止し、関節に問題がある方、妊娠中や出産後間もない方は、先に専門家に相談してください。",
};

const gu: PostCopy = {
  metaTitle: "ટ્રાવેલ માટે શ્રેષ્ઠ બૉડીવેટ કસરતો: હોટેલ રૂમના 7 મૂવ | Jalan PT",
  metaDescription:
    "ટ્રાવેલ અને હોટેલ રૂમ વર્કઆઉટ માટે 7 શ્રેષ્ઠ બૉડીવેટ કસરતો. સાધન વગરની ટ્રેનિંગને પૂરતી અઘરી કેવી રીતે બનાવવી, ટ્રિપ પર કેટલું ઓછું પૂરતું છે, અને એક સેમ્પલ અઠવાડિયું.",
  h1: "ટ્રાવેલ માટે શ્રેષ્ઠ બૉડીવેટ કસરતો: હોટેલ રૂમના 7 મૂવ અને એક સેમ્પલ અઠવાડિયું",
  dek: "જિમ નહીં. સાધન નહીં. એક બેડ, એક ખુરશી, એક બૅકપૅક અને જમીન. સાત મૂવ જે તમારી સાથે મુસાફરી કરે છે.",
  updated: "અપડેટ: 29 ઑક્ટોબર 2026",
  byline: "સુસ્મિત જાલાન, કોચ, Jalan PT, પુણે.",
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
    whatsappText: "નમસ્તે સુસ્મિત, મેં ટ્રાવેલ માટે બૉડીવેટ કસરતોનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવું છે",
    skip: "સામગ્રી પર જાઓ",
    crumb: "ટ્રાવેલ માટે શ્રેષ્ઠ બૉડીવેટ કસરતો",
  },
  intro: [
    "ટ્રિપનો અર્થ ટ્રેનિંગ બંધ થવી નથી. માત્ર સાધન બદલાય છે. બસ એટલું જ.",
    "WHO પુખ્ત વયના લોકોને અઠવાડિયામાં 2 કે વધુ દિવસ, બધા મોટા મસલ ગ્રુપ માટે મસલ-સ્ટ્રેન્થનિંગ કરવાનું કહે છે.{1} હોટેલનો રૂમ એ માટે પૂરતો છે.",
    "ટ્રાવેલના દિવસોમાં લાંબું બેસવાનું થાય: એરપોર્ટ, ફ્લાઇટ, મીટિંગ. WHO કહે છે કે બેસવાના સમયને કોઈ પણ તીવ્રતાની પ્રવૃત્તિ, હળવી પણ, સાથે બદલવાથી સ્વાસ્થ્યને ફાયદો થાય છે.{1} ઊભા થાઓ. ટર્મિનલમાં ચાલો.",
    "તમારે જોઈએ એક બેડ કે મજબૂત ખુરશી, એક બૅકપૅક, અને સૂઈ શકાય એટલી જમીન. વીસથી ત્રીસ મિનિટ.",
  ],
  listHeading: "ટ્રાવેલ માટે 7 શ્રેષ્ઠ બૉડીવેટ કસરતો",
  items: [
    {
      name: "રિયર-ફૂટ-એલિવેટેડ સ્પ્લિટ સ્ક્વૉટ",
      why: "વજન વગરનો પગનો મોટો મૂવ. એક પગ બે પગનું કામ કરે છે, એટલે બૉડીવેટ ઝડપથી અઘરું બને છે. ACSM ની સલાહમાં બંને બાજુની કસરતો સાથે એક બાજુની કસરતો પણ સામેલ છે.{2}",
      how: "પાછળનો પગ બેડ પર કે પાછળ રાખેલી મજબૂત ખુરશી પર. પાછળનો ઘૂંટણ જમીનની નજીક આવે ત્યાં સુધી સીધા નીચે જાઓ. આગળના પગથી ધક્કો મારી ઉપર આવો. જરૂર હોય તો દીવાલ પકડો.",
      dose: "દરેક પગ 8 થી 12 ના 2 થી 3 સેટ. બહુ સહેલું? નીચે જવામાં 3 સેકન્ડ લો, અથવા બૅકપૅક પહેરો.",
    },
    {
      name: "પુશ-અપ, પહેલાં ઊંચાઈ પર પછી જમીન પર",
      why: "મુસાફરીમાં આ જ તમારો બેન્ચ પ્રેસ છે. 18 યુવાન પુરુષો પર 8 અઠવાડિયાના એક નાના ટ્રાયલમાં, બેન્ચ-પ્રેસ મૅક્સના 40% જેટલા સેટ કરેલા પુશ-અપથી એ જ લોડ પર બેન્ચ પ્રેસ જેટલો મસલ અને સ્ટ્રેન્થ વધારો મળ્યો.{3} 30 અનુભવી લિફ્ટર્સમાં, બૅન્ડવાળા પુશ-અપે 5 અઠવાડિયામાં સ્ટ્રેન્થમાં બેન્ચ પ્રેસની બરાબરી કરી.{4} નાના અભ્યાસો. છતાં, પુશ-અપ સાચી ટ્રેનિંગ છે.",
      how: "શરૂઆતમાં હાથ ડેસ્ક કે બેડની ધાર પર. માથાથી એડી સુધી શરીર એક લાઇનમાં. છાતી હાથ સુધી નીચે લાવો. ધક્કો મારી ઉપર જાઓ. પછી જમીન પર. પછી પગ બેડ પર.",
      dose: "8 થી 15 ના 2 થી 3 સેટ. 15 સહેલા લાગે? સેટ લાંબો નહીં, એંગલ અઘરો કરો.",
    },
    {
      name: "સિંગલ-લેગ રોમાનિયન ડેડલિફ્ટ",
      why: "હિન્જ: હેમસ્ટ્રિંગ અને ગ્લૂટ્સ, સાથે બૅલેન્સ. એક પગ પર ઊભા રહેવાથી મોટા ભાગના લોકો માટે બૉડીવેટ પૂરતું બને છે.",
      how: "એક પગ પર ઊભા રહો, એક હાથ દીવાલ પર. ઘૂંટણ ઢીલો. હિપ્સ પાછળ ધકેલો અને ખાલી પગને પાછળ ઊંચો થવા દો. પીઠ લાંબી. હેમસ્ટ્રિંગ ખેંચાય ત્યારે રોકાઓ. ગ્લૂટ દબાવીને ઊભા થાઓ.",
      dose: "દરેક બાજુ 8 થી 12 ના 2 થી 3 સેટ. લોડ વધારવા ખાલી હાથમાં બૅકપૅક પકડો.",
    },
    {
      name: "બૅકપૅક રો",
      why: "પુલ. બૉડીવેટ પ્લાન તેને છોડી દે છે, અને કિંમત પીઠ ચૂકવે છે. WHO ની સલાહ બધા મોટા મસલ ગ્રુપ માટે છે, અને પીઠ તેમાં સામેલ છે.{1} ભરેલી બૅગ તમારું ડમ્બેલ છે.",
      how: "બૅકપૅક ભરો: પાણીની બોટલો, જૂતાં, કવરમાં લૅપટૉપ. એક હાથ અને એક ઘૂંટણ બેડ પર. પીઠ સપાટ. બૅગને હિપ સુધી ખેંચો, કોણી નજીક. રોકાઓ. ધીમેથી નીચે લાવો.",
      dose: "દરેક બાજુ 10 થી 15 ના 2 થી 3 સેટ. બૅગ હળવી છે? ઉપર 2 સેકન્ડ રોકાઓ.",
    },
    {
      name: "પાઇક પુશ-અપ",
      why: "વજન વગરનો ઓવરહેડ પુશ. હિપ્સ ઊંચા રાખવાથી શરીરનો વધુ ભાગ હાથ ઉપર આવે છે.",
      how: "પુશ-અપ પોઝિશનથી શરૂ કરો. પગ નજીક લાવો અને હિપ્સ ઊંચા કરો, જેથી શરીર ઊંધા V જેવું દેખાય. કોણી વાળો અને માથાનો ઉપરનો ભાગ હાથથી થોડો આગળ જમીન તરફ લાવો. પાછા ઉપર ધકેલો.",
      dose: "6 થી 10 ના 2 સેટ. બહુ અઘરું? હાથ બેડ પર રાખીને કરો. માથા ઉપર ધકેલવામાં દુખાવો થાય તો છોડી દો.",
    },
    {
      name: "સાઇડ પ્લૅન્ક",
      why: "તમારો કોર, બાજુથી. એરપોર્ટ પર સૂટકેસ ખેંચતી વખતે આ જ તમને સીધા રાખે છે.",
      how: "પડખે સૂઈ જાઓ, કોણી ખભાની નીચે. હિપ્સ ઊંચા કરો જેથી શરીર એક સીધી લાઇનમાં આવે. શરૂઆતમાં ઘૂંટણ વાળેલા. સહેલું લાગે ત્યારે પગ સીધા. શ્વાસ લેતા રહો.",
      dose: "દરેક બાજુ 20 થી 30 સેકન્ડના 2 થી 3 હોલ્ડ.",
    },
    {
      name: "દાદરા ચડવા કે એક જગ્યાએ ઇન્ટરવલ",
      why: "કન્ડિશનિંગ. 6 અઠવાડિયાના એક ટ્રાયલમાં, ઓછા સક્રિય યુવાન પુખ્તો (દરેક ગ્રુપમાં 12) દિવસમાં 3 વાર, વચ્ચે 1 થી 4 કલાકના અંતરે, અઠવાડિયામાં 3 દિવસ, 60 પગથિયાં ઝડપથી ચડ્યા. તેમની ફિટનેસ (પીક ઑક્સિજન અપટેક) વધી. વધારો સાધારણ હતો.{7} મોટા ભાગની હોટેલમાં દાદરા હોય છે.",
      how: "રેલિંગ પાસે હાથ રાખીને ઝડપથી દાદરા ચડો. ચાલીને ઊતરો. દાદરા નથી? એક જગ્યાએ હાઇ ની કે ઝડપી સ્ટેપ-અપ. એટલું કે શ્વાસ ઝડપી ચાલે, એટલું નહીં કે ફૉર્મ બગડે.",
      dose: "3 થી 5 વાર ચડાઈ, અથવા 20 સેકન્ડ ઝડપી, 40 સેકન્ડ સહેલાના 5 થી 8 રાઉન્ડ.",
    },
  ],
  enoughHeading: "શું બૉડીવેટ પૂરતું છે? અને ગેઇન્સ બચાવવા કેટલું ઓછું ચાલે?",
  enough: [
    "લાંબું નહીં, અઘરું બનાવો. ACSM ની શરૂઆત એવા લોડથી છે જે તમે 8 થી 12 વાર ઉપાડી શકો; જ્યારે તમે ટાર્ગેટથી 1 થી 2 રેપ વધુ કરો, ત્યારે 2 થી 10% વધારો.{2} વજન ન હોય તો લીવર બદલો: ઊંચાઈવાળા પુશ-અપથી જમીન, બે પગથી એક, ધીમું નીચે આવવું, ભારે બૅગ.",
    "હળવું પણ કામ કરે છે. 21 અભ્યાસોના એક રિવ્યૂમાં, સેટ ફેલ્યર સુધી લઈ જતાં હળવા અને ભારે લોડથી મસલ ગ્રોથ સરખો રહ્યો. ભારે લોડથી મૅક્સિમમ સ્ટ્રેન્થ વધુ બની.{5} એટલે બૉડીવેટ મસલ બચાવે છે અને વધારે છે. ટૉપ-એન્ડ સ્ટ્રેન્થ માટે તેની એક મર્યાદા છે.",
    "એક ટ્રિપ તમારી મહેનત ભૂંસી નહીં નાખે. એક ટ્રાયલમાં પુખ્તોએ 16 અઠવાડિયા, અઠવાડિયામાં 3 દિવસ ટ્રેનિંગ કરી, પછી 32 અઠવાડિયા તેનો ત્રીજો કે નવમો ભાગ કર્યો. બંને ડોઝે યુવાન પુખ્તો (20 થી 35) માં મસલ સાઇઝ બચાવી, મોટી ઉંમરના (60 થી 75) માં નહીં. સ્ટ્રેન્થ મોટા ભાગે બચી રહી, ટ્રેનિંગ સંપૂર્ણ છોડનાર ગ્રુપમાં પણ, બસ અંતે થોડો ઘટાડો આવ્યો.{6}",
    "તો નાની ટ્રિપ પર, અઠવાડિયામાં એક કે બે સારા સેશન તમે બનાવેલું મોટા ભાગનું બચાવી લે છે. ઉંમર વધુ હોય, તો થોડું વધુ કરો, ઓછું નહીં.",
  ],
  sampleHeading: "એક સેમ્પલ ટ્રાવેલ અઠવાડિયું",
  sampleLabel: "માત્ર સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર, તમારા ઇતિહાસ અને તમારી ટ્રિપ મુજબ બદલો.",
  sample: [
    "ટ્રાવેલનો દિવસ: ગેટ પર બેસવાને બદલે ટર્મિનલમાં ચાલો. લાંબી ફ્લાઇટમાં, ક્રૂ મંજૂરી આપે ત્યારે ઊભા થઈને હલનચલન કરો.",
    "દિવસ 2 (A, 25 મિનિટ): 5 મિનિટ વૉર્મ-અપ, પછી સ્પ્લિટ સ્ક્વૉટ, પુશ-અપ, બૅકપૅક રો, સાઇડ પ્લૅન્ક. 2 થી 3 રાઉન્ડ.",
    "દિવસ 3: શહેરમાં પગપાળા ફરો. દિવસ મંજૂરી આપે તો એક-બે વાર દાદરા.",
    "દિવસ 4 (B, 25 મિનિટ): વૉર્મ-અપ, પછી સિંગલ-લેગ રોમાનિયન ડેડલિફ્ટ, પાઇક પુશ-અપ, બૅકપૅક રો, દાદરા કે એક જગ્યાએ ઇન્ટરવલ.",
    "દિવસ 5: આરામ, અથવા હળવી વૉક.",
    "દિવસ 6 (ફરી A): જ્યાં છેલ્લું સેશન સહેલું લાગ્યું, ત્યાં એક રેપ કે અઘરું વર્ઝન ઉમેરો.",
    "દિવસ 7: ઘરે પાછા. તમારા સામાન્ય અઠવાડિયા પર પાછા.",
  ],
  coachedHeading: "જ્યાં પણ હો, લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Iron Hour લાઇવ કોચ કરાતી સ્ટ્રેન્થ અને કન્ડિશનિંગ છે. 60 મિનિટ, 1:1. મિનિટ 0 પર સેટ-અપ: ફોન કે લૅપટૉપ ત્યાં મૂકીએ જ્યાંથી હું તમને આખા જોઈ શકું. મિનિટ 4 થી વૉર્મ-અપ. મુખ્ય લિફ્ટ મિનિટ 14 પર શરૂ થાય છે. મિનિટ 28 પર એક્સેસરીઝ. મિનિટ 50 પર કૂલ-ડાઉન.",
    "તે હોટેલના રૂમમાં, રૂમમાં જે હોય તેનાથી ચાલે છે. કૉલ પર જે દેખાય તે મુજબ, પ્લાન ટ્રિપને અનુરૂપ બદલાય છે.",
    "બ્રેક પછી પાછા આવો છો? Return: 45 મિનિટ, મહિને 12 સેશન, એકાંતરે દિવસે. Lean Reset: મહિને 20 સેશન, 1:1. Open Floor નાનું ગ્રુપ છે.",
    "Google Meet, Zoom કે FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર: દુબઈ દોઢ કલાક પાછળ, સિંગાપોર અઢી કલાક આગળ. હજુ નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. તે વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગથી એક સમય રોકાય છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM ના સ્ક્રીનિંગ મોડલ મુજબ: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણ નથી અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, અથવા છાતીમાં દુખાવો, અસામાન્ય હાંફ કે ચક્કર જેવા લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{8} રૂમમાં: પૈડાં વગરની ખુરશી, દીવાલને અડાડીને. જમીન લપસણી નથી એ જુઓ. દાદરા પર રેલિંગ પકડો. જો પહેલાં ક્યારેય લોહીનો ગઠ્ઠો (ક્લૉટ) થયો હોય, કે ડૉક્ટરે ક્લૉટ વિશે ચેતવ્યા હોય, તો મુસાફરી પહેલાં લાંબી ફ્લાઇટ વિશે તેમને પૂછો. તીવ્ર દુખાવો થાય તો રોકાઈ જાઓ, અને સાંધાની કોઈ સમસ્યા હોય, ગર્ભાવસ્થામાં હો કે તાજેતરમાં બાળક થયું હોય તો પહેલાં સલાહ લો.",
};

export const travelBodyweightPost: BlogPost = {
  slug: TRAVEL_SLUG,
  published: TRAVEL_PUBLISHED,
  modified: TRAVEL_MODIFIED,
  about: "Bodyweight exercises for travel and hotel-room workouts",
  sources: TRAVEL_SOURCES,
  copy: { en, ar, hi, es, zh, ja, gu },
  programLink: { href: "/online-strength-and-conditioning-coach", label: "How Iron Hour works: online strength and conditioning, coached live" },
};
