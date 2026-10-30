import { createFileRoute } from "@tanstack/react-router";
import { CountryLandingPage, countryHead } from "@/components/country-landing";
import { INDIA } from "@/content/country-pages";

/** Landing page for "online personal trainer india". Copy and facts live in src/content/country-pages.ts. */
export const Route = createFileRoute("/online-personal-trainer-india")({
  head: () => countryHead(INDIA),
  component: () => <CountryLandingPage page={INDIA} />,
});
