import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, FileSearch, PhoneCall } from "lucide-react";
import { Eyebrow, PageHero } from "@/components/site/Sections";
import { contactDetails } from "@/lib/site-data";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Your Brief Is With Us | NM Ingenious" },
      {
        name: "description",
        content:
          "Your audit request has reached the NM Ingenious retail team. Here is a summary of what you sent and exactly what happens over the next three working days.",
      },
      { property: "og:title", content: "Thank you — your brief is with us" },
      {
        property: "og:description",
        content:
          "A summary of your submitted brief and the next steps in the Sell-Out Acceleration Audit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // Confirmation pages should never be indexed.
    links: [],
  }),
  component: ThankYou,
});

type Summary = {
  formType?: string;
  subject?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  role?: string;
  footprint?: string;
  timeline?: string;
  message?: string;
  submittedAt?: string;
};

const steps = [
  {
    icon: CheckCircle2,
    title: "Received and logged",
    body: "Your brief is with the retail operations desk. Nothing else is needed from you right now.",
  },
  {
    icon: PhoneCall,
    title: "Call within one working day",
    body: "We call to confirm categories, cities and store classes so the sample we audit reflects your real footprint.",
  },
  {
    icon: FileSearch,
    title: "Store sampling, 3–5 days",
    body: "Our auditors visit a representative sample and record shelf share, promoter presence and competitor blocks.",
  },
  {
    icon: Clock,
    title: "Coverage plan and costing",
    body: "You receive a coverage, frequency and cost-per-outlet plan, plus the sell-out numbers we would sign up to.",
  },
];

function ThankYou() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("nm_last_enquiry");
      if (raw) setSummary(JSON.parse(raw) as Summary);
    } catch {
      setSummary(null);
    }
  }, []);

  const rows: Array<[string, string | undefined]> = [
    ["Subject", summary?.subject],
    ["Name", summary?.name],
    ["Company", summary?.company],
    ["Work email", summary?.email],
    ["Phone", summary?.phone || "—"],
    ["Role", summary?.role || "—"],
    ["Retail footprint", summary?.footprint],
    ["Timeline", summary?.timeline],
  ];

  return (
    <>
      <PageHero
        eyebrow="Thank you"
        title={
          <>
            Your brief is with us —{" "}
            <em className="not-italic text-coral">we reply within one working day.</em>
          </>
        }
        intro="A member of the retail operations team reads every brief personally. Below is what you sent and what happens next."
        accent={
          summary?.submittedAt
            ? `Submitted ${new Date(summary.submittedAt).toLocaleString("en-IN")}`
            : "Submitted just now"
        }
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="brand-box p-8 lg:p-10">
              <Eyebrow>What you sent us</Eyebrow>
              {summary ? (
                <>
                  <dl className="mt-8 divide-y divide-border">
                    {rows.map(([label, value]) => (
                      <div key={label} className="grid grid-cols-3 gap-4 py-4">
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {label}
                        </dt>
                        <dd className="col-span-2 text-sm font-medium text-foreground">
                          {value ?? "—"}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {summary.message && (
                    <div className="mt-6 rounded-lg bg-muted p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Your note
                      </p>
                      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground">
                        {summary.message}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Your submission was recorded. The summary is only shown in the browser session it
                  was sent from — but our team already has every detail.
                </p>
              )}
            </div>
          </div>

          <aside className="space-y-4 lg:col-span-5">
            <div className="brand-box p-8 lg:p-10">
              <Eyebrow>What happens next</Eyebrow>
              <ol className="mt-6 space-y-6">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <s.icon className="size-4" />
                    </span>
                    <div>
                      <p className="font-display text-base font-extrabold text-foreground">
                        {i + 1}. {s.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div
              className="rounded-xl p-8 text-white lg:p-10"
              style={{ background: "var(--gradient-brand)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                Need us sooner?
              </p>
              <div className="mt-5 space-y-2 font-display text-base font-bold">
                <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className="block">
                  {contactDetails.phone}
                </a>
                <a href={`mailto:${contactDetails.email}`} className="block text-coral">
                  {contactDetails.email}
                </a>
              </div>
              <Link
                to="/services"
                className="mt-8 inline-flex rounded-full bg-white/15 px-6 py-3 text-sm font-bold text-white"
              >
                Explore our services
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
