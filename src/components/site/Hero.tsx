import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { Avatar } from "./Avatar";
import { Reveal } from "./Reveal";

const people = ["Arjun P", "Neha S", "Ravi K", "Maya D"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-muted/60 blur-[120px]" />
      <div className="container-page grid items-center gap-14 pb-16 pt-14 sm:pb-20 lg:grid-cols-2 lg:gap-12 lg:pb-[120px] lg:pt-24">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-ink-soft">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            AI Operating System for your life
          </span>

          <h1 className="display-hero mt-8 text-ink">
            One Assistant.
            <br />
            One Memory.
            <br />
            <span className="text-subtle">One Life.</span>
          </h1>

          <p className="lead mt-6 text-ink-soft">
            LifeOS remembers everything, understands what you need, and proactively helps you manage
            your entire life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#founder" className="btn-base btn-primary group px-7 py-4">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2.5 rounded-xl px-3 py-4 text-[15px] font-medium text-ink transition-colors hover:text-ink-soft sm:text-[16px]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface">
                <Play className="h-3 w-3 fill-ink text-ink" />
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
                  <Star key={i} className="h-3.5 w-3.5 fill-ink text-ink" />
                ))}
              </div>
              <p className="mt-1.5 text-[14px] text-ink-soft">Loved by 2,000+ users</p>
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