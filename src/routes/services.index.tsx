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
   EXACT ICONS FROM THE EXISTING SERVICES CODE
   ========================================================= */

function TrackingIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 sm:h-11 sm:w-11"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="8"
        width="18"
        height="28"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M9 16H19M9 22H19M9 28H19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M26 32L31 26L35 29L43 18"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="43"
        cy="18"
        r="2.5"
        fill="currentColor"
      />

      <path
        d="M24 14H30C34 14 37 17 37 21V24"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="2.5 3"
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
      className="h-10 w-10 sm:h-11 sm:w-11"
      aria-hidden="true"
    >
      <circle
        cx="17"
        cy="13"
        r="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 31C8 25.5 11.8 21 17 21C22.2 21 26 25.5 26 31"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="31"
        cy="17"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M26 31C26.5 26.8 29 24 32.5 24C36.2 24 39 27 39 31"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle
        cx="34"
        cy="34"
        r="7"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M30.5 34L33 36.5L37.5 31.5"
        stroke="currentColor"
        strokeWidth="1.8"
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
      className="h-10 w-10 sm:h-11 sm:w-11"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="6"
        width="26"
        height="34"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 14H27M12 19H27M12 24H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M12 30H23"
        stroke="currentColor"
        strokeWidth="2"
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
        d="M31.5 29H36.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M31.5 32H35"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M33 29C35.2 29 36.5 30.1 36.5 31.5C36.5 33 35.2 34 33 34L36 37"
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
      className="h-10 w-10 sm:h-11 sm:w-11"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="13"
        r="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M15 29C15 23.5 18.8 19.5 24 19.5C29.2 19.5 33 23.5 33 29"
        stroke="currentColor"
        strokeWidth="1.7"
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

      <path
        d="M18 27L12 33M30 27L36 33"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <circle
        cx="24"
        cy="30"
        r="2.2"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   ICON SELECTOR
   ========================================================= */

function ServiceIcon({ index }: { index: number }) {
  if (index === 0) {
    return <TrackingIcon />;
  }

  if (index === 1) {
    return <WorkforceIcon />;
  }

  if (index === 2) {
    return <PayrollIcon />;
  }

  return <FractionalHRIcon />;
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
      delay={index * 60}
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
              duration-[800ms]
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
              bg-white/[0.07]
              transition-opacity
              duration-500
              group-hover:opacity-0
            "
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-5">
          <p className="font-display text-[8px] font-bold uppercase tracking-[0.18em] text-coral">
            {service.tagline}
          </p>

          <h2 className="mt-2 font-display text-[18px] font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground transition-colors duration-300 group-hover:text-brand">
            {service.name}
          </h2>

          <p className="mt-3 line-clamp-3 text-[11px] leading-[1.55] text-muted-foreground">
            {service.summary}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.14em] text-brand">
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
   ========================================================= */

function IconServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <Reveal
      delay={index * 60}
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
          min-h-[265px]
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
          hover:border-brand/20
          hover:shadow-[0_18px_45px_rgba(20,45,90,0.09)]
        "
      >
        {/* SUBTLE TOP ACCENT */}
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
            h-[68px]
            items-center
            text-brand
            transition-colors
            duration-300
            group-hover:text-coral
          "
        >
          <ServiceIcon index={index} />
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col">
          <p className="font-display text-[8px] font-bold uppercase tracking-[0.18em] text-coral">
            {service.tagline}
          </p>

          <h2 className="mt-2 font-display text-[18px] font-extrabold leading-[1.08] tracking-[-0.025em] text-foreground transition-colors duration-300 group-hover:text-brand">
            {service.name}
          </h2>

          <p className="mt-3 line-clamp-3 text-[11px] leading-[1.55] text-muted-foreground">
            {service.summary}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
            <span className="font-display text-[9px] font-bold uppercase tracking-[0.14em] text-brand">
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

      <section className="bg-background pt-16 pb-12 lg:pt-20 lg:pb-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              Everything your operation needs.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground lg:text-lg">
              From the people representing your brand on the shelf to the
              systems that keep the operation running, every service is built
              around execution.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FIRST 4 — IMAGE SERVICES
          4 COLUMNS ON DESKTOP
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
          LAST 4 — ICON SERVICES
          4 COLUMNS ON DESKTOP
      ====================================================== */}

      <section className="bg-background pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {iconServices.map((service, index) => (
              <IconServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
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
