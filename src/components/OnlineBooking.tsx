"use client";

import React, { useState } from "react";

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
    <div className="wrapper-content">
      <div className="grid h-12 w-full bg-gray-200 transition-all delay-50 duration-150 ease-in-out hover:bg-gray-300 text-gray-600 rounded-lg px-4">
        <select
          className="cursor-pointer focus:outline-none focus:ring-0 focus:border-transparent"
          id="tjenester"
          name="tjenester"
          value={formData.tjenester}
          onChange={(e) => updateFormDate({ tjenester: e.target.value })}
        >
          <option value="">Velg tjeneste</option>
          {services.map((services) => (
            <option className="" key={services.id} value={services.id}>
              {services.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid h-12 w-full bg-gray-200 transition-all delay-50 duration-150 ease-in-out hover:bg-gray-300 text-gray-600 rounded-lg px-4">
        <select
          className="cursor-pointer focus:outline-none focus:ring-0 focus:border-transparent"
          id="tid"
          name="tid"
          value={formData.tid}
          onChange={(e) => updateFormDate({ tid: e.target.value })}
        >
          <option value="">Ønsket tid</option>
          {timeSlots.map((timeSlots) => (
            <option key={timeSlots.id} value={timeSlots.id}>
              {timeSlots.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid h-12 w-full bg-gray-200 transition-all delay-50 duration-150 ease-in-out hover:bg-gray-300 text-gray-600 rounded-lg px-4">
        <select
          className="cursor-pointer focus:outline-none focus:ring-0 focus:border-transparent"
          id="gjester"
          name="gjester"
          value={formData.gjester}
          onChange={(e) => updateFormDate({ gjester: e.target.value })}
        >
          <option value="">Antall gjester</option>
          {guestCounts.map((guestCounts) => (
            <option key={guestCounts.id} value={guestCounts.id}>
              {guestCounts.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default OnlineBooking;
