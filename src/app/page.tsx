import HeroSection from "@/components/Hero";
import MøtKokken from "@/components/MøtKokken";
import Services from "@/components/VåreTjenester";
import Menyer from "@/components/Menyer";
import Testimonials from "@/components/Kundene";
import BottomCTA from "@/components/BottomCTA";

const menyerSections = [
  {
    title: "Bryllupsmeny",
    description: "Perfekt for bryllup og spesielle anledninger med focus på lokale ingredienser",
    buttonText: "Les mer",
    pris: " Fra 850 kr per person",
    imageUrl: "/menyer.jpg",
  },
  {
    title: "Konfirmasjon",
    description: "Klassisk nordisk kjøkken med moderne touch, perfekt for konfirmasjoner",
    buttonText: "Les mer",
    pris: " Fra 50 kr per person",
    imageUrl: "/menyer.jpg",
  },
  {
    title: "Jubileum",
    description: "Perfekt for mer uformelle sammenkomster og jubileum",
    buttonText: "Les mer",
    pris: " Fra 750 kr per person",
    imageUrl: "/menyer.jpg",
  },
];

export default function Home() {
  return <main>
    <HeroSection/>
    <MøtKokken/>
    <Services/>
    <Menyer sections={menyerSections} />
    <Testimonials/>
    <BottomCTA/>
    </main>;
}
