"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import Intro from "@/components/Intro";
import Tilbud, { TilbudSection } from "@/components/Tilbud";
import BottomCTA from "@/components/BottomCTA";

export default function Page() {
  const router = useRouter();

  const tilbudSections: TilbudSection[] = [
    {
      title: "Privat kokk på Airbnb",
      description: "En profesjonell kokk kommer til deres Airbnb og lager en uforglemmelig middag for 4 personer",
      icon: "/icons/lucide_chef-hat.svg",
      list: [
        { text: "Lager mat på stedet" },
        { text: "Bruker kjøkkenet på Airbnb" },
        { text: "Tar med alt utstyr" },
        { text: "Rydder opp etterpå" },
      ],
      price: "Fra 650 kr/person",
    },
    {
      title: "Catering levering",
      description: "Ferdiglaget mat levert direkt til deres Airbnb - bare å nyte!",
      icon: "/icons/lucide_home.svg",
      list: [
        { text: "Ferdig tilberedt mat" },
        { text: "Leveres på ønsket tid" },
        { text: "Inkluderer servise" },
        { text: "Minimal opprydding" },
      ],
      price: "Fra 450 kr/person",
    },
    {
      title: "Express matpakker",
      description: "Raskt og enkelt - perfekt for spontane måltider under oppholdet",
      icon: "/icons/lucide_clock-4.svg",
      list: [
        { text: "Bestill samme dag" },
        { text: "2-4 timers leveringstid" },
        { text: "Enkle, deilige retter" },
        { text: "Perfekt for frokost/lunch" },
      ],
      price: "Fra 150 kr/person",
    },
  ];

  return (
    <main>
      <HeroSection
        title="Airbnb Events"
        subtitle="Gjør ditt Airbnb-opphold ekstra spesielt med profesjonell mat og service"
        buttonText="Kontakt meg"
        onButtonClick={() => router.push("/Bestilling")}
        backgroundImage="/bg1.jpg"
      />
      <Intro
        title="Mat og opplevelser for Airbnb-gjester"
        description="Oppover oppholdet på Airbnb med autentiske matopplevelser! Enten dere ønsker en privat kokk som lager mat på stedet, ferdig catering levert til døren, eller en kulturell matopplevelse - vi skaper minne som varer livet ut. Perfekt for feiringer, romantiske kvelder eller bare for å prøve ekte norsk mat."
        buttonText="Bestill kokk i dag"
        buttonLink="/Bestilling"
      />
      <Tilbud 
        title="Våre tjenester for Airbnb"
        sections={tilbudSections}
      />
       <BottomCTA
            title="Klar for å bestille  din Airbnb opplevelse?"
            description="Velg din pakke og betal enkelt med Vipps"
            buttonText="Bestill nå"
            />  
    </main>
  );
}