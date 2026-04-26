import { Resend } from "resend";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  company: z.string().max(200).optional().or(z.literal("")),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(8000),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return Response.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return Response.json(
      { error: "Contact form is not configured (missing RESEND_API_KEY or CONTACT_TO_EMAIL)." },
      { status: 503 },
    );
  }

  const from =
    process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>";

  const { name, email, company, subject, message } = parsed.data;
  const companyLine = company?.trim() ? `Company: ${company.trim()}` : "Company: —";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n${companyLine}\n\nSubject: ${subject}\n\n${message}`,
  });

  if (error) {
    console.error("[contact]", error);
    return Response.json(
      { error: "Failed to send message. Try again later." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
