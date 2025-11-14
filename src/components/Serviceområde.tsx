"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const Serviceområde: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Import Leaflet dynamically only on the client
    import("leaflet").then((L) => {
      // Configure the default icon with CDN URLs
      L.default.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Initialize the map
      const map = L.default.map("map").setView([59.91, 10.75], 13);
      mapRef.current = map;

      L.default
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      L.default.marker([59.91, 10.75]).addTo(map).bindPopup("Oslo").openPopup();
    });

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="wrapper-content flex flex-col gap-8">
      <h2>Serviceområde</h2>
      <div className="lg:px-24">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <MapPin size={46} />
            <div className="flex flex-col items-center justify-center gap-2">
              <h3>Serverer hele Østlandet</h3>
              <p className="text-center">
                Oslo, Akershus og omkringliggende områder. Kontakt oss for andre
                lokasjoner.
              </p>
            </div>
          </div>
          <div
            id="map"
            className="w-full aspect-video max-h-[530px] rounded-lg"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Serviceområde;
