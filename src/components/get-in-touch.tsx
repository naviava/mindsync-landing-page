import {
  Facebook,
  Instagram,
  Linkedin,
  LocateIcon,
  Mail,
  PhoneCall,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import { CTAIcon } from "./cta-icon";

const DETAILS: {
  id: string;
  data: string;
  Icon: LucideIcon;
}[] = [
  {
    id: "phone-footer",
    data: "+91 99160 73308",
    Icon: PhoneCall,
  },
  {
    id: "email-footer",
    data: "info@mindsync.cc",
    Icon: Mail,
  },
  {
    id: "location-footer",
    data: "Bangalore, India",
    Icon: LocateIcon,
  },
];

const SOCIAL: {
  id: string;
  Icon: LucideIcon;
  href: string;
}[] = [
  {
    id: "insta-footer",
    Icon: Instagram,
    href: "#",
  },
  {
    id: "facebook-footer",
    Icon: Facebook,
    href: "#",
  },
  {
    id: "linkedin-footer",
    Icon: Linkedin,
    href: "#",
  },
  {
    id: "twitter-footer",
    Icon: Twitter,
    href: "#",
  },
];

export function GetInTouch() {
  return (
    <div className="flex flex-col">
      <h4 className="font-poppins font-semibold text-[20px]">GET IN TOUCH</h4>
      <ul className="space-y-4 mt-4">
        <>
          {DETAILS.map((item) => (
            <li
              key={item.id}
              className="text-[18px] flex flex-row items-center"
            >
              <CTAIcon Icon={item.Icon} />
              <span className="ml-2">{item.data}</span>
            </li>
          ))}
          <ul className="flex items-center gap-x-3">
            {SOCIAL.map((item) => (
              <li key={item.id}>
                <a href={item.href}>
                  <CTAIcon Icon={item.Icon} />
                </a>
              </li>
            ))}
          </ul>
        </>
      </ul>
    </div>
  );
}
