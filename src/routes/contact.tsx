import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { contactDetails, services } from "@/lib/site-data";
import { Eyebrow, PageHero } from "@/components/site/Sections";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Request a Sell-Out Acceleration Audit | NM Ingenious" },
      {
        name: "description",
        content:
          "Talk to NM Ingenious about promoter deployment, merchandising, activations, payroll or fractional HR. Request a Sell-Out Acceleration Audit for your brand.",
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

const goals = [
  "Deploy promoters in stores",
  "Fix merchandising & visibility",
  "Run a BTL activation",
  "Audit my retail execution",
  "Outsource payroll & compliance",
  "Fractional HR leadership",
];

const scales = ["Under 50 outlets", "50 – 250 outlets", "250 – 1000 outlets", "1000+ outlets"];

// Corporate, placeholder-free fields: label above, quiet underline that
// lifts to brand on focus.
const fieldClass =
  "h-12 rounded-none border-0 border-b-2 border-border bg-transparent px-0 shadow-none transition-colors focus-visible:border-brand focus-visible:ring-0 focus-visible:ring-offset-0";

const steps = [
  { title: "Your brief", body: "Tell us the category, the footprint and where the sale is stuck." },
  { title: "Store reality check", body: "We audit a sample of your outlets and competitors." },
  { title: "Sell-out plan", body: "Coverage, frequency, cost and the numbers we'll be held to." },
];

function Contact() {
  const [goal, setGoal] = useState<string | null>(null);
  const [scale, setScale] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!goal) {
      toast.error("Pick what you need help with so we route you to the right team.");
      return;
    }
    setSent(true);
    toast.success("Thanks — your brief is with our team. We reply within one working day.");
  }

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
        intro="One form, three minutes. It goes straight to the team that would actually run your account, not a generic inbox."
        accent="We reply within one working day"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <div className="brand-box p-8 lg:p-12">
              {sent ? (
                <div className="py-16 text-center">
                  <span
                    className="mx-auto flex size-16 items-center justify-center rounded-full text-white"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Check className="size-7" strokeWidth={3} />
                  </span>
                  <h2 className="mt-8 font-display text-2xl font-extrabold text-foreground">
                    Your brief is in.
                  </h2>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    A member of our retail execution team will come back to you within one working
                    day with an audit plan for your outlets.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 font-display text-sm font-bold text-brand underline underline-offset-4"
                  >
                    Send another brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <fieldset>
                    <legend className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-brand">
                      01 — What do you need?
                    </legend>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {goals.map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGoal(g)}
                          aria-pressed={goal === g}
                          className={cn(
                            "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300",
                            goal === g
                              ? "border-transparent bg-brand text-primary-foreground shadow-[0_12px_26px_-14px_oklch(0.33_0.135_295/0.9)]"
                              : "border-border text-foreground/80 hover:border-brand hover:text-brand",
                          )}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-brand">
                      02 — How big is the footprint?
                    </legend>
                    <div className="mt-5 grid gap-2 sm:grid-cols-4">
                      {scales.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setScale(s)}
                          aria-pressed={scale === s}
                          className={cn(
                            "rounded-lg border px-3 py-3 text-xs font-semibold transition-all duration-300",
                            scale === s
                              ? "border-coral bg-coral/10 text-coral"
                              : "border-border text-muted-foreground hover:border-brand hover:text-brand",
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset className="space-y-5">
                    <legend className="font-display text-sm font-extrabold uppercase tracking-[0.16em] text-brand">
                      03 — Who are we speaking to?
                    </legend>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field id="name" label="Full name" required>
                        <Input id="name" name="name" required className={fieldClass} />
                      </Field>
                      <Field id="company" label="Company" required>
                        <Input id="company" name="company" required className={fieldClass} />
                      </Field>
                      <Field id="email" label="Work email" required>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className={fieldClass}
                        />
                      </Field>
                      <Field id="phone" label="Phone">
                        <Input id="phone" name="phone" type="tel" className={fieldClass} />
                      </Field>
                      <Field id="role" label="Your role">
                        <Input id="role" name="role" className={fieldClass} />
                      </Field>
                      <Field id="category" label="Category">
                        <Input id="category" name="category" className={fieldClass} />
                      </Field>
                    </div>
                    <Field id="message" label="Where is the sale getting stuck?">
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={fieldClass.replace("h-12 ", "")}
                      />
                    </Field>

                  </fieldset>

                  <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                      We use your details only to respond to this enquiry. No lists, no spam.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 font-display text-sm font-bold text-coral-foreground transition-all duration-300 hover:shadow-[0_20px_40px_-16px_oklch(0.635_0.183_32/0.7)] hover:brightness-110"
                    >
                      Send my brief
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
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
                  <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {contactDetails.phone}
                  </a>
                </p>
                <p className="flex gap-4 text-white/80">
                  <Mail className="size-4 shrink-0 text-coral" />
                  <a href={`mailto:${contactDetails.email}`} className="hover:text-white">
                    {contactDetails.email}
                  </a>
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

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
        {required && <span className="ml-1 text-coral">*</span>}
      </Label>
      {children}
    </div>
  );
}
