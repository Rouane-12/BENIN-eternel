import HebergementClient from './HebergementClient';

export const metadata = {
  title: 'Hébergement au Bénin — Hôtels, Villas & Appartements meublés',
  description: 'Trouvez votre hébergement idéal au Bénin : hôtels 5 étoiles, villas privées et agences de location meublée pour expatriés et voyageurs longue durée.',
  openGraph: { url: '/hebergement' },
  alternates: { canonical: '/hebergement' },
};

export default function Hebergement() {
  return <HebergementClient />;
}
