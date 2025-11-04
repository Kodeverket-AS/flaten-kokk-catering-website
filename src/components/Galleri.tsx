import React from "react";

interface ImageGalleryProps {
  title: string;
  images: { src: string; alt: string }[];
}

const ImageGalleri: React.FC<ImageGalleryProps> = ({ title, images }) => {
  return (
    <section className="wrapper-content py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGalleri;