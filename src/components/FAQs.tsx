"use client";
import React, { useState } from "react";
import Image from "next/image";

export type FAQItem = {
  question: string; // selve spørsmålet som vises i knappen
  answer: string; // svaret som vises når elementet er åpnet
};

interface FAQProps {
  title?: string;
  items: FAQItem[];
  defaultOpenKey?: string;
}

const FAQs: React.FC<FAQProps> = ({
  title = "Ofte stilte spørsmål",
  items,
  defaultOpenKey,
}) => {
  const [openKey, setOpenKey] = useState<string | null>(defaultOpenKey ?? null);
  //! endre til statisk - bruk title istede for index
  const toggleFAQ = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <section className="wrapper-content flex items-center">
      {title && <h2 className="">{title}</h2>}

      {/* Vi looper over items og rendrer ett panel per FAQ. 
          Viktig: map gir oss (faq, index) slik at vi kan vite hvilken som åpnes. */}
      {items.map((faq, index) => {
        const key = faq.question; // stabil nøkkel basert på "title"/spørsmål
        const isOpen = openKey === key;
        // Vi beholder index i id-atributter for enkelhet, men du kan også lage en slug av key
        const contentId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={key}
            className="w-full max-w-[740px] bg-stone-100 py-6 px-12 rounded-2xl"
          >
            <button
              id={buttonId}
              aria-controls={contentId}
              aria-expanded={isOpen}
              onClick={() => toggleFAQ(key)}
              className="h3 w-full flex items-center justify-between text-left"
            >
              <h3>{faq.question}</h3>
              <span className="">
                <Image
                  src={
                    isOpen
                      ? "/icons/lucide_chevron-up.svg"
                      : "/icons/lucide_chevron-down.svg"
                  }
                  alt={isOpen ? "Lukk" : "Åpne"}
                  width={14}
                  height={14}
                  className=""
                />
              </span>
            </button>

            {/* Rendrer svaret kun når panelet er åpent */}
            {isOpen && (
              <p
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className="pt-6"
              >
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
};
export default FAQs;
