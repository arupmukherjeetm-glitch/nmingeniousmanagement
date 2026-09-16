Remove from all the services. Remove the highlighted ones.
 Image containers are very big lil small make it.Make changes and give the new complete code for src/routes/services.index.tsx
. This should look awesome, no AI unwanted stuff 
The previous design was good for the images , 

I want the continuinty in service no h2 for rest 4 services. No dash with text Icons should be gentle. 
Check the image, 

Also, give a light layer above the images.


Now give the new complete code for services.index.tsx
Idiot who keeps the icons like this? I want full length images, like you had shared on first code change. I want new code for service.index.tsx after fixing it.

The images are getting gut from top fix that.

and why left arrow on images, remove that.

Idont want the icons in this way  and even the image container is good but small the container size and give a moder design man. Not generic.

Give complete code for services.index.tsx

Not image asshole

Keep the image full length and fit to the container but small the size of the conatiners. Idiot
Same nothing changed Conatiner size small but image shoul full-fit
What a waste design, you have created. Give me a modern asethetics design. This looks so bad.
What this is this? Have you evebr seen ICons like this ever?
Images are getting cut and Icon container is looking odd
CTR breaking in text line
Use this icons only for the services.index.tsx
Exact Icons I want for Services.index.tsx not other
Pasted text(20260916-175714).txt
Document
Take the icons from here  and give the complete code for Services.index.tsx
Image services 4 grid - row and 4-grid service with icons- row.

Use the exact Icons I'm giving you in the screenshot,

now give the complete services.index.tsx
Why the rest of the sections after the services section is lost ?
Line break check
Make Four Operating as black
Nothing changed 

You're right — the problem is not the color. The problem is the available width of the left hero column. Even though we added the <br />, the browser is wrapping “keep” before it reaches our forced line break.

Let's fix the actual cause.

Replace the entire Hero section in src/routes/services.index.tsx

Find:

<section className="bg-background pb-14 pt-16 lg:pb-16 lg:pt-20">

and replace that entire section with:

<section className="bg-background pb-14 pt-16 lg:pb-16 lg:pt-20">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
      {/* LEFT */}
      <div className="min-w-0">
        <Eyebrow>Services</Eyebrow>

        <h1
          className="
            mt-5
            max-w-none
            font-display
            text-4xl
            font-extrabold
            leading-[1.01]
            tracking-[-0.045em]
            text-foreground
            sm:text-5xl
            lg:text-6xl
          "
        >
          <span className="lg:whitespace-nowrap">
            The capabilities that keep
          </span>
          <br />
          <span className="text-coral">
            execution moving.
          </span>
        </h1>
      </div>

      {/* RIGHT */}
      <div className="min-w-0 lg:pb-1">
        <p
          className="
            max-w-xl
            text-sm
            leading-7
            text-muted-foreground
            lg:text-base
          "
        >
          From people on the shop floor to the systems supporting them, our
          services cover the practical work required to execute, measure and
          manage a distributed retail operation.
        </p>
      </div>
    </div>
  </div>
</section>
Now it will be forced to render as
The capabilities that keep
execution moving.

And the colors will be:

The capabilities that keep → black
execution moving. → coral

The important fix is this:

<span className="lg:whitespace-nowrap">
  The capabilities that keep
</span>

plus changing the grid from:

lg:grid-cols-[0.75fr_1.25fr]

to:

lg:grid-cols-[1.15fr_0.85fr]

So the heading gets enough horizontal space instead of “keep” being pushed onto its own line.

On mobile, whitespace-nowrap is disabled, so the heading can naturally wrap without creating horizontal overflow.

This was in Navigation menu now not visible ? Who it's for

Yes. “Who it's for” is a separate navigation item, and it has disappeared from the current Header.tsx navigation. The current header source shows Home, About and Services, with no Who it's for link in that navigation block.

It should be restored as:

Home | About | Services | Who it's for | Contact | Request an Audit

Fix src/components/site/Header.tsx

In the desktop navigation, immediately after the Services dropdown and before Contact, add:

{/* WHO IT'S FOR */}
<Link
  to="/who-its-for"
  className="font-display text-sm font-semibold text-brand-deep transition-colors hover:text-coral"
>
  Who it's for
</Link>

So the navigation should be:

<nav
  className="hidden items-center gap-8 lg:flex"
  aria-label="Primary navigation"
>
  {/* HOME */}
  <Link
    to="/"
    className="font-display text-sm font-semibold text-brand-deep transition-colors hover:text-coral"
  >
    Home
  </Link>

  {/* ABOUT */}
  <Link
    to="/about"
    className="font-display text-sm font-semibold text-brand-deep transition-colors hover:text-coral"
  >
    About
  </Link>

  {/* SERVICES DROPDOWN */}
  {/* keep your existing Services dropdown here */}

  {/* WHO IT'S FOR */}
  <Link
    to="/who-its-for"
    className="font-display text-sm font-semibold text-brand-deep transition-colors hover:text-coral"
  >
    Who it's for
  </Link>

  {/* CONTACT */}
  <Link
    to="/contact"
    className="font-display text-sm font-semibold text-brand-deep transition-colors hover:text-coral"
  >
    Contact
  </Link>
</nav>

The /who-its-for route is already referenced elsewhere in your existing site, so this restores the navigation entry rather than creating a new page.

Do not change services.index.tsx for this. This is a Header.tsx navigation issue.

Can you create complete separate page for Who it's for from the screenshot reference

Yes. The screenshot gives a clear direction: Who It's For should be a dedicated commercial/industry page, not another copy of the homepage.

I’d make it feel like a proper standalone landing page:

Hero — Who it's for
Industry / brand-type grid matching your screenshot
The problems are different by brand stage
What NM Ingenious actually solves
How the engagement changes by business need
A qualification / fit section
CTA

Below is the complete replacement for:

src/routes/who-its-for.tsx

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Layers3,
  PackageCheck,
  Radar,
  Store,
  Target,
  Users,
} from "lucide-react";

import { industries } from "@/lib/site-data";
import { CtaBand, Eyebrow, Reveal } from "@/components/site/Sections";

export const Route = createFileRoute("/who-its-for/")({
  head: () => ({
    meta: [
      {
        title: "Who It's For | NM Ingenious",
      },
      {
        name: "description",
        content:
          "NM Ingenious helps FMCG, beauty, wellness, food, challenger and premium brands build stronger retail execution, visibility and sell-out across India.",
      },
      {
        property: "og:title",
        content: "Who It's For | NM Ingenious",
      },
      {
        property: "og:description",
        content:
          "Different brands have different retail problems. We build the field system around the commercial problem that needs solving.",
      },
    ],
  }),
  component: WhoItsForPage,
});

function WhoItsForPage() {
  return (
    <>
      <HeroSection />
      <IndustrySection />
      <BrandStageSection />
      <ProblemSection />
      <EngagementSection />
      <FitSection />
      <CtaBand />
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F3F6FA]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Who it's for</Eyebrow>

            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-brand-deep sm:text-5xl lg:text-[64px]">
              If your brand needs reach and frequency at the shelf,{" "}
              <span className="text-coral">this is built for you.</span>
            </h1>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <p className="max-w-xl text-base leading-7 text-muted-foreground lg:text-lg lg:leading-8">
              Built for activation managers planning coverage, and for
              online-first brands stepping into offline retail: we quantify
              how many stores, how many shoppers and how often, then hold that
              number every week.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INDUSTRIES
========================================================= */

function IndustrySection() {
  return (
    <section className="bg-[#F3F6FA] pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="border-t border-border pt-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Built around the market</Eyebrow>

              <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
                Different categories.{" "}
                <span className="text-coral">Different reasons to act.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              The same field model does not work for every category. The
              shopper, shelf, sales cycle and execution challenge all change.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 45}>
              <IndustryCard
                number={String(index + 1).padStart(2, "0")}
                title={industry.title}
                body={industry.body}
              />
            </Reveal>
          ))}

          <Reveal delay={industries.length * 45}>
            <Link
              to="/contact"
              className="group flex min-h-[190px] h-full flex-col justify-between overflow-hidden rounded-xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--gradient-brand)",
              }}
            >
              <div>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Need a different model?
                </span>

                <h3 className="mt-5 max-w-[190px] font-display text-xl font-extrabold leading-tight text-white">
                  Reach & frequency, planned.
                </h3>
              </div>

              <span className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-coral">
                Talk to us
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative flex min-h-[190px] h-full flex-col overflow-hidden rounded-xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_18px_45px_-30px_rgba(8,43,97,0.4)]">
      <div
        aria-hidden
        className="absolute right-0 top-0 h-16 w-16 rounded-bl-[100%] border-l border-b border-coral/10"
      />

      <div className="flex items-start justify-between">
        <span className="font-display text-[10px] font-bold tracking-[0.18em] text-coral">
          {number}
        </span>

        <ArrowRight className="size-4 text-brand-deep/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-coral" />
      </div>

      <div className="mt-auto">
        <h3 className="font-display text-lg font-extrabold leading-tight text-foreground">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {body}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   BRAND STAGE
========================================================= */

function BrandStageSection() {
  const stages = [
    {
      icon: Radar,
      eyebrow: "Entering offline",
      title: "D2C brands going physical",
      body:
        "You already know how to create demand online. The challenge is translating that demand into visibility, availability and assisted purchase inside stores.",
      points: [
        "Retail launch coverage",
        "Promoter deployment",
        "Sampling & product education",
        "Store-level visibility",
      ],
    },
    {
      icon: Store,
      eyebrow: "Scaling retail",
      title: "Brands expanding their footprint",
      body:
        "More stores create more operational complexity. We help teams maintain execution standards as coverage expands across cities, channels and formats.",
      points: [
        "Multi-city deployment",
        "Merchandising consistency",
        "Outlet-level reporting",
        "Execution governance",
      ],
    },
    {
      icon: Target,
      eyebrow: "Protecting share",
      title: "Established brands under pressure",
      body:
        "When competition gets aggressive, being present is not enough. The field team needs to protect visibility, availability and conversion where shoppers decide.",
      points: [
        "Competitive visibility",
        "Shelf execution",
        "Promoter productivity",
        "Sell-out monitoring",
      ],
    },
  ];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Eyebrow>Where you are in the journey</Eyebrow>

            <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground lg:text-5xl">
              Your retail problem changes as{" "}
              <span className="text-coral">your brand grows.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-muted-foreground lg:col-span-5 lg:col-start-8">
            A brand entering retail needs a different operating model from a
            national brand defending thousands of outlets. The field system
            should reflect the commercial reality.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {stages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <Reveal key={stage.title} delay={index * 70}>
                <div className="group h-full rounded-2xl border border-border bg-white p-8 transition-all duration-400 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_25px_60px_-35px_rgba(8,43,97,0.45)] lg:p-9">
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-brand-deep/[0.06] text-brand-deep">
                      <Icon className="size-5" strokeWidth={1.7} />
                    </div>

                    <span className="font-display text-xs font-bold text-coral">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-coral">
                    {stage.eyebrow}
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-foreground">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {stage.body}
                  </p>

                  <div className="mt-8 border-t border-border pt-6">
                    <ul className="space-y-3">
                      {stage.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 text-sm font-medium text-foreground"
                        >
                          <CheckCircle2 className="size-4 shrink-0 text-coral" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROBLEM SECTION
========================================================= */

function ProblemSection() {
  const problems = [
    {
      icon: PackageCheck,
      title: "Availability",
      body:
        "The product is listed, but is it actually available when the shopper wants it?",
    },
    {
      icon: Layers3,
      title: "Visibility",
      body:
        "Is your brand earning enough physical attention at the point where shoppers compare?",
    },
    {
      icon: Users,
      title: "Conversion",
      body:
        "Does someone help the shopper understand, evaluate and choose the product?",
    },
    {
      icon: BarChart3,
      title: "Measurement",
      body:
        "Can your commercial team see what is happening at store level quickly enough to act?",
    },
    {
      icon: CircleDollarSign,
      title: "Productivity",
      body:
        "Are your field teams being measured by attendance, or by the commercial outcome they create?",
    },
    {
      icon: Target,
      title: "Consistency",
      body:
        "Does the execution standard remain the same when the operation expands across markets?",
    },
  ];

  return (
    <section className="bg-brand-deep py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow>What needs fixing</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] lg:text-5xl">
              The question isn't{" "}
              <span className="text-coral">“Do we have people?”</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
              The useful question is whether the field operation is solving
              the commercial problem behind the brief.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {problems.map((problem, index) => {
                const Icon = problem.icon;

                return (
                  <Reveal key={problem.title} delay={index * 40}>
                    <div className="group h-full bg-brand-deep p-7 transition-colors duration-300 hover:bg-white/[0.045] lg:p-8">
                      <Icon
                        className="size-5 text-coral"
                        strokeWidth={1.7}
                      />

                      <h3 className="mt-7 font-display text-lg font-extrabold">
                        {problem.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/60">
                        {problem.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ENGAGEMENT MODEL
========================================================= */

function EngagementSection() {
  const models = [
    {
      number: "01",
      title: "Launch",
      body:
        "Build the initial field footprint, train the team and establish the execution standard.",
    },
    {
      number: "02",
      title: "Scale",
      body:
        "Extend coverage while keeping people, process, reporting and retail standards under control.",
    },
    {
      number: "03",
      title: "Optimise",
      body:
        "Use store-level signals to identify leakage, improve productivity and focus effort where it matters.",
    },
    {
      number: "04",
      title: "Integrate",
      body:
        "Combine field execution, visibility, workforce, payroll and reporting into one operating system.",
    },
  ];

  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Eyebrow>How we fit in</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground lg:text-5xl">
              Start with one problem.{" "}
              <span className="text-coral">Build from there.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-muted-foreground lg:col-span-5 lg:col-start-8">
            You do not need to buy every capability at once. The operating
            model can start with the immediate commercial requirement and
            expand as the business needs it.
          </p>
        </div>

        <div className="mt-16 grid gap-0 overflow-hidden rounded-2xl border border-border bg-white lg:grid-cols-4">
          {models.map((model, index) => (
            <Reveal key={model.number} delay={index * 50}>
              <div
                className={`relative h-full p-7 lg:p-8 ${
                  index < models.length - 1
                    ? "border-b border-border lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <span className="font-display text-xs font-bold text-coral">
                  {model.number}
                </span>

                <h3 className="mt-12 font-display text-xl font-extrabold text-foreground">
                  {model.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {model.body}
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
   FIT SECTION
========================================================= */

function FitSection() {
  const fitItems = [
    "You sell through physical retail and need stronger execution.",
    "You are expanding an online-first brand into offline channels.",
    "You need measurable store-level visibility.",
    "Your field operation is growing faster than your internal systems.",
    "You need promoters, merchandisers or advisors who are managed against outcomes.",
    "You want one partner across field execution, workforce and reporting.",
  ];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-2xl border border-border bg-[#F3F6FA] p-8 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Eyebrow>A useful starting point</Eyebrow>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-foreground lg:text-5xl">
                If these sound familiar,{" "}
                <span className="text-coral">let's talk.</span>
              </h2>

              <p className="mt-6 text-base leading-7 text-muted-foreground">
                The first conversation is about the commercial problem, not
                about selling you a predefined manpower package.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-coral px-6 py-3.5 font-display text-sm font-bold text-coral-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Discuss your requirement
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid gap-3">
                {fitItems.map((item, index) => (
                  <Reveal key={item} delay={index * 35}>
                    <div className="flex items-start gap-4 rounded-xl border border-border bg-white px-5 py-4">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-coral/10">
                        <CheckCircle2 className="size-3.5 text-coral" />
                      </span>

                      <span className="text-sm leading-6 text-foreground">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
