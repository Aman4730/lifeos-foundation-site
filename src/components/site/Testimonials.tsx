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
      <div className="container-page py-20 lg:py-[120px]">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow text-subtle">What our users say</p>
          <h2 className="display-section mt-4 text-ink">
            What our early users say
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-lg border border-border bg-surface p-7 transition-colors duration-300 hover:border-ink/25">
                <Quote className="h-5 w-5 fill-border text-border" />
                <blockquote className="mt-5 flex-1 text-[17px] leading-[1.6] tracking-[-0.015em] text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <Avatar name={t.name} index={i + 1} />
                  <span className="min-w-0">
                    <span className="block truncate text-[15px] font-semibold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-[14px] text-ink-soft">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial group ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                active === i ? "w-5 bg-ink" : "w-1.5 bg-border hover:bg-subtle",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}