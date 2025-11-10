import React from "react";

interface ImageGalleryProps {
  title: string;
  images: { src: string; alt: string }[];
}

const Galleri: React.FC<ImageGalleryProps> = ({ title, images }) => {
  return (
    <div className="wrapper-content">
      <h2 className="text-center">{title}</h2>

      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow duration-400 cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-400"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleri;