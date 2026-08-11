import { useState } from "react";
import { Quote } from "lucide-react";
import { Avatar } from "./Avatar";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "LifeOS has simplified my entire life. Everything in one place. Total game changer.",
    name: "Arjun P.",
    role: "Entrepreneur",
  },
  {
    quote: "It anticipates what I want before I even ask. Truly amazing!",
    name: "Neha Sharma",
    role: "Product Designer",
  },
  {
    quote: "Finally, an assistant that actually understands me.",
    name: "Ravi K. Singh",
    role: "Founder",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="lifescore" className="scroll-mt-24">
      <div className="mx-auto max-w-[1450px] px-5 py-14 lg:px-6">
        <Reveal className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            What our users say
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-navy sm:text-[2.2rem]">
            What our early users say
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <Quote className="h-5 w-5 fill-gold/30 text-gold/40" />
                <blockquote className="mt-3 flex-1 text-[13.5px] leading-relaxed text-navy/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Avatar name={t.name} index={i + 1} />
                  <span className="min-w-0">
                    <span className="block truncate text-[13px] font-semibold text-navy">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial group ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                active === i ? "w-5 bg-gold" : "w-1.5 bg-border hover:bg-muted-foreground/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}