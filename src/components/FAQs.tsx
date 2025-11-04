"use client";
import React, { useState } from "react";

// Denne komponenten rendres i nettleseren (klientside) fordi den bruker React state (useState).
// "use client" sier til Next.js at filen må kjøres på klienten, ikke bare på serveren.

// En enkel TypeScript-type for ett FAQ-element.
// Vi definerer hvilke felter vi forventer å få inn.
type FAQItem = {
  question: string; // selve spørsmålet som vises i knappen
  answer: string; // svaret som vises når elementet er åpnet
};

// Props (inngangsverdier) som komponenten tar imot fra forelderen.
// - title: overskrift over FAQ-listen (valgfri)
// - items: listen med FAQ-elementer
// - defaultOpenIndex: hvilket element som skal være åpnet ved start (valgfri, -1 betyr ingen)
interface FAQProps {
  title?: string;
  items: FAQItem[];
  defaultOpenIndex?: number;
}

// Vi bruker React.FC<FAQProps> for å type-komponentens props.
// Vi setter også fornuftige default-verdier via destrukturering.
const FAQs: React.FC<FAQProps> = ({
  title = "Ofte stilte spørsmål",
  items,
  defaultOpenIndex = -1,
}) => {
  // openIndex lagrer hvilken FAQ som er åpnet akkurat nå.
  // - null betyr at ingen er åpnet.
  // - et tall (0, 1, 2, ...) refererer til indeks i items-arrayet.
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex >= 0 ? defaultOpenIndex : null
  );

  // toggleFAQ åpner den klikkede indeksen hvis den ikke er åpen,
  // eller lukker den hvis den allerede er åpen.
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="wrapper-faq">
      {/* Viser tittel hvis den er satt */}
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
            {/* Knapp for å åpne/lukke. aria-atributter forbedrer tilgjengelighet. */}
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
