"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import Intro from "@/components/Intro";
import Packages, { PackageItem } from "@/components/Packages";
import BottomCTA from "@/components/BottomCTA";
import TextMedBoxU from "@/components/TextMedBoxU";

const packagesData: PackageItem[] = [
  {
    id: 1,
    category: "Bryllup",
    badgeLabel: "Bryllup",
    title: "Elegant Bryllupsmeny",
    description: "Komplett bryllupsmeny med treretters middag og bryllupskake",
    guestsRange: "50-200 personer",
    price: "Fra 850 kr/person",
    menuType: ["Vegetar", "Glutenfri tilgjengelig"],
    included: [
      "Velkomstdrink med canapéer",
      "Treretters middag",
      "Bryllupskake",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 2,
    category: "Konfirmasjon",
    badgeLabel: "Konfirmasjon",
    title: "Familievennlig Konfirmasjon",
    description: "Festlig konfirmasjonsmeny som passer for hele familien",
    guestsRange: "20-80 personer",
    price: "Fra 550 kr/person",
    menuType: ["Vegetar", "Barnemenyer"],
    included: [
      "Buffet med varme og kalde retter",
      "Friske salater og tilbehør",
      "Dessertbord med kaker og frukt",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 3,
    category: "Forretning",
    badgeLabel: "Forretning",
    title: "Business Lunch Premium",
    description: "Profesjonell catering for møter og forretningsarrangementer",
    guestsRange: "10-100 personer",
    price: "Fra 395 kr/person",
    menuType: ["Vegetar", "Glutenfri", "Lav karbo"],
    included: [
      "Sesongbasert hovedrett",
      "Varme og kalde sideretter",
      "Dessert med kaffe/te",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 4,
    category: "Jubileum",
    badgeLabel: "Jubileum",
    title: "Intim Dinnerparty",
    description: "Personlig matopplevelse for mindre selskaper hjemme",
    guestsRange: "2-4 personer",
    price: "Fra 650 kr/person",
    menuType: ["Vegetar", "Sesongbasert"],
    included: [
      "Eksklusiv velkomstdrink",
      "Kokk tilberedet meny hjemme hos deg",
      "Sesongens dessert",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 5,
    category: "Jubileum",
    badgeLabel: "Jubileum",
    title: "Eksklusiv Jubileumsmiddag",
    description: "Raffinert meny for spesielle milepæler og jubileer",
    guestsRange: "10-60 personer",
    price: "Fra 750 kr/person",
    menuType: ["Vegetar", "Vegansk"],
    included: [
      "Tre-retters gourmetmeny",
      "Signaturretter fra kokken",
      "Champagne eller musserende drikke",
    ],
    imageSrc: "/package.jpg",
  },
  {
    id: 6,
    category: "Forretning",
    badgeLabel: "Forretning",
    title: "Business Lunch Premium",
    description: "Profesjonell catering for møter og forretningsarrangementer",
    guestsRange: "10-100 personer",
    price: "Fra 395 kr/person",
    menuType: ["Vegetar", "Glutenfri", "Lav karbo"],
    included: [
      "Varme lunsjalternativer",
      "Sunn snacks og tilbehør",
      "Sesongens dessert og kaffe",
    ],
    imageSrc: "/package.jpg",
  },
];

export default function Page() {
  const router = useRouter();

  return (
    <main>
      <HeroSection
        title="Catering pakker"
        subtitle="Ferdig planlagte menyer for alle anledninger - enkelt og deilig"
        buttonText="Kontakt meg"
        onButtonClick={() => router.push("/Bestilling")}
        backgroundImage="/bg1.jpg"
      />
      <Intro
        title="Ferdigplanlagte menyer som gjør livet enklere"
        description="Våre catering-pakker er nøye sammensatte menyer som dekker alle behov. Fra intime middager til store feiringer - vi har en pakke som passer perfekt til ditt arrangement. Alle pakker kan tilpasses etter dine ønsker og diettbehov."
        buttonText="Bestill kokk i dag"
        buttonLink="/Bestilling"
      />
      <Packages items={packagesData} />

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
      />

      <BottomCTA
        title="Klar for å bestille catering?"
        description="Velg din pakke og betal enkelt med Vipps"
        buttonText="Bestill nå"
      />
    </main>
  );
}
