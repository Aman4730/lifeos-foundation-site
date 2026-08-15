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
<<<<<<< HEAD
      <div className="mx-auto grid max-w-[1450px] items-center gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.2fr_0.9fr] lg:px-6 lg:py-20">
=======
      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.2fr_0.85fr] lg:py-[100px]">
>>>>>>> eaeb35e1a1b3d73cc89a75de1f83d7c77819980c
        <Reveal>
          <p className="text-[13px] font-semibold tracking-[-0.005em] text-gold">
            Designed around you
          </p>
          <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-foreground">
            More Than an App.
            <br />
            It's Your Second Brain.
          </h2>
          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.6] text-muted-foreground">
            LifeOS connects your digital life, remembers what matters, and helps you do more.
          </p>
          <a
            href="#founder"
            className="group mt-7 inline-flex items-center gap-2 text-[16px] font-semibold text-foreground transition-colors hover:text-gold"
          >
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
          </a>
        </Reveal>

<<<<<<< HEAD
        <Reveal delay={80} className="lg:border-x lg:border-border lg:px-6">
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
=======
        <Reveal delay={80} className="lg:border-x lg:border-border lg:px-10">
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
>>>>>>> eaeb35e1a1b3d73cc89a75de1f83d7c77819980c
            {items.map((item) => (
              <li key={item.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-surface">
                  <item.icon className="h-[18px] w-[18px] text-foreground" strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.55] text-muted-foreground">
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
            className="mx-auto w-full max-w-[300px] object-contain transition-transform duration-500 ease-[var(--ease-premium)] hover:scale-[1.02]"
          />
        </Reveal>
      </div>
    </section>
  );
}