import { SocialIcon } from "./social-icon";
import { SOCIAL } from "@/data/social";

const LINKS: {
  id: string;
  label: string;
  href: string;
}[] = [
  {
    id: "about-nav",
    label: "ABOUT US",
    href: "#about-us",
  },
  {
    id: "values-nav",
    label: "OUR VALUES",
    href: "#core-values",
  },
  {
    id: "expertise",
    label: "TECHNOLOGIES",
    href: "#tech-expertise",
  },
  {
    id: "industries-nav",
    label: "INDUSTRIES",
    href: "#industries",
  },
];

export function Header() {
  return (
    <header className="h-[121px] bg-[#00132b] text-white px-4 md:px-20 lg:px-10 xl:px-20">
      <nav className="flex items-center justify-between max-w-[2350px] h-full mx-auto">
        <img
          src="/assets/logo-dark.png"
          alt="Mindsync Logo"
          className="w-[121px]"
        />
        <ul className="hidden lg:flex items-center justify-center font-semibold gap-x-10">
          {LINKS.map((link) => (
            <li key={link.id} className="text-[18px] xl:text-[22px]">
              <a href={link.href} className="font-poppins">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-x-3 lg:gap-x-6 xl:gap-x-10">
          {SOCIAL.map((item) => (
            <li key={item.id}>
              <SocialIcon icon={item.icon} href={item.href} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
