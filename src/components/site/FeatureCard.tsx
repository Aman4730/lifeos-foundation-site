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
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-lift)]">
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
          style={{ backgroundColor: feature.tint }}
        >
          <Icon className="h-5 w-5" style={{ color: feature.color }} strokeWidth={1.9} />
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-medium text-muted-foreground">{feature.number}</span>
          <h3
            className="mt-0.5 truncate text-[13px] font-semibold uppercase tracking-[0.06em]"
            style={{ color: feature.color }}
          >
            {feature.title}
          </h3>
        </span>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
      <span className="mt-4 flex justify-end">
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-gold" />
      </span>
    </article>
  );
}