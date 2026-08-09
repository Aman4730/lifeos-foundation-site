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
    <footer id="blog" className="scroll-mt-24 border-t border-border bg-surface-alt">
      <div className="container-page grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
        <div>
          <Logo />
          <p className="mt-5 max-w-[220px] text-[15px] leading-[1.6] text-ink-soft">
            Your assistant, your memory, your life.
          </p>
          <div className="mt-6 flex gap-2">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#home"
                aria-label="LifeOS social profile"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-ink">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[15px] text-ink-soft transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-ink">Contact</h3>
          <ul className="mt-5 space-y-3 text-[15px] text-ink-soft">
            <li>
              <a href="mailto:hello@lifeos.app" className="transition-colors hover:text-ink">
                hello@lifeos.app
              </a>
            </li>
            <li>
              <a href="tel:+911234567890" className="transition-colors hover:text-ink">
                +91 123 456 7890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-6 text-[13px] text-subtle">
          <p>© {new Date().getFullYear()} LifeOS. All rights reserved.</p>
          <p>Made with care for everyday life.</p>
        </div>
      </div>
    </footer>
  );
}