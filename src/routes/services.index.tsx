import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/site-data";
import { CtaBand, Eyebrow, Reveal } from "@/components/site/Sections";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title:
          "Services | Retail Execution, Payroll & Fractional HR | NM Ingenious",
      },
      {
        name: "description",
        content:
          "Explore NM Ingenious services across retail execution, promoter deployment, merchandising, activations, workforce management, tracking, payroll and fractional HR.",
      },
      {
        property: "og:title",
        content:
          "Services | Retail Execution, Payroll & Fractional HR | NM Ingenious",
      },
      {
        property: "og:description",
        content:
          "Eight specialist services built around retail execution, field operations and workforce management.",
      },
    ],
  }),
  component: ServicesIndex,
});

/* =========================================================
   EXACT SERVICE ICONS
   ========================================================= */

function TrackingIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="7"
        width="21"
        height="29"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 14H23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M12 20H23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M12 26H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M29 31L33.5 25L37 28L43 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="43"
        cy="19"
        r="2"
        fill="currentColor"
      />

      <path
        d="M29 14H33C36.3 14 39 16.7 39 20V23"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="2 2.5"
      />
    </svg>
  );
}

function WorkforceIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <circle
        cx="18"
        cy="14"
        r="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M9 31C9 25.5 12.8 21 18 21C23.2 21 27 25.5 27 31"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="30"
        cy="18"
        r="3.8"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M27 27C27.8 24.4 29.8 23 32.2 23"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle
        cx="35"
        cy="33"
        r="7"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M31.5 33L34 35.5L38.5 30.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PayrollIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="7"
        width="25"
        height="32"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 14H27"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M12 20H27"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M12 26H22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle
        cx="34"
        cy="32"
        r="8"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M31.5 28.5H36.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M31.5 31.5H35"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M33 28.5C35.2 28.5 36.5 29.6 36.5 31C36.5 32.4 35.2 33.5 33 33.5L36 36.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FractionalHRIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="12"
        r="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M15 28C15 22.7 18.8 19 24 19C29.2 19 33 22.7 33 28"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M18 27L12 34"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M30 27L36 34"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <circle
        cx="10"
        cy="36"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="38"
        cy="36"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="24"
        cy="29"
        r="2.2"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   IMAGE SERVICE CARD
   ========================================================= */

function ImageServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <Reveal
      delay={index * 50}
      className="h-full"
    >
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[18px]
          border
          border-border
          bg-white
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-brand/20
          hover:shadow-[0_18px_45px_rgba(20,45,90,0.10)]
        "
      >
        {/* IMAGE */}

        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EEF2F7]">
          <img
            src={service.image}
            alt={service.caption}
            loading={index < 2 ? "eager" : "lazy"}
            className="
              block
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.025]
            "
          />

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-0
              bg-white/[0.08]
              transition-opacity
              duration-500
              group-hover:opacity-0
            "
          />
        </div>

        {/* CONTENT */}

        <div className="flex flex-1 flex-col p-5">
          <p className="font-display text-[8px] font-bold uppercase tracking-[0.17em] text-coral">
            {service.tagline}
          </p>

          <h2 className="mt-2 font-display text-[18px] font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground transition-colors duration-300 group-hover:text-brand">
            {service.name}
          </h2>

          <p className="mt-3 line-clamp-3 text-[11px] leading-[1.55] text-muted-foreground">
            {service.summary}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.13em] text-brand">
              Explore service
            </span>

            <ArrowRight
              className="size-3.5 text-coral transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* =========================================================
   ICON SERVICE CARD
   ========================================================= */

function IconServiceCard({
  service,
  icon,
  index,
}: {
  service: (typeof services)[number];
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <Reveal
      delay={index * 50}
      className="h-full"
    >
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="
          group
          relative
          flex
          h-full
          min-h-[255px]
          flex-col
          overflow-hidden
          rounded-[18px]
          border
          border-border
          bg-white
          p-6
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-coral/35
          hover:shadow-[0_18px_45px_rgba(20,45,90,0.09)]
        "
      >
        <span
          aria-hidden
          className="
            absolute
            left-6
            top-0
            h-[3px]
            w-8
            bg-coral
            transition-all
            duration-300
            group-hover:w-12
          "
        />

        <div
          className="
            flex
            h-11
            items-center
            text-brand
            transition-colors
            duration-300
            group-hover:text-coral
          "
        >
          {icon}
        </div>

        <h2
          className="
            mt-7
            font-display
            text-[17px]
            font-extrabold
            leading-[1.12]
            tracking-[-0.02em]
            text-foreground
            transition-colors
            duration-300
            group-hover:text-brand
          "
        >
          {service.name}
        </h2>

        <p
          className="
            mt-3
            flex-1
            text-[12px]
            leading-[1.55]
            text-muted-foreground
          "
        >
          {service.summary}
        </p>

        <div className="mt-6">
          <span
            className="
              inline-flex
              items-center
              gap-2
              font-display
              text-[9px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-coral
            "
          >
            Explore

            <ArrowRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* =========================================================
   SERVICE ARCHITECTURE
   ========================================================= */

function ServiceArchitecture() {
  const groups = [
    {
      number: "",
      title: "Field Execution",
      text: "Put trained people where the product is being seen, considered and purchased.",
      services: [
        "Promoter Deployment",
        "Beauty Advisors",
      ],
    },
    {
      number: "",
      title: "Retail Visibility",
      text: "Improve how products are presented, activated and maintained across the retail environment.",
      services: [
        "Merchandising",
        "BTL Activations",
      ],
    },
    {
      number: "",
      title: "Operational Intelligence",
      text: "Create the visibility required to understand what is happening in the field.",
      services: [
        "Tracking & Reporting",
        "Workforce Management",
      ],
    },
    {
      number: "",
      title: "People Infrastructure",
      text: "Take care of the employment, payroll and senior HR layer behind the operation.",
      services: [
        "Payroll Services",
        "Fractional HR",
      ],
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Eyebrow>Service architecture</Eyebrow>

            <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-5xl">
              <span className="text-coral">Four operating layers.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:text-base">
            Our services cover the practical layers between a brand's
            commercial plan and what actually happens in the market.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => (
            <Reveal key={group.number} delay={index * 50}>
              <div
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-border
                  bg-white
                  p-7
                  transition-all
                  duration-400
                  hover:-translate-y-1
                  hover:border-brand/20
                  hover:shadow-[0_18px_45px_rgba(20,45,90,0.07)]
                  lg:p-9
                "
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-[10px] font-bold tracking-[0.18em] text-coral">
                    {group.number}
                  </span>

                  <ArrowRight
                    className="
                      size-4
                      text-brand/30
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-coral
                    "
                  />
                </div>

                <h3 className="mt-10 font-display text-2xl font-extrabold tracking-[-0.02em] text-foreground">
                  {group.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                  {group.text}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {group.services.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-border
                        px-3
                        py-1.5
                        font-display
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.08em]
                        text-brand
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHAT CHANGES
   ========================================================= */

function WhatChangesSection() {
  const rows = [
    {
      issue: "Coverage gaps",
      action: "Deploy the right field structure",
      result: "More consistent market presence",
    },
    {
      issue: "Poor shelf execution",
      action: "Merchandising and visibility control",
      result: "Better product presentation",
    },
    {
      issue: "Limited field visibility",
      action: "Tracking and reporting",
      result: "Faster operational decisions",
    },
    {
      issue: "Workforce complexity",
      action: "Managed workforce infrastructure",
      result: "Lower administrative load",
    },
    {
      issue: "Payroll administration",
      action: "Third-party payroll management",
      result: "Reliable statutory processing",
    },
    {
      issue: "No senior HR layer",
      action: "Fractional HR leadership",
      result: "Experienced HR support without a full department",
    },
  ];

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>What changes</Eyebrow>

            <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-5xl">
              Services designed around real operating problems.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Each capability addresses a specific operational constraint,
              rather than adding another layer of unnecessary complexity.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-border">
            <div className="hidden grid-cols-[0.85fr_1fr_1fr] border-b border-border bg-[#F7F8FA] px-6 py-4 sm:grid">
              <span className="font-display text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Challenge
              </span>

              <span className="font-display text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Service response
              </span>

              <span className="font-display text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Operational effect
              </span>
            </div>

            {rows.map((row, index) => (
              <Reveal key={row.issue} delay={index * 30}>
                <div className="grid gap-3 border-b border-border px-6 py-5 last:border-b-0 sm:grid-cols-[0.85fr_1fr_1fr] sm:gap-5">
                  <div>
                    <span className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-coral sm:hidden">
                      Challenge
                    </span>

                    <p className="mt-1 text-sm font-semibold text-foreground sm:mt-0">
                      {row.issue}
                    </p>
                  </div>

                  <div>
                    <span className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-coral sm:hidden">
                      Service response
                    </span>

                    <p className="mt-1 text-sm leading-5 text-muted-foreground sm:mt-0">
                      {row.action}
                    </p>
                  </div>

                  <div>
                    <span className="font-display text-[9px] font-bold uppercase tracking-[0.12em] text-coral sm:hidden">
                      Operational effect
                    </span>

                    <p className="mt-1 text-sm leading-5 text-muted-foreground sm:mt-0">
                      {row.result}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DELIVERY MODEL
   ========================================================= */

function DeliveryModelSection() {
  const steps = [
    {
      number: "",
      title: "Scope",
      text: "We define the geography, channel, workforce requirement and operating objective.",
    },
    {
      number: "",
      title: "Deploy",
      text: "People, processes and reporting structures are put into the field.",
    },
    {
      number: "",
      title: "Operate",
      text: "The service runs continuously with supervision, governance and issue resolution.",
    },
    {
      number: "",
      title: "Optimise",
      text: "Field intelligence is used to identify gaps and improve the operating model.",
    },
  ];

  return (
    <section className="bg-brand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow className="text-white/55">
            Service delivery
          </Eyebrow>

          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl">
            From brief to
            <br />
            <span className="text-coral">operating reality.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 50}>
              <div className="h-full bg-brand p-7 transition-colors duration-300 hover:bg-white/[0.045] lg:p-8">
                <span className="font-display text-[10px] font-bold tracking-[0.16em] text-coral">
                  {step.number}
                </span>

                <h3 className="mt-12 font-display text-2xl font-extrabold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BUILD YOUR OPERATING STACK
   ========================================================= */

function OperatingStackSection() {
  const stacks = [
    {
      label: "Need field presence",
      title: "Execution",
      items: [
        "Promoter Deployment",
        "Beauty Advisors",
        "Merchandising",
        "BTL Activations",
      ],
    },
    {
      label: "Need field control",
      title: "Visibility",
      items: [
        "Tracking & Reporting",
        "Workforce Management",
        "Merchandising",
        "Activations",
      ],
    },
    {
      label: "Need workforce infrastructure",
      title: "People Operations",
      items: [
        "Workforce Management",
        "Payroll Services",
        "Fractional HR",
      ],
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <Eyebrow>Build your service stack</Eyebrow>

            <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-5xl">
              Start with the problem.
              <br />
              <span className="text-coral">Add what you need.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:text-base">
            Services can be commissioned individually or combined when the
            operating challenge crosses multiple functions.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {stacks.map((stack, index) => (
            <Reveal key={stack.title} delay={index * 50}>
              <div className="group h-full rounded-[20px] border border-border bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(20,45,90,0.08)] lg:p-8">
                <p className="font-display text-[9px] font-bold uppercase tracking-[0.16em] text-coral">
                  {stack.label}
                </p>

                <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">
                  {stack.title}
                </h3>

                <div className="mt-8 space-y-3">
                  {stack.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-t border-border pt-3"
                    >
                      <Check className="size-3.5 shrink-0 text-coral" />

                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-display text-[9px] font-bold uppercase tracking-[0.14em] text-brand transition-colors hover:text-coral"
                >
                  Discuss this setup
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE FAQ
   ========================================================= */

function ServiceFaqSection() {
  const faqs = [
    {
      question: "Can we start with only one service?",
      answer:
        "Yes. Services are designed to work independently, with additional capabilities added when the operating requirement expands.",
    },
    {
      question: "Can services be combined?",
      answer:
        "Yes. Different services can be structured together around a particular market, channel, workforce requirement or operating objective.",
    },
    {
      question: "Do you operate across multiple markets?",
      answer:
        "The service model is designed for distributed field and workforce operations, allowing programmes to be structured across multiple markets.",
    },
    {
      question: "Can the workforce and HR services operate independently?",
      answer:
        "Yes. Workforce management, payroll and fractional HR can be used as standalone services depending on the organisation's requirement.",
    },
    {
      question: "How does a new service engagement begin?",
      answer:
        "The starting point is understanding the operating requirement, geography, workforce, channel and desired scope before defining the appropriate service structure.",
    },
  ];

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="text-center">
          <Eyebrow>Service FAQs</Eyebrow>

          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-5xl">
            Questions before
            <br />
            <span className="text-coral">we get started.</span>
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 30}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-base font-extrabold text-foreground marker:hidden">
                  {faq.question}

                  <span
                    aria-hidden
                    className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-coral transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl pr-10 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

function ServicesIndex() {
  const imageServices = services.slice(0, 4);
  const iconServices = services.slice(4, 8);

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-background pb-14 pt-16 lg:pb-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow>Services</Eyebrow>

              <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.01] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
                The capabilities that keep
                <br />
                <span className="text-coral">execution moving.</span>
              </h1>
            </div>

            <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:pb-1 lg:text-base">
              From people on the shop floor to the systems supporting them,
              our services cover the practical work required to execute,
              measure and manage a distributed retail operation.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          4 IMAGE SERVICES
      ====================================================== */}

      <section className="bg-background pb-5 lg:pb-6">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {imageServices.map((service, index) => (
              <ImageServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          4 ICON SERVICES
      ====================================================== */}

      <section className="bg-background pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <IconServiceCard
              service={iconServices[0]}
              index={0}
              icon={<TrackingIcon />}
            />

            <IconServiceCard
              service={iconServices[1]}
              index={1}
              icon={<WorkforceIcon />}
            />

            <IconServiceCard
              service={iconServices[2]}
              index={2}
              icon={<PayrollIcon />}
            />

            <IconServiceCard
              service={iconServices[3]}
              index={3}
              icon={<FractionalHRIcon />}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          NEW SECTION 1
          SERVICE ARCHITECTURE
      ====================================================== */}

      <ServiceArchitecture />

      {/* =====================================================
          NEW SECTION 2
          WHAT CHANGES
      ====================================================== */}

      <WhatChangesSection />

      {/* =====================================================
          NEW SECTION 3
          DELIVERY MODEL
      ====================================================== */}

      <DeliveryModelSection />

      {/* =====================================================
          NEW SECTION 4
          OPERATING STACK
      ====================================================== */}

      <OperatingStackSection />

      {/* =====================================================
          NEW SECTION 5
          FAQ
      ====================================================== */}

      <ServiceFaqSection />

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <CtaBand />
    </>
  );
}
