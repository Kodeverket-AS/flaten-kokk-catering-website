import React from "react";
import { Star } from "lucide-react"; // optional, for star icons

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Koelpin",
      imageUrl: "/images/user1.jpg", // replace with real image path
      rating: 5,
      text: "Flaten Kokk leverte en fantastisk opplevelse til vårt bryllup. Maten var eksepsjonell og servicen var upåklagelig.",
    },
    {
      name: "Terri Jenkins",
      imageUrl: "/images/user2.jpg",
      rating: 5,
      text: "Perfekt catering til vår konfirmasjon. Alt var deilig og godt organisert. Kan varmt anbefales!",
    },
    {
      name: "Gustavo Kuhlman",
      imageUrl: "/images/user3.jpg",
      rating: 5,
      text: "Som Airbnb-gjester fikk vi en uforglemmelig matopplevelse. Profesjonelt og deilig!",
    },
  ];

  return (
    <div className="wrapper-content">
      <div className="w-full">
        <h2 className="text-center mb-8">Hva kundene sier</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="border border-neutral-900 bg-stone-100 rounded-3xl px-10 py-8 flex flex-col items-center text-center"
            >
              {/* User Image */}
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />

              {/* Name */}
              <h3 className="font-semibold mb-2">{testimonial.name}</h3>

              {/* Star Rating */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
