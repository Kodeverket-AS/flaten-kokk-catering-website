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
      <Historie
  title="Min historie"
  paragraphs={[
    "Jeg har alltid hatt en spesiell forbindelse til mat. Det startet i barndomshjemmet hvor bestemor lærte meg at mat handler om kjærlighet, tradisjon og å samle folk. Den lærdommen har formet hele min karriere.",
    "Etter utdanning ved Norges Kokke- og Stuertskole dro jeg til Europa for å lære fra de beste. I kjøkkenene i Lyon og Milano lærte jeg viktigheten av perfekte teknikker og respekt for råvarene.",
    "I dag kombinerer jeg internasjonal erfaring med norske tradisjoner for å skape unike matopplevelser som forteller en historie og skaper minner."
  ]}
  imageSrc="/Logo.png"
  imageAlt="bilde av kokken"
  bgColor="bg-gray-100"
/>
    </main>
  );
}