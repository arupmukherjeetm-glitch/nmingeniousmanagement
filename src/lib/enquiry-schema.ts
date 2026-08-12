import { z } from "zod";

export const enquirySubjects = [
  "Sell-Out Acceleration Audit",
  "Promoter deployment in stores",
  "Merchandising & shelf visibility",
  "BTL activation / sampling",
  "Offline expansion for an online-first brand",
  "Payroll & statutory compliance",
  "Fractional HR leadership",
  "Something else",
] as const;

export const footprints = [
  "Under 50 outlets",
  "50 – 250 outlets",
  "250 – 1000 outlets",
  "1000+ outlets",
  "Not sure yet",
] as const;

export const timelines = [
  "Immediately",
  "Within a month",
  "This quarter",
  "Exploring options",
] as const;

export const enquirySchema = z.object({
  formType: z.enum(["audit", "contact"]).default("contact"),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Choose a subject so we route you to the right team." })
    .max(120),
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(100, { message: "Name must be under 100 characters." }),
  company: z
    .string()
    .trim()
    .min(2, { message: "Please enter your company name." })
    .max(120, { message: "Company must be under 120 characters." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your work email." })
    .email({ message: "That does not look like a valid email address." })
    .max(255),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Phone number is too long." })
    .refine((v) => v === "" || /^[+0-9][0-9 ()-]{7,}$/.test(v), {
      message: "Enter a valid phone number (digits, spaces, + and - only).",
    })
    .optional()
    .default(""),
  role: z.string().trim().max(100).optional().default(""),
  footprint: z
    .string()
    .trim()
    .min(1, { message: "Select your retail footprint." })
    .refine((v) => (footprints as readonly string[]).includes(v), {
      message: "Select a footprint from the list.",
    }),
  timeline: z
    .string()
    .trim()
    .min(1, { message: "Select when you want to start." })
    .refine((v) => (timelines as readonly string[]).includes(v), {
      message: "Select a timeline from the list.",
    }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Tell us a little more — at least 10 characters." })
    .max(2000, { message: "Please keep this under 2000 characters." }),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
