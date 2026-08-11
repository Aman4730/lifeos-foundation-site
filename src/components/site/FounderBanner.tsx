import { Crown, UserPlus } from "lucide-react";
import { Reveal } from "./Reveal";

export function FounderBanner() {
  return (
    <section id="founder" className="scroll-mt-24">
      <div className="mx-auto max-w-[1450px] px-5 py-14 lg:px-6">
        <Reveal>
          <div className="grid items-center gap-8 rounded-2xl bg-navy px-6 py-8 shadow-[var(--shadow-lift)] sm:px-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-10">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-gold/30 bg-white/5">
              <Crown className="h-6 w-6 text-gold" />
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-2xl tracking-[-0.01em] text-primary-foreground sm:text-[1.75rem]">
                Be a Founder. Get Early Access.
              </h2>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-primary-foreground/70">
                Join thousands of early supporters and shape the future of personal AI for everyday
                life.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-lg bg-gold px-6 py-3 text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:bg-gold-soft active:translate-y-0"
              >
                Become a Founder
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-gold/50 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
              >
                <UserPlus className="h-4 w-4" />
                Refer a Friend
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}