import React, { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  ShieldCheck,
  UserRoundCog,
  Users,
  WalletCards,
} from "lucide-react";

import {
  serviceDetails,
  services,
  type ServiceDetail as ServiceDetailData,
} from "@/lib/site-data";

import {
  CtaBand,
  Eyebrow,
  Reveal,
} from "@/components/site/Sections";

/* ==========================================================================
   ROUTE
   ========================================================================== */

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
      throw notFound();
    }

    return {
      service,
      detail: serviceDetails[params.slug] ?? null,
    };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title: "Service not found | NM Ingenious",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const { service } = loaderData;
    const title = `${service.name} | NM Ingenious`;

    return {
      meta: [
        {
          title,
        },
        {
          name: "description",
          content: service.summary,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: service.summary,
        },
      ],
    };
  },

  component: ServiceDetail,
});

/* ==========================================================================
   IMAGE-FREE SERVICES
   ==========================================================================

   These four services NEVER display service.images.

   This is intentionally based on BOTH service name and slug so that even
   if duplicate/old image URLs remain in site-data.ts, they cannot appear.
   ========================================================================== */

const IMAGE_FREE_SERVICE_NAMES = new Set([
  "real-time tracking & reporting",
  "real-time tracking and reporting",
  "compliant workforce management",
  "payroll services",
  "fractional hr services",
]);

function normalizeServiceName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");
}

function isImageFreeService(service: {
  name: string;
  slug: string;
}) {
  const name = normalizeServiceName(service.name);
  const slug = normalizeSlug(service.slug);

  /* Exact service-name protection */
  if (IMAGE_FREE_SERVICE_NAMES.has(name)) {
    return true;
  }

  /* Real-Time Tracking & Reporting */
  if (
    slug.includes("real-time-tracking") ||
    slug.includes("real-time-reporting") ||
    (slug.includes("tracking") && slug.includes("reporting"))
  ) {
    return true;
  }

  /* Compliant Workforce Management */
  if (
    slug.includes("compliant-workforce") ||
    slug.includes("workforce-compliance") ||
    slug.includes("compliance")
  ) {
    return true;
  }

  /* Payroll */
  if (slug.includes("payroll")) {
    return true;
  }

  /* Fractional HR */
  if (
    slug.includes("fractional-hr") ||
    (slug.includes("fractional") && slug.includes("hr"))
  ) {
    return true;
  }

  return false;
}

/* ==========================================================================
   IMAGE SERVICE GALLERY
   Only used by services that genuinely have photography.
   ========================================================================== */

function ServiceMedia({
  service,
}: {
  service: {
    images: string[];
    caption?: string;
  };
}) {
  const images = service.images.filter(Boolean);
  const [activeImage, setActiveImage] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[activeImage];

  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-[82px_minmax(0,1fr)]">
        <div className="flex max-h-[560px] flex-col gap-3 overflow-y-auto pr-1">
          {images.map((src, index) => {
            const active = index === activeImage;

            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View service image ${index + 1}`}
                className={`relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-xl bg-[#EEF2F7] transition-all duration-300 ${
                  active
                    ? "ring-2 ring-brand ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt={`Service image ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {active && (
                  <span className="absolute inset-y-0 left-0 w-1 bg-coral" />
                )}
              </button>
            );
          })}
        </div>

        <div className="relative h-[560px] overflow-hidden rounded-[2rem] bg-[#EEF2F7]">
          <img
            key={currentImage}
            src={currentImage}
            alt={
              service.caption
                ? `${service.caption} ${activeImage + 1}`
                : `Service image ${activeImage + 1}`
            }
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover transition-opacity duration-500"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/40 to-transparent" />

          {service.caption && (
            <p className="absolute bottom-6 left-6 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
              {service.caption}
            </p>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <div className="relative h-[400px] overflow-hidden rounded-[1.5rem] bg-[#EEF2F7]">
          <img
            key={currentImage}
            src={currentImage}
            alt={
              service.caption
                ? `${service.caption} ${activeImage + 1}`
                : `Service image ${activeImage + 1}`
            }
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`h-[70px] w-[70px] shrink-0 overflow-hidden rounded-xl ${
                index === activeImage
                  ? "ring-2 ring-brand ring-offset-2"
                  : "opacity-60"
              }`}
            >
              <img
                src={src}
                alt={`Service image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   IMAGE-FREE HERO
   ========================================================================== */

function ImageFreeHeroVisual({
  service,
}: {
  service: {
    name: string;
    slug: string;
  };
}) {
  const slug = normalizeSlug(service.slug);
  const name = normalizeServiceName(service.name);

  if (
    name.includes("real-time tracking") ||
    name.includes("real-time reporting") ||
    slug.includes("real-time-tracking") ||
    (slug.includes("tracking") && slug.includes("reporting"))
  ) {
    return <TrackingHero />;
  }

  if (
    name.includes("compliant workforce") ||
    name.includes("compliance") ||
    slug.includes("compliant-workforce") ||
    slug.includes("compliance")
  ) {
    return <ComplianceHero />;
  }

  if (
    name.includes("payroll") ||
    slug.includes("payroll")
  ) {
    return <PayrollHero />;
  }

  if (
    name.includes("fractional hr") ||
    slug.includes("fractional-hr") ||
    (slug.includes("fractional") && slug.includes("hr"))
  ) {
    return <FractionalHRHero />;
  }

  return <OperationsHero />;
}

/* ==========================================================================
   REAL-TIME TRACKING & REPORTING
   ========================================================================== */

function TrackingHero() {
  return (
    <div className="relative min-h-[390px] lg:min-h-[470px]">
      {/* Editorial grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,55,95,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20,55,95,0.08) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      {/* Horizontal data lines */}
      <div className="absolute left-[5%] right-[5%] top-[18%] h-px bg-brand/10" />
      <div className="absolute left-[12%] right-[10%] top-[72%] h-px bg-brand/10" />

      {/* Vertical data lines */}
      <div className="absolute left-[25%] top-[8%] h-[82%] w-px bg-brand/10" />
      <div className="absolute right-[23%] top-[12%] h-[76%] w-px bg-brand/10" />

      {/* Nodes */}
      <span className="absolute left-[5%] top-[18%] size-2.5 rounded-full bg-coral" />
      <span className="absolute left-[25%] top-[72%] size-2.5 rounded-full bg-brand" />
      <span className="absolute right-[23%] top-[28%] size-2.5 rounded-full bg-coral" />
      <span className="absolute right-[10%] top-[72%] size-2.5 rounded-full bg-brand" />

      {/* Main content */}
      <div className="absolute left-1/2 top-1/2 w-[88%] max-w-[480px] -translate-x-1/2 -translate-y-1/2">
        <div className="border-y border-brand/10 bg-background/95 px-5 py-6 backdrop-blur-sm sm:px-7">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-coral">
                Field intelligence
              </p>

              <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-brand sm:text-3xl">
                Real-time visibility.
              </h3>

              <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
                Know what is happening across your field operation while it is
                happening.
              </p>
            </div>

            <Activity className="mt-1 size-6 shrink-0 text-coral" />
          </div>

          {/* Metrics */}
          <div className="mt-7 grid grid-cols-3 divide-x divide-border border-y border-border py-4">
            <div className="pr-3">
              <p className="font-display text-lg font-extrabold text-foreground sm:text-xl">
                Live
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
                Activity
              </p>
            </div>

            <div className="px-3">
              <p className="font-display text-lg font-extrabold text-foreground sm:text-xl">
                Daily
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
                Reporting
              </p>
            </div>

            <div className="pl-3">
              <p className="font-display text-lg font-extrabold text-foreground sm:text-xl">
                Clear
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-muted-foreground">
                Decisions
              </p>
            </div>
          </div>

          {/* Activity bars */}
          <div className="mt-5 space-y-3">
            {[
              ["Sales visibility", "94%"],
              ["Stock visibility", "88%"],
              ["Field reporting", "97%"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-muted-foreground">
                    {label}
                  </span>

                  <span className="font-display text-[9px] font-bold text-brand">
                    {value}
                  </span>
                </div>

                <div className="mt-1.5 h-1 overflow-hidden bg-[#E8EDF3]">
                  <div
                    className="h-full bg-brand"
                    style={{ width: value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Small labels */}
      <div className="absolute left-[1%] top-[37%] hidden border border-border bg-background px-3 py-2 sm:block">
        <p className="font-display text-[8px] font-bold uppercase tracking-[0.12em] text-brand">
          Attendance
        </p>
      </div>

      <div className="absolute right-[1%] top-[40%] hidden border border-border bg-background px-3 py-2 sm:block">
        <p className="font-display text-[8px] font-bold uppercase tracking-[0.12em] text-brand">
          Reporting
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   COMPLIANT WORKFORCE MANAGEMENT
   ========================================================================== */

function ComplianceHero() {
  const controls = [
    "Attendance verification",
    "Documentation checks",
    "Field visit verification",
    "Process adherence",
  ];

  return (
    <div className="relative min-h-[390px] lg:min-h-[470px]">
      {/* Editorial framework */}
      <div className="absolute left-0 right-0 top-[14%] h-px bg-brand/10" />
      <div className="absolute left-0 right-0 bottom-[14%] h-px bg-brand/10" />

      <div className="absolute bottom-[14%] left-[18%] top-[14%] w-px bg-brand/10" />
      <div className="absolute bottom-[14%] right-[18%] top-[14%] w-px bg-brand/10" />

      <div className="absolute left-1/2 top-1/2 w-[88%] max-w-[470px] -translate-x-1/2 -translate-y-1/2">
        <div className="border border-brand/10 bg-background p-5 shadow-[0_24px_70px_rgba(20,55,95,0.07)] sm:p-7">
          {/* Heading */}
          <div className="flex items-center justify-between border-b border-border pb-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center bg-[#F4F7FB]">
                <ShieldCheck className="size-5 text-coral" />
              </div>

              <div>
                <p className="font-display text-xs font-extrabold text-brand">
                  Workforce controls
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
                  Compliance framework
                </p>
              </div>
            </div>

            <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-coral">
              Controlled
            </span>
          </div>

          {/* Controls */}
          <div className="mt-5 grid gap-2">
            {controls.map((control) => (
              <div
                key={control}
                className="flex items-center gap-3 border-b border-border/70 py-3 last:border-0"
              >
                <Check
                  className="size-3.5 shrink-0 text-coral"
                  strokeWidth={3}
                />

                <span className="flex-1 text-xs text-foreground/75">
                  {control}
                </span>

                <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  Verified
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <span className="text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
              Operational standard
            </span>

            <CheckCircle2 className="size-4 text-brand" />
          </div>
        </div>
      </div>

      <div className="absolute left-[3%] top-[20%] font-display text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Control
      </div>

      <div className="absolute right-[3%] bottom-[20%] font-display text-[8px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        Verify
      </div>
    </div>
  );
}

/* ==========================================================================
   PAYROLL SERVICES
   ========================================================================== */

function PayrollHero() {
  const steps = [
    {
      title: "Attendance",
      description: "Capture",
    },
    {
      title: "Validation",
      description: "Verify",
    },
    {
      title: "Processing",
      description: "Calculate",
    },
    {
      title: "Disbursement",
      description: "Complete",
    },
  ];

  return (
    <div className="relative min-h-[390px] lg:min-h-[470px]">
      {/* Editorial lines */}
      <div className="absolute left-[7%] right-[7%] top-1/2 h-px bg-brand/10" />

      <div className="absolute left-[7%] top-[20%] h-px w-[30%] bg-brand/10" />
      <div className="absolute right-[7%] bottom-[20%] h-px w-[30%] bg-brand/10" />

      <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-[470px]">
        <div className="w-[92%] max-w-[500px]">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center bg-[#F4F7FB]">
              <WalletCards className="size-5 text-coral" />
            </div>

            <div>
              <p className="font-display text-xs font-extrabold text-brand">
                Payroll workflow
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-muted-foreground">
                Structured from input to completion
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="mt-10 grid grid-cols-4 gap-2">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="relative z-10 mx-auto flex size-11 items-center justify-center rounded-full border border-brand/15 bg-background">
                  <span className="font-display text-[9px] font-extrabold text-brand">
                    {index + 1}
                  </span>
                </div>

                <div className="mt-4 text-center">
                  <p className="font-display text-[9px] font-extrabold text-foreground sm:text-[10px]">
                    {step.title}
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.08em] text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="mt-10 border-y border-border py-5 text-center">
            <p className="font-display text-lg font-extrabold text-brand sm:text-xl">
              One structured payroll cycle.
            </p>

            <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
              From workforce inputs through validated processing and
              disbursement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   FRACTIONAL HR SERVICES
   ========================================================================== */

function FractionalHRHero() {
  const areas = [
    {
      title: "People",
      icon: Users,
    },
    {
      title: "Policy",
      icon: FileCheck2,
    },
    {
      title: "Process",
      icon: Clock3,
    },
    {
      title: "Leadership",
      icon: UserRoundCog,
    },
  ];

  return (
    <div className="relative min-h-[390px] lg:min-h-[470px]">
      {/* Framework lines */}
      <div className="absolute left-1/2 top-[12%] h-[76%] w-px bg-brand/10" />
      <div className="absolute left-[15%] right-[15%] top-1/2 h-px bg-brand/10" />

      <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-[470px]">
        {/* Centre */}
        <div className="relative z-20 flex size-32 items-center justify-center rounded-full border border-brand/15 bg-background shadow-[0_24px_70px_rgba(20,55,95,0.08)] sm:size-40">
          <div className="text-center">
            <UserRoundCog className="mx-auto size-6 text-coral" />

            <p className="mt-3 font-display text-xs font-extrabold text-brand">
              HR
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
              Operating layer
            </p>
          </div>
        </div>

        {/* People */}
        <div className="absolute left-[2%] top-[12%] w-[112px] border border-border bg-background p-4 sm:w-[132px]">
          <Users className="size-4 text-coral" />

          <p className="mt-3 font-display text-[10px] font-extrabold text-brand sm:text-xs">
            People
          </p>

          <p className="mt-1 text-[8px] leading-relaxed text-muted-foreground sm:text-[9px]">
            Strategic HR support
          </p>
        </div>

        {/* Policy */}
        <div className="absolute right-[2%] top-[12%] w-[112px] border border-border bg-background p-4 sm:w-[132px]">
          <FileCheck2 className="size-4 text-coral" />

          <p className="mt-3 font-display text-[10px] font-extrabold text-brand sm:text-xs">
            Policy
          </p>

          <p className="mt-1 text-[8px] leading-relaxed text-muted-foreground sm:text-[9px]">
            Strategic HR support
          </p>
        </div>

        {/* Process */}
        <div className="absolute bottom-[12%] left-[2%] w-[112px] border border-border bg-background p-4 sm:w-[132px]">
          <Clock3 className="size-4 text-coral" />

          <p className="mt-3 font-display text-[10px] font-extrabold text-brand sm:text-xs">
            Process
          </p>

          <p className="mt-1 text-[8px] leading-relaxed text-muted-foreground sm:text-[9px]">
            Strategic HR support
          </p>
        </div>

        {/* Leadership */}
        <div className="absolute bottom-[12%] right-[2%] w-[112px] border border-border bg-background p-4 sm:w-[132px]">
          <UserRoundCog className="size-4 text-coral" />

          <p className="mt-3 font-display text-[10px] font-extrabold text-brand sm:text-xs">
            Leadership
          </p>

          <p className="mt-1 text-[8px] leading-relaxed text-muted-foreground sm:text-[9px]">
            Strategic HR support
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   FALLBACK
   ========================================================================== */

function OperationsHero() {
  return (
    <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-[470px]">
      <div className="absolute inset-y-[12%] left-0 right-0 border-y border-brand/10" />

      <div className="relative text-center">
        <p className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-coral">
          Operations
        </p>

        <p className="mt-5 font-display text-4xl font-extrabold text-brand sm:text-5xl">
          Built to execute.
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   SERVICE HERO
   ========================================================================== */

function ServiceHero({
  service,
}: {
  service: {
    slug: string;
    name: string;
    tagline: string;
    summary: string;
    caption?: string;
    images: string[];
  };
}) {
  const imageFree = isImageFreeService(service);

  /*
   * IMAGE-FREE SERVICES
   *
   * Completely bypass ServiceMedia.
   * service.images are deliberately ignored.
   */
  if (imageFree) {
    return (
      <section className="relative overflow-hidden bg-background pb-10 pt-16 lg:pb-12 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Copy */}
            <div className="relative z-10 lg:col-span-5">
              <Eyebrow>Service</Eyebrow>

              <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
                {service.name}
              </h1>

              <p className="mt-6 max-w-xl font-display text-xl font-bold leading-snug text-brand sm:text-2xl">
                {service.tagline}
              </p>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:bg-brand-deep"
                >
                  Talk to us

                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {service.caption && (
                  <span className="inline-flex items-center rounded-full border border-border px-5 py-3.5 font-display text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    {service.caption}
                  </span>
                )}
              </div>
            </div>

            {/* Designed visual — NOT an image */}
            <div className="lg:col-span-7">
              <ImageFreeHeroVisual service={service} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  /*
   * IMAGE-LED SERVICES
   *
   * Only these services are allowed to render their photography.
   */
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-20 lg:pb-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-5">
            <Eyebrow>Service</Eyebrow>

            <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>

            <p className="mt-6 max-w-xl font-display text-xl font-bold leading-snug text-brand sm:text-2xl">
              {service.tagline}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {service.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-display text-sm font-bold text-white transition-all duration-300 hover:bg-brand-deep"
              >
                Talk to us

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {service.caption && (
                <span className="inline-flex items-center rounded-full border border-border px-5 py-3.5 font-display text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  {service.caption}
                </span>
              )}
            </div>
          </div>

          {/* Photography */}
          <div className="lg:col-span-7">
            {service.images.filter(Boolean).length > 0 && (
              <ServiceMedia service={service} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   SERVICE DETAIL PAGE
   ========================================================================== */

function ServiceDetail() {
  const { service, detail: rawDetail } = Route.useLoaderData();

  const detail = rawDetail as ServiceDetailData | null;

  const others = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* =====================================================================
          HERO
          ===================================================================== */}

      <ServiceHero service={service} />

      {/* =====================================================================
          THE WORK
          ===================================================================== */}

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Eyebrow>The work</Eyebrow>

            <h2 className="mt-6 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-[-0.035em] text-foreground lg:text-5xl">
              Turning operational effort into measurable execution.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              {service.body.map((p: string) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div
              className="relative overflow-hidden rounded-[2rem] p-8 lg:p-10"
              style={{
                background: "var(--gradient-brand)",
              }}
            >
              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                  The outcome
                </p>

                <p className="mt-5 font-display text-2xl font-extrabold leading-snug text-white lg:text-3xl">
                  {service.outcome}
                </p>

                <div className="mt-8 flex items-center gap-2 text-white/60">
                  <CheckCircle2 className="size-4 text-coral" />

                  <span className="text-xs">
                    Designed around execution
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================================
          WHAT'S INCLUDED
          ===================================================================== */}

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>What's included</Eyebrow>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-4xl">
                Built around the way your operation actually works.
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                A structured service layer designed to bring consistency,
                visibility and execution into the operation.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-border border-y border-border">
                {service.includes.map((inc: string, index: number) => (
                  <div
                    key={inc}
                    className="group flex gap-5 py-6 transition-all duration-300"
                  >
                    <span className="pt-0.5 font-display text-xs font-extrabold text-coral">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      <p className="font-display text-base font-extrabold text-foreground transition-colors group-hover:text-brand">
                        {inc}
                      </p>
                    </div>

                    <Check
                      className="mt-0.5 size-4 shrink-0 text-coral"
                      strokeWidth={3}
                    />
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-4 font-display text-sm font-bold text-white transition-all duration-300 hover:bg-brand-deep"
              >
                Talk to us about this

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          ADDITIONAL SERVICE DETAIL
          ===================================================================== */}

      {detail && (
        <>
          {/* CHALLENGE */}
          <section className="bg-background py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
              <div className="lg:col-span-5">
                <Eyebrow>The challenge</Eyebrow>

                <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-5xl">
                  {detail.challengeTitle}
                </h2>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                  {detail.challenge.map((p) => (
                    <p key={p.slice(0, 20)}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {detail.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-border bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <p className="font-display text-3xl font-extrabold text-brand">
                        {m.value}
                      </p>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* METHOD */}
          <section className="bg-sand py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
              <Eyebrow>{detail.approachTitle}</Eyebrow>

              <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-foreground lg:text-4xl">
                A clear operating method from start to finish.
              </h2>

              <div className="mt-10 grid gap-4 lg:grid-cols-4">
                {detail.approach.map((a, i) => (
                  <Reveal key={a.step} delay={i * 70}>
                    <div className="group h-full rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-extrabold text-coral">
                          {a.step}
                        </span>

                        <ArrowRight className="size-4 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-coral" />
                      </div>

                      <h3 className="mt-7 font-display text-lg font-extrabold text-foreground">
                        {a.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {a.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* BEST FOR + FAQ */}
          <section className="bg-background py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
              <div className="lg:col-span-5">
                <div
                  className="h-full rounded-[2rem] p-8 text-white lg:p-10"
                  style={{
                    background: "var(--gradient-brand)",
                  }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                    {detail.bestForTitle}
                  </p>

                  <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight lg:text-3xl">
                    Where this service creates the most operational value.
                  </h2>

                  <ul className="mt-8 space-y-4">
                    {detail.bestFor.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed text-white/85"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-coral"
                          strokeWidth={3}
                        />

                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Eyebrow>Questions we get asked</Eyebrow>

                <dl className="mt-8 divide-y divide-border border-y border-border">
                  {detail.faqs.map((f) => (
                    <div key={f.q} className="py-6">
                      <dt className="font-display text-base font-extrabold text-foreground">
                        {f.q}
                      </dt>

                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        </>
      )}

      {/* =====================================================================
          RELATED SERVICES
          ===================================================================== */}

      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Eyebrow>Continue exploring</Eyebrow>

          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground lg:text-4xl">
            Often deployed together with
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{
                    slug: s.slug,
                  }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-extrabold text-coral">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <ArrowRight className="size-4 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-coral" />
                  </div>

                  <h3 className="mt-6 font-display text-lg font-extrabold text-foreground transition-colors group-hover:text-brand">
                    {s.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>

                  <span className="mt-6 font-display text-sm font-bold text-coral">
                    Explore service
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand />
    </>
  );
}
