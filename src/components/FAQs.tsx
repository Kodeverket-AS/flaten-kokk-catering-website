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
  defaultOpenIndex?: string;
}

const FAQs: React.FC<FAQProps> = ({
  title = "Ofte stilte spørsmål",
  items,
  defaultOpenIndex = "Svar",
}) => {
  const [openKey, setOpenKey] = useState<string | null>(
    defaultOpenIndex >= 0 && items[defaultOpenIndex]
      ? items[defaultOpenIndex].question
      : null
  );
  //! endre til statisk - bruk title istede for index
  const toggleFAQ = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <section className="wrapper-content max-w-[740px] px-12 py-6">
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
          <div key={key} className="bg-stone-100 py-4 px-5 rounded-2xl">
            <button
              id={buttonId}
              aria-controls={contentId}
              aria-expanded={isOpen}
              onClick={() => toggleFAQ(key)}
              className="flex items-center justify-between"
            >
              {faq.question}
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
                className=""
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
