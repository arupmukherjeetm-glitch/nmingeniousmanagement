import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails, services } from "@/lib/site-data";
import { Eyebrow, PageHero } from "@/components/site/Sections";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Talk to Our Retail Execution Team | NM Ingenious" },
      {
        name: "description",
        content:
          "Talk to NM Ingenious about promoter deployment, merchandising, activations, payroll or fractional HR. Pick a subject and our team replies within one working day.",
      },
      { property: "og:title", content: "Contact NM Ingenious" },
      {
        property: "og:description",
        content: "Tell us where your product is stuck. We'll tell you what's blocking the sale.",
      },
    ],
  }),
  component: Contact,
});

const steps = [
  { title: "Your brief", body: "Tell us the category, the footprint and where the sale is stuck." },
  { title: "Store reality check", body: "We audit a sample of your outlets and competitors." },
  { title: "Sell-out plan", body: "Coverage, frequency, cost and the numbers we'll be held to." },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us where your product is stuck.{" "}
            <em className="not-italic text-coral">We'll tell you what's blocking the sale.</em>
          </>
        }
        intro="Pick a subject, add a few details, and your brief goes straight to the team that would actually run your account, not a generic inbox."
        accent=""
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

          <aside className="space-y-4 lg:col-span-5">
            <div
              className="rounded-xl p-8 text-white lg:p-10"
              style={{ background: "var(--gradient-brand)" }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                Head office
              </p>
              <div className="mt-6 space-y-5 text-sm">
                <p className="flex gap-4 leading-relaxed text-white/80">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-coral" />
                  {contactDetails.office}
                </p>
                <p className="flex gap-4 text-white/80">
                  <Phone className="size-4 shrink-0 text-coral" />
                  <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>
                    {contactDetails.phone}
                  </a>
                </p>
                <p className="flex gap-4 text-white/80">
                  <Mail className="size-4 shrink-0 text-coral" />
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                </p>
                <p className="flex gap-4 text-white/80">
                  <Clock className="size-4 shrink-0 text-coral" />
                  Monday to Saturday, 9:30 am – 6:30 pm IST
                </p>
              </div>
            </div>

            <div className="brand-box p-8 lg:p-10">
              <Eyebrow>What happens next</Eyebrow>
              <ol className="mt-6 space-y-6">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-5">
                    <span className="font-display text-sm font-extrabold text-coral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-base font-extrabold text-foreground">
                        {s.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="brand-box p-8 lg:p-10">
              <Eyebrow>Services</Eyebrow>
              <ul className="mt-5 flex flex-wrap gap-2">
                {services.map((s) => (
                  <li
                    key={s.slug}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {s.navLabel}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
