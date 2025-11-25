"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import KontaktInfoCard from "@/components/KontaktInfoCard";
import KontaktSkjema from "@/components/KontaktInformasjon";

export default function Page() {
  const router = useRouter();

  return (
    <main>
      <HeroSection
        title="Bestilling og kontakt"
        subtitle="Book din matopplevelse eller ta kontakt for personlig rådgivning"
        buttonText="Kontakt meg"
        onButtonClick={() => router.push("/Bestilling")}
        backgroundImage="/bg1.jpg"
      />
      <div className=" wrapper-content">
        <div className="w-full  mx-auto rounded-xl gap-4 flex flex-col md:flex-row pb-16 p-8">
          <div className="flex-1">
            <KontaktSkjema
              title="Bestill catering"
              submitButtonText="Send bestilling"
              onSubmit={async (data) => {
                console.log("Skjema data:", data);
                // Her kan du legge til API-kall til Sanity eller annen backend
              }}
            />
          </div>

          <div className="kontakt-card shrink-0 mx-auto">
            <KontaktInfoCard
              phone="+47 123 45 678"
              phoneInfo="Hverdager 09:00-17:00"
              email="post@flatenkokk.no"
              mailInfo="Svarer innen 24 timer"
              location="Serverer hele Østlandet"
              locationInfo="Reisekostnader beregnes"
              varsel="Minimum 7 dager varsel"
              varselInfo="For store arrangementer"
              personer="Minimum 6 personer"
              personerInfo="For private kokkoppdrag"
              forskudd="50% forskudd"
              forskuddInfo="Rest betales på dagen"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
