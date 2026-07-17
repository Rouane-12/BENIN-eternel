'use client';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Mic2, Play, Search, Users } from 'lucide-react';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { useVotes } from '@/hooks/useVotes';
import initialArtistes from '@/data/artistes.json';

interface Artiste {
  id: string;
  name: string;
  type: "solo" | "groupe";
  genre: string;
  mostFamousAlbum: string;
  youtubeLink: string;
  votes: number;
}

const CATEGORIES = [
  "Tous",
  "Afrobeat / Funk",
  "Hip-hop / Urbain",
  "Traditionnel / Vodun",
  "World Music",
  "Reggae",
  "Jazz",
  "Salsa",
] as const;

type Category = typeof CATEGORIES[number];

function getCategories(genre: string): Category[] {
  const g = genre.toLowerCase();
  const cats = new Set<Category>();
  if (g.includes("afrobeat") || g.includes("funk") || g.includes("soul") || g.includes("urbain")) cats.add("Afrobeat / Funk");
  if (g.includes("hip-hop") || g.includes("rap") || g.includes("r&b")) cats.add("Hip-hop / Urbain");
  if (g.includes("traditionnelle") || g.includes("vodun")) cats.add("Traditionnel / Vodun");
  if (g.includes("world music")) cats.add("World Music");
  if (g.includes("reggae")) cats.add("Reggae");
  if (g.includes("jazz")) cats.add("Jazz");
  if (g.includes("salsa") || g.includes("cubain")) cats.add("Salsa");
  return Array.from(cats);
}

function ArtistCard({ artiste, index, onVote, voted }: { artiste: Artiste; index: number; onVote: (id: string) => void; voted: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.4), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-white/25 hover:bg-white/[0.04] transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-oklch(0.55 0.14 152) via-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27) opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase bg-white text-black">
            {artiste.type === "groupe" ? <Users className="w-3 h-3" /> : <Mic2 className="w-3 h-3" />}
            {artiste.type === "groupe" ? "Groupe" : "Solo"}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              onVote(artiste.id);
            }}
            disabled={voted}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase border transition-colors ${voted
              ? "border-red-500/50 text-red-400 cursor-not-allowed"
              : "border-white/15 hover:border-red-500/50 hover:text-red-400"
              }`}
          >
            <Heart className={`w-3 h-3 ${voted ? "fill-red-400" : ""}`} />
            {artiste.votes}
          </button>
        </div>

        <a
          href={artiste.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="font-display text-lg md:text-xl text-white leading-tight mb-2 group-hover:text-white/90 transition-colors">
            {artiste.name}
          </h3>

          <p className="text-[11px] tracking-wide text-white/45 mb-1">
            {artiste.genre}
          </p>

          <p className="text-[11px] text-white/35 italic">
            {artiste.mostFamousAlbum}
          </p>
        </a>
      </div>

      <div className="relative z-10 mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
        <div className="w-1 h-1 rounded-full bg-gradient-to-r from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92)" />
        <a
          href={artiste.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.25em] uppercase text-white/35 group-hover:text-white/60 transition-colors flex items-center gap-1"
        >
          <Play className="w-3 h-3" />
          Ecouter sur YouTube
        </a>
      </div>
    </motion.div>
  );
}

export default function ArtistesClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("Tous");
  const [mounted, setMounted] = useState(false);
  const scope = category === "Tous" ? "global" : category;
  const [artistes, handleVote, votedItems] = useVotes<Artiste>("/api/votes/artistes", initialArtistes as unknown as Artiste[], scope);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return artistes.filter((a) => {
      const matchesSearch =
        !query ||
        a.name.toLowerCase().includes(query) ||
        a.genre.toLowerCase().includes(query) ||
        a.mostFamousAlbum.toLowerCase().includes(query);
      const matchesCategory = category === "Tous" || getCategories(a.genre).includes(category);
      return matchesSearch && matchesCategory;
    });
  }, [search, category, artistes]);

  return (
    <SiteLayout>
      <PageHero
        kicker="Musique & Arts"
        title="Artistes"
        script="du Bénin"
        intro="Les voix, les rythmes et les talents qui font rayonner la culture musicale béninoise à travers le monde."
        image="/art.jpg"
      />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-8 md:pt-10 pb-4">
        <Reveal>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-oklch(0.55 0.14 152) via-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27) opacity-20 blur-xl rounded-xl" />
            <div className="relative flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 md:px-6 py-3 hover:border-white/20 transition-colors">
              <Search className="w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Rechercher un artiste, un genre..."
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
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] tracking-wide uppercase border transition-colors ${category === cat
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
                <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92)" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Talents béninois</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl">
                Artistes & <span className="font-script text-3xl md:text-5xl text-white/90">Musiciens</span>
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
              filtered.map((artiste, index) => (
                <ArtistCard
                  key={artiste.id}
                  artiste={artiste}
                  index={index}
                  onVote={handleVote}
                  voted={mounted && votedItems.has(artiste.id)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16 text-white/40"
              >
                Aucun artiste trouvé
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </SiteLayout>
  );
}