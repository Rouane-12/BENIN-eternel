import ArtistesClient from './ArtistesClient';

export const metadata = {
  title: "Artistes du Bénin — Musique & Création",
  description: "Découvrez les artistes qui font vibrer la musique béninoise.",
  openGraph: { url: "/artistes" },
  alternates: { canonical: "/artistes" },
};

export default function ArtistesPage() {
  return <ArtistesClient />;
}
