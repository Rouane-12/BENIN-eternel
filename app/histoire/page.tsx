import HistoireClient from './HistoireClient';

export const metadata = {
  title: 'Histoire du Bénin — Royaume du Dahomey, Béhanzin, Amazones',
  description: 'Encyclopédie interactive : rois du Dahomey, Béhanzin, Amazones, chronologie complète du Bénin de 1600 à nos jours.',
  openGraph: { title: 'Histoire du Bénin & du royaume du Dahomey', description: 'De Gangnihessou à Béhanzin : la grande histoire du Bénin.', url: '/histoire' },
  alternates: { canonical: '/histoire' },
};

export default function Histoire() {
  return <HistoireClient />;
}
