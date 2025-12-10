import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import ScrollToTopButton from "@/components/ui/buttons/ScrollToTopButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flatenkokk.no"),
  title: {
    default: "Flaten Kokk og Catering | Privat Kokk & Catering Bergen",
    template: "%s | Flaten Kokk og Catering",
  },
  description:
    "Profesjonell privat kokk og catering i Bergen og omegn. Over 15 års erfaring med bryllup, konfirmasjon, jubileum, Airbnb Events og forretningsarrangementer. Lokale ingredienser, skreddersydde menyer. Bestill kokk i dag!",
  keywords: [
    "privat kokk",
    "catering",
    "kokkeoppdrag",
    "bryllup catering",
    "konfirmasjon catering",
    "jubileum catering",
    "Airbnb Events",
    "catering Bergen",
    "privat kokk Bergen",
    "catering Vestlandet",
    "forretningscatering",
    "event catering",
    "matlevering",
    "kokk hjemme",
    "skreddersydd meny",
    "lokale ingredienser",
    "3-retters meny",
    "5-retters meny",
    "firmaarrangement",
    "catering Hordaland",
  ],
  authors: [{ name: "Flaten Kokk og Catering" }],
  creator: "Flaten Kokk og Catering",
  publisher: "Flaten Kokk og Catering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "no_NO",
    url: "https://flatenkokk.no",
    siteName: "Flaten Kokk og Catering",
    title: "Flaten Kokk og Catering | Privat Kokk & Catering Bergen",
    description:
      "Profesjonell privat kokk og catering i Bergen og omegn. Over 15 års erfaring med bryllup, konfirmasjon, jubileum og forretningsarrangementer. Bestill kokk i dag!",
    images: [
      {
        url: "/bg1.jpg",
        width: 1200,
        height: 630,
        alt: "Flaten Kokk og Catering - Profesjonell matopplevelse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flaten Kokk og Catering | Privat Kokk & Catering Bergen",
    description:
      "Profesjonell privat kokk og catering i Bergen og omegn. Over 15 års erfaring. Bestill kokk i dag!",
    images: ["/bg1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://flatenkokk.no",
  },
  category: "Food & Catering",
  classification: "Catering Service",
  other: {
    "contact:email": "post@flatenkokk.no",
    "geo.region": "NO-46",
    "geo.placename": "Bergen, Vestlandet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${inter.variable} ${playfair.variable} flex flex-col antialiased`}>
          <Header />
        
        <main>
        {children}
        </main>
        <div className="wrapper-footer-bg">
   <Footer />
        </div>
        <ScrollToTopButton />
      
      </body>
    </html>
  );
}
