import { Crown, UserPlus } from "lucide-react";
import { Reveal } from "./Reveal";

export function FounderBanner() {
  return (
    <section id="founder" className="scroll-mt-24">
      <div className="container-x py-16 lg:py-20">
        <Reveal>
          <div className="grid items-center gap-8 rounded-[16px] bg-[oklch(0.115_0_0)] px-6 py-12 sm:px-12 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-12">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-gold/30 bg-[oklch(1_0_0_/_0.05)]">
              <Crown className="h-6 w-6 text-gold" />
            </span>
            <div className="min-w-0">
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-primary-foreground">
                Be a Founder. Get Early Access.
              </h2>
              <p className="mt-4 max-w-[620px] text-[17px] leading-[1.6] text-[oklch(0.72_0_0)]">
                Join thousands of early supporters and shape the future of personal AI for everyday
                life.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="btn-base border border-transparent bg-background px-6 text-foreground hover:-translate-y-[2px] hover:shadow-[var(--shadow-lift)]"
              >
                Become a Founder
              </button>
              <button
                type="button"
                className="btn-base border border-[oklch(1_0_0_/_0.22)] px-6 text-primary-foreground hover:-translate-y-[1px] hover:border-[oklch(1_0_0_/_0.4)]"
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