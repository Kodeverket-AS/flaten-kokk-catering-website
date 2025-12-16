"use client";
// https://zod.dev/v4#custom-email-regex
// https://nextjs.org/docs/app/guides/forms?utm_source=chatgpt.com

import React, { useState } from "react";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/Input";
import { Mail, Phone, User, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";
import {
  contactFormSchema,
  contactFormInitialValues,
  type ContactFormData,
  validateContactFormField,
} from "@/lib/schemas/contactForm";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const KontaktSkjema: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(
    contactFormInitialValues
  );
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFormData, boolean>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateField = <K extends keyof ContactFormData>(
    name: K,
    value: ContactFormData[K]
  ) => {
    const validation = validateContactFormField(name, value);

    setErrors((prev) => {
      // Hvis feltet er gyldig: fjern fra errors
      if (!validation) {
        // kopier prev for å unngå mutasjon
        const rest = { ...prev };
        // Fjern nøkkelen for dette feltet
        delete rest[name];
        // returner gjennstående error-objekt
        return rest;
      }
      // Hvis feltet har feil - oppdater feilmeldingen
      return { ...prev, [name]: validation?.error };
    });
  };

  // Oppdaterer et enkelt felt i skjemastaten, og validerer det dersom det allerede er "touched"
  const updateField = (name: keyof ContactFormData, value: unknown) => {
    // Slå sammen eksisterende formData med ny verdi for gitt felt
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Kjør feltvalidering kun hvis brukeren allerede har vært innom dette feltet
    if (touched[name]) {
      validateField(name, value as ContactFormData[typeof name]);
    }
  };

  // Felles onChange-handler for tekstfelter, textarea, select og checkbox
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const name = target.name as keyof ContactFormData;

    // Checkbox bruker checked, andre felttyper bruker value
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;

    // Oppdater state og eventuelt valider feltet
    updateField(name, value);
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name as keyof ContactFormData;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const validation = contactFormSchema.safeParse(formData);

    // 1. Håndter valideringsfeil
    if (!validation.success) {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

      // Bygg opp errors-objektet på en enkel måte
      for (const issue of validation.error.issues) {
        const fieldName = issue.path[0] as keyof ContactFormData;
        newErrors[fieldName] = issue.message;
      }

      setErrors(newErrors);

      // Marker alle felter med feil som "touched" uten reduce
      const newTouched: Partial<Record<keyof ContactFormData, boolean>> = {
        ...touched,
      };
      for (const key in newErrors) {
        newTouched[key as keyof ContactFormData] = true;
      }
      setTouched(newTouched);

      setSubmitStatus({
        type: "error",
        message: "Vennligst rett feilene i skjemaet før du sender.",
      });

      setIsSubmitting(false);
      return;
    }

    // 2. Send til API hvis alt er gyldig
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Kunne ikke sende melding");
      }

      setSubmitStatus({
        type: "success",
        message: "Takk for din henvendelse! Vi tar kontakt så snart som mulig.",
      });

      setFormData(contactFormInitialValues);
      setErrors({});
      setTouched({});
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Noe gikk galt. Vennligst prøv igjen eller kontakt oss direkte.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isSubmitting || submitStatus.type === "success";

  const eventTypeOptions = [
    { value: "", label: "Velg type arrangement" },
    { value: "privat-kokk", label: "Privat kokk" },
    { value: "catering", label: "Catering" },
    { value: "airbnb-event", label: "Airbnb Event" },
    { value: "bryllup", label: "Bryllup" },
    { value: "konfirmasjon", label: "Konfirmasjon" },
    { value: "jubileum", label: "Jubileum" },
    { value: "annet", label: "Annet" },
  ];

  // tjeneste - tid - gjester
  return (
    <section className="max-w-[876px] m-auto bg-stone-50 border border-gray-200 rounded-2xl p-8">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-baseline gap-2 p self-start">
          <Calendar size={24} />
          <h3 className="m-0">Online booking</h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 gap-6">
            <Input
              label="Type arrangement"
              icon={Calendar}
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.eventType}
              options={eventTypeOptions}
              disabled={isDisabled}
            />

            <Input
              label="Dato for arrangement"
              icon={Calendar}
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.eventDate}
              type="date"
              disabled={isDisabled}
            />

            <Input
              label="Antall gjester"
              icon={User}
              name="numberOfGuests"
              value={formData.numberOfGuests}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.numberOfGuests}
              type="number"
              placeholder="Antall personer"
              min="1"
              disabled={isDisabled}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Navn"
              icon={User}
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              placeholder="Ditt fulle navn"
              disabled={isDisabled}
              required
            />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Telefon
              </label>
              <PhoneInput
                international
                defaultCountry="NO"
                value={formData.phone || undefined}
                onChange={(value) => {
                  setFormData((prev) => ({ ...prev, phone: value || "" }));
                  if (touched.phone) validateField("phone", value || "");
                }}
                onBlur={() => {
                  setTouched((prev) => ({ ...prev, phone: true }));
                  validateField("phone", formData.phone);
                }}
                disabled={isDisabled}
                numberInputProps={{
                  className: `input-standard ${errors.phone ? "error" : ""}`,
                }}
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>

          <Input
            label="E-post"
            icon={Mail}
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            placeholder="din@epost.no"
            type="email"
            disabled={isDisabled}
            required
          />

          <Input
            label="Melding"
            icon={MessageSquare}
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message}
            type="textarea"
            rows={5}
            placeholder="Fortell oss om ditt arrangement, spesielle ønsker eller spørsmål..."
            disabled={isDisabled}
            required
          />

          <div
            className={`flex flex-col gap-3 p-4 border rounded-lg ${
              errors.consent ? "border-red-500" : "border-gray-300"
            }`}
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                onBlur={handleBlur}
                className="mt-1 w-5 h-5 text-amber-500 border-gray-300 focus:ring-amber-500 cursor-pointer disabled:cursor-not-allowed accent-amber-500"
                disabled={isDisabled}
              />
              <label
                htmlFor="consent"
                className="text-sm text-gray-700 cursor-pointer flex-1"
              >
                Jeg gir samtykke til at min kontaktinformasjon blir lagret for å
                kunne kontakte meg. Du kan trekke dette samtykket tilbake når
                som helst.
              </label>
            </div>
            <Link
              href="/personvern"
              className="text-sm text-amber-600 hover:text-amber-700 underline ml-8"
            >
              Les vår personvernerklæring
            </Link>
            {errors.consent && (
              <p className="text-sm text-red-600 ml-8">{errors.consent}</p>
            )}
          </div>

          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              <p className="text-sm font-medium">{submitStatus.message}</p>
            </div>
          )}

          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              variant="primary"
              className="min-w-[200px]"
              ariaLabel="Send melding"
            >
              {isSubmitting ? "Sender..." : "Send melding"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default KontaktSkjema;
