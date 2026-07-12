'use client';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { SITES_TOURISTIQUES } from '@/data/tourism';

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
    </SiteLayout>
  );
}
