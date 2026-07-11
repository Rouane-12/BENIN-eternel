import CarteClient from './CarteClient';

export const metadata = {
  title: "Carte interactive du Bénin — Géolocalisation & sites",
  description: "Carte interactive du Bénin avec géolocalisation, sites touristiques, plages, monuments et restaurants.",
  openGraph: { url: "/carte" },
  alternates: { canonical: "/carte" },
};

export default function Carte() {
  return <CarteClient />;
}
