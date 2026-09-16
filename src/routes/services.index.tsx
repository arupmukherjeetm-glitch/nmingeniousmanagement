import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
          "Promoter deployment, merchandising, BTL activations, retail audits, training, workforce outsourcing, payroll services and fractional HR for brands selling in India.",
      },
      {
        property: "og:title",
        content:
          "Services | Retail Execution, Payroll & Fractional HR | NM Ingenious",
      },
      {
        property: "og:description",
        content:
          "Eight services that turn shelf presence into sell-out, run as one operating system.",
      },
    ],
  }),
  component: ServicesIndex,
});

/* =========================================================
   EXACT SERVICE ICONS
   ========================================================= */

/* REAL-TIME TRACKING & REPORTING */

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

/* COMPLIANT WORKFORCE MANAGEMENT */

function WorkforceIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      aria-hidden="true"
    >
      {/* Main person */}
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

      {/* Second person */}
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

      {/* Verification circle */}
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

/* PAYROLL SERVICES */

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

      {/* Rupee/payment badge */}
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

/* FRACTIONAL HR SERVICES */

function FractionalHRIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      aria-hidden="true"
    >
      {/* Top person */}
      <circle
        cx="24"
        cy="12"
        r="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      {/* Central person/body */}
      <path
        d="M15 28C15 22.7 18.8 19 24 19C29.2 19 33 22.7 33 28"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      {/* Network lines */}
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

      {/* Left node */}
      <circle
        cx="10"
        cy="36"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Right node */}
      <circle
        cx="38"
        cy="36"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Centre node */}
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
   4-COLUMN GRID
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

          {/* LIGHT LAYER */}

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
              aria-hidden
              className="
                size-3.5
                text-coral
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* =========================================================
   ICON SERVICE CARD
   4-COLUMN GRID
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
          min-h-[255px]
          h-full
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
        {/* SMALL CORAL TOP LINE */}

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

        {/* ICON */}

        <div
          className="
            flex
            h-12
            items-center
            text-brand
            transition-colors
            duration-300
            group-hover:text-coral
          "
        >
          {icon}
        </div>

        {/* SERVICE NAME */}

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

        {/* DESCRIPTION */}

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

        {/* EXPLORE */}

        <div className="mt-6 flex items-center justify-between">
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
              aria-hidden
              className="
                size-3.5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </span>
        </div>
      </Link>
    </Reveal>
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
          INTRO
      ====================================================== */}

      <section className="bg-background pb-12 pt-16 lg:pb-14 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>

            <h1
              className="
                mt-5
                font-display
                text-4xl
                font-extrabold
                leading-[1.02]
                tracking-[-0.04em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
            >
              Everything your operation needs.
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-muted-foreground
                lg:text-lg
              "
            >
              From the people representing your brand on the shelf to the
              systems that keep the operation running, every service is built
              around execution.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FIRST 4 — IMAGE SERVICES
          4 CARDS IN ONE ROW
      ====================================================== */}

      <section className="bg-background pb-5 lg:pb-6">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
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
          LAST 4 — ICON SERVICES
          4 CARDS IN ONE ROW
      ====================================================== */}

      <section className="bg-background pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
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
          CTA
      ====================================================== */}

      <CtaBand />
    </>
  );
}
