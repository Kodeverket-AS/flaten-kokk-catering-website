"use client";

import React from "react";
import Image from "next/image";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import TextSection from "@/components/TextSection";
import Pacages from "@/components/CateringPackageCard";
import FAQ, { FAQItem } from "@/components/FAQs";
import EnkelBestille from "@/components/EnkeltÅBestille";

const generalFAQ: FAQItem[] = [
  {
    question: "Kan dere lage mat i vår Airbnb?",
    answer:
      "ja, kokken kommer til stedet med alt som trengs for å lage maten hos dere. Du trenger bare å ha kjøkken tilgjengelig.",
  },
  { question: "Hva hvist Airbnb-et vårt ikke har fullt kjøkken?", answer: "" },
  { question: "Må vi vaske etterpå?", answer: "" },
  { question: "Tilbyr dere frokost eller lunsh også?", answer: "" },
];

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
      <Pacages />
      <EnkelBestille
        title="Enkelt å Bestille"
        sections={[
          {
            id: "1",
            title: "Velg tjeneste",
            description: "Finn det som passer for anledningen.",
            number: 1,
          },
          {
            id: "2",
            title: "Valg dato",
            description: "Vi tilpasser oss program.",
            number: 2,
          },
          {
            id: "3",
            title: "Bekreft og betal",
            description: "Du får bekreftelse med alle detaljer umiddelbart.",
            number: 3,
          },
        ]}
      />
      <FAQ title="FAQs" items={generalFAQ} />
      <TextSection
        title="Mat og opplevelser for Airbnb-gjester"
        description="Oppover oppholdet på Airbnb med autentiske matopplevelser! Enten dere ønsker en privat kokk som lager mat på stedet, ferdig catering levert til døren, eller en kulturell matopplevelse - vi skaper minne som varer livet ut. Perfekt for feiringer, romantiske kvelder eller bare for å prøve ekte norsk mat."
      />
    </main>
  );
}
