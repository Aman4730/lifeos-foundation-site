import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={logoImage}
        alt="LifeOS"
        className="h-10 w-auto shrink-0 sm:h-12"
      />
    </span>
  );
}
