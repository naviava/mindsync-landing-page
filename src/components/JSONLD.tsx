export default function JSONLD({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // This renders on the server — good for crawlers.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
