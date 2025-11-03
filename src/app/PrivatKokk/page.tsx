"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import TextSection from "@/components/TextSection";
import H2BildeText from "@/components/H2BildeText";
import BottomCTA from "@/components/BottomCTA";
import ImageGalleri from "@/components/Galleri";

export default function Page() {
  const router = useRouter();
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
        backgroundImage="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80"
      />
      <TextSection
        title="Din personlige kokk for spesielle anledninger"
        description="Få en profesjonell kokk hjem til deg eller på ditt valgte sted. Jeg tar med alt utstyr, kjøper inn de fineste råvarene og tilbereder alt på stedet. Du kan slappe av og nyte selskapet mens jeg sørger for en kulinarisk opplevelse dine gjester aldri vil glemme."
      />
      <H2BildeText
        heading="Populære menyer"
        sections={[
          {
            title: "Elegant Bryllupsmeny",
            description:
              "Forrett: Røkt laks med dillkrem og brioche Hovedrett: Helstekt indrefilet med trøffel og rotgrønnsaker Dessert: Pasjonsfrukt panna cotta med bringebær",
            imageUrl:
              "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Konfirmasjonsmeny",
            description:
              "Forrett: Kremet fiskesuppe med reker Hovedrett: Lammekjøtt med rosmarinstuing og poteter Dessert: Tradisjonell bløtkake med jordbær",
            imageUrl:
              "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Jubileumsmeny",
            description:
              "Forrett: Østers med champagnesaus Hovedrett: Entrecôte med bearnaise og grillede grønnsaker Dessert: Sjokolademousse med gull og bær",
            imageUrl:
              "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
          },
        ]}
      />
      <ImageGalleri title="Galleri" images={images} />
      <BottomCTA
        title="Klar for å bestille din private kokk?"
        description="Kontakt meg for en uforpliktende samtale om ditt arrangement"
      />
    </main>
  );
}
