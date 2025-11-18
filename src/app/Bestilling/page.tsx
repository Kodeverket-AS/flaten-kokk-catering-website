"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import KontaktCard from "@/components/Kontaktinfo-Card's";

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
        phoneInfo="Hverdager 09:00-17:00"

        email="post@flatenkokk.no"
        mailInfo="Svarer innen 24 timer"

        varsel="Minimum 7 dager varsel"
        varselInfo="For store arrangementer"

        personer="Minimum 6 personer"
        personerInfo="For private kokkoppdrag"

        forskudd="50% forskudd"
        forskuddInfo="Rest betales på dagen"
      />
    </main>
  );
}
