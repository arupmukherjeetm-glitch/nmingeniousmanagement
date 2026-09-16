import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  ShieldCheck,
  UserRoundCog,
  WalletCards,
} from "lucide-react";
import { services } from "@/lib/site-data";
import { CtaBand, Eyebrow, Reveal } from "@/components/site/Sections";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "Services | Retail Execution, Payroll & Fractional HR | NM Ingenious",
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

/* -------------------------------------------------------------------------- */
/* IMAGE-FREE SERVICES                                                        */
/* -------------------------------------------------------------------------- */

const IMAGE_FREE_SERVICE_NAMES = new Set([
  "real-time tracking & reporting",
  "real-time tracking and reporting",
  "compliant workforce management",
  "payroll services",
  "fractional hr services",
]);

function normalizeServiceName(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");
}

function isImageFreeService(service: { name: string; slug: string }) {
  const name = normalizeServiceName(service.name);
  const slug = normalizeSlug(service.slug);

  if (IMAGE_FREE_SERVICE_NAMES.has(name)) return true;

  if (
    slug.includes("real-time-tracking") ||
    slug.includes("real-time-reporting") ||
    (slug.includes("tracking") && slug.includes("reporting"))
  ) {
    return true;
  }

  if (
    slug.includes("compliant-workforce") ||
    slug.includes("workforce-compliance") ||
    slug.includes("compliance")
  ) {
    return true;
  }

  if (slug.includes("payroll")) return true;

  if (
    slug.includes("fractional-hr") ||
    (slug.includes("fractional") && slug.includes("hr"))
  ) {
    return true;
  }

  return false;
}

/* -------------------------------------------------------------------------- */
/* ICON MAPPING                                                               */
/* -------------------------------------------------------------------------- */

function getServiceIcon(name: string, slug: string) {
  const value = `${name} ${slug}`.toLowerCase();

  if (value.includes("tracking") || value.includes("reporting")) {
    return Activity;
  }

  if (value.includes("workforce") || value.includes("compliance")) {
    return ShieldCheck;
  }

  if (value.includes("payroll")) {
    return WalletCards;
  }

  return UserRoundCog;
}

/* -------------------------------------------------------------------------- */
/* IMAGE SERVICE CARD                                                         */
/* -------------------------------------------------------------------------- */

function ImageServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <Reveal delay={index * 60}>
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="group block h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-background transition-all duration-500 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_24px_70px_rgba(11,27,51,0.11)]"
      >
        {/* IMAGE */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={service.image}
            alt={service.caption}
            loading={index < 2 ? "eager" : "lazy"}
            className="size-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />

          {/* Very subtle overlay */}
          <div className="absolute inset-0 bg-brand/[0.04] transition-colors duration-500 group-hover:bg-transparent" />

          {/* Arrow */}
          <div className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full bg-white text-brand shadow-md transition-all duration-300 group-hover:bg-coral group-hover:text-white">
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-7 lg:p-8">
          <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-coral">
            {service.tagline}
          </p>

          <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-foreground transition-colors duration-300 group-hover:text-brand lg:text-[1.8rem]">
            {service.name}
          </h3>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {service.summary}
          </p>

          <div className="mt-6 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-brand">
            Explore service
            <ArrowRight className="size-4 text-coral transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/* ICON SERVICE CARD                                                          */
/* -------------------------------------------------------------------------- */

function IconServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = getServiceIcon(service.name, service.slug);

  return (
    <Reveal delay={index * 60}>
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="group relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_24px_70px_rgba(11,27,51,0.11)] sm:p-8 lg:p-9"
      >
        {/* LARGE ICON AREA */}
        <div className="relative flex min-h-[155px] items-center justify-between overflow-hidden rounded-[1.25rem] bg-muted/30 px-8">
          {/* Soft background circle */}
          <div className="absolute -right-10 -top-10 size-44 rounded-full bg-brand/[0.035] transition-all duration-700 group-hover:scale-125 group-hover:bg-coral/[0.045]" />

          {/* Large clear icon */}
          <div className="relative flex size-[88px] items-center justify-center rounded-full bg-brand text-white shadow-sm transition-all duration-500 group-hover:bg-coral group-hover:scale-[1.04]">
            <Icon
              className="size-10"
              strokeWidth={1.45}
            />
          </div>

          {/* Small arrow */}
          <div className="relative flex size-10 items-center justify-center rounded-full border border-border bg-background text-brand transition-all duration-300 group-hover:border-coral group-hover:bg-coral group-hover:text-white">
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-7 flex flex-1 flex-col">
          <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-coral">
            {service.tagline}
          </p>

          <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-foreground transition-colors duration-300 group-hover:text-brand lg:text-[1.8rem]">
            {service.name}
          </h3>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {service.summary}
          </p>

          <div className="mt-auto pt-7">
            <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-brand">
              Explore service
              <ArrowRight className="size-4 text-coral transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEM                                                           */
/* -------------------------------------------------------------------------- */

function OperatingSystemSection() {
  const capabilities = [
    {
      title: "People",
      text: "Field teams that represent your brand where purchase decisions happen.",
    },
    {
      title: "Visibility",
      text: "Information that turns field activity into measurable intelligence.",
    },
    {
      title: "Control",
      text: "Processes and governance that keep execution consistent.",
    },
    {
      title: "HR",
      text: "Workforce and people systems that keep the operation moving.",
    },
  ];

  return (
    <section className="bg-brand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow className="text-white/55">
              One connected operation
            </Eyebrow>

            <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Eight services.
              <br />
              <span className="text-coral">One system.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/60 lg:text-lg">
            Retail execution works best when people, visibility, compliance
            and HR operate together around the same commercial objective.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="bg-brand p-7 transition-colors duration-300 hover:bg-white/[0.04] lg:p-8"
            >
              <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-coral">
                {item.title}
              </span>

              <p className="mt-6 text-sm leading-6 text-white/50">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* HOW IT CONNECTS                                                            */
/* -------------------------------------------------------------------------- */

function ConnectionSection() {
  const steps = [
    {
      title: "Deploy",
      text: "Right people in the right stores and markets.",
    },
    {
      title: "Execute",
      text: "Merchandising, visibility, activations and retail discipline.",
    },
    {
      title: "Measure",
      text: "Field data converted into actionable intelligence.",
    },
    {
      title: "Improve",
      text: "Insights and governance continuously strengthen execution.",
    },
  ];

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <Eyebrow>How it connects</Eyebrow>

            <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl">
              Built around the way brands operate.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Choose one capability or combine multiple services around your
              commercial priorities.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 40}>
                <div className="group grid gap-4 py-6 sm:grid-cols-[150px_1fr] sm:items-center">
                  <h3 className="font-display text-xl font-extrabold text-foreground transition-colors group-hover:text-brand">
                    {step.title}
                  </h3>

                  <div className="flex items-center justify-between gap-6">
                    <p className="text-sm leading-6 text-muted-foreground">
                      {step.text}
                    </p>

                    <ArrowRight className="hidden size-5 shrink-0 text-coral transition-transform duration-300 group-hover:translate-x-1 sm:block" />
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

/* -------------------------------------------------------------------------- */
/* MAIN PAGE                                                                  */
/* -------------------------------------------------------------------------- */

function ServicesIndex() {
  const imageServices = services.filter(
    (service) => !isImageFreeService(service),
  );

  const iconServices = services.filter((service) =>
    isImageFreeService(service),
  );

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-background pt-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-24">
            <div>
              <Eyebrow>Services</Eyebrow>

              <h1 className="mt-6 max-w-5xl font-display text-[3.4rem] font-extrabold leading-[0.92] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[6.3rem]">
                From the field
                <br />
                <span className="text-brand">to the boardroom.</span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-muted-foreground lg:text-lg">
                Everything it takes to move a product from the shelf to the
                shopper's hand — backed by the people, systems and visibility
                behind the execution.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-display text-xs font-bold uppercase tracking-[0.15em] text-brand">
                <span>8 Services</span>
                <span className="text-coral">•</span>
                <span>31 States & UTs</span>
                <span className="text-coral">•</span>
                <span>One System</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                What we do
              </span>

              <ArrowRight className="size-4 text-coral" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* ALL SERVICES                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* SINGLE HEADING FOR ALL 8 SERVICES */}
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow>Our capabilities</Eyebrow>

              <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                Everything your
                <span className="text-coral"> operation needs.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-muted-foreground lg:text-right">
              From frontline execution to the systems that keep your operation
              running.
            </p>
          </div>

          {/* -------------------------------------------------------------- */}
          {/* IMAGE SERVICES — TWO COLUMNS                                  */}
          {/* -------------------------------------------------------------- */}

          <div className="grid gap-5 md:grid-cols-2">
            {imageServices.map((service, index) => (
              <ImageServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}

            {/* ---------------------------------------------------------- */}
            {/* ICON SERVICES — SAME TWO-COLUMN GRID                       */}
            {/* ---------------------------------------------------------- */}

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

      {/* ------------------------------------------------------------------ */}
      {/* ONE SYSTEM                                                         */}
      {/* ------------------------------------------------------------------ */}

      <OperatingSystemSection />

      {/* ------------------------------------------------------------------ */}
      {/* HOW IT CONNECTS                                                    */}
      {/* ------------------------------------------------------------------ */}

      <ConnectionSection />

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                */}
      {/* ------------------------------------------------------------------ */}

      <CtaBand />
    </>
  );
}
