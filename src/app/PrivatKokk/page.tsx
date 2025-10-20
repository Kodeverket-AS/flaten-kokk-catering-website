"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import TextSection from "@/components/TextSction";

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
    </main>
  );
}