import React from "react";
import Image from "next/image";

const Historie: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-10 px-5 md:px-20">
      <div className="flex flex-col text-center md:text-left md:w-1/2 space-y-4 mb-6 md:mb-0">
        <h2 className="text-3xl font-semibold text-gray-800">
          Min historie
        </h2>
        <p className="text-gray-600">
          Jeg har alltid hatt en spesiell forbindelse til mat. Det startet i barndomshjemmet hvor bestemor lærte meg at mat handler om kjærlighet, tradisjon og å samle folk. Den lærdommen har formet hele min karriere.
        </p>
        <p className="text-gray-600">
        Etter utdanning ved Norges Kokke- og Stuertskole dro jeg til Europa for å lære fra de beste. I kjøkkenene i Lyon og Milano lærte jeg viktigheten av perfekte teknikker og respekt for råvarene.
        </p>
        <p className="text-gray-600">
        I dag kombinerer jeg internasjonal erfaring med norske tradisjoner for å skape unike matopplevelser som forteller en historie og skaper minner.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image 
          src="/Logo.png" 
          alt="Kokkens logo" 
          width={300} 
          height={300} 
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Historie;
