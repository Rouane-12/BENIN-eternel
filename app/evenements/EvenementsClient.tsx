'use client';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';


const FEATURED_EVENEMENTS = [
  'WeLoveEya Festival',
  'Vodun Days',
  'Fête de l\'Igname',
];

const OTHER_EVENEMENTS = [
  'Festival International de Porto-Novo', 'Festival des Masques',
  'Cotonou Couleurs Jazz', 'Festival Danxomè',
  'Festival Kokoussi', 'Foire Internationale de Cotonou',
  'Bénin Fashion Week', 'Festival des Arts et Cultures',
  'Marathon International de Cotonou', 'Festival des Saveurs du Bénin',
  'Festival de la Gastronomie Béninoise', 'Festival International de Parakou',
  'Carnaval de Ouidah', 'Fête de Nonvitcha (Grand-Popo)'
];

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getDiscoverUrl(name: string) {
  return `https://www.google.com/search?q=${encodeURIComponent(`${name} Bénin`)}`;
}

function EventCard({ name, index }: { name: string; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.02, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      className={`flex items-center gap-4 md:gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className={`w-full ${isLeft ? 'text-left' : 'text-right'}`}>
        <motion.a
          href={getDiscoverUrl(name)}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ duration: 0.25 }}
          className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 md:p-6 hover:border-white/30 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27) opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3 justify-between">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase bg-white text-black">
                Événement
              </span>
              <span className="text-[10px] font-mono text-white/30">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-white group-hover:text-white/90 transition-colors">
              {name}
            </h3>

            <div className="flex items-center gap-2 mt-3">
              <div className="w-1 h-4 rounded-sm bg-gradient-to-b from-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27) opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white/70 transition-colors">
                Participer →
              </span>
            </div>
          </div>
        </motion.a>
      </div>

      <div className={`hidden md:block w-16 shrink-0 ${isLeft ? 'text-left' : 'text-right'}`}>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto" />
      </div>
    </motion.div>
  );
}

export default function EvenementsClient() {
  const [search, setSearch] = useState('');
  const [evenementsShuffled, setEvenementsShuffled] = useState<string[]>([]);

  useEffect(() => {
    setEvenementsShuffled([...FEATURED_EVENEMENTS, ...shuffle(OTHER_EVENEMENTS)]);
  }, []);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) return evenementsShuffled;
    return evenementsShuffled.filter(e => e.toLowerCase().includes(query));
  }, [search, evenementsShuffled]);

  return (
    <SiteLayout>
      <PageHero
        kicker="Rendez-vous"
        title="Événements"
        script="au Bénin"
        intro="Les festivals, cérémonies, compétitions et grands rendez-vous qui animent la vie culturelle, artistique et sportive du pays."
        image="/histoire.webp"
      />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12">
        <Reveal>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27) opacity-20 blur-xl rounded-xl" />
            <div className="relative flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 hover:border-white/20 transition-colors">
              <Search className="w-4 h-4 md:w-5 md:h-5 text-white/50" />
              <input
                type="text"
                placeholder="Rechercher un événement..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="text-white/40 hover:text-white/70 text-xs uppercase tracking-widest transition-colors"
                >
                  Effacer
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </section>

      <div className="border-t border-white/5" />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-16">
        <Reveal>
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27)" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Agenda Culturel</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl mb-3">
              Festivités & <span className="font-script text-4xl md:text-6xl text-white/90">Rendez-vous</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-sm md:text-base">
              Les moments forts de la culture béninoise tout au long de l'année.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4 md:space-y-6">
          {filtered.length > 0 ? (
            filtered.map((evenement, index) => (
              <EventCard key={evenement} name={evenement} index={index} />
            ))
          ) : (
            <Reveal>
              <div className="text-center py-12 text-white/40">
                Aucun événement trouvé
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}