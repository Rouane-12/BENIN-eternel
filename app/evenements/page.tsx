import EvenementsClient from './EvenementsClient';

export const metadata = {
  title: "Événements au Bénin — Festivités & Culture",
  description: "Retrouvez les grands rendez-vous culturels, musicaux, gastronomiques et sportifs du Bénin.",
  openGraph: { url: "/evenements" },
  alternates: { canonical: "/evenements" },
};

export default function Evenements() {
  return <EvenementsClient />;
}