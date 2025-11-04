

import React from "react";
import Link from "next/link";

const MøtKokken: React.FC = () => {
  return (
    <div className="wrapper-content">
      <div className="flex items-center justify-center">
        <div className="flex-col text-center space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            Møt Kokken
          </h2>
          <div className="w-full">
            <p className="mx-auto text-center text-gray-600">
              Med over 15 års erfaring fra kjøkkenet har jeg jobbet i noen av Norges beste restauranter. 
              Min lidenskap er å skape unike matopplevelser som gjør din anledning spesiell og minneverdig. 
              Jeg tror på å bruke de beste lokale ingrediensene og kombinere tradisjonelle teknikker med moderne presentasjon. 
              Hver rett er laget med kjærlighet og oppmerksomhet på detaljer.
            </p>
          </div>
          <Link href="/OmKokken">
            <button className="px-6 py-2 my-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
              Les mer om meg!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MøtKokken;