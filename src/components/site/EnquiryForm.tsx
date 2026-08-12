import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";
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
import { submitEnquiry } from "@/lib/enquiries.functions";
import {
  enquirySchema,
  enquirySubjects,
  footprints,
  timelines,
} from "@/lib/enquiry-schema";
import { cn } from "@/lib/utils";

export { enquirySubjects };

// Quiet corporate fields: label above, calm underline, no hover motion.
const fieldClass =
  "h-12 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-brand focus-visible:ring-0 focus-visible:ring-offset-0";

const selectClass =
  "h-12 w-full rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus:ring-0 focus:ring-offset-0 data-[placeholder]:text-muted-foreground";

type Errors = Partial<Record<string, string>>;

export function EnquiryForm({
  defaultSubject,
  lockSubject = false,
  formType = "contact",
  title = "Send us a brief",
  note = "We use your details only to respond to this enquiry. No lists, no spam.",
  submitLabel = "Send my brief",
}: {
  defaultSubject?: string;
  lockSubject?: boolean;
  formType?: "audit" | "contact";
  title?: string;
  note?: string;
  submitLabel?: string;
}) {
  const navigate = useNavigate();
  const send = useServerFn(submitEnquiry);

  const [values, setValues] = useState({
    subject: defaultSubject ?? "",
    footprint: "",
    timeline: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);

  function set(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = enquirySchema.safeParse({ ...values, formType });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      const first = document.getElementById(String(parsed.error.issues[0]?.path[0]));
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setPending(true);
    try {
      await send({ data: parsed.data });
      sessionStorage.setItem(
        "nm_last_enquiry",
        JSON.stringify({ ...parsed.data, submittedAt: new Date().toISOString() }),
      );
      await navigate({ to: "/thank-you" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong sending your brief. Please try again or email us.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="brand-box p-8 lg:p-12">
      <h2 className="font-display text-xl font-extrabold text-foreground">{title}</h2>
      <div className="mt-2 h-px w-16 bg-coral" />

      <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <Field id="subject" label="Subject" required error={errors["subject"]}>
            {lockSubject ? (
              <div className="flex h-12 items-center border-b border-border font-medium text-foreground">
                {values.subject}
              </div>
            ) : (
              <Select value={values.subject} onValueChange={(v) => set("subject", v)}>
                <SelectTrigger
                  id="subject"
                  className={cn(selectClass, errors["subject"] && "border-destructive")}
                >
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

          <Field id="footprint" label="Retail footprint" required error={errors["footprint"]}>
            <Select value={values.footprint} onValueChange={(v) => set("footprint", v)}>
              <SelectTrigger
                id="footprint"
                className={cn(selectClass, errors["footprint"] && "border-destructive")}
              >
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

          <Field id="name" label="Full name" required error={errors["name"]}>
            <Input
              id="name"
              value={values.name}
              onChange={(e) => set("name", e.target.value)}
              className={cn(fieldClass, errors["name"] && "border-destructive")}
            />
          </Field>
          <Field id="company" label="Company" required error={errors["company"]}>
            <Input
              id="company"
              value={values.company}
              onChange={(e) => set("company", e.target.value)}
              className={cn(fieldClass, errors["company"] && "border-destructive")}
            />
          </Field>
          <Field id="email" label="Work email" required error={errors["email"]}>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              className={cn(fieldClass, errors["email"] && "border-destructive")}
            />
          </Field>
          <Field id="phone" label="Phone" error={errors["phone"]}>
            <Input
              id="phone"
              type="tel"
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={cn(fieldClass, errors["phone"] && "border-destructive")}
            />
          </Field>
          <Field id="role" label="Your role" error={errors["role"]}>
            <Input
              id="role"
              value={values.role}
              onChange={(e) => set("role", e.target.value)}
              className={fieldClass}
            />
          </Field>
          <Field
            id="timeline"
            label="When do you want to start?"
            required
            error={errors["timeline"]}
          >
            <Select value={values.timeline} onValueChange={(v) => set("timeline", v)}>
              <SelectTrigger
                id="timeline"
                className={cn(selectClass, errors["timeline"] && "border-destructive")}
              >
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

        <Field
          id="message"
          label="Where is the sale getting stuck?"
          required
          error={errors["message"]}
        >
          <Textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            className={cn(
              "resize-none rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:border-brand focus-visible:ring-0 focus-visible:ring-offset-0",
              errors["message"] && "border-destructive",
            )}
          />
        </Field>

        <div className="flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">{note}</p>
          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 font-display text-sm font-bold text-coral-foreground disabled:opacity-70"
          >
            {pending ? (
              <>
                Sending
                <Loader2 className="size-4 animate-spin" />
              </>
            ) : (
              <>
                {submitLabel}
                <ArrowRight className="size-4" />
              </>
            )}
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
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string | undefined;
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
      {error && (
        <p role="alert" className="flex items-center gap-1.5 text-xs font-medium text-destructive">
          <AlertCircle className="size-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
