import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, ClipboardList, FileBarChart, ShieldCheck } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Eyebrow, PageHero } from "@/components/site/Sections";
import { contactDetails } from "@/lib/site-data";

export const Route = createFileRoute("/request-an-audit")({
  head: () => ({
    meta: [
      { title: "Request a Sell-Out Acceleration Audit | NM Ingenious" },
      {
        name: "description",
        content:
          "Request a Sell-Out Acceleration Audit. We sample your outlets, benchmark competitors and return a coverage, frequency and cost plan for your brand within one working day.",
      },
      { property: "og:title", content: "Request a Sell-Out Acceleration Audit" },
      {
        property: "og:description",
        content:
          "A store-level audit of your retail execution: coverage, frequency, visibility and what it is costing you in lost sell-out.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RequestAudit,
});

const inclusions = [
  {
    icon: ClipboardList,
    title: "Store sample visit",
    body: "We visit a representative sample of your outlets across store classes and record what a shopper actually sees.",
  },
  {
    icon: FileBarChart,
    title: "Competitor benchmark",
    body: "Facings, price visibility, promoter presence and off-shelf blocks for you and the two brands beside you.",
  },
  {
    icon: CalendarClock,
    title: "Coverage & frequency plan",
    body: "How many stores, how often, with what team shape and what it costs per outlet per month.",
  },
  {
    icon: ShieldCheck,
    title: "Numbers we sign up to",
    body: "The sell-out and compliance metrics we would be held to, agreed before anyone is deployed.",
  },
];

function RequestAudit() {
  return (
    <>
      <PageHero
        eyebrow="Request an audit"
        title={
          <>
            A Sell-Out Acceleration Audit,{" "}
            <em className="not-italic text-coral">before you spend on field teams.</em>
          </>
        }
        intro="Tell us the category and the footprint. We audit a sample of your stores, benchmark the shelf against your competitors and come back with a coverage and frequency plan you can cost."
        accent="No obligation · Reply within one working day"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <EnquiryForm
              defaultSubject="Sell-Out Acceleration Audit"
              lockSubject
              title="Audit request"
              submitLabel="Request my audit"
              note="Your details are used only to scope and schedule this audit."
            />
          </div>

          <aside className="space-y-4 lg:col-span-5">
            <div className="brand-box p-8 lg:p-10">
              <Eyebrow>What the audit covers</Eyebrow>
              <ul className="mt-6 space-y-6">
                {inclusions.map((i) => (
                  <li key={i.title} className="flex gap-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <i.icon className="size-4" />
                    </span>
                    <div>
                      <p className="font-display text-base font-extrabold text-foreground">
                        {i.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {i.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-8 text-white lg:p-10"
              style={{ background: "var(--gradient-brand)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                Prefer to talk first?
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/80">
                Call or write to us directly and we will scope the audit over a 20-minute call.
              </p>
              <div className="mt-6 space-y-2 font-display text-base font-bold">
                <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className="block">
                  {contactDetails.phone}
                </a>
                <a href={`mailto:${contactDetails.email}`} className="block text-coral">
                  {contactDetails.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
