import React from "react";
import { Phone, Mail, MapPin, Clock, Users, CreditCard } from "lucide-react";

interface KontaktinfoCardProps {
  phone: string;
  phoneInfo: string;
  email: string;
  mailInfo: string;
}

interface BookingInfoProps {
  varsel: string;
  personer: string;
  forskudd: string;
}

interface CombineProps extends KontaktinfoCardProps, BookingInfoProps {}

function KontaktinfoCard(props: CombineProps) {
  return (
    <div className="wrapper-content">
      <div className="flex flex-col justify-center items-start h-full w-[20%]">
        <div className="Kontakt-info h-40 w-full bg-stone-50">
          <p className="title">Kontaktinformasjon</p>
          <Phone size={24} />
          <p className="">{props.phone}</p>
          <p className="">{props.phoneInfo}</p>
          <Mail size={24} />
          <p className="">{props.email}</p>
          <p className="">{props.mailInfo}</p>
          <MapPin size={24} />
          <p className="">Serverer hele Østlandet</p>
          <p className="">Reisekostnader beregnes</p>
        </div>

        <div className="Booking-info h-40 w-full bg-stone-50">
          <p className="title">Booking info</p>
          <Clock size={24} />
          <p className="">{props.varsel}</p>
          <p className=""></p>
          <Users size={24} />
          <p className="">{props.personer}</p>
          <p className=""></p>
          <CreditCard size={24} />
          <p className="">{props.forskudd}</p>
          <p className=""></p>
        </div>

        <div className="Foretrekker-tlf h-40 w-full bg-stone-50"></div>
      </div>
    </div>
  );
}

export default KontaktinfoCard;
