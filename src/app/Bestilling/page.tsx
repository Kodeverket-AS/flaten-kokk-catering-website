"use client";

import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/ContactForm";

const Serviceområde = dynamic(() => import("@/components/Serviceområde"), {
  ssr: false,
});

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
  
      <Serviceområde />
      <ContactForm />
    </main>
  );
}
