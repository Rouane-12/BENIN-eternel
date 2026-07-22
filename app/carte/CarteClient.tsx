'use client';

import { lazy, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SiteLayout, PageHero } from '@/components/SiteLayout';

const BeninMap = lazy(() => import('@/components/BeninMap').then((m) => ({ default: m.BeninMap })));

export default function CarteClient() {
  const searchParams = useSearchParams();
  const lat = searchParams.get('lat') ? Number(searchParams.get('lat')) : undefined;
  const lng = searchParams.get('lng') ? Number(searchParams.get('lng')) : undefined;
  const name = searchParams.get('name') || undefined;

  return (
    <SiteLayout showGlobe={false}>
      <PageHero
        kicker="Cartographie"
        title="Carte"
        script="interactive"
        intro="Autorisez la géolocalisation pour découvrir les sites les plus proches et calculer votre distance à chacun d'eux."
        image="/plan.webp"
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <Suspense fallback={<div className="h-[520px] bg-white/5 animate-pulse" />}>
          <BeninMap focusLat={lat} focusLng={lng} focusName={name} />
        </Suspense>
      </section>
    </SiteLayout>
  );
}
