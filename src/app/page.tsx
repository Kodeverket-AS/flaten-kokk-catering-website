import HeroSection from "@/components/Hero";
import MøtKokken from "@/components/MøtKokken";
import Services from "@/components/VåreTjenester";
import ServicesWithImages from "@/components/PopulæreMenyer";
import Testimonials from "@/components/Kundene";

export default function Home() {
  return <main>
    <HeroSection/>
    <MøtKokken/>
    <Services/>
    <ServicesWithImages/>
    <Testimonials/>
    </main>;
}
