import CultureClient from './CultureClient';

export const metadata = {
  title: "Culture & Arts du Bénin — Vaudou, Amazones, Bronzes d'Abomey",
  description: "Vaudou, musique traditionnelle, artisanat, architecture Tata Somba, patrimoine afro-brésilien, fêtes et tradition orale du Bénin.",
  openGraph: { url: "/culture" },
  alternates: { canonical: "/culture" },
};

export default function Culture() {
  return <CultureClient />;
}
