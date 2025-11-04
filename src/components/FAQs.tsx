"use client";
import React, { useState } from "react";
import Image from "next/image";

type FAQItem = {
  question: string; // selve spørsmålet som vises i knappen
  answer: string; // svaret som vises når elementet er åpnet
};

interface FAQProps {
  title?: string;
  items: FAQItem[];
  defaultOpenIndex?: number;
}

const FAQs: React.FC<FAQProps> = ({
  title = "Ofte stilte spørsmål",
  items,
  defaultOpenIndex = -1,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex >= 0 ? defaultOpenIndex : null
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="wrapper-faq gb-[#fafaf9] w-full max-w-[720px] m-auto px-6 flex flex-col items-center justify-center">
      {title && <h2 className="">{title}</h2>}

      {/* Vi looper over items og rendrer ett panel per FAQ. 
          Viktig: map gir oss (faq, index) slik at vi kan vite hvilken som åpnes. */}
      {items.map((faq, index) => {
        // Unik id for tilgjengelighet (aria). Gjør det lettere for skjermlesere.
        const contentId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="bg-[#f5f5f4] w-full py-4 px-5 sm:px-12 my-3 rounded-2xl"
          >
            <button
              id={buttonId}
              aria-controls={contentId}
              aria-expanded={isOpen}
              onClick={() => toggleFAQ(index)}
              className="font-playfair font-semibold text-black w-full sm:text-lg mb-2 flex items-center justify-between"
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
                className=" mt-2 text-sm"
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
