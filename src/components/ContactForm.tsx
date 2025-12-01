"use client";

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

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(contactFormInitialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof ContactFormData]) {
      validateField(name as keyof ContactFormData, value);
    }
  };

const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

      if (!response.ok) throw new Error(data.error ?? "Kunne ikke sende melding");

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

  interface FieldConfig {
    name: keyof ContactFormData;
    label: string;
    icon?: typeof User;
    type?: "text" | "email" | "date" | "number" | "textarea";
    placeholder?: string;
    required?: boolean;
    min?: string;
    rows?: number;
    options?: { value: string; label: string }[];
  }

  const fields: FieldConfig[] = [
    {
      name: "name",
      label: "Navn",
      icon: User,
      placeholder: "Ditt fulle navn",
      required: true,
    },
    {
      name: "email",
      label: "E-post",
      icon: Mail,
      type: "email",
      placeholder: "din@epost.no",
      required: true,
    },
    {
      name: "eventType",
      label: "Type arrangement",
      icon: Calendar,
      options: eventTypeOptions,
    },
    {
      name: "eventDate",
      label: "Dato for arrangement",
      icon: Calendar,
      type: "date",
    },
    {
      name: "numberOfGuests",
      label: "Antall gjester",
      icon: User,
      type: "number",
      placeholder: "Antall personer",
      min: "1",
    },
    {
      name: "message",
      label: "Melding",
      icon: MessageSquare,
      type: "textarea",
      rows: 5,
      placeholder: "Fortell oss om ditt arrangement, spesielle ønsker eller spørsmål...",
      required: true,
    },
  ];

  const renderField = (field: FieldConfig) => (
    <Input
      key={field.name}
      label={field.label}
      icon={field.icon}
      name={field.name}
      value={formData[field.name] as string}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors[field.name]}
      type={field.type}
      placeholder={field.placeholder}
      required={field.required}
      min={field.min}
      rows={field.rows}
      options={field.options}
      disabled={isDisabled}
    />
  );

  return (
    <div className="wrapper-bg-stone">
      <div className="wrapper-content">
        <section className="w-full">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h2>Kontakt oss</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Fyll ut skjemaet nedenfor, så tar vi kontakt med deg så snart som mulig. 
                Du kan også ringe eller sende oss en e-post direkte.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-4xl flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fields.filter((f) => ["name", "email"].includes(f.name)).map(renderField)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
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
                  {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                </div>

                {fields.filter((f) => f.name === "eventType").map(renderField)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fields.filter((f) => ["eventDate", "numberOfGuests"].includes(f.name)).map(renderField)}
              </div>

              {fields.filter((f) => f.name === "message").map(renderField)}

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
                  <label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Jeg gir samtykke til at min kontaktinformasjon blir lagret for å kunne kontakte meg. Du kan trekke dette samtykket tilbake når som helst.
                  </label>
                </div>
                <Link href="/personvern" className="text-sm text-amber-600 hover:text-amber-700 underline ml-8">
                  Les vår personvernerklæring
                </Link>
                {errors.consent && <p className="text-sm text-red-600 ml-8">{errors.consent}</p>}
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
                <Button type="submit" variant="primary" className="min-w-[200px]" ariaLabel="Send melding">
                  {isSubmitting ? "Sender..." : "Send melding"}
                </Button>
              </div>
            </form>

            
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
