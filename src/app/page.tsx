import HeroSection from "@/components/Hero";
import MøtKokken from "@/components/MøtKokken";
import Services from "@/components/VåreTjenester";
import ServicesWithImages from "@/components/PopulæreMenyer";

export default function Home() {
  return <main>
    <HeroSection/>
    <MøtKokken/>
    <Services/>
    <ServicesWithImages/>
    </main>;
}
