import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Play, Users, Mic2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Artistes du Bénin — Musique & Création",
  description: "Découvrez les artistes qui font vibrer la musique béninoise.",
  openGraph: { url: "/artistes" },
  alternates: { canonical: "/artistes" },
};

interface Artiste {
  name: string;
  type: "solo" | "groupe";
  genre: string;
  most_famous_album: string;
  youtube_link: string;
}

const ARTISTES: Artiste[] = [
  { name: "Angéļīque Kidjo", type: "solo", genre: "Afro-funk / World music / Afrobeat", most_famous_album: "Djin Djin (2007)", youtube_link: "https://www.youtube.com/results?search_query=Ang%C3%A9lique+Kidjo+Djin+Djin" },
  { name: "Zeynab Habib", type: "solo", genre: "World music / Afro-soul", most_famous_album: "Zeynab (2012)", youtube_link: "https://www.youtube.com/results?search_query=Zeynab+Habib" },
  { name: "Gangbé Brass Band", type: "groupe", genre: "Vodun-jazz / Afrobeat / Jazz", most_famous_album: "Gangbé (1996)", youtube_link: "https://www.youtube.com/results?search_query=Gangb%C3%A9+Brass+Band" },
  { name: "Sagbohan Danialou", type: "solo", genre: "Musique traditionnelle / Afrobeat", most_famous_album: "Sagbohan Danialou", youtube_link: "https://www.youtube.com/results?search_query=Sagbohan+Danialou" },
  { name: "Gnonnas Pedro", type: "solo", genre: "Salsa / Afro-Cubain", most_famous_album: "Solo Gnonnas Pedro", youtube_link: "https://www.youtube.com/results?search_query=Gnonnas+Pedro" },
  { name: "Vincent Ahehehinnou", type: "solo", genre: "Afrobeat / Funk", most_famous_album: "Best Woman (2013)", youtube_link: "https://www.youtube.com/results?search_query=Vincent+Ahehehinnou" },
  { name: "Orchestre Poly-Rythmo de Cotonou", type: "groupe", genre: "Afrobeat / Funk / Vodun", most_famous_album: "Poly Rythmo 76 (1976)", youtube_link: "https://www.youtube.com/watch?v=LNlGn_6ghus" },
  { name: "Lokonon André & Les Volcans", type: "groupe", genre: "Afrobeat / Funk", most_famous_album: "Les Volcans de Cotonou", youtube_link: "https://www.youtube.com/results?search_query=Lokonon+Andr%C3%A9+Volcans" },
  { name: "Ignace De Souza & The Melody Aces", type: "groupe", genre: "Afrobeat / Soul", most_famous_album: "The Melody Aces", youtube_link: "https://www.youtube.com/results?search_query=Ignace+De+Souza+Melody+Aces" },
  { name: "Antoine Dougbé", type: "solo", genre: "Afrobeat / Funk", most_famous_album: "Antoine Dougbé", youtube_link: "https://www.youtube.com/results?search_query=Antoine+Dougb%C3%A9" },
  { name: "Dibi Dobo", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "Dibi Dobo", youtube_link: "https://www.youtube.com/results?search_query=Dibi+Dobo" },
  { name: "Axel Merryl", type: "solo", genre: "Hip-hop / R&B / Urbain", most_famous_album: "TEMPERATURE (2023)", youtube_link: "https://www.youtube.com/watch?v=51Tz_h5fnDM" },
  { name: "X-Time", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "X-Time", youtube_link: "https://www.youtube.com/results?search_query=X-Time+b%C3%A9nin" },
  { name: "Vano Baby", type: "solo", genre: "Hip-hop / R&B", most_famous_album: "Vano Baby", youtube_link: "https://www.youtube.com/results?search_query=Vano+Baby" },
  { name: "TMA CRUSH", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "TMA CRUSH", youtube_link: "https://www.youtube.com/results?search_query=TMA+CRUSH" },
  { name: "Nikanor", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "Nikanor", youtube_link: "https://www.youtube.com/results?search_query=Nikanor+b%C3%A9nin" },
  { name: "Tgang", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Tgang", youtube_link: "https://www.youtube.com/results?search_query=Tgang" },
  { name: "Praouda", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "Praouda", youtube_link: "https://www.youtube.com/results?search_query=Praouda" },
  { name: "Crisba", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Crisba", youtube_link: "https://www.youtube.com/results?search_query=Crisba+b%C3%A9nin" },
  { name: "GG Lapino", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "GG Lapino", youtube_link: "https://www.youtube.com/results?search_query=GG+Lapino" },
  { name: "Bobo Wê", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Bobo Wê", youtube_link: "https://www.youtube.com/results?search_query=Bobo+W%C3%AA" },
  { name: "Fanicko", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Fanicko", youtube_link: "https://www.youtube.com/results?search_query=Fanicko" },
  { name: "Sessimé", type: "solo", genre: "Afrobeat / Urbain", most_famous_album: "Sessimé", youtube_link: "https://www.youtube.com/results?search_query=Sessim%C3%A9" },
  { name: "Siano Babassa", type: "solo", genre: "Afrobeat / Urbain", most_famous_album: "Siano Babassa", youtube_link: "https://www.youtube.com/results?search_query=Siano+Babassa" },
  { name: "Ghix", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Ghix", youtube_link: "https://www.youtube.com/results?search_query=Ghix+b%C3%A9nin" },
  { name: "Blaaz", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "Blaaz", youtube_link: "https://www.youtube.com/results?search_query=Blaaz+b%C3%A9nin" },
  { name: "Houégnon Gbèzé Junior", type: "solo", genre: "Urbain / Afrobeat", most_famous_album: "Houégnon Gbèzé Junior", youtube_link: "https://www.youtube.com/results?search_query=Hou%C3%A9gnon+Gb%C3%A8z%C3%A9+Junior" },
  { name: "D-Blue", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "D-Blue", youtube_link: "https://www.youtube.com/results?search_query=D-Blue+b%C3%A9nin" },
  { name: "Rabby Slo", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "Rabby Slo", youtube_link: "https://www.youtube.com/results?search_query=Rabby+Slo" },
  { name: "Kmal Radji", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Kmal Radji", youtube_link: "https://www.youtube.com/results?search_query=Kmal+Radji" },
  { name: "Richard Flash", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Richard Flash", youtube_link: "https://www.youtube.com/results?search_query=Richard+Flash+b%C3%A9nin" },
  { name: "Ricos Campos", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Ricos Campos", youtube_link: "https://www.youtube.com/results?search_query=Ricos+Campos" },
  { name: "Riss Cool", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "Riss Cool", youtube_link: "https://www.youtube.com/results?search_query=Riss+Cool" },
  { name: "Robinson Sipa", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Robinson Sipa", youtube_link: "https://www.youtube.com/results?search_query=Robinson+Sipa" },
  { name: "Patrick Ruffino", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Patrick Ruffino", youtube_link: "https://www.youtube.com/results?search_query=Patrick+Ruffino" },
  { name: "Sabbat Nazaire", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "Sabbat Nazaire", youtube_link: "https://www.youtube.com/results?search_query=Sabbat+Nazaire" },
  { name: "Stan Tohon", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Stan Tohon", youtube_link: "https://www.youtube.com/results?search_query=Stan+Tohon" },
  { name: "Tyaf", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Tyaf", youtube_link: "https://www.youtube.com/results?search_query=Tyaf+b%C3%A9nin" },
  { name: "Wilf Enighma", type: "solo", genre: "Hip-hop / Rap", most_famous_album: "Wilf Enighma", youtube_link: "https://www.youtube.com/results?search_query=Wilf+Enighma" },
  { name: "Gbèzé", type: "solo", genre: "Hip-hop / Urbain", most_famous_album: "Gbèzé", youtube_link: "https://www.youtube.com/results?search_query=Gb%C3%A8z%C3%A9+b%C3%A9nin" },
  { name: "Gabo Brown", type: "solo", genre: "World music / Afrobeat", most_famous_album: "Gabo Brown", youtube_link: "https://www.youtube.com/results?search_query=Gabo+Brown+b%C3%A9nin" },
  { name: "Discafric Band", type: "groupe", genre: "Afrobeat / Funk", most_famous_album: "Discafric Band", youtube_link: "https://www.youtube.com/results?search_query=Discafric+Band" },
  { name: "Le Super Borgou de Parakou", type: "groupe", genre: "Musique traditionnelle / Afrobeat", most_famous_album: "Super Borgou de Parakou", youtube_link: "https://www.youtube.com/results?search_query=Super+Borgou+de+Parakou" },
  { name: "Les Sympathics de Porto Novo", type: "groupe", genre: "Afrobeat / Funk", most_famous_album: "Les Sympathics", youtube_link: "https://www.youtube.com/results?search_query=Les+Sympathics+de+Porto+Novo" },
  { name: "STAR FEMININE BAND", type: "groupe", genre: "Afrobeat / Funk", most_famous_album: "Star Feminine Band", youtube_link: "https://www.youtube.com/results?search_query=Star+Feminine+Band" },
  { name: "Alèkpèhanhou", type: "solo", genre: "Musique traditionnelle / Vodun", most_famous_album: "Alèkpèhanhou", youtube_link: "https://www.youtube.com/results?search_query=Al%C3%A8kp%C3%A8hanhou" },
  { name: "Jah Baba", type: "solo", genre: "Reggae / Afrobeat", most_famous_album: "Jah Baba", youtube_link: "https://www.youtube.com/results?search_query=Jah+Baba+b%C3%A9nin" },
  { name: "Johnny Sourou", type: "solo", genre: "Afrobeat / Funk", most_famous_album: "Johnny Sourou", youtube_link: "https://www.youtube.com/results?search_query=Johnny+Sourou" },
  { name: "Jospinto", type: "solo", genre: "Afrobeat / Urbain", most_famous_album: "Jospinto", youtube_link: "https://www.youtube.com/results?search_query=Jospinto" },
  { name: "El Jowania", type: "solo", genre: "Afrobeat / Urbain", most_famous_album: "El Jowania", youtube_link: "https://www.youtube.com/results?search_query=El+Jowania" },
];

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

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function ArtistCard({ artiste, index }: { artiste: Artiste; index: number }) {
  return (
    <motion.a
      layout
      href={artiste.youtube_link}
      target="_blank"
      rel="noopener noreferrer"
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
          <Play className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
        </div>

        <h3 className="font-display text-lg md:text-xl text-white leading-tight mb-2">
          {artiste.name}
        </h3>

        <p className="text-[11px] tracking-wide text-white/45 mb-1">
          {artiste.genre}
        </p>

        <p className="text-[11px] text-white/35 italic">
          {artiste.most_famous_album}
        </p>
      </div>

      <div className="relative z-10 mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
        <div className="w-1 h-1 rounded-full bg-gradient-to-r from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92)" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-white/35 group-hover:text-white/60 transition-colors">
          Ecouter sur YouTube
        </span>
      </div>
    </motion.a>
  );
}

export default function ArtistesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("Tous");
  const [artistesShuffled, setArtistesShuffled] = useState<Artiste[]>([]);

  useEffect(() => {
    setArtistesShuffled(shuffle(ARTISTES));
  }, []);

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();
    return artistesShuffled.filter((a) => {
      const matchesSearch =
        !query ||
        a.name.toLowerCase().includes(query) ||
        a.genre.toLowerCase().includes(query) ||
        a.most_famous_album.toLowerCase().includes(query);
      const matchesCategory = category === "Tous" || getCategories(a.genre).includes(category);
      return matchesSearch && matchesCategory;
    });
  }, [search, category, artistesShuffled]);

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
                <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">Talents Béninois</span>
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
                <ArtistCard key={artiste.name} artiste={artiste} index={index} />
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
