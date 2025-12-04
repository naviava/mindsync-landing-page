import { AboutUs } from "@/components/about-us";
import { IndustriesWeEmpower } from "@/components/industries-we-empower";
import { MainBanner } from "@/components/main-banner";
import { OurCoreValues } from "@/components/our-core-values";
import { TechExpertise } from "@/components/tech-expertise";
import { createFileRoute } from "@tanstack/react-router";

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
    <main className="pb-24">
      <header className="h-[121px] bg-[#001633]">Top header</header>
      <MainBanner />
      <AboutUs />
      <OurCoreValues />
      <TechExpertise />
      <IndustriesWeEmpower />
      <section>Contact us</section>
    </main>
  );
}
