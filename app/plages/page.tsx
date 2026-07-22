'use client';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { BEACHES } from '@/data/beaches';

export default function Plages() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Côte atlantique"
        title="Plages"
        script="d'or"
        intro="125 kilomètres de côte, du Mono à Sèmè-Podji. Pirogues colorées, palmiers, embruns et soirées sans fin."
        image="/beach.webp"
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-6">
        {BEACHES.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <article className="group relative h-[300px] overflow-hidden border border-white/10 hover:border-white/40 transition">
              <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="font-display text-4xl mb-2 opacity-20">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-3xl mb-2">{p.name}</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-md">{p.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </SiteLayout>
  );
}
