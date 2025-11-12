"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ImageGalleryProps {
  title: string;
  images: { src: string; alt: string }[];
}

const Galleri: React.FC<ImageGalleryProps> = ({ title, images }) => {
  return (
    <div className="wrapper-content">
      <h2 className="text-center">{title}</h2>

      <div className="sm:hidden ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: true }}
          grabCursor
          loop
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={`${image.src}-${index}`}>
              <div className="group relative overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 md:gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[320px] sm:h-[280px] lg:h-[300px] xl:h-[340px] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 sm:bg-black/20 group-hover:sm:bg-black/0 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleri;
