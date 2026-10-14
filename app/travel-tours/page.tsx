import type { Metadata } from "next";
import PortfolioPage from "@/app/components/PortfolioPage";

export const metadata: Metadata = {
  title: { absolute: "Travel & Tours | ShaelCore" },
  description: "Explore thoughtfully planned holidays, tours, and business journeys with ShaelCore Capital Holdings.",
  alternates: { canonical: "/travel-tours" },
};

export default function TravelToursPage() {
  return (
    <PortfolioPage
      eyebrow="Travel & tours"
      title="Go beyond"
      accent="the everyday."
      intro="Thoughtfully planned holidays, tours, and business journeys, shaped around your interests, your pace, and the way you want to travel."
      visualLabel="Travel, considered"
      visualStatement="The journey is yours."
      services={[
        { id: "curated-journeys", number: "01", title: "Curated journeys", description: "Explore considered itineraries, distinctive stays, and experiences built around the places you want to discover." },
        { id: "business-travel", number: "02", title: "Business travel", description: "Make business trips easier to navigate with coordinated planning, thoughtful details, and support along the way." },
        { id: "travel-tours", number: "03", title: "Travel & tours", description: "From a short escape to a longer adventure, bring your dates, interests, and ideas—we can help shape a trip that feels like yours." },
      ]}
      closingTitle="Make room for a new perspective."
      closingText="Every journey begins with a few simple details. Share where you would like to go, who is travelling, and what matters most, and we can explore the next steps together."
    />
  );
}
