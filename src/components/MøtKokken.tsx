import React from "react";

const MøtKokken: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 pt-5 pb-5">
      <div className="flex-col text-center space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">
            Møt Kokken
        </h2>
        <div className="w-full">
            <p className="mx-auto text-center w-1/2 text-gray-600">
           Med over 15 års erfaring fra kjøkkenet har jeg jobbet i noen av Norges beste restauranter. Min lidenskap er å skape unike matopplevelser som gjør din anledning spesiell og minneverdig. Jeg tror på å bruke de beste lokale ingrediensene og kombinere tradisjonelle teknikker med moderne presentasjon. Hver rett er laget med kjærlighet og oppmerksomhet på detaljer.
        </p>
        </div>        
        <button className="px-6 py-2 my-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
          Les mer om meg!
        </button>
      </div>
    </div>
  );
};

export default MøtKokken;