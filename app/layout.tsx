import type { Metadata } from "next";
import { Inter, Cinzel, Cormorant_Garamond, Italianno, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant-garamond" });
const italianno = Italianno({ weight: "400", subsets: ["latin"], variable: "--font-italianno" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });

export const metadata: Metadata = {
  title: "Bénin Éternel — Terre de royaumes, de Vodún et de merveilles",
  description: "Découvrez le Bénin : histoire des rois du Dahomey, culture vodun, plages atlantiques, parcs nationaux, gastronomie et patrimoine UNESCO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cinzel.variable} ${cormorantGaramond.variable} ${italianno.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
