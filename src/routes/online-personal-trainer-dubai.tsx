import { createFileRoute } from "@tanstack/react-router";
import { CountryLandingPage, countryHead } from "@/components/country-landing";
import { DUBAI } from "@/content/country-pages";

/** Landing page for "online personal trainer dubai". Copy and facts live in src/content/country-pages.ts. */
export const Route = createFileRoute("/online-personal-trainer-dubai")({
  head: () => countryHead(DUBAI),
  component: () => <CountryLandingPage page={DUBAI} />,
});
