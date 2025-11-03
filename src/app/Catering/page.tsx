"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import TextSection from "@/components/TextSction";
import CateringPackages from "@/components/CateringPackageCard"
import BottomCTA from "@/components/BottomCTA";
import TextMedBoxU from "@/components/TextMedBoxU";

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
            
            <TextMedBoxU 
            title="Tilleggsalternativer"
            sections={[
            {
            title: "Ekstra rette",
            description: "Legg til flere retter eller spesialiteter",
            icon: <img src="/icons/lucide_award.svg" alt="Award icon" />,
            },
            {
            title: "Spesialtilpasning",
            description: "Tilpass menyen etter dine spesifikke ønsker",
            icon: <img src="/icons/lucide_users.svg" alt="Users icon" />,
            },
            {
            title: "Ekstra servering",
            description: "Profesjonell servitører for ditt arrangement",
            icon: <img src="/icons/hugeicons_internet.svg" alt="Internet icon" />,
            },            
            ]}    
            />; 
            <BottomCTA
            title="Klar for å bestille catering?"
            description="Velg din pakke og betal enkelt med Vipps"
            buttonText="Bestill nå"
            />                 
        </main>
    );
}
