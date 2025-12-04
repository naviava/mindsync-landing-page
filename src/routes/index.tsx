import { IndustriesWeEmpower } from "@/components/industries-we-empower";
import { OurCoreValues } from "@/components/our-core-values";
import { TechExpertise } from "@/components/tech-expertise";
import { createFileRoute } from "@tanstack/react-router";
import { MainBanner } from "@/components/main-banner";
import { ContactUs } from "@/components/contact-us";
import { AboutUs } from "@/components/about-us";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Mindsync provides strategic, purpose-driven partnership to scale businesses globally through digital innovation and structured market expansion.",
      },
      {
        title: "Mindsync - Connecting Intelligence with Innovation",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main>
      <MainBanner />
      <AboutUs />
      <OurCoreValues />
      <TechExpertise />
      <IndustriesWeEmpower />
      <ContactUs />
    </main>
  );
}
