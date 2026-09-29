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
          "From 5 employees in 2008 to 2150+ people across 185+ cities. The story, leadership, strengths and awards behind NM Ingenious Management Services Pvt. Ltd.",
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
              Now a Family of twenty one hundred plus.
            </em>
          </>
        }
        intro="NM Ingenious Management Services Pvt. Ltd. is a workforce outsourcing, retail execution and HR services company built inside Indian stores. We started in February 2008 as Ingenious Management Services, since then we have spent every year as learning what actually moves product."
        accent="Established 2008 · Mumbai, India"
      />

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

      <section className="bg-[#F5F7FB] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">

          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-coral">
              Leadership
            </p>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[46px]">
              The people who set the standard.
            </h2>
          </div>

          {/* ==========================================================
              LEADERS
          ========================================================== */}

          <div className="mt-14 grid gap-16 lg:mt-18 lg:grid-cols-2 lg:gap-0">

            {/* ========================================================
                MADHAVI MHATRE
            ======================================================== */}

            <article className="group flex flex-col items-center px-4 text-center lg:border-r lg:border-border lg:px-14">

              {/* Portrait */}
              <div className="relative">

                {/* Fine coral ring */}
                <div
                  className="
                    absolute
                    -inset-3
                    rounded-full
                    border
                    border-coral/20
                    transition-all
                    duration-500
                    group-hover:-inset-4
                    group-hover:border-coral/45
                  "
                />

                {/* Image */}
                <div
                  className="
                    relative
                    h-52
                    w-52
                    overflow-hidden
                    rounded-full
                    border-[5px]
                    border-background
                    bg-muted
                    shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                    sm:h-56
                    sm:w-56
                    lg:h-60
                    lg:w-60
                  "
                >
                  <img
                    src="/media/madhavi.webp"
                    alt="Madhavi Pundalik"
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.05]
                    "
                  />
                </div>

                {/* LinkedIn logo */}
                <a
                  href="https://www.linkedin.com/in/madhavi-pundalik-9256135/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Madhavi Pundalik on LinkedIn"
                  className="
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0A66C2]
                    text-white
                    shadow-md
                    ring-4
                    ring-background
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-[#004182]
                  "
                >
                  <span className="text-[19px] font-black leading-none tracking-[-0.08em]">
                    in
                  </span>
                </a>

              </div>

              {/* Profile */}
              <div className="mt-8 max-w-md">

                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-coral">
                  Founder & Director
                </p>

                <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-[34px]">
                  Madhavi Mhatre
                </h3>

                <div className="mx-auto mt-4 h-[2px] w-9 bg-coral transition-all duration-500 group-hover:w-14" />

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                  A 35+ year veteran in business development, sales, marketing,
                  product development and brand strategy in Indian markets, with
                  a proven track record in brand establishment, market
                  segmentation, networking, revenue growth and sales
                  optimization. IIM Ahmedabad Goldman Sachs 10,000 Women
                  programme graduate, MBA-educated and a boundless thinker.
                </p>

              </div>

            </article>


            {/* ========================================================
                VIRU MHATRE
            ======================================================== */}

            <article className="group flex flex-col items-center px-4 text-center lg:px-14">

              {/* Portrait */}
              <div className="relative">

                {/* Fine coral ring */}
                <div
                  className="
                    absolute
                    -inset-3
                    rounded-full
                    border
                    border-coral/20
                    transition-all
                    duration-500
                    group-hover:-inset-4
                    group-hover:border-coral/45
                  "
                />

                {/* Image */}
                <div
                  className="
                    relative
                    h-52
                    w-52
                    overflow-hidden
                    rounded-full
                    border-[5px]
                    border-background
                    bg-muted
                    shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                    sm:h-56
                    sm:w-56
                    lg:h-60
                    lg:w-60
                  "
                >
                  <img
                    src="/media/founders-05.webp"
                    alt="Viru Mhatre"
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

                {/* LinkedIn logo */}
                <a
                  href="https://www.linkedin.com/in/virendrayeshwantmhatre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Viru Mhatre on LinkedIn"
                  className="
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0A66C2]
                    text-white
                    shadow-md
                    ring-4
                    ring-background
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-[#004182]
                  "
                >
                  <span className="text-[19px] font-black leading-none tracking-[-0.08em]">
                    in
                  </span>
                </a>

              </div>

              {/* Profile */}
              <div className="mt-8 max-w-md">

                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-coral">
                  Director
                </p>

                <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-[34px]">
                  Viru Mhatre
                </h3>

                <div className="mx-auto mt-4 h-[2px] w-9 bg-coral transition-all duration-500 group-hover:w-14" />

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                  With over 37 years of diverse experience in corporate planning
                  across EdTech, IT, BPO and telecom, Viru is a seasoned design
                  thinker and MBA. His leadership extends to driving strategic
                  roadmaps, contributing significantly to executive team planning
                  at NMIMSPL.
                </p>

              </div>

            </article>

          </div>

        </div>
      </section>

      {/* ============================================================
          FOUNDER'S GALLERY
      ============================================================ */}

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
              Five disciplines we refuse to compromise on.
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
    CERTIFICATIONS & CREDENTIALS
============================================================ */}

<section className="bg-background py-16 lg:py-20">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    {/* Compact Section Header */}
    <Reveal>
      <div className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <Eyebrow>Certifications & credentials</Eyebrow>

          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
            Credentials that strengthen our story.
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-right">
          Recognised programmes and certifications that reflect our
          commitment to leadership and responsible business.
        </p>

      </div>
    </Reveal>

    {/* Certificates */}
<div className="mt-10 grid gap-10 lg:grid-cols-2">

  {/* IIM Ahmedabad Certificate */}
  <Reveal delay={80}>
    <div className="group flex h-[420px] items-center justify-center sm:h-[480px]">

      {/* Outer Wall Frame */}
      <div
        className="
          relative
          h-full
          w-full
          rounded-[3px]
          bg-[#5a4635]
          p-[14px]
          shadow-[0_18px_35px_rgba(0,0,0,0.22)]
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:shadow-[0_24px_45px_rgba(0,0,0,0.28)]
        "
      >

        {/* Outer bevel */}
        <div
          className="
            h-full
            w-full
            rounded-[2px]
            border-[3px]
            border-[#8c7359]
            bg-[#d8c7ae]
            p-[8px]
            shadow-[inset_0_0_0_2px_#3e3025]
          "
        >

          {/* Inner frame */}
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              bg-[#f7f4ee]
              p-[12px]
              shadow-[inset_0_0_0_1px_#b8aa98]
            "
          >

            {/* Certificate / Mat */}
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-white
                p-3
                shadow-[0_2px_8px_rgba(0,0,0,0.12)]
              "
            >
              <img
                src="/media/IIM-Certificate.png"
                alt="IIM Ahmedabad Goldman Sachs 10,000 Women certificate"
                loading="lazy"
                className="
                  max-h-full
                  max-w-full
                  object-contain
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.01]
                "
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  </Reveal>


  {/* Certified Women's Business Enterprise Certificate */}
  <Reveal delay={140}>
    <div className="group flex h-[420px] items-center justify-center sm:h-[480px]">

      {/* Outer Wall Frame */}
      <div
        className="
          relative
          h-full
          w-full
          rounded-[3px]
          bg-[#5a4635]
          p-[14px]
          shadow-[0_18px_35px_rgba(0,0,0,0.22)]
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:shadow-[0_24px_45px_rgba(0,0,0,0.28)]
        "
      >

        {/* Outer bevel */}
        <div
          className="
            h-full
            w-full
            rounded-[2px]
            border-[3px]
            border-[#8c7359]
            bg-[#d8c7ae]
            p-[8px]
            shadow-[inset_0_0_0_2px_#3e3025]
          "
        >

          {/* Inner frame */}
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              bg-[#f7f4ee]
              p-[12px]
              shadow-[inset_0_0_0_1px_#b8aa98]
            "
          >

            {/* Certificate / Mat */}
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-white
                p-3
                shadow-[0_2px_8px_rgba(0,0,0,0.12)]
              "
            >
              <img
                src="/media/Women-Owned-Certificate.png"
                alt="Certified Women's Business Enterprise certificate"
                loading="lazy"
                className="
                  max-h-full
                  max-w-full
                  object-contain
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.01]
                "
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  </Reveal>

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
