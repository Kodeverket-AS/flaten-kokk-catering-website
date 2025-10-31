"use client";

import React from "react";
import { useRouter } from "next/navigation";

type BottomCTAProps = {
  title?: string;
  description?: string;
};

const BottomCTA: React.FC<BottomCTAProps> = ({
  title = "Klar for en uforglemmelig matopplevelse?",
  description = "Kontakt oss i dag for et uforpliktende tilbud tilpasset din anledning.",
}) => {
  const router = useRouter();

  return (
    <div className="wrapper-bg-stone">
      <div className="wrapper-content" >
        <section className="w-full h-full flex items-center justify-center gap-8">
          <div className="flex flex-col self-center gap-8">
          <div>
            <h2 className="text-3xl mb-3 text-center font-semibold leading-tight text-gray-900">
              {title}
            </h2>
            <p className="text-center text-md text-gray-600">{description}</p>
          </div>

          <div className="flex justify-center w-full">
            <button
              type="button"
              onClick={() => router.push("/Bestilling")}
              aria-label="Bestill kokk i dag"
              className="bg-amber-500 hover:bg-amber-700 transition opacity-100 rounded-lg flex items-center gap-2 w-[171px] h-[45px] pt-3 pb-3 pr-6 pl-6"
            >
              <span className="whitespace-nowrap">Bestill kokk i dag</span>
            </button>
          </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BottomCTA;

