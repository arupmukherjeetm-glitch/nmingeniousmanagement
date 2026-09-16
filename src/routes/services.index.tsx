import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  UserRoundCog,
  Users,
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
/* SERVICE CLASSIFICATION                                                     */
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

  if (value.includes("fractional") || value.includes("hr")) {
    return UserRoundCog;
  }

  return BriefcaseBusiness;
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
    <Reveal delay={index * 70}>
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="group relative block h-full overflow-hidden rounded-[2rem] bg-brand"
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
          <img
            src={service.image}
            alt={service.caption}
            loading={index < 2 ? "eager" : "lazy"}
            className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/35 to-transparent opacity-95" />

          {/* Top information */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 lg:p-7">
            <span className="font-display text-xs font-extrabold tracking-[0.22em] text-white/75">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-coral group-hover:border-coral">
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
            <p className="mb-3 font-display text-[11px] font-extrabold uppercase tracking-[0.2em] text-coral">
              {service.tagline}
            </p>

            <h3 className="max-w-lg font-display text-2xl font-extrabold leading-[1.05] text-white sm:text-3xl lg:text-[2.15rem]">
              {service.name}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              {service.summary}
            </p>

            <div className="mt-6 flex items-center gap-2 font-display text-sm font-bold text-white">
              Explore service
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/* IMAGE-FREE SERVICE CARD                                                    */
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
    <Reveal delay={index * 70}>
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="group relative block h-full overflow-hidden rounded-[2rem] border border-border/70 bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_24px_70px_rgba(11,27,51,0.10)] sm:p-8 lg:p-9"
      >
        {/* Decorative corner */}
        <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-brand/[0.035] transition-all duration-500 group-hover:h-36 group-hover:w-36 group-hover:bg-coral/[0.06]" />

        {/* Number */}
        <div className="relative flex items-start justify-between">
          <span className="font-display text-xs font-extrabold tracking-[0.22em] text-coral">
            {String(index + 5).padStart(2, "0")}
          </span>

          <div className="flex size-12 items-center justify-center rounded-2xl bg-brand text-white transition-all duration-500 group-hover:bg-coral group-hover:scale-105">
            <Icon className="size-5" strokeWidth={1.8} />
          </div>
        </div>

        {/* Icon line */}
        <div className="relative mt-10 flex items-center gap-3">
          <div className="h-px w-10 bg-coral transition-all duration-500 group-hover:w-16" />
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Infrastructure
          </span>
        </div>

        {/* Content */}
        <div className="relative mt-5">
          <h3 className="font-display text-2xl font-extrabold leading-tight text-foreground transition-colors duration-300 group-hover:text-brand lg:text-[1.8rem]">
            {service.name}
          </h3>

          <p className="mt-3 font-display text-sm font-bold leading-relaxed text-brand">
            {service.tagline}
          </p>

          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {service.summary}
          </p>
        </div>

        {/* Bottom */}
        <div className="relative mt-8 flex items-center justify-between border-t border-border/70 pt-5">
          <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Explore service
          </span>

          <span className="flex size-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-coral group-hover:bg-coral group-hover:text-white">
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEM SECTION                                                   */
/* -------------------------------------------------------------------------- */

function OperatingSystemSection() {
  const capabilities = [
    {
      icon: Users,
      title: "People",
      text: "The field teams that represent your brand where purchase decisions happen.",
    },
    {
      icon: Activity,
      title: "Visibility",
      text: "Live information that turns field activity into measurable intelligence.",
    },
    {
      icon: ShieldCheck,
      title: "Control",
      text: "Processes, compliance and governance that keep execution consistent.",
    },
    {
      icon: UserRoundCog,
      title: "HR",
      text: "Workforce, payroll and people systems that keep the operation moving.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-brand py-24 lg:py-32">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div className="absolute left-[-10%] top-[-30%] size-[600px] rounded-full border-[80px] border-white" />
        <div className="absolute bottom-[-35%] right-[-5%] size-[600px] rounded-full border-[80px] border-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow className="text-white/55">One operating system</Eyebrow>

            <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Eight services.
              <br />
              <span className="text-coral">One connected</span>
              <br />
              operation.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-white/65 lg:text-lg">
              Retail execution does not happen in isolation. The strongest
              operations connect people, visibility, compliance and HR into one
              system built around the commercial outcome.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-brand p-7 transition-colors duration-300 hover:bg-white/[0.045] lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="size-6 text-coral"
                    strokeWidth={1.7}
                  />

                  <span className="font-display text-[10px] font-bold tracking-[0.18em] text-white/25">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-10 font-display text-xl font-extrabold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CONNECTION SECTION                                                         */
/* -------------------------------------------------------------------------- */

function ConnectionSection() {
  const steps = [
    {
      number: "01",
      title: "Deploy",
      text: "Right people in the right stores and markets.",
    },
    {
      number: "02",
      title: "Execute",
      text: "Merchandising, visibility, activations and retail discipline.",
    },
    {
      number: "03",
      title: "Measure",
      text: "Field data converted into actionable intelligence.",
    },
    {
      number: "04",
      title: "Improve",
      text: "Governance, HR and insights continuously strengthen execution.",
    },
  ];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Eyebrow>How it connects</Eyebrow>

            <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl">
              Built for the way brands actually operate.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              Choose one capability or combine multiple services. The model is
              designed to work around your commercial priorities rather than
              forcing you into a fixed package.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 50}>
                <div className="group grid gap-5 py-7 sm:grid-cols-[70px_180px_1fr] sm:items-center">
                  <span className="font-display text-xs font-extrabold tracking-[0.2em] text-coral">
                    {step.number}
                  </span>

                  <h3 className="font-display text-xl font-extrabold text-foreground transition-colors group-hover:text-brand">
                    {step.title}
                  </h3>

                  <div className="flex items-center justify-between gap-6">
                    <p className="max-w-md text-sm leading-6 text-muted-foreground">
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

      <section className="relative overflow-hidden bg-background pt-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-28">
            <div>
              <Eyebrow>Services</Eyebrow>

              <h1 className="mt-6 max-w-5xl font-display text-[3.4rem] font-extrabold leading-[0.92] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[6.5rem]">
                From the field
                <br />
                <span className="text-brand">to the boardroom.</span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-8 text-muted-foreground lg:text-lg">
                Everything it takes to move a product from the shelf to the
                shopper's hand — and build the people, systems and visibility
                behind the execution.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 font-display text-xs font-bold uppercase tracking-[0.16em] text-brand">
                <span>8 Services</span>
                <span className="text-coral">•</span>
                <span>31 States & UTs</span>
                <span className="text-coral">•</span>
                <span>One System</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero divider */}
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
      {/* FOUR IMAGE SERVICES                                                 */}
      {/* ------------------------------------------------------------------ */}

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow>Retail execution</Eyebrow>

              <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                Where execution meets
                <span className="text-coral"> the shopper.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-muted-foreground lg:text-right">
              The frontline capabilities that put your brand in motion across
              stores, markets and retail environments.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
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

      {/* ------------------------------------------------------------------ */}
      {/* FOUR ICON SERVICES                                                  */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-t border-border bg-muted/20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow>Operational infrastructure</Eyebrow>

              <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                The systems behind
                <span className="text-brand"> the execution.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-muted-foreground lg:text-right">
              Four specialist capabilities built without unnecessary
              complexity — designed to make your field operation more visible,
              compliant and scalable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
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
      {/* OPERATING SYSTEM                                                    */}
      {/* ------------------------------------------------------------------ */}

      <OperatingSystemSection />

      {/* ------------------------------------------------------------------ */}
      {/* CONNECTION                                                          */}
      {/* ------------------------------------------------------------------ */}

      <ConnectionSection />

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                 */}
      {/* ------------------------------------------------------------------ */}

      <CtaBand />
    </>
  );
}
