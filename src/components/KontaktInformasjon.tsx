"use client";

import React, { useRef, useState } from "react";

export interface KontaktSkjemaData {
  navn: string;
  telefon: string;
  epost: string;
  adresse: string;
  spesielleOnsker: string;
}

const KontaktSkjema: React.FC = () => {
  const [formData, setFormData] = useState<KontaktSkjemaData>({
    navn: "",
    telefon: "",
    epost: "",
    adresse: "",
    spesielleOnsker: "",
  });

  const startTimeRef = useRef(Date.now());
  const [errors, setErrors] = useState<Partial<KontaktSkjemaData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <div className="bg-stone-50 rounded-2xl border border-gray-200 w-full">
      <form
        className="w-full h-full flex flex-col gap-4"
        onSubmit={handleSubmit}
        aria-labelledby="form-label"
      >
        <div className="h-full w-full px-10">
          <div className="h-px w-full bg-gray-400"></div>
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

          <h4 id="form-label" className="flex text-left pl-10 py-10">
            Kontaktinformasjon
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid gap-1">
              <label
                htmlFor="navn"
                className="text-neutral-900 text-sm font-medium"
              >
                Fullt navn<span> *</span>
              </label>
              <input
                id="navn"
                name="navn"
                value={formData.navn}
                onChange={handleInputChange}
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                placeholder="Ditt navn"
                className="h-12 w-full bg-gray-200 text-gray-600 text-start rounded-lg px-4 py-3 focus:outline-none focus:ring-0 focus:border-transparent"
              />
              {errors.navn && (
                <p className="text-red-500 text-xs mt-1">{errors.navn}</p>
              )}
            </div>

            <div className="grid gap-1">
              <label
                htmlFor="telefon"
                className="text-neutral-900 text-sm font-medium"
              >
                Telefon<span> *</span>
              </label>
              <input
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleInputChange}
                type="tel"
                inputMode="tel"
                pattern="^[0-9]{8}$"
                maxLength={14}
                minLength={8}
                autoComplete="tel"
                required
                aria-required="true"
                placeholder="Telefonnummer"
                className="h-12 w-full bg-gray-200 text-gray-600 text-start rounded-lg px-4 py-3 focus:outline-none focus:ring-0 focus:border-transparent"
              />
              {errors.telefon && (
                <p className="text-red-500 text-xs mt-1">{errors.telefon}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-7">
            <div className="grid gap-1">
              <label
                htmlFor="epost"
                className="text-neutral-900 text-sm font-medium"
              >
                E-post<span> *</span>
              </label>
              <input
                id="epost"
                name="epost"
                value={formData.epost}
                onChange={handleInputChange}
                autoComplete="email"
                type="email"
                required
                aria-required="true"
                placeholder="din@epost.no"
                className="h-12 w-full bg-gray-200 text-gray-600 text-start rounded-lg px-4 py-3 focus:outline-none focus:ring-0 focus:border-transparent"
              />
              {errors.epost && (
                <p className="text-red-500 text-xs mt-1">{errors.epost}</p>
              )}
            </div>

            <div className="grid gap-1">
              <label
                htmlFor="adresse"
                className="text-neutral-900 text-sm font-medium"
              >
                Adresse for arrangement
              </label>
              <input
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                type="text"
                autoComplete="street-address"
                required
                aria-required="true"
                placeholder="Adresse hvor maten skal serveres"
                className="h-12 w-full bg-gray-200 text-gray-600 text-start rounded-lg px-4 py-3 focus:outline-none focus:ring-0 focus:border-transparent"
              />
              {errors.adresse && (
                <p className="text-red-500 text-xs mt-1">{errors.adresse}</p>
              )}
            </div>
          </div>
          <div className="grid sm:col-span-2 gap-2 pt-7">
            <label
              htmlFor="spesielleOnsker"
              className="text-neutral-900 text-sm font-medium"
            >
              Spesielle ønsker
            </label>
            <textarea
              id="spesielleOnsker"
              name="spesielleOnsker"
              value={formData.spesielleOnsker}
              onChange={handleInputChange}
              placeholder="Fortell oss om spesielle ønsker, allergier, eller annen informasjon..."
              rows={4}
              className=" h-24 w-full bg-gray-200 text-gray-600 text-start rounded-lg px-4 py-3 focus:outline-none focus:ring-0 focus:border-transparent"
            ></textarea>
          </div>

          <div className="flex justify-end py-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex justify-center items-center h-12 w-full bg-amber-500 hover:bg-amber-700 rounded-lg px-4 focus:outline-none focus:ring-0 focus:border-transparent"
            >
              <span className="text-stone-50 text-sm ">Send Bestilling</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default KontaktSkjema;
