"use client";

import React, { useState } from "react";

export interface OnlineBookingData {
  tjenester: string;
  dato: string;
  tid: number;
  gjester: number;
}

const DEFAULT_SERVICES = [
  { id: "3-retters", label: "3-retters meny hjemme" },
  { id: "5-retters", label: "5-retters meny hjemme" },
  { id: "catering", label: "Catering til selskap" },
  { id: "firma", label: "Firmaarrangement" },
];

const DEFAULT_TIME_SLOTS: number[] = [
  9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0,
];
const DEFAULT_GUEST_COUNTS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export interface OnlineBookingProps {
  services?: { id: string; label: string; calendlyEventTypeId?: string }[];
  timeSlots?: number[];
  guestCounts?: number[];
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
    tid: 0,
    gjester: 0,
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
      <div className="grid h-12 w-full bg-gray-200 text-gray-600 rounded-lg px-4 focus:outline-none focus:ring-0 focus:border-transparent">
        <select
          className=""
          id="tjenester"
          name="tjenester"
          value={formData.tjenester}
          onChange={(e) => updateFormDate({ tjenester: e.target.value })}
        >
          <option value="">Velg tjeneste</option>
          {services.map((services) => (
            <option key={services.id} value={services.id}>
              {services.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid h-12 w-full bg-gray-200 text-gray-600 rounded-lg px-4 focus:outline-none focus:ring-0 focus:border-transparent">
        <select
          id="tid"
          name="tid"
          value={formData.tid}
          onChange={(e) => updateFormDate({ tid: Number(e.target.value) || 0 })}
        >
          <option value="">Ønsket tid</option>
          {timeSlots.map((time) => (
            <option key={time}>:00</option>
          ))}
        </select>
      </div>

      <div className="grid h-12 w-full bg-gray-200 text-gray-600 rounded-lg px-4 focus:outline-none focus:ring-0 focus:border-transparent">
        <select
          id="gjester"
          name="gjester"
          value={formData.gjester}
          onChange={(e) =>
            updateFormDate({ gjester: Number(e.target.value || 0) })
          }
        >
          <option value="">Antall gjester</option>
          {guestCounts.map((guestCounts) => (
            <option key={guestCounts}>00</option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default OnlineBooking;
