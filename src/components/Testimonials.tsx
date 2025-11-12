// Lag en card komponent, hvor innholdet er id bassert,
// Cards på pc det skal være 3 Card komponenter, som sklir til siden når man trykker på knapp høyre eller venstre, det skal loope når man kommer til siste Card.
// På mobil skal Card være swipe fungsjon hentet fra https://swiperjs.com/.

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface TestimonialsProps {
  name: string;
  imageUrl: string;
  rating: number;
  text: string;
}

const TestimonialCard: React.FC<TestimonialsProps> = ({
  name,
  imageUrl,
  rating,
  text,
}) => {
  return (
    <div className="card h-63 w-92 px-10 py-8 rounded-xl border border-neutral-900"></div>
  );
};

const Testimonial: React.FC = () => {
  const testimonials: TestimonialsProps[] = [
    {
      name: "Carlos Koelpin",
      imageUrl: "",
      rating: 4,
      text: "Flaten Kokk leverte en fantastisk opplevelse til vårt bryllup. Maten var eksepsjonell og servicen var upåklagelig.",
    },
    {
      name: "Terri Jenkins",
      imageUrl: "",
      rating: 5,
      text: "Perfekt catering til vår konfirmasjon. Alt var deilig og godt organisert. Kan varmt anbefales!",
    },
    {
      name: "Gustavo Kuhl",
      imageUrl: "",
      rating: 5,
      text: "Som Airbnb-gjester fikk vi en uforglemmelig matopplevelse. Profesjonelt og deilig!",
    },
    {
      name: "Stein Hugo",
      imageUrl: "",
      rating: 4,
      text: "Hadde en fantastisk opplevelse!",
    },
    {
      name: "Karl Johan",
      imageUrl: "",
      rating: 5,
      text: "Møtte hyggerlig personell og fantastisk service",
    },
    {
      name: "Ina Løvhau",
      imageUrl: "",
      rating: 5,
      text: "Fin opplevelse, anbefaler",
    },
  ];

  return (
    <div className="wrapper-content">
      <h2 className="">Hva kundene sier</h2>
      <div className="sm:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={12}
          slidesPerView={2}
          pagination={{ clickable: true }}
          grabCursor
          loop
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                imageUrl={testimonial.imageUrl}
                rating={testimonial.rating}
                text={testimonial.text}
              ></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
