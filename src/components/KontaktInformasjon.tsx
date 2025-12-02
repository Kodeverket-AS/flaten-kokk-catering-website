"use client";

import React, { useRef, useState } from "react";
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

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const KontaktSkjema: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(
    contactFormInitialValues
  );
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const startTimeRef = useRef(Date.now());
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFormData, boolean>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateField = (name: keyof ContactFormData, value: unknown) => {
    const validation = validateContactFormField(name, value);
    setErrors((prev) => {
      const updated = { ...prev };
      if (validation) {
        updated[name] = validation.error;
      } else {
        delete updated[name];
      }
      return updated;
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type } = e.target;
    const value =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof ContactFormData]) {
      validateField(name as keyof ContactFormData, value);
    }
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

    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validation.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setTouched(
        Object.keys(fieldErrors).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {} as Partial<Record<keyof ContactFormData, boolean>>
        )
      );
      setSubmitStatus({
        type: "error",
        message: "Vennligst rett feilene i skjemaet før du sender.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.error ?? "Kunne ikke sende melding");

      setSubmitStatus({
        type: "success",
        message: "Takk for din henvendelse! Vi tar kontakt så snart som mulig.",
      });

      setFormData(contactFormInitialValues);
      setErrors({});
      setTouched({});
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message:
          err instanceof Error
            ? err.message
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

  {
    /*
    
    
      const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "telefon") {
      newValue = value.replace(/[^0-9+\-\s]/g, "");
    }

    if (name === "epost") {
      newValue = value.replace(/[^a-zA-Z0-9@._+\-]/g, "");
    }

    if (name === "navn") {
      newValue = value.replace(/[^a-zA-ZæøåÆØÅ \-']/g, "");
    }

    if (name === "adresse") {
      newValue = value.replace(/[^a-zA-Z0-9æøåÆØÅ ,.\-]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
    // Fjern feil når bruker begynner å skrive
    if (errors[name as keyof KontaktSkjemaData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<KontaktSkjemaData> = {};

    if (!formData.navn.trim()) {
      newErrors.navn = "Navn er påkrevd";
    } else if (!/^[a-zA-ZæøåÆØÅ \-']{2,50}$/.test(formData.navn)) {
      newErrors.navn =
        "Navn kan kun inneholde bokstaver, mellomrom, bindestrek eller apostrof";
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = "Telefon er påkrevd";
    } else if (!/^\+?[0-9][0-9\s-]{7,14}$/.test(formData.telefon)) {
      newErrors.telefon =
        "Telefonnummer må være minst 8 sifre eller starte med +47";
    }

    if (!formData.epost.trim()) {
      newErrors.epost = "E-post er påkrevd";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.epost)) {
      newErrors.epost = "Ugyldig e-postadresse";
    }

    if (!formData.adresse.trim()) {
      newErrors.adresse = "Adresse er påkrevd";
    } else if (!/^[a-zA-Z0-9æøåÆØÅ ,.\-]{5,150}$/.test(formData.adresse)) {
      newErrors.adresse =
        "Adresse må være 5–150 tegn og kan inneholde bokstaver, tall, mellomrom, komma, punktum eller bindestrek";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Her kan du legge til API-kall eller annen logikk
      // if (onSubmit) {
      //   await onSubmit(formData);
      // }

      // Reset form etter vellykket innsending
      setFormData({
        navn: "",
        telefon: "",
        epost: "",
        adresse: "",
        spesielleOnsker: "",
      });

      alert("Takk for din forespørsel! Vi kontakter deg snart.");
    } catch (error) {
      console.error("Feil ved innsending:", error);
      alert("Det oppstod en feil. Prøv igjen senere.");
    } finally {
      setIsSubmitting(false);
    }
  };
    
    */
  }
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
          {/*-----------------------------Honneypot----------------------------------*/}
          <input
            type="text"
            name="company_website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          {/* Start time for timing check */}
          <input
            type="hidden"
            name="startTime"
            value={startTimeRef.current}
            suppressHydrationWarning
          />
          {/*---------------------------------------------------------------*/}

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
