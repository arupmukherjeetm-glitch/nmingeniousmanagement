import { useState } from "react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/site/Sections";
import { cn } from "@/lib/utils";

/**
 * Corporate testimonial module with a modern twist: a large featured quote
 * on the left driven by a selectable client rail on the right. Each entry
 * carries the person's role and company so attribution is explicit.
 */
export function CorporateTestimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active] ?? testimonials[0];

  if (!current) return null;

  return (
    <section className="relative overflow-hidden bg-brand-soft py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 hidden size-[26rem] rounded-full opacity-[0.07] lg:block"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
              Client references
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
              What brand and activation teams say about working with us
            </h2>
          </div>
          <div className="flex items-center gap-2 text-coral">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
            <span className="ml-2 text-sm font-semibold text-muted-foreground">
              Long-tenure partnerships
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* Featured quote */}
          <Reveal>
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-background p-8 lg:p-12">
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-1.5"
                style={{ background: "var(--gradient-brand)" }}
              />
              <div>
                <Quote className="size-10 text-coral" strokeWidth={1.5} />
                <blockquote
                  key={current.brand}
                  className="mt-6 font-display text-xl font-semibold leading-relaxed text-foreground animate-in fade-in slide-in-from-bottom-2 duration-500 lg:text-[1.6rem] lg:leading-[1.5]"
                >
                  “{current.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-10 flex items-center gap-4 border-t border-border pt-6">
                <span
                  className="flex size-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                  style={{ background: current.spine }}
                >
                  {current.brand.slice(0, 2).toUpperCase()}
                </span>
                <span>
                  <span className="block font-display text-base font-bold text-foreground">
                    {current.author}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {current.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Client rail */}
          <div className="flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.brand}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  "group flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300",
                  i === active
                    ? "border-transparent bg-background shadow-[var(--shadow-soft)]"
                    : "border-border bg-background/50 hover:border-brand/30 hover:bg-background",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "h-10 w-1 rounded-full transition-all duration-300",
                    i === active ? "opacity-100" : "opacity-25 group-hover:opacity-60",
                  )}
                  style={{ background: t.spine }}
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-sm font-bold text-foreground">
                    {t.author}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {t.company}
                  </span>
                </span>
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-[0.18em] transition-colors",
                    i === active ? "text-coral" : "text-muted-foreground/50",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
