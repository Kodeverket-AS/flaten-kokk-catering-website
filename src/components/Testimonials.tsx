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
    <div className="card flex flex-col h-40 w-30 sm:gap-8 sm:h-63 sm:w-92 px-10 py-8 rounded-xl border border-neutral-900 bg-stone-100">
      <div className="flex items-center gap-4">
        <img src={imageUrl} alt="Image" className="h-18 w-18 rounded-lg"></img>
        <div className="flex flex-col gap-4">
          <p className="title">{name}</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src="/icons/lucide_star.svg"
                alt="start icon"
                width={20}
                height={20}
                className={
                  star <= rating ? "starfilled" : "star-empty opacity-20"
                }
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text text-gray-600">{text}</p>
    </div>
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
      imageUrl: "/filozofi3.jpg",
      rating: 4,
      text: "Perfekt catering til vår konfirmasjon. Alt var deilig og godt organisert. Kan varmt anbefales!",
    },
    {
      name: "Gustavo Kuhl",
      imageUrl: "/filozofi2.jpg",
      rating: 3,
      text: "Som Airbnb-gjester fikk vi en uforglemmelig matopplevelse. Profesjonelt og deilig!",
    },
    {
      name: "Stein Hugo",
      imageUrl: "/kokk.png",
      rating: 4,
      text: "Hadde en fantastisk opplevelse!",
    },
    {
      name: "Karl Johan",
      imageUrl: "/filozofi3.jpg",
      rating: 2,
      text: "Møtte hyggerlig personell og fantastisk service",
    },
    {
      name: "Ina Løvhau",
      imageUrl: "/filozofi2.jpg",
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
          spaceBetween={0}
          slidesPerView={2}
          centeredSlides={false}
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

      <div className="hidden sm:flex sm:justify-center sm:items-center">
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard
              name={testimonial.name}
              imageUrl={testimonial.imageUrl}
              rating={testimonial.rating}
              text={testimonial.text}
            ></TestimonialCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
