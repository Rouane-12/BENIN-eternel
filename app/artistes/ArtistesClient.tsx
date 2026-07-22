'use client';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Mic2, Play, Search, Users, Crown, Award } from 'lucide-react';
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

// Palette drapeau du Bénin : or, vert, rouge — hiérarchise le podium
// et donne une identité de couleur cohérente à chaque genre musical.
const FLAG = {
  or: 'oklch(0.88 0.17 92)',
  vert: 'oklch(0.55 0.14 152)',
  rouge: 'oklch(0.56 0.23 27)',
} as const;
const PODIUM_COLORS = [FLAG.or, FLAG.vert, FLAG.rouge];

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

function accentFor(genre: string): string {
  const cats = getCategories(genre);
  if (!cats.length) return FLAG.vert;
  const idx = Math.max(CATEGORIES.indexOf(cats[0]), 0);
  return PODIUM_COLORS[idx % 3];
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
}

function VoteButton({ votes, voted, onVote }: { votes: number; voted: boolean; onVote: (e: React.MouseEvent) => void }) {
  return (
    <motion.button
      onClick={onVote}
      disabled={voted}
      whileTap={!voted ? { scale: 0.85 } : undefined}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase border transition-colors ${voted
        ? "border-red-500/50 text-red-400 cursor-not-allowed"
        : "border-white/15 hover:border-red-500/50 hover:text-red-400"
        }`}
    >
      <motion.span
        animate={voted ? { scale: [1, 1.5, 1] } : { scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Heart className={`w-3 h-3 ${voted ? "fill-red-400" : ""}`} />
      </motion.span>
      {votes}
    </motion.button>
  );
}

// Position et cadence d'entrée de chaque marche du podium.
// 1er au centre (le plus haut), 2e à droite, 3e à gauche.
// Les CARTES ont toutes la même taille — seule la hauteur de la
// marche colorée varie, pour garder un vrai effet de podium.
const PODIUM_META = {
  1: { order: "md:order-2", step: 116, delay: 0.32, label: "Le plus voté", z: 30 },
  2: { order: "md:order-3", step: 76, delay: 0.14, label: "#2", z: 20 },
  3: { order: "md:order-1", step: 76, delay: 0, label: "#3", z: 20 },
} as const;

// Carte "podium" — réservée aux 3 artistes les plus votés du moment.
// Rendue en colonne : carte flottante (taille identique pour les 3)
// + marche colorée sous elle, alignées sur la même ligne de base.
function PodiumCard({
  artiste,
  rank,
  onVote,
  voted,
}: {
  artiste: Artiste;
  rank: 1 | 2 | 3;
  onVote: (id: string) => void;
  voted: boolean;
}) {
  const color = PODIUM_COLORS[rank - 1];
  const meta = PODIUM_META[rank];
  const first = rank === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 20, delay: meta.delay }}
      className={`relative flex flex-col items-center w-full sm:w-[17rem] ${meta.order}`}
      style={{ zIndex: meta.z }}
    >
      {first && (
        <motion.div
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl"
          style={{ background: color }}
          animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.12, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {first && (
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 mb-1.5"
        >
          <Crown className="w-6 h-6" style={{ color }} fill={color} fillOpacity={0.25} />
        </motion.div>
      )}

      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 w-full h-[300px] flex flex-col overflow-hidden rounded-2xl border bg-white/[0.04] backdrop-blur-sm p-6"
        style={{
          borderColor: `color-mix(in oklch, ${color} 50%, transparent)`,
          boxShadow: first ? `0 0 0 1px color-mix(in oklch, ${color} 20%, transparent), 0 20px 40px -20px color-mix(in oklch, ${color} 55%, transparent)` : undefined,
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium"
            style={{ backgroundColor: color, color: 'black' }}
          >
            {first ? <Crown className="w-3 h-3" /> : <Award className="w-3 h-3" />}
            {meta.label}
          </span>
          <VoteButton votes={artiste.votes} voted={voted} onVote={(e) => { e.preventDefault(); onVote(artiste.id); }} />
        </div>

        <a href={artiste.youtubeLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center flex-1 min-h-0">
          <div
            className="flex items-center justify-center rounded-full font-display text-white text-[1.1rem] shrink-0 mb-3 ring-2"
            style={{
              width: 64,
              height: 64,
              background: `linear-gradient(135deg, ${color}, oklch(0.2 0 0))`,
              ['--tw-ring-color' as any]: `color-mix(in oklch, ${color} 40%, transparent)`,
            }}
          >
            {initials(artiste.name)}
          </div>

          <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-white/40 mb-1">
            {artiste.type === "groupe" ? <Users className="w-3 h-3" /> : <Mic2 className="w-3 h-3" />}
            {artiste.type === "groupe" ? "Groupe" : "Solo"}
          </div>
          <h3 className="font-display text-white leading-tight text-center text-lg line-clamp-1">
            {artiste.name}
          </h3>
          <p className="text-[11px] tracking-wide text-white/45 mt-1 text-center line-clamp-1">{artiste.genre}</p>
        </a>

        <a
          href={artiste.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 pt-3 border-t border-white/5 flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/35 hover:text-white/70 transition-colors text-center line-clamp-1"
        >
          <Play className="w-3 h-3 shrink-0" />
          {artiste.mostFamousAlbum}
        </a>
      </motion.div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: meta.step }}
        transition={{ duration: 0.5, delay: meta.delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-0 w-full mt-[-14px] rounded-b-xl flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(180deg, color-mix(in oklch, ${color} 60%, transparent), color-mix(in oklch, ${color} 18%, transparent))`,
          boxShadow: `inset 0 1px 0 color-mix(in oklch, ${color} 75%, white)`,
        }}
      >
        <div
          className="flex items-center justify-center rounded-full ring-2 ring-white/25 shadow-lg"
          style={{ width: 44, height: 44, background: 'color-mix(in oklch, black 35%, transparent)' }}
        >
          <span className="font-display text-xl font-bold text-white select-none leading-none">{rank}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Carte compacte pour l'annuaire complet (masonry).
function DirectoryCard({ artiste, index, onVote, voted }: { artiste: Artiste; index: number; onVote: (id: string) => void; voted: boolean }) {
  const color = accentFor(artiste.genre);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.3), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 4 }}
      className="mb-4 break-inside-avoid rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors duration-300"
      style={{ borderLeftWidth: 3, borderLeftColor: color }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-white/40">
          {artiste.type === "groupe" ? <Users className="w-3 h-3" style={{ color }} /> : <Mic2 className="w-3 h-3" style={{ color }} />}
          {artiste.type === "groupe" ? "Groupe" : "Solo"}
        </span>
        <VoteButton votes={artiste.votes} voted={voted} onVote={(e) => { e.preventDefault(); onVote(artiste.id); }} />
      </div>

      <a href={artiste.youtubeLink} target="_blank" rel="noopener noreferrer" className="block group/link">
        <h3 className="font-display text-lg text-white leading-tight mb-1.5 group-hover/link:text-white/90 transition-colors">
          {artiste.name}
        </h3>
        <p className="text-[11px] tracking-wide mb-1" style={{ color }}>{artiste.genre}</p>
        <p className="text-[11px] text-white/40 italic mb-3">{artiste.mostFamousAlbum}</p>
        <span className="inline-flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase text-white/35 group-hover/link:text-white/60 transition-colors">
          <Play className="w-3 h-3" />
          YouTube
        </span>
      </a>
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

  // Le podium n'a de sens que si au moins 3 artistes ont réellement reçu
  // un vote — sinon on afficherait des profils à 0 vote comme "classés".
  // Le podium ne montre que les artistes ayant reçu au moins un vote :
  // 1 vote quelque part → 1 seul sur le podium, 2 → 2, 3 et plus → le top 3.
  // Aucun vote nulle part → pas de podium du tout.
  const votedAtLeastOnce = useMemo(() => filtered.filter((a) => a.votes > 0), [filtered]);
  const podiumSize = Math.min(votedAtLeastOnce.length, 3);
  const showPodium = category === "Tous" && !search && podiumSize > 0;
  const podium = useMemo(
    () => (showPodium ? [...votedAtLeastOnce].sort((a, b) => b.votes - a.votes).slice(0, podiumSize) : []),
    [votedAtLeastOnce, showPodium, podiumSize]
  );
  // Ceux du podium ne sont plus dupliqués dans l'annuaire en dessous.
  const directory = useMemo(() => {
    if (!showPodium) return filtered;
    const ids = new Set(podium.map((p) => p.id));
    return filtered.filter((a) => !ids.has(a.id));
  }, [filtered, showPodium, podium]);

  return (
    <SiteLayout>
      <PageHero
        kicker="Musique & Arts"
        title="Artistes"
        script="du Bénin"
        intro="Les voix, les rythmes et les talents qui font rayonner la culture musicale béninoise à travers le monde."
        image="/art.webp"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 pt-8 md:pt-10 pb-4">
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
            {CATEGORIES.map((cat, i) => {
              const active = category === cat;
              const dot = cat === "Tous" ? FLAG.vert : PODIUM_COLORS[i % 3];
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] tracking-wide uppercase border transition-all ${active
                    ? "bg-white/10 text-white"
                    : "bg-transparent text-white/60 border-white/15 hover:border-white/35 hover:text-white/90"
                    }`}
                  style={active ? { borderColor: dot } : undefined}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dot }} />
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>
      </section>

      <div className="border-t border-white/5" />

      {showPodium && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-14">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-oklch(0.88 0.17 92) to-oklch(0.56 0.23 27)" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Palmarès du moment</span>
            </div>
          </Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-center gap-6 md:gap-12">
            {podium[0] && <PodiumCard artiste={podium[0]} rank={1} onVote={handleVote} voted={mounted && votedItems.has(podium[0].id)} />}
            {podium[1] && <PodiumCard artiste={podium[1]} rank={2} onVote={handleVote} voted={mounted && votedItems.has(podium[1].id)} />}
            {podium[2] && <PodiumCard artiste={podium[2]} rank={3} onVote={handleVote} voted={mounted && votedItems.has(podium[2].id)} />}
          </div>
        </section>
      )}

      <div className="border-t border-white/5" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-14">
        <Reveal>
          <div className="mb-8 md:mb-10 flex items-end justify-between flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92)" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Talents béninois</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl">
                Annuaire des <span className="font-script text-3xl md:text-5xl text-white/90">Artistes</span>
              </h2>
            </div>
            <span className="text-[11px] tracking-widest uppercase text-white/35">
              {directory.length} résultat{directory.length > 1 ? "s" : ""}
            </span>
          </div>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {directory.length > 0 ? (
              directory.map((artiste, index) => (
                <DirectoryCard
                  key={artiste.id}
                  artiste={artiste}
                  index={index}
                  onVote={handleVote}
                  voted={mounted && votedItems.has(artiste.id)}
                />
              ))
            ) : filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 text-white/40"
              >
                Aucun artiste trouvé
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </section>
    </SiteLayout>
  );
}