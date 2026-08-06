import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { CtaBand, PageHero, Reveal } from "@/components/site/Sections";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Retail Execution, Payroll & Fractional HR | NM Ingenious" },
      {
        name: "description",
        content:
          "Promoter deployment, merchandising, BTL activations, retail audits, training, workforce outsourcing, payroll services and fractional HR for brands selling in India.",
      },
      {
        property: "og:title",
        content: "Services | Retail Execution, Payroll & Fractional HR | NM Ingenious",
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

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything it takes to move a product{" "}
            <em className="not-italic text-coral">from the shelf to the shopper's hand.</em>
          </>
        }
        intro="Promoters, merchandising, activations, audits, training, workforce outsourcing, payroll and fractional HR. Deployed separately or run together as one system."
        accent="8 services · 31 states & UTs"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="space-y-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 40}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="brand-box group grid items-stretch overflow-hidden lg:grid-cols-12"
                >
                  <div className="relative aspect-[16/9] overflow-hidden lg:col-span-4 lg:aspect-auto">
                    <img
                      src={s.image}
                      alt={s.caption}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-3 p-8 lg:col-span-8 lg:p-10">
                    <span className="font-display text-xs font-bold tracking-[0.2em] text-coral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl font-extrabold text-foreground transition-colors group-hover:text-brand lg:text-3xl">
                      {s.name}
                    </h2>
                    <p className="font-display text-sm font-bold text-brand">{s.tagline}</p>
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {s.summary}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-2 font-display text-sm font-bold text-coral">
                      Read more
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
