import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IProps {
  Icon: LucideIcon;
  size?: number;
  className?: string;
}

export function CTAIcon({ Icon, size, className }: IProps) {
  return (
    <div
      className={cn(
        "size-[25px] bg-cta p-1 rounded-full flex items-center justify-center",
        className,
      )}
    >
      <Icon size={size ?? 18} className="text-black" />
    </div>
  );
}
