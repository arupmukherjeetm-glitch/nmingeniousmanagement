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

<section className="bg-background py-20 lg:py-28">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    {/* ==========================================================
        HEADER
    ========================================================== */}

    <div className="max-w-2xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-coral">
        Leadership
      </p>

      <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[52px]">
        The people who set
        <br className="hidden sm:block" />
        the standard.
      </h2>
    </div>


    {/* ==========================================================
        FOUNDERS
    ========================================================== */}

    <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-0">

      {leadership.map((p, index) => {
        const isMadhavi = p.name === "Madhavi Pundalik";

        const image = isMadhavi
          ? "/media/founders/founders-01.webp"
          : "/media/founders/founders-06.webp";

        const linkedin = isMadhavi
          ? "https://www.linkedin.com/in/madhavi-pundalik-9256135/"
          : "https://www.linkedin.com/in/";

        return (
          <article
            key={p.name}
            className={`
              group
              relative
              flex
              flex-col
              items-center
              text-center
              px-5
              sm:px-10
              lg:px-14
              ${
                index === 0
                  ? "lg:border-r lg:border-border"
                  : ""
              }
            `}
          >

            {/* ==================================================
                PORTRAIT
            ================================================== */}

            <div className="relative">

              {/* Outer accent ring */}
              <div
                className="
                  absolute
                  -inset-3
                  rounded-full
                  border
                  border-coral/20
                  transition-all
                  duration-500
                  group-hover:inset-[-8px]
                  group-hover:border-coral/50
                "
              />

              {/* Portrait */}
              <div
                className="
                  relative
                  h-52
                  w-52
                  overflow-hidden
                  rounded-full
                  border-[6px]
                  border-background
                  bg-muted
                  shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                  sm:h-60
                  sm:w-60
                  lg:h-64
                  lg:w-64
                "
              >
                <img
                  src={image}
                  alt={p.name}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.05]
                  "
                />
              </div>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${p.name} on LinkedIn`}
                className="
                  absolute
                  bottom-1
                  right-1
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0A66C2]
                  text-white
                  shadow-lg
                  ring-4
                  ring-background
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-[#004182]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.34 7.4a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>
              </a>

            </div>


            {/* ==================================================
                INFORMATION
            ================================================== */}

            <div className="mt-9 max-w-lg">

              {/* Role */}
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-coral">
                {p.role}
              </p>

              {/* Name */}
              <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {p.name}
              </h3>

              {/* Accent */}
              <div className="mx-auto mt-5 h-[2px] w-10 bg-coral transition-all duration-500 group-hover:w-16" />

              {/* Bio */}
              <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-7">
                {p.body}
              </p>

            </div>

          </article>
        );
      })}

    </div>

  </div>
</section>

      {/* ============================================================
          FOUNDER'S GALLERY
      ============================================================ */}

          {/* Founder’s Gallery */}
<section className="bg-background py-12 lg:py-14">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    <div className="mb-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
        Founder’s Gallery
      </p>

      <h2 className="mt-2 max-w-3xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-black sm:text-4xl lg:text-[42px]">
        The moments behind the journey.
      </h2>
    </div>

    {/* Desktop: all 7 visible | Mobile: horizontal scroll */}
    <div className="overflow-x-auto pb-1 lg:overflow-visible">
      <div className="flex min-w-max items-end gap-1.5 lg:min-w-0">

        {foundersGallery.map((item, index) => (
          <div
            key={item.image}
            className={`
              group relative shrink-0 overflow-hidden rounded-md bg-muted
              lg:min-w-0 lg:flex-1
              ${
                index === 0
                  ? "h-[280px] w-[190px] lg:h-[285px]"
                  : index === 1
                    ? "h-[250px] w-[175px] lg:h-[255px]"
                    : index === 2
                      ? "h-[270px] w-[185px] lg:h-[275px]"
                      : index === 3
                        ? "h-[245px] w-[170px] lg:h-[250px]"
                        : index === 4
                          ? "h-[275px] w-[185px] lg:h-[280px]"
                          : index === 5
                            ? "h-[250px] w-[175px] lg:h-[255px]"
                            : "h-[265px] w-[180px] lg:h-[270px]"
              }
            `}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="
                h-full
                w-full
                object-cover
                object-top
                transition-transform
                duration-500
                ease-out
                group-hover:scale-[1.04]
              "
            />

            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-transparent
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />
          </div>
        ))}

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
