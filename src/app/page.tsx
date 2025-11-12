import HeroSection from "@/components/Hero";
import Intro from "@/components/Intro";
import VåreTjenesterMain from "@/components/VåreTjenesterMain";
import Menyer from "@/components/Menyer";
import Testimonials from "@/components/Testimonials";
import BottomCTA from "@/components/BottomCTA";

const menyerSections = [
  {
    title: "Bryllupsmeny",
    description:
      "Perfekt for bryllup og spesielle anledninger med focus på lokale ingredienser",
    buttonText: "Se hele menyen",
    pris: " Fra 850 kr per person",
    imageUrl: "/menyer.jpg",
  },
  {
    title: "Konfirmasjon",
    description:
      "Klassisk nordisk kjøkken med moderne touch, perfekt for konfirmasjoner",
    buttonText: "Se hele menyen",
    pris: " Fra 50 kr per person",
    imageUrl: "/menyer.jpg",
  },
  {
    title: "Jubileum",
    description: "Perfekt for mer uformelle sammenkomster og jubileum",
    buttonText: "Se hele menyen",
    pris: " Fra 750 kr per person",
    imageUrl: "/menyer.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Intro
        title="Møt Kokken"
        description="Med over 15 års erfaring fra kjøkkenet har jeg jobbet i noen av Norges beste restauranter. Min lidenskap er å skape unike matopplevelser som gjør din anledning spesiell og minneverdig. Jeg tror på å bruke de beste lokale ingrediensene og kombinere tradisjonelle teknikker med moderne presentasjon. Hver rett er laget med kjærlighet og oppmerksomhet på detaljer."
        buttonText="Bestill kokk i dag"
        buttonLink="/Bestilling"
      />
      <VåreTjenesterMain />
      <Menyer sections={menyerSections} />
      <Testimonials />
      <BottomCTA />
    </main>
  );
}
