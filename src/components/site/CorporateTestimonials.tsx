import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/site/Sections";

/**
 * Classic corporate testimonial band: a clean quote grid with client
 * attribution. Sits alongside the interactive shelf format.
 */
export function CorporateTestimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
              Client references
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
              What brand and activation teams say about working with us
            </h2>
          </div>
          <div className="flex items-center gap-2 text-brand">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
            <span className="ml-2 text-sm font-semibold text-muted-foreground">
              Long-tenure partnerships
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <Reveal key={t.brand} delay={i * 70}>
              <figure className="brand-box flex h-full flex-col p-8">
                <Quote className="size-7 text-coral" strokeWidth={1.75} />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    className="flex size-9 items-center justify-center rounded-full font-display text-xs font-bold text-white"
                    style={{ background: t.spine }}
                  >
                    {t.brand.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="font-display text-sm font-bold text-foreground">{t.label}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
