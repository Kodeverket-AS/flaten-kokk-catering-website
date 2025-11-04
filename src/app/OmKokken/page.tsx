"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import TextBildeHistorie from "@/components/TextBildeHistorie";
import BottomCTA from "@/components/BottomCTA";

import UansettAnledning from "@/components/UansettAnledning";
import Verdier from "@/components/Verdier";
import Filozofi from "@/components/Filozofi";

export default function Page() {
const router = useRouter();

return (
<main>
  <HeroSection
    title="Møt kokken"
    subtitle="Lidenskap for mat, dedikert til å skape uforglemmelige opplevelser"
    buttonText="Kontakt meg"
    onButtonClick={() => router.push("/Bestilling")}
    backgroundImage="/bg1.jpg"
  />
  <TextBildeHistorie
    title="Min historie"
    paragraphs={[
      "Jeg har alltid hatt en spesiell forbindelse til mat. Det startet i barndomshjemmet hvor bestemor lærte meg at mat handler om kjærlighet, tradisjon og å samle folk. Den lærdommen har formet hele min karriere.",
      "Etter utdanning ved Norges Kokke- og Stuertskole dro jeg til Europa for å lære fra de beste. I kjøkkenene i Lyon og Milano lærte jeg viktigheten av perfekte teknikker og respekt for råvarene.",
      "I dag kombinerer jeg internasjonal erfaring med norske tradisjoner for å skape unike matopplevelser som forteller en historie og skaper minner."
    ]}
    imageSrc="/kokk.png"
    imageAlt="bilde av kokken"
  />
  

  <UansettAnledning
    sections={[
      {
        title: "15+ års erfaring",
        description: "Fra klassiske norske kjøkken til internasjonale restauranter",
        icon: "/icons/lucide_award.svg",
      },
      {
        title: "Internasjonal erfaring",
        description: "Arbeidet i kjøkken i Frankrike, Italia og Norge",
        icon: "/icons/hugeicons_internet.svg",
      },
      {
        title: "500+ fornøyde kunder",
        description: "Fra intime middager til store bryllup og firmaarrangementer",
        icon: "/icons/lucide_users.svg",
      },
      {
        title: "Lidenskap for råvarer",
        description: "Samarbeider med lokale produsenter for de beste ingrediensene",        
        icon: "/icons/lucide_heart.svg",
      },
    ]}  
  />
 <Filozofi /> 
 
  <Verdier
  items={[
    { year: "2008", 
      title: "Utdanning", 
      description: "Kulinarsk utdanning ved Norges Kokke- og Stuerskole" 
    },
    { year: "2010-2014", 
      title: "Internasjonal erfaring",
      description: "Arbeidet på Michelin-stjernede restauranter i Frankrike og Italia" 
    },
    { year: "2015", 
      title: "Tilbake til Norge", 
      description: "Sous chef på flere prisbelønte restauranter i Oslo" 
    },
    { year: "2019", 
      title: "Egen virksomhet", 
      description: "Startet Flaten Kokk og Catering for å skape unike matopplevelser" 
    },
    { year: "2023", 
      title: "I dag", 
      description: "Over 500 vellykkede arrangementer og voksende kundebase" 
    },
  ]}
/>
 
  <BottomCTA 
    title="La oss skape noe spesielt sammen"
    description="Ta kontakt for en uforpliktende samtale om ditt arrangement"
  />
</main>
);
}