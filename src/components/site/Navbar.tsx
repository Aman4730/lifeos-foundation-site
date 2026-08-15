import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "LifeScore", href: "#lifescore" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[1000] border-b border-transparent bg-[oklch(1_0_0_/_0.94)] transition-all duration-200 ease-out",
        scrolled &&
          "border-border bg-[oklch(1_0_0_/_0.97)] shadow-[0_1px_2px_oklch(0_0_0_/_0.04)] backdrop-blur-[14px]",
      )}
    >
<<<<<<< HEAD
      <nav className="mx-auto grid max-w-[1450px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-6">
        <a href="#home" className="mt-3 min-w-0" aria-label="LifeOS home">
          <Logo />
        </a>

        <div className="hidden items-center gap-24 lg:flex">
          <ul className="flex items-center gap-7 text-[17px] text-muted-foreground">
=======
      <nav className="container-x grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-[76px]">
        <a href="#home" className="min-w-0" aria-label="LifeOS home">
          <Logo />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-muted-foreground">
>>>>>>> eaeb35e1a1b3d73cc89a75de1f83d7c77819980c
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative py-1 transition-colors duration-200 hover:text-foreground",
                    i === 0 && "text-foreground",
                  )}
                >
                  {link.label}
                  {i === 0 && (
                    <span className="absolute -bottom-1 left-1/2 h-px w-4 -translate-x-1/2 bg-gold" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#founder"
<<<<<<< HEAD
            className="rounded-lg bg-navy px-5 py-2.5 text-[16px] font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] active:translate-y-0"
=======
            className="btn-base btn-primary group"
>>>>>>> eaeb35e1a1b3d73cc89a75de1f83d7c77819980c
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-alt lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
<<<<<<< HEAD
          <ul className="mx-auto max-w-[1600px] px-5 py-3">
=======
          <ul className="container-x py-2">
>>>>>>> eaeb35e1a1b3d73cc89a75de1f83d7c77819980c
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
<<<<<<< HEAD
                  className="block border-b border-border/60 py-3 text-[17px] text-muted-foreground transition-colors hover:text-navy"
=======
                  className="block border-b border-border/70 py-3 text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
>>>>>>> eaeb35e1a1b3d73cc89a75de1f83d7c77819980c
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href="#founder"
                onClick={() => setOpen(false)}
                className="btn-base btn-primary w-full"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}