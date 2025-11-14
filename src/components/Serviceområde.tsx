"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { MapPin } from "lucide-react";
const center = {
  lat: 60.3936269,
  lng: 5.3277533,
};

//updated to use the new Google Maps API
const Serviceområde = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (loadError)
    return <div>Kartet er midlertidig utilgjengelig. Beklager ulempene. </div>;
  if (!isLoaded) return <div>Vennligst vent, kartet lastes...</div>;

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
          <GoogleMap
            mapContainerClassName="w-full aspect-video max-h-[530px] rounded-lg"
            zoom={15}
            center={center}
            options={{
              gestureHandling: "greedy",
              disableDefaultUI: false,
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default Serviceområde;
