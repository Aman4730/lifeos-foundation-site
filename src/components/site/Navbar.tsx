import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
        "sticky top-0 z-50 border-b border-transparent transition-colors",
        scrolled && "border-border bg-background/90 backdrop-blur-md",
      )}
    >
      <nav className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5">
        <a href="#home" className="min-w-0" aria-label="LifeOS home">
          <Logo />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8 text-[14px] font-medium text-ink-soft xl:gap-9">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative py-1 transition-colors hover:text-ink",
                    i === 0 && "text-ink",
                  )}
                >
                  {link.label}
                  {i === 0 && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-ink" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#founder"
            className="rounded-lg bg-ink px-5 py-2.5 text-[14px] font-semibold text-primary-foreground transition-colors hover:bg-ink/90"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="container-page py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3.5 text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href="#founder"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-ink px-5 py-3.5 text-center text-[15px] font-semibold text-primary-foreground"
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