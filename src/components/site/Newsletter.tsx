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
      <div className="container-page pb-20 lg:pb-[120px]">
        <Reveal>
          <div className="grid items-center gap-8 rounded-xl border border-border bg-surface px-8 py-8 sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-surface-alt">
                <Mail className="h-5 w-5 text-ink" strokeWidth={1.5} />
              </span>
              <span className="min-w-0">
                <h2 className="text-[21px] font-semibold tracking-[-0.02em] text-ink">
                  Get updates with LifeOS
                </h2>
                <p className="mt-1.5 text-[15px] leading-[1.55] text-ink-soft">
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
                className="min-w-0 flex-1 rounded-lg border border-border bg-surface-alt px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-subtle focus:border-ink"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-ink text-primary-foreground transition-colors hover:bg-ink/90"
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