import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Navn må være minst 2 tegn")
    .max(100, "Navn kan ikke være lengre enn 100 tegn")
    .regex(/^[a-zA-ZæøåÆØÅ\s-]+$/, "Navn kan bare inneholde bokstaver, bindestreker og mellomrom"),
  email: z
    .string()
    .min(1, "E-post er påkrevd")
    .email("Ugyldig e-postadresse"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\+?[\d\s\-\(\)]+$/.test(val),
      "Ugyldig telefonnummer"
    ),
  eventType: z
    .enum([
      "privat-kokk",
      "catering",
      "airbnb-event",
      "bryllup",
      "konfirmasjon",
      "jubileum",
      "annet",
    ] as const)
    .optional(),
  eventDate: z
    .string()
    .optional()
    .refine(
      (val) => !val || !isNaN(Date.parse(val)),
      "Ugyldig dato"
    ),
  numberOfGuests: z
    .string()
    .optional()
    .refine(
      (val) => !val || (!isNaN(Number(val)) && Number(val) > 0),
      "Antall gjester må være et positivt tall"
    ),
  message: z
    .string()
    .min(10, "Melding må være minst 10 tegn")
    .max(2000, "Melding kan ikke være lengre enn 2000 tegn"),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Du må gi samtykke til lagring av data for å sende skjemaet",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const contactFormInitialValues: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  eventType: undefined,
  eventDate: "",
  numberOfGuests: "",
  message: "",
  consent: false,
};



export function validateContactFormField(
  field: keyof ContactFormData,
  value: unknown
): { field: string; error?: string } | null {
  try {
    const fieldSchema = contactFormSchema.shape[field];
    if (fieldSchema) {
      fieldSchema.parse(value);
    }
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        field,
        error: error.issues[0]?.message,
      };
    }
    return null;
  }
}

