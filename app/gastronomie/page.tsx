import GastronomieClient from './GastronomieClient';

export const metadata = {
  title: "Gastronomie du Bénin — Amiwo, Wagashi, Poulet bicyclette",
  description: "Plats emblématiques et meilleurs restaurants à Cotonou, Porto-Novo et Ouidah.",
  openGraph: { url: "/gastronomie" },
  alternates: { canonical: "/gastronomie" },
};

export default function Gastronomie() {
  return <GastronomieClient />;
}