'use client';

import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { DEPARTEMENTS } from '@/data/communes';

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-5xl">{n}</div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">{l}</div>
    </div>
  );
}

export default function CommunesClient() {
  const total = DEPARTEMENTS.reduce((s, d) => s + d.communes.length, 0);

  return (
    <SiteLayout>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-flag opacity-15" />
        <div className="relative">
          <PageHero
            kicker="Territoire"
            title="12 Départements"
            script="77 Communes"
            intro="Du nord aux savanes de l'Atacora au sud aux lagunes du Mono, le territoire béninois se déploie en douze départements et soixante-dix-sept communes."
            image="/plan.webp"
          />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <Reveal>
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl">
            <Stat n="12" l="Départements" />
            <Stat n="77" l="Communes" />
            <Stat n={String(total)} l="Localités listées" />
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEPARTEMENTS.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.05}>
              <article className="relative p-6 border border-white/10 hover:border-white/40 transition overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-flag" />
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">{d.communes.length} comm.</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-white/50">
                  Chef-lieu : <span className="text-white">{d.capital}</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {d.communes.map((c) => (
                    <li key={c} className="text-[11px] px-2 py-1 border border-white/10 text-white/70 rounded-sm">{c}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
