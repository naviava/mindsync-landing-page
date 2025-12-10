import { createFileRoute } from "@tanstack/react-router";

import PrivacyContent, { meta as privacyMeta } from "@/docs/privacy.mdx";
import JSONLD from "@/components/JSONLD";

export const Route = createFileRoute("/_legal/privacy-policy")({
  head: () => ({
    meta: [
      // Standard
      { name: "description", content: privacyMeta.description },
      { title: privacyMeta.title },

      // Open Graph
      { property: "og:title", content: privacyMeta.title },
      { property: "og:description", content: privacyMeta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: privacyMeta.canonical },
      { property: "og:image", content: privacyMeta.ogImage },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: privacyMeta.title },
      { name: "twitter:description", content: privacyMeta.description },
      { name: "twitter:image", content: privacyMeta.ogImage },

      // other recommended
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: privacyMeta.canonical }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="px-4 py-16 md:px-10 lg:mx-16">
      <article className="prose lg:prose:xl max-w-[1600px] mx-auto">
        <PrivacyContent />
      </article>
      <JSONLD
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: privacyMeta.title,
          description: privacyMeta.description,
          url: privacyMeta.canonical,
          dateModified: privacyMeta.updated,
        }}
      />
    </main>
  );
}
