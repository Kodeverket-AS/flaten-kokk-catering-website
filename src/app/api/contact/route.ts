import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contactForm";

const EVENT_TYPE_LABELS: Record<string, string> = {
  "privat-kokk": "Privat kokk",
  "catering": "Catering",
  "airbnb-event": "Airbnb Event",
  "bryllup": "Bryllup",
  "konfirmasjon": "Konfirmasjon",
  "jubileum": "Jubileum",
  "annet": "Annet",
};

const getEventTypeLabel = (type?: string) =>
  type ? EVENT_TYPE_LABELS[type] || type : "Ikke spesifisert";

const formatDate = (dateString?: string) =>
  dateString
    ? new Date(dateString).toLocaleDateString("no-NO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Ikke satt";

const createField = (label: string, value: string) => `
  <div style="margin-bottom:12px">
    <div style="font-weight:600;color:#111827">${label}:</div>
    <div style="margin-top:6px;color:#374151">${value}</div>
  </div>
`;

const createEmailHtml = (data: ContactFormData) => {
  const eventTypeLabel = getEventTypeLabel(data.eventType);

  const parts = [
    createField("Navn", data.name),
    createField("E-post", `<a href="mailto:${data.email}">${data.email}</a>`),
    data.phone ? createField("Telefon", `<a href="tel:${data.phone.replace(/\s/g, "")}">${data.phone}</a>`) : "",
    createField("Type arrangement", eventTypeLabel),
    data.eventDate ? createField("Dato for arrangement", formatDate(data.eventDate)) : "",
    data.numberOfGuests ? createField("Antall gjester", data.numberOfGuests) : "",
    createField("Melding", `<div style="background:#fff;padding:12px;border-left:4px solid #f59e0b">${(data.message || "").replace(/\n/g, "<br>")}</div>`),
    createField("Samtykke gitt", data.consent ? "Ja" : "Nei"),
  ].filter(Boolean).join("");

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Ny henvendelse</title>
      </head>
      <body style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:20px;color:#111827">
        <div style="max-width:680px;margin:0 auto;background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 6px rgba(16,24,40,0.06)">
          <div style="background:#f59e0b;color:#fff;padding:14px;border-radius:6px;text-align:center">
            <h2 style="margin:0">Ny henvendelse fra kontaktskjema</h2>
          </div>
          <div style="padding:18px 0">${parts}</div>
        </div>
      </body>
    </html>
  `;
};

const createEmailText = (data: ContactFormData) => {
  const eventTypeLabel = getEventTypeLabel(data.eventType);
  return [
    "Ny henvendelse fra kontaktskjema",
    "",
    `Navn: ${data.name}`,
    `E-post: ${data.email}`,
    data.phone ? `Telefon: ${data.phone}` : null,
    `Type arrangement: ${eventTypeLabel}`,
    data.eventDate ? `Dato for arrangement: ${formatDate(data.eventDate)}` : null,
    data.numberOfGuests ? `Antall gjester: ${data.numberOfGuests}` : null,
    "",
    "Melding:",
    data.message,
    "",
    `Samtykke gitt: ${data.consent ? "Ja" : "Nei"}`,
  ].filter(Boolean).join("\n");
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
      return NextResponse.json({ error: `Valideringsfeil: ${errors}` }, { status: 400 });
    }

    const data = parsed.data;

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY mangler i env");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "email@example.com";
    const senderEmail = process.env.SENDER_EMAIL || "noreply@example.com";
    const senderName = process.env.SENDER_NAME || "Kontaktskjema";

    const eventTypeLabel = getEventTypeLabel(data.eventType);

    const brevoPayload = {
      sender: { name: senderName, email: senderEmail },
      to: [{ email: recipientEmail }],
      replyTo: { email: data.email, name: data.name },
      subject: `Ny henvendelse fra ${data.name} - ${eventTypeLabel}`,
      htmlContent: createEmailHtml(data),
      textContent: createEmailText(data),
    };

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify(brevoPayload),
    });

    if (!brevoRes.ok) {
      const text = await brevoRes.text();
      console.error("Brevo error:", text);
      return NextResponse.json({ error: "Kunne ikke sende e-post. Prøv igjen senere." }, { status: 500 });
    }

    const brevoData = await brevoRes.json();
    return NextResponse.json({ success: true, message: "E-post sendt", meta: brevoData }, { status: 200 });
  } catch (err) {
    console.error("Feil ved behandling av skjema:", err);
    return NextResponse.json({ error: "En feil oppstod. Vennligst prøv igjen senere." }, { status: 500 });
  }
}
