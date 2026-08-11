import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export type Feature = {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <article className="card-surface group flex h-full flex-col p-6">
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface-alt">
          <Icon className="h-[18px] w-[18px] text-ink" strokeWidth={1.5} />
        </span>
        <span className="min-w-0">
          <span className="block text-[13px] font-semibold tabular-nums text-subtle">
            {String(feature.number).padStart(2, "0")}
          </span>
          <h3 className="mt-1 truncate text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-ink">
            {feature.title}
          </h3>
        </span>
      </div>
      <p className="mt-4 text-[16px] leading-[1.55] text-ink-soft">
        {feature.description}
      </p>
      <span className="mt-6 flex justify-end">
        <ArrowRight className="h-4 w-4 text-subtle transition-all duration-200 group-hover:translate-x-[3px] group-hover:text-ink" />
      </span>
    </article>
  );
}