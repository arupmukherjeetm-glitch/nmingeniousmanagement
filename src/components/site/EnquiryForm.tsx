import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const enquirySubjects = [
  "Sell-Out Acceleration Audit",
  "Promoter deployment in stores",
  "Merchandising & shelf visibility",
  "BTL activation / sampling",
  "Offline expansion for an online-first brand",
  "Payroll & statutory compliance",
  "Fractional HR leadership",
  "Something else",
];

const footprints = [
  "Under 50 outlets",
  "50 – 250 outlets",
  "250 – 1000 outlets",
  "1000+ outlets",
  "Not sure yet",
];

const timelines = ["Immediately", "Within a month", "This quarter", "Exploring options"];

// Quiet corporate fields: label above, calm underline, no hover motion.
const fieldClass =
  "h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-brand focus-visible:ring-0 focus-visible:ring-offset-0";

const selectClass =
  "h-12 w-full rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus:ring-0 focus:ring-offset-0 data-[placeholder]:text-muted-foreground";

export function EnquiryForm({
  defaultSubject,
  lockSubject = false,
  title = "Send us a brief",
  note = "We use your details only to respond to this enquiry. No lists, no spam.",
  submitLabel = "Send my brief",
}: {
  defaultSubject?: string;
  lockSubject?: boolean;
  title?: string;
  note?: string;
  submitLabel?: string;
}) {
  const [subject, setSubject] = useState(defaultSubject ?? "");
  const [footprint, setFootprint] = useState("");
  const [timeline, setTimeline] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!subject) {
      toast.error("Please choose a subject so we route you to the right team.");
      return;
    }
    setSent(true);
    toast.success("Thanks — your brief is with our team. We reply within one working day.");
  }

  if (sent) {
    return (
      <div className="brand-box p-8 lg:p-12">
        <div className="py-14 text-center">
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
            Subject: <span className="font-semibold text-foreground">{subject}</span>. A member of
            our retail execution team will come back to you within one working day.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-8 font-display text-sm font-bold text-brand underline underline-offset-4"
          >
            Send another brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="brand-box p-8 lg:p-12">
      <h2 className="font-display text-xl font-extrabold text-foreground">{title}</h2>
      <div className="mt-2 h-px w-16 bg-coral" />

      <form onSubmit={handleSubmit} className="mt-10 space-y-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <Field id="subject" label="Subject" required>
            {lockSubject ? (
              <>
                <input type="hidden" name="subject" value={subject} />
                <div className="flex h-12 items-center border-b border-border font-medium text-foreground">
                  {subject}
                </div>
              </>
            ) : (
              <Select value={subject} onValueChange={setSubject} name="subject">
                <SelectTrigger id="subject" className={selectClass}>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {enquirySubjects.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </Field>

          <Field id="footprint" label="Retail footprint">
            <Select value={footprint} onValueChange={setFootprint} name="footprint">
              <SelectTrigger id="footprint" className={selectClass}>
                <SelectValue placeholder="Select outlet range" />
              </SelectTrigger>
              <SelectContent>
                {footprints.map((f) => (
                  <SelectItem key={f} value={f}>
                    {f}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field id="name" label="Full name" required>
            <Input id="name" name="name" required className={fieldClass} />
          </Field>
          <Field id="company" label="Company" required>
            <Input id="company" name="company" required className={fieldClass} />
          </Field>
          <Field id="email" label="Work email" required>
            <Input id="email" name="email" type="email" required className={fieldClass} />
          </Field>
          <Field id="phone" label="Phone">
            <Input id="phone" name="phone" type="tel" className={fieldClass} />
          </Field>
          <Field id="role" label="Your role">
            <Input id="role" name="role" className={fieldClass} />
          </Field>
          <Field id="timeline" label="When do you want to start?">
            <Select value={timeline} onValueChange={setTimeline} name="timeline">
              <SelectTrigger id="timeline" className={selectClass}>
                <SelectValue placeholder="Select a timeline" />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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

        <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">{note}</p>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 font-display text-sm font-bold text-coral-foreground"
          >
            {submitLabel}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </form>
    </div>
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
      <Label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-coral">*</span>}
      </Label>
      {children}
    </div>
  );
}
