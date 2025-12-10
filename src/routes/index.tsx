import { IndustriesWeEmpower } from "@/components/industries-we-empower";
import { OurCoreValues } from "@/components/our-core-values";
import { TechExpertise } from "@/components/tech-expertise";
import { createFileRoute } from "@tanstack/react-router";
import { MainBanner } from "@/components/main-banner";
import { ContactUs } from "@/components/contact-us";
import { AboutUs } from "@/components/about-us";

const metadata = {
  title: "Mindsync - Connecting Intelligence with Innovation",
  description:
    "Mindsync provides strategic, purpose-driven partnership to scale businesses globally through digital innovation and structured market expansion.",
  canonical: "https://www.mindsync.cc",
  ogImage: "https://www.mindsync.cc/assets/og-image.png",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Mindsync provides strategic, purpose-driven partnership to scale businesses globally through digital innovation and structured market expansion.",
      },
      { title: "Mindsync - Connecting Intelligence with Innovation" },

      // Open Graph
      { property: "og:title", content: metadata.title },
      { property: "og:description", content: metadata.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: metadata.canonical },
      { property: "og:image", content: metadata.ogImage },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: metadata.title },
      { name: "twitter:description", content: metadata.description },
      { name: "twitter:image", content: metadata.ogImage },

      // other recommended
      { name: "robots", content: "index,follow" },
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
