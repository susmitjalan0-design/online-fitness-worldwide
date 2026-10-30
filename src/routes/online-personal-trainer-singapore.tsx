import { createFileRoute } from "@tanstack/react-router";
import { CountryLandingPage, countryHead } from "@/components/country-landing";
import { SINGAPORE } from "@/content/country-pages";

/** Landing page for "online personal trainer singapore". Copy and facts live in src/content/country-pages.ts. */
export const Route = createFileRoute("/online-personal-trainer-singapore")({
  head: () => countryHead(SINGAPORE),
  component: () => <CountryLandingPage page={SINGAPORE} />,
});
