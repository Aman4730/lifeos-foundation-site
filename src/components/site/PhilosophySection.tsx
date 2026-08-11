import {
  ArrowRight,
  BookMarked,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRoundSearch,
} from "lucide-react";
import infinityImage from "@/assets/infinity.png";
import { Reveal } from "./Reveal";

const items = [
  { icon: BookMarked, title: "Remembers What Matters", text: "So you never forget again." },
  { icon: Layers, title: "All-in-One Hub", text: "Tasks, events, notes, bills & more." },
  { icon: UserRoundSearch, title: "Understands You", text: "Learns your habits and preferences." },
  { icon: ShieldCheck, title: "Peace of Mind", text: "Your data is safe and private." },
  { icon: Sparkles, title: "Proactive Assistant", text: "Suggests and acts before you even ask." },
  { icon: MessageCircle, title: "Natural & Smart", text: "Talk, type, or ask in your own way." },
];

export function PhilosophySection() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-border bg-surface-alt/60">
      <div className="mx-auto grid max-w-[1450px] items-center gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.2fr_0.9fr] lg:px-6 lg:py-20">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            Designed around you
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.02em] text-navy sm:text-[2.1rem]">
            More Than an App.
            <br />
            It's Your Second Brain.
          </h2>
          <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
            LifeOS connects your digital life, remembers what matters, and helps you do more.
          </p>
          <a
            href="#founder"
            className="group mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-gold transition-colors hover:text-navy"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={80} className="lg:border-x lg:border-border lg:px-6">
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-surface">
                  <item.icon className="h-4 w-4 text-gold" strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <h3 className="text-[13px] font-semibold text-navy">{item.title}</h3>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <img
            src={infinityImage}
            alt="Abstract navy and gold infinity sculpture on a podium"
            width={1024}
            height={1024}
            loading="lazy"
            className="mx-auto w-full max-w-[300px] object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}