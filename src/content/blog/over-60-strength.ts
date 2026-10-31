/**
 * Blog post: "Best strength exercises for over 60s".
 * Citations in copy are written as {n} and point at OVER_60_SOURCES[n - 1].
 * Every number in the copy comes from a cited source (title, authors, journal,
 * year, volume/pages and finding checked against the Europe PMC record and
 * abstract, and each DOI checked as registered at doi.org, on 31 Oct 2026; the
 * WHO older-adult wording checked in the Bull et al. 2020 full text, PMC7719906).
 * No client results, no quotes, no prices. Small, observational and
 * low-certainty evidence is labelled as such in the copy. Translations were
 * drafted for this batch and need a native-speaker review before launch (see
 * CHANGES-grokbot.md).
 */

import { type BlogPost, type PostCopy } from "./shared";

export const OVER_60_SLUG = "best-strength-exercises-for-over-60s";
export const OVER_60_PUBLISHED = "2026-10-31";
export const OVER_60_MODIFIED = "2026-10-31";

export const OVER_60_SOURCES = [
  {
    cite: "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. Geneva: WHO; 2020.",
    url: "https://www.who.int/publications/i/item/9789240015128",
  },
  {
    cite: "American College of Sports Medicine. Position stand: Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
    url: "https://doi.org/10.1249/MSS.0b013e3181915670",
  },
  {
    cite: "Liu CJ, Latham NK. Progressive resistance strength training for improving physical function in older adults. Cochrane Database Syst Rev. 2009;(3):CD002759.",
    url: "https://doi.org/10.1002/14651858.CD002759.pub2",
  },
  {
    cite: "Sherrington C, Fairhall NJ, Wallbank GK, et al. Exercise for preventing falls in older people living in the community. Cochrane Database Syst Rev. 2019;1(1):CD012424.",
    url: "https://doi.org/10.1002/14651858.CD012424.pub2",
  },
  {
    cite: "Grgic J, Garofolini A, Orazem J, Sabol F, Schoenfeld BJ, Pedisic Z. Effects of resistance training on muscle size and strength in very elderly adults: a systematic review and meta-analysis of randomized controlled trials. Sports Med. 2020;50(11):1983–1999.",
    url: "https://doi.org/10.1007/s40279-020-01331-7",
  },
  {
    cite: "Fiatarone MA, O'Neill EF, Ryan ND, et al. Exercise training and nutritional supplementation for physical frailty in very elderly people. N Engl J Med. 1994;330(25):1769–1775.",
    url: "https://doi.org/10.1056/NEJM199406233302501",
  },
  {
    cite: "Balachandran AT, Steele J, Angielczyk D, et al. Comparison of power training vs traditional strength training on physical function in older adults: a systematic review and meta-analysis. JAMA Netw Open. 2022;5(5):e2211623.",
    url: "https://doi.org/10.1001/jamanetworkopen.2022.11623",
  },
  {
    cite: "Guralnik JM, Simonsick EM, Ferrucci L, et al. A short physical performance battery assessing lower extremity function: association with self-reported disability and prediction of mortality and nursing home admission. J Gerontol. 1994;49(2):M85–M94.",
    url: "https://doi.org/10.1093/geronj/49.2.M85",
  },
  {
    cite: "Riebe D, Franklin BA, Thompson PD, et al. Updating ACSM's recommendations for exercise preparticipation health screening. Med Sci Sports Exerc. 2015;47(11):2473–2479.",
    url: "https://doi.org/10.1249/MSS.0000000000000664",
  },
] as const;

const en: PostCopy = {
  metaTitle: "Best Strength Exercises for Over 60s: 7 Moves and a Sample Week | Jalan PT",
  metaDescription:
    "The 7 best strength exercises for over 60s: sit-to-stands, step-ups, carries and balance. What the research says about strength, falls and starting late, plus a sample week.",
  // Non-breaking space keeps "over 60s" together on narrow screens.
  h1: "Best strength exercises for over\u00a060s: 7 moves and a sample week",
  dek: "Strength gets you out of the chair, up the stairs and steady on your feet. You can still build it. A chair, a counter and three short sessions a week.",
  updated: "Updated 31 October 2026",
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
    whatsappText: "Hi Susmit, I read the article on strength exercises for over 60s and want to book a consultation",
    skip: "Skip to content",
    crumb: "Best strength exercises for over 60s",
  },
  intro: [
    "After 60, the goal is simple. Keep doing what you do. Without help.",
    "WHO's advice for adults 65 and over: varied activity that puts the weight on balance and strength, at moderate or greater intensity, on 3 or more days a week. To keep you capable, and to prevent falls.{1}",
    "Lifting works at this age. A Cochrane review pooled 121 trials with 6,700 older people. Progressive strength training had a large effect on strength. Getting up from a chair improved moderately to a lot. Walking speed improved modestly.{3}",
    "You need a sturdy chair, a kitchen counter, something to lift, and 30 to 40 minutes.",
  ],
  listHeading: "The 7 best strength exercises for over 60s",
  items: [
    {
      name: "Sit-to-stand from a chair",
      why: "The move you do most in a day. In the Cochrane review, getting up from a chair was one of the clearest gains.{3} Five chair rises against the clock is also part of a short test battery used in more than 5,000 adults aged 71 and over. With balance and walking speed, those scores were strongly linked to disability, and predicted death and nursing-home admission in the short term.{8} A link, not a cause. But it shows which strength matters.",
      how: "Sturdy chair against a wall. Feet hip-width, a little behind the knees. Lean forward, nose over toes. Stand up tall. Sit down slowly, don't drop. Push on your thighs at first if you need to.",
      dose: "3 sets of 8 to 12.{2} Easy? Hold a weight at your chest, or use a lower seat.",
    },
    {
      name: "Step-up on the bottom stair",
      why: "Stairs, kerbs, the step onto a bus. In a trial in 100 frail nursing-home residents, average age 87, ten weeks of high-intensity strength training raised strength by 113% and stair-climbing power by 28%. Walking speed rose by about 12%.{6} One small trial, in very old and frail people. It shows how much there is left to gain.",
      how: "Bottom stair, one hand on the rail. Whole foot on the step. Push through that heel and stand tall. Step down slowly, same leg first. Then the other side.",
      dose: "2 to 3 sets of 6 to 10 each leg. Then a higher step, or a weight in the free hand.",
    },
    {
      name: "Hip hinge with dumbbells or a bag",
      why: "Picking things up from the floor. Laundry, a bag of rice, a grandchild. The hinge teaches the hips to do the work.",
      how: "Weights in front of your thighs. Soft knees. Push the hips back, back long, and let the weights slide down to your knees. Stand up by squeezing your glutes. Learn it with a broomstick first.",
      dose: "3 sets of 8 to 12.",
    },
    {
      name: "Push-up: wall, then counter, then a low step",
      why: "Pushing yourself up. Off the floor, out of the bath, out of bed.",
      how: "Hands on the wall at shoulder height. Body in one straight line. Lower your chest towards the wall. Press away. When 12 feel easy, move the hands lower: kitchen counter, then a sturdy table, then a stair.",
      dose: "2 to 3 sets of 8 to 12.",
    },
    {
      name: "One-arm row",
      why: "Pulling. Opening heavy doors, lifting a bag into the car. It also balances all the pushing and sitting.",
      how: "One hand on the counter or a sturdy chair. Weight in the other hand. Pull it to your hip, elbow close. Pause. Lower slowly. No weight? A bag with books in it works.",
      dose: "2 to 3 sets of 8 to 12 each arm.",
    },
    {
      name: "Carry",
      why: "Carrying shopping, a bucket, a suitcase. Grip, shoulders, trunk and legs, all at once.",
      how: "A weight in each hand, or one in one hand. Stand tall. Walk at a normal pace on a clear floor. Don't lean. Put them down with a hinge, not a rounded back.",
      dose: "3 to 4 walks of 20 to 30 metres, or 30 to 40 seconds.",
    },
    {
      name: "Balance: feet together, heel-to-toe, one leg",
      why: "Strength on its own isn't the falls plan. A Cochrane review of 108 trials (23,407 people, average age 76) found balance and functional exercises cut the rate of falls by 24%. Programmes that added strength work to them probably cut it by 34%. For strength training alone, the effect on falls was uncertain.{4} So we do both.",
      how: "Stand at the kitchen counter, fingertips on it. Feet side by side. Then one heel against the other foot's toes. Then one leg. When a position is steady, lift the fingertips off.",
      dose: "Every session, and on walking days too: 2 to 3 holds of up to 30 seconds per position, each side.",
    },
  ],
  enoughHeading: "How often, how heavy, and is it too late?",
  enough: [
    "Two or three strength sessions a week. In most of the 121 trials, people trained two to three times a week, at a high intensity.{3} Add balance, so the total is 3 or more days.{1}",
    "Start with a load you can lift 8 to 12 times. When you beat the target by 1 or 2 reps, add 2 to 10%.{2} The last two reps should feel like work. Never so heavy that you hold your breath and strain.",
    "It is not too late. A review of 22 trials in adults aged 75 and over found strength training increased muscle strength and muscle size. Strength improved even in those aged 80 and over.{5}",
    "Stand up fast, sit down slow. A review of 20 trials in 566 healthy older adults (average age 70) compared lifting as fast as possible with lifting at a steady pace. Lifting fast was linked to a modest extra gain in physical function. The evidence was low certainty.{7} Go fast on the way up only once the form is solid.",
    "Some joint pain and muscle soreness is common at the start. In the Cochrane review, serious problems were rare, and none were reported as directly caused by the training.{3}",
  ],
  sampleHeading: "A sample week for over 60s",
  sampleLabel: "Sample only. Not a prescription. Adjust it to your body, your health and your history.",
  sample: [
    "Monday: Strength A. Warm-up, sit-to-stand, push-up, one-arm row, carry. Balance at the end.",
    "Tuesday: a walk. Balance holds at the kitchen counter.",
    "Wednesday: Strength B. Warm-up, step-up, hip hinge, one-arm row, carry. Balance at the end.",
    "Thursday: a walk, or rest.",
    "Friday: Strength A again.",
    "Saturday: a longer walk.",
    "Sunday: rest.",
    "A rest day between strength days. Every strength day ends with balance.",
  ],
  coachedHeading: "Want it coached live?",
  coached: [
    "Return fits this well. 45 minutes, 12 alternate-day sessions a month. A rest day between sessions, every time. We rebuild movement first, then add load.",
    "Prefer the full hour? Iron Hour is 60 minutes, 1:1. Set-up at minute 0: chair, counter and camera placed so your whole body is in frame. Warm-up from minute 4. The primary lift at 14. Accessories at 28: rows, carries, balance. Cool-down at 50.",
    "Lean Reset is 20 sessions a month, 1:1. Open Floor is a small group.",
    "Coached live on Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST. Not sure yet? Start with a 30-minute consultation. It is a conversation, not training. Booking holds a time. The fee is agreed directly.",
  ],
  safetyHeading: "Before you start",
  safety:
    "General information, not medical advice. ACSM's screening model says: if you are inactive, have no symptoms and no known heart, metabolic or kidney disease, you can start light to moderate exercise without medical clearance and build up gradually. If you have one of those conditions, or symptoms such as chest pain, unusual breathlessness or dizziness, get medical clearance first.{9} Set up for safety: a sturdy chair against a wall, a counter or rail within reach, a clear floor, good light, and shoes with grip. Breathe out as you lift. Don't hold your breath. If you have osteoporosis or a joint replacement, or have fallen recently, ask your doctor or physiotherapist which moves and loads suit you. Stop if you feel chest pain, dizziness or sharp pain.",
};

const ar: PostCopy = {
  metaTitle: "أفضل تمارين القوة لمن تجاوزوا الستين: 7 تمارين ونموذج لأسبوع | Jalan PT",
  metaDescription:
    "أفضل 7 تمارين قوة لمن تجاوزوا الستين: النهوض من الكرسي، والصعود على الدرجة، والحمل، والتوازن. ماذا تقول الأبحاث عن القوة والسقوط والبدء المتأخر، مع نموذج لأسبوع.",
  h1: "أفضل تمارين القوة لمن تجاوزوا الستين: 7 تمارين ونموذج لأسبوع",
  dek: "القوة هي ما ينهضك من الكرسي، ويصعد بك الدرج، ويُبقيك ثابتاً على قدميك. وما زال بإمكانك بناؤها. كرسي، وطاولة مطبخ، وثلاث جلسات قصيرة في الأسبوع.",
  updated: "تم التحديث في 31 أكتوبر 2026",
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
    whatsappText: "مرحباً سوسميت، قرأت مقال تمارين القوة لمن تجاوزوا الستين وأريد حجز استشارة",
    skip: "انتقل إلى المحتوى",
    crumb: "أفضل تمارين القوة لمن تجاوزوا الستين",
  },
  intro: [
    "بعد الستين، الهدف بسيط. أن تواصل فعل ما تفعله. دون مساعدة.",
    "توصية منظمة الصحة العالمية لمن هم في الخامسة والستين فأكثر: نشاط متنوّع يركّز على التوازن والقوة، بشدة معتدلة أو أعلى، 3 أيام أو أكثر في الأسبوع. ليحافظ على قدرتك، ويقي من السقوط.{1}",
    "رفع الأوزان ينفع في هذا العمر. جمعت مراجعة كوكرين 121 تجربة شملت 6,700 من كبار السن. كان لتدريب القوة المتدرّج أثر كبير على القوة. وتحسّن النهوض من الكرسي تحسّناً متوسطاً إلى كبير. وتحسّنت سرعة المشي تحسّناً متواضعاً.{3}",
    "تحتاج كرسياً متيناً، وطاولة مطبخ، وشيئاً ترفعه، ومن 30 إلى 40 دقيقة.",
  ],
  listHeading: "أفضل 7 تمارين قوة لمن تجاوزوا الستين",
  items: [
    {
      name: "النهوض من الكرسي",
      why: "الحركة التي تكرّرها أكثر من غيرها في يومك. في مراجعة كوكرين، كان النهوض من الكرسي من أوضح المكاسب.{3} والنهوض من الكرسي خمس مرات بأسرع ما يمكن جزء من مجموعة اختبارات قصيرة طُبّقت على أكثر من 5,000 شخص في الحادية والسبعين فأكثر. مع التوازن وسرعة المشي، ارتبطت هذه النتائج بقوة بالعجز، وتنبّأت بالوفاة ودخول دور الرعاية على المدى القصير.{8} ارتباط، لا سبب. لكنه يُظهر أيّ قوة تهمّ.",
      how: "كرسي متين مسنود إلى الحائط. القدمان بعرض الوركين، خلف الركبتين قليلاً. مِل إلى الأمام، الأنف فوق أصابع القدمين. قف مستقيماً. اجلس ببطء، لا تسقط على المقعد. استند بيديك إلى فخذيك في البداية إن احتجت.",
      dose: "3 مجموعات من 8 إلى 12.{2} سهل؟ أمسك وزناً عند صدرك، أو استخدم مقعداً أخفض.",
    },
    {
      name: "الصعود على الدرجة الأولى",
      why: "الدرج، والرصيف، وصعود الحافلة. في تجربة على 100 من نزلاء دور الرعاية الضعفاء، متوسط أعمارهم 87 عاماً، رفعت عشرة أسابيع من تدريب القوة عالي الشدة القوة بنسبة 113% وقدرة صعود الدرج بنسبة 28%. وزادت سرعة المشي بنحو 12%.{6} تجربة صغيرة واحدة، على أشخاص كبار جداً في السن وضعفاء. تُظهر كم بقي من مكسب.",
      how: "الدرجة الأولى، ويد على الدرابزين. القدم كاملة على الدرجة. ادفع عبر الكعب وقف مستقيماً. انزل ببطء، بالساق نفسها أولاً. ثم الجانب الآخر.",
      dose: "من 2 إلى 3 مجموعات من 6 إلى 10 لكل ساق. ثم درجة أعلى، أو وزن في اليد الحرة.",
    },
    {
      name: "ثني الورك بالدمبل أو بحقيبة",
      why: "التقاط الأشياء من الأرض. الغسيل، كيس أرز، حفيد. هذه الحركة تعلّم الوركين أن يقوما بالعمل.",
      how: "الأوزان أمام فخذيك. ركبتان لينتان. ادفع الوركين إلى الخلف، الظهر ممدود، ودع الأوزان تنزلق حتى ركبتيك. قف بشدّ الألوية. تعلّمها بعصا مكنسة أولاً.",
      dose: "3 مجموعات من 8 إلى 12.",
    },
    {
      name: "الضغط: على الحائط، ثم الطاولة، ثم درجة منخفضة",
      why: "أن تدفع نفسك إلى الأعلى. عن الأرض، ومن حوض الاستحمام، ومن السرير.",
      how: "اليدان على الحائط بمستوى الكتفين. الجسم خط مستقيم واحد. اقترب بصدرك من الحائط. ادفع بعيداً. حين تصبح 12 تكراراً سهلة، أنزل اليدين: طاولة المطبخ، ثم طاولة متينة، ثم درجة.",
      dose: "من 2 إلى 3 مجموعات من 8 إلى 12.",
    },
    {
      name: "السحب بذراع واحدة",
      why: "السحب. فتح الأبواب الثقيلة، رفع حقيبة إلى السيارة. ويوازن كل الدفع والجلوس.",
      how: "يد على طاولة المطبخ أو كرسي متين. الوزن في اليد الأخرى. اسحبه إلى وركك، والمرفق قريب. توقّف لحظة. أنزله ببطء. لا وزن لديك؟ حقيبة فيها كتب تكفي.",
      dose: "من 2 إلى 3 مجموعات من 8 إلى 12 لكل ذراع.",
    },
    {
      name: "الحمل والمشي",
      why: "حمل المشتريات، أو دلو، أو حقيبة سفر. القبضة والكتفان والجذع والساقان، معاً.",
      how: "وزن في كل يد، أو وزن في يد واحدة. قف مستقيماً. امشِ بخطوتك العادية على أرض خالية. لا تمِل. ضعها أرضاً بثني الورك، لا بظهر مقوّس.",
      dose: "من 3 إلى 4 مشيات من 20 إلى 30 متراً، أو من 30 إلى 40 ثانية.",
    },
    {
      name: "التوازن: القدمان متلاصقتان، ثم الكعب أمام الأصابع، ثم ساق واحدة",
      why: "القوة وحدها ليست خطة الوقاية من السقوط. وجدت مراجعة كوكرين لـ108 تجارب (23,407 أشخاص، متوسط العمر 76) أن تمارين التوازن والتمارين الوظيفية خفّضت معدل السقوط بنسبة 24%. والبرامج التي أضافت إليها تمارين القوة خفّضته على الأرجح بنسبة 34%. أما تدريب القوة وحده، فأثره على السقوط غير مؤكد.{4} لذلك نفعل الاثنين.",
      how: "قف عند طاولة المطبخ، وأطراف أصابعك عليها. القدمان جنباً إلى جنب. ثم كعب قدم ملاصق لأصابع القدم الأخرى. ثم على ساق واحدة. حين تثبت في وضعية، ارفع أطراف أصابعك عن الطاولة.",
      dose: "في كل جلسة، وفي أيام المشي أيضاً: من 2 إلى 3 ثباتات حتى 30 ثانية لكل وضعية، لكل جانب.",
    },
  ],
  enoughHeading: "كم مرة، وبأيّ ثقل، وهل فات الأوان؟",
  enough: [
    "جلستان أو ثلاث جلسات قوة في الأسبوع. في معظم التجارب الـ121، تدرّب المشاركون مرتين إلى ثلاث مرات في الأسبوع، بشدة عالية.{3} أضف التوازن ليصبح المجموع 3 أيام أو أكثر.{1}",
    "ابدأ بحمل تستطيع رفعه من 8 إلى 12 مرة. حين تتجاوز الهدف بتكرار أو اثنين، أضف من 2 إلى 10%.{2} آخر تكرارين يجب أن يكونا جهداً. لكن ليس ثقيلاً لدرجة أن تحبس أنفاسك وتجهد.",
    "لم يفت الأوان. وجدت مراجعة لـ22 تجربة على أشخاص في الخامسة والسبعين فأكثر أن تدريب القوة زاد قوة العضلات وحجمها. وتحسّنت القوة حتى لدى من تجاوزوا الثمانين.{5}",
    "انهض بسرعة، واجلس ببطء. قارنت مراجعة لـ20 تجربة على 566 من كبار السن الأصحاء (متوسط العمر 70) بين الرفع بأقصى سرعة والرفع بإيقاع ثابت. ارتبط الرفع السريع بمكسب إضافي متواضع في الوظيفة البدنية. وكانت درجة اليقين في الأدلة منخفضة.{7} أسرِع في الصعود فقط حين يثبت الأداء.",
    "بعض ألم المفاصل والعضلات شائع في البداية. في مراجعة كوكرين، كانت المشكلات الخطيرة نادرة، ولم يُبلَغ عن أيّ منها على أنه ناتج مباشرة عن التدريب.{3}",
  ],
  sampleHeading: "نموذج لأسبوع لمن تجاوزوا الستين",
  sampleLabel: "نموذج فقط. ليس وصفة. عدّله بحسب جسمك وصحتك وتاريخك.",
  sample: [
    "الاثنين: القوة A. إحماء، النهوض من الكرسي، الضغط، السحب بذراع واحدة، الحمل والمشي. التوازن في النهاية.",
    "الثلاثاء: مشي. ثباتات توازن عند طاولة المطبخ.",
    "الأربعاء: القوة B. إحماء، الصعود على الدرجة، ثني الورك، السحب بذراع واحدة، الحمل والمشي. التوازن في النهاية.",
    "الخميس: مشي، أو راحة.",
    "الجمعة: القوة A مرة أخرى.",
    "السبت: مشي أطول.",
    "الأحد: راحة.",
    "يوم راحة بين أيام القوة. وكل يوم قوة ينتهي بالتوازن.",
  ],
  coachedHeading: "تريده بتدريب مباشر؟",
  coached: [
    "برنامج Return يناسب هذا. 45 دقيقة، 12 جلسة في الشهر بالتناوب: يوم تمرين ويوم راحة. نعيد بناء الحركة أولاً، ثم نضيف الحمل.",
    "تفضّل الساعة كاملة؟ Iron Hour مدته 60 دقيقة، فردياً. التجهيز في الدقيقة 0: الكرسي والطاولة والكاميرا بحيث يظهر جسمك كاملاً في الإطار. الإحماء من الدقيقة 4. التمرين الأساسي في الدقيقة 14. التمارين المساعدة في 28: السحب والحمل والتوازن. التهدئة في 50.",
    "Lean Reset عشرون جلسة في الشهر، فردياً. Open Floor مجموعة صغيرة.",
    "تدريب مباشر عبر Google Meet أو Zoom أو FaceTime. من بونه. بالهندية أو الإنجليزية. بتوقيت الهند (IST). لم تقرّر بعد؟ ابدأ باستشارة مدتها 30 دقيقة. هي محادثة، لا تدريب. الحجز يثبّت موعداً فقط. والرسوم يُتفق عليها مباشرة.",
  ],
  safetyHeading: "قبل أن تبدأ",
  safety:
    "معلومات عامة، وليست نصيحة طبية. وفق نموذج الفحص لدى ACSM: إذا كنت غير نشط، بلا أعراض، ولا تعاني من مرض معروف في القلب أو الأيض أو الكلى، يمكنك البدء بتمارين خفيفة إلى معتدلة دون إذن طبي والتدرّج. إن كانت لديك إحدى هذه الحالات، أو أعراض مثل ألم الصدر أو ضيق نفس غير معتاد أو دوار، فاحصل على إذن طبي أولاً.{9} جهّز المكان بأمان: كرسي متين مسنود إلى الحائط، وطاولة أو درابزين في متناول اليد، وأرض خالية، وإضاءة جيدة، وحذاء لا ينزلق. أخرج النفس وأنت ترفع. لا تحبس أنفاسك. إن كنت مصاباً بهشاشة العظام، أو لديك مفصل صناعي، أو سقطت مؤخراً، فاسأل طبيبك أو أخصائي العلاج الطبيعي عن الحركات والأحمال المناسبة لك. توقّف إن شعرت بألم في الصدر أو دوار أو ألم حاد.",
};

const hi: PostCopy = {
  metaTitle: "60 के बाद सबसे अच्छी स्ट्रेंथ एक्सरसाइज़: 7 मूव्स और एक सैंपल हफ़्ता | Jalan PT",
  metaDescription:
    "60 से ज़्यादा उम्र वालों के लिए 7 सबसे अच्छी स्ट्रेंथ एक्सरसाइज़: कुर्सी से उठना, स्टेप-अप, वज़न लेकर चलना और बैलेंस। ताक़त, गिरने और देर से शुरू करने पर रिसर्च क्या कहती है, साथ में एक सैंपल हफ़्ता।",
  h1: "60 के बाद सबसे अच्छी स्ट्रेंथ एक्सरसाइज़: 7 मूव्स और एक सैंपल हफ़्ता",
  dek: "ताक़त ही आपको कुर्सी से उठाती है, सीढ़ियाँ चढ़ाती है और पैरों पर स्थिर रखती है। आप इसे अब भी बना सकते हैं। एक कुर्सी, एक किचन काउंटर और हफ़्ते में तीन छोटे सेशन।",
  updated: "अपडेट: 31 अक्टूबर 2026",
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
    whatsappText: "नमस्ते सुस्मित, मैंने 60 के बाद स्ट्रेंथ एक्सरसाइज़ का लेख पढ़ा और कंसल्टेशन बुक करना चाहता/चाहती हूँ",
    skip: "सामग्री पर जाएँ",
    crumb: "60 के बाद सबसे अच्छी स्ट्रेंथ एक्सरसाइज़",
  },
  intro: [
    "60 के बाद लक्ष्य सीधा है। जो करते हैं, करते रहें। बिना किसी की मदद के।",
    "65 और उससे ज़्यादा उम्र वालों के लिए WHO की सलाह: अलग-अलग तरह की एक्टिविटी जिसमें ज़ोर बैलेंस और ताक़त पर हो, मध्यम या उससे ज़्यादा तीव्रता पर, हफ़्ते में 3 या ज़्यादा दिन। ताकि आप सक्षम रहें, और गिरने से बचें।{1}",
    "इस उम्र में भी वज़न उठाना काम करता है। एक Cochrane रिव्यू ने 6,700 बुज़ुर्गों पर 121 ट्रायल्स को जोड़ा। प्रोग्रेसिव स्ट्रेंथ ट्रेनिंग का ताक़त पर बड़ा असर हुआ। कुर्सी से उठना मध्यम से काफ़ी बेहतर हुआ। चलने की रफ़्तार थोड़ी बेहतर हुई।{3}",
    "आपको चाहिए एक मज़बूत कुर्सी, किचन काउंटर, उठाने के लिए कुछ, और 30 से 40 मिनट।",
  ],
  listHeading: "60 के बाद 7 सबसे अच्छी स्ट्रेंथ एक्सरसाइज़",
  items: [
    {
      name: "कुर्सी से उठना-बैठना (सिट-टू-स्टैंड)",
      why: "दिन में सबसे ज़्यादा की जाने वाली मूव। Cochrane रिव्यू में, कुर्सी से उठना सबसे साफ़ फ़ायदों में से एक था।{3} घड़ी देखकर पाँच बार कुर्सी से उठना एक छोटी टेस्ट बैटरी का हिस्सा भी है, जो 71 और उससे ज़्यादा उम्र के 5,000 से ज़्यादा लोगों पर इस्तेमाल हुई। बैलेंस और चलने की रफ़्तार के साथ, ये स्कोर डिसएबिलिटी से गहराई से जुड़े थे, और कम समय में मृत्यु और नर्सिंग-होम में भर्ती का अनुमान देते थे।{8} यह जुड़ाव है, कारण नहीं। पर दिखाता है कि कौन-सी ताक़त मायने रखती है।",
      how: "मज़बूत कुर्सी, दीवार से सटी हुई। पैर कूल्हों जितने चौड़े, घुटनों से थोड़ा पीछे। आगे झुकें, नाक पंजों के ऊपर। सीधे खड़े हों। धीरे से बैठें, धम्म से नहीं। शुरू में ज़रूरत हो तो जाँघों पर हाथ रखकर धक्का दें।",
      dose: "8 से 12 के 3 सेट।{2} आसान लगे? छाती पर वज़न पकड़ें, या नीची सीट लें।",
    },
    {
      name: "सबसे नीचे की सीढ़ी पर स्टेप-अप",
      why: "सीढ़ियाँ, फ़ुटपाथ, बस की सीढ़ी। नर्सिंग होम में रहने वाले 100 कमज़ोर बुज़ुर्गों पर एक ट्रायल में, औसत उम्र 87, दस हफ़्ते की हाई-इंटेंसिटी स्ट्रेंथ ट्रेनिंग से ताक़त 113% और सीढ़ी चढ़ने की पावर 28% बढ़ी। चलने की रफ़्तार लगभग 12% बढ़ी।{6} एक छोटा ट्रायल, बहुत बुज़ुर्ग और कमज़ोर लोगों में। यह दिखाता है कि अभी कितना पाना बाक़ी है।",
      how: "सबसे नीचे की सीढ़ी, एक हाथ रेलिंग पर। पूरा पैर सीढ़ी पर। उस एड़ी से धक्का दें और सीधे खड़े हों। धीरे से उतरें, वही पैर पहले। फिर दूसरी तरफ़।",
      dose: "हर पैर पर 6 से 10 के 2 से 3 सेट। फिर ऊँची सीढ़ी, या खाली हाथ में वज़न।",
    },
    {
      name: "डम्बल या थैले के साथ हिप हिंज",
      why: "फ़र्श से चीज़ें उठाना। कपड़े, चावल का थैला, पोता-पोती। हिंज कूल्हों को काम करना सिखाता है।",
      how: "वज़न जाँघों के सामने। घुटने ढीले। कूल्हे पीछे धकेलें, पीठ लंबी, और वज़न को घुटनों तक फिसलने दें। ग्लूट्स कसकर खड़े हों। पहले झाड़ू के डंडे से सीखें।",
      dose: "8 से 12 के 3 सेट।",
    },
    {
      name: "पुश-अप: दीवार, फिर काउंटर, फिर नीची सीढ़ी",
      why: "ख़ुद को ऊपर धकेलना। फ़र्श से, बाथटब से, बिस्तर से।",
      how: "हाथ दीवार पर कंधे की ऊँचाई पर। शरीर एक सीधी लाइन। छाती दीवार की ओर ले जाएँ। धक्का देकर वापस। जब 12 आसान लगें, हाथ नीचे ले जाएँ: किचन काउंटर, फिर मज़बूत टेबल, फिर सीढ़ी।",
      dose: "8 से 12 के 2 से 3 सेट।",
    },
    {
      name: "एक हाथ से रो",
      why: "खींचना। भारी दरवाज़े खोलना, थैला गाड़ी में रखना। यह सारे धक्के और बैठने को भी संतुलित करता है।",
      how: "एक हाथ काउंटर या मज़बूत कुर्सी पर। दूसरे हाथ में वज़न। उसे कूल्हे की ओर खींचें, कोहनी पास। रुकें। धीरे से नीचे। वज़न नहीं है? किताबों से भरा थैला चलेगा।",
      dose: "हर हाथ से 8 से 12 के 2 से 3 सेट।",
    },
    {
      name: "वज़न लेकर चलना (कैरी)",
      why: "सब्ज़ी का थैला, बाल्टी, सूटकेस उठाकर चलना। पकड़, कंधे, धड़ और पैर, सब एक साथ।",
      how: "हर हाथ में एक वज़न, या एक ही हाथ में। सीधे खड़े हों। साफ़ फ़र्श पर सामान्य चाल से चलें। झुकें नहीं। रखते समय हिंज करें, पीठ गोल न करें।",
      dose: "20 से 30 मीटर की 3 से 4 वॉक, या 30 से 40 सेकंड।",
    },
    {
      name: "बैलेंस: पैर साथ, एड़ी-से-पंजा, एक पैर",
      why: "सिर्फ़ ताक़त गिरने से बचाव की पूरी योजना नहीं है। 108 ट्रायल्स (23,407 लोग, औसत उम्र 76) के एक Cochrane रिव्यू में बैलेंस और फ़ंक्शनल एक्सरसाइज़ से गिरने की दर 24% कम हुई। जिन प्रोग्राम्स में इनके साथ स्ट्रेंथ भी जोड़ी गई, उनमें शायद 34% कम हुई। सिर्फ़ स्ट्रेंथ ट्रेनिंग का गिरने पर असर अनिश्चित रहा।{4} इसलिए हम दोनों करते हैं।",
      how: "किचन काउंटर के पास खड़े हों, उँगलियों के सिरे उस पर। पैर साथ-साथ। फिर एक एड़ी दूसरे पैर के पंजे से सटाकर। फिर एक पैर पर। जब कोई पोज़िशन स्थिर हो जाए, उँगलियाँ हटा लें।",
      dose: "हर सेशन में, और चलने वाले दिनों में भी: हर पोज़िशन में 30 सेकंड तक के 2 से 3 होल्ड, हर तरफ़।",
    },
  ],
  enoughHeading: "कितनी बार, कितना भारी, और क्या अब देर हो गई?",
  enough: [
    "हफ़्ते में दो या तीन स्ट्रेंथ सेशन। 121 में से ज़्यादातर ट्रायल्स में लोगों ने हफ़्ते में दो से तीन बार, ऊँची तीव्रता पर ट्रेनिंग की।{3} बैलेंस जोड़ें, ताकि कुल 3 या ज़्यादा दिन हो जाएँ।{1}",
    "ऐसे वज़न से शुरू करें जिसे आप 8 से 12 बार उठा सकें। जब टारगेट से 1 या 2 रेप ज़्यादा कर लें, 2 से 10% बढ़ाएँ।{2} आख़िरी दो रेप मेहनत वाले लगने चाहिए। पर इतना भारी कभी नहीं कि साँस रोककर ज़ोर लगाना पड़े।",
    "देर नहीं हुई है। 75 और उससे ज़्यादा उम्र वालों पर 22 ट्रायल्स के एक रिव्यू में स्ट्रेंथ ट्रेनिंग से मसल की ताक़त और साइज़ दोनों बढ़े। 80 से ज़्यादा उम्र वालों में भी ताक़त बढ़ी।{5}",
    "तेज़ी से उठें, धीरे से बैठें। 566 स्वस्थ बुज़ुर्गों (औसत उम्र 70) पर 20 ट्रायल्स के एक रिव्यू ने जितना तेज़ हो सके उठाने की तुलना एक जैसी रफ़्तार से उठाने से की। तेज़ उठाने से फ़िज़िकल फ़ंक्शन में थोड़ा अतिरिक्त फ़ायदा जुड़ा दिखा। सबूत की निश्चितता कम थी।{7} ऊपर जाते वक़्त तेज़ी तभी, जब फ़ॉर्म पक्का हो।",
    "शुरुआत में जोड़ों और मसल्स में थोड़ा दर्द आम है। Cochrane रिव्यू में गंभीर समस्याएँ कम थीं, और किसी को सीधे ट्रेनिंग की वजह से नहीं बताया गया।{3}",
  ],
  sampleHeading: "60 के बाद के लिए एक सैंपल हफ़्ता",
  sampleLabel: "सिर्फ़ सैंपल। प्रिस्क्रिप्शन नहीं। इसे अपने शरीर, अपनी सेहत और अपने इतिहास के हिसाब से बदलें।",
  sample: [
    "सोमवार: स्ट्रेंथ A। वार्म-अप, सिट-टू-स्टैंड, पुश-अप, एक हाथ से रो, कैरी। आख़िर में बैलेंस।",
    "मंगलवार: वॉक। किचन काउंटर पर बैलेंस होल्ड।",
    "बुधवार: स्ट्रेंथ B। वार्म-अप, स्टेप-अप, हिप हिंज, एक हाथ से रो, कैरी। आख़िर में बैलेंस।",
    "गुरुवार: वॉक, या आराम।",
    "शुक्रवार: फिर से स्ट्रेंथ A।",
    "शनिवार: लंबी वॉक।",
    "रविवार: आराम।",
    "स्ट्रेंथ वाले दिनों के बीच एक दिन आराम। हर स्ट्रेंथ वाला दिन बैलेंस पर ख़त्म होता है।",
  ],
  coachedHeading: "लाइव कोचिंग चाहिए?",
  coached: [
    "Return इसके लिए सही बैठता है। 45 मिनट, महीने में 12 सेशन, एक दिन छोड़कर। हर बार सेशन के बीच एक दिन आराम। पहले मूवमेंट दोबारा बनाते हैं, फिर वज़न जोड़ते हैं।",
    "पूरा घंटा चाहिए? Iron Hour 60 मिनट का है, 1:1। मिनट 0 पर सेट-अप: कुर्सी, काउंटर और कैमरा ऐसे कि पूरा शरीर फ़्रेम में हो। मिनट 4 से वार्म-अप। मिनट 14 पर मुख्य लिफ़्ट। 28 पर एक्सेसरीज़: रो, कैरी, बैलेंस। 50 पर कूल-डाउन।",
    "Lean Reset महीने में 20 सेशन, 1:1। Open Floor एक छोटा ग्रुप है।",
    "Google Meet, Zoom या FaceTime पर लाइव कोचिंग। पुणे से। हिंदी या अंग्रेज़ी में। IST पर। अभी तय नहीं? 30 मिनट के कंसल्टेशन से शुरू करें। यह बातचीत है, ट्रेनिंग नहीं। बुकिंग सिर्फ़ समय रोकती है। फ़ीस सीधे तय होती है।",
  ],
  safetyHeading: "शुरू करने से पहले",
  safety:
    "सामान्य जानकारी, मेडिकल सलाह नहीं। ACSM के स्क्रीनिंग मॉडल के अनुसार: अगर आप निष्क्रिय हैं, कोई लक्षण नहीं हैं और दिल, मेटाबॉलिक या किडनी की कोई ज्ञात बीमारी नहीं है, तो आप बिना मेडिकल अनुमति के हल्की से मध्यम एक्सरसाइज़ शुरू करके धीरे-धीरे बढ़ा सकते हैं। अगर इनमें से कोई बीमारी है, या सीने में दर्द, असामान्य साँस फूलना या चक्कर जैसे लक्षण हैं, तो पहले मेडिकल अनुमति लें।{9} जगह सुरक्षित बनाएँ: दीवार से सटी मज़बूत कुर्सी, हाथ की पहुँच में काउंटर या रेलिंग, साफ़ फ़र्श, अच्छी रोशनी, और फिसलन न देने वाले जूते। उठाते समय साँस छोड़ें। साँस न रोकें। अगर आपको ऑस्टियोपोरोसिस है, जोड़ बदला गया है, या हाल में गिरे हैं, तो अपने डॉक्टर या फ़िज़ियोथेरेपिस्ट से पूछें कि कौन-सी मूव्स और कितना वज़न आपके लिए ठीक है। सीने में दर्द, चक्कर या तेज़ दर्द हो तो रुक जाएँ।",
};

const es: PostCopy = {
  metaTitle: "Mejores ejercicios de fuerza para mayores de 60: 7 ejercicios y una semana | Jalan PT",
  metaDescription:
    "Los 7 mejores ejercicios de fuerza para mayores de 60: levantarse de la silla, subir al escalón, cargar peso y equilibrio. Qué dice la investigación sobre fuerza, caídas y empezar tarde, y una semana de ejemplo.",
  h1: "Mejores ejercicios de fuerza para mayores de 60: 7 ejercicios y una semana de ejemplo",
  dek: "La fuerza es lo que te levanta de la silla, te sube la escalera y te mantiene firme sobre los pies. Todavía puedes construirla. Una silla, la encimera de la cocina y tres sesiones cortas a la semana.",
  updated: "Actualizado el 31 de octubre de 2026",
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
    whatsappText: "Hola Susmit, leí el artículo sobre ejercicios de fuerza para mayores de 60 y quiero reservar una consulta",
    skip: "Saltar al contenido",
    crumb: "Mejores ejercicios de fuerza para mayores de 60",
  },
  intro: [
    "Después de los 60, el objetivo es sencillo. Seguir haciendo lo que haces. Sin ayuda.",
    "La recomendación de la OMS para mayores de 65: actividad variada que dé prioridad al equilibrio y la fuerza, a intensidad moderada o mayor, 3 o más días a la semana. Para mantener tu capacidad y prevenir caídas.{1}",
    "Levantar peso funciona a esta edad. Una revisión Cochrane reunió 121 ensayos con 6.700 personas mayores. El entrenamiento de fuerza progresivo tuvo un efecto grande sobre la fuerza. Levantarse de una silla mejoró de forma moderada a grande. La velocidad al caminar mejoró de forma modesta.{3}",
    "Necesitas una silla firme, la encimera de la cocina, algo que levantar y de 30 a 40 minutos.",
  ],
  listHeading: "Los 7 mejores ejercicios de fuerza para mayores de 60",
  items: [
    {
      name: "Levantarse de la silla",
      why: "El movimiento que más repites al día. En la revisión Cochrane, levantarse de una silla fue una de las mejoras más claras.{3} Cinco levantadas de silla contra el reloj forman parte también de una batería breve de pruebas usada en más de 5.000 personas de 71 años o más. Junto con el equilibrio y la velocidad al caminar, esas puntuaciones se asociaron con fuerza a la discapacidad, y predijeron la muerte y el ingreso en una residencia a corto plazo.{8} Una asociación, no una causa. Pero muestra qué fuerza importa.",
      how: "Silla firme contra la pared. Pies a la anchura de la cadera, un poco por detrás de las rodillas. Inclínate hacia delante, la nariz sobre los dedos de los pies. Ponte de pie, erguido. Siéntate despacio, sin dejarte caer. Al principio, apóyate en los muslos si lo necesitas.",
      dose: "3 series de 8 a 12.{2} ¿Fácil? Sujeta un peso en el pecho o usa un asiento más bajo.",
    },
    {
      name: "Subida al primer escalón",
      why: "Escaleras, bordillos, el escalón del autobús. En un ensayo con 100 residentes frágiles de residencias, de 87 años de media, diez semanas de entrenamiento de fuerza de alta intensidad aumentaron la fuerza un 113% y la potencia al subir escaleras un 28%. La velocidad al caminar subió alrededor de un 12%.{6} Un solo ensayo pequeño, en personas muy mayores y frágiles. Muestra cuánto queda por ganar.",
      how: "Primer escalón, una mano en la barandilla. Todo el pie sobre el escalón. Empuja con ese talón y ponte erguido. Baja despacio, primero la misma pierna. Luego el otro lado.",
      dose: "2 a 3 series de 6 a 10 por pierna. Después, un escalón más alto o un peso en la mano libre.",
    },
    {
      name: "Bisagra de cadera con mancuernas o una bolsa",
      why: "Recoger cosas del suelo. La ropa, un saco de arroz, un nieto. La bisagra enseña a la cadera a hacer el trabajo.",
      how: "Pesos delante de los muslos. Rodillas suaves. Lleva la cadera atrás, la espalda larga, y deja que los pesos bajen hasta las rodillas. Sube apretando los glúteos. Apréndelo primero con el palo de una escoba.",
      dose: "3 series de 8 a 12.",
    },
    {
      name: "Flexión: pared, luego encimera, luego un escalón bajo",
      why: "Empujarte hacia arriba. Desde el suelo, para salir de la bañera, para salir de la cama.",
      how: "Manos en la pared a la altura de los hombros. El cuerpo en una línea recta. Lleva el pecho hacia la pared. Empuja para alejarte. Cuando 12 resulten fáciles, baja las manos: la encimera, luego una mesa firme, luego un escalón.",
      dose: "2 a 3 series de 8 a 12.",
    },
    {
      name: "Remo a una mano",
      why: "Tirar. Abrir puertas pesadas, meter una bolsa en el coche. También equilibra tanto empujar y tanto estar sentado.",
      how: "Una mano en la encimera o en una silla firme. El peso en la otra mano. Llévalo hacia la cadera, el codo cerca. Pausa. Baja despacio. ¿Sin peso? Sirve una bolsa con libros.",
      dose: "2 a 3 series de 8 a 12 por brazo.",
    },
    {
      name: "Cargar y caminar",
      why: "Llevar la compra, un cubo, una maleta. Agarre, hombros, tronco y piernas, todo a la vez.",
      how: "Un peso en cada mano, o uno en una sola. Erguido. Camina a paso normal por un suelo despejado. No te inclines. Déjalos en el suelo con una bisagra, no con la espalda redondeada.",
      dose: "3 a 4 recorridos de 20 a 30 metros, o de 30 a 40 segundos.",
    },
    {
      name: "Equilibrio: pies juntos, talón con punta, una pierna",
      why: "La fuerza por sí sola no es el plan contra las caídas. Una revisión Cochrane de 108 ensayos (23.407 personas, 76 años de media) encontró que los ejercicios de equilibrio y funcionales redujeron la tasa de caídas un 24%. Los programas que les sumaron fuerza probablemente la redujeron un 34%. Para el entrenamiento de fuerza solo, el efecto sobre las caídas fue incierto.{4} Por eso hacemos las dos cosas.",
      how: "De pie junto a la encimera, con las yemas de los dedos apoyadas. Pies uno al lado del otro. Luego un talón contra la punta del otro pie. Luego sobre una pierna. Cuando una posición sea estable, levanta los dedos.",
      dose: "En cada sesión, y también los días de caminar: 2 a 3 apoyos de hasta 30 segundos por posición, por lado.",
    },
  ],
  enoughHeading: "¿Cuántas veces, cuánto peso, y es demasiado tarde?",
  enough: [
    "Dos o tres sesiones de fuerza a la semana. En la mayoría de los 121 ensayos, la gente entrenó de dos a tres veces por semana, a intensidad alta.{3} Suma el equilibrio para llegar a 3 o más días.{1}",
    "Empieza con una carga que puedas levantar de 8 a 12 veces. Cuando superes el objetivo en 1 o 2 repeticiones, añade un 2 a 10%.{2} Las dos últimas repeticiones deben costar. Nunca tan pesado que contengas la respiración y hagas fuerza a lo bruto.",
    "No es demasiado tarde. Una revisión de 22 ensayos en personas de 75 años o más encontró que el entrenamiento de fuerza aumentó la fuerza y el tamaño muscular. La fuerza mejoró incluso en los mayores de 80.{5}",
    "Sube rápido, baja despacio. Una revisión de 20 ensayos en 566 personas mayores sanas (70 años de media) comparó levantar lo más rápido posible con levantar a ritmo constante. Levantar rápido se asoció a una mejora adicional modesta de la función física. La certeza de la evidencia fue baja.{7} Rápido en la subida, solo cuando la técnica esté firme.",
    "Al principio es frecuente algo de dolor articular y muscular. En la revisión Cochrane, los problemas graves fueron raros, y ninguno se atribuyó directamente al entrenamiento.{3}",
  ],
  sampleHeading: "Una semana de ejemplo para mayores de 60",
  sampleLabel: "Solo un ejemplo. No es una prescripción. Ajústalo a tu cuerpo, tu salud y tu historial.",
  sample: [
    "Lunes: Fuerza A. Calentamiento, levantarse de la silla, flexión, remo a una mano, cargar y caminar. Equilibrio al final.",
    "Martes: un paseo. Apoyos de equilibrio en la encimera.",
    "Miércoles: Fuerza B. Calentamiento, subida al escalón, bisagra de cadera, remo a una mano, cargar y caminar. Equilibrio al final.",
    "Jueves: un paseo, o descanso.",
    "Viernes: Fuerza A otra vez.",
    "Sábado: un paseo más largo.",
    "Domingo: descanso.",
    "Un día de descanso entre los días de fuerza. Cada día de fuerza termina con equilibrio.",
  ],
  coachedHeading: "¿Lo quieres con un entrenador en directo?",
  coached: [
    "Return encaja bien aquí. 45 minutos, 12 sesiones al mes en días alternos. Siempre un día de descanso entre sesiones. Primero reconstruimos el movimiento, luego añadimos carga.",
    "¿Prefieres la hora completa? Iron Hour son 60 minutos, 1:1. Preparación en el minuto 0: silla, encimera y cámara colocadas para que se vea todo tu cuerpo. Calentamiento desde el minuto 4. El ejercicio principal en el 14. Accesorios en el 28: remos, cargas, equilibrio. Vuelta a la calma en el 50.",
    "Lean Reset son 20 sesiones al mes, 1:1. Open Floor es un grupo pequeño.",
    "En directo por Google Meet, Zoom o FaceTime. Desde Pune. En hindi o inglés. En horario IST. ¿Aún no lo tienes claro? Empieza con una consulta de 30 minutos. Es una conversación, no un entrenamiento. La reserva solo guarda una hora. La tarifa se acuerda directamente.",
  ],
  safetyHeading: "Antes de empezar",
  safety:
    "Información general, no consejo médico. El modelo de cribado del ACSM dice: si eres inactivo, no tienes síntomas ni enfermedad cardíaca, metabólica o renal conocida, puedes empezar con ejercicio ligero a moderado sin autorización médica e ir subiendo poco a poco. Si tienes una de esas enfermedades, o síntomas como dolor en el pecho, falta de aire inusual o mareo, consigue antes la autorización médica.{9} Prepara un espacio seguro: una silla firme contra la pared, una encimera o barandilla al alcance, el suelo despejado, buena luz y calzado que agarre. Suelta el aire al levantar. No contengas la respiración. Si tienes osteoporosis o una prótesis articular, o te has caído hace poco, pregunta a tu médico o fisioterapeuta qué ejercicios y cargas te convienen. Para si notas dolor en el pecho, mareo o un dolor agudo.",
};

const zh: PostCopy = {
  metaTitle: "最适合60岁以上人群的力量训练：7个动作和一周示例 | Jalan PT",
  metaDescription:
    "最适合60岁以上人群的7个力量训练动作：从椅子上站起、台阶上步、负重行走和平衡练习。研究对力量、跌倒和晚开始怎么说，以及一周训练示例。",
  h1: "最适合60岁以上人群的力量训练：7个动作和一周示例",
  dek: "力量让你从椅子上站起来、走上楼梯、站得稳。你现在依然可以练出来。一把椅子、一个厨房台面，每周三次短训练。",
  updated: "更新于2026年10月31日",
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
    whatsappText: "你好Susmit，我读了60岁以上人群力量训练的文章，想预约一次咨询",
    skip: "跳到正文",
    crumb: "最适合60岁以上人群的力量训练",
  },
  intro: [
    "60岁以后，目标很简单。继续做你现在做的事。不用别人帮忙。",
    "世界卫生组织对65岁及以上人群的建议：进行多样化的身体活动，重点放在平衡和力量训练上，强度达到中等或以上，每周3天或以上。以保持身体机能，并预防跌倒。{1}",
    "这个年龄练力量依然有效。一项Cochrane综述汇总了121项试验、6,700名老年人。渐进式力量训练对力量有很大的效果。从椅子上站起的能力有中等到很大的改善。步行速度有小幅改善。{3}",
    "你需要一把结实的椅子、一个厨房台面、一件可以举的东西，以及30到40分钟。",
  ],
  listHeading: "最适合60岁以上人群的7个力量训练动作",
  items: [
    {
      name: "从椅子上坐下站起",
      why: "你每天做得最多的动作。在那项Cochrane综述中，从椅子上站起是最明确的改善之一。{3}计时完成5次从椅子上站起，也是一套简短测试的一部分，这套测试用于5,000多名71岁及以上的老人。结合平衡和步行速度，这些分数与失能密切相关，并能预测短期内的死亡和入住养老院。{8}这是关联，不是因果。但它说明了哪种力量最重要。",
      how: "结实的椅子靠墙放。双脚与髋同宽，略在膝盖后方。身体前倾，鼻子在脚尖上方。站直。慢慢坐下，不要一下坐落。刚开始需要的话，可以用手撑大腿。",
      dose: "3组，每组8到12次。{2}太容易？在胸前抱一个重物，或换一个更低的座位。",
    },
    {
      name: "最下面一级台阶上步",
      why: "楼梯、路沿、上公交车的那一步。在一项针对100名体弱养老院居民的试验中，平均年龄87岁，十周高强度力量训练让力量提高了113%，爬楼梯功率提高了28%。步行速度提高了约12%。{6}这只是一项小型试验，对象是非常年长且体弱的人。它说明还有多少进步空间。",
      how: "最下面一级台阶，一只手扶栏杆。整只脚踩在台阶上。用那只脚跟发力，站直。慢慢下来，同一条腿先下。然后换另一侧。",
      dose: "每条腿2到3组，每组6到10次。然后换更高的台阶，或空着的手拿一个重物。",
    },
    {
      name: "用哑铃或袋子做髋铰链",
      why: "从地上捡东西。衣服、一袋米、孙子孙女。髋铰链教会髋部去出力。",
      how: "重物放在大腿前方。膝盖微屈。臀部向后推，背部拉长，让重物沿大腿滑到膝盖。夹紧臀部站起来。先用扫帚柄练会动作。",
      dose: "3组，每组8到12次。",
    },
    {
      name: "俯卧撑：墙壁，然后台面，然后低台阶",
      why: "把自己撑起来。从地上、从浴缸里、从床上。",
      how: "双手撑墙，与肩同高。身体成一条直线。胸口靠近墙面。推开。当12次变得轻松时，把手放低：厨房台面，然后结实的桌子，然后台阶。",
      dose: "2到3组，每组8到12次。",
    },
    {
      name: "单臂划船",
      why: "拉的动作。推开沉重的门，把包放进车里。它也平衡了大量的推和久坐。",
      how: "一只手撑在台面或结实的椅子上。另一只手拿重物。把它拉向髋部，手肘贴近身体。停一下。慢慢放下。没有重物？装满书的袋子也行。",
      dose: "每只手臂2到3组，每组8到12次。",
    },
    {
      name: "负重行走",
      why: "提购物袋、水桶、行李箱。握力、肩膀、躯干和腿，一起练到。",
      how: "两只手各拿一个重物，或只一只手拿。站直。在没有杂物的地面上用正常步速走。不要歪向一侧。放下时用髋铰链，不要弓背。",
      dose: "3到4趟，每趟20到30米，或30到40秒。",
    },
    {
      name: "平衡：双脚并拢、脚跟对脚尖、单腿站",
      why: "单靠力量并不是防跌倒的方案。一项Cochrane综述纳入108项试验（23,407人，平均76岁），发现平衡和功能性练习让跌倒率降低了24%。在此基础上加入力量训练的方案，可能降低34%。单纯的力量训练对跌倒的效果尚不确定。{4}所以我们两者都做。",
      how: "站在厨房台面旁，指尖搭在台面上。双脚并排。然后一只脚的脚跟贴着另一只脚的脚尖。然后单腿站。某个姿势站稳后，把指尖抬离台面。",
      dose: "每次训练都做，散步的日子也做：每个姿势2到3次，每次最多30秒，每一侧。",
    },
  ],
  enoughHeading: "多久练一次，用多重，现在开始晚不晚？",
  enough: [
    "每周两到三次力量训练。在121项试验中的大多数里，参与者每周训练两到三次，强度较高。{3}再加上平衡练习，让总数达到每周3天或以上。{1}",
    "从你能举8到12次的重量开始。当你比目标多做1到2次时，加重2%到10%。{2}最后两次应该吃力。但绝不要重到需要憋气硬撑。",
    "现在开始不晚。一项纳入22项试验、针对75岁及以上人群的综述发现，力量训练增加了肌肉力量和肌肉体积。即使在80岁及以上的人中，力量也有提高。{5}",
    "快速站起，慢慢坐下。一项纳入20项试验、566名健康老年人（平均70岁）的综述，比较了尽可能快地举起和匀速举起。快速举起与身体功能的小幅额外改善相关。证据的确定性较低。{7}只有在动作稳定之后，上升时才加速。",
    "刚开始出现一些关节疼痛和肌肉酸痛很常见。在那项Cochrane综述中，严重问题很少见，也没有一例被报告为训练直接导致。{3}",
  ],
  sampleHeading: "60岁以上人群的一周示例",
  sampleLabel: "仅为示例。不是处方。请根据你的身体、健康状况和过往经历调整。",
  sample: [
    "周一：力量A。热身、从椅子上坐下站起、俯卧撑、单臂划船、负重行走。最后做平衡。",
    "周二：散步。在厨房台面旁做平衡练习。",
    "周三：力量B。热身、台阶上步、髋铰链、单臂划船、负重行走。最后做平衡。",
    "周四：散步，或休息。",
    "周五：再做一次力量A。",
    "周六：走得更久一些。",
    "周日：休息。",
    "两次力量训练之间休息一天。每个力量训练日都以平衡练习结束。",
  ],
  coachedHeading: "想要教练实时指导？",
  coached: [
    "Return很适合这种情况。每次45分钟，每月12次，隔天一次。每两次之间都休息一天。我们先重建动作，再增加负荷。",
    "想要完整的一小时？Iron Hour是60分钟，一对一。第0分钟准备：摆好椅子、台面和摄像头，让全身都在画面里。第4分钟开始热身。第14分钟进入主项。第28分钟做辅助练习：划船、负重行走、平衡。第50分钟放松。",
    "Lean Reset每月20次，一对一。Open Floor是小组课。",
    "通过Google Meet、Zoom或FaceTime实时指导。来自浦那。印地语或英语。按印度标准时间（IST）。还没决定？先从30分钟的咨询开始。那是一次交谈，不是训练。预约只是保留一个时间。费用直接商定。",
  ],
  safetyHeading: "开始之前",
  safety:
    "一般信息，不是医疗建议。ACSM的筛查模式指出：如果你平时不运动、没有症状，也没有已知的心脏、代谢或肾脏疾病，可以不经医生许可，从低到中等强度开始，逐步增加。如果你有上述疾病之一，或有胸痛、异常气短或头晕等症状，请先获得医生许可。{9}把环境布置安全：结实的椅子靠墙、伸手可及的台面或栏杆、没有杂物的地面、充足的光线，以及防滑的鞋。举起时呼气。不要憋气。如果你有骨质疏松、做过关节置换，或最近摔倒过，请询问你的医生或物理治疗师哪些动作和负荷适合你。感到胸痛、头晕或剧痛就停下。",
};

const ja: PostCopy = {
  metaTitle: "60歳以上に最適な筋トレ：7種目と1週間のサンプル | Jalan PT",
  metaDescription:
    "60歳以上に最適な筋トレ7種目：椅子からの立ち上がり、ステップアップ、キャリー、バランス。筋力、転倒、遅く始めることについて研究がどう言っているか、そして1週間のサンプル。",
  h1: "60歳以上に最適な筋トレ：7種目と1週間のサンプル",
  dek: "筋力があるから、椅子から立ち、階段を上り、しっかり立っていられる。今からでも鍛えられます。椅子とキッチンカウンター、そして週3回の短いセッション。",
  updated: "2026年10月31日更新",
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
    whatsappText: "こんにちは Susmit さん、60歳以上向け筋トレの記事を読みました。相談を予約したいです",
    skip: "本文へスキップ",
    crumb: "60歳以上に最適な筋トレ",
  },
  intro: [
    "60歳を過ぎたら、目標はシンプル。今していることを、これからも続ける。人の手を借りずに。",
    "WHO の65歳以上への推奨：バランスと筋力に重点を置いた多様な身体活動を、中等度以上の強度で、週3日以上。身体機能を保ち、転倒を防ぐために。{1}",
    "この年齢でも筋トレは効きます。コクランレビューは高齢者6,700人を含む121件の試験をまとめました。漸進的な筋力トレーニングは筋力に大きな効果がありました。椅子からの立ち上がりは中程度から大きく改善。歩行速度はわずかに改善しました。{3}",
    "必要なのは、丈夫な椅子、キッチンカウンター、持ち上げる物、そして30〜40分。",
  ],
  listHeading: "60歳以上に最適な筋トレ7種目",
  items: [
    {
      name: "椅子からの立ち座り",
      why: "1日のうちで一番多く行う動き。そのコクランレビューでは、椅子からの立ち上がりが最もはっきりした改善の一つでした。{3}時間を計って椅子から5回立ち上がるテストは、71歳以上の5,000人超に使われた短いテストバッテリーの一部でもあります。バランスと歩行速度とあわせ、その点数は障害と強く関連し、短期的な死亡と介護施設への入所を予測しました。{8}関連であって、原因ではありません。それでも、どの筋力が大事かがわかります。",
      how: "丈夫な椅子を壁につけて置く。足は腰幅、膝より少し後ろ。前に傾き、鼻をつま先の上に。まっすぐ立つ。ゆっくり座る。ドスンと落ちない。最初は必要なら太ももに手をついて押してかまいません。",
      dose: "8〜12回を3セット。{2}簡単なら、胸の前で重りを持つか、低い椅子にする。",
    },
    {
      name: "階段の一段目でステップアップ",
      why: "階段、縁石、バスのステップ。介護施設に入所する虚弱な高齢者100人（平均87歳）の試験では、10週間の高強度筋力トレーニングで筋力が113%、階段を上るパワーが28%向上しました。歩行速度は約12%上がりました。{6}とても高齢で虚弱な人を対象にした、小さな試験一つです。まだどれだけ伸びしろがあるかを示しています。",
      how: "階段の一段目、片手は手すりに。足裏全体を段に乗せる。そのかかとで押してまっすぐ立つ。同じ脚からゆっくり下りる。反対側も。",
      dose: "片脚6〜10回を2〜3セット。次は高い段か、空いた手に重りを。",
    },
    {
      name: "ダンベルか袋でヒップヒンジ",
      why: "床から物を拾う。洗濯物、米袋、孫。ヒンジは股関節に仕事をさせることを覚えさせます。",
      how: "重りは太ももの前。膝はゆるめる。お尻を後ろへ引き、背中は長く、重りを膝まで滑らせる。お尻を締めて立つ。まずはほうきの柄で動きを覚える。",
      dose: "8〜12回を3セット。",
    },
    {
      name: "プッシュアップ：壁、次にカウンター、次に低い段",
      why: "自分の体を押し上げる。床から、浴槽から、ベッドから。",
      how: "肩の高さで壁に手をつく。体は一直線。胸を壁に近づける。押し返す。12回が楽になったら手を低く：キッチンカウンター、次に丈夫なテーブル、次に階段の段。",
      dose: "8〜12回を2〜3セット。",
    },
    {
      name: "ワンアームロウ",
      why: "引く動き。重いドアを開ける、車に荷物を積む。押す動きと座りっぱなしのバランスもとれます。",
      how: "片手をカウンターか丈夫な椅子に。反対の手に重り。肘を体に近づけたまま、腰へ引く。一瞬止める。ゆっくり下ろす。重りがない？本を入れた袋で十分です。",
      dose: "片腕8〜12回を2〜3セット。",
    },
    {
      name: "キャリー（持って歩く）",
      why: "買い物袋、バケツ、スーツケースを運ぶ。握力、肩、体幹、脚を一度に。",
      how: "両手に一つずつ、または片手だけに重り。まっすぐ立つ。物のない床を普段の速さで歩く。傾かない。下ろすときはヒンジで、背中を丸めない。",
      dose: "20〜30メートル、または30〜40秒を3〜4本。",
    },
    {
      name: "バランス：足をそろえる、かかととつま先をつける、片脚",
      why: "筋力だけでは転倒対策になりません。108件の試験（23,407人、平均76歳）のコクランレビューでは、バランス運動と機能的運動で転倒の発生率が24%減りました。それに筋トレを加えたプログラムでは、おそらく34%減りました。筋トレ単独では、転倒への効果ははっきりしませんでした。{4}だから両方やります。",
      how: "キッチンカウンターの横に立ち、指先を乗せる。足を横にそろえる。次に片足のかかとをもう片足のつま先につける。次に片脚。姿勢が安定したら指先を離す。",
      dose: "毎回のセッションで、歩く日にも：各姿勢で最大30秒を2〜3回、左右それぞれ。",
    },
  ],
  enoughHeading: "頻度は？重さは？もう遅い？",
  enough: [
    "筋トレは週2〜3回。121件の試験の多くで、参加者は週2〜3回、高い強度で行っていました。{3}バランスを加えて、合計週3日以上に。{1}",
    "8〜12回挙げられる重さから始める。目標を1〜2回上回ったら2〜10%増やす。{2}最後の2回はきつく感じるくらい。でも、息を止めて力むほど重くはしない。",
    "遅すぎることはありません。75歳以上を対象にした22件の試験のレビューでは、筋トレで筋力と筋肉の大きさが増えました。80歳以上でも筋力は向上しました。{5}",
    "速く立って、ゆっくり座る。健康な高齢者566人（平均70歳）を対象にした20件の試験のレビューで、できるだけ速く挙げる方法と一定のペースで挙げる方法を比べました。速く挙げる方が、身体機能のわずかな上乗せと関連していました。エビデンスの確実性は低いものでした。{7}上げるときに速くするのは、フォームが安定してからです。",
    "始めのうちは、関節の痛みや筋肉痛がある程度はよくあります。そのコクランレビューでは、重い問題はまれで、トレーニングが直接の原因と報告されたものはありませんでした。{3}",
  ],
  sampleHeading: "60歳以上のための1週間のサンプル",
  sampleLabel: "あくまでサンプルです。処方ではありません。体、健康状態、これまでの経験に合わせて調整してください。",
  sample: [
    "月曜：筋トレA。ウォームアップ、椅子からの立ち座り、プッシュアップ、ワンアームロウ、キャリー。最後にバランス。",
    "火曜：散歩。キッチンカウンターでバランス。",
    "水曜：筋トレB。ウォームアップ、ステップアップ、ヒップヒンジ、ワンアームロウ、キャリー。最後にバランス。",
    "木曜：散歩、または休み。",
    "金曜：もう一度筋トレA。",
    "土曜：長めの散歩。",
    "日曜：休み。",
    "筋トレの日の間には休みの日を1日。筋トレの日は毎回バランスで終える。",
  ],
  coachedHeading: "ライブで指導を受けたい？",
  coached: [
    "Return がよく合います。45分、月12回、1日おき。セッションの間には必ず休みの日。まず動きを作り直し、それから負荷を足します。",
    "1時間しっかりやりたい？Iron Hour は60分、1対1。0分にセットアップ：椅子、カウンター、カメラを全身が映るように配置。4分からウォームアップ。14分にメイン種目。28分に補助種目：ロウ、キャリー、バランス。50分にクールダウン。",
    "Lean Reset は月20回、1対1。Open Floor は少人数グループです。",
    "Google Meet、Zoom、FaceTime でライブ指導。プネーから。ヒンディー語か英語で。インド標準時（IST）で。まだ迷っている？30分の相談から始めましょう。会話であって、トレーニングではありません。予約は時間を押さえるだけ。料金は直接決めます。",
  ],
  safetyHeading: "始める前に",
  safety:
    "一般的な情報であり、医療上の助言ではありません。ACSM のスクリーニングモデルでは、運動習慣がなく、症状がなく、心臓・代謝・腎臓の病気が知られていなければ、医師の許可なしに軽〜中程度の運動を始めて徐々に増やしてよいとしています。これらの病気がある場合や、胸の痛み、いつもと違う息切れ、めまいなどの症状がある場合は、先に医師の許可を得てください。{9}安全な環境を：壁につけた丈夫な椅子、手の届く所にカウンターか手すり、片付いた床、十分な明るさ、滑りにくい靴。持ち上げるときに息を吐く。息を止めない。骨粗しょう症がある、人工関節が入っている、最近転んだという場合は、どの種目と重さが合うか医師か理学療法士に相談してください。胸の痛み、めまい、鋭い痛みがあれば中止してください。",
};

const gu: PostCopy = {
  metaTitle: "60 પછી શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો: 7 મૂવ્સ અને એક સેમ્પલ અઠવાડિયું | Jalan PT",
  metaDescription:
    "60 થી વધુ ઉંમરના લોકો માટે 7 શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો: ખુરશી પરથી ઊભા થવું, સ્ટેપ-અપ, વજન લઈને ચાલવું અને બૅલેન્સ. તાકાત, પડી જવા અને મોડેથી શરૂ કરવા વિશે સંશોધન શું કહે છે, સાથે એક સેમ્પલ અઠવાડિયું.",
  h1: "60 પછી શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો: 7 મૂવ્સ અને એક સેમ્પલ અઠવાડિયું",
  dek: "તાકાત જ તમને ખુરશી પરથી ઊભા કરે છે, સીડી ચડાવે છે અને પગ પર સ્થિર રાખે છે. તમે તેને હજુ પણ બનાવી શકો છો. એક ખુરશી, કિચન કાઉન્ટર અને અઠવાડિયે ત્રણ ટૂંકા સેશન.",
  updated: "અપડેટ: 31 ઑક્ટોબર 2026",
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
    whatsappText: "નમસ્તે સુસ્મિત, મેં 60 પછી સ્ટ્રેન્થ કસરતોનો લેખ વાંચ્યો અને કન્સલ્ટેશન બુક કરવું છે",
    skip: "સામગ્રી પર જાઓ",
    crumb: "60 પછી શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો",
  },
  intro: [
    "60 પછી લક્ષ્ય સીધું છે. જે કરો છો, તે કરતા રહો. કોઈની મદદ વગર.",
    "65 અને તેથી વધુ ઉંમરના લોકો માટે WHO ની સલાહ: જુદી જુદી પ્રવૃત્તિ જેમાં ભાર બૅલેન્સ અને તાકાત પર હોય, મધ્યમ કે તેથી વધુ તીવ્રતાએ, અઠવાડિયે 3 કે વધુ દિવસ. જેથી તમે સક્ષમ રહો, અને પડી જવાથી બચો.{1}",
    "આ ઉંમરે પણ વજન ઉપાડવું કામ કરે છે. એક Cochrane રિવ્યૂએ 6,700 વડીલો પરના 121 ટ્રાયલ જોડ્યા. પ્રોગ્રેસિવ સ્ટ્રેન્થ ટ્રેનિંગની તાકાત પર મોટી અસર થઈ. ખુરશી પરથી ઊભા થવામાં મધ્યમથી ઘણો સુધારો થયો. ચાલવાની ઝડપ થોડી સુધરી.{3}",
    "તમને જોઈએ એક મજબૂત ખુરશી, કિચન કાઉન્ટર, ઉપાડવા માટે કંઈક, અને 30 થી 40 મિનિટ.",
  ],
  listHeading: "60 પછી 7 શ્રેષ્ઠ સ્ટ્રેન્થ કસરતો",
  items: [
    {
      name: "ખુરશી પરથી ઊઠ-બેસ (સિટ-ટુ-સ્ટૅન્ડ)",
      why: "દિવસમાં સૌથી વધુ થતી મૂવ. Cochrane રિવ્યૂમાં, ખુરશી પરથી ઊભા થવું સૌથી સ્પષ્ટ ફાયદાઓમાંનું એક હતું.{3} ઘડિયાળ જોઈને પાંચ વાર ખુરશી પરથી ઊભા થવું એ એક ટૂંકી ટેસ્ટ બૅટરીનો ભાગ પણ છે, જે 71 અને તેથી વધુ ઉંમરના 5,000 થી વધુ લોકો પર વપરાઈ. બૅલેન્સ અને ચાલવાની ઝડપ સાથે, આ સ્કોર ડિસેબિલિટી સાથે મજબૂત રીતે જોડાયેલા હતા, અને ટૂંકા ગાળામાં મૃત્યુ અને નર્સિંગ-હોમમાં દાખલ થવાનો અંદાજ આપતા હતા.{8} આ જોડાણ છે, કારણ નહીં. પણ બતાવે છે કે કઈ તાકાત મહત્ત્વની છે.",
      how: "મજબૂત ખુરશી, દીવાલને અડીને. પગ થાપા જેટલા પહોળા, ઘૂંટણથી થોડા પાછળ. આગળ ઝૂકો, નાક પંજાની ઉપર. સીધા ઊભા થાઓ. ધીમેથી બેસો, ધબ્બ દઈને નહીં. શરૂઆતમાં જરૂર હોય તો સાથળ પર હાથ રાખીને ધક્કો આપો.",
      dose: "8 થી 12 ના 3 સેટ.{2} સહેલું લાગે? છાતી પાસે વજન પકડો, અથવા નીચી બેઠક લો.",
    },
    {
      name: "સૌથી નીચેના પગથિયા પર સ્ટેપ-અપ",
      why: "સીડી, ફૂટપાથ, બસનું પગથિયું. નર્સિંગ હોમમાં રહેતા 100 નબળા વડીલો પરના એક ટ્રાયલમાં, સરેરાશ ઉંમર 87, દસ અઠવાડિયાંની હાઈ-ઇન્ટેન્સિટી સ્ટ્રેન્થ ટ્રેનિંગથી તાકાત 113% અને સીડી ચડવાનો પાવર 28% વધ્યો. ચાલવાની ઝડપ લગભગ 12% વધી.{6} એક નાનો ટ્રાયલ, ખૂબ વડીલ અને નબળા લોકોમાં. તે બતાવે છે કે હજુ કેટલું મેળવવાનું બાકી છે.",
      how: "સૌથી નીચેનું પગથિયું, એક હાથ રેલિંગ પર. આખો પગ પગથિયા પર. એ એડીથી ધક્કો આપો અને સીધા ઊભા થાઓ. ધીમેથી ઊતરો, એ જ પગ પહેલાં. પછી બીજી બાજુ.",
      dose: "દરેક પગે 6 થી 10 ના 2 થી 3 સેટ. પછી ઊંચું પગથિયું, અથવા ખાલી હાથમાં વજન.",
    },
    {
      name: "ડમ્બેલ કે થેલી સાથે હિપ હિન્જ",
      why: "જમીન પરથી વસ્તુઓ ઉપાડવી. કપડાં, ચોખાની થેલી, પૌત્ર-પૌત્રી. હિન્જ થાપાને કામ કરતાં શીખવે છે.",
      how: "વજન સાથળની સામે. ઘૂંટણ ઢીલા. થાપા પાછળ ધકેલો, પીઠ લાંબી, અને વજનને ઘૂંટણ સુધી સરકવા દો. ગ્લૂટ્સ કસીને ઊભા થાઓ. પહેલાં સાવરણીના દંડાથી શીખો.",
      dose: "8 થી 12 ના 3 સેટ.",
    },
    {
      name: "પુશ-અપ: દીવાલ, પછી કાઉન્ટર, પછી નીચું પગથિયું",
      why: "પોતાને ઉપર ધકેલવું. જમીન પરથી, બાથટબમાંથી, પથારીમાંથી.",
      how: "હાથ દીવાલ પર ખભાની ઊંચાઈએ. શરીર એક સીધી લીટી. છાતી દીવાલ તરફ લઈ જાઓ. ધક્કો આપીને પાછા. જ્યારે 12 સહેલા લાગે, હાથ નીચે લઈ જાઓ: કિચન કાઉન્ટર, પછી મજબૂત ટેબલ, પછી પગથિયું.",
      dose: "8 થી 12 ના 2 થી 3 સેટ.",
    },
    {
      name: "એક હાથે રો",
      why: "ખેંચવું. ભારે દરવાજા ખોલવા, થેલી ગાડીમાં મૂકવી. તે બધા ધક્કા અને બેસી રહેવાને પણ સંતુલિત કરે છે.",
      how: "એક હાથ કાઉન્ટર કે મજબૂત ખુરશી પર. બીજા હાથમાં વજન. તેને થાપા તરફ ખેંચો, કોણી નજીક. રોકાઓ. ધીમેથી નીચે. વજન નથી? પુસ્તકો ભરેલી થેલી ચાલશે.",
      dose: "દરેક હાથે 8 થી 12 ના 2 થી 3 સેટ.",
    },
    {
      name: "વજન લઈને ચાલવું (કૅરી)",
      why: "શાકની થેલી, ડોલ, સૂટકેસ ઉપાડીને ચાલવું. પકડ, ખભા, ધડ અને પગ, બધું એક સાથે.",
      how: "દરેક હાથમાં એક વજન, અથવા એક જ હાથમાં. સીધા ઊભા રહો. સાફ જમીન પર સામાન્ય ચાલે ચાલો. ઝૂકો નહીં. મૂકતી વખતે હિન્જ કરો, પીઠ ગોળ ન કરો.",
      dose: "20 થી 30 મીટરની 3 થી 4 વૉક, અથવા 30 થી 40 સેકન્ડ.",
    },
    {
      name: "બૅલેન્સ: પગ સાથે, એડી-થી-પંજો, એક પગ",
      why: "ફક્ત તાકાત પડી જવાથી બચવાની આખી યોજના નથી. 108 ટ્રાયલ (23,407 લોકો, સરેરાશ ઉંમર 76) ના એક Cochrane રિવ્યૂમાં બૅલેન્સ અને ફંક્શનલ કસરતોથી પડી જવાનો દર 24% ઘટ્યો. જે પ્રોગ્રામમાં તેની સાથે સ્ટ્રેન્થ પણ ઉમેરાઈ, તેમાં કદાચ 34% ઘટ્યો. ફક્ત સ્ટ્રેન્થ ટ્રેનિંગની પડી જવા પર અસર અનિશ્ચિત રહી.{4} તેથી અમે બંને કરીએ છીએ.",
      how: "કિચન કાઉન્ટર પાસે ઊભા રહો, આંગળીઓના ટેરવાં તેના પર. પગ બાજુ-બાજુમાં. પછી એક એડી બીજા પગના પંજાને અડાડીને. પછી એક પગ પર. જ્યારે કોઈ પોઝિશન સ્થિર થાય, ત્યારે આંગળીઓ ઉપાડી લો.",
      dose: "દરેક સેશનમાં, અને ચાલવાના દિવસોએ પણ: દરેક પોઝિશનમાં 30 સેકન્ડ સુધીના 2 થી 3 હોલ્ડ, દરેક બાજુ.",
    },
  ],
  enoughHeading: "કેટલી વાર, કેટલું ભારે, અને શું હવે મોડું થઈ ગયું?",
  enough: [
    "અઠવાડિયે બે કે ત્રણ સ્ટ્રેન્થ સેશન. 121 માંથી મોટા ભાગના ટ્રાયલમાં લોકોએ અઠવાડિયે બે થી ત્રણ વાર, ઊંચી તીવ્રતાએ ટ્રેનિંગ કરી.{3} બૅલેન્સ ઉમેરો, જેથી કુલ 3 કે વધુ દિવસ થાય.{1}",
    "એવા વજનથી શરૂ કરો જે તમે 8 થી 12 વાર ઉપાડી શકો. જ્યારે ટાર્ગેટથી 1 કે 2 રેપ વધુ કરો, ત્યારે 2 થી 10% વધારો.{2} છેલ્લા બે રેપ મહેનતવાળા લાગવા જોઈએ. પણ ક્યારેય એટલું ભારે નહીં કે શ્વાસ રોકીને જોર કરવું પડે.",
    "મોડું નથી થયું. 75 અને તેથી વધુ ઉંમરના લોકો પરના 22 ટ્રાયલના એક રિવ્યૂમાં સ્ટ્રેન્થ ટ્રેનિંગથી મસલની તાકાત અને કદ બંને વધ્યાં. 80 થી વધુ ઉંમરના લોકોમાં પણ તાકાત વધી.{5}",
    "ઝડપથી ઊભા થાઓ, ધીમેથી બેસો. 566 સ્વસ્થ વડીલો (સરેરાશ ઉંમર 70) પરના 20 ટ્રાયલના એક રિવ્યૂએ શક્ય એટલી ઝડપે ઉપાડવાની સરખામણી એકસરખી ઝડપે ઉપાડવા સાથે કરી. ઝડપથી ઉપાડવું ફિઝિકલ ફંક્શનમાં થોડા વધારાના ફાયદા સાથે જોડાયેલું હતું. પુરાવાની નિશ્ચિતતા ઓછી હતી.{7} ઉપર જતી વખતે ઝડપ ત્યારે જ, જ્યારે ફૉર્મ પાકું હોય.",
    "શરૂઆતમાં સાંધા અને મસલ્સમાં થોડો દુખાવો સામાન્ય છે. Cochrane રિવ્યૂમાં ગંભીર સમસ્યાઓ ભાગ્યે જ હતી, અને કોઈને સીધી ટ્રેનિંગને કારણે ગણાવાઈ નહોતી.{3}",
  ],
  sampleHeading: "60 પછી માટે એક સેમ્પલ અઠવાડિયું",
  sampleLabel: "માત્ર સેમ્પલ. પ્રિસ્ક્રિપ્શન નથી. તમારા શરીર, તમારા સ્વાસ્થ્ય અને તમારા ઇતિહાસ મુજબ બદલો.",
  sample: [
    "સોમવાર: સ્ટ્રેન્થ A. વૉર્મ-અપ, સિટ-ટુ-સ્ટૅન્ડ, પુશ-અપ, એક હાથે રો, કૅરી. છેલ્લે બૅલેન્સ.",
    "મંગળવાર: વૉક. કિચન કાઉન્ટર પાસે બૅલેન્સ હોલ્ડ.",
    "બુધવાર: સ્ટ્રેન્થ B. વૉર્મ-અપ, સ્ટેપ-અપ, હિપ હિન્જ, એક હાથે રો, કૅરી. છેલ્લે બૅલેન્સ.",
    "ગુરુવાર: વૉક, અથવા આરામ.",
    "શુક્રવાર: ફરીથી સ્ટ્રેન્થ A.",
    "શનિવાર: લાંબી વૉક.",
    "રવિવાર: આરામ.",
    "સ્ટ્રેન્થના દિવસો વચ્ચે એક દિવસ આરામ. દરેક સ્ટ્રેન્થનો દિવસ બૅલેન્સથી પૂરો થાય છે.",
  ],
  coachedHeading: "લાઇવ કોચિંગ જોઈએ છે?",
  coached: [
    "Return આ માટે બરાબર બેસે છે. 45 મિનિટ, મહિને 12 સેશન, એકાંતરે દિવસે. દર વખતે સેશન વચ્ચે એક દિવસ આરામ. પહેલાં મૂવમેન્ટ ફરી બનાવીએ છીએ, પછી વજન ઉમેરીએ છીએ.",
    "આખો કલાક જોઈએ છે? Iron Hour 60 મિનિટનું છે, 1:1. મિનિટ 0 પર સેટ-અપ: ખુરશી, કાઉન્ટર અને કૅમેરા એવી રીતે કે આખું શરીર ફ્રેમમાં હોય. મિનિટ 4 થી વૉર્મ-અપ. મિનિટ 14 પર મુખ્ય લિફ્ટ. 28 પર એક્સેસરીઝ: રો, કૅરી, બૅલેન્સ. 50 પર કૂલ-ડાઉન.",
    "Lean Reset મહિને 20 સેશન, 1:1. Open Floor નાનું ગ્રુપ છે.",
    "Google Meet, Zoom કે FaceTime પર લાઇવ કોચિંગ. પુણેથી. હિન્દી કે અંગ્રેજીમાં. IST પર. હજુ નક્કી નથી? 30 મિનિટના કન્સલ્ટેશનથી શરૂ કરો. એ વાતચીત છે, ટ્રેનિંગ નહીં. બુકિંગ ફક્ત સમય રોકે છે. ફી સીધી નક્કી થાય છે.",
  ],
  safetyHeading: "શરૂ કરતાં પહેલાં",
  safety:
    "સામાન્ય માહિતી, તબીબી સલાહ નહીં. ACSM ના સ્ક્રીનિંગ મોડલ મુજબ: જો તમે નિષ્ક્રિય છો, કોઈ લક્ષણ નથી અને હૃદય, મેટાબોલિક કે કિડનીની કોઈ જાણીતી બીમારી નથી, તો તમે તબીબી મંજૂરી વગર હળવી થી મધ્યમ કસરત શરૂ કરીને ધીમે ધીમે વધારી શકો છો. જો આમાંની કોઈ બીમારી હોય, અથવા છાતીમાં દુખાવો, અસામાન્ય હાંફ કે ચક્કર જેવા લક્ષણો હોય, તો પહેલાં તબીબી મંજૂરી લો.{9} જગ્યા સુરક્ષિત બનાવો: દીવાલને અડીને મજબૂત ખુરશી, હાથની પહોંચમાં કાઉન્ટર કે રેલિંગ, સાફ જમીન, સારો પ્રકાશ, અને લપસે નહીં એવાં જૂતાં. ઉપાડતી વખતે શ્વાસ છોડો. શ્વાસ ન રોકો. જો તમને ઑસ્ટિયોપોરોસિસ હોય, સાંધો બદલાયો હોય, અથવા તાજેતરમાં પડી ગયા હો, તો તમારા ડૉક્ટર કે ફિઝિયોથેરાપિસ્ટને પૂછો કે કઈ મૂવ્સ અને કેટલું વજન તમારા માટે યોગ્ય છે. છાતીમાં દુખાવો, ચક્કર કે તીવ્ર દુખાવો થાય તો રોકાઈ જાઓ.",
};

export const over60StrengthPost: BlogPost = {
  slug: OVER_60_SLUG,
  published: OVER_60_PUBLISHED,
  modified: OVER_60_MODIFIED,
  about: "Strength training exercises for adults over 60",
  sources: OVER_60_SOURCES,
  copy: { en, ar, hi, es, zh, ja, gu },
  programLink: { href: "/getting-back-into-exercise", label: "How Return works: 45 minutes, 12 alternate-day sessions a month" },
};
