import React from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  title?: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ title = "Mine verdier", items }) => {
  return (
    <div className="w-full bg-amber-50 px-4 sm:px-8 py-10">
      {title && (
        <h2 className="text-2xl text-black font-semibold text-center mb-8">
          {title}
        </h2>
      )}

      <div className="relative max-w-[75%] w-full mx-auto">
        {items.map((item, index) => (
          <div key={index} className="mb-12 relative pl-16 sm:pl-24">
            {/* Sirkelen med år */}
            <div className="absolute left-0 top-5 w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-800 font-semibold text-sm sm:text-base">
              {item.year}
            </div>

            {/* Boks med innhold */}
            <div className="border rounded-lg border-black p-10 bg-white shadow">
              <h3 className="font-semibold text-black text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
