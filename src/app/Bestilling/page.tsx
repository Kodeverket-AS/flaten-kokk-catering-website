"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import KontaktCard from "@/components/Kontaktinfo-Card's";

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex justify-center items-center">
      <HeroSection
        title="Bestilling og kontakt"
        subtitle="Book din matopplevelse eller ta kontakt for personlig rådgivning"
        buttonText="Kontakt meg"
        onButtonClick={() => router.push("/Bestilling")}
        backgroundImage="/bg1.jpg"
      />
      <div className="flex flex-col sm:flex sm:flex-row justify-center items-center gap-4 pb-16 px-10 lg:px-20 max-w-7xl">
        <div className="">
          {/* Her legger du inn kalender/booking komponenten */}
          <div className=" w-full bg-blue-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Velg dato og tid</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              sapiente, vel odit perspiciatis saepe cum culpa autem dicta
              mollitia soluta, laborum architecto ea. Ipsam quos officia rerum
              doloribus, aliquid voluptates!
            </p>
          </div>
        </div>

        <div className="kontakt-card">
          <KontaktCard
            phone="+47 123 45 678"
            phoneInfo="Hverdager 09:00-17:00"
            email="post@flatenkokk.no"
            mailInfo="Svarer innen 24 timer"
            varsel="Minimum 7 dager varsel"
            varselInfo="For store arrangementer"
            personer="Minimum 6 personer"
            personerInfo="For private kokkoppdrag"
            forskudd="50% forskudd"
            forskuddInfo="Rest betales på dagen"
          />
        </div>
      </div>
    </main>
  );
}
