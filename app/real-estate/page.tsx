import type { Metadata } from "next";
import PortfolioPage from "@/app/components/PortfolioPage";

export const metadata: Metadata = {
  title: { absolute: "Real Estate | ShaelCore" },
  description: "Explore homes, commercial spaces, and property opportunities with ShaelCore Capital Holdings.",
  alternates: { canonical: "/real-estate" },
};

export default function RealEstatePage() {
  return (
    <PortfolioPage
      eyebrow="Real estate"
      title="Find your"
      accent="next chapter."
      intro="Explore homes, business spaces, and property opportunities with your priorities in focus—from the first conversation to a clearer next step."
      visualLabel="Places with possibility"
      visualStatement="Find a place that feels like yours."
      services={[
        { id: "residential", number: "01", title: "Residential property", description: "Explore homes to buy or rent, with location, lifestyle, and the way you want to live at the centre of the search." },
        { id: "commercial", number: "02", title: "Commercial property", description: "Consider offices, retail, and other business spaces around the needs of your organisation and its next stage." },
        { id: "advisory", number: "03", title: "Property advisory", description: "Clarify your requirements, compare opportunities, and understand practical considerations before moving ahead." },
      ]}
      closingTitle="Start with the place you have in mind."
      closingText="Tell us where you are looking, the kind of space you need, and the priorities that matter. We will help shape a practical conversation about your property goals."
    />
  );
}
