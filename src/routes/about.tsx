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

    {/* Section Heading */}
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
        Leadership
      </p>

      <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
        The people who set
        <br />
        the standard.
      </h2>
    </div>


    {/* ========================================================
        LEADERS
    ======================================================== */}

    <div className="mt-16 divide-y divide-white/10 border-y border-white/10">

      {leadership.map((p, index) => (
        <article
          key={p.name}
          className="group grid lg:grid-cols-12"
        >

          {/* ==================================================
              IMAGE
          ================================================== */}

          <div
            className={`
              relative
              h-[360px]
              overflow-hidden
              sm:h-[430px]
              lg:col-span-5
              lg:h-[500px]
              ${index % 2 === 1 ? "lg:order-2" : ""}
            `}
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="
                absolute inset-0
                h-full w-full
                object-cover object-top
                grayscale
                transition-all duration-700 ease-out
                group-hover:scale-[1.04]
                group-hover:grayscale-0
              "
            />

            {/* Image gradient */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
                opacity-70
              "
            />
          </div>


          {/* ==================================================
              CONTENT
          ================================================== */}

          <div
            className={`
              flex
              flex-col
              justify-center
              px-0
              py-10
              sm:py-12
              lg:col-span-7
              lg:px-14
              lg:py-16
              ${index % 2 === 1 ? "lg:order-1" : ""}
            `}
          >

            {/* Number */}
            <p className="text-[11px] font-bold tracking-[0.22em] text-white/30">
              0{index + 1}
            </p>

            {/* Role */}
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-coral">
              {p.role}
            </p>

            {/* Name */}
            <h3 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[52px]">
              {p.name}
            </h3>

            {/* Accent line */}
            <div className="mt-7 h-px w-14 bg-coral" />

            {/* Bio */}
            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/65 lg:text-base lg:leading-8">
              {p.body}
            </p>


            {/* ==================================================
                LINKEDIN
            ================================================== */}

            {p.name === "Madhavi Pundalik" && (
              <a
                href="https://www.linkedin.com/in/madhavi-pundalik-9256135/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Madhavi Pundalik on LinkedIn"
                className="
                  mt-9
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  border
                  border-white/20
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#0A66C2]
                  hover:bg-[#0A66C2]
                "
              >
                {/* LinkedIn icon */}
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-sm
                    bg-[#0A66C2]
                    text-[12px]
                    font-black
                    text-white
                  "
                >
                  in
                </span>

                <span>LinkedIn</span>

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M5 15L15 5M7 5h8v8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}

            {p.name === "Viru Mhatre" && (
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Viru Mhatre on LinkedIn"
                className="
                  mt-9
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  border
                  border-white/20
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#0A66C2]
                  hover:bg-[#0A66C2]
                "
              >
                {/* LinkedIn icon */}
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-sm
                    bg-[#0A66C2]
                    text-[12px]
                    font-black
                    text-white
                  "
                >
                  in
                </span>

                <span>LinkedIn</span>

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M5 15L15 5M7 5h8v8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}

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
