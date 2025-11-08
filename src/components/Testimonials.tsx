import React from "react";
import { Star } from "lucide-react"; // optional, for star icons

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Koelpin",
      imageUrl: "/kokk.png", // replace with real image path
      rating: 5,
      text: "Flaten Kokk leverte en fantastisk opplevelse til vårt bryllup. Maten var eksepsjonell og servicen var upåklagelig.",
    },
    {
      name: "Terri Jenkins",
      imageUrl: "/filozofi2.jpg",
      rating: 5,
      text: "Perfekt catering til vår konfirmasjon. Alt var deilig og godt organisert. Kan varmt anbefales!",
    },
    {
      name: "Gustavo Kuhl",
      imageUrl: "/filozofi3.jpg",
      rating: 4,
      text: "Som Airbnb-gjester fikk vi en uforglemmelig matopplevelse. Profesjonelt og deilig!",
    },
    {
      name: "Stein Hugo",
      imageUrl: "/Logo.png",
      rating: 5,
      text: "Som Airbnb-gjester fikk vi en uforglemmelig matopplevelse. Profesjonelt og deilig!",
    },
  ];

  return (
    <div className="wrapper-content">
      <div className="w-full">
        <h2 className="text-center mb-8">Hva kundene sier</h2>

        {/* Skjul manuell horisontal scroll for jevn animasjon */}
        <div className="carusel h-[252px] flex overflow-hidden">
          {/* Animer hele sporet fra 0% til -50%. Vi dupliserer listen for sømløs loop. */}
          <div className="flex gap-6 w-max animate-[carousel_30s_linear_infinite]">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                className="h-[252px] w-[368px] border border-neutral-900 bg-stone-100 rounded-3xl px-10 py-8 flex flex-col items-center text-center"
              >
                <div className="flex justify-center items-center">
                  {/* Fast størrelse på bilde for å unngå layout shift */}
                  <img
                    src={t.imageUrl}
                    alt={t.name}
                    className="w-18 h-18 rounded-2xl mb-4 object-cover"
                  />
                  <div className="flex pl-4 pb-4 flex-col items-start">
                    <h3 className="">{t.name}</h3>
                    <div className="flex pb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-10 h-8 gap-2 text-amber-500"
                        
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-left text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
