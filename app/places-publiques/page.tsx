'use client';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { PLACES_PUBLIQUES } from '@/data/placesPubliques';

export default function PlacesPubliques() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Espaces & Vie"
        title="Places"
        script="& Rivages"
        intro="Des monuments majestueux de Cotonou aux rivages sauvages de l'Atlantique, explorez les lieux de rassemblement et de détente du Bénin."
        image="/plan.webp"
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-8">
        {PLACES_PUBLIQUES.map((p, i) => (
          <Reveal key={p.nom} delay={i * 0.05}>
            <article className="group relative h-[400px] overflow-hidden border border-white/10 hover:border-white/40 transition">
              <img src={p.img} alt={p.nom} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-white/50">{p.ville}</span>
                  <div className="w-8 h-[1px] bg-white/20" />
                </div>
                <h3 className="font-display text-3xl mb-4 group-hover:text-white transition-colors">{p.nom}</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-md">{p.description}</p>

              </div>
              <div className="absolute top-4 right-4 text-[10px] font-mono text-white/20">
                {String(i + 1).padStart(2, "0")}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </SiteLayout>
  );
}
