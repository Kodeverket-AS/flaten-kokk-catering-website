import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";

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
  title: "Tempalte page",
  description: "Kodeverket sin NextJS template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} flex flex-col antialiased`}>
        
          <Header />
        
        <main>
        {children}
        </main>
        <div className="wrapper-footer-bg">
   <Footer />
        </div>
       
      
      </body>
    </html>
  );
}
