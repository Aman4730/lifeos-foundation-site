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
    <section id="about" className="scroll-mt-24 border-y border-border bg-surface-alt">
      <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-[0.85fr_1.2fr_0.9fr] lg:py-[120px]">
        <Reveal>
          <p className="eyebrow text-subtle">Designed around you</p>
          <h2 className="display-section mt-5 text-ink lg:text-[clamp(36px,3.4vw,52px)]">
            More Than an App.
            <br />
            It's Your Second Brain.
          </h2>
          <p className="mt-6 max-w-[440px] text-[17px] leading-[1.65] text-ink-soft">
            LifeOS connects your digital life, remembers what matters, and helps you do more.
          </p>
          <a
            href="#founder"
            className="group mt-8 inline-flex items-center gap-1.5 border-b border-ink/25 pb-1 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={80} className="lg:border-x lg:border-border lg:px-10">
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-surface">
                  <item.icon className="h-4 w-4 text-ink" strokeWidth={1.5} />
                </span>
                <span className="min-w-0">
                  <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.55] text-ink-soft">
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