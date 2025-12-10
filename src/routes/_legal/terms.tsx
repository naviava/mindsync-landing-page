import { createFileRoute } from "@tanstack/react-router";

import TermsContent, { meta as termsMeta } from "@/docs/terms.mdx";
import JSONLD from "@/components/JSONLD";

export const Route = createFileRoute("/_legal/terms")({
  head: () => ({
    meta: [
      // Standard
      { name: "description", content: termsMeta.description },
      { title: termsMeta.title },

      // Open Graph
      { property: "og:title", content: termsMeta.title },
      { property: "og:description", content: termsMeta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: termsMeta.canonical },
      { property: "og:image", content: termsMeta.ogImage },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: termsMeta.title },
      { name: "twitter:description", content: termsMeta.description },
      { name: "twitter:image", content: termsMeta.ogImage },

      // other recommended
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: termsMeta.canonical }],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <main className="px-4 py-16 md:px-10 lg:mx-16">
      <article className="prose lg:prose:xl max-w-[1600px] mx-auto">
        <TermsContent />
      </article>
      <JSONLD
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: termsMeta.title,
          description: termsMeta.description,
          url: termsMeta.canonical,
          dateModified: termsMeta.updated,
        }}
      />
    </main>
  );
}
