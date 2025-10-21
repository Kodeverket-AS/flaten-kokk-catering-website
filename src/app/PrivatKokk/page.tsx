"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import TextSection from "@/components/TextSction";
import H2BildeText from "@/components/H2BildeText";
import Matopplevelse from "@/components/Matopplevelse";

export default function Page() {
  const router = useRouter();

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
              description: "Forrett: Røkt laks med dillkrem og brioche Hovedrett: Helstekt indrefilet med trøffel og rotgrønnsaker Dessert: Pasjonsfrukt panna cotta med bringebær",
              imageUrl: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Konfirmasjonsmeny",
              description: "Forrett: Kremet fiskesuppe med reker Hovedrett: Lammekjøtt med rosmarinstuing og poteter Dessert: Tradisjonell bløtkake med jordbær",
              imageUrl: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Jubileumsmeny",
              description: "Forrett: Østers med champagnesaus Hovedrett: Entrecôte med bearnaise og grillede grønnsaker Dessert: Sjokolademousse med gull og bær",
              imageUrl: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
            }
          ]}
        />
      <Matopplevelse 
      title="Klar for å bestille din private kokk?"
      description="Kontakt meg for en uforpliktende samtale om ditt arrangement"
       />
    </main>
  );
}
