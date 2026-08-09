import { cn } from "@/lib/utils";

export function Logo({ className, tone = "navy" }: { className?: string; tone?: "navy" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2",
        tone === "light" ? "text-primary-foreground" : "text-ink",
        className,
      )}
    >
      <svg viewBox="0 0 44 24" className="h-5 w-9 shrink-0" aria-hidden="true">
        <circle cx="13" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="3.4" />
        <circle
          cx="31"
          cy="12"
          r="9.5"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="3.4"
        />
      </svg>
      <span
        className={cn(
          "font-display text-[22px] tracking-[-0.035em]",
          tone === "light" ? "text-primary-foreground" : "text-ink",
        )}
      >
        LifeOS
      </span>
    </span>
  );
}