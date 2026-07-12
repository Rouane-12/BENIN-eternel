'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Search, Sparkles } from 'lucide-react';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { CATEGORIES_STARS, CategorieStars } from '@/data/stars';
import { useVotes } from '@/hooks/useVotes';
import initialInfluenceurs from '@/data/influenceurs.json';

interface Influenceur {
  id: string;
  nom: string;
  categorie: string;
  bio: string;
  votes: number;
}

function getCategories(categorie: string): CategorieStars[] {
  const c = categorie.toLowerCase();
  const cats = new Set<CategorieStars>();
  if (c.includes("humour") || c.includes("sketch")) cats.add("Humour");
  if (c.includes("musique") || c.includes("cinéma")) cats.add("Musique / Cinéma");
  if (c.includes("lifestyle") || c.includes("mode") || c.includes("beauté") || c.includes("danse") || c.includes("e-commerce")) cats.add("Lifestyle / Mode / Beauté");
  if (c.includes("divertissement") || c.includes("famille") || c.includes("collectif")) cats.add("Divertissement");
  if (c.includes("cuisine") || c.includes("food")) cats.add("Cuisine / Food");
  if (c.includes("entrepreneuriat")) cats.add("Entrepreneuriat");
  if (c.includes("actualité") || c.includes("actualités")) cats.add("Actualité");
  if (c.includes("agriculture")) cats.add("Agriculture");
  return Array.from(cats);
}

function InfluencerCard({ influenceur, index, onVote, voted }: { influenceur: Influenceur, index: number; onVote: (id: string) => void; voted: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.4), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/25 hover:bg-white/[0.04] transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92) opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase bg-white text-black">
            <Sparkles className="w-3 h-3" />
            Influenceur
          </span>
          <button
            onClick={() => onVote(influenceur.id)}
            disabled={voted}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase border transition-colors ${voted
              ? "border-red-500/50 text-red-400 cursor-not-allowed"
              : "border-white/15 hover:border-red-500/50 hover:text-red-400"
              }`}
          >
            <Heart className={`w-3 h-3 ${voted ? "fill-red-400" : ""}`} />
            {influenceur.votes}
          </button>
        </div>

        <h3 className="font-display text-lg md:text-xl text-white leading-tight mb-2">
          {influenceur.nom}
        </h3>

        <p className="text-[11px] tracking-wide text-white/45 mb-3">
          {influenceur.categorie}
        </p>

        <p className="text-[12px] text-white/55 leading-relaxed line-clamp-4">
          {influenceur.bio}
        </p>
      </div>
    </motion.div>
  );
}

export default function StarsDuBenin() {
  const [search, setSearch] = useState("");
  const [categorie, setCategorie] = useState<CategorieStars>("Tous");
  const [influenceurs, handleVote, votedItems] = useVotes("influenceurs-votes", initialInfluenceurs as unknown as Influenceur[]);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return influenceurs.filter((i) => {
      const matchesSearch =
        !query ||
        i.nom.toLowerCase().includes(query) ||
        i.categorie.toLowerCase().includes(query) ||
        i.bio.toLowerCase().includes(query);
      const matchesCategorie = categorie === "Tous" || getCategories(i.categorie).includes(categorie);
      return matchesSearch && matchesCategorie;
    });
  }, [search, categorie, influenceurs]);

  return (
    <SiteLayout>
      <PageHero
        kicker="Créateurs & Influenceurs"
        title="Influenceurs"
        script="du Bénin"
        intro="Les voix du numérique béninois : créateurs de contenu, influenceurs et personnalités qui animent les réseaux sociaux."
        image="/mask.jpg"
      />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-8 md:pt-10 pb-4">
        <Reveal>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92) opacity-20 blur-xl rounded-xl" />
            <div className="relative flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 md:px-6 py-3 hover:border-white/20 transition-colors">
              <Search className="w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Rechercher un influenceur, une catégorie..."
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

        <Reveal>
          <div className="flex flex-wrap gap-2 mt-4">
            {CATEGORIES_STARS.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategorie(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] tracking-wide uppercase border transition-colors ${categorie === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/15 hover:border-white/35 hover:text-white/90"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="border-t border-white/5" />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-10 md:py-14">
        <Reveal>
          <div className="mb-8 md:mb-10 flex items-end justify-between flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Créateurs Numériques</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl">
                Influenceurs & <span className="font-script text-3xl md:text-5xl text-white/90">Créateurs</span>
              </h2>
            </div>
            <span className="text-[11px] tracking-widest uppercase text-white/35">
              {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
            </span>
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((influenceur, index) => (
                <InfluencerCard
                  key={influenceur.id}
                  influenceur={influenceur}
                  index={index}
                  onVote={handleVote}
                  voted={votedItems.has(influenceur.id)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16 text-white/40"
              >
                Aucun influenceur trouvé
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
