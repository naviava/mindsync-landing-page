import { LocateIcon, Mail, PhoneCall, type LucideIcon } from "lucide-react";
import { SocialIcon } from "./social-icon";
import { FooterIcon } from "./footer-icon";
import { SOCIAL } from "@/data/social";

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
              <FooterIcon Icon={item.Icon} />
              <span className="ml-2">{item.data}</span>
            </li>
          ))}
          <ul className="flex items-center gap-x-6 pt-4">
            {SOCIAL.map((item) => (
              <li key={item.id}>
                <SocialIcon icon={item.icon} href={item.href} />
              </li>
            ))}
          </ul>
        </>
      </ul>
    </div>
  );
}
