"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import TextSection from "@/components/TextSction";
import CateringPackages from "@/components/CateringPackageCard"

export default function Page() {
    const router = useRouter();

    return (
        <main>
            <HeroSection
                title='Catering pakker'
                subtitle='Ferdig planlagte menyer for alle anledninger - enkelt og deilig'
                buttonText='Kontakt meg'
                onButtonClick={() => router.push("/Bestilling")}
                backgroundImage='https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80'
            />
            <TextSection
                title='Ferdigplanlagte menyer som gjør livet enklere'
                description='Våre catering-pakker er nøye sammensatte menyer som dekker alle behov. Fra intime middager til store feiringer - vi har en pakke som passer perfekt til ditt arrangement. Alle pakker kan tilpasses etter dine ønsker og diettbehov. Hei hei'
            />
            <CateringPackages />

            
        </main>
    );
}
