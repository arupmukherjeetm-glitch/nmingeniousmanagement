import { createFileRoute } from "@tanstack/react-router";

import {
  stats,
  awards,
  faqs,
  foundersGallery,
  leadership,
  strengths,
  timeline,
} from "@/lib/site-data";

import { StatBoard } from "@/components/site/Counter";
import { Gallery } from "@/components/site/Gallery";

import {
  CtaBand,
  Eyebrow,
  LogoWall,
  PageHero,
  Reveal,
} from "@/components/site/Sections";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us | NM Ingenious Management Services",
      },
      {
        name: "description",
        content:
          "From 5 employees in 2008 to 1,650+ people across 185+ cities. The story, leadership, strengths and awards behind NM Ingenious Management Services Pvt. Ltd.",
      },
      {
        property: "og:title",
        content: "About Us | NM Ingenious Management Services",
      },
      {
        property: "og:description",
        content:
          "18 years of retail execution, workforce outsourcing, payroll and HR services for FMCG and retail brands in India.",
      },
    ],
  }),

  component: About,
});

function About() {
  return (
    <>
      {/* ============================================================
          HERO
      ============================================================ */}

      <PageHero
        eyebrow="About us"
        title={
          <>
            Started with five people.{" "}
            <em className="not-italic text-coral">
              Now a family of sixteen hundred.
            </em>
          </>
        }
        intro="NM Ingenious Management Services Pvt. Ltd. is a workforce outsourcing, retail execution and HR services company built inside Indian stores. We started in February 2008 as Ingenious Management Services and have spent every year since learning what actually moves a product off a shelf."
        accent="Established 2008 · Mumbai, India"
      />

      {/* ============================================================
          COMPANY STATS
      ============================================================ */}

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <StatBoard items={stats} />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          WHO WE ARE
      ============================================================ */}

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Eyebrow>Who we are</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
              A retail execution company that happens to be brilliant at HR.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              We provide workforce outsourcing for the FMCG and retail sector,
              third-party payroll management for MSMEs, SMEs, start-ups and
              MNCs, and staffing services for product promotion, beauty
              advisory, merchandizing and front-line sales.
            </p>

            <p>
              Our people work inside modern trade and general trade outlets
              across 31 states and union territories, in 185+ cities and
              towns. They are recruited against a defined profile, trained on
              the brand story, groomed to standard, supervised weekly and
              reviewed on what they actually sold.
            </p>

            <p>
              Everything runs on our own mobile-first technology, from
              IMS-Connect for the field to an automated HRMS that handles
              hire-to-retire. Statutory compliance is not an afterthought; it
              is the foundation the whole operation stands on.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          OUR JOURNEY
      ============================================================ */}

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Our journey</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              Eighteen years, one milestone at a time.
            </h2>
          </div>

          <ol className="relative mt-16 space-y-2 border-l-2 border-border pl-8 lg:pl-12">
            {timeline.map((t, i) => (
              <Reveal key={t.date} delay={i * 40}>
                <li className="group relative pb-8">
                  <span
                    aria-hidden
                    className="absolute -left-[41px] top-1.5 size-4 rounded-full border-4 border-background transition-all duration-500 group-hover:scale-125 lg:-left-[57px]"
                    style={{ background: "var(--brand)" }}
                  />

                  <span
                    aria-hidden
                    className="absolute -left-[41px] top-1.5 size-4 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:-left-[57px]"
                    style={{ background: "var(--coral)" }}
                  />

                  <p className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-coral">
                    {t.date}
                  </p>

                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/85">
                    {t.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          LEADERSHIP
          "THE PEOPLE WHO SET THE STANDARD."
      ============================================================ */}

      <section className="bg-brand-deep py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
              Leadership
            </p>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight lg:text-5xl">
              The people who set the standard.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {leadership.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col gap-6 rounded-xl border border-white/12 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-coral sm:flex-row"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="size-28 shrink-0 rounded-lg object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />

                <div>
                  <h3 className="font-display text-xl font-extrabold">
                    {p.name}
                  </h3>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-coral">
                    {p.role}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-white/65">
                    {p.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FOUNDER'S GALLERY
      ============================================================ */}

           {/* Founder’s Gallery */}
<section className="bg-background py-14 lg:py-16">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    {/* Compact heading */}
    <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
          Founder’s Gallery
        </p>

        <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
          The moments behind the journey.
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-5 text-muted-foreground">
        A few moments that shaped the people, culture and ambition behind NM Ingenious.
      </p>
    </div>

    {/* Compact photo wall */}
    <div className="grid grid-cols-2 grid-rows-4 gap-[3px] overflow-hidden rounded-lg sm:grid-cols-4 sm:grid-rows-2">

      {/* 01 — Large feature */}
      <div className="group relative col-span-2 row-span-2 min-h-[280px] overflow-hidden bg-muted sm:min-h-0">
        <img
          src={foundersGallery[0].image}
          alt={foundersGallery[0].alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute bottom-3 left-3 rounded bg-black/80 px-2 py-1 text-[10px] font-bold tracking-[0.12em] text-white">
          01
        </span>
      </div>

      {/* 02 */}
      <div className="group relative min-h-[135px] overflow-hidden bg-muted sm:min-h-0">
        <img
          src={foundersGallery[1].image}
          alt={foundersGallery[1].alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute bottom-2 left-2 rounded bg-black/80 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.1em] text-white">
          02
        </span>
      </div>

      {/* 03 */}
      <div className="group relative min-h-[135px] overflow-hidden bg-muted sm:min-h-0">
        <img
          src={foundersGallery[2].image}
          alt={foundersGallery[2].alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute bottom-2 left-2 rounded bg-black/80 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.1em] text-white">
          03
        </span>
      </div>

      {/* 04 */}
      <div className="group relative min-h-[135px] overflow-hidden bg-muted sm:min-h-0">
        <img
          src={foundersGallery[3].image}
          alt={foundersGallery[3].alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute bottom-2 left-2 rounded bg-black/80 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.1em] text-white">
          04
        </span>
      </div>

      {/* 05 */}
      <div className="group relative min-h-[135px] overflow-hidden bg-muted sm:min-h-0">
        <img
          src={foundersGallery[4].image}
          alt={foundersGallery[4].alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute bottom-2 left-2 rounded bg-black/80 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.1em] text-white">
          05
        </span>
      </div>

      {/* 06 */}
      <div className="group relative min-h-[135px] overflow-hidden bg-muted sm:min-h-0">
        <img
          src={foundersGallery[5].image}
          alt={foundersGallery[5].alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute bottom-2 left-2 rounded bg-black/80 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.1em] text-white">
          06
        </span>
      </div>

      {/* 07 */}
      <div className="group relative min-h-[135px] overflow-hidden bg-muted sm:min-h-0">
        <img
          src={foundersGallery[6].image}
          alt={foundersGallery[6].alt}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute bottom-2 left-2 rounded bg-black/80 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.1em] text-white">
          07
        </span>
      </div>

    </div>
  </div>
</section>

      {/* ============================================================
          OUR STRENGTHS
      ============================================================ */}

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Our strengths</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              Four disciplines we refuse to compromise on.
            </h2>
          </div>

          <div className="mt-14 space-y-12">
            {strengths.map((g, gi) => (
              <div key={g.group}>
                <div className="flex items-center gap-5">
                  <span className="font-display text-4xl font-extrabold text-border">
                    {String(gi + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-xl font-extrabold text-brand lg:text-2xl">
                    {g.group}
                  </h3>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {g.points.map((p, i) => (
                    <Reveal key={p.title} delay={i * 50}>
                      <div className="brand-box h-full p-6">
                        <h4 className="font-display text-base font-extrabold text-foreground">
                          {p.title}
                        </h4>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {p.body}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          EXISTING COMPANY GALLERY
      ============================================================ */}

      <Gallery
        eyebrow="Gallery"
        title="Eighteen years, seen from the store floor"
        intro="Our promoters, beauty advisors, merchandizers and activation teams inside stores across India."
      />

      {/* ============================================================
          AWARDS & RECOGNITION
      ============================================================ */}

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Awards & recognition</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              Recognised for the work and for the workplace.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <article className="brand-box h-full p-8">
                  <h3 className="font-display text-xl font-extrabold text-foreground">
                    {a.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-coral">
                    {a.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {a.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CLIENT LOGOS
      ============================================================ */}

      <LogoWall />

      {/* ============================================================
          FAQ
      ============================================================ */}

      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <Eyebrow>FAQs</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-4xl">
              Questions we get asked most.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:text-brand">
                    {f.q}
                  </AccordionTrigger>

                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}

      <CtaBand />
    </>
  );
}
