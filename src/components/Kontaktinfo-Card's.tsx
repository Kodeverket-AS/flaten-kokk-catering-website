import React from "react";
import { Phone, Mail, MapPin, Clock, Users, CreditCard } from "lucide-react";
import CallButton from "./CallButton";

interface KontaktinfoCardProps {
  phone: string;
  phoneInfo: string;
  email: string;
  mailInfo: string;
}

interface BookingInfoProps {
  varsel: string;
  varselInfo: string;

  personer: string;
  personerInfo: string;

  forskudd: string;
  forskuddInfo: string;
}

interface CombineProps extends KontaktinfoCardProps, BookingInfoProps {}

function KontaktinfoCard(props: CombineProps) {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="Kontakt-info w-[308px] p-10 bg-stone-50 rounded-2xl border border-gray-200">
          <p className="title pb-6">Kontaktinformasjon</p>

          <div className="flex justify-start items-center gap-2 pb-2">
            <Phone size={24} />
            <div className="">
              <p className="font-medium pb-0.5">{props.phone}</p>
              <p className="text-xs font-neutral-900">{props.phoneInfo}</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 pb-2">
            <Mail size={24} />
            <div className="">
              <p className="font-medium pb-0.5">{props.email}</p>
              <p className="text-xs font-neutral-900">{props.mailInfo}</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2">
            <MapPin size={24} />
            <div className="">
              <p className="font-medium pb-0.5">Serverer hele Østlandet</p>
              <p className="text-sm font-neutral-900">
                Reisekostnader beregnes
              </p>
            </div>
          </div>
        </div>

        <div className="Booking-info h-fitt w-[308px] p-10 bg-stone-50 rounded-2xl border border-gray-200">
          <p className="title pb-6">Booking info</p>

          <div className="flex justify-start items-center gap-2 pb-2">
            <Clock size={24} />
            <div className="">
              <p className="font-medium pb-0.5">{props.varsel}</p>
              <p className="text-xs font-neutral-900">{props.varselInfo}</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 pb-2">
            <Users size={24} />
            <div className="">
              <p className="font-medium pb-0.5">{props.personer}</p>
              <p className="text-xs font-neutral-900">{props.personerInfo}</p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2">
            <CreditCard size={24} />
            <div className="">
              <p className="font-medium pb-0.5">{props.forskudd}</p>
              <p className="text-xs font-neutral-900">{props.forskuddInfo}</p>
            </div>
          </div>
        </div>

        <div className="Foretrekker-tlf h-fitt w-[308px] p-10 bg-stone-50 rounded-2xl border border-gray-200 flex flex-col justify-center items-center">
          <p className="title pb-6">Foretrekker telefon?</p>
          <p className="pb-4 text-center">
            Ring meg for personlig rådgiving og skreddersydde løsninger
          </p>

          <CallButton
            lable="Ring nå"
            phoneNumber="12345678"
            className="h-12 w-57 gap-2 cursor-pointer bg-amber-500 hover:bg-amber-700 flex justify-center items-center rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default KontaktinfoCard;
