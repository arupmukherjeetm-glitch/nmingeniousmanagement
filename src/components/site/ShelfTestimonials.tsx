import { useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * Person attribution mapped to the testimonial brand.
 *
 * These names/designations are based on the client testimonials
 * provided for the website.
 */
const testimonialPeople: Record<
  string,
  {
    name: string;
    designation: string;
  }
> = {
  "P&G": {
    name: "Kanu",
    designation: "Senior Purchase Manager | Indian MNC",
  },

  "Axiom": {
    name: "Samuel Thomas",
    designation: "Director | Axiom Gen Nxt India Pvt Ltd",
  },

  "Marico": {
    name: "Rishabh Mariwala",
    designation: "Marico",
  },

  "Cipla Health": {
    name: "Saurabh Desai",
    designation: "HR Professional",
  },

  "National Retail": {
    name: "Tejas Goenka",
    designation: "MSME Honours",
  },
};

/**
 * Testimonials as a retail shelf.
 *
 * Each client quote is represented as a product pack on a shelf.
 * Selecting or hovering over a pack opens the corresponding
 * testimonial on the right.
 */
export function ShelfTestimonials() {
  const [active, setActive] = useState(0);

  const activeTestimonial = testimonials[active];

  if (!activeTestimonial) return null;

  const activePerson =
    testimonialPeople[activeTestimonial.brand];

  const activeName =
    activePerson?.name ??
    activeTestimonial.label;

  const activeDesignation =
    activePerson?.designation ??
    "";

  return (
    <section className="relative overflow-hidden bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="max-w-2xl">

          <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
            Client voices
          </p>

          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
            A word from the
            people we work with.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
             Strong partnerships are built through consistency, responsiveness and dependable execution.
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


                      {/* Bottom highlight */}

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
              OPENED TESTIMONIAL
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


              {/* Testimonial quote */}

              <blockquote
                key={active}
                className="mt-6 font-display text-xl font-semibold leading-relaxed text-foreground animate-in fade-in slide-in-from-bottom-3 duration-500 lg:text-2xl"
              >
                “{activeTestimonial.quote}”
              </blockquote>


              {/* =================================================
                  PERSON ATTRIBUTION
              ================================================= */}

              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">

                {/* Initials circle */}

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


                {/* Name + Designation */}

                <div className="min-w-0">

                  <p className="font-display text-sm font-bold text-foreground">
                    {activeName}
                  </p>

                  {activeDesignation && (
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {activeDesignation}
                    </p>
                  )}

                </div>

              </figcaption>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
