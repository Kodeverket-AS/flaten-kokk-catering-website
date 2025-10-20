"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import TextBilde from "@/components/TextBilde";
import Matopplevelse from "@/components/Matopplevelse";
import TextMedBoxU from "@/components/TextMedBoxU";
import { ChefHat, Package, Home } from "lucide-react";
import Timeline from "@/components/Verdier";

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
  <TextBilde
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

  <TextMedBoxU 
  title="Tilleggsalternativer"
  sections={[
        {
          title: "15+ års erfaring",
          description: "Fra klassiske norske kjøkken til internasjonale restauranter",
          icon: <ChefHat className="w-10 h-10 text-black mx-auto mb-4" />,
        },
        {
          title: "Internasjonal erfaring",
          description: "Arbeidet i kjøkken i Frankrike, Italia og Norge",
          icon: <Package className="w-10 h-10 text-black mx-auto mb-4" />,
        },
        {
          title: "500+ fornøyde kunder",
          description: "Fra intime middager til store bryllup og firmaarrangementer",
          icon: <Home className="w-10 h-10 text-black mx-auto mb-4" />,
        },
        {
          title: "Lidenskap for råvarer",
          description: "Samarbeider med lokale produsenter for de beste ingrediensene",        
          icon: <Home className="w-10 h-10 text-black mx-auto mb-4" />,
        },
      ]}  
  />

  <Timeline
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
  <TextBilde
    title="Kvalitet først"
    paragraphs={[
      "Jeg bruker kun de beste råvarene fra utvalgte leverandører. Kvalitet kommer alltid foran kvantitet."]}
    imageSrc="/Logo.png"
    imageAlt="bilde av kokken"
    bgColor="bg-gray-100"
  />
  <TextBilde
    title="Personlig tilpasning"
    paragraphs={["Jeg bruker kun de beste råvarene fra utvalgte leverandører. Kvalitet kommer alltid foran kvantitet."]}
    imageSrc="/Logo.png"
    imageAlt="bilde av kokken"
    reverse = {true}
    bgColor="bg-gray-100"
  />
  <TextBilde
    title="Opplevelse og service"
    paragraphs={[
      "Maten er bare en del av opplevelsen. Jeg fokuserer på hele kundens reise fra første kontakt til siste bitt."
    ]}
    imageSrc="/Logo.png"
    imageAlt="bilde av kokken"
    bgColor="bg-gray-100"
  />
  <Matopplevelse 
    title="La oss skape noe spesielt sammen"
    description="Ta kontakt for en uforpliktende samtale om ditt arrangement"
    aria-label="Se tilgjengelige datoer"
  />
  
</main>
);
}