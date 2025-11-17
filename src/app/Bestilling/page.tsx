"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import KontaktCard from "@/components/Kontaktinfo-Card's"

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex flex-col sm:flex-row">
      <HeroSection
        title="Bestilling og kontakt"
        subtitle="Book din matopplevelse eller ta kontakt for personlig rådgivning"
        buttonText="Kontakt meg"
        onButtonClick={() => router.push("/Bestilling")}
        backgroundImage="/bg1.jpg"
      />
      <KontaktCard 
       phone="+47 123 45 678"
       phoneInfo="" 
       email= ""
       mailInfo= ""
      />
    </main>
  );
}