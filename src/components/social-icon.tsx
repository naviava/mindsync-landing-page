import { cn } from "@/lib/utils";

interface IProps {
  icon: string;
  href: string;
  className?: string;
}

export function SocialIcon({ icon, href, className }: IProps) {
  return (
    <a href={href} target="_blank">
      <div
        className={cn(
          "size-8 bg-cta p-1 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110",
          className,
        )}
      >
        <img src={icon} alt="Social media icon" className="size-5" />
      </div>
    </a>
  );
}
