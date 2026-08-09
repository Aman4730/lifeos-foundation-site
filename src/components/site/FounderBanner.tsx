import { Crown, UserPlus } from "lucide-react";
import { Reveal } from "./Reveal";

export function FounderBanner() {
  return (
    <section id="founder" className="scroll-mt-24">
      <div className="container-page py-20 lg:py-[120px]">
        <Reveal>
          <div className="grid items-center gap-10 rounded-xl bg-[#090909] px-8 py-12 sm:px-12 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-12 lg:py-14">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5">
              <Crown className="h-6 w-6 text-gold-soft" strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-[clamp(30px,3.2vw,44px)] leading-[1.05] text-white">
                Be a Founder. Get Early Access.
              </h2>
              <p className="mt-4 max-w-[560px] text-[17px] leading-[1.65] text-[#A8A8A8]">
                Join thousands of early supporters and shape the future of personal AI for everyday
                life.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-lg bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0A0A0A] transition-colors hover:bg-white/90"
              >
                Become a Founder
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
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