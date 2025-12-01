"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import Input from "@/components/ui/Input";

export interface OnlineBookingData {
  tjenester: string;
  dato: string;
  tid: string;
  gjester: string;
}

interface ServiceOption {
  value: string;
  label: string;
  calendlyEventTypeId?: string;
}

export interface OnlineBookingProps {
  services?: ServiceOption[];
  onBookingChange?: (data: OnlineBookingData) => void;
}

const DEFAULT_SERVICES: ServiceOption[] = [
  { value: "3-retters", label: "3-retters meny hjemme" },
  { value: "5-retters", label: "5-retters meny hjemme" },
  { value: "catering", label: "Catering til selskap" },
  { value: "firma", label: "Firmaarrangement" },
];

interface FieldConfig {
  label: string;
  name: keyof OnlineBookingData;
  type?: "date" | "time" | "number";
  placeholder?: string;
  min?: string;
  options?: { value: string; label: string }[];
}

const OnlineBooking: React.FC<OnlineBookingProps> = ({
  services = DEFAULT_SERVICES,
  onBookingChange,
}) => {
  const [formData, setFormData] = useState<OnlineBookingData>({
    tjenester: "",
    dato: "",
    tid: "",
    gjester: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      onBookingChange?.(updated);
      return updated;
    });
  };

  const fields: FieldConfig[] = [
    {
      label: "Tjenester",
      name: "tjenester",
      options: [{ value: "", label: "Velg tjeneste" }, ...services],
    },
    { label: "Dato", name: "dato", type: "date" as const },
    { label: "Tid", name: "tid", type: "time" as const },
    {
      label: "Gjester",
      name: "gjester",
      type: "number" as const,
      placeholder: "Antall gjester",
      min: "1",
    },
  ];

  return (
    <div className="wrapper-content ">
      <div className="flex items-baseline gap-2 px-6">
        <Calendar size={24} />
        <h3 className="m-0">Online booking</h3>
      </div>

      <div className="flex flex-col gap-6 px-6">
        {fields.map((field) => (
          <Input
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            value={formData[field.name as keyof OnlineBookingData]}
            onChange={handleChange}
            options={"options" in field ? field.options : undefined}
            placeholder={field.placeholder}
            min={field.min}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlineBooking;
