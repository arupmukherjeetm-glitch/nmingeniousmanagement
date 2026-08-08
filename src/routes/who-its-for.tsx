import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Repeat, Store, Users } from "lucide-react";
import { industries, stats } from "@/lib/site-data";
import { StatBoard } from "@/components/site/Counter";
import { CtaBand, Eyebrow, LogoWall, PageHero, Reveal } from "@/components/site/Sections";
import { OfflineExpansion } from "@/components/site/OfflineExpansion";
import { ReachFrequency } from "@/components/site/ReachFrequency";

export const Route = createFileRoute("/who-its-for")({
  head: () => ({
    meta: [
      { title: "Who It's For | Reach & Frequency at the Shelf | NM Ingenious" },
      {
        name: "description",
        content:
          "Built for activation managers planning reach and frequency, and for online-first brands venturing into offline retail across modern trade and general trade in India.",
      },
      { property: "og:title", content: "Who It's For | Reach & Frequency at the Shelf" },
      {
        property: "og:description",
        content:
          "Coverage you can plan, frequency you can hold, and a route into offline retail for D2C brands.",
      },
    ],
  }),
  component: WhoItsFor,
});

const pillars = [
  {
    icon: Store,
    title: "Reach you can count",
    body: "2,000+ modern trade and general trade outlets across 185+ cities and 31 states and UTs. We map the store universe, agree the covered list with you, and publish coverage against it every single week.",
  },
  {
    icon: Repeat,
    title: "Frequency you can hold",
    body: "Coverage without rhythm is a one-off. We fix visit frequency per store class, staff to it, cover absenteeism the same day and report adherence, so your shopper meets your brand again and again, not once.",
  },
  {
    icon: Users,
    title: "Shoppers you can measure",
    body: "Every interaction, demo, sample and conversion is captured at the store. You see how many shoppers were reached, how often, and what it did to offtake, not how many people signed an attendance sheet.",
  },
];

const onlineToOffline = [
  {
    n: "01",
    title: "Awareness is already yours",
    body: "You spent years building an audience online. Offline, that audience walks past your product because nobody is there to connect the brand they follow with the pack on the shelf.",
  },
  {
    n: "02",
    title: "Retail is a different sport",
    body: "No retargeting, no reviews, no product page. Just three feet, a few seconds and a competitor beside you. We supply the human layer that does what your website used to do.",
  },
  {
    n: "03",
    title: "Start small, prove, scale",
    body: "We run a pilot cluster of stores, measure sell-out per outlet honestly, kill what does not work, then scale city by city with the same team and the same reporting spine.",
  },
  {
    n: "04",
    title: "Full back office included",
    body: "Payroll, statutory compliance, HR shared services and fractional HR leadership come with the field team, so you enter offline retail without building an offline org chart.",
  },
];

function WhoItsFor() {
  return (
    <>
      <PageHero
        eyebrow="Who it's for"
        title={
          <>
            If your brand needs reach and frequency at the shelf,{" "}
            <em className="not-italic text-coral">this is built for you.</em>
          </>
        }
        intro="For activation managers who plan coverage in numbers, and for online-first brands taking their first serious step into offline retail."
        accent="Modern trade · General trade · D2C to offline"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <article className="brand-box h-full p-8">
                  <span
                    className="inline-flex size-12 items-center justify-center rounded-lg text-white"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <p.icon className="size-5" />
                  </span>
                  <h2 className="mt-6 font-display text-xl font-extrabold text-foreground">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <Reveal>
              <StatBoard items={stats} />
            </Reveal>
          </div>
        </div>
      </section>

      <ReachFrequency />

      <section className="bg-brand-deep py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-coral">
              Online-first brands
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight lg:text-5xl">
              You won the internet. Offline is where the next hundred thousand shoppers are.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/65">
              D2C brands come to us when the online curve flattens and retail is the only way to
              grow. We give you the field organisation, the store access and the reporting you never
              had to build for ecommerce.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {onlineToOffline.map((o) => (
              <article
                key={o.n}
                className="group rounded-xl border border-white/12 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-coral"
              >
                <span className="font-display text-xs font-bold tracking-[0.2em] text-coral">
                  {o.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Categories we run</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
              Seven categories, one shelf discipline.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 50}>
                <div className="brand-box h-full p-7">
                  <h3 className="font-display text-lg font-extrabold text-foreground">
                    {ind.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
                </div>
              </Reveal>
            ))}
            <Link
              to="/services"
              className="brand-box flex h-full flex-col justify-between p-7"
              style={{ background: "var(--gradient-brand)" }}
            >
              <h3 className="font-display text-lg font-extrabold text-white">
                See the services behind it
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-coral">
                Explore services <ArrowRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <OfflineExpansion />
      <LogoWall />
      <CtaBand />
    </>
  );
}
