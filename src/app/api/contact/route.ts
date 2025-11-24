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

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("no-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const createField = (label: string, value: string) => `
  <div class="field">
    <div class="label">${label}:</div>
    <div class="value">${value}</div>
  </div>
`;

const createEmailHtml = (data: ContactFormData) => {
  const eventTypeLabel = data.eventType
    ? EVENT_TYPE_LABELS[data.eventType] || data.eventType
    : "Ikke spesifisert";

  const fields = [
    createField("Navn", data.name),
    createField("E-post", `<a href="mailto:${data.email}">${data.email}</a>`),
    data.phone && createField("Telefon", `<a href="tel:${data.phone.replace(/\s/g, "")}">${data.phone}</a>`),
    data.eventType && createField("Type arrangement", eventTypeLabel),
    data.eventDate && createField("Dato for arrangement", formatDate(data.eventDate)),
    data.numberOfGuests && createField("Antall gjester", data.numberOfGuests),
    createField("Melding", `<div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>`),
    createField("Samtykke gitt", data.consent ? "Ja" : "Nei"),
  ]
    .filter(Boolean)
    .join("");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f59e0b; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9fafb; padding: 20px; margin-top: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #171717; }
          .value { margin-top: 5px; color: #4b5563; }
          .message-box { background-color: white; padding: 15px; border-left: 4px solid #f59e0b; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Ny henvendelse fra kontaktskjema</h2>
          </div>
          <div class="content">
            ${fields}
          </div>
        </div>
      </body>
    </html>
  `;
};

const createEmailText = (data: ContactFormData) => {
  const eventTypeLabel = data.eventType
    ? EVENT_TYPE_LABELS[data.eventType] || data.eventType
    : "Ikke spesifisert";

  const lines = [
    "Ny henvendelse fra kontaktskjema",
    "",
    `Navn: ${data.name}`,
    `E-post: ${data.email}`,
    data.phone && `Telefon: ${data.phone}`,
    data.eventType && `Type arrangement: ${eventTypeLabel}`,
    data.eventDate && `Dato for arrangement: ${formatDate(data.eventDate)}`,
    data.numberOfGuests && `Antall gjester: ${data.numberOfGuests}`,
    "",
    "Melding:",
    data.message,
    "",
    `Samtykke gitt: ${data.consent ? "Ja" : "Nei"}`,
  ]
    .filter(Boolean)
    .join("\n");

  return lines;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.issues.map((err) => err.message).join(", ");
      return NextResponse.json({ error: `Valideringsfeil: ${errors}` }, { status: 400 });
    }

    const data = validation.data;
    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY is not set in environment variables");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "email@example.com";
    const senderEmail = process.env.SENDER_EMAIL || "noreply@example.com";
    const senderName = process.env.SENDER_NAME || "Kontaktskjema";
    const eventTypeLabel = data.eventType
      ? EVENT_TYPE_LABELS[data.eventType] || data.eventType
      : "Ikke spesifisert";

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: recipientEmail }],
        replyTo: { email: data.email, name: data.name },
        subject: `Ny henvendelse fra ${data.name} - ${eventTypeLabel}`,
        htmlContent: createEmailHtml(data),
        textContent: createEmailText(data),
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.text();
      console.error("Brevo API error:", errorData);
      return NextResponse.json(
        { error: "Kunne ikke sende e-post. Vennligst prøv igjen senere." },
        { status: 500 }
      );
    }

    const brevoData = await brevoResponse.json();
    return NextResponse.json(
      { success: true, message: "E-post sendt vellykket", messageId: brevoData.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "En feil oppstod. Vennligst prøv igjen senere." },
      { status: 500 }
    );
  }
}
