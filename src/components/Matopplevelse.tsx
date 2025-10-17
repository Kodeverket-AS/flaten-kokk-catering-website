import React from "react";


type Matopplevelse = {
title?: string;
description?: string;
onOrder?: () => void;
};


const Matopplevelse: React.FC<Matopplevelse> = ({
title = "Klar for en uforglemmelig matopplevelse?",
description = "Kontakt oss i dag for et uforpliktende tilbud tilpasset din anledning.",
onOrder,
}) => {
return (
    <section className="w-full mx-auto p-6 sm:p-10 bg-white">
    <div className="flex flex-col self-center">
        <div>
            <h2 className="text-3xl mb-3 text-center font-semibold leading-tight text-gray-900">
            {title}
            </h2>
            <p className="text-center text-md text-gray-600">
            {description}
            </p>
        </div>


<div className="flex justify-center w-full">
    <button
    type="button"
    onClick={onOrder}
    aria-label="Bestill kokk i dag"
    className=" px-6 py-2 my-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
    >
    <span className="whitespace-nowrap">Bestill kokk i dag</span>
    </button>
</div>
</div>
</section>
);
};

export default Matopplevelse;