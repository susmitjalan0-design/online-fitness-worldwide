/**
 * Blog post: "Best strength exercises for runners".
 * Citations in copy are written as {n} and point at RUNNERS_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (title, journal, year,
 * volume/pages and finding checked against the Europe PMC record and abstract,
 * and each DOI checked as registered at doi.org, on 30 Oct 2026). No client
 * results, no quotes, no prices. Small and observational studies are labelled
 * as such in the copy, and a trial that found no effect is reported. Translations
 * were drafted for this batch and need a native-speaker review before launch
 * (see CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const RUNNERS_SLUG = "best-strength-exercises-for-runners";
export const RUNNERS_PUBLISHED = "2026-10-30";
export const RUNNERS_MODIFIED = "2026-10-30";

export const RUNNERS_SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "American College of Sports Medicine. Position stand: Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
    url: "https://doi.org/10.1249/MSS.0b013e3181915670",
  },
  {
    cite: "Blagrove RC, Howatson G, Hayes PR. Effects of strength training on the physiological determinants of middle- and long-distance running performance: a systematic review. Sports Med. 2018;48(5):1117–1149.",
    url: "https://doi.org/10.1007/s40279-017-0835-7",
  },
  {
    cite: "Balsalobre-Fernández C, Santos-Concejero J, Grivas GV. Effects of strength training on running economy in highly trained runners: a systematic review with meta-analysis of controlled trials. J Strength Cond Res. 2016;30(8):2361–2368.",
    url: "https://doi.org/10.1519/JSC.0000000000001316",
  },
  {
    cite: "Støren Ø, Helgerud J, Støa EM, Hoff J. Maximal strength training improves running economy in distance runners. Med Sci Sports Exerc. 2008;40(6):1087–1092.",
    url: "https://doi.org/10.1249/MSS.0b013e318168da2f",
  },
  {
    cite: "Beattie K, Carson BP, Lyons M, Rossiter A, Kenny IC. The effect of strength training on performance indicators in distance runners. J Strength Cond Res. 2017;31(1):9–23.",
    url: "https://doi.org/10.1519/JSC.0000000000001464",
  },
  {
    cite: "Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. Br J Sports Med. 2014;48(11):871–877.",
    url: "https://doi.org/10.1136/bjsports-2013-092538",
  },
  {
    cite: "Toresdahl BG, McElheny K, Metzl J, Ammerman B, Chang B, Kinderknecht J. A randomized study of a strength training program to prevent injuries in runners of the New York City Marathon. Sports Health. 2020;12(1):74–79.",
    url: "https://doi.org/10.1177/1941738119877180",
  },
  {
    cite: "Toresdahl BG, De Mille P, Egbert J, Geisel P, Metzl JD, Fontana MA. Strength and flexibility self-assessment and subsequent training injuries among runners of the New York City Marathon. Clin J Sport Med. 2025;35(4):471–477.",
    url: "https://doi.org/10.1097/JSM.0000000000001370",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Strength Exercises for Runners: 7 Moves and a Sample Week | Jalan PT",
  metaDescription:
    "The 7 best strength exercises for runners, from squats to calf raises and hops. What the research says on running economy and injuries, how often to lift, and a sample week.",
  h1: "Best strength exercises for runners: 7 moves and a sample week",
  dek: "Running builds the engine. Lifting builds the frame around it. Two short sessions a week, next to your runs.",
  updated: "Updated 30 October 2026",
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
    whatsappText: "Hi Susmit, I read the article on strength exercises for runners and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best strength exercises for runners",
  },
  intro: [
    "Most runners just run. Then a calf, a knee or a hip starts to complain.",
    "WHO asks adults for muscle-strengthening work on all major muscle groups, 2 or more days a week, on top of aerobic activity.{1} Running covers the aerobic part. Not the rest.",
    "Lifting helps the running too. A review of 24 studies in middle- and long-distance runners found strength training generally improved running economy (how much oxygen a given pace costs) by 2 to 8%. Time trials from 1.5 to 10 km tended to improve. Not in every study.{3}",
    "You need a floor, something heavy, and 30 to 40 minutes, twice a week.",
  ],
  listHeading: "The 7 best strength exercises for runners",
  items: [
    {
      name: "Squat, goblet then barbell",
      why: "The base lift. In a small trial, 17 well-trained runners added heavy half-squats, 4 sets of 4, three times a week, for 8 weeks. The squat group got 5% more economical and lasted 21% longer at their maximal aerobic speed. Their maximal oxygen uptake and body weight didn't change.{5} Small study. Heavy didn't hurt their running.",
      how: "Feet about shoulder-width. Weight held at the chest, or a bar on the upper back. Sit down between your heels. Knees follow the toes. Stand up hard.",
      dose: "Learn it with 3 sets of 8 to 12.{2} Once the form holds, go heavier: 3 to 4 sets of 4 to 6.",
    },
    {
      name: "Romanian deadlift",
      why: "The hinge. Hamstrings and glutes push you forward and up hills.",
      how: "Hold the weight in front of your thighs. Soft knees. Push the hips back and let the weight slide down your thighs. Back long. Stop when the hamstrings pull. Stand by squeezing the glutes.",
      dose: "3 sets of 6 to 10.",
    },
    {
      name: "Rear-foot-elevated split squat",
      why: "Running happens one leg at a time. So does this. ACSM's advice includes one-sided exercises next to two-sided ones.{2}",
      how: "Back foot on a bench or a sturdy chair behind you. Lower straight down until the back knee is near the floor. Push up through the front foot. Hold the wall if you need to.",
      dose: "2 to 3 sets of 6 to 10 each leg. Hold weights once bodyweight is easy.",
    },
    {
      name: "Single-leg calf raise, straight and bent knee",
      why: "Every stride lands through the calf and the Achilles. Straight knee works the big calf muscle. Bent knee puts more of the work on the deeper one, the soleus.",
      how: "Ball of one foot on a step, heel off the edge. A hand on the rail or the wall. Rise as high as you can. Pause. Lower slowly, below the step. Then do the same with the knee bent.",
      dose: "2 to 3 sets of 10 to 15 of each, each leg. Easy at 15? Hold a dumbbell or wear a loaded backpack.",
    },
    {
      name: "Single-leg glute bridge",
      why: "The hips. In 867 runners training for the New York City Marathon, those who said they could hold a single-leg glute bridge for 20 seconds or more on their weaker side had fewer overuse injuries than those who managed under 10 seconds.{9} That study was observational, with self-reported tests. It shows a link, not a cause.",
      how: "Lie on your back, one foot flat, the other leg straight. Drive through the heel. Lift the hips until knee, hip and shoulder line up. Keep the hips level. Hold, or do reps.",
      dose: "2 to 3 sets of 8 to 12 each side, or holds of 20 to 30 seconds. Test the weaker side first.",
    },
    {
      name: "Side plank",
      why: "Your trunk, from the side, and the hip muscles that stop the pelvis dropping when you stand on one leg. Which is every step.",
      how: "Lie on your side, elbow under the shoulder. Lift the hips so the body is one straight line. Knees bent to start. Legs straight when that's easy. Breathe.",
      dose: "2 to 3 holds of 20 to 40 seconds each side.",
    },
    {
      name: "Pogo hops and skips",
      why: "Running is a string of small bounces. Short, springy jumps train that. A meta-analysis of 5 studies in 93 highly trained middle- and long-distance runners looked at programs of 2 to 4 lower-body lifts, plus up to 200 jumps and 5 to 10 short sprints, 2 to 3 times a week for 8 to 12 weeks. The effect on running economy was large.{4}",
      how: "Stand tall. Bounce on the balls of your feet. Ankles stiff, knees soft, landings quiet. Small and quick. Then skip, driving one knee up at a time, for 20 metres.",
      dose: "3 to 4 sets of 10 to 20 contacts. Start low and few. Leave them out if you have a shin, foot or Achilles problem right now.",
    },
  ],
  enoughHeading: "How often, how heavy, and will it slow me down?",
  enough: [
    "Two or three strength sessions a week, next to your running. That's what the review authors suggest.{3} Two is plenty to start.",
    "Make it harder over time. ACSM's starting point is a load you can lift 8 to 12 times. When you beat the target by 1 to 2 reps, add 2 to 10%.{2} The squat trial went heavier: sets of 4.{5} Get there over weeks, not in your first session.",
    "You won't bulk up. In the review, strength training didn't harm body composition.{3} In a 40-week trial in 20 competitive distance runners, the lifting group got stronger and more economical, with no change in body mass or lean mass.{6}",
    "Injuries: promising, not promised. A review of 25 trials across many sports (26,610 people) found strength training cut sports injuries to less than a third. Stretching showed no effect.{7} Those were not all runners.",
    "And one trial in runners found nothing. 720 first-time New York City marathoners did, or didn't, do a self-guided 10-minute strength routine three times a week. Injuries that stopped people finishing were about the same: 7.1% and 7.3%.{8} A short routine done alone was not enough there. Load, progress and doing the work still matter.",
  ],
  sampleHeading: "A sample running week with strength",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body, your history and your running.",
  sample: [
    "Monday: rest, or an easy walk.",
    "Tuesday: quality run (intervals or tempo). Strength A later the same day: warm-up, squat, Romanian deadlift, single-leg calf raise, side plank.",
    "Wednesday: easy run.",
    "Thursday: easy run, or rest.",
    "Friday: quality run, then Strength B: warm-up, pogo hops and skips, split squat, single-leg glute bridge, bent-knee calf raise.",
    "Saturday: rest.",
    "Sunday: long run, easy pace.",
    "Lift on hard days, so easy days stay easy. Race week: one short, lighter session, or none.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "Iron Hour is strength and conditioning, coached live. 60 minutes, 1:1. Set-up at minute 0: camera at the side, whole body in frame. Warm-up from minute 4. The primary lift starts at minute 14. Accessories at 28: calves, hips, trunk. Cool-down at 50.",
    "We plan the lifts around your running week. Not the other way round.",
    "Coming back after time off? Return is 45 minutes, 12 alternate-day sessions a month. Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST. Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{10} Don't add a lot of lifting and a lot of running in the same weeks. Build one, then the other. Pain in a shin, foot or hip that gets worse as you run needs checking: in the marathon trial, bone stress injuries were among the most common reasons people didn't finish.{8} Stop if you feel sharp pain, and get advice first if you have a joint problem, are pregnant or have recently given birth.",
};

const ar: PostCopy = {
  metaTitle: "أفضل تمارين القوة للعدّائين: 7 تمارين ونموذج لأسبوع | Jalan PT",
  metaDescription:
    "أفضل 7 تمارين قوة للعدّائين، من القرفصاء إلى رفع السمانة والقفزات. ماذا تقول الأبحاث عن اقتصاد الجري والإصابات، وكم مرة ترفع الأوزان، مع نموذج لأسبوع.",
  h1: "أفضل تمارين القوة للعدّائين: 7 تمارين ونموذج لأسبوع",
  dek: "الجري يبني المحرّك. ورفع الأوزان يبني الهيكل حوله. جلستان قصيرتان في الأسبوع، بجانب الجري.",
  updated: "تم التحديث في 30 أكتوبر 2026",
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
    whatsappText: "مرحباً سوسميت، قرأت مقال تمارين القوة للعدّائين وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل تمارين القوة للعدّائين",
  },
  intro: [
    "معظم العدّائين يجرون فقط. ثم تبدأ السمانة أو الركبة أو الورك بالشكوى.",
    "توصي منظمة الصحة العالمية البالغين بتمارين تقوية العضلات لكل المجموعات العضلية الكبرى، يومين أو أكثر في الأسبوع، إضافة إلى النشاط الهوائي.{1} الجري يغطي الجزء الهوائي. لا الباقي.",
    "ورفع الأوزان يفيد الجري نفسه. وجدت مراجعة لـ24 دراسة على عدّائي المسافات المتوسطة والطويلة أن تمارين القوة حسّنت عموماً اقتصاد الجري (كمية الأكسجين التي تكلّفها سرعة معيّنة) بنسبة 2 إلى 8%. ومالت سباقات التوقيت من 1.5 إلى 10 كم إلى التحسّن. ليس في كل الدراسات.{3}",
    "تحتاج أرضية، وشيئاً ثقيلاً، ومن 30 إلى 40 دقيقة، مرتين في الأسبوع.",
  ],
  listHeading: "أفضل 7 تمارين قوة للعدّائين",
  items: [
    {
      name: "القرفصاء، بالدمبل أمام الصدر ثم بالبار",
      why: "التمرين الأساسي. في تجربة صغيرة، أضاف 17 عدّاءً متمرّساً قرفصاء نصفية ثقيلة، 4 مجموعات من 4، ثلاث مرات في الأسبوع، لمدة 8 أسابيع. أصبحت مجموعة القرفصاء أكثر اقتصاداً بنسبة 5% وصمدت أطول بنسبة 21% عند سرعتها الهوائية القصوى. ولم يتغيّر الحد الأقصى لاستهلاك الأكسجين ولا وزن الجسم.{5} دراسة صغيرة. والثقل لم يضرّ جريهم.",
      how: "القدمان بعرض الكتفين تقريباً. الوزن عند الصدر، أو البار على أعلى الظهر. اجلس بين كعبيك. الركبتان تتبعان أصابع القدمين. قف بقوة.",
      dose: "تعلّمه بـ3 مجموعات من 8 إلى 12.{2} عندما يثبت الأداء، زد الثقل: من 3 إلى 4 مجموعات من 4 إلى 6.",
    },
    {
      name: "الرفعة الرومانية",
      why: "حركة المفصل من الورك. أوتار الركبة والألوية تدفعك إلى الأمام وفي صعود التلال.",
      how: "أمسك الوزن أمام فخذيك. ركبتان لينتان. ادفع الوركين إلى الخلف ودع الوزن ينزلق على الفخذين. الظهر ممدود. توقّف عندما تشعر بشدّ أوتار الركبة. قف بشدّ الألوية.",
      dose: "3 مجموعات من 6 إلى 10.",
    },
    {
      name: "القرفصاء المنقسمة مع رفع القدم الخلفية",
      why: "الجري يحدث على ساق واحدة في كل مرة. وكذلك هذا التمرين. تشمل توصيات ACSM تمارين الجانب الواحد إلى جانب تمارين الجانبين.{2}",
      how: "ضع القدم الخلفية على مقعد أو كرسي متين خلفك. انزل مباشرة حتى تقترب الركبة الخلفية من الأرض. ادفع للأعلى عبر القدم الأمامية. استند إلى الحائط إن احتجت.",
      dose: "من 2 إلى 3 مجموعات من 6 إلى 10 لكل ساق. أمسك أوزاناً عندما يصبح وزن الجسم سهلاً.",
    },
    {
      name: "رفع السمانة على ساق واحدة، بركبة مستقيمة ومثنية",
      why: "كل خطوة تهبط عبر السمانة ووتر أخيل. الركبة المستقيمة تشغّل عضلة السمانة الكبيرة. والركبة المثنية تضع جزءاً أكبر من العمل على العضلة الأعمق، النعلية.",
      how: "مشط قدم واحدة على درجة، والكعب خارج الحافة. يد على الدرابزين أو الحائط. ارتفع أعلى ما تستطيع. توقّف لحظة. انزل ببطء إلى ما تحت الدرجة. ثم كرّر والركبة مثنية.",
      dose: "من 2 إلى 3 مجموعات من 10 إلى 15 لكل نوع، لكل ساق. سهل عند 15؟ أمسك دمبل أو البس حقيبة محمّلة.",
    },
    {
      name: "جسر الألوية على ساق واحدة",
      why: "الوركان. بين 867 عدّاءً يتدرّبون لماراثون نيويورك، من قالوا إنهم يستطيعون الثبات في جسر الألوية على ساق واحدة 20 ثانية أو أكثر على الجانب الأضعف أصيبوا بإصابات إجهاد أقل ممّن لم يتجاوزوا 10 ثوانٍ.{9} كانت تلك دراسة رصدية، والاختبارات أبلغ عنها المشاركون بأنفسهم. هي تُظهر ارتباطاً، لا سبباً.",
      how: "استلقِ على ظهرك، قدم واحدة على الأرض، والساق الأخرى ممدودة. ادفع عبر الكعب. ارفع الوركين حتى تصطف الركبة والورك والكتف. حافظ على استواء الوركين. اثبت، أو كرّر.",
      dose: "من 2 إلى 3 مجموعات من 8 إلى 12 لكل جانب، أو ثبات من 20 إلى 30 ثانية. اختبر الجانب الأضعف أولاً.",
    },
    {
      name: "اللوح الجانبي",
      why: "الجذع من الجانب، وعضلات الورك التي تمنع الحوض من الهبوط حين تقف على ساق واحدة. أي في كل خطوة.",
      how: "استلقِ على جنبك، والمرفق تحت الكتف. ارفع الوركين ليصبح الجسم خطاً مستقيماً. ابدأ بركبتين مثنيتين. ساقان ممدودتان حين يصبح ذلك سهلاً. تنفّس.",
      dose: "من 2 إلى 3 ثباتات من 20 إلى 40 ثانية لكل جانب.",
    },
    {
      name: "القفز الارتدادي والوثب",
      why: "الجري سلسلة من ارتدادات صغيرة. والقفزات القصيرة المرنة تدرّب ذلك. نظر تحليل تجميعي لـ5 دراسات على 93 عدّاء مسافات متوسطة وطويلة عالي التدريب في برامج من 2 إلى 4 تمارين للجزء السفلي، مع ما يصل إلى 200 قفزة و5 إلى 10 عدوات قصيرة، من 2 إلى 3 مرات أسبوعياً لمدة 8 إلى 12 أسبوعاً. كان الأثر على اقتصاد الجري كبيراً.{4}",
      how: "قف مستقيماً. ارتدّ على مشطي القدمين. الكاحلان ثابتان، الركبتان لينتان، الهبوط هادئ. صغير وسريع. ثم اوثب رافعاً ركبة واحدة في كل مرة، لمسافة 20 متراً.",
      dose: "من 3 إلى 4 مجموعات من 10 إلى 20 ملامسة. ابدأ منخفضاً وقليلاً. اتركها إن كانت لديك مشكلة حالية في الساق أو القدم أو وتر أخيل.",
    },
  ],
  enoughHeading: "كم مرة، وبأي ثقل، وهل سيبطئني ذلك؟",
  enough: [
    "جلستا قوة أو ثلاث في الأسبوع، بجانب الجري. هذا ما يقترحه مؤلفو المراجعة.{3} جلستان تكفيان للبداية.",
    "صعّب التمرين مع الوقت. نقطة البداية لدى ACSM حمل تستطيع رفعه من 8 إلى 12 مرة. حين تتجاوز الهدف بتكرار أو اثنين، أضف من 2 إلى 10%.{2} تجربة القرفصاء ذهبت أثقل: مجموعات من 4.{5} اصل إلى ذلك على مدى أسابيع، لا في جلستك الأولى.",
    "لن تتضخّم. في المراجعة، لم تضرّ تمارين القوة بتكوين الجسم.{3} وفي تجربة لمدة 40 أسبوعاً على 20 عدّاء مسافات منافساً، صارت مجموعة الأوزان أقوى وأكثر اقتصاداً، دون تغيّر في كتلة الجسم أو الكتلة العضلية.{6}",
    "الإصابات: واعد، لا مضمون. وجدت مراجعة لـ25 تجربة في رياضات كثيرة (26,610 شخصاً) أن تمارين القوة خفّضت الإصابات الرياضية إلى أقل من الثلث. ولم يظهر للإطالة أي أثر.{7} ولم يكن كل المشاركين عدّائين.",
    "وتجربة واحدة على العدّائين لم تجد شيئاً. 720 عدّاءً يخوضون ماراثون نيويورك لأول مرة، بعضهم أدّى روتين قوة ذاتياً مدته 10 دقائق ثلاث مرات أسبوعياً وبعضهم لا. الإصابات التي منعت إكمال السباق كانت متقاربة: 7.1% و7.3%.{8} روتين قصير يؤدّيه الشخص وحده لم يكفِ هناك. الحمل والتدرّج وأداء العمل فعلاً ما زالت مهمة.",
  ],
  sampleHeading: "نموذج لأسبوع جري مع تمارين القوة",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك وتاريخك وجريك.",
  sample: [
    "الاثنين: راحة، أو مشي خفيف.",
    "الثلاثاء: جري نوعي (فترات أو تمبو). القوة A لاحقاً في اليوم نفسه: إحماء، قرفصاء، رفعة رومانية، رفع السمانة على ساق واحدة، لوح جانبي.",
    "الأربعاء: جري سهل.",
    "الخميس: جري سهل، أو راحة.",
    "الجمعة: جري نوعي، ثم القوة B: إحماء، قفز ارتدادي ووثب، قرفصاء منقسمة، جسر الألوية على ساق واحدة، رفع السمانة بركبة مثنية.",
    "السبت: راحة.",
    "الأحد: جري طويل بوتيرة سهلة.",
    "ارفع الأوزان في الأيام الصعبة، لتبقى الأيام السهلة سهلة. أسبوع السباق: جلسة قصيرة أخف، أو لا شيء.",
  ],
  coachedHeading: "تريده بتدريب مباشر؟",
  coached: [
    "Iron Hour هو القوة والتكييف البدني بتدريب مباشر. 60 دقيقة، فردياً. التجهيز في الدقيقة 0: الكاميرا على الجانب، والجسم كله في الإطار. الإحماء من الدقيقة 4. يبدأ التمرين الرئيسي في الدقيقة 14. التمارين المساعدة عند 28: السمانة والوركان والجذع. التهدئة عند 50.",
    "نخطّط الأوزان حول أسبوع جريك. لا العكس.",
    "عائد بعد انقطاع؟ برنامج Return مدته 45 دقيقة، 12 جلسة في الشهر بالتناوب: يوم تمرين ويوم راحة. Lean Reset عشرون جلسة في الشهر، فردياً. Open Floor مجموعة صغيرة.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند. لم تقرّر بعد؟ ابدأ باستشارة مدتها 30 دقيقة. هي محادثة، لا تمرين. الحجز يثبّت موعداً فقط. والرسوم يُتّفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. وفق نموذج الفحص لدى ACSM: إذا كنت غير نشط، بلا أعراض، ولا تعاني من مرض معروف في القلب أو الأيض أو الكلى، يمكنك البدء بتمارين خفيفة إلى معتدلة دون إذن طبي والتدرّج. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{10} لا تُضف كثيراً من الأوزان وكثيراً من الجري في الأسابيع نفسها. ابنِ أحدهما، ثم الآخر. الألم في الساق أو القدم أو الورك الذي يزداد مع الجري يحتاج إلى فحص: في تجربة الماراثون، كانت إصابات الإجهاد العظمي من أكثر أسباب عدم إكمال السباق.{8} توقّف إذا شعرت بألم حاد، واطلب المشورة أولاً إن كانت لديك مشكلة في المفاصل، أو كنتِ حاملاً أو أنجبتِ مؤخراً.",
};

const hi: PostCopy = {
  metaTitle: "रनर्स के लिए सबसे अच्छी स्ट्रेंथ एक्सरसाइज़: 7 मूव और एक सैंपल हफ़्ता | Jalan PT",
  metaDescription:
    "रनर्स के लिए 7 सबसे अच्छी स्ट्रेंथ एक्सरसाइज़, स्क्वॉट से काफ़ रेज़ और हॉप्स तक। रनिंग इकॉनमी और चोटों पर रिसर्च क्या कहती है, कितनी बार वज़न उठाएँ, और एक सैंपल हफ़्ता।",
  h1: "रनर्स के लिए सबसे अच्छी स्ट्रेंथ एक्सरसाइज़: 7 मूव और एक सैंपल हफ़्ता",
  dek: "दौड़ना इंजन बनाता है। वज़न उठाना उसके चारों ओर का ढाँचा। हफ़्ते में दो छोटे सेशन, आपकी दौड़ के साथ।",
  updated: "अपडेट: 30 अक्टूबर 2026",
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
    whatsappText: "नमस्ते सुस्मित, मैंने रनर्स के लिए स्ट्रेंथ एक्सरसाइज़ का लेख पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
    skip: "सामग्री पर जाएँ",
    crumb: "रनर्स के लिए सबसे अच्छी स्ट्रेंथ एक्सरसाइज़",
  },
  intro: [
    "ज़्यादातर रनर्स बस दौड़ते हैं। फिर पिंडली, घुटना या कूल्हा शिकायत करने लगता है।",
    "WHO वयस्कों से कहता है कि एरोबिक एक्टिविटी के अलावा, हफ़्ते में 2 या ज़्यादा दिन सभी बड़े मसल ग्रुप्स के लिए मसल-स्ट्रेंथनिंग करें।{1} दौड़ना एरोबिक हिस्सा पूरा करता है। बाकी नहीं।",
    "वज़न उठाना दौड़ में भी मदद करता है। मिडिल और लॉन्ग-डिस्टेंस रनर्स पर 24 स्टडीज़ के एक रिव्यू में, स्ट्रेंथ ट्रेनिंग से आम तौर पर रनिंग इकॉनमी (किसी पेस पर कितनी ऑक्सीजन लगती है) 2 से 8% बेहतर हुई। 1.5 से 10 किमी के टाइम ट्रायल भी अक्सर बेहतर हुए। हर स्टडी में नहीं।{3}",
    "आपको चाहिए फ़र्श, कुछ भारी, और हफ़्ते में दो बार 30 से 40 मिनट।",
  ],
  listHeading: "रनर्स के लिए 7 सबसे अच्छी स्ट्रेंथ एक्सरसाइज़",
  items: [
    {
      name: "स्क्वॉट, पहले गॉब्लेट फिर बारबेल",
      why: "बुनियादी लिफ़्ट। एक छोटे ट्रायल में, 17 अच्छी तरह ट्रेन्ड रनर्स ने 8 हफ़्ते तक, हफ़्ते में तीन बार, भारी हाफ़-स्क्वॉट के 4 सेट × 4 जोड़े। स्क्वॉट ग्रुप 5% ज़्यादा इकॉनॉमिकल हुआ और अपनी मैक्सिमल एरोबिक स्पीड पर 21% ज़्यादा देर टिका। उनकी मैक्सिमल ऑक्सीजन अपटेक और वज़न नहीं बदले।{5} छोटी स्टडी। भारी वज़न ने उनकी दौड़ को नुकसान नहीं पहुँचाया।",
      how: "पैर लगभग कंधों की चौड़ाई पर। वज़न छाती पर, या बार ऊपरी पीठ पर। एड़ियों के बीच नीचे बैठें। घुटने पंजों की दिशा में। ज़ोर से खड़े हों।",
      dose: "सीखने के लिए 8 से 12 के 3 सेट।{2} फ़ॉर्म पक्का हो जाए तो भारी करें: 4 से 6 के 3 से 4 सेट।",
    },
    {
      name: "रोमानियन डेडलिफ़्ट",
      why: "हिंज मूवमेंट। हैमस्ट्रिंग और ग्लूट्स आपको आगे और चढ़ाई पर धकेलते हैं।",
      how: "वज़न जाँघों के सामने पकड़ें। घुटने हल्के मुड़े। कूल्हे पीछे धकेलें, वज़न जाँघों पर नीचे सरकने दें। पीठ लंबी। हैमस्ट्रिंग खिंचे तो रुकें। ग्लूट्स कसकर खड़े हों।",
      dose: "6 से 10 के 3 सेट।",
    },
    {
      name: "रियर-फ़ुट-एलिवेटेड स्प्लिट स्क्वॉट",
      why: "दौड़ एक बार में एक पैर पर होती है। यह भी। ACSM की सलाह में दोनों तरफ़ की एक्सरसाइज़ के साथ एक-तरफ़ा एक्सरसाइज़ भी शामिल हैं।{2}",
      how: "पिछला पैर पीछे किसी बेंच या मज़बूत कुर्सी पर। सीधे नीचे जाएँ जब तक पिछला घुटना फ़र्श के पास न आ जाए। आगे वाले पैर से ऊपर धकेलें। ज़रूरत हो तो दीवार पकड़ें।",
      dose: "हर पैर 6 से 10 के 2 से 3 सेट। बॉडीवेट आसान लगे तो वज़न पकड़ें।",
    },
    {
      name: "सिंगल-लेग काफ़ रेज़, सीधा और मुड़ा घुटना",
      why: "हर कदम पिंडली और अकिलीज़ से होकर ज़मीन पर पड़ता है। सीधा घुटना पिंडली की बड़ी मसल पर काम करता है। मुड़ा घुटना ज़्यादा काम अंदर की मसल, सोलियस, पर डालता है।",
      how: "एक पैर का पंजा सीढ़ी पर, एड़ी किनारे से बाहर। एक हाथ रेलिंग या दीवार पर। जितना ऊपर जा सकें जाएँ। रुकें। धीरे-धीरे सीढ़ी से नीचे तक उतरें। फिर घुटना मोड़कर यही करें।",
      dose: "हर पैर, दोनों तरह के 10 से 15 के 2 से 3 सेट। 15 आसान? डम्बल पकड़ें या भरा बैकपैक पहनें।",
    },
    {
      name: "सिंगल-लेग ग्लूट ब्रिज",
      why: "कूल्हे। न्यूयॉर्क सिटी मैराथन की तैयारी कर रहे 867 रनर्स में, जिन्होंने कहा कि वे कमज़ोर तरफ़ सिंगल-लेग ग्लूट ब्रिज 20 सेकंड या ज़्यादा होल्ड कर सकते हैं, उन्हें 10 सेकंड से कम वालों की तुलना में कम ओवरयूज़ चोटें लगीं।{9} यह ऑब्ज़र्वेशनल स्टडी थी, और टेस्ट लोगों ने खुद रिपोर्ट किए। यह एक संबंध दिखाती है, कारण नहीं।",
      how: "पीठ के बल लेटें, एक पैर ज़मीन पर, दूसरा पैर सीधा। एड़ी से धकेलें। कूल्हे तब तक उठाएँ जब तक घुटना, कूल्हा और कंधा एक लाइन में न आ जाएँ। कूल्हे बराबर रखें। होल्ड करें, या रेप्स करें।",
      dose: "हर तरफ़ 8 से 12 के 2 से 3 सेट, या 20 से 30 सेकंड के होल्ड। पहले कमज़ोर तरफ़ टेस्ट करें।",
    },
    {
      name: "साइड प्लैंक",
      why: "धड़, बगल से, और कूल्हे की वे मसल्स जो एक पैर पर खड़े होने पर पेल्विस को गिरने से रोकती हैं। यानी हर कदम पर।",
      how: "करवट लेकर लेटें, कोहनी कंधे के नीचे। कूल्हे उठाएँ ताकि शरीर एक सीधी लाइन में हो। शुरुआत में घुटने मुड़े। आसान लगे तो पैर सीधे। साँस लेते रहें।",
      dose: "हर तरफ़ 20 से 40 सेकंड के 2 से 3 होल्ड।",
    },
    {
      name: "पोगो हॉप्स और स्किप्स",
      why: "दौड़ छोटे-छोटे उछालों की एक कड़ी है। छोटी, स्प्रिंग जैसी जंप्स यही ट्रेन करती हैं। 93 हाई-लेवल मिडिल और लॉन्ग-डिस्टेंस रनर्स पर 5 स्टडीज़ के एक मेटा-एनालिसिस में ऐसे प्रोग्राम देखे गए: निचले शरीर की 2 से 4 लिफ़्ट, 200 तक जंप्स और 5 से 10 छोटे स्प्रिंट, हफ़्ते में 2 से 3 बार, 8 से 12 हफ़्ते। रनिंग इकॉनमी पर असर बड़ा था।{4}",
      how: "सीधे खड़े हों। पंजों पर उछलें। टखने सख़्त, घुटने हल्के, लैंडिंग शांत। छोटा और तेज़। फिर स्किप करें, एक बार में एक घुटना ऊपर, 20 मीटर तक।",
      dose: "10 से 20 कॉन्टैक्ट के 3 से 4 सेट। नीचा और कम से शुरू करें। अभी पिंडली, पैर या अकिलीज़ में तकलीफ़ है तो इन्हें छोड़ दें।",
    },
  ],
  enoughHeading: "कितनी बार, कितना भारी, और क्या इससे मैं धीमा हो जाऊँगा?",
  enough: [
    "हफ़्ते में दो या तीन स्ट्रेंथ सेशन, आपकी दौड़ के साथ। रिव्यू के लेखक यही सुझाते हैं।{3} शुरू करने के लिए दो काफ़ी हैं।",
    "समय के साथ मुश्किल बढ़ाएँ। ACSM की शुरुआत ऐसे वज़न से है जिसे आप 8 से 12 बार उठा सकें। जब आप टारगेट से 1 से 2 रेप ज़्यादा कर लें, 2 से 10% बढ़ाएँ।{2} स्क्वॉट ट्रायल और भारी गया: 4 के सेट।{5} वहाँ हफ़्तों में पहुँचें, पहले सेशन में नहीं।",
    "आप भारी-भरकम नहीं होंगे। रिव्यू में स्ट्रेंथ ट्रेनिंग से बॉडी कंपोज़िशन को नुकसान नहीं हुआ।{3} 20 कॉम्पिटिटिव डिस्टेंस रनर्स पर 40 हफ़्ते के एक ट्रायल में, वज़न उठाने वाला ग्रुप ज़्यादा मज़बूत और इकॉनॉमिकल हुआ, और बॉडी मास या लीन मास में कोई बदलाव नहीं आया।{6}",
    "चोटें: उम्मीद, गारंटी नहीं। कई खेलों के 25 ट्रायल्स (26,610 लोग) के एक रिव्यू में स्ट्रेंथ ट्रेनिंग ने स्पोर्ट्स इंजरी को एक-तिहाई से भी कम कर दिया। स्ट्रेचिंग का कोई असर नहीं दिखा।{7} वे सभी रनर्स नहीं थे।",
    "और रनर्स पर एक ट्रायल में कुछ नहीं मिला। न्यूयॉर्क सिटी मैराथन पहली बार दौड़ने वाले 720 लोगों में से कुछ ने हफ़्ते में तीन बार 10 मिनट का खुद से किया जाने वाला स्ट्रेंथ रूटीन किया, कुछ ने नहीं। रेस पूरी न कर पाने वाली चोटें लगभग बराबर थीं: 7.1% और 7.3%।{8} वहाँ अकेले किया गया छोटा रूटीन काफ़ी नहीं था। वज़न, प्रोग्रेस और सच में काम करना अब भी मायने रखता है।",
  ],
  sampleHeading: "स्ट्रेंथ के साथ रनिंग का एक सैंपल हफ़्ता",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। इसे अपने शरीर, अपने इतिहास और अपनी दौड़ के हिसाब से बदलें।",
  sample: [
    "सोमवार: आराम, या हल्की सैर।",
    "मंगलवार: क्वालिटी रन (इंटरवल या टेम्पो)। उसी दिन बाद में स्ट्रेंथ A: वार्म-अप, स्क्वॉट, रोमानियन डेडलिफ़्ट, सिंगल-लेग काफ़ रेज़, साइड प्लैंक।",
    "बुधवार: आसान दौड़।",
    "गुरुवार: आसान दौड़, या आराम।",
    "शुक्रवार: क्वालिटी रन, फिर स्ट्रेंथ B: वार्म-अप, पोगो हॉप्स और स्किप्स, स्प्लिट स्क्वॉट, सिंगल-लेग ग्लूट ब्रिज, मुड़े घुटने वाला काफ़ रेज़।",
    "शनिवार: आराम।",
    "रविवार: लंबी दौड़, आसान पेस।",
    "मुश्किल दिनों पर वज़न उठाएँ, ताकि आसान दिन आसान रहें। रेस वाले हफ़्ते: एक छोटा, हल्का सेशन, या कुछ नहीं।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "Iron Hour स्ट्रेंथ और कंडीशनिंग है, लाइव कोचिंग के साथ। 60 मिनट, 1:1। मिनट 0 पर सेट-अप: कैमरा बगल में, पूरा शरीर फ़्रेम में। मिनट 4 से वार्म-अप। मिनट 14 पर मुख्य लिफ़्ट। 28 पर एक्सेसरीज़: पिंडलियाँ, कूल्हे, धड़। 50 पर कूल-डाउन।",
    "हम लिफ़्ट्स को आपके रनिंग हफ़्ते के हिसाब से प्लान करते हैं। उल्टा नहीं।",
    "ब्रेक के बाद लौट रहे हैं? Return 45 मिनट का है, महीने में 12 सेशन, एक दिन छोड़कर। Lean Reset महीने में 20 सेशन, 1:1। Open Floor एक छोटा ग्रुप है।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर। अभी तय नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग सिर्फ़ समय रोकती है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, मेडिकल सलाह नहीं। ACSM का स्क्रीनिंग मॉडल कहता है: अगर आप इनएक्टिव हैं, कोई लक्षण नहीं हैं और दिल, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल क्लियरेंस के हल्की से मध्यम एक्सरसाइज़ शुरू करके धीरे-धीरे बढ़ा सकते हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल क्लियरेंस लें।{10} एक ही हफ़्तों में बहुत ज़्यादा वज़न और बहुत ज़्यादा दौड़ एक साथ न बढ़ाएँ। पहले एक बढ़ाएँ, फिर दूसरा। पिंडली, पैर या कूल्हे का दर्द जो दौड़ते हुए बढ़ता जाए, उसकी जाँच करवाएँ: मैराथन ट्रायल में, हड्डी की स्ट्रेस इंजरी रेस पूरी न कर पाने की सबसे आम वजहों में से थी।{8} तेज़ दर्द हो तो रुकें, और जोड़ों की कोई समस्या हो, गर्भावस्था हो या हाल ही में डिलीवरी हुई हो तो पहले सलाह लें।",
};

const es: PostCopy = {
  metaTitle: "Mejores ejercicios de fuerza para corredores: 7 y una semana | Jalan PT",
  metaDescription:
    "Los 7 mejores ejercicios de fuerza para corredores, de la sentadilla a las elevaciones de gemelo y los saltos. Qué dice la investigación sobre economía de carrera y lesiones, cada cuánto entrenar y una semana de ejemplo.",
  h1: "Mejores ejercicios de fuerza para corredores: 7 movimientos y una semana de ejemplo",
  dek: "Correr construye el motor. Levantar construye el chasis. Dos sesiones cortas a la semana, junto a tus carreras.",
  updated: "Actualizado el 30 de octubre de 2026",
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
    whatsappText: "Hola Susmit, leí el artículo sobre ejercicios de fuerza para corredores y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Mejores ejercicios de fuerza para corredores",
  },
  intro: [
    "La mayoría de los corredores solo corre. Luego se queja un gemelo, una rodilla o una cadera.",
    "La OMS pide a los adultos ejercicios de fortalecimiento muscular para todos los grandes grupos musculares, 2 o más días a la semana, además de la actividad aeróbica.{1} Correr cubre la parte aeróbica. El resto no.",
    "Levantar también ayuda a correr. Una revisión de 24 estudios en corredores de medio fondo y fondo encontró que el entrenamiento de fuerza mejoró en general la economía de carrera (cuánto oxígeno cuesta un ritmo dado) entre un 2 y un 8%. Las contrarrelojes de 1,5 a 10 km tendieron a mejorar. No en todos los estudios.{3}",
    "Necesitas suelo, algo pesado y de 30 a 40 minutos, dos veces por semana.",
  ],
  listHeading: "Los 7 mejores ejercicios de fuerza para corredores",
  items: [
    {
      name: "Sentadilla, goblet y luego con barra",
      why: "El ejercicio base. En un ensayo pequeño, 17 corredores bien entrenados añadieron media sentadilla pesada, 4 series de 4, tres veces por semana, durante 8 semanas. El grupo de sentadilla fue un 5% más económico y aguantó un 21% más a su velocidad aeróbica máxima. Su consumo máximo de oxígeno y su peso no cambiaron.{5} Estudio pequeño. El peso no perjudicó su carrera.",
      how: "Pies más o menos al ancho de hombros. Peso a la altura del pecho, o barra sobre la parte alta de la espalda. Siéntate entre los talones. Las rodillas siguen a los pies. Sube con fuerza.",
      dose: "Apréndela con 3 series de 8 a 12.{2} Cuando la técnica aguante, sube el peso: 3 o 4 series de 4 a 6.",
    },
    {
      name: "Peso muerto rumano",
      why: "La bisagra de cadera. Isquiotibiales y glúteos te empujan hacia delante y cuesta arriba.",
      how: "Sujeta el peso delante de los muslos. Rodillas suaves. Lleva la cadera atrás y deja que el peso baje por los muslos. Espalda larga. Para cuando tiren los isquiotibiales. Sube apretando los glúteos.",
      dose: "3 series de 6 a 10.",
    },
    {
      name: "Sentadilla búlgara",
      why: "Se corre con una pierna cada vez. Esto también. Las recomendaciones del ACSM incluyen ejercicios unilaterales junto a los bilaterales.{2}",
      how: "Pie de atrás sobre un banco o una silla firme. Baja en vertical hasta que la rodilla de atrás quede cerca del suelo. Sube empujando con el pie de delante. Apóyate en la pared si lo necesitas.",
      dose: "2 o 3 series de 6 a 10 por pierna. Coge peso cuando el peso corporal sea fácil.",
    },
    {
      name: "Elevación de gemelo a una pierna, rodilla recta y flexionada",
      why: "Cada zancada aterriza a través del gemelo y el tendón de Aquiles. Con la rodilla recta trabaja el gemelo grande. Con la rodilla flexionada, más trabajo pasa al músculo profundo, el sóleo.",
      how: "La parte delantera de un pie en un escalón, el talón fuera. Una mano en la barandilla o la pared. Sube todo lo que puedas. Pausa. Baja despacio, por debajo del escalón. Luego lo mismo con la rodilla flexionada.",
      dose: "2 o 3 series de 10 a 15 de cada una, por pierna. ¿Fácil a 15? Sujeta una mancuerna o ponte una mochila cargada.",
    },
    {
      name: "Puente de glúteo a una pierna",
      why: "Las caderas. En 867 corredores que preparaban el Maratón de Nueva York, quienes dijeron aguantar un puente de glúteo a una pierna 20 segundos o más con su lado más débil tuvieron menos lesiones por sobreuso que quienes no llegaban a 10 segundos.{9} Fue un estudio observacional, con pruebas autoinformadas. Muestra una relación, no una causa.",
      how: "Túmbate boca arriba, un pie apoyado y la otra pierna estirada. Empuja con el talón. Sube la cadera hasta alinear rodilla, cadera y hombro. Cadera nivelada. Mantén, o haz repeticiones.",
      dose: "2 o 3 series de 8 a 12 por lado, o mantenidas de 20 a 30 segundos. Prueba primero el lado más débil.",
    },
    {
      name: "Plancha lateral",
      why: "El tronco, de lado, y los músculos de la cadera que evitan que la pelvis caiga cuando estás sobre una pierna. Es decir, en cada paso.",
      how: "Túmbate de lado, codo bajo el hombro. Sube la cadera hasta que el cuerpo forme una línea recta. Rodillas flexionadas para empezar. Piernas estiradas cuando sea fácil. Respira.",
      dose: "2 o 3 mantenidas de 20 a 40 segundos por lado.",
    },
    {
      name: "Saltos pogo y skipping",
      why: "Correr es una cadena de pequeños rebotes. Los saltos cortos y elásticos entrenan eso. Un metaanálisis de 5 estudios con 93 corredores de medio fondo y fondo muy entrenados analizó programas de 2 a 4 ejercicios de tren inferior, más hasta 200 saltos y de 5 a 10 sprints cortos, 2 o 3 veces por semana durante 8 a 12 semanas. El efecto en la economía de carrera fue grande.{4}",
      how: "Erguido. Rebota sobre la parte delantera de los pies. Tobillos firmes, rodillas suaves, aterrizajes silenciosos. Pequeño y rápido. Luego skipping, subiendo una rodilla cada vez, durante 20 metros.",
      dose: "3 o 4 series de 10 a 20 contactos. Empieza bajo y con pocos. Déjalos fuera si ahora mismo tienes un problema en la espinilla, el pie o el Aquiles.",
    },
  ],
  enoughHeading: "¿Cada cuánto, con cuánto peso, y me hará más lento?",
  enough: [
    "Dos o tres sesiones de fuerza a la semana, junto a tus carreras. Es lo que sugieren los autores de la revisión.{3} Dos bastan para empezar.",
    "Hazlo más difícil con el tiempo. El punto de partida del ACSM es una carga que puedas levantar de 8 a 12 veces. Cuando superes el objetivo en 1 o 2 repeticiones, añade un 2 a 10%.{2} El ensayo de sentadilla fue más pesado: series de 4.{5} Llega ahí en semanas, no en tu primera sesión.",
    "No vas a ganar volumen de más. En la revisión, el entrenamiento de fuerza no perjudicó la composición corporal.{3} En un ensayo de 40 semanas con 20 corredores de fondo de competición, el grupo de fuerza ganó fuerza y economía sin cambios en la masa corporal ni en la masa magra.{6}",
    "Lesiones: prometedor, no prometido. Una revisión de 25 ensayos en muchos deportes (26.610 personas) encontró que el entrenamiento de fuerza redujo las lesiones deportivas a menos de un tercio. Los estiramientos no mostraron efecto.{7} No todos eran corredores.",
    "Y un ensayo en corredores no encontró nada. 720 debutantes del Maratón de Nueva York hicieron, o no, una rutina de fuerza autoguiada de 10 minutos tres veces por semana. Las lesiones que impidieron terminar fueron casi iguales: 7,1% y 7,3%.{8} Allí, una rutina corta hecha a solas no bastó. La carga, la progresión y hacer el trabajo siguen importando.",
  ],
  sampleHeading: "Una semana de carrera con fuerza, de ejemplo",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo, tu historial y tu forma de correr.",
  sample: [
    "Lunes: descanso, o un paseo suave.",
    "Martes: carrera de calidad (series o tempo). Fuerza A más tarde ese mismo día: calentamiento, sentadilla, peso muerto rumano, elevación de gemelo a una pierna, plancha lateral.",
    "Miércoles: carrera suave.",
    "Jueves: carrera suave, o descanso.",
    "Viernes: carrera de calidad y luego Fuerza B: calentamiento, saltos pogo y skipping, sentadilla búlgara, puente de glúteo a una pierna, elevación de gemelo con rodilla flexionada.",
    "Sábado: descanso.",
    "Domingo: tirada larga, a ritmo suave.",
    "Levanta los días duros, para que los suaves sigan siendo suaves. Semana de carrera: una sesión corta y más ligera, o ninguna.",
  ],
  coachedHeading: "¿Lo quieres con un entrenador en directo?",
  coached: [
    "Iron Hour es fuerza y acondicionamiento con entrenador en directo. 60 minutos, 1:1. Preparación en el minuto 0: cámara de lado, todo el cuerpo en el encuadre. Calentamiento desde el minuto 4. El ejercicio principal empieza en el minuto 14. Accesorios en el 28: gemelos, caderas, tronco. Vuelta a la calma en el 50.",
    "Planificamos la fuerza alrededor de tu semana de carrera. No al revés.",
    "¿Vuelves tras un parón? Return son 45 minutos, 12 sesiones al mes en días alternos. Lean Reset son 20 sesiones al mes, 1:1. Open Floor es un grupo pequeño.",
    "En directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST. ¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. Reservar solo guarda una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. El modelo de cribado del ACSM dice: si eres inactivo, no tienes síntomas ni enfermedad cardíaca, metabólica o renal conocida, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo poco a poco. Si tienes una de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, consigue antes la autorización médica.{10} No subas mucho la fuerza y mucho la carrera en las mismas semanas. Primero una, luego la otra. Un dolor en la espinilla, el pie o la cadera que empeora al correr hay que revisarlo: en el ensayo del maratón, las lesiones por estrés óseo estuvieron entre las causas más comunes de no terminar.{8} Para si notas un dolor agudo, y pide consejo antes si tienes un problema articular, estás embarazada o has dado a luz hace poco.",
};

const zh: PostCopy = {
  metaTitle: "最适合跑者的力量训练：7个动作和一周示例 | Jalan PT",
  metaDescription:
    "最适合跑者的7个力量训练动作，从深蹲到提踵和小跳。研究对跑步经济性和伤病怎么说，多久练一次，以及一周训练示例。",
  h1: "最适合跑者的力量训练：7个动作和一周示例",
  dek: "跑步练的是发动机。力量训练练的是车架。每周两次短课，排在你的跑步旁边。",
  updated: "更新于2026年10月30日",
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
    whatsappText: "你好Susmit，我读了跑者力量训练的文章，想预约一次咨询",
    skip: "跳到正文",
    crumb: "最适合跑者的力量训练",
  },
  intro: [
    "大多数跑者只跑步。然后小腿、膝盖或髋部开始抗议。",
    "世界卫生组织建议成年人在有氧活动之外，每周2天或以上进行针对所有主要肌群的肌肉强化练习。{1}跑步解决了有氧部分。其余的没有。",
    "力量训练也帮助跑步本身。一项涵盖24项中长跑运动员研究的综述发现，力量训练总体上让跑步经济性（以某一配速跑步所需的氧气量）提高了2%到8%。1.5到10公里的计时跑也多有提高。并非每项研究都如此。{3}",
    "你需要一块地面、一件重物，每周两次，每次30到40分钟。",
  ],
  listHeading: "最适合跑者的7个力量训练动作",
  items: [
    {
      name: "深蹲：先高脚杯，再杠铃",
      why: "基础动作。在一项小型试验中，17名训练有素的跑者在8周里每周三次加练大重量半蹲，4组×4次。深蹲组的跑步经济性提高了5%，在最大有氧速度下坚持的时间延长了21%。最大摄氧量和体重没有变化。{5}小型研究。大重量并没有拖累他们的跑步。",
      how: "双脚约与肩同宽。重物抱在胸前，或杠铃放在上背。坐到两脚跟之间。膝盖跟随脚尖方向。用力站起。",
      dose: "先用3组、每组8到12次学动作。{2}动作稳定后加重：3到4组，每组4到6次。",
    },
    {
      name: "罗马尼亚硬拉",
      why: "髋铰链动作。腘绳肌和臀肌推动你向前、爬坡。",
      how: "重物握在大腿前方。膝盖微屈。髋部向后推，让重物沿大腿下滑。背部拉长。腘绳肌有拉伸感时停下。夹紧臀部站起。",
      dose: "3组，每组6到10次。",
    },
    {
      name: "后脚抬高分腿蹲（保加利亚分腿蹲）",
      why: "跑步每次只用一条腿。这个动作也是。ACSM的建议在双侧动作之外也包括单侧动作。{2}",
      how: "后脚放在身后的长凳或结实的椅子上。垂直下蹲，直到后膝接近地面。用前脚发力站起。需要时扶墙。",
      dose: "每条腿2到3组，每组6到10次。自重变轻松后手持重物。",
    },
    {
      name: "单腿提踵：直膝和屈膝",
      why: "每一步都经由小腿和跟腱落地。直膝练的是小腿的大块肌肉。屈膝则把更多负荷交给更深层的比目鱼肌。",
      how: "一只脚的前脚掌站在台阶上，脚跟悬空。一只手扶栏杆或墙。尽量踮高。停一下。慢慢下放到低于台阶。然后屈膝再做一遍。",
      dose: "每条腿、每种各2到3组，每组10到15次。15次很轻松？手握哑铃或背上装了东西的背包。",
    },
    {
      name: "单腿臀桥",
      why: "髋部。在867名备战纽约马拉松的跑者中，自述较弱一侧能保持单腿臀桥20秒或以上的人，过度使用损伤比坚持不到10秒的人少。{9}那是一项观察性研究，测试由参与者自行报告。它显示的是关联，不是因果。",
      how: "仰卧，一只脚踩地，另一条腿伸直。脚跟发力。抬起髋部，直到膝、髋、肩成一线。保持髋部水平。静止保持，或做次数。",
      dose: "每侧2到3组，每组8到12次，或保持20到30秒。先测较弱的一侧。",
    },
    {
      name: "侧平板支撑",
      why: "从侧面练躯干，还有单腿站立时防止骨盆下沉的髋部肌肉。也就是每一步。",
      how: "侧卧，肘在肩正下方。抬起髋部，让身体成一条直线。开始时屈膝。轻松后改为直腿。保持呼吸。",
      dose: "每侧2到3次，每次保持20到40秒。",
    },
    {
      name: "弹跳（pogo）和垫步跳",
      why: "跑步是一连串的小弹跳。短促、有弹性的跳跃正好练这个。一项纳入5项研究、93名高水平中长跑运动员的荟萃分析，考察了这样的方案：2到4个下肢力量动作，加上最多200次跳跃和5到10次短冲刺，每周2到3次，持续8到12周。对跑步经济性的效果很大。{4}",
      how: "站直。用前脚掌弹跳。脚踝绷住，膝盖放松，落地轻。幅度小、节奏快。然后做垫步跳，每次抬起一侧膝盖，跳20米。",
      dose: "3到4组，每组10到20次触地。从低、少开始。如果目前小腿胫骨、脚或跟腱有问题，先不做。",
    },
  ],
  enoughHeading: "多久练一次，练多重，会不会让我变慢？",
  enough: [
    "每周两到三次力量训练，排在跑步旁边。这是综述作者的建议。{3}刚开始两次就够。",
    "随时间逐步加难。ACSM的起点是你能举8到12次的重量。当你比目标多做1到2次时，加重2%到10%。{2}深蹲试验用得更重：每组4次。{5}用几周时间达到，而不是第一次课就上。",
    "你不会练得太壮。在综述中，力量训练没有损害身体成分。{3}在一项针对20名竞技长跑运动员、为期40周的试验中，力量组变得更强、跑步更经济，体重和瘦体重都没有变化。{6}",
    "伤病：有希望，但不保证。一项涵盖多种运动、25项试验（26,610人）的综述发现，力量训练把运动损伤降到三分之一以下。拉伸则没有显示效果。{7}这些参与者并不都是跑者。",
    "还有一项针对跑者的试验什么也没发现。720名首次参加纽约马拉松的跑者，一部分每周三次自行完成10分钟力量练习，一部分不做。导致无法完赛的伤病几乎相同：7.1%和7.3%。{8}在那里，一个自己完成的短练习并不够。负荷、循序渐进和真正去练，依然重要。",
  ],
  sampleHeading: "加入力量训练的一周跑步示例",
  sampleLabel: "仅为示例。不是处方。请根据你的身体、过往经历和跑步情况调整。",
  sample: [
    "周一：休息，或轻松散步。",
    "周二：质量课（间歇或节奏跑）。当天稍后做力量A：热身、深蹲、罗马尼亚硬拉、单腿提踵、侧平板支撑。",
    "周三：轻松跑。",
    "周四：轻松跑，或休息。",
    "周五：质量课，然后力量B：热身、弹跳和垫步跳、分腿蹲、单腿臀桥、屈膝提踵。",
    "周六：休息。",
    "周日：长距离，轻松配速。",
    "在高强度的日子练力量，让轻松的日子保持轻松。比赛周：一次短而轻的课，或者不练。",
  ],
  coachedHeading: "想要教练实时指导？",
  coached: [
    "Iron Hour是实时指导的力量与体能训练。60分钟，一对一。第0分钟准备：摄像头放侧面，全身入镜。第4分钟开始热身。第14分钟开始主项。第28分钟辅助训练：小腿、髋部、躯干。第50分钟放松。",
    "我们围绕你的跑步周安排力量训练。而不是反过来。",
    "中断后重新开始？Return每次45分钟，每月12次，隔天一次。Lean Reset每月20次，一对一。Open Floor是小组课。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。印地语或英语。按印度标准时间（IST）。还没决定？从30分钟的咨询开始。这是一次谈话，不是训练。预约只是占一个时间。费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不是医疗建议。ACSM的筛查模式指出：如果你平时不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以不经医生许可，从低到中等强度开始，逐步增加。如果你有上述疾病之一，或有胸痛、异常气短或头晕等症状，请先获得医生许可。{10}不要在同一段时间里同时大幅增加力量训练和跑量。先加一样，再加另一样。小腿、脚或髋部的疼痛如果越跑越重，需要检查：在那项马拉松试验中，骨应力损伤是无法完赛最常见的原因之一。{8}感到剧痛就停下；如果有关节问题、正在怀孕或近期刚生产，请先咨询专业意见。",
};

const ja: PostCopy = {
  metaTitle: "ランナーに最適な筋トレ：7種目と1週間のサンプル | Jalan PT",
  metaDescription:
    "ランナーに最適な筋トレ7種目。スクワットからカーフレイズ、ジャンプまで。ランニングエコノミーとケガについて研究が示すこと、筋トレの頻度、1週間のサンプル。",
  h1: "ランナーに最適な筋トレ：7種目と1週間のサンプル",
  dek: "走ることでエンジンができる。筋トレでその車体ができる。週2回の短いセッションを、ランの横に。",
  updated: "2026年10月30日更新",
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
    whatsappText: "こんにちは Susmit さん、ランナー向け筋トレの記事を読みました。相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "ランナーに最適な筋トレ",
  },
  intro: [
    "ほとんどのランナーは走るだけ。そのうち、ふくらはぎ、膝、股関節が悲鳴を上げる。",
    "WHO は成人に対し、有酸素運動に加えて、すべての主要な筋群を鍛える筋力強化運動を週2日以上行うよう勧めています。{1}ランは有酸素の部分をカバーします。残りはカバーしません。",
    "筋トレは走りそのものにも役立ちます。中・長距離ランナーを対象にした24件の研究のレビューでは、筋トレによってランニングエコノミー（あるペースで走るのに必要な酸素の量）が概ね2〜8%改善しました。1.5〜10kmのタイムトライアルも改善する傾向がありました。すべての研究でではありません。{3}",
    "必要なのは床と重いもの、そして週2回、30〜40分。",
  ],
  listHeading: "ランナーに最適な筋トレ7種目",
  items: [
    {
      name: "スクワット：ゴブレットからバーベルへ",
      why: "基本の種目。小規模な試験で、よく鍛えられたランナー17人が、高重量のハーフスクワット4回×4セットを週3回、8週間追加しました。スクワット群はランニングエコノミーが5%向上し、最大有酸素速度で走り続けられる時間が21%延びました。最大酸素摂取量と体重は変わりませんでした。{5}小規模な研究です。高重量は彼らの走りを損ないませんでした。",
      how: "足は肩幅くらい。重りを胸の前に、またはバーを背中の上部に。かかとの間に座り込む。膝はつま先の方向へ。力強く立ち上がる。",
      dose: "8〜12回×3セットで動きを覚える。{2}フォームが安定したら重くする：4〜6回×3〜4セット。",
    },
    {
      name: "ルーマニアンデッドリフト",
      why: "ヒップヒンジ。ハムストリングスとお尻が、前へ、坂の上へと押し出してくれる。",
      how: "重りを太ももの前で持つ。膝は軽く曲げる。お尻を後ろへ引き、重りを太ももに沿って下ろす。背中は長く。ハムストリングスが張ったら止める。お尻を締めて立つ。",
      dose: "6〜10回×3セット。",
    },
    {
      name: "リアフットエレベーテッド・スプリットスクワット",
      why: "ランは片脚ずつ。この種目も片脚ずつ。ACSM の推奨には、両側の種目と並んで片側の種目も含まれています。{2}",
      how: "後ろ足を後方のベンチか頑丈な椅子に乗せる。後ろの膝が床に近づくまで真下に下がる。前足で押して立ち上がる。必要なら壁に手を添える。",
      dose: "片脚6〜10回×2〜3セット。自重が楽になったら重りを持つ。",
    },
    {
      name: "片脚カーフレイズ：膝を伸ばして、曲げて",
      why: "一歩ごとに、ふくらはぎとアキレス腱を通して着地します。膝を伸ばすと大きなふくらはぎの筋肉に効く。膝を曲げると、より深い筋肉であるヒラメ筋に負荷が移ります。",
      how: "片足の母指球を段差に乗せ、かかとは端から出す。手すりか壁に手を添える。できるだけ高く上がる。止める。段差より下までゆっくり下ろす。次に膝を曲げて同じように。",
      dose: "片脚、それぞれ10〜15回×2〜3セット。15回が楽？ダンベルを持つか、荷物を入れたリュックを背負う。",
    },
    {
      name: "片脚グルートブリッジ",
      why: "股関節。ニューヨークシティマラソンに向けて練習していたランナー867人のうち、弱い側で片脚グルートブリッジを20秒以上保てると答えた人は、10秒未満の人よりオーバーユースのケガが少なかった。{9}観察研究で、テストは自己申告です。関連を示すもので、因果ではありません。",
      how: "仰向けになり、片足を床に、もう片方の脚は伸ばす。かかとで押す。膝・股関節・肩が一直線になるまでお尻を上げる。骨盤は水平に。キープするか、回数を行う。",
      dose: "片側8〜12回×2〜3セット、または20〜30秒キープ。まず弱い側をテストする。",
    },
    {
      name: "サイドプランク",
      why: "体幹を横から。そして片脚で立ったときに骨盤が落ちないよう支える股関節の筋肉。つまり一歩ごとに働く筋肉。",
      how: "横向きに寝て、肘を肩の真下に。体が一直線になるまでお尻を上げる。最初は膝を曲げて。楽になったら脚を伸ばして。呼吸を続ける。",
      dose: "片側20〜40秒キープ×2〜3回。",
    },
    {
      name: "ポゴジャンプとスキップ",
      why: "ランは小さな弾みの連続。短く弾むジャンプがそれを鍛えます。高度に鍛えられた中・長距離ランナー93人を含む5件の研究のメタ分析では、下半身の筋トレ2〜4種目に、最大200回のジャンプと5〜10本の短いダッシュを加えたプログラムを、週2〜3回、8〜12週間行ったものが調べられました。ランニングエコノミーへの効果は大きいものでした。{4}",
      how: "まっすぐ立つ。母指球で弾む。足首は固く、膝は柔らかく、着地は静かに。小さく、速く。次に片膝ずつ引き上げるスキップを20メートル。",
      dose: "10〜20回の接地×3〜4セット。低く、少なめから。すねや足、アキレス腱に今トラブルがあるなら行わない。",
    },
  ],
  enoughHeading: "頻度は？重さは？遅くならない？",
  enough: [
    "週2〜3回の筋トレを、ランと並行して。レビューの著者はそう提案しています。{3}始めは2回で十分。",
    "時間をかけてきつくしていく。ACSM の出発点は8〜12回挙げられる重さ。目標を1〜2回上回ったら2〜10%増やす。{2}スクワットの試験はもっと重く、4回のセットでした。{5}そこへは数週間かけて。初回からではなく。",
    "ムキムキにはなりません。レビューでは、筋トレは体組成に悪影響を与えませんでした。{3}競技レベルの長距離ランナー20人を対象にした40週間の試験では、筋トレ群は強くなり、エコノミーも向上し、体重や除脂肪量に変化はありませんでした。{6}",
    "ケガ：期待はできるが、約束はできない。多くのスポーツにわたる25件の試験（26,610人）のレビューでは、筋トレでスポーツ傷害が3分の1未満に減りました。ストレッチには効果が見られませんでした。{7}全員がランナーだったわけではありません。",
    "そしてランナーでの試験の一つは何も見つけませんでした。初めてニューヨークシティマラソンに出る720人が、週3回10分の自己流の筋トレを行うか、行わないか。完走できなくなったケガはほぼ同じで、7.1%と7.3%でした。{8}そこでは、一人で行う短いルーティンでは足りなかった。負荷、漸進、そして実際にやること。それが今も大事です。",
  ],
  sampleHeading: "筋トレを入れたランの1週間のサンプル",
  sampleLabel: "あくまでサンプルです。処方ではありません。体、これまでの経験、走り方に合わせて調整してください。",
  sample: [
    "月曜：休み、または軽い散歩。",
    "火曜：ポイント練習（インターバルかテンポ走）。同じ日の後で筋トレA：ウォームアップ、スクワット、ルーマニアンデッドリフト、片脚カーフレイズ、サイドプランク。",
    "水曜：ゆっくりラン。",
    "木曜：ゆっくりラン、または休み。",
    "金曜：ポイント練習の後に筋トレB：ウォームアップ、ポゴジャンプとスキップ、スプリットスクワット、片脚グルートブリッジ、膝を曲げたカーフレイズ。",
    "土曜：休み。",
    "日曜：ロング走、楽なペースで。",
    "きつい日に筋トレを。楽な日は楽なままに。レース週：短く軽いセッションを1回、またはなし。",
  ],
  coachedHeading: "ライブで指導を受けたい？",
  coached: [
    "Iron Hour はライブ指導のストレングス＆コンディショニング。60分、1対1。0分目にセットアップ：カメラは横、全身をフレームに。4分目からウォームアップ。14分目からメイン種目。28分目に補助種目：ふくらはぎ、股関節、体幹。50分目にクールダウン。",
    "筋トレはあなたのランの1週間に合わせて組みます。その逆ではありません。",
    "ブランクから戻る？Return は45分、月12回、1日おき。Lean Reset は月20回、1対1。Open Floor は少人数グループです。",
    "Google Meet、Zoom、FaceTime でライブ指導。プネーから。ヒンディー語か英語で。インド標準時（IST）で。まだ迷っている？30分の相談から始めましょう。トレーニングではなく会話です。予約は時間を押さえるだけ。料金は直接決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医療上の助言ではありません。ACSM のスクリーニングモデルでは、運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽〜中程度の運動を始めて徐々に増やしてよいとしています。これらの病気がある場合や、胸の痛み、いつもと違う息切れ、めまいなどの症状がある場合は、先に医師の許可を得てください。{10}同じ時期に筋トレと走行距離を両方大きく増やさないこと。片方ずつ。走るほど悪化するすね、足、股関節の痛みは診てもらいましょう。そのマラソンの試験では、骨のストレス障害が完走できなかった主な原因の一つでした。{8}鋭い痛みがあれば中止し、関節に問題がある場合、妊娠中、または出産して間もない場合は、先に専門家に相談してください。",
};

const gu: PostCopy = {
  metaTitle: "રનર્સ માટે શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો: 7 મૂવ અને એક સેમ્પલ અઠવાડિયું | Jalan PT",
  metaDescription:
    "રનર્સ માટે 7 શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો, સ્ક્વૉટથી કાફ રેઝ અને હૉપ્સ સુધી. રનિંગ ઇકોનોમી અને ઈજાઓ વિશે સંશોધન શું કહે છે, કેટલી વાર વજન ઉપાડવું, અને એક સેમ્પલ અઠવાડિયું.",
  h1: "રનર્સ માટે શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો: 7 મૂવ અને એક સેમ્પલ અઠવાડિયું",
  dek: "દોડવાથી એન્જિન બને છે. વજન ઉપાડવાથી તેની આસપાસનું માળખું. અઠવાડિયે બે નાના સેશન, તમારી દોડની સાથે.",
  updated: "અપડેટ: 30 ઑક્ટોબર 2026",
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
    whatsappText: "નમસ્તે સુસ્મિત, મેં રનર્સ માટે સ્ટ્રેન્થ કસરતોનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવું છે",
    skip: "સામગ્રી પર જાઓ",
    crumb: "રનર્સ માટે શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો",
  },
  intro: [
    "મોટા ભાગના રનર્સ ફક્ત દોડે છે. પછી પિંડી, ઘૂંટણ કે થાપો ફરિયાદ કરવા લાગે છે.",
    "WHO પુખ્ત વયના લોકોને કહે છે કે એરોબિક પ્રવૃત્તિ ઉપરાંત, અઠવાડિયે 2 કે વધુ દિવસ બધા મોટા મસલ ગ્રુપ માટે મસલ-સ્ટ્રેન્થનિંગ કરો.{1} દોડ એરોબિક ભાગ પૂરો કરે છે. બાકીનો નહીં.",
    "વજન ઉપાડવાથી દોડમાં પણ મદદ મળે છે. મિડલ અને લૉન્ગ-ડિસ્ટન્સ રનર્સ પરના 24 અભ્યાસોના એક રિવ્યૂમાં, સ્ટ્રેન્થ ટ્રેનિંગથી સામાન્ય રીતે રનિંગ ઇકોનોમી (કોઈ પેસ પર કેટલો ઑક્સિજન લાગે) 2 થી 8% સુધરી. 1.5 થી 10 કિમીના ટાઇમ ટ્રાયલ પણ મોટે ભાગે સુધર્યા. દરેક અભ્યાસમાં નહીં.{3}",
    "તમને જોઈએ જમીન, કંઈક ભારે, અને અઠવાડિયે બે વાર 30 થી 40 મિનિટ.",
  ],
  listHeading: "રનર્સ માટે 7 શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો",
  items: [
    {
      name: "સ્ક્વૉટ, પહેલાં ગૉબ્લેટ પછી બારબેલ",
      why: "પાયાની લિફ્ટ. એક નાના ટ્રાયલમાં, 17 સારી રીતે ટ્રેન થયેલા રનર્સે 8 અઠવાડિયાં સુધી, અઠવાડિયે ત્રણ વાર, ભારે હાફ-સ્ક્વૉટના 4 સેટ × 4 ઉમેર્યા. સ્ક્વૉટ ગ્રુપ 5% વધુ ઇકોનોમિકલ બન્યું અને તેમની મેક્સિમલ એરોબિક સ્પીડ પર 21% વધુ સમય ટક્યું. તેમનો મેક્સિમલ ઑક્સિજન અપટેક અને વજન બદલાયાં નહીં.{5} નાનો અભ્યાસ. ભારે વજનથી તેમની દોડને નુકસાન ન થયું.",
      how: "પગ લગભગ ખભાની પહોળાઈ પર. વજન છાતી પાસે, અથવા બાર ઉપલી પીઠ પર. એડીઓની વચ્ચે નીચે બેસો. ઘૂંટણ પંજાની દિશામાં. જોરથી ઊભા થાઓ.",
      dose: "શીખવા માટે 8 થી 12 ના 3 સેટ.{2} ફૉર્મ પાકું થાય પછી ભારે કરો: 4 થી 6 ના 3 થી 4 સેટ.",
    },
    {
      name: "રોમાનિયન ડેડલિફ્ટ",
      why: "હિન્જ મૂવમેન્ટ. હૅમસ્ટ્રિંગ અને ગ્લૂટ્સ તમને આગળ અને ચઢાણ પર ધકેલે છે.",
      how: "વજન જાંઘોની સામે પકડો. ઘૂંટણ સહેજ વાળેલા. થાપા પાછળ ધકેલો, વજનને જાંઘ પર નીચે સરકવા દો. પીઠ લાંબી. હૅમસ્ટ્રિંગ ખેંચાય ત્યારે અટકો. ગ્લૂટ્સ કસીને ઊભા થાઓ.",
      dose: "6 થી 10 ના 3 સેટ.",
    },
    {
      name: "રિયર-ફૂટ-એલિવેટેડ સ્પ્લિટ સ્ક્વૉટ",
      why: "દોડ એક વખતે એક પગ પર થાય છે. આ કસરત પણ. ACSM ની સલાહમાં બંને બાજુની કસરતો સાથે એક-બાજુની કસરતો પણ સામેલ છે.{2}",
      how: "પાછળનો પગ પાછળ બેન્ચ કે મજબૂત ખુરશી પર. સીધા નીચે જાઓ જ્યાં સુધી પાછળનો ઘૂંટણ જમીનની નજીક ન આવે. આગળના પગથી ઉપર ધકેલો. જરૂર હોય તો દીવાલ પકડો.",
      dose: "દરેક પગ 6 થી 10 ના 2 થી 3 સેટ. બૉડીવેટ સહેલું લાગે ત્યારે વજન પકડો.",
    },
    {
      name: "સિંગલ-લેગ કાફ રેઝ, સીધો અને વાળેલો ઘૂંટણ",
      why: "દરેક પગલું પિંડી અને અકિલીઝ દ્વારા જમીન પર પડે છે. સીધો ઘૂંટણ પિંડીના મોટા સ્નાયુ પર કામ કરે છે. વાળેલો ઘૂંટણ વધુ કામ અંદરના સ્નાયુ, સોલિયસ, પર મૂકે છે.",
      how: "એક પગનો પંજો પગથિયા પર, એડી કિનારીની બહાર. એક હાથ રેલિંગ કે દીવાલ પર. શક્ય એટલા ઊંચા જાઓ. અટકો. ધીમે ધીમે પગથિયાથી નીચે સુધી ઊતરો. પછી ઘૂંટણ વાળીને એ જ કરો.",
      dose: "દરેક પગ, બંને પ્રકારના 10 થી 15 ના 2 થી 3 સેટ. 15 સહેલા? ડમ્બેલ પકડો કે ભરેલું બૅકપૅક પહેરો.",
    },
    {
      name: "સિંગલ-લેગ ગ્લૂટ બ્રિજ",
      why: "થાપા. ન્યૂયોર્ક સિટી મેરેથોનની તૈયારી કરતા 867 રનર્સમાં, જેમણે કહ્યું કે તેઓ નબળી બાજુએ સિંગલ-લેગ ગ્લૂટ બ્રિજ 20 સેકન્ડ કે વધુ પકડી શકે છે, તેમને 10 સેકન્ડથી ઓછું પકડી શકનારા કરતાં ઓછી ઓવરયૂઝ ઈજાઓ થઈ.{9} એ ઑબ્ઝર્વેશનલ અભ્યાસ હતો, અને ટેસ્ટ લોકોએ જાતે રિપોર્ટ કર્યા હતા. તે સંબંધ બતાવે છે, કારણ નહીં.",
      how: "પીઠ પર સૂઓ, એક પગ જમીન પર, બીજો પગ સીધો. એડીથી ધકેલો. થાપા ઉપાડો જ્યાં સુધી ઘૂંટણ, થાપો અને ખભો એક લાઇનમાં ન આવે. થાપા સમતલ રાખો. પકડી રાખો, અથવા રેપ્સ કરો.",
      dose: "દરેક બાજુ 8 થી 12 ના 2 થી 3 સેટ, અથવા 20 થી 30 સેકન્ડ પકડી રાખો. પહેલાં નબળી બાજુ ટેસ્ટ કરો.",
    },
    {
      name: "સાઇડ પ્લૅન્ક",
      why: "ધડ, બાજુએથી, અને થાપાના એ સ્નાયુઓ જે એક પગ પર ઊભા હો ત્યારે પેલ્વિસને નમતો અટકાવે છે. એટલે દરેક પગલે.",
      how: "પડખે સૂઓ, કોણી ખભાની નીચે. થાપા ઉપાડો જેથી શરીર એક સીધી લાઇનમાં રહે. શરૂઆતમાં ઘૂંટણ વાળેલા. સહેલું લાગે ત્યારે પગ સીધા. શ્વાસ ચાલુ રાખો.",
      dose: "દરેક બાજુ 20 થી 40 સેકન્ડના 2 થી 3 હોલ્ડ.",
    },
    {
      name: "પોગો હૉપ્સ અને સ્કિપ્સ",
      why: "દોડ નાના નાના ઉછાળાની હારમાળા છે. ટૂંકા, સ્પ્રિંગ જેવા જમ્પ એ જ ટ્રેન કરે છે. 93 હાઇ-લેવલ મિડલ અને લૉન્ગ-ડિસ્ટન્સ રનર્સ પરના 5 અભ્યાસોના એક મેટા-એનાલિસિસમાં આવા પ્રોગ્રામ જોવાયા: નીચલા શરીરની 2 થી 4 લિફ્ટ, 200 સુધી જમ્પ અને 5 થી 10 ટૂંકા સ્પ્રિન્ટ, અઠવાડિયે 2 થી 3 વાર, 8 થી 12 અઠવાડિયાં. રનિંગ ઇકોનોમી પર અસર મોટી હતી.{4}",
      how: "સીધા ઊભા રહો. પંજા પર ઉછળો. ઘૂંટી કડક, ઘૂંટણ નરમ, લૅન્ડિંગ શાંત. નાનું અને ઝડપી. પછી સ્કિપ કરો, એક વખતે એક ઘૂંટણ ઉપર, 20 મીટર સુધી.",
      dose: "10 થી 20 કૉન્ટૅક્ટના 3 થી 4 સેટ. નીચું અને ઓછું શરૂ કરો. હાલમાં પિંડી, પગ કે અકિલીઝમાં તકલીફ હોય તો આ છોડી દો.",
    },
  ],
  enoughHeading: "કેટલી વાર, કેટલું ભારે, અને શું આનાથી હું ધીમો પડીશ?",
  enough: [
    "અઠવાડિયે બે કે ત્રણ સ્ટ્રેન્થ સેશન, તમારી દોડની સાથે. રિવ્યૂના લેખકો આ જ સૂચવે છે.{3} શરૂઆત માટે બે પૂરતા છે.",
    "સમય સાથે અઘરું બનાવો. ACSM ની શરૂઆત એવા વજનથી છે જે તમે 8 થી 12 વાર ઉપાડી શકો. જ્યારે તમે ટાર્ગેટથી 1 થી 2 રેપ વધુ કરો, ત્યારે 2 થી 10% વધારો.{2} સ્ક્વૉટ ટ્રાયલ વધુ ભારે ગયો: 4 ના સેટ.{5} ત્યાં અઠવાડિયાંમાં પહોંચો, પહેલા સેશનમાં નહીં.",
    "તમે ભારે-ભરખમ નહીં બનો. રિવ્યૂમાં સ્ટ્રેન્થ ટ્રેનિંગથી બૉડી કમ્પોઝિશનને નુકસાન ન થયું.{3} 20 સ્પર્ધાત્મક ડિસ્ટન્સ રનર્સ પરના 40 અઠવાડિયાંના એક ટ્રાયલમાં, વજન ઉપાડનાર ગ્રુપ વધુ મજબૂત અને ઇકોનોમિકલ બન્યું, અને બૉડી માસ કે લીન માસમાં કોઈ ફેરફાર ન થયો.{6}",
    "ઈજાઓ: આશા, ગેરંટી નહીં. ઘણી રમતોના 25 ટ્રાયલ (26,610 લોકો) ના એક રિવ્યૂમાં સ્ટ્રેન્થ ટ્રેનિંગે સ્પોર્ટ્સ ઈજાઓ એક-તૃતીયાંશથી પણ ઓછી કરી. સ્ટ્રેચિંગની કોઈ અસર ન દેખાઈ.{7} એ બધા રનર્સ નહોતા.",
    "અને રનર્સ પરના એક ટ્રાયલમાં કંઈ ન મળ્યું. ન્યૂયોર્ક સિટી મેરેથોન પહેલી વાર દોડનારા 720 લોકોમાંથી કેટલાકે અઠવાડિયે ત્રણ વાર 10 મિનિટનું જાતે કરવાનું સ્ટ્રેન્થ રૂટિન કર્યું, કેટલાકે નહીં. રેસ પૂરી ન કરવા દેનારી ઈજાઓ લગભગ સરખી હતી: 7.1% અને 7.3%.{8} ત્યાં એકલા કરેલું નાનું રૂટિન પૂરતું નહોતું. વજન, પ્રોગ્રેસ અને ખરેખર કામ કરવું હજુ પણ મહત્ત્વનું છે.",
  ],
  sampleHeading: "સ્ટ્રેન્થ સાથે રનિંગનું એક સેમ્પલ અઠવાડિયું",
  sampleLabel: "માત્ર સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર, તમારા ઇતિહાસ અને તમારી દોડ મુજબ બદલો.",
  sample: [
    "સોમવાર: આરામ, અથવા હળવું ચાલવું.",
    "મંગળવાર: ક્વૉલિટી રન (ઇન્ટરવલ કે ટેમ્પો). એ જ દિવસે પછી સ્ટ્રેન્થ A: વૉર્મ-અપ, સ્ક્વૉટ, રોમાનિયન ડેડલિફ્ટ, સિંગલ-લેગ કાફ રેઝ, સાઇડ પ્લૅન્ક.",
    "બુધવાર: સહેલી દોડ.",
    "ગુરુવાર: સહેલી દોડ, અથવા આરામ.",
    "શુક્રવાર: ક્વૉલિટી રન, પછી સ્ટ્રેન્થ B: વૉર્મ-અપ, પોગો હૉપ્સ અને સ્કિપ્સ, સ્પ્લિટ સ્ક્વૉટ, સિંગલ-લેગ ગ્લૂટ બ્રિજ, વાળેલા ઘૂંટણવાળો કાફ રેઝ.",
    "શનિવાર: આરામ.",
    "રવિવાર: લાંબી દોડ, સહેલી પેસ.",
    "અઘરા દિવસોએ વજન ઉપાડો, જેથી સહેલા દિવસો સહેલા રહે. રેસનું અઠવાડિયું: એક નાનું, હળવું સેશન, અથવા કંઈ નહીં.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Iron Hour સ્ટ્રેન્થ અને કન્ડિશનિંગ છે, લાઇવ કોચિંગ સાથે. 60 મિનિટ, 1:1. મિનિટ 0 પર સેટ-અપ: કૅમેરા બાજુમાં, આખું શરીર ફ્રેમમાં. મિનિટ 4 થી વૉર્મ-અપ. મિનિટ 14 પર મુખ્ય લિફ્ટ. 28 પર એક્સેસરીઝ: પિંડીઓ, થાપા, ધડ. 50 પર કૂલ-ડાઉન.",
    "અમે લિફ્ટ્સને તમારા રનિંગ અઠવાડિયા મુજબ પ્લાન કરીએ છીએ. ઊલટું નહીં.",
    "બ્રેક પછી પાછા આવો છો? Return 45 મિનિટનું છે, મહિને 12 સેશન, એકાંતરે દિવસે. Lean Reset મહિને 20 સેશન, 1:1. Open Floor નાનું ગ્રુપ છે.",
    "Google Meet, Zoom કે FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર. હજુ નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. એ વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ ફક્ત સમય રોકે છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM ના સ્ક્રીનિંગ મોડલ મુજબ: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણ નથી અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, અથવા છાતીમાં દુખાવો, અસામાન્ય હાંફ કે ચક્કર જેવા લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{10} એક જ અઠવાડિયાંમાં ઘણું વજન અને ઘણી દોડ સાથે ન વધારો. પહેલાં એક વધારો, પછી બીજું. પિંડી, પગ કે થાપાનો દુખાવો જે દોડતાં વધતો જાય, તેની તપાસ કરાવો: મેરેથોન ટ્રાયલમાં, હાડકાંની સ્ટ્રેસ ઈજાઓ રેસ પૂરી ન કરી શકવાનાં સૌથી સામાન્ય કારણોમાંની એક હતી.{8} તીવ્ર દુખાવો થાય તો રોકાઈ જાઓ, અને સાંધાની કોઈ સમસ્યા હોય, ગર્ભાવસ્થામાં હો કે તાજેતરમાં બાળક થયું હોય તો પહેલાં સલાહ લો.",
};

export const runnersStrengthPost: BlogPost = {
  slug: RUNNERS_SLUG,
  published: RUNNERS_PUBLISHED,
  modified: RUNNERS_MODIFIED,
  about: "Strength training exercises for runners",
  sources: RUNNERS_SOURCES,
  copy: { en, ar, hi, es, zh, ja, gu },
  programLink: { href: "/online-strength-and-conditioning-coach", label: "How Iron Hour works: online strength and conditioning, coached live" },
};
