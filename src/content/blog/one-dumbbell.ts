/**
 * Blog post: "Best home workouts with one dumbbell".
 * Citations in copy are written as {n} and point at DB_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (checked against the
 * Europe PMC record and abstract, or the WHO page, on 28 Oct 2026). No client
 * results, no quotes, no prices. Small studies are labelled as such in the copy.
 * Translations were drafted for this batch and need a native-speaker review
 * before launch (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const DB_SLUG = "best-home-workouts-with-one-dumbbell";
export const DB_PUBLISHED = "2026-10-28";
export const DB_MODIFIED = "2026-10-28";

export const DB_SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "American College of Sports Medicine. Position stand: Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
    url: "https://doi.org/10.1249/MSS.0b013e3181915670",
  },
  {
    cite: "Schoenfeld BJ, Grgic J, Ogborn D, Krieger JW. Strength and hypertrophy adaptations between low- vs. high-load resistance training: a systematic review and meta-analysis. J Strength Cond Res. 2017;31(12):3508–3523.",
    url: "https://doi.org/10.1519/JSC.0000000000002200",
  },
  {
    cite: "Refalo MC, Helms ER, Trexler ET, Hamilton DL, Fyfe JJ. Influence of resistance training proximity-to-failure on skeletal muscle hypertrophy: a systematic review with meta-analysis. Sports Med. 2023;53(3):649–665.",
    url: "https://doi.org/10.1007/s40279-022-01784-y",
  },
  {
    cite: "Schoenfeld BJ, Ogborn DI, Krieger JW. Effect of repetition duration during resistance training on muscle hypertrophy: a systematic review and meta-analysis. Sports Med. 2015;45(4):577–585.",
    url: "https://doi.org/10.1007/s40279-015-0304-0",
  },
  {
    cite: "Speirs DE, Bennett MA, Finn CV, Turner AP. Unilateral vs. bilateral squat training for strength, sprints, and agility in academy rugby players. J Strength Cond Res. 2016;30(2):386–392.",
    url: "https://doi.org/10.1519/JSC.0000000000001096",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Home Workouts With One Dumbbell: 7 Exercises | Jalan PT",
  metaDescription:
    "The 7 best exercises for a home workout with one dumbbell. How to make a light weight hard enough, what the research says on reps and tempo, and a sample week.",
  h1: "Best home workouts with one dumbbell: 7 exercises and a sample week",
  dek: "One dumbbell. A bit of floor. Seven moves that cover the whole body.",
  updated: "Updated 28 October 2026",
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
    whatsappText: "Hi Susmit, I read the article on home workouts with one dumbbell and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best home workouts with one dumbbell",
  },
  intro: [
    "One dumbbell is enough to train every big muscle. You just have to use it well.",
    "WHO asks adults for muscle-strengthening work on 2 or more days a week, plus 150 to 300 minutes of moderate activity.{1}",
    "ACSM's advice for beginners: 2 to 3 days a week, multi-joint moves first, and both two-sided and one-sided exercises.{2}",
    "One-sided work is where a single dumbbell shines. Load one side, and the same weight asks more of you.",
  ],
  listHeading: "The 7 best exercises for a home workout with one dumbbell",
  items: [
    {
      name: "Goblet squat",
      why: "The big lower-body lift. ACSM puts large-muscle, multi-joint exercises first.{2}",
      how: "Hold the dumbbell upright at your chest, both hands under the top end. Feet a little wider than hips. Sit down between your heels. Chest tall. Stand up through the whole foot.",
      dose: "2 to 3 sets of 8 to 12. Too easy at 12? Take 3 seconds on the way down.",
    },
    {
      name: "Romanian deadlift, two legs then one",
      why: "The hinge: hamstrings, glutes and back working together. When the two-leg version gets easy, the one-leg version makes the same dumbbell feel heavy again.",
      how: "Dumbbell in both hands in front of the thighs. Soft knees. Push the hips back, weight close to the legs, back long. Stop when the hamstrings pull. Stand by squeezing the glutes. One-leg version: hold a wall with the free hand.",
      dose: "2 to 3 sets of 8 to 12. One-leg: 6 to 10 each side.",
    },
    {
      name: "Rear-foot-elevated split squat",
      why: "One leg at a time. In a small 5-week trial, 18 young rugby players who trained only this split squat gained about as much back-squat strength as those who trained only the back squat.{6} Small study, trained athletes. Still, it shows one leg and a light load can do real work.",
      how: "Back foot on a sofa or chair behind you. Dumbbell at your chest. Lower straight down until the back knee is near the floor. Push up through the front foot. Hold a wall if you need to.",
      dose: "2 to 3 sets of 6 to 10 each leg.",
    },
    {
      name: "One-arm dumbbell row",
      why: "The pull. It balances the pushing and builds the upper back. ACSM's advice includes one-sided exercises for this reason.{2}",
      how: "One hand and one knee on a sturdy chair or bench. Back flat. Pull the dumbbell to your hip, elbow close. Pause. Lower slowly.",
      dose: "2 to 3 sets of 8 to 12 each side.",
    },
    {
      name: "One-arm floor press",
      why: "A chest press with no bench. The floor sets the depth for you. Pair it with push-ups when the dumbbell gets light.",
      how: "Lie on your back, knees bent. Dumbbell in one hand, upper arm at about 45 degrees from your body. Lower until the elbow touches the floor. Press up. Keep the other hand on the floor beside you.",
      dose: "2 to 3 sets of 8 to 12 each side, then a set of push-ups.",
    },
    {
      name: "Half-kneeling one-arm overhead press",
      why: "The overhead push. Kneeling stops you leaning back to cheat the rep, so the shoulder and trunk do the work.",
      how: "Kneel on one knee, the other foot in front. Dumbbell at the shoulder on the side of the down knee. Squeeze that glute. Press straight up. Lower to the shoulder with control.",
      dose: "2 sets of 6 to 10 each side. Skip it if pressing overhead hurts.",
    },
    {
      name: "Suitcase carry",
      why: "The weight sits on one side, so your trunk has to stop you leaning. Grip, posture and core in one walk.",
      how: "Dumbbell in one hand at your side. Stand tall, shoulders level. Walk slowly with short steps. Switch hands and walk back.",
      dose: "3 to 4 walks of 20 to 30 metres each hand, or 30 seconds.",
    },
  ],
  enoughHeading: "How do you make one dumbbell hard enough?",
  enough: [
    "Days: 2 to 3 strength days a week to start. A load you can lift 8 to 12 times. When you beat the target by 1 to 2 reps, ACSM says add 2 to 10%.{2} With one fixed dumbbell you can't, so add reps, then a set, then a harder version.",
    "Light can work. A review of 21 studies found similar muscle growth with light and heavy loads when sets were taken to failure. Heavy loads built more maximal strength.{3} So a light dumbbell grows muscle. It has a ceiling for top-end strength.",
    "You don't need to grind to failure. A review of 15 studies found only a trivial edge for sets taken to failure over sets stopped short, and none for true momentary failure.{4} Stop a rep or two before your form breaks.",
    "Slow reps are a tool, not magic. Across 8 studies, rep durations from half a second to 8 seconds gave similar muscle growth when sets went to failure.{5} We slow the lowering only to make a light weight hard sooner.",
  ],
  sampleHeading: "A sample one-dumbbell week",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body, your history and your week.",
  sample: [
    "Day 1 (A): warm-up, then goblet squat, one-arm row, one-arm floor press, suitcase carry. 2 to 3 sets each.",
    "Day 2: 30 to 40 minutes of brisk walking.",
    "Day 3 (B): warm-up, then Romanian deadlift, split squat, half-kneeling press, row. 2 to 3 sets each.",
    "Day 4: rest, or an easy walk.",
    "Day 5 (A again): add a rep where the last session felt easy. Slow the lowering where 12 reps came easily.",
    "Days 6 and 7: one active day, one rest day. Your choice.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "Iron Hour is strength and conditioning, coached live. 60 minutes, 1:1. Set-up at minute 0. Warm-up from minute 4. The primary lift starts at minute 14. Accessories at 28. Cool-down at 50.",
    "It works at home with the kit you have. One dumbbell included. Load, reps and tempo are set each session, from what we see on the call.",
    "Coming back after time off? Return is 45 minutes, 12 alternate-day sessions a month. Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST. Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{7} Check the dumbbell before each session: collars tight on an adjustable one. Clear the floor around you. Stop if you feel sharp pain, and get advice first if you have a back or shoulder problem, are pregnant or have recently given birth.",
};

const ar: PostCopy = {
  metaTitle: "أفضل تمارين منزلية بدمبل واحد: 7 تمارين | Jalan PT",
  metaDescription:
    "أفضل 7 تمارين لتمرين منزلي بدمبل واحد. كيف تجعل الوزن الخفيف صعباً بما يكفي، وما تقوله الأبحاث عن التكرارات والإيقاع، مع نموذج لأسبوع تدريب.",
  h1: "أفضل تمارين منزلية بدمبل واحد: 7 تمارين ونموذج لأسبوع",
  dek: "دمبل واحد. مساحة صغيرة من الأرض. سبعة تمارين تغطي الجسم كله.",
  updated: "تم التحديث في 28 أكتوبر 2026",
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
    whatsappText: "مرحباً سوسميت، قرأت مقال التمارين المنزلية بدمبل واحد وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل تمارين منزلية بدمبل واحد",
  },
  intro: [
    "دمبل واحد يكفي لتمرين كل العضلات الكبيرة. عليك فقط أن تستخدمه جيداً.",
    "توصي منظمة الصحة العالمية البالغين بتمارين تقوية العضلات يومين أو أكثر في الأسبوع، إلى جانب 150 إلى 300 دقيقة من النشاط المعتدل.{1}",
    "ونصيحة ACSM للمبتدئين: يومان إلى 3 أيام في الأسبوع، والتمارين متعددة المفاصل أولاً، مع تمارين للجهتين معاً وتمارين لجهة واحدة.{2}",
    "تمارين الجهة الواحدة هي حيث يتألق الدمبل الواحد. حمّل جهة واحدة، فيطلب منك الوزن نفسه جهداً أكبر.",
  ],
  listHeading: "أفضل 7 تمارين لتمرين منزلي بدمبل واحد",
  items: [
    {
      name: "القرفصاء بالدمبل أمام الصدر (Goblet squat)",
      why: "التمرين الكبير للجزء السفلي. تضع ACSM التمارين متعددة المفاصل وللعضلات الكبيرة أولاً.{2}",
      how: "أمسك الدمبل عمودياً عند صدرك، واليدان تحت طرفه العلوي. القدمان أعرض قليلاً من الوركين. انزل بين كعبيك. الصدر مرفوع. قف بالدفع بالقدم كاملة.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12. سهل عند 12؟ خذ 3 ثوانٍ في النزول.",
    },
    {
      name: "الرفعة الرومانية، بساقين ثم بساق واحدة",
      why: "ثني الورك: أوتار الركبة والألوية والظهر تعمل معاً. عندما تصبح النسخة بساقين سهلة، تجعل النسخة بساق واحدة الدمبل نفسه ثقيلاً من جديد.",
      how: "الدمبل بكلتا اليدين أمام الفخذين. الركبتان مرتختان. ادفع الوركين للخلف، والوزن قريب من الساقين، والظهر ممدود. توقف عندما تشعر بشد أوتار الركبة. قف بشدّ الألوية. في نسخة الساق الواحدة: أمسك الجدار باليد الحرة.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12. بساق واحدة: 6 إلى 10 لكل جهة.",
    },
    {
      name: "القرفصاء المقسومة والقدم الخلفية مرفوعة",
      why: "ساق واحدة في كل مرة. في تجربة صغيرة مدتها 5 أسابيع، اكتسب 18 لاعب رغبي شاب تدرّبوا على هذه القرفصاء المقسومة فقط قوةً في القرفصاء الخلفية تقارب ما اكتسبه من تدرّبوا على القرفصاء الخلفية فقط.{6} دراسة صغيرة، على رياضيين متدرّبين. ومع ذلك، تُظهر أن ساقاً واحدة ووزناً خفيفاً يمكن أن يؤديا عملاً حقيقياً.",
      how: "القدم الخلفية على أريكة أو كرسي خلفك. الدمبل عند صدرك. انزل مباشرة حتى تقترب الركبة الخلفية من الأرض. ادفع للأعلى بالقدم الأمامية. أمسك الجدار إن احتجت.",
      dose: "2 إلى 3 مجموعات من 6 إلى 10 لكل ساق.",
    },
    {
      name: "التجديف بالدمبل بذراع واحدة",
      why: "السحب. يوازن تمارين الدفع ويقوّي أعلى الظهر. ولهذا تتضمن توصيات ACSM تمارين الجهة الواحدة.{2}",
      how: "يد وركبة على كرسي ثابت أو مقعد. الظهر مستوٍ. اسحب الدمبل نحو الورك، والمرفق قريب من الجسم. توقف لحظة. أنزله ببطء.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12 لكل جهة.",
    },
    {
      name: "ضغط الصدر على الأرض بذراع واحدة",
      why: "ضغط للصدر بلا مقعد. الأرض تحدد العمق لك. أضف إليه تمرين الضغط عندما يصبح الدمبل خفيفاً.",
      how: "استلقِ على ظهرك والركبتان مثنيتان. الدمبل في يد واحدة، والعضد بزاوية نحو 45 درجة عن الجسم. انزل حتى يلمس المرفق الأرض. ادفع للأعلى. اترك اليد الأخرى على الأرض بجانبك.",
      dose: "2 إلى 3 مجموعات من 8 إلى 12 لكل جهة، ثم مجموعة من تمرين الضغط.",
    },
    {
      name: "الضغط فوق الرأس بذراع واحدة من وضع نصف الركوع",
      why: "الدفع فوق الرأس. الركوع يمنعك من الميل للخلف للغش في التكرار، فيقوم الكتف والجذع بالعمل.",
      how: "اركع على ركبة واحدة والقدم الأخرى أمامك. الدمبل عند الكتف في جهة الركبة النازلة. شدّ ألوية تلك الجهة. ادفع مباشرة للأعلى. أنزله إلى الكتف بتحكم.",
      dose: "مجموعتان من 6 إلى 10 لكل جهة. تخطَّه إن كان الضغط فوق الرأس مؤلماً.",
    },
    {
      name: "مشية الحقيبة (Suitcase carry)",
      why: "الوزن في جهة واحدة، فعلى جذعك أن يمنعك من الميل. قبضة وقوام وعضلات الوسط في مشية واحدة.",
      how: "الدمبل في يد واحدة بجانبك. قف مستقيماً والكتفان متساويان. امشِ ببطء بخطوات قصيرة. بدّل اليد وعُد.",
      dose: "3 إلى 4 مشيات من 20 إلى 30 متراً لكل يد، أو 30 ثانية.",
    },
  ],
  enoughHeading: "كيف تجعل دمبلاً واحداً صعباً بما يكفي؟",
  enough: [
    "الأيام: يومان إلى 3 أيام قوة في الأسبوع للبداية. وزن تستطيع رفعه 8 إلى 12 مرة. عندما تتجاوز الهدف بتكرار أو تكرارين، توصي ACSM بزيادة الوزن 2 إلى 10%.{2} مع دمبل واحد ثابت لا تستطيع ذلك، فأضف تكرارات، ثم مجموعة، ثم نسخة أصعب.",
    "الوزن الخفيف يمكن أن ينفع. وجدت مراجعة شملت 21 دراسة أن نمو العضلات كان متقارباً مع الأوزان الخفيفة والثقيلة عندما أُدّيت المجموعات حتى الإجهاد. أما الأوزان الثقيلة فبنت قوة قصوى أكبر.{3} إذن الدمبل الخفيف يبني العضلات، لكن له سقف في القوة القصوى.",
    "لا تحتاج إلى الوصول للإجهاد التام. وجدت مراجعة شملت 15 دراسة أفضلية ضئيلة جداً للمجموعات المؤداة حتى الإجهاد مقارنة بالتوقف قبله، ولا أفضلية للإجهاد العضلي اللحظي الحقيقي.{4} توقف قبل أن ينهار أداؤك بتكرار أو تكرارين.",
    "التكرارات البطيئة أداة، لا سحر. عبر 8 دراسات، أعطت مدد تكرار من نصف ثانية إلى 8 ثوانٍ نمواً عضلياً متقارباً عندما أُدّيت المجموعات حتى الإجهاد.{5} نحن نبطّئ النزول فقط لنجعل الوزن الخفيف صعباً أسرع.",
  ],
  sampleHeading: "نموذج لأسبوع بدمبل واحد",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك وتاريخك وأسبوعك.",
  sample: [
    "اليوم 1 (أ): إحماء، ثم القرفصاء بالدمبل، والتجديف بذراع واحدة، وضغط الصدر على الأرض، ومشية الحقيبة. 2 إلى 3 مجموعات لكل تمرين.",
    "اليوم 2: من 30 إلى 40 دقيقة من المشي السريع.",
    "اليوم 3 (ب): إحماء، ثم الرفعة الرومانية، والقرفصاء المقسومة، والضغط من نصف الركوع، والتجديف. 2 إلى 3 مجموعات لكل تمرين.",
    "اليوم 4: راحة، أو مشي خفيف.",
    "اليوم 5 (أ مرة أخرى): أضف تكراراً حيث كانت الجلسة الماضية سهلة. بطّئ النزول حيث جاءت 12 تكراراً بسهولة.",
    "اليومان 6 و7: يوم نشط ويوم راحة. حسب اختيارك.",
  ],
  coachedHeading: "تريد تدريباً مباشراً؟",
  coached: [
    "Iron Hour هي قوة وتكييف بدني بتدريب مباشر. 60 دقيقة، فردية. التجهيز في الدقيقة 0. الإحماء من الدقيقة 4. تبدأ الرفعة الرئيسية في الدقيقة 14. التمارين المساندة في 28. التهدئة في 50.",
    "تنجح في البيت بالأدوات التي لديك، ودمبل واحد منها. الوزن والتكرارات والإيقاع تُحدَّد في كل جلسة، بناءً على ما نراه في المكالمة.",
    "تعود بعد انقطاع؟ Return: ‏45 دقيقة، 12 جلسة شهرياً بالتناوب: يوم تمرين ويوم راحة. Lean Reset: ‏20 جلسة شهرياً، فردية. Open Floor مجموعة صغيرة.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند (IST). لست متأكداً بعد؟ ابدأ باستشارة مدتها 30 دقيقة. إنها محادثة، وليست تدريباً. الحجز يثبّت موعداً. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. وفق نموذج الفحص لدى ACSM: إذا كنت غير نشط، بلا أعراض، ولا تعاني من مرض معروف في القلب أو الأيض أو الكلى، يمكنك البدء بتمارين خفيفة إلى معتدلة دون إذن طبي والتدرّج. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{7} افحص الدمبل قبل كل جلسة: الأقفال محكمة في الدمبل القابل للتعديل. أخلِ الأرض من حولك. توقف إذا شعرت بألم حاد، واطلب المشورة أولاً إن كانت لديك مشكلة في الظهر أو الكتف، أو كنتِ حاملاً أو أنجبتِ حديثاً.",
};

const hi: PostCopy = {
  metaTitle: "एक डम्बल के साथ सबसे अच्छे होम वर्कआउट: 7 एक्सरसाइज़ | Jalan PT",
  metaDescription:
    "एक डम्बल वाले होम वर्कआउट की 7 सबसे अच्छी एक्सरसाइज़। हल्के वज़न को काफ़ी मुश्किल कैसे बनाएँ, रेप्स और टेम्पो पर रिसर्च क्या कहती है, और एक सैंपल हफ़्ता।",
  h1: "एक डम्बल के साथ सबसे अच्छे होम वर्कआउट: 7 एक्सरसाइज़ और एक सैंपल हफ़्ता",
  dek: "एक डम्बल। थोड़ी-सी फ़र्श की जगह। सात मूव जो पूरे शरीर को कवर करते हैं।",
  updated: "अपडेट: 28 अक्टूबर 2026",
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
    whatsappText: "नमस्ते सुस्मित, मैंने एक डम्बल वाले होम वर्कआउट का लेख पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
    skip: "सामग्री पर जाएँ",
    crumb: "एक डम्बल के साथ सबसे अच्छे होम वर्कआउट",
  },
  intro: [
    "हर बड़ी मसल को ट्रेन करने के लिए एक डम्बल काफ़ी है। बस उसे सही तरीके से इस्तेमाल करना है।",
    "WHO वयस्कों से हफ़्ते में 2 या ज़्यादा दिन मसल-स्ट्रेंथनिंग और 150 से 300 मिनट मध्यम गतिविधि करने को कहता है।{1}",
    "शुरुआती लोगों के लिए ACSM की सलाह: हफ़्ते में 2 से 3 दिन, पहले मल्टी-जॉइंट मूव, और दोनों तरफ़ वाली और एक तरफ़ वाली, दोनों तरह की एक्सरसाइज़।{2}",
    "एक तरफ़ वाला काम ही एक डम्बल की ताक़त है। एक तरफ़ लोड डालिए, और वही वज़न आपसे ज़्यादा माँगता है।",
  ],
  listHeading: "एक डम्बल वाले होम वर्कआउट की 7 सबसे अच्छी एक्सरसाइज़",
  items: [
    {
      name: "गॉबलेट स्क्वाट",
      why: "निचले शरीर की बड़ी लिफ़्ट। ACSM बड़ी मसल्स और मल्टी-जॉइंट एक्सरसाइज़ को पहले रखता है।{2}",
      how: "डम्बल को सीधा खड़ा करके छाती के पास पकड़ें, दोनों हाथ ऊपरी सिरे के नीचे। पैर कूल्हों से थोड़े चौड़े। एड़ियों के बीच नीचे बैठें। छाती ऊपर। पूरे पैर से दबाकर खड़े हों।",
      dose: "8 से 12 के 2 से 3 सेट। 12 पर आसान लगे? नीचे जाने में 3 सेकंड लें।",
    },
    {
      name: "रोमानियन डेडलिफ़्ट, दो पैर फिर एक",
      why: "हिंज: हैमस्ट्रिंग, ग्लूट्स और पीठ एक साथ। जब दो पैर वाला आसान हो जाए, तो एक पैर वाला वही डम्बल फिर भारी कर देता है।",
      how: "डम्बल दोनों हाथों में जाँघों के सामने। घुटने ढीले। कूल्हे पीछे धकेलें, वज़न पैरों के पास, पीठ लंबी। हैमस्ट्रिंग खिंचे तो रुकें। ग्लूट्स कसकर खड़े हों। एक पैर वाले में: खाली हाथ से दीवार पकड़ें।",
      dose: "8 से 12 के 2 से 3 सेट। एक पैर: हर तरफ़ 6 से 10।",
    },
    {
      name: "रियर-फ़ुट-एलिवेटेड स्प्लिट स्क्वाट",
      why: "एक बार में एक पैर। 5 हफ़्ते के एक छोटे ट्रायल में, 18 युवा रग्बी खिलाड़ियों ने सिर्फ़ यही स्प्लिट स्क्वाट किया, और उनकी बैक-स्क्वाट स्ट्रेंथ लगभग उतनी ही बढ़ी जितनी सिर्फ़ बैक स्क्वाट करने वालों की।{6} छोटी स्टडी, ट्रेंड खिलाड़ी। फिर भी, यह दिखाती है कि एक पैर और हल्का वज़न असली काम कर सकते हैं।",
      how: "पीछे वाला पैर पीछे रखे सोफ़े या कुर्सी पर। डम्बल छाती पर। सीधे नीचे जाएँ जब तक पीछे का घुटना फ़र्श के पास न आ जाए। आगे वाले पैर से ऊपर धकेलें। ज़रूरत हो तो दीवार पकड़ें।",
      dose: "हर पैर 6 से 10 के 2 से 3 सेट।",
    },
    {
      name: "वन-आर्म डम्बल रो",
      why: "पुल। यह पुशिंग को बैलेंस करता है और ऊपरी पीठ बनाता है। इसीलिए ACSM की सलाह में एक तरफ़ वाली एक्सरसाइज़ भी हैं।{2}",
      how: "एक हाथ और एक घुटना मज़बूत कुर्सी या बेंच पर। पीठ सपाट। डम्बल को कूल्हे की ओर खींचें, कोहनी पास। रुकें। धीरे से नीचे लाएँ।",
      dose: "हर तरफ़ 8 से 12 के 2 से 3 सेट।",
    },
    {
      name: "वन-आर्म फ़्लोर प्रेस",
      why: "बिना बेंच का चेस्ट प्रेस। गहराई फ़र्श तय करता है। जब डम्बल हल्का लगने लगे, तो इसके साथ पुश-अप जोड़ें।",
      how: "पीठ के बल लेटें, घुटने मुड़े। एक हाथ में डम्बल, बाँह शरीर से लगभग 45 डिग्री पर। कोहनी फ़र्श छूने तक नीचे लाएँ। ऊपर प्रेस करें। दूसरा हाथ बगल में फ़र्श पर रखें।",
      dose: "हर तरफ़ 8 से 12 के 2 से 3 सेट, फिर पुश-अप का एक सेट।",
    },
    {
      name: "हाफ़-नीलिंग वन-आर्म ओवरहेड प्रेस",
      why: "सिर के ऊपर पुश। घुटने पर रहने से आप पीछे झुककर रेप में चीटिंग नहीं कर पाते, तो काम कंधा और धड़ करते हैं।",
      how: "एक घुटने पर बैठें, दूसरा पैर सामने। नीचे वाले घुटने की तरफ़ डम्बल कंधे पर। उस तरफ़ का ग्लूट कसें। सीधा ऊपर प्रेस करें। कंट्रोल से कंधे तक वापस लाएँ।",
      dose: "हर तरफ़ 6 से 10 के 2 सेट। सिर के ऊपर प्रेस करने में दर्द हो तो इसे छोड़ दें।",
    },
    {
      name: "सूटकेस कैरी",
      why: "वज़न एक तरफ़ होता है, तो धड़ को आपको झुकने से रोकना पड़ता है। ग्रिप, पोस्चर और कोर, एक ही वॉक में।",
      how: "डम्बल एक हाथ में बगल में। सीधे खड़े हों, कंधे बराबर। छोटे कदमों से धीरे चलें। हाथ बदलें और वापस आएँ।",
      dose: "हर हाथ से 20 से 30 मीटर की 3 से 4 वॉक, या 30 सेकंड।",
    },
  ],
  enoughHeading: "एक डम्बल को काफ़ी मुश्किल कैसे बनाएँ?",
  enough: [
    "दिन: शुरुआत में हफ़्ते में 2 से 3 स्ट्रेंथ दिन। ऐसा वज़न जो आप 8 से 12 बार उठा सकें। जब आप टारगेट से 1 से 2 रेप ज़्यादा कर लें, तो ACSM 2 से 10% वज़न बढ़ाने को कहता है।{2} एक फ़िक्स्ड डम्बल में यह मुमकिन नहीं, तो पहले रेप्स बढ़ाएँ, फिर एक सेट, फिर मुश्किल वर्ज़न।",
    "हल्का वज़न काम कर सकता है। 21 स्टडीज़ के एक रिव्यू में, जब सेट फ़ेलियर तक किए गए, तो हल्के और भारी वज़न से मसल ग्रोथ लगभग बराबर रही। भारी वज़न से मैक्सिमम स्ट्रेंथ ज़्यादा बनी।{3} यानी हल्का डम्बल मसल बनाता है, पर टॉप स्ट्रेंथ की एक सीमा है।",
    "फ़ेलियर तक घिसटने की ज़रूरत नहीं। 15 स्टडीज़ के एक रिव्यू में फ़ेलियर तक किए सेट्स का फ़ायदा, पहले रुकने वाले सेट्स के मुक़ाबले, बहुत मामूली था, और असली मोमेंटरी फ़ेलियर का कोई फ़ायदा नहीं।{4} फ़ॉर्म टूटने से एक-दो रेप पहले रुकें।",
    "धीमे रेप्स एक टूल हैं, जादू नहीं। 8 स्टडीज़ में, आधे सेकंड से 8 सेकंड तक के रेप ड्यूरेशन से मसल ग्रोथ लगभग बराबर रही, जब सेट फ़ेलियर तक किए गए।{5} हम नीचे जाना सिर्फ़ इसलिए धीमा करते हैं ताकि हल्का वज़न जल्दी मुश्किल लगे।",
  ],
  sampleHeading: "एक डम्बल वाला सैंपल हफ़्ता",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। इसे अपने शरीर, अपने इतिहास और अपने हफ़्ते के हिसाब से बदलें।",
  sample: [
    "दिन 1 (A): वार्म-अप, फिर गॉबलेट स्क्वाट, वन-आर्म रो, वन-आर्म फ़्लोर प्रेस, सूटकेस कैरी। हर एक के 2 से 3 सेट।",
    "दिन 2: 30 से 40 मिनट तेज़ चलना।",
    "दिन 3 (B): वार्म-अप, फिर रोमानियन डेडलिफ़्ट, स्प्लिट स्क्वाट, हाफ़-नीलिंग प्रेस, रो। हर एक के 2 से 3 सेट।",
    "दिन 4: आराम, या हल्की सैर।",
    "दिन 5 (फिर A): जहाँ पिछला सेशन आसान लगा, वहाँ एक रेप जोड़ें। जहाँ 12 रेप आसानी से हुए, वहाँ नीचे जाना धीमा करें।",
    "दिन 6 और 7: एक एक्टिव दिन, एक आराम का दिन। आपकी मर्ज़ी।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "Iron Hour लाइव कोच की गई स्ट्रेंथ और कंडीशनिंग है। 60 मिनट, 1:1। मिनट 0 पर सेट-अप। मिनट 4 से वार्म-अप। प्राइमरी लिफ़्ट मिनट 14 पर शुरू होती है। मिनट 28 पर एक्सेसरीज़। मिनट 50 पर कूल-डाउन।",
    "यह घर पर आपके पास मौजूद सामान से चलता है, एक डम्बल भी चलेगा। वज़न, रेप्स और टेम्पो हर सेशन में, कॉल पर जो दिखता है उसके हिसाब से तय होते हैं।",
    "ब्रेक के बाद लौट रहे हैं? Return: 45 मिनट, महीने में 12 सेशन, एक दिन छोड़कर। Lean Reset: महीने में 20 सेशन, 1:1। Open Floor एक छोटा ग्रुप है।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर। अभी पक्का नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग से एक समय होल्ड होता है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, मेडिकल सलाह नहीं। ACSM का स्क्रीनिंग मॉडल कहता है: अगर आप इनएक्टिव हैं, कोई लक्षण नहीं हैं और दिल, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल क्लियरेंस के हल्की से मध्यम एक्सरसाइज़ शुरू करके धीरे-धीरे बढ़ा सकते हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल क्लियरेंस लें।{7} हर सेशन से पहले डम्बल जाँचें: एडजस्टेबल डम्बल के कॉलर कसे हों। अपने आसपास का फ़र्श खाली रखें। तेज़ दर्द हो तो रुकें, और अगर पीठ या कंधे की कोई समस्या है, आप गर्भवती हैं या हाल ही में बच्चा हुआ है, तो पहले सलाह लें।",
};

const es: PostCopy = {
  metaTitle: "Mejores entrenamientos en casa con una mancuerna: 7 ejercicios | Jalan PT",
  metaDescription:
    "Los 7 mejores ejercicios para entrenar en casa con una sola mancuerna. Cómo hacer que un peso ligero cueste lo suficiente, qué dice la investigación sobre repeticiones y ritmo, y una semana de ejemplo.",
  h1: "Mejores entrenamientos en casa con una mancuerna: 7 ejercicios y una semana de ejemplo",
  dek: "Una mancuerna. Un poco de suelo. Siete ejercicios que cubren todo el cuerpo.",
  updated: "Actualizado el 28 de octubre de 2026",
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
    whatsappText: "Hola Susmit, leí el artículo sobre entrenar en casa con una mancuerna y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Mejores entrenamientos en casa con una mancuerna",
  },
  intro: [
    "Una mancuerna basta para entrenar todos los músculos grandes. Solo hay que usarla bien.",
    "La OMS pide a los adultos ejercicios de fortalecimiento muscular 2 o más días por semana, además de 150 a 300 minutos de actividad moderada.{1}",
    "El consejo del ACSM para principiantes: 2 a 3 días por semana, primero ejercicios multiarticulares, y ejercicios tanto a dos lados como a un lado.{2}",
    "El trabajo a un lado es donde brilla una sola mancuerna. Cargas un lado y el mismo peso te exige más.",
  ],
  listHeading: "Los 7 mejores ejercicios para entrenar en casa con una mancuerna",
  items: [
    {
      name: "Sentadilla goblet",
      why: "El gran ejercicio del tren inferior. El ACSM pone primero los ejercicios multiarticulares de músculos grandes.{2}",
      how: "Sujeta la mancuerna en vertical frente al pecho, las dos manos bajo el extremo superior. Pies algo más abiertos que la cadera. Baja entre los talones. Pecho alto. Sube empujando con todo el pie.",
      dose: "2 a 3 series de 8 a 12. ¿Fácil a las 12? Tarda 3 segundos en bajar.",
    },
    {
      name: "Peso muerto rumano, a dos piernas y luego a una",
      why: "La bisagra: isquios, glúteos y espalda trabajando juntos. Cuando la versión a dos piernas sea fácil, la versión a una pierna vuelve a hacer pesada la misma mancuerna.",
      how: "Mancuerna con las dos manos delante de los muslos. Rodillas suaves. Lleva la cadera atrás, el peso cerca de las piernas, la espalda larga. Para cuando tiren los isquios. Sube apretando glúteos. A una pierna: apóyate en la pared con la mano libre.",
      dose: "2 a 3 series de 8 a 12. A una pierna: 6 a 10 por lado.",
    },
    {
      name: "Sentadilla búlgara (pie trasero elevado)",
      why: "Una pierna cada vez. En un ensayo pequeño de 5 semanas, 18 jóvenes jugadores de rugby que solo entrenaron esta sentadilla ganaron casi tanta fuerza en sentadilla trasera como los que solo entrenaron la sentadilla trasera.{6} Estudio pequeño, en deportistas entrenados. Aun así, muestra que una pierna y una carga ligera pueden hacer trabajo real.",
      how: "Pie trasero sobre un sofá o una silla detrás de ti. Mancuerna en el pecho. Baja en vertical hasta que la rodilla trasera quede cerca del suelo. Sube empujando con el pie delantero. Apóyate en la pared si lo necesitas.",
      dose: "2 a 3 series de 6 a 10 por pierna.",
    },
    {
      name: "Remo con mancuerna a una mano",
      why: "El tirón. Equilibra el empuje y fortalece la parte alta de la espalda. Por eso el ACSM incluye ejercicios a un lado.{2}",
      how: "Una mano y una rodilla sobre una silla firme o un banco. Espalda plana. Lleva la mancuerna hacia la cadera, el codo pegado. Pausa. Baja despacio.",
      dose: "2 a 3 series de 8 a 12 por lado.",
    },
    {
      name: "Press de suelo a una mano",
      why: "Un press de pecho sin banco. El suelo marca la profundidad. Combínalo con flexiones cuando la mancuerna se quede ligera.",
      how: "Túmbate boca arriba, rodillas flexionadas. Mancuerna en una mano, el brazo a unos 45 grados del cuerpo. Baja hasta que el codo toque el suelo. Empuja hacia arriba. La otra mano, en el suelo a tu lado.",
      dose: "2 a 3 series de 8 a 12 por lado, y luego una serie de flexiones.",
    },
    {
      name: "Press por encima de la cabeza a una mano, medio arrodillado",
      why: "El empuje vertical. Estar de rodillas evita que te eches atrás para hacer trampa, así que trabajan el hombro y el tronco.",
      how: "Una rodilla en el suelo, el otro pie delante. Mancuerna en el hombro del lado de la rodilla apoyada. Aprieta ese glúteo. Empuja recto hacia arriba. Baja al hombro con control.",
      dose: "2 series de 6 a 10 por lado. Sáltatelo si empujar por encima de la cabeza duele.",
    },
    {
      name: "Paseo de maleta (suitcase carry)",
      why: "El peso va a un solo lado, así que el tronco tiene que impedir que te inclines. Agarre, postura y core en un solo paseo.",
      how: "Mancuerna en una mano, al costado. Erguido, hombros nivelados. Camina despacio con pasos cortos. Cambia de mano y vuelve.",
      dose: "3 a 4 paseos de 20 a 30 metros con cada mano, o 30 segundos.",
    },
  ],
  enoughHeading: "¿Cómo haces que una mancuerna cueste lo suficiente?",
  enough: [
    "Días: 2 a 3 días de fuerza por semana para empezar. Un peso que puedas levantar 8 a 12 veces. Cuando superes el objetivo por 1 o 2 repeticiones, el ACSM aconseja subir un 2 a 10%.{2} Con una mancuerna fija no puedes, así que suma repeticiones, luego una serie, luego una versión más difícil.",
    "Lo ligero puede funcionar. Una revisión de 21 estudios encontró un crecimiento muscular similar con cargas ligeras y pesadas cuando las series se llevaban al fallo. Las cargas pesadas dieron más fuerza máxima.{3} Así que una mancuerna ligera hace crecer el músculo, pero tiene un techo para la fuerza máxima.",
    "No hace falta llegar al fallo. Una revisión de 15 estudios encontró solo una ventaja trivial de las series al fallo frente a las que se paran antes, y ninguna para el fallo muscular momentáneo real.{4} Para una o dos repeticiones antes de que se rompa la técnica.",
    "Las repeticiones lentas son una herramienta, no magia. En 8 estudios, duraciones de repetición de medio segundo a 8 segundos dieron un crecimiento muscular similar cuando las series llegaban al fallo.{5} Solo frenamos la bajada para que un peso ligero cueste antes.",
  ],
  sampleHeading: "Una semana de ejemplo con una mancuerna",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo, tu historial y tu semana.",
  sample: [
    "Día 1 (A): calentamiento, luego sentadilla goblet, remo a una mano, press de suelo a una mano, paseo de maleta. 2 a 3 series de cada uno.",
    "Día 2: 30 a 40 minutos de caminata a paso vivo.",
    "Día 3 (B): calentamiento, luego peso muerto rumano, sentadilla búlgara, press medio arrodillado, remo. 2 a 3 series de cada uno.",
    "Día 4: descanso, o un paseo suave.",
    "Día 5 (A otra vez): suma una repetición donde la última sesión fue fácil. Frena la bajada donde las 12 repeticiones salieron fáciles.",
    "Días 6 y 7: un día activo y uno de descanso. Tú eliges.",
  ],
  coachedHeading: "¿Quieres que te lo entrenemos en directo?",
  coached: [
    "Iron Hour es fuerza y acondicionamiento, entrenado en directo. 60 minutos, 1:1. Preparación en el minuto 0. Calentamiento desde el minuto 4. El ejercicio principal empieza en el minuto 14. Accesorios en el 28. Vuelta a la calma en el 50.",
    "Funciona en casa con el material que tengas, también con una sola mancuerna. Carga, repeticiones y ritmo se ajustan en cada sesión, según lo que vemos en la llamada.",
    "¿Vuelves tras un parón? Return son 45 minutos, 12 sesiones al mes en días alternos. Lean Reset son 20 sesiones al mes, 1:1. Open Floor es un grupo pequeño.",
    "En directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST. ¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva guarda una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. El modelo de cribado del ACSM dice: si eres inactivo, no tienes síntomas ni enfermedad cardíaca, metabólica o renal conocida, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo poco a poco. Si tienes una de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, consigue antes la autorización médica.{7} Revisa la mancuerna antes de cada sesión: los cierres bien apretados si es ajustable. Despeja el suelo a tu alrededor. Para si notas un dolor agudo, y consulta antes si tienes un problema de espalda u hombro, estás embarazada o has dado a luz hace poco.",
};

const zh: PostCopy = {
  metaTitle: "只用一个哑铃的最佳居家训练：7个动作 | Jalan PT",
  metaDescription:
    "只用一个哑铃的居家训练，最好的7个动作。如何让轻重量练得足够有挑战，关于次数和动作节奏的研究怎么说，以及一周训练示例。",
  h1: "只用一个哑铃的最佳居家训练：7个动作和一周示例",
  dek: "一个哑铃。一小块地面。七个动作，练到全身。",
  updated: "更新于2026年10月28日",
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
    whatsappText: "你好Susmit，我读了一个哑铃居家训练的文章，想预约一次咨询",
    skip: "跳到正文",
    crumb: "只用一个哑铃的最佳居家训练",
  },
  intro: [
    "一个哑铃就足以练到所有大肌群。关键是用对。",
    "世界卫生组织建议成年人每周进行2天或以上的肌肉力量训练，另加150至300分钟的中等强度活动。{1}",
    "ACSM对初学者的建议：每周2至3天，先做多关节动作，双侧和单侧动作都要有。{2}",
    "单侧训练正是一个哑铃的强项。只负重一侧，同样的重量会对你提出更高要求。",
  ],
  listHeading: "只用一个哑铃居家训练的7个最佳动作",
  items: [
    {
      name: "高脚杯深蹲",
      why: "下肢的核心动作。ACSM把大肌群、多关节动作排在最前面。{2}",
      how: "把哑铃竖着抱在胸前，双手托住上端。双脚略宽于髋。在两脚跟之间坐下去。挺胸。用整个脚掌发力站起。",
      dose: "2至3组，每组8至12次。12次也觉得轻松？下放时用3秒。",
    },
    {
      name: "罗马尼亚硬拉，先双腿，再单腿",
      why: "髋铰链：腘绳肌、臀部和背部一起发力。双腿版本变轻松后，单腿版本会让同一个哑铃重新变重。",
      how: "双手握哑铃放在大腿前。膝盖微屈。臀部向后推，哑铃贴近腿部，背部保持伸展。感到腘绳肌拉紧时停住。夹紧臀部站起。单腿版本：空出的手扶墙。",
      dose: "2至3组，每组8至12次。单腿：每侧6至10次。",
    },
    {
      name: "后脚抬高分腿蹲（保加利亚分腿蹲）",
      why: "一次练一条腿。在一项为期5周的小型试验中，18名年轻橄榄球运动员只练这种分腿蹲，其杠铃后蹲力量的提升与只练后蹲的人大致相同。{6}样本小，对象是受过训练的运动员。但它说明，单腿加轻重量也能练出真东西。",
      how: "后脚放在身后的沙发或椅子上。哑铃抱在胸前。垂直下蹲，直到后膝接近地面。用前脚发力站起。需要时扶墙。",
      dose: "2至3组，每条腿6至10次。",
    },
    {
      name: "单臂哑铃划船",
      why: "拉的动作。平衡推的动作，强化上背。ACSM的建议里包含单侧动作，正是这个原因。{2}",
      how: "一只手和一侧膝盖撑在结实的椅子或凳子上。背部平直。把哑铃拉向髋部，肘部贴近身体。停顿一下。慢慢放下。",
      dose: "2至3组，每侧8至12次。",
    },
    {
      name: "单臂地板卧推",
      why: "不需要卧推凳的胸推。地面替你决定下放深度。哑铃变轻时，再接一组俯卧撑。",
      how: "仰卧，屈膝。一只手握哑铃，上臂与身体约成45度。下放到肘部碰到地面。向上推起。另一只手放在身旁地面上。",
      dose: "2至3组，每侧8至12次，然后做一组俯卧撑。",
    },
    {
      name: "半跪姿单臂过头推举",
      why: "过头推。跪姿让你没法后仰借力，肩部和躯干只能老老实实发力。",
      how: "单膝跪地，另一只脚在前。哑铃放在跪地一侧的肩上。夹紧那一侧的臀部。垂直向上推。控制着放回肩部。",
      dose: "2组，每侧6至10次。过头推举会痛就跳过。",
    },
    {
      name: "单侧提箱行走（Suitcase carry）",
      why: "重量只在一侧，躯干必须阻止你向一边倾斜。握力、体态和核心，一次练到。",
      how: "一只手提哑铃垂在身侧。站直，双肩水平。小步慢走。换手走回来。",
      dose: "每只手3至4趟，每趟20至30米，或30秒。",
    },
  ],
  enoughHeading: "怎样让一个哑铃练得足够有挑战？",
  enough: [
    "天数：刚开始每周2至3个力量训练日。用你能举8至12次的重量。当你比目标多做1至2次时，ACSM建议加重2%至10%。{2}一个固定重量的哑铃做不到，那就先加次数，再加一组，再换更难的版本。",
    "轻重量也可以有效。一项纳入21项研究的综述发现，当每组都做到力竭时，轻重量和大重量带来的肌肉增长相近。大重量带来更多最大力量。{3}所以轻哑铃能长肌肉，但在最大力量上有上限。",
    "不必硬拼到力竭。一项纳入15项研究的综述发现，做到力竭的组比提前停下的组只有微不足道的优势，而真正的瞬时肌肉力竭则没有优势。{4}在动作变形前一两次停下。",
    "慢速动作是工具，不是魔法。在8项研究中，当每组做到力竭时，每次动作从0.5秒到8秒，肌肉增长相近。{5}我们放慢下放，只是为了让轻重量更快变难。",
  ],
  sampleHeading: "一个哑铃的一周示例",
  sampleLabel: "仅为示例。不是处方。请根据你的身体、过往经历和这一周的安排调整。",
  sample: [
    "第1天（A）：热身，然后高脚杯深蹲、单臂划船、单臂地板卧推、单侧提箱行走。每个动作2至3组。",
    "第2天：快走30至40分钟。",
    "第3天（B）：热身，然后罗马尼亚硬拉、分腿蹲、半跪姿推举、划船。每个动作2至3组。",
    "第4天：休息，或轻松散步。",
    "第5天（再做A）：上次轻松的动作加一次。12次做得轻松的动作，放慢下放。",
    "第6和第7天：一天活动，一天休息。你来选。",
  ],
  coachedHeading: "想要实时指导？",
  coached: [
    "Iron Hour是实时指导的力量与体能训练。60分钟，一对一。第0分钟准备。第4分钟开始热身。第14分钟开始主项。第28分钟辅助训练。第50分钟放松。",
    "在家用你手头的器材就能练，一个哑铃也行。重量、次数和节奏每次课都会根据通话中看到的情况来定。",
    "停练后重新开始？Return：每次45分钟，每月12次，隔天进行。Lean Reset：每月20次，一对一。Open Floor是小组课。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。印地语或英语。按印度标准时间（IST）。还没想好？先来一次30分钟的咨询。这是一次交流，不是训练。预约只是保留时间。费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不是医疗建议。ACSM的筛查模式指出：如果你平时不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以不经医生许可，从低到中等强度开始，逐步增加。如果你有上述疾病之一，或有胸痛、异常气短或头晕等症状，请先获得医生许可。{7}每次训练前检查哑铃：可调节哑铃的卡扣要拧紧。清空身边的地面。出现剧痛就停下；如果有背部或肩部问题、正在怀孕或刚生产不久，请先咨询专业意见。",
};

const ja: PostCopy = {
  metaTitle: "ダンベル1つでできる最高の自宅トレーニング：7種目 | Jalan PT",
  metaDescription:
    "ダンベル1つでできる自宅トレーニングのベスト7種目。軽い重さを十分きつくする方法、回数とテンポについての研究、1週間のサンプル。",
  h1: "ダンベル1つでできる最高の自宅トレーニング：7種目と1週間のサンプル",
  dek: "ダンベル1つ。床が少し。全身をカバーする7種目。",
  updated: "2026年10月28日更新",
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
    whatsappText: "こんにちは Susmit さん、ダンベル1つの自宅トレーニングの記事を読みました。相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "ダンベル1つでできる最高の自宅トレーニング",
  },
  intro: [
    "大きな筋肉はすべて、ダンベル1つで鍛えられます。うまく使えばいいだけです。",
    "WHO は成人に、週2日以上の筋力トレーニングと、週150〜300分の中強度の活動を勧めています。{1}",
    "初心者への ACSM の助言：週2〜3日、多関節種目を先に、そして両側の種目と片側の種目の両方を。{2}",
    "片側の種目こそ、ダンベル1つの得意分野です。片側だけに負荷をかけると、同じ重さでもきつくなります。",
  ],
  listHeading: "ダンベル1つでできる自宅トレーニングのベスト7種目",
  items: [
    {
      name: "ゴブレットスクワット",
      why: "下半身の中心種目。ACSM は大筋群の多関節種目を最初に置いています。{2}",
      how: "ダンベルを縦にして胸の前で持ち、両手で上端の下を支えます。足は腰幅より少し広く。かかとの間に座るように下ります。胸は高く。足裏全体で押して立ちます。",
      dose: "8〜12回を2〜3セット。12回でも楽なら、下ろすのに3秒かけます。",
    },
    {
      name: "ルーマニアンデッドリフト（両脚、次に片脚）",
      why: "ヒップヒンジ：ハムストリング、お尻、背中が一緒に働きます。両脚が楽になったら、片脚にすると同じダンベルがまた重くなります。",
      how: "ダンベルを両手で太ももの前に。膝は軽く曲げます。お尻を後ろに引き、重さは脚の近くに、背中は長く。ハムストリングが張ったら止めます。お尻を締めて立ちます。片脚版：空いた手で壁を持ちます。",
      dose: "8〜12回を2〜3セット。片脚：左右各6〜10回。",
    },
    {
      name: "リアフットエレベーテッド・スプリットスクワット",
      why: "片脚ずつ。5週間の小規模な試験で、このスプリットスクワットだけを行った若いラグビー選手18人は、バックスクワットだけを行った選手とほぼ同じだけバックスクワットの筋力が伸びました。{6}小規模で、対象はトレーニング経験のある選手です。それでも、片脚と軽い負荷で本当の仕事ができることを示しています。",
      how: "後ろ足を背後のソファか椅子に乗せます。ダンベルは胸に。後ろの膝が床に近づくまで真下に下ります。前足で押して上がります。必要なら壁を持ちます。",
      dose: "片脚6〜10回を2〜3セット。",
    },
    {
      name: "ワンアーム・ダンベルロウ",
      why: "引く動作。押す動作とのバランスを取り、背中の上部を鍛えます。ACSM の助言に片側の種目が入っているのはこのためです。{2}",
      how: "片手と片膝を丈夫な椅子かベンチに。背中は平らに。ダンベルを腰に向かって引き、肘は体の近くに。一瞬止めます。ゆっくり下ろします。",
      dose: "左右各8〜12回を2〜3セット。",
    },
    {
      name: "ワンアーム・フロアプレス",
      why: "ベンチなしの胸のプレス。深さは床が決めてくれます。ダンベルが軽くなったら腕立て伏せと組み合わせます。",
      how: "仰向けになり膝を曲げます。片手にダンベル、上腕は体から約45度。肘が床に触れるまで下ろします。押し上げます。もう片方の手は横の床に置きます。",
      dose: "左右各8〜12回を2〜3セット、その後に腕立て伏せを1セット。",
    },
    {
      name: "ハーフニーリング・ワンアーム・オーバーヘッドプレス",
      why: "頭上へのプッシュ。膝立ちだと後ろに反ってごまかせないので、肩と体幹が仕事をします。",
      how: "片膝をつき、もう片方の足を前に。床についた膝の側の肩にダンベル。その側のお尻を締めます。真上に押し上げます。コントロールして肩まで下ろします。",
      dose: "左右各6〜10回を2セット。頭上に押すと痛む場合は省きます。",
    },
    {
      name: "スーツケースキャリー",
      why: "重さが片側だけなので、体幹が傾きを止めなければなりません。握力、姿勢、体幹を一度に。",
      how: "ダンベルを片手で体の横に持ちます。背筋を伸ばし、肩は水平に。小さな歩幅でゆっくり歩きます。手を替えて戻ります。",
      dose: "片手ずつ20〜30メートルを3〜4回、または30秒。",
    },
  ],
  enoughHeading: "ダンベル1つを十分きつくするには？",
  enough: [
    "日数：最初は週2〜3日の筋トレ。8〜12回上げられる重さ。目標を1〜2回上回ったら、ACSM は2〜10%の増量を勧めています。{2}重さが固定のダンベル1つではそれができないので、回数を増やし、次にセットを増やし、次に難しい種目にします。",
    "軽くても効きます。21件の研究のレビューでは、セットを限界まで行った場合、軽い負荷と重い負荷で筋肉の成長は同程度でした。最大筋力は重い負荷のほうが伸びました。{3}つまり軽いダンベルでも筋肉は育ちますが、最大筋力には天井があります。",
    "限界まで粘る必要はありません。15件の研究のレビューでは、限界まで行うセットの利点は手前で止めるセットに比べてごくわずかで、本当の瞬間的な筋の限界には利点がありませんでした。{4}フォームが崩れる1〜2回手前で止めます。",
    "ゆっくりの反復は道具であって、魔法ではありません。8件の研究で、セットを限界まで行った場合、1回0.5秒から8秒までの反復時間で筋肉の成長は同程度でした。{5}下ろす動作を遅くするのは、軽い重さを早くきつくするためだけです。",
  ],
  sampleHeading: "ダンベル1つの1週間のサンプル",
  sampleLabel: "あくまでサンプルです。処方ではありません。体、これまでの経験、その週の予定に合わせて調整してください。",
  sample: [
    "1日目（A）：ウォームアップ、その後ゴブレットスクワット、ワンアームロウ、ワンアームフロアプレス、スーツケースキャリー。各2〜3セット。",
    "2日目：早歩き30〜40分。",
    "3日目（B）：ウォームアップ、その後ルーマニアンデッドリフト、スプリットスクワット、ハーフニーリングプレス、ロウ。各2〜3セット。",
    "4日目：休み、または軽い散歩。",
    "5日目（もう一度A）：前回楽だった種目に1回足します。12回が楽にできた種目は下ろす動作を遅くします。",
    "6日目と7日目：1日は動く日、1日は休み。お好みで。",
  ],
  coachedHeading: "ライブで指導を受けたいですか？",
  coached: [
    "Iron Hour はライブ指導のストレングス＆コンディショニングです。60分、1対1。0分にセットアップ。4分からウォームアップ。14分にメインのリフト。28分に補助種目。50分にクールダウン。",
    "自宅で、手元の道具で行えます。ダンベル1つでも大丈夫です。重さ、回数、テンポは、通話で見た様子から毎回決めます。",
    "ブランクからの再開ですか？ Return は45分、月12回、1日おき。Lean Reset は月20回、1対1。Open Floor は少人数グループです。",
    "Google Meet、Zoom、FaceTime でライブ指導。プネーから。ヒンディー語または英語で。インド標準時（IST）。まだ迷っていますか？ まずは30分の相談から。会話であって、トレーニングではありません。予約は時間を確保するものです。料金は直接取り決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医療上の助言ではありません。ACSM のスクリーニングモデルでは、運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽〜中程度の運動を始めて徐々に増やしてよいとしています。これらの病気がある場合や、胸の痛み、いつもと違う息切れ、めまいなどの症状がある場合は、先に医師の許可を得てください。{7}毎回ダンベルを確認してください。可変式ならカラーをしっかり締めます。周りの床を片付けます。鋭い痛みを感じたら中止し、腰や肩に問題がある方、妊娠中や出産後間もない方は、先に専門家に相談してください。",
};

const gu: PostCopy = {
  metaTitle: "એક ડમ્બેલ સાથે શ્રેષ્ઠ હોમ વર્કઆઉટ: 7 કસરતો | Jalan PT",
  metaDescription:
    "એક ડમ્બેલવાળા હોમ વર્કઆઉટ માટે 7 શ્રેષ્ઠ કસરતો. હળવા વજનને પૂરતું અઘરું કેવી રીતે બનાવવું, રેપ્સ અને ટેમ્પો વિશે સંશોધન શું કહે છે, અને એક સેમ્પલ અઠવાડિયું.",
  h1: "એક ડમ્બેલ સાથે શ્રેષ્ઠ હોમ વર્કઆઉટ: 7 કસરતો અને એક સેમ્પલ અઠવાડિયું",
  dek: "એક ડમ્બેલ. થોડી જમીન. સાત મૂવ જે આખા શરીરને આવરી લે છે.",
  updated: "અપડેટ: 28 ઑક્ટોબર 2026",
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
    whatsappText: "નમસ્તે સુસ્મિત, મેં એક ડમ્બેલવાળા હોમ વર્કઆઉટનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવું છે",
    skip: "સામગ્રી પર જાઓ",
    crumb: "એક ડમ્બેલ સાથે શ્રેષ્ઠ હોમ વર્કઆઉટ",
  },
  intro: [
    "દરેક મોટા સ્નાયુને ટ્રેન કરવા એક ડમ્બેલ પૂરતું છે. બસ તેનો સાચો ઉપયોગ કરવાનો છે.",
    "WHO પુખ્ત વયના લોકોને અઠવાડિયામાં 2 કે વધુ દિવસ સ્નાયુ મજબૂત કરતી કસરત અને 150 થી 300 મિનિટ મધ્યમ પ્રવૃત્તિ કરવાનું કહે છે.{1}",
    "શરૂઆત કરનારાઓ માટે ACSM ની સલાહ: અઠવાડિયામાં 2 થી 3 દિવસ, પહેલાં મલ્ટી-જોઇન્ટ મૂવ, અને બંને બાજુવાળી તથા એક બાજુવાળી, બંને પ્રકારની કસરતો.{2}",
    "એક બાજુવાળું કામ એ જ એક ડમ્બેલની તાકાત છે. એક બાજુ લોડ આપો, અને એ જ વજન તમારી પાસેથી વધુ માગે છે.",
  ],
  listHeading: "એક ડમ્બેલવાળા હોમ વર્કઆઉટ માટે 7 શ્રેષ્ઠ કસરતો",
  items: [
    {
      name: "ગોબ્લેટ સ્ક્વૉટ",
      why: "નીચેના શરીરની મુખ્ય લિફ્ટ. ACSM મોટા સ્નાયુઓની, મલ્ટી-જોઇન્ટ કસરતોને પહેલાં રાખે છે.{2}",
      how: "ડમ્બેલને ઊભું કરીને છાતી પાસે પકડો, બંને હાથ ઉપરના છેડા નીચે. પગ હિપથી થોડા પહોળા. એડીઓની વચ્ચે નીચે બેસો. છાતી ઊંચી. આખા પગથી દબાવીને ઊભા થાઓ.",
      dose: "8 થી 12 ના 2 થી 3 સેટ. 12 પર સહેલું લાગે? નીચે જવામાં 3 સેકન્ડ લો.",
    },
    {
      name: "રોમેનિયન ડેડલિફ્ટ, બે પગે પછી એક પગે",
      why: "હિન્જ: હેમસ્ટ્રિંગ, ગ્લૂટ્સ અને પીઠ સાથે કામ કરે છે. બે પગવાળું સહેલું થઈ જાય, ત્યારે એક પગવાળું એ જ ડમ્બેલને ફરી ભારે બનાવી દે છે.",
      how: "ડમ્બેલ બંને હાથમાં જાંઘ સામે. ઘૂંટણ ઢીલા. હિપ પાછળ ધકેલો, વજન પગની પાસે, પીઠ લાંબી. હેમસ્ટ્રિંગ ખેંચાય ત્યાં અટકો. ગ્લૂટ્સ કસીને ઊભા થાઓ. એક પગવાળામાં: ખાલી હાથથી દીવાલ પકડો.",
      dose: "8 થી 12 ના 2 થી 3 સેટ. એક પગે: દરેક બાજુ 6 થી 10.",
    },
    {
      name: "રિયર-ફૂટ-એલિવેટેડ સ્પ્લિટ સ્ક્વૉટ",
      why: "એક વખતે એક પગ. 5 અઠવાડિયાના એક નાના ટ્રાયલમાં, 18 યુવાન રગ્બી ખેલાડીઓએ માત્ર આ સ્પ્લિટ સ્ક્વૉટ કર્યો, અને તેમની બૅક-સ્ક્વૉટ સ્ટ્રેન્થ લગભગ એટલી જ વધી જેટલી માત્ર બૅક સ્ક્વૉટ કરનારાઓની.{6} નાનો અભ્યાસ, ટ્રેન્ડ ખેલાડીઓ. છતાં, તે બતાવે છે કે એક પગ અને હળવું વજન સાચું કામ કરી શકે છે.",
      how: "પાછળનો પગ પાછળ રાખેલા સોફા કે ખુરશી પર. ડમ્બેલ છાતી પર. પાછળનો ઘૂંટણ જમીનની નજીક આવે ત્યાં સુધી સીધા નીચે જાઓ. આગળના પગથી ઉપર ધકેલો. જરૂર હોય તો દીવાલ પકડો.",
      dose: "દરેક પગ 6 થી 10 ના 2 થી 3 સેટ.",
    },
    {
      name: "વન-આર્મ ડમ્બેલ રો",
      why: "પુલ. તે પુશિંગને બેલેન્સ કરે છે અને ઉપરની પીઠ બનાવે છે. એટલે જ ACSM ની સલાહમાં એક બાજુવાળી કસરતો પણ છે.{2}",
      how: "એક હાથ અને એક ઘૂંટણ મજબૂત ખુરશી કે બેન્ચ પર. પીઠ સપાટ. ડમ્બેલને હિપ તરફ ખેંચો, કોણી નજીક. અટકો. ધીમેથી નીચે લાવો.",
      dose: "દરેક બાજુ 8 થી 12 ના 2 થી 3 સેટ.",
    },
    {
      name: "વન-આર્મ ફ્લોર પ્રેસ",
      why: "બેન્ચ વગરનો ચેસ્ટ પ્રેસ. ઊંડાઈ જમીન નક્કી કરે છે. ડમ્બેલ હળવું લાગવા માંડે ત્યારે તેની સાથે પુશ-અપ જોડો.",
      how: "પીઠ પર સૂઈ જાઓ, ઘૂંટણ વાળેલા. એક હાથમાં ડમ્બેલ, બાવડું શરીરથી લગભગ 45 ડિગ્રી પર. કોણી જમીનને અડે ત્યાં સુધી નીચે લાવો. ઉપર પ્રેસ કરો. બીજો હાથ બાજુમાં જમીન પર રાખો.",
      dose: "દરેક બાજુ 8 થી 12 ના 2 થી 3 સેટ, પછી પુશ-અપનો એક સેટ.",
    },
    {
      name: "હાફ-નીલિંગ વન-આર્મ ઓવરહેડ પ્રેસ",
      why: "માથા ઉપર પુશ. ઘૂંટણ પર રહેવાથી તમે પાછળ ઝૂકીને રેપમાં ચીટિંગ નથી કરી શકતા, એટલે કામ ખભો અને ધડ કરે છે.",
      how: "એક ઘૂંટણ પર બેસો, બીજો પગ આગળ. નીચેના ઘૂંટણની બાજુ ડમ્બેલ ખભા પર. એ બાજુનો ગ્લૂટ કસો. સીધું ઉપર પ્રેસ કરો. કંટ્રોલથી ખભા સુધી પાછું લાવો.",
      dose: "દરેક બાજુ 6 થી 10 ના 2 સેટ. માથા ઉપર પ્રેસ કરવામાં દુખાવો થાય તો છોડી દો.",
    },
    {
      name: "સૂટકેસ કૅરી",
      why: "વજન એક બાજુ હોય છે, એટલે ધડે તમને ઝૂકતા રોકવા પડે છે. ગ્રિપ, પોસ્ચર અને કોર, એક જ વૉકમાં.",
      how: "ડમ્બેલ એક હાથમાં બાજુમાં. સીધા ઊભા રહો, ખભા સરખા. નાના પગલે ધીમે ચાલો. હાથ બદલો અને પાછા આવો.",
      dose: "દરેક હાથથી 20 થી 30 મીટરની 3 થી 4 વૉક, અથવા 30 સેકન્ડ.",
    },
  ],
  enoughHeading: "એક ડમ્બેલને પૂરતું અઘરું કેવી રીતે બનાવવું?",
  enough: [
    "દિવસ: શરૂઆતમાં અઠવાડિયામાં 2 થી 3 સ્ટ્રેન્થ દિવસ. એવું વજન જે તમે 8 થી 12 વાર ઉપાડી શકો. ટાર્ગેટ કરતાં 1 થી 2 રેપ વધુ કરો ત્યારે ACSM 2 થી 10% વજન વધારવાનું કહે છે.{2} એક ફિક્સ્ડ ડમ્બેલમાં એ શક્ય નથી, એટલે પહેલાં રેપ્સ વધારો, પછી એક સેટ, પછી અઘરું વર્ઝન.",
    "હળવું વજન કામ કરી શકે છે. 21 અભ્યાસોના એક રિવ્યૂમાં, જ્યારે સેટ ફેલ્યોર સુધી કરાયા, ત્યારે હળવા અને ભારે વજનથી સ્નાયુ વૃદ્ધિ લગભગ સરખી રહી. ભારે વજનથી મહત્તમ સ્ટ્રેન્થ વધુ બની.{3} એટલે હળવું ડમ્બેલ સ્નાયુ બનાવે છે, પણ ટોચની સ્ટ્રેન્થ માટે તેની મર્યાદા છે.",
    "ફેલ્યોર સુધી ઘસડાવાની જરૂર નથી. 15 અભ્યાસોના એક રિવ્યૂમાં ફેલ્યોર સુધીના સેટનો ફાયદો, વહેલા અટકતા સેટની સરખામણીમાં, બહુ નજીવો હતો, અને સાચા મોમેન્ટરી ફેલ્યોરનો કોઈ ફાયદો નહોતો.{4} ફૉર્મ તૂટે તેના એક-બે રેપ પહેલાં અટકો.",
    "ધીમા રેપ્સ એક સાધન છે, જાદુ નહીં. 8 અભ્યાસોમાં, અડધી સેકન્ડથી 8 સેકન્ડ સુધીના રેપ સમયથી સ્નાયુ વૃદ્ધિ લગભગ સરખી રહી, જ્યારે સેટ ફેલ્યોર સુધી કરાયા.{5} અમે નીચે જવાનું ફક્ત એટલે ધીમું કરીએ છીએ કે હળવું વજન વહેલું અઘરું લાગે.",
  ],
  sampleHeading: "એક ડમ્બેલવાળું સેમ્પલ અઠવાડિયું",
  sampleLabel: "માત્ર સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર, તમારા ઇતિહાસ અને તમારા અઠવાડિયા મુજબ બદલો.",
  sample: [
    "દિવસ 1 (A): વૉર્મ-અપ, પછી ગોબ્લેટ સ્ક્વૉટ, વન-આર્મ રો, વન-આર્મ ફ્લોર પ્રેસ, સૂટકેસ કૅરી. દરેકના 2 થી 3 સેટ.",
    "દિવસ 2: 30 થી 40 મિનિટ ઝડપી ચાલવું.",
    "દિવસ 3 (B): વૉર્મ-અપ, પછી રોમેનિયન ડેડલિફ્ટ, સ્પ્લિટ સ્ક્વૉટ, હાફ-નીલિંગ પ્રેસ, રો. દરેકના 2 થી 3 સેટ.",
    "દિવસ 4: આરામ, અથવા હળવી ચાલ.",
    "દિવસ 5 (ફરી A): જ્યાં છેલ્લું સેશન સહેલું લાગ્યું ત્યાં એક રેપ ઉમેરો. જ્યાં 12 રેપ સહેલાઈથી થયા ત્યાં નીચે જવાનું ધીમું કરો.",
    "દિવસ 6 અને 7: એક એક્ટિવ દિવસ, એક આરામનો દિવસ. તમારી મરજી.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Iron Hour લાઇવ કોચ કરાતી સ્ટ્રેન્થ અને કન્ડિશનિંગ છે. 60 મિનિટ, 1:1. મિનિટ 0 પર સેટ-અપ. મિનિટ 4 થી વૉર્મ-અપ. મુખ્ય લિફ્ટ મિનિટ 14 પર શરૂ થાય છે. મિનિટ 28 પર એક્સેસરીઝ. મિનિટ 50 પર કૂલ-ડાઉન.",
    "તે ઘરે તમારી પાસેના સાધનોથી ચાલે છે, એક ડમ્બેલ પણ ચાલશે. વજન, રેપ્સ અને ટેમ્પો દરેક સેશનમાં, કૉલ પર જે દેખાય તે મુજબ નક્કી થાય છે.",
    "બ્રેક પછી પાછા આવો છો? Return: 45 મિનિટ, મહિને 12 સેશન, એકાંતરે દિવસે. Lean Reset: મહિને 20 સેશન, 1:1. Open Floor નાનું ગ્રુપ છે.",
    "Google Meet, Zoom કે FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર. હજુ નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. તે વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગથી એક સમય રોકાય છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM ના સ્ક્રીનિંગ મોડલ મુજબ: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણ નથી અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, અથવા છાતીમાં દુખાવો, અસામાન્ય હાંફ કે ચક્કર જેવા લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{7} દરેક સેશન પહેલાં ડમ્બેલ તપાસો: એડજસ્ટેબલ ડમ્બેલના કૉલર કસેલા હોય. આસપાસની જમીન ખાલી રાખો. તીવ્ર દુખાવો થાય તો રોકાઈ જાઓ, અને પીઠ કે ખભાની કોઈ સમસ્યા હોય, ગર્ભાવસ્થામાં હો કે તાજેતરમાં બાળક થયું હોય તો પહેલાં સલાહ લો.",
};

export const oneDumbbellPost: BlogPost = {
  slug: DB_SLUG,
  published: DB_PUBLISHED,
  modified: DB_MODIFIED,
  about: "Home workouts with one dumbbell",
  sources: DB_SOURCES,
  copy: { en, ar, hi, es, zh, ja, gu },
  programLink: { href: "/online-strength-and-conditioning-coach", label: "How Iron Hour works: online strength and conditioning, coached live" },
};
