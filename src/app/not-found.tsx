"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/buttons/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  const handleBack = (): void => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <span className="text-[120px] font-semibold font-playfair leading-none mb-4">
        404
      </span>
      <h1 className="text-4xl font-semibold mb-3">
        Oops! Denne siden finnes ikke.
      </h1>

      <p className="max-w-md mb-8">
        Det ser ut som du har navigert til en side som ikke er på menyen vår.
        Bruk tilbake-knappen for å gå til forrige side.
      </p>

      <Button
        onClick={handleBack}
        className=" button-text transition-colors cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap bg-amber-500 text-neutral-900 hover:bg-amber-700 hover:text-white rounded-lg py-3 px-6"
      >
        <ArrowLeft size={20} />
        Tilbake
      </Button>
    </main>
  );
}
