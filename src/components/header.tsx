import { motion, useReducedMotion } from "motion/react";

import { SocialIcon } from "./social-icon";
import { SOCIAL } from "@/data/social";
import usePath from "@/hooks/use-path";

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
  const path = usePath();
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="h-[121px] bg-[#00132b] text-white px-4 md:px-20 lg:px-10 xl:px-20">
      <motion.nav
        initial={{ translateY: shouldReduceMotion ? 0 : -100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between max-w-[2350px] h-full mx-auto"
      >
        <a href="/">
          <img
            src="/assets/logo-dark.png"
            alt="Mindsync Logo"
            className="w-[121px]"
          />
        </a>
        {(path.href === "/" || path.href.startsWith("/#")) && (
          <ul className="hidden lg:flex items-center justify-center font-semibold gap-x-10">
            {LINKS.map((link) => (
              <li
                key={link.id}
                className="text-[18px] xl:text-[22px] transition-colors duration-200 hover:text-cta"
              >
                <a href={link.href} className="font-poppins">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        <ul className="flex items-center gap-x-3 lg:gap-x-6 xl:gap-x-10">
          {SOCIAL.map((item) => (
            <li key={item.id}>
              <SocialIcon icon={item.icon} href={item.href} />
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
