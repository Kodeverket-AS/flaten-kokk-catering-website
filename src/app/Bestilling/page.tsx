"use client";

import React from "react";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import Serviceområde from "@/components/Serviceområde";
import ContactForm from "@/components/ContactForm";

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
  
      <Serviceområde /> <ContactForm />
    </main>
  );
}
