"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import Historie from "@/components/TextBilde";

export default function Page() {
  const router = useRouter();

  return (
    <main>
      <HeroSection
        title="Møt kokken"
        subtitle="Lidenskap for mat, dedikert til å skape uforglemmelige opplevelser"
        buttonText="Kontakt meg"
        onButtonClick={() => router.push("/Bestilling")}
        backgroundImage="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80"
      />
      <Historie />
    </main>
  );
}