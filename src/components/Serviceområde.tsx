"use client";
import { GoogleMap, Circle, useLoadScript } from "@react-google-maps/api";
import { MapPin } from "lucide-react";

const center = {
  lat: 60.3936269,
  lng: 5.3277533,
};

const serviceAreaRadius = 50000;

//updated to use the new Google Maps API
const Serviceområde = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (loadError)
    return <div>Kartet er midlertidig utilgjengelig. Beklager ulempene. </div>;
  if (!isLoaded) return <div>Vennligst vent, kartet lastes...</div>;

  return (
    <div className="wrapper-content flex flex-col gap-6">

      <div className="flex lg:flex-col-reverse items-center justify-center gap-4">
        <div className="flex items-center" >
          <MapPin size={46} className="flex-shrink-0" />
        </div>
        <div className="flex items-center" >
          <h2 className="text-center " style={{ lineHeight: '1', paddingBottom: '0' }}>Serviceområde</h2>
        </div>
      </div>
           
              <h3 className="text-center"> Profesjonelle kokketjenester på Vestlandet</h3>
              <p className="text-center">
                Bergen og omkringliggende områder. Kontakt oss for andre
                lokasjoner.
              </p>
           
      
          <GoogleMap
            mapContainerClassName="w-full aspect-video  max-h-[530px] rounded-lg"
            zoom={8}
            center={center}
            options={{
              gestureHandling: "cooperative",
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false,
            }}
          >
            <Circle
              center={center}
              radius={serviceAreaRadius}
              options={{
                fillColor: "#f59e0b",
                fillOpacity: 0.2,
                strokeColor: "#f59e0b",
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          </GoogleMap>
        </div>
     

  );
};

export default Serviceområde;
