import CarteClient from './CarteClient';
import { Suspense } from 'react';

export const metadata = {
  title: "Carte interactive du Bénin — Géolocalisation & sites",
  description: "Carte interactive du Bénin avec géolocalisation, sites touristiques, plages, monuments et restaurants.",
  openGraph: { url: "/carte" },
  alternates: { canonical: "/carte" },
};

export default function Carte() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-white/5 animate-pulse" />}>
      <CarteClient />
    </Suspense>
  );
}
