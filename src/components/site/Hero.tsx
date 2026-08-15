import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import heroPhoneImage from "@/assets/hero-phone.png";
import { Avatar } from "./Avatar";
import { Reveal } from "./Reveal";

const people = ["Arjun P", "Neha S", "Ravi K", "Maya D"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[460px] overflow-hidden bg-cover bg-right bg-no-repeat sm:min-h-[540px] lg:min-h-[660px]"
      style={{ backgroundImage: `url(${heroPhoneImage})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background from-5% via-background/55 via-32% to-transparent to-62% lg:to-55%" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-gold-soft/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-[1450px] items-center gap-14 px-5 pb-16 pt-10 lg:grid-cols-2 lg:gap-8 lg:px-6 lg:pb-24 lg:pt-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-navy/70">
            <Sparkles className="h-3 w-3 text-gold" />
            AI Operating System for your life
          </span>

          <h1 className="mt-7 font-display text-[2.75rem] leading-[1.06] tracking-[-0.02em] text-navy sm:text-6xl">
            One Assistant.
            <br />
            One Memory.
            <br />
            <span className="text-gold">One Life.</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            LifeOS remembers everything, understands what you need, and proactively helps you manage
            your entire life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#founder"
              className="group inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] active:translate-y-0"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2.5 rounded-xl px-3 py-3.5 text-sm font-medium text-navy transition-colors hover:text-gold"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface">
                <Play className="h-3 w-3 fill-navy text-navy" />
              </span>
              Watch Demo
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
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
              <p className="mt-1 text-xs text-muted-foreground">Loved by 2,000+ users</p>
            </div>
          </div>
        </Reveal>

        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}