"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import Intro from "@/components/Intro";
import Tilbud, { TilbudSection } from "@/components/Tilbud";
import BottomCTA from "@/components/BottomCTA";
import Packages, { PackageItem } from "@/components/Packages";
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

const packagesData: PackageItem[] = [
  {
    id: 1,
    category: "Opplevelser",
    badgeLabel: "Opplevelse",
    title: "Airbnb Chef Experience",
    description:
      "Privat kokk som lager en skreddersydd meny direkte i Airbnb-leiligheten deres.",
    guestsRange: "4-12 personer",
    price: "Fra 890 kr/person",
    menuType: ["Vegetar", "Lokale råvarer"],
    included: [
      "Velkomstdrink og småretter",
      "Tre-retters meny",
      "Opprydding etter service",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 2,
    category: "Levering",
    badgeLabel: "Levering",
    title: "Airbnb Catering Levering",
    description: "Ferdig tilberedte retter levert til døren – klare til servering.",
    guestsRange: "6-20 personer",
    price: "Fra 490 kr/person",
    menuType: ["Vegetar", "Glutenfri"],
    included: [
      "Buffet med varme og kalde retter",
      "Salater og tilbehør",
      "Dessertbord",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 3,
    category: "Frokost",
    badgeLabel: "Frokost",
    title: "Airbnb Frokostpakke",
    description:
      "Perfekt start på dagen med ferske bakverk, lokal kaffe og juice.",
    guestsRange: "2-10 personer",
    price: "Fra 295 kr/person",
    menuType: ["Vegetar", "Barnemeny"],
    included: [
      "Bakverk og brød",
      "Pålegg og frukt",
      "Juice og kaffe",
    ],
    imageSrc: "/package.jpg",
  },
];


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
      <Packages items={packagesData} title="Airbnb pakker" />
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
