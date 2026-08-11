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
        "sticky top-0 z-[1000] border-b border-transparent bg-background/[0.94] backdrop-blur-[14px]",
        "transition-[background-color,border-color,box-shadow] duration-200 ease-out",
        scrolled && "border-border bg-background/[0.97] shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
      )}
    >
      <nav className="container-page grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-[76px]">
        <a href="#home" className="min-w-0" aria-label="LifeOS home">
          <Logo />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-ink-soft xl:gap-9">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative py-1 transition-colors duration-200 hover:text-ink",
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
          <a href="#founder" className="btn-base btn-primary group px-5 py-3">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-ink transition-colors hover:bg-surface-alt lg:hidden"
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
                  className="block border-b border-border py-3.5 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href="#founder"
                onClick={() => setOpen(false)}
                className="btn-base btn-primary w-full px-5 py-3.5"
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