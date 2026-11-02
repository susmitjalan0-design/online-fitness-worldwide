import { backAfterBreakPost } from "./back-after-a-break";
import { coolDownPost } from "./cool-down";
import { coreBackPost } from "./core-lower-back";
import { deskWorkersPost } from "./desk-workers";
import { gripStrengthPost } from "./grip-strength";
import { oneDumbbellPost } from "./one-dumbbell";
import { over60StrengthPost } from "./over-60-strength";
import { runnersStrengthPost } from "./runners-strength";
import { strengthConditioningPost } from "./strength-conditioning";
import { travelBodyweightPost } from "./travel-bodyweight";
import { warmUpPost } from "./warm-up";
import { womenOver40Post } from "./women-over-40";
import { hyroxPlanPost } from "./hyrox-training-plan";
import { whatIsHyroxPost } from "./what-is-hyrox";
import { hyroxHomePost } from "./how-to-train-for-hyrox-at-home";
import { hyroxVsCrossfitPost } from "./hyrox-vs-crossfit";
import { hyroxVsDekaVsAthxPost } from "./hyrox-vs-deka-vs-athx";
import { dekaGuidePost } from "./deka-fit-mile-strong-guide";
import { whatIsAthxPost } from "./what-is-athx";
import type { BlogPost } from "./shared";

/** Every post, newest first. The blog index, related links and sitemap follow this list. */
export const BLOG_POSTS: BlogPost[] = [
  whatIsAthxPost,
  dekaGuidePost,
  hyroxVsDekaVsAthxPost,
  hyroxVsCrossfitPost,
  hyroxHomePost,
  whatIsHyroxPost,
  hyroxPlanPost,
  gripStrengthPost,
  coreBackPost,
  over60StrengthPost,
  runnersStrengthPost,
  travelBodyweightPost,
  oneDumbbellPost,
  coolDownPost,
  strengthConditioningPost,
  warmUpPost,
  womenOver40Post,
  backAfterBreakPost,
  deskWorkersPost,
];

export { whatIsAthxPost, dekaGuidePost, hyroxVsDekaVsAthxPost, hyroxVsCrossfitPost, hyroxHomePost, whatIsHyroxPost, hyroxPlanPost, backAfterBreakPost, coolDownPost, coreBackPost, deskWorkersPost, gripStrengthPost, oneDumbbellPost, over60StrengthPost, runnersStrengthPost, strengthConditioningPost, travelBodyweightPost, warmUpPost, womenOver40Post };
