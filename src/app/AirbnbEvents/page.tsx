"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <main>
      <HeroSection
        title="Airbnb Events"
        subtitle="Gjør ditt Airbnb-opphold ekstra spesielt med profesjonell mat og service"
        buttonText="Kontakt meg"
        onButtonClick={() => router.push("/Bestilling")}
        backgroundImage="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80"
      />
    </main>
  );
}