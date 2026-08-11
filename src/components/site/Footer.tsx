import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "LifeScore", href: "#lifescore" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#about" },
      { label: "Guides", href: "#features" },
      { label: "Privacy Policy", href: "#about" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="blog" className="scroll-mt-24 border-t border-border bg-surface-alt/60">
      <div className="mx-auto grid max-w-[1450px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] lg:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-[200px] text-[13px] leading-relaxed text-muted-foreground">
            Your assistant, your memory, your life.
          </p>
          <div className="mt-5 flex gap-2">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#home"
                aria-label="LifeOS social profile"
                className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[13px] font-semibold text-navy">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] text-muted-foreground transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[13px] font-semibold text-navy">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-[13px] text-muted-foreground">
            <li>
              <a href="mailto:hello@lifeos.app" className="transition-colors hover:text-gold">
                hello@lifeos.app
              </a>
            </li>
            <li>
              <a href="tel:+911234567890" className="transition-colors hover:text-gold">
                +91 123 456 7890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground lg:px-6">
          <p>© {new Date().getFullYear()} LifeOS. All rights reserved.</p>
          <p>Made with care for everyday life.</p>
        </div>
      </div>
    </footer>
  );
}