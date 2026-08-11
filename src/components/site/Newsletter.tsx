import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <section id="pricing" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-6 rounded-2xl border border-border bg-surface px-6 py-6 shadow-[var(--shadow-soft)] sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-alt">
                <Mail className="h-5 w-5 text-gold" strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <h2 className="text-[15px] font-semibold text-navy">Get updates with LifeOS</h2>
                <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                  New features, tips and inspiration in your inbox.
                </p>
              </span>
            </div>

            <form onSubmit={onSubmit} className="flex w-full items-center gap-2 lg:w-[340px]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-lg border border-border bg-surface-alt px-4 py-3 text-[13px] text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy text-primary-foreground transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                {sent ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}