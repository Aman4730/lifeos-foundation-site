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
          <p className="text-[13px] font-semibold tracking-[-0.005em] text-gold">
            What our users say
          </p>
          <h2 className="mt-4 text-[clamp(2.375rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-foreground">
            What our early users say
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-[14px] border border-border bg-surface p-8 transition-all duration-[220ms] ease-[var(--ease-premium)] hover:-translate-y-[2px] hover:border-muted-soft/60 hover:shadow-[var(--shadow-soft)]">
                <Quote className="h-5 w-5 fill-gold/25 text-gold/40" />
                <blockquote className="mt-5 flex-1 text-[17px] leading-[1.6] text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <Avatar name={t.name} index={i + 1} />
                  <span className="min-w-0">
                    <span className="block truncate text-[15px] font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="block text-[14px] text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial group ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-200",
                active === i ? "w-6 bg-foreground" : "w-1.5 bg-border hover:bg-muted-soft",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}