import React from "react";

interface ImageGalleryProps {
  title: string;
  images: { src: string; alt: string }[];
}

const Galleri: React.FC<ImageGalleryProps> = ({ title, images }) => {
  return (
    <div className="wrapper-content">
      <h2 className="text-center">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[320px]  lg:h-[300px] xl:h-[340px] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleri;