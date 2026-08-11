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
  { number: 1, title: "AI Assistant", description: "Your personal AI that gets you.", icon: Brain },
  {
    number: 2,
    title: "Memory OS",
    description: "Remembers everything that matters.",
    icon: Database,
  },
  {
    number: 3,
    title: "Tasks & Plan",
    description: "Plan smarter and stay on track.",
    icon: ListChecks,
  },
  { number: 4, title: "Wellness", description: "Your health, our priority.", icon: HeartPulse },
  { number: 5, title: "Finance OS", description: "Manage money better.", icon: Wallet },
  { number: 6, title: "Travel OS", description: "Plan, book & relax stress-free.", icon: Plane },
  { number: 7, title: "Shopping OS", description: "Smart shopping made easy.", icon: ShoppingBag },
  { number: 8, title: "Privacy First", description: "You're in control. Always.", icon: Lock },
];

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-24">
      <div className="container-page py-16 sm:py-20 lg:py-[120px]">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow text-subtle">Life Vaults</p>
          <h2 className="display-section mt-4 text-ink">
            All Your Life. One Place.
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-[17px] leading-[1.6] text-ink-soft sm:text-[18px]">
            Everything you need to simplify, organize and grow.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal as="li" key={feature.title} delay={i * 60} className="h-full">
              <FeatureCard feature={feature} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 flex justify-center">
          <a id="use-cases" href="#about" className="btn-base btn-primary group scroll-mt-24 px-7 py-4">
            Explore All Features
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}