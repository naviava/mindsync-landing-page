const LINKS: {
  id: string;
  label: string;
  href: string;
}[] = [
  {
    id: "terms-footer",
    label: "Terms and Conditions",
    href: "/terms",
  },
  {
    id: "privacy-policy",
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: "blogs-footer",
    label: "Blogs",
    href: "/blogs",
  },
  {
    id: "services-footer",
    label: "Services",
    href: "/services",
  },
];

export function QuickLinks() {
  return (
    <div className="flex flex-col">
      <h4 className="font-poppins font-semibold text-[20px]">QUICK LINKS</h4>
      <ul className="space-y-2 mt-4">
        {LINKS.map((link) => (
          <li key={link.id} className="text-[18px]">
            <a href="#">{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
