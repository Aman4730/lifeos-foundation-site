import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export type Feature = {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  tint: string;
};

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <article className="group flex h-full flex-col rounded-[14px] border border-border bg-surface p-6 transition-all duration-[220ms] ease-[var(--ease-premium)] hover:-translate-y-[2px] hover:border-muted-soft/60 hover:shadow-[var(--shadow-soft)]">
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3.5">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-alt"
        >
          <Icon className="h-5 w-5 text-foreground" strokeWidth={1.7} />
        </span>
        <span className="min-w-0">
          <span className="block text-[13px] font-semibold text-muted-soft">
            {String(feature.number).padStart(2, "0")}
          </span>
          <h3 className="mt-1 truncate text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-foreground">
            {feature.title}
          </h3>
        </span>
      </div>
      <p className="mt-4 text-[16px] leading-[1.55] text-muted-foreground">
        {feature.description}
      </p>
      <span className="mt-6 flex justify-end">
        <ArrowRight className="h-4 w-4 text-muted-soft transition-all duration-200 group-hover:translate-x-[3px] group-hover:text-foreground" />
      </span>
    </article>
  );
}