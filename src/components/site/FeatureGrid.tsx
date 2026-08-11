import {
  ArrowRight,
  Brain,
  Database,
  HeartPulse,
  ListChecks,
  Lock,
  Plane,
  ShoppingBag,
  Wallet,
} from "lucide-react";
import { FeatureCard, type Feature } from "./FeatureCard";
import { Reveal } from "./Reveal";

const features: Feature[] = [
  {
    number: 1,
    title: "AI Assistant",
    description: "Your personal AI that gets you.",
    icon: Brain,
    color: "#3b5bdb",
    tint: "#e8ecfb",
  },
  {
    number: 2,
    title: "Memory OS",
    description: "Remembers everything that matters.",
    icon: Database,
    color: "#2f8a63",
    tint: "#e5f4ec",
  },
  {
    number: 3,
    title: "Tasks & Plan",
    description: "Plan smarter and stay on track.",
    icon: ListChecks,
    color: "#7c4ddb",
    tint: "#efe9fb",
  },
  {
    number: 4,
    title: "Wellness",
    description: "Your health, our priority.",
    icon: HeartPulse,
    color: "#d64545",
    tint: "#fbe9e9",
  },
  {
    number: 5,
    title: "Finance OS",
    description: "Manage money better.",
    icon: Wallet,
    color: "#2f8a63",
    tint: "#e5f4ec",
  },
  {
    number: 6,
    title: "Travel OS",
    description: "Plan, book & relax stress-free.",
    icon: Plane,
    color: "#2f7bb5",
    tint: "#e6f1f9",
  },
  {
    number: 7,
    title: "Shopping OS",
    description: "Smart shopping made easy.",
    icon: ShoppingBag,
    color: "#b5862f",
    tint: "#f8f0e0",
  },
  {
    number: 8,
    title: "Privacy First",
    description: "You're in control. Always.",
    icon: Lock,
    color: "#d64545",
    tint: "#fbe9e9",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl tracking-[-0.02em] text-navy sm:text-[2.6rem]">
            All Your Life. One Place.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Everything you need to simplify, organize and grow.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal as="li" key={feature.title} delay={i * 60} className="h-full">
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <a
            id="use-cases"
            href="#about"
            className="group inline-flex scroll-mt-24 items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] active:translate-y-0"
          >
            Explore All Features
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}