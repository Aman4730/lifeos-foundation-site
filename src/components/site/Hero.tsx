import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { Avatar } from "./Avatar";
import { Reveal } from "./Reveal";

const people = ["Arjun P", "Neha S", "Ravi K", "Maya D"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-gold-soft/10 blur-[120px]" />
      <div className="container-x grid items-center gap-14 pb-16 pt-12 lg:grid-cols-2 lg:gap-12 lg:pb-[120px] lg:pt-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] font-semibold tracking-[-0.005em] text-muted-foreground">
            <Sparkles className="h-3 w-3 text-gold" />
            AI Operating System for your life
          </span>

          <h1 className="mt-8 text-[clamp(2.75rem,7vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-foreground">
            One Assistant.
            <br />
            One Memory.
            <br />
            <span className="text-gold">One Life.</span>
          </h1>

          <p className="mt-6 max-w-[580px] text-[17px] leading-[1.6] text-muted-foreground sm:text-[19px]">
            LifeOS remembers everything, understands what you need, and proactively helps you manage
            your entire life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#founder"
              className="btn-base btn-primary group px-6"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </a>
            <a
              href="#features"
              className="btn-base group gap-3 border border-transparent px-3 text-foreground hover:-translate-y-[1px]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface transition-colors group-hover:border-muted-soft">
                <Play className="h-3 w-3 fill-current text-foreground" />
              </span>
              Watch Demo
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {people.map((p, i) => (
                <Avatar key={p} name={p} index={i} className="h-9 w-9" />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1 text-[14px] text-muted-foreground">Loved by 2,000+ users</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pl-6">
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}