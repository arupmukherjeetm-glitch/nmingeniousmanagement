import { createServerFn } from "@tanstack/react-start";

import { enquirySchema, type EnquiryInput } from "./enquiry-schema";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }: { data: EnquiryInput }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
      .from("enquiries")
      .insert({
        form_type: data.formType,
        subject: data.subject,
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone || null,
        role: data.role || null,
        footprint: data.footprint,
        timeline: data.timeline,
        message: data.message,
      })
      .select("id")
      .single();

    if (error) {
      console.error("enquiry insert failed", error);
      throw new Error("We could not record your enquiry. Please try again or email us directly.");
    }

    // Notify the team. Email delivery activates once the sender domain is verified;
    // a failure here must never lose the stored enquiry.
    const notified = await notifyTeam(data).catch((e) => {
      console.error("enquiry notification failed", e);
      return false;
    });

    return { id: row.id, notified };
  });

async function notifyTeam(data: EnquiryInput): Promise<boolean> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  const senderDomain = process.env["EMAIL_SENDER_DOMAIN"];
  const to = process.env["ENQUIRY_NOTIFICATION_EMAIL"] ?? "madhavi@ingeniousmanagement.com";
  if (!apiKey || !senderDomain) return false;

  const { sendLovableEmail } = await import("@lovable.dev/email-js");
  const lines = [
    `Subject: ${data.subject}`,
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone ?? ""}`,
    `Role: ${data.role ?? ""}`,
    `Footprint: ${data.footprint}`,
    `Timeline: ${data.timeline}`,
    "",
    data.message,
  ];

  await sendLovableEmail(
    {
      to,
      from: `NM Ingenious Website <notify@${senderDomain}>`,
      sender_domain: senderDomain,
      subject: `New ${data.formType === "audit" ? "audit request" : "enquiry"}: ${data.company}`,
      text: lines.join("\n"),
      html: `<h2>${escapeHtml(data.subject)}</h2><p>${lines
        .slice(1)
        .map((l) => escapeHtml(l))
        .join("<br/>")}</p>`,
    },
    { apiKey },
  );
  return true;
}


function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
