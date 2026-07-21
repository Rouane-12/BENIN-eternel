'use client';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { SITES_TOURISTIQUES, LIEUX_DETENTE } from '@/data/tourism';

export default function Tourisme() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Itinéraires & lieux"
        title="Sites"
        script="touristiques"
        intro="Des musées d'Ouidah aux parcs nationaux du Nord, découvrez les lieux immanquables du Bénin."
        image="/tpython.webp"
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITES_TOURISTIQUES.map((site, i) => (
            <Reveal key={site.name} delay={i * 0.05}>
              <article className="group relative flex flex-col overflow-hidden border border-white/10 hover:border-white/30 transition-colors">
                <div className="h-52 overflow-hidden">
                  <img src={site.img} alt={site.name} className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1">{site.type}</div>
                  <h3 className="font-display text-2xl mb-3">{site.name}</h3>
                  <p className="text-sm text-white/65 mt-auto leading-relaxed">{site.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="border-t border-white/5" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <Reveal>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92)" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Loisirs & activités</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl">
              Coins <span className="font-script text-3xl md:text-5xl text-white/90">Détente</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {LIEUX_DETENTE.map((lieu, i) => (
            <Reveal key={lieu.id} delay={i * 0.05}>
              <article className="border border-white/10 hover:border-white/30 transition-colors p-6">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">{lieu.categorie}</div>
                <h3 className="font-display text-xl mb-3">{lieu.nom}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-4">{lieu.description}</p>
                <div className="flex items-start gap-2 pt-3 border-t border-white/5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/35 mt-0.5">Où</span>
                  <span className="text-xs text-white/50">{lieu.localisation}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}