import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Samuel Thomas",
    company: "Director at Axiom Gen Nxt India Pvt Ltd",
    quote:
      "Always a pleasure working with the NM Ingenious teams! Reliable, responsive, and flexible in the ever-changing event environment.",
    shortName: "Samuel Thomas",
  },
  {
    name: "Saurabh Desai",
    company: "HR Professional",
    quote:
      "The team at NM Ingenious teams are an absolute pleasure to deal with. Their hiring and training ensured that we had the best people representing our brand in bigstores across the country.",
    shortName: "Saurabh Desai",
  },
  {
    name: "Tejas Goenka",
    company: "MSME Honours",
    quote:
      "Businesses like you are driven by innovation & inspire the rest of us. It was amazing to hear your story & we are glad that you gave us a chance to share it with the world.",
    shortName: "Tejas Goenka",
  },
  {
    name: "Kanu",
    company: "Senior Purchase Manager | Indian MNC",
    quote:
      "I have had great experience working with you over last couple of years and value Ingenious team for being P&G's partner for so many years. I would hope for this partnership to continue and grow in future.",
    shortName: "Kanu",
  },
  {
    name: "Rishabh Mariwala",
    company: "Marico",
    quote:
      "I wanted to thank you for your ongoing help and a assistance to Soap Opera for sourcing of promoters. We look forward to your continued support in future.",
    shortName: "Rishabh Mariwala",
  },
];

export function CorporateTestimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = testimonials[active];

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () => {
    setActive(
      (index) =>
        (index - 1 + testimonials.length) %
        testimonials.length,
    );
  };

  const next = () => {
    setActive(
      (index) =>
        (index + 1) % testimonials.length,
    );
  };

  return (
    <section
      className="relative overflow-hidden bg-white py-20 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HEADER */}

        <div className="mb-12 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-coral">
              <span className="h-[2px] w-8 bg-coral" />
              Client voices
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-[1.03] tracking-tight text-black lg:text-5xl">
              A word from the
              <br />
              people we work with.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
            Strong partnerships are built through
            consistency, responsiveness and dependable
            execution.
          </p>
        </div>


        {/* TESTIMONIAL */}

        <div
          key={active}
          className="grid overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:grid-cols-[1fr_290px]"
        >

          {/* MAIN QUOTE */}

          <div className="relative flex min-h-[330px] flex-col justify-between overflow-hidden p-8 sm:p-10 lg:p-14">

            {/* Oversized decorative quotation */}

            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-16 select-none font-serif text-[260px] leading-none text-neutral-100"
            >
              “
            </span>

            <div className="relative z-10">

              <div className="mb-7 flex size-11 items-center justify-center rounded-full bg-coral/10 text-coral">
                <Quote
                  className="size-5"
                  strokeWidth={1.6}
                />
              </div>

              <blockquote className="max-w-3xl font-display text-xl font-semibold leading-[1.55] text-black sm:text-2xl lg:text-[1.65rem]">
                “{current.quote}”
              </blockquote>

            </div>


            {/* AUTHOR */}

            <div className="relative z-10 mt-10 flex items-end justify-between gap-6 border-t border-neutral-200 pt-6">

              <div>
                <p className="font-display text-base font-bold text-black">
                  {current.name}
                </p>

                <p className="mt-1 text-sm text-neutral-600">
                  {current.company}
                </p>
              </div>

              <div
                aria-hidden="true"
                className="hidden size-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 font-display text-xs font-bold text-black sm:flex"
              >
                {current.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

            </div>

          </div>


          {/* CLIENT SELECTOR */}

          <div className="border-t border-neutral-200 bg-neutral-50 p-3 lg:border-l lg:border-t-0">

            <div className="flex h-full flex-row gap-2 overflow-x-auto lg:flex-col lg:justify-center lg:overflow-visible">

              {testimonials.map((testimonial, index) => {
                const isActive = index === active;

                return (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={isActive}
                    className={`
                      group relative flex min-w-[145px]
                      items-center rounded-xl px-4 py-4
                      text-left transition-all duration-300
                      lg:min-w-0

                      ${
                        isActive
                          ? "bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
                          : "bg-transparent hover:bg-white"
                      }
                    `}
                  >

                    {/* Coral active line */}

                    <span
                      className={`
                        absolute left-0 top-1/2 hidden
                        h-7 w-[3px]
                        -translate-y-1/2
                        rounded-full
                        transition-all duration-300
                        lg:block

                        ${
                          isActive
                            ? "bg-coral"
                            : "bg-transparent"
                        }
                      `}
                    />

                    <span className="min-w-0">

                      <span
                        className={`
                          block truncate text-xs font-bold
                          transition-colors

                          ${
                            isActive
                              ? "text-black"
                              : "text-neutral-500 group-hover:text-black"
                          }
                        `}
                      >
                        {testimonial.shortName}
                      </span>

                      <span className="mt-1 block truncate text-[10px] text-neutral-500">
                        {testimonial.company}
                      </span>

                    </span>

                  </button>
                );
              })}

            </div>
          </div>

        </div>


        {/* CONTROLS */}

        <div className="mt-5 flex items-center justify-between">

          {/* Progress */}

          <div className="flex items-center gap-1.5">

            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`
                  h-1.5 rounded-full transition-all duration-300

                  ${
                    active === index
                      ? "w-7 bg-coral"
                      : "w-1.5 bg-neutral-300"
                  }
                `}
              />
            ))}

          </div>


          {/* Arrows */}

          <div className="flex gap-2">

            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previous}
              className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:bg-coral hover:text-white"
            >
              <ArrowLeft
                className="size-4"
                strokeWidth={1.7}
              />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:bg-coral hover:text-white"
            >
              <ArrowRight
                className="size-4"
                strokeWidth={1.7}
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
