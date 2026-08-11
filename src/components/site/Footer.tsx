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
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] lg:py-20">
        <div>
          <Logo />
          <p className="mt-4 max-w-[220px] text-[15px] leading-[1.6] text-muted-foreground">
            Your assistant, your memory, your life.
          </p>
          <div className="mt-6 flex gap-2">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#home"
                aria-label="LifeOS social profile"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted-soft transition-colors duration-200 hover:border-muted-soft hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-[15px] font-semibold text-foreground">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[15px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[15px] font-semibold text-foreground">Contact</h3>
          <ul className="mt-5 space-y-3 text-[15px] text-muted-foreground">
            <li>
              <a
                href="mailto:hello@lifeos.app"
                className="transition-colors duration-200 hover:text-foreground"
              >
                hello@lifeos.app
              </a>
            </li>
            <li>
              <a
                href="tel:+911234567890"
                className="transition-colors duration-200 hover:text-foreground"
              >
                +91 123 456 7890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-6 text-[14px] text-muted-foreground">
          <p>© {new Date().getFullYear()} LifeOS. All rights reserved.</p>
          <p>Made with care for everyday life.</p>
        </div>
      </div>
    </footer>
  );
}