import { useState } from "react";
import { Quote, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Sections";

/**
 * Corporate testimonial band — indigo and white only, on a light indigo
 * gradient. A featured quote panel with a named client list beside it.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active]!;

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "var(--gradient-indigo-light)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 size-[26rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--indigo-glow) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-indigo">
            Client testimonials
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-indigo-deep lg:text-5xl">
            Trusted by the teams who own the shelf
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Long-tenure partnerships with brand, trade marketing and activation
            leaders across modern trade and general trade.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Featured quote */}
          <Reveal className="lg:col-span-7">
            <figure className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-background p-8 shadow-[0_28px_60px_-32px_oklch(0.33_0.13_277/0.45)] ring-1 ring-indigo/12 lg:p-12">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background:
                    "linear-gradient(90deg, var(--indigo-deep), var(--indigo-glow))",
                }}
              />
              <Quote className="size-10 text-indigo/70" strokeWidth={1.5} />
              <blockquote
                key={active}
                className="mt-6 flex-1 font-display text-xl font-semibold leading-relaxed text-indigo-deep duration-500 animate-in fade-in slide-in-from-bottom-2 lg:text-[1.6rem]"
              >
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 border-t border-indigo/12 pt-6">
                <span
                  className="flex size-12 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                  style={{ background: current.spine }}
                >
                  {current.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-display text-base font-bold text-indigo-deep">
                    {current.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Named client list */}
          <div className="lg:col-span-5">
            <ul className="flex flex-col gap-3">
              {testimonials.map((t, i) => {
                const isActive = i === active;
                return (
                  <li key={t.brand}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={isActive}
                      className={cn(
                        "group flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300",
                        isActive
                          ? "border-indigo/30 bg-background shadow-[0_18px_40px_-28px_oklch(0.33_0.13_277/0.6)]"
                          : "border-indigo/12 bg-background/60 hover:border-indigo/25 hover:bg-background",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white transition-transform duration-300",
                          isActive ? "scale-105" : "opacity-80",
                        )}
                        style={{ background: t.spine }}
                      >
                        {t.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-sm font-bold text-indigo-deep">
                          {t.name}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {t.role}
                        </span>
                      </span>
                      <ArrowRight
                        className={cn(
                          "size-4 shrink-0 text-indigo transition-all duration-300",
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-indigo/70">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")} · Select a client
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
