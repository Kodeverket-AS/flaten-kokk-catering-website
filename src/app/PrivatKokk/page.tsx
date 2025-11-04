"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import TextSection from "@/components/TextSction";
import Menyer from "@/components/Menyer";
import BottomCTA from "@/components/BottomCTA";
import Galleri from "@/components/Galleri";
import Tilbud, { TilbudSection } from "@/components/Tilbud";

export default function Page() {
  const router = useRouter();
  
  const tilbudSections: TilbudSection[] = [
    {
      title: "Bryllup",
      description: "Gjør din store dag enda mer spesiell med en personlig kokk som skaper magiske minner rundt bordet.",
      icon: "/icons/lucide_heart.svg",
      list: [
        { text: "Tilpasset meny" },
        { text: "Profesjonell servering" },
        { text: "Komplett utstyr" },
        { text: "Dekorasjon av mat" },
      ],
    },
    {
      title: "Konfirmasjon",
      description: "Feir denne viktige milepælen med en festmåltid som passer for hele familien.",
      icon: "/icons/lucide_award.svg",
      list: [
        { text: "Familievennlige menyer" },
        { text: "Fleksible porsjoner" },
        { text: "Allergitilpasning" },
        { text: "Tradisjonelle retter" },
      ],
    },
    {
      title: "Jubileum & Bursdager",
      description: "Markér spesielle anledninger med en kulinarisk opplevelse tilpasset deres ønsker.",
      icon: "/icons/lucide_users.svg",
      list: [
        { text: "Personlig tilpasning" },
        { text: "Flere kurser" },
        { text: "Vinparing" },
        { text: "Intim atmosfære" },
      ],
    },
  ];
  const images = [
    {
      src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      alt: "Gourmet pasta dish",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      alt: "Seafood platter",
    },
    {
      src: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=800&q=80",
      alt: "Dessert with berries",
    },
    {
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      alt: "Salad bowl with avocado",
    },
    {
      src: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      alt: "Chef plating a dish",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      alt: "Elegant catering setup",
    },
  ];

  return (
    <main>
      <HeroSection
        title="Privat kokk til ditt arrangement"
        subtitle="Profesjonell matlagning på ditt sted - for uforglemmelige opplevelser"
        buttonText="Kontakt meg"
        onButtonClick={() => router.push("/Bestilling")}
        backgroundImage="/bg1.jpg"
      />
      <TextSection
        title="Din personlige kokk for spesielle anledninger"
        description="Få en profesjonell kokk hjem til deg eller på ditt valgte sted. Jeg tar med alt utstyr, kjøper inn de fineste råvarene og tilbereder alt på stedet. Du kan slappe av og nyte selskapet mens jeg sørger for en kulinarisk opplevelse dine gjester aldri vil glemme."      
      />
      <Tilbud sections={tilbudSections} />
      <Menyer
        title="Eksampel på menyer" 
        sections={[
          {
            imageUrl: "/menyer.jpg",
            title: "Elegant Bryllupsmeny",
            description: "Forrett: Røkt laks med dillkrem og brioche Hovedrett: Helstekt indrefilet med trøffel og rotgrønnsaker Dessert: Pasjonsfrukt panna cotta med bringebær",
            pris: " Fra 850 kr per person",
            buttonText: "Bestill denne menyen",
          },
          {
            imageUrl: "/menyer.jpg",
            title: "Konfirmasjonsmeny",
            description: "Forrett: Kremet fiskesuppe med reker Hovedrett: Lammekjøtt med rosmarinstuing og poteter Dessert: Tradisjonell bløtkake med jordbær",
            pris: " Fra 550 kr per person",
            buttonText: "Bestill denne menyen",
          },
          {
            imageUrl: "/menyer.jpg",
            title: "Jubileumsmeny",
            description: "Forrett: Østers med champagnesaus Hovedrett: Entrecôte med bearnaise og grillede grønnsaker Dessert: Sjokolademousse med gull og bær",
            pris: " Fra 750 kr per person",
            buttonText: "Bestill denne menyen",
          }
        ]}
      />
        <Galleri title="Smakebiter fra tidligere oppdrag" images={images} />
        <BottomCTA 
          title="Klar for å bestille din private kokk?"
          description="Kontakt meg for en uforpliktende samtale om ditt arrangement"
        />
        
       </main>
  );
}
