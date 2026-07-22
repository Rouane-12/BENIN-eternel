'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';

const ARTISTES = [
  "Angélique Kidjo", "Blaaz", "Nikanor", "Fanicko", "Zeynab", "Crisba",
  "Don Metok", "Pépé Oléka", "Vano Baby", "Faty", "Sessimè", "Amy Mako",
  "Ghix", "Axel Merryl", "Queen Fumi", "Oluwa Kêmy", "Fat B", "Kmal Radji",
  "Conex", "Don", "X-Time", "Amir El Presidente", "Tyaf", "Vi-Phint",
  "Kalamoulaï", "Petit Miguelito", "Nasty Nesta", "Dibi Dobo", "Sèssimè",
  "Willy Mignon", "Boy Kaba", "Don's", "Elifaz", "K-Pat", "Nelly",
  "Nelly Jah", "Kiff No Beat Bénin", "First King", "Siano Babassa",
  "Sossou Saké", "T-Gang", "Nasta", "Nikanor Le Roi", "Manzor", "Almok",
  "El Presidente", "MHD Benin", "Rico's Campos", "Queen Yé", "Ariel Sheney Bénin"
];

const INFLUENCEURS = [
  "Axel Merryl", "Didier Odjo", "Alain Kenneth", "Creol", "Kmal Radji",
  "Priscilia Akle", "Jojo", "Mme Benth", "Hugues Daudet", "Abdel Ibn Adam",
  "Serge Amoussou", "Ulrich Adjovi", "Cossi Gbenonchi", "Wilfried Houngbédji",
  "Merveille Akinocho", "Grâce Talon", "Divine Tognon", "Dine BD",
  "Koffi TV", "Benin Buzz", "Le Révélateur", "La Béninoise", "Tonton Marcel",
  "Cédric Nouatin", "Dénis Sogbossi", "Rina Lifestyle", "Lionel Talon",
  "Smart Benin", "Bénin Découverte", "Arnaud Adjibi", "Richy TV"
];

const EVENEMENTS = [
  "WeLoveEya Festival", "Vodun Days", "Festival International de Porto-Novo",
  "Festival des Masques", "Festival International de Théâtre du Bénin (FITHEB)",
  "Cotonou Couleurs Jazz", "Fête du Vodún", "Quinzaine Nationale de la Culture",
  "Festival Danxomè", "Festival Kokoussi", "Foire Internationale de Cotonou",
  "Benin Investment Forum", "Miss Bénin", "Top 10 Bénin", "Bénin Fashion Week",
  "Festival des Arts et Cultures", "Festival des Rythmes du Monde",
  "Marathon International de Cotonou", "Tour Cycliste International du Bénin",
  "Festival des Saveurs du Bénin", "Salon de l'Entrepreneuriat du Bénin",
  "Benin Fintech Week", "Festival de la Gastronomie Béninoise",
  "Semaine du Numérique", "Festival Hip-Hop Bénin", "Festival des Percussions",
  "Festival International de Parakou", "Carnaval de Ouidah",
  "Fête de l'Igname", "Journées Culturelles des Universités"
];

const ARTISTE_DESCRIPTIONS = [
  "Voix active de la scène musicale béninoise contemporaine",
  "Figure de la nouvelle génération d'artistes du Bénin",
  "Contribue au rayonnement des musiques urbaines béninoises",
  "Artiste engagé dans la diversité des sonorités locales",
  "Porte des influences afro-urbaines sur la scène nationale",
  "Participe à la vitalité de la musique béninoise actuelle",
  "Artiste reconnu au sein de la communauté musicale locale",
  "Explore différents styles au croisement des musiques du Bénin",
];

const INFLUENCEUR_DESCRIPTIONS = [
  "Voix active sur les réseaux sociaux béninois",
  "Créateur de contenu suivi par une communauté locale engagée",
  "Contribue à l'animation numérique de la culture béninoise",
  "Partage régulièrement du contenu autour du Bénin",
  "Figure reconnue de l'écosystème digital béninois",
  "Anime une communauté autour de l'actualité et du lifestyle local",
  "Participe à la visibilité de la culture béninoise en ligne",
  "Créateur impliqué dans la scène digitale locale",
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getDescription(name: string, category: "artiste" | "influenceur"): string {
  const pool = category === "artiste" ? ARTISTE_DESCRIPTIONS : INFLUENCEUR_DESCRIPTIONS;
  return pool[hashString(name) % pool.length];
}

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function ZigZagCard({
  name,
  index,
  category,
}: {
  name: string;
  index: number;
  category: "artiste" | "influenceur" | "evenement";
}) {
  const isLeft = index % 2 === 0;

  const getGradient = () => {
    switch (category) {
      case "artiste":
        return "from-oklch(0.55 0.14 152) via-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27)";
      case "influenceur":
        return "from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92)";
      case "evenement":
        return "from-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27)";
    }
  };

  const getBadgeColor = () => {
    switch (category) {
      case "artiste":
        return "bg-oklch(0.55 0.14 152)";
      case "influenceur":
        return "bg-oklch(0.88 0.17 92) text-black";
      case "evenement":
        return "bg-oklch(0.56 0.23 27)";
    }
  };

  const getCategoryLabel = () => {
    switch (category) {
      case "artiste":
        return "Artiste";
      case "influenceur":
        return "Influenceur";
      case "evenement":
        return "Événement";
    }
  };

  const description =
    category === "evenement" ? null : getDescription(name, category);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      className={`flex items-center gap-6 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className={`w-full max-w-lg ${isLeft ? "text-left" : "text-right"}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/30 transition-all duration-500"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${getGradient()} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 justify-between">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase ${getBadgeColor()}`}>
                {getCategoryLabel()}
              </span>
              <span className="text-[10px] font-mono text-white/30">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-white/90 transition-colors mb-2">
              {name}
            </h3>

            {description && (
              <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors mb-2">
                {description}
              </p>
            )}

            <div className="flex items-center gap-2 mt-4">
              <div className={`w-1 h-6 rounded-sm bg-gradient-to-b ${getGradient()} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white/70 transition-colors">
                Découvrir →
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>

      <div className={`hidden md:block w-20 shrink-0 ${isLeft ? "text-left" : "text-right"}`}>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto" />
      </div>
    </motion.div>
  );
}

export default function CultureBeninoiseClient() {
  const [search, setSearch] = useState("");
  const [artistesShuffled, setArtistesShuffled] = useState<string[]>([]);
  const [influenceursShuffled, setInfluenceursShuffled] = useState<string[]>([]);
  const [evenementsShuffled, setEvenementsShuffled] = useState<string[]>([]);

  useEffect(() => {
    setArtistesShuffled(shuffle(ARTISTES));
    setInfluenceursShuffled(shuffle(INFLUENCEURS));
    setEvenementsShuffled(shuffle(EVENEMENTS));
  }, []);

  const filteredData = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return {
        artistes: artistesShuffled,
        influenceurs: influenceursShuffled,
        evenements: evenementsShuffled,
      };
    }

    return {
      artistes: artistesShuffled.filter(a => a.toLowerCase().includes(query)),
      influenceurs: influenceursShuffled.filter(i => i.toLowerCase().includes(query)),
      evenements: evenementsShuffled.filter(e => e.toLowerCase().includes(query)),
    };
  }, [search, artistesShuffled, influenceursShuffled, evenementsShuffled]);

  return (
    <SiteLayout>
      <PageHero
        kicker="Culture Contemporaine"
        title="Culture"
        script="Béninoise"
        intro="Découvrez les artistes, influenceurs et événements qui participent au rayonnement et à la vitalité de la culture béninoise."
        image="/mask.jpg"
      />

      {/* BARRE DE RECHERCHE */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <Reveal>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-oklch(0.55 0.14 152) via-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27) opacity-20 blur-xl rounded-2xl" />
            <div className="relative flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 hover:border-white/20 transition-colors">
              <Search className="w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Rechercher un artiste, un influenceur ou un événement..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
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

      {/* ARTISTES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <Reveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-10 h-[2px] bg-gradient-to-r from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92)" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Musique & Artistes</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              Artistes du <span className="font-script text-5xl md:text-7xl text-white/90">Bénin</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-lg">
              Découvrez les artistes qui participent au rayonnement de la musique béninoise.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {filteredData.artistes.length > 0 ? (
            filteredData.artistes.map((artiste, index) => (
              <ZigZagCard key={artiste} name={artiste} index={index} category="artiste" />
            ))
          ) : (
            <Reveal>
              <div className="text-center py-16 text-white/40">
                Aucun artiste trouvé
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <div className="border-t border-white/5" />

      {/* INFLUENCEURS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <Reveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-10 h-[2px] bg-gradient-to-r from-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27)" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Créateurs de Contenu</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              Influenceurs & <span className="font-script text-5xl md:text-7xl text-white/90">Créateurs</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-lg">
              Découvrez les créateurs qui participent au développement du numérique béninois.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {filteredData.influenceurs.length > 0 ? (
            filteredData.influenceurs.map((influenceur, index) => (
              <ZigZagCard key={influenceur} name={influenceur} index={index} category="influenceur" />
            ))
          ) : (
            <Reveal>
              <div className="text-center py-16 text-white/40">
                Aucun influenceur trouvé
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <div className="border-t border-white/5" />

      {/* ÉVÉNEMENTS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <Reveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-10 h-[2px] bg-gradient-to-r from-oklch(0.56 0.23 27) to-oklch(0.55 0.14 152)" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Événements & Festivités</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              Événements au <span className="font-script text-5xl md:text-7xl text-white/90">Bénin</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-lg">
              Retrouvez les grands rendez-vous culturels, musicaux, gastronomiques, sportifs et touristiques organisés au Bénin.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {filteredData.evenements.length > 0 ? (
            filteredData.evenements.map((evenement, index) => (
              <ZigZagCard key={evenement} name={evenement} index={index} category="evenement" />
            ))
          ) : (
            <Reveal>
              <div className="text-center py-16 text-white/40">
                Aucun événement trouvé
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
