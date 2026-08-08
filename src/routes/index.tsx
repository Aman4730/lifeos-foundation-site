import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { PhilosophySection } from "@/components/site/PhilosophySection";
import { FounderBanner } from "@/components/site/FounderBanner";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LifeOS — One Assistant. One Memory. One Life." },
      {
        name: "description",
        content:
          "LifeOS is the AI operating system for your life — it remembers everything, understands you, and manages tasks, money, travel and wellness in one place.",
      },
      { property: "og:title", content: "LifeOS — One Assistant. One Memory. One Life." },
      {
        property: "og:description",
        content: "The AI operating system for your entire life. Loved by 2,000+ early users.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeatureGrid />
        <PhilosophySection />
        <FounderBanner />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
