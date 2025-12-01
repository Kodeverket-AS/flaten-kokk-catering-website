"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
export interface OnlineBookingData {
  tjenester: string;
  dato: string;
  tid: string;
  gjester: string;
}

const DEFAULT_SERVICES = [
  { id: "3-retters", label: "3-retters meny hjemme" },
  { id: "5-retters", label: "5-retters meny hjemme" },
  { id: "catering", label: "Catering til selskap" },
  { id: "firma", label: "Firmaarrangement" },
];

const DEFAULT_TIME_SLOTS = [
  { id: "09:00", label: "09:00" },
  { id: "10:00", label: "10:00" },
  { id: "11:00", label: "11:00" },
  { id: "12:00", label: "12:00" },
];
const DEFAULT_GUEST_COUNTS = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4", label: "4" },
  { id: "5", label: "5" },
  { id: "6", label: "6" },
  { id: "7", label: "7" },
];

export interface OnlineBookingProps {
  services?: { id: string; label: string; calendlyEventTypeId?: string }[];
  timeSlots?: { id: string; label: string }[];
  guestCounts?: { id: string; label: string }[];
  onBookingChange?: (data: OnlineBookingData) => void;
}

interface BookingSelectProps {
  label: string;
  name: string;
  value: string;
  options: { id: string; label: string }[];
  onChange: (value: string) => void;
}

const BookingSelect: React.FC<BookingSelectProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => (
  <div className="grid h-12 w-full">
    <label htmlFor="navn" className="text-neutral-900 text-sm font-medium pb-1">
      {name}
    </label>

    <div className="grid h-12 w-full bg-gray-200 transition-all delay-50 duration-150 ease-in-out hover:bg-gray-300 text-gray-600 rounded-lg px-4">
      <select
        className="cursor-pointer focus:outline-none focus:ring-0 focus:border-transparent"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option className="" key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const OnlineBooking: React.FC<OnlineBookingProps> = ({
  services = DEFAULT_SERVICES,
  timeSlots = DEFAULT_TIME_SLOTS,
  guestCounts = DEFAULT_GUEST_COUNTS,
  onBookingChange,
}) => {
  const [formData, setFormData] = useState<OnlineBookingData>({
    tjenester: "",
    dato: "",
    tid: "",
    gjester: "",
  });

  const updateFormDate = (partial: Partial<OnlineBookingData>) => {
    setFormData((prev) => {
      const updated = { ...prev, ...partial };
      if (onBookingChange) {
        onBookingChange(updated);
      }
      return updated;
    });
  };
  return (
    <div className="wrapper-content ">
      <div className="flex items-center gap-3">
        <Calendar size={30} className="" />
        <h3 className="text-2xl font-semibold">Online booking</h3>
      </div>
      <BookingSelect
        label="Velg tjeneste"
        name="Tjenester"
        value={formData.tjenester}
        options={services}
        onChange={(value) => updateFormDate({ tjenester: value })}
      />

      <BookingSelect
        label="Ønsket tid"
        name="Tid"
        value={formData.tid}
        options={timeSlots}
        onChange={(value) => updateFormDate({ tid: value })}
      />

      <BookingSelect
        label="Antall gjester"
        name="Gjester"
        value={formData.gjester}
        options={guestCounts}
        onChange={(value) => updateFormDate({ gjester: value })}
      />
    </div>
  );
};
export default OnlineBooking;
