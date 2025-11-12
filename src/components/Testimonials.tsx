// Lag en card komponent, hvor innholdet er id bassert, 
// Cards skal være statisk og det skal være 3 statiske Card komponenter, og innholdet skal endre seg når man trykker høyre eller venstre på pad-pc-storskjerm
// På mobil skal Card seg selv flyttes til siden, det skal være swipe fungsjon hentet fra https://swiperjs.com/. 
// På mobil skal det 


"use client";

import React, { useState } from "react";
import { Star } from "lucide-react"; // optional, for star icons



// interface TestimonialsProps {
//   name: string;
//   imageUrl: string;
//   rating: number;
//   text: string;
// }

// interface TestimonialsComponents {[
//   {}
// ]}

// const TestimonialCard: React.FC<TestimonialsProps> = ({name, imageUrl, rating, text,}) => {
//   return (

//   )
// };


// const Testimonial: React.FC<TestimonialCard> = ({})





interface TestimonialCardProps {
  name: string;
  imageUrl: string;
  rating: number;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  imageUrl,
  rating,
  text,
}) => {
  return (
    <div className="md:h-63 md:w-92 border border-neutral-900 bg-stone-100 rounded-3xl px-10 py-8 flex flex-col items-center text-center">
      <div className="flex flex-col items-center md:flex md:flex-row md:justify-center md:items-center">
        {/* Fast størrelse på bilde for å unngå layout shift */}
        <img
          src={imageUrl}
          alt={name}
          className="w-18 h-18 rounded-2xl mb-4 object-cover"
        />
        <div className="pl-4 pb-4 md:flex md:flex-col md:items-start">
          <h3 className="pb-2 md:pb-0">{name}</h3>
          <div className="flex pb-4">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-10 h-8 gap-2 text-amber-500" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-left text-gray-600">{text}</p>
    </div>
  );
};

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="wrapper-content">
      <div className="w-full relative">
        {/* VENSTRE KNAPP - med onClick */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-[-72] md:left-[-10] bottom-0 h-63 w-15 backdrop-blur-xl bg-black/5 rounded-3xl flex items-center justify-center border-0 shadow-2xl shadow-black/10 hover:bg-black/10 transition-all z-10"
        >
          <img
            src="/icons/lucide_chevron-left.svg"
            alt="Previous"
            className="w-6 h-6 relative"
          />
        </button>

        {/* HØYRE KNAPP - med onClick */}
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-[-72] md:right-[-10] bottom-0 h-63 w-15 backdrop-blur-xl bg-black/5 rounded-3xl flex items-center justify-center border-0 shadow-2xl shadow-black/10 hover:bg-black/10 transition-all z-10"
        >
          <img
            src="/icons/lucide_chevron-right.svg"
            alt="Next"
            className="w-6 h-6 relative"
          />
        </button>

        <h2 className="text-center mb-8">Hva kundene sier</h2>

        {/* SLIDER CONTAINER */}
        <div className="h-93 md:h-63 flex overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {testimonials.map((t, idx) => (
              <TestimonialCard key={`${t.name}-${idx}`} {...t} />
            ))}
          </div>
        </div>

        {/* OPTIONAL: Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-amber-500 w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
