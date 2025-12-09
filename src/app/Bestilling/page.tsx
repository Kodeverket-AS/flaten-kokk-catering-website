"use client";

import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/ContactForm";

const Serviceområde = dynamic(() => import("@/components/Serviceområde"), {
  ssr: false,
  loading: () => (
    <div className="wrapper-content flex flex-col gap-6">
      <div className="flex lg:flex-col-reverse items-center justify-center gap-4">
        <div className="flex items-center">
          <h2 className="text-center" style={{ lineHeight: '1', paddingBottom: '0' }}>Serviceområde</h2>
        </div>
      </div>
      <p className="text-center">Vennligst vent, kartet lastes...</p>
    </div>
  ),
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
  
      <Serviceområde /> <ContactForm />
    </main>
  );
}
