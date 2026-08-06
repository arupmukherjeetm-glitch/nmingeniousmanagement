import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/site-data";
import { CtaBand, Eyebrow, PageHero, Reveal } from "@/components/site/Sections";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | NM Ingenious" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.name} | NM Ingenious`;
    return {
      meta: [
        { title },
        { name: "description", content: service.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: service.summary },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.name}
        intro={service.tagline}
        accent={service.caption}
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Eyebrow>The work</Eyebrow>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              {service.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-xl">
              <img
                src={service.secondImage}
                alt={service.caption}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>

            <div
              className="mt-10 rounded-xl p-8 lg:p-10"
              style={{ background: "var(--gradient-brand)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                The outcome
              </p>
              <p className="mt-4 font-display text-xl font-extrabold leading-snug text-white lg:text-2xl">
                {service.outcome}
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="brand-box sticky top-28 p-8 lg:p-10">
              <h2 className="font-display text-lg font-extrabold text-foreground">
                What's included
              </h2>
              <ul className="mt-6 space-y-3">
                {service.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-coral" strokeWidth={3} />
                    <span className="text-sm leading-relaxed text-foreground/85">{inc}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-brand-deep"
              >
                Talk to us about this
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-2xl font-extrabold text-foreground lg:text-4xl">
              Often deployed together with
            </h2>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-display text-sm font-bold text-brand"
            >
              All services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="brand-box group flex h-full flex-col p-7"
                >
                  <h3 className="font-display text-lg font-extrabold text-foreground transition-colors group-hover:text-brand">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-coral">
                    Explore
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
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
