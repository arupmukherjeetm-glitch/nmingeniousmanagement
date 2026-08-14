import { useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Person names mapped to the testimonial brand.
 *
 * Add the remaining names here when their brand mapping is confirmed.
 */
const testimonialNames: Record<string, string> = {
  "P&G": "Kanu",
  "Axiom": "Samuel Thomas",
  "Marico": "Rishabh Mariwala",
};

export function ShelfTestimonials() {
  const [active, setActive] = useState(0);

  const activeTestimonial = testimonials[active]!;

  // Get the person's name from the local mapping.
  // Falls back to the existing label if a brand has not been mapped yet.
  const activeName =
    testimonialNames[activeTestimonial.brand] ??
    activeTestimonial.label;

  return (
    <section className="relative overflow-hidden bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="max-w-2xl">

          <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
            Off the shelf, in their words
          </p>

          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
            Pick a brand off the shelf. Read what they said.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every pack on this shelf is a client we still work with.
            Select one to take it down.
          </p>

        </div>


        {/* =====================================================
            SHELF + TESTIMONIAL
        ===================================================== */}

        <div className="mt-16 grid items-end gap-10 lg:grid-cols-12">

          {/* ===================================================
              THE SHELF
          =================================================== */}

          <div className="lg:col-span-5">

            <div className="relative">

              <div className="flex items-end justify-center gap-3 sm:gap-4">

                {testimonials.map((t, i) => {

                  const isActive = i === active;

                  return (
                    <button
                      key={t.brand}
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={isActive}
                      className={cn(
                        "group relative w-14 shrink-0 cursor-pointer rounded-t-[3px] outline-none transition-all duration-500 sm:w-16",
                        isActive
                          ? "h-64 -translate-y-4"
                          : "h-52 hover:-translate-y-2",
                      )}
                      style={{
                        background: t.spine,

                        boxShadow: isActive
                          ? "0 24px 40px -18px oklch(0.34 0.09 245 / 0.6)"
                          : "0 10px 20px -14px oklch(0.34 0.09 245 / 0.5)",

                        transformOrigin:
                          "bottom center",
                      }}
                    >

                      {/* Left highlight */}

                      <span
                        aria-hidden
                        className="absolute inset-y-0 left-0 w-[3px] bg-white/25"
                      />


                      {/* Top line */}

                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-2 top-3 h-0.5 transition-all duration-500",
                          isActive
                            ? "bg-white"
                            : "bg-white/40",
                        )}
                      />


                      {/* Brand name */}

                      <span
                        className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-display text-xs font-bold uppercase tracking-[0.18em] text-white"
                        style={{
                          writingMode: "vertical-rl",
                          transform:
                            "rotate(180deg)",
                        }}
                      >
                        {t.brand}
                      </span>


                      {/* Bottom label */}

                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-2 bottom-3 h-6 rounded-[2px] transition-all duration-500",
                          isActive
                            ? "bg-white/90"
                            : "bg-white/30",
                        )}
                      />

                    </button>
                  );
                })}

              </div>


              {/* =================================================
                  SHELF BOARD
              ================================================= */}

              <div className="relative mt-0">

                <div
                  className="h-3 rounded-sm"
                  style={{
                    background:
                      "var(--brand-deep)",
                  }}
                  aria-hidden
                />

                <div
                  className="mx-3 h-8 rounded-b-lg opacity-30 blur-md"
                  style={{
                    background:
                      "var(--brand-deep)",
                  }}
                  aria-hidden
                />

              </div>


              <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Shelf 01 · Client testimonials
              </p>

            </div>

          </div>


          {/* ===================================================
              OPENED PACK / TESTIMONIAL
          =================================================== */}

          <div className="lg:col-span-7">

            <div className="brand-box relative p-8 lg:p-12">

              {/* Brand colour indicator */}

              <div
                aria-hidden
                className="absolute left-0 top-0 h-full w-1.5 rounded-l-xl"
                style={{
                  background:
                    activeTestimonial.spine,
                }}
              />


              {/* Quote icon */}

              <Quote
                className="size-9 text-coral"
                strokeWidth={1.5}
              />


              {/* Quote */}

              <blockquote
                key={active}
                className="mt-6 font-display text-xl font-semibold leading-relaxed text-foreground animate-in fade-in slide-in-from-bottom-3 duration-500 lg:text-2xl"
              >
                “{activeTestimonial.quote}”
              </blockquote>


              {/* =================================================
                  PERSON / COMPANY
              ================================================= */}

              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">

                {/* Initials */}

                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                  style={{
                    background:
                      activeTestimonial.spine,
                  }}
                >
                  {activeName
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>


                <div>

                  {/* PERSON NAME */}

                  <p className="font-display text-sm font-bold text-foreground">
                    {activeName}
                  </p>


                  {/* COMPANY / ROLE */}

                  <p className="text-xs text-muted-foreground">
                    {activeTestimonial.label}
                  </p>

                </div>

              </figcaption>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
