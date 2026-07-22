'use client';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { LIEUX } from '@/data/lieux';

const MONUMENTS = [
  { name: 'Palais Royaux d\'Abomey', city: 'Abomey', desc: 'Classés UNESCO depuis 1985, dix palais successifs des rois du Dahomey, bas-reliefs en banco, trônes et tentures historiques.', img: '/abomey.webp', lieuId: 'palais-royaux-abomey' },
  { name: 'Porte du Non-Retour', city: 'Ouidah', desc: 'Monument à la mémoire des millions de captifs déportés. Dressé face à l\'Atlantique au bout des 4 km de la Route des Esclaves.', img: '/ouidah.webp', lieuId: 'porte-non-retour' },
  { name: 'Temple des Pythons', city: 'Ouidah', desc: 'Sanctuaire dédié au vodun Dangbé, où vivent en liberté plusieurs dizaines de pythons sacrés.', img: '/tpython.webp', lieuId: 'temple-pythons' },
  { name: 'Grande Mosquée de Porto-Novo', city: 'Porto-Novo', desc: 'Édifice du XIXᵉ siècle aux façades roses et vertes inspirées du style afro-brésilien de Bahia.', img: '/gmp.webp', lieuId: 'grande-mosquee-porto-novo' },
  { name: 'Musée Honmè', city: 'Porto-Novo', desc: 'Ancien palais royal du roi Toffa, devenu musée d\'histoire de la dynastie de Hogbonou.', img: '/museh.webp', lieuId: 'musee-honme' },
  { name: 'Place Toffa', city: 'Porto-Novo', desc: 'Cœur cérémoniel de la capitale, dominé par la statue du roi Toffa Iᵉʳ.', img: '/toffa.webp', lieuId: 'place-toffa' },
  { name: 'Forêt sacrée de Kpassè', city: 'Ouidah', desc: 'Bois sacré où, selon la tradition, le roi Kpassè se serait métamorphosé en arbre iroko.', img: '/foretp.webp', lieuId: 'foret-sacree-kpasse' },
  { name: 'Basilique Notre-Dame d\'Arigbo', city: 'Dassa-Zoumè', desc: 'Haut lieu de pèlerinage marial, niché entre les collines sacrées des Idaatcha.', img: '/Basilique.webp', lieuId: 'basilique-arigbo' },
  { name: 'Fort Portugais São João Baptista de Ajudá', city: 'Ouidah', desc: 'Ancien comptoir colonial portugais du XVIIᵉ siècle, aujourd\'hui musée d\'histoire retraçant la traite négrière et les royaumes du Dahomey.', img: '/fortp.webp', lieuId: 'fort-portugais-ouidah' },
  { name: 'Musée da Silva', city: 'Porto-Novo', desc: 'Demeure afro-brésilienne du XIXᵉ siècle consacrée aux traditions et à l\'héritage des descendants d\'esclaves affranchis revenus du Brésil.', img: '/msilva.webp', lieuId: 'musee-da-silva' },
  { name: 'Statue du Roi Béhanzin', city: 'Cotonou', desc: 'Imposante statue de bronze du dernier grand roi du Dahomey, érigée place Lénine en hommage à sa résistance à la colonisation.', img: '/dept-zou.webp', lieuId: 'statue-behanzin' },
  { name: 'Cathédrale Notre-Dame de l\'Immaculée Conception', city: 'Cotonou', desc: 'Cathédrale aux rayures rouge et blanc emblématiques, repère architectural du centre-ville depuis le début du XXᵉ siècle.', img: '/ndame.webp', lieuId: 'cathedrale-cotonou' },
  { name: 'Tata Somba', city: 'Boukoumbé', desc: 'Habitations fortifiées en terre typiques des Batammariba, à l\'architecture défensive unique classée au patrimoine mondial de l\'UNESCO.', img: '/somba.webp', lieuId: 'tata-somba-boukoumbe' },
  { name: 'Place des Martyrs', city: 'Cotonou', desc: 'Monument et esplanade dédiés à la mémoire des victimes de l\'histoire politique du pays, lieu de rassemblements et de commémorations.', img: '/martyr.webp', lieuId: 'place-martyrs-cotonou' },
  {
    id: "place-amazone",
    name: "Place de l'Amazone",
    city: "Cotonou",
    desc:
      "Monument géant représentant les Amazones du Dahomey. Un des sites les plus visités de Cotonou. Très beau de jour comme de nuit grâce à l'éclairage.",
    img: "/amazone.webp",
    lieuId: 'place-amazone'
  },
];

export default function MonumentsClient() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Patrimoine"
        title="Monuments"
        script="& mémoire"
        intro="Du palais royal d'Abomey à la Porte du Non-Retour, les monuments du Bénin sont autant de récits de pierre, de banco et de mémoire."
        image="/plan.webp"
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-6">
        {MONUMENTS.map((m, i) => {
          const lieu = LIEUX.find(l => l.id === m.lieuId);
          return (
            <Reveal key={m.name} delay={(i % 2) * 0.06}>
              <article className="group relative h-[320px] overflow-hidden border border-white/10 hover:border-white/40 transition flex flex-col justify-end p-8">
                {m.img ? (
                  <img src={m.img} alt={m.name} className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-flag-v opacity-10 group-hover:opacity-20 transition-all duration-1000" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">{m.city}</span>
                    <span className="w-1 h-5 bg-gradient-flag-v" />
                  </div>
                  <h3 className="font-display text-3xl mb-3">{m.name}</h3>
                  <p className="text-sm text-white/70 leading-relaxed line-clamp-3 mb-4">{m.desc}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>
    </SiteLayout>
  );
}
