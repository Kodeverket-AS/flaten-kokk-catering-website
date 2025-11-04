"use client";
import React, { useState } from "react";

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
    <section className="wrapper-faq">
      {title && <h2 className="">{title}</h2>}

      {/* Vi looper over items og rendrer ett panel per FAQ. 
          Viktig: map gir oss (faq, index) slik at vi kan vite hvilken som åpnes. */}
      {items.map((faq, index) => {
        // Unik id for tilgjengelighet (aria). Gjør det lettere for skjermlesere.
        const contentId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        const isOpen = openIndex === index;

        return (
          <div key={faq.question} className="">
            <button
              id={buttonId}
              aria-controls={contentId}
              aria-expanded={isOpen}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="">{isOpen ? "-" : "+"}</span>
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
