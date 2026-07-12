'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { SiteLayout } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import ganvie from '@/assets/ganvie.webp';
import mask from '@/assets/mask.jpg';
import abomey from '@/assets/royaume.png';
import pendjari from '@/assets/pendjari.jpg';
import beach from '@/assets/erevan.webp';
import fond from '@/assets/fond.jpg';
import festival from '@/assets/festival.jpg';
import ouidah from '@/assets/ouidah.webp';
import femme from '@/assets/femme.png';
import africa from '@/assets/africa.png';
import f1 from '@/assets/f1.jpg';
import f2 from '@/assets/f2.jpg';

const CHAPTERS = [
  { id: "histoire", href: "/histoire", title: "Les royaumes", kicker: "Mémoire", img: abomey.src, text: "De Gangnihessou à Béhanzin — trois siècles de monarchie fon racontés." },
  { id: "culture", href: "/culture", title: "Vodún & arts", kicker: "Sacré", img: mask.src, text: "Religion d'État, bronzes d'Abomey, tentures, danses Egungun et Zangbéto." },
  { id: "tourisme", href: "/tourisme", title: "Ganvié", kicker: "Merveille", img: ganvie.src, text: "La cité lacustre suspendue sur le lac Nokoué." },
  { id: "plages", href: "/plages", title: "Côte atlantique", kicker: "Sable & océan", img: beach.src, text: "Grand-Popo, Fidjrossè, Route des Pêches — l'or de la côte." },
  { id: "nature", href: "/tourisme", title: "Parcs Pendjari & W", kicker: "Sauvage", img: pendjari.src, text: "Éléphants, lions, guépards et baobabs millénaires." },
  { id: "ouidah", href: "/monuments", title: "Ouidah", kicker: "Route des Esclaves", img: ouidah.src, text: "Porte du Non-Retour, temple des Pythons, Forêt sacrée." },
];

const HERO_SLIDES = [fond.src, festival.src, f1.src, f2.src];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 60]);
  const heroScale = useTransform(heroProgress, [0, 1], [1.05, 1.12]);
  const heroOpacity = useTransform(heroProgress, [0.5, 1], [1, 0]);

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100vh] -mt-16">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0">
            <AnimatePresence>
              <motion.img
                key={slideIndex}
                src={HERO_SLIDES[slideIndex]}
                alt="Le Bénin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ y: heroY, scale: heroScale }}
              />
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/85 via-[var(--background)]/40 to-[var(--background)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/40 to-transparent" />
          <div className="absolute inset-0 noise" />

          <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-start pt-28 md:pt-32 pb-56 md:pb-64">
            <motion.div style={{ opacity: heroOpacity }} className="z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-10 h-[3px] bg-gradient-flag" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-white/80">
                  Afrique de l'Ouest · Côte atlantique
                </span>
              </div>
              <h1 className="leading-[0.85]">
                <span className="block font-display text-5xl md:text-7xl lg:text-[6.5rem] tracking-tight text-white">
                  BÉNIN
                </span>
                <span className="block font-script text-6xl md:text-8xl lg:text-[9rem] text-white/95 -mt-2 md:-mt-4">
                  Éternel
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg md:text-xl text-white/75 leading-relaxed">
                Terre de royaumes, de traditions, de culture et de merveilles naturelles.
                Bienvenue au berceau du Vodún.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/tourisme"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium tracking-[0.2em] uppercase text-xs rounded-full hover:bg-white/90 transition-all hover:gap-5 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                >
                  Explorer le Bénin <span>→</span>
                </Link>
                <Link
                  href="/histoire"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-colors uppercase tracking-[0.2em] text-xs rounded-full backdrop-blur-sm"
                >
                  Découvrir l'histoire
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-8 text-[10px] tracking-[0.3em] uppercase text-white/50">
                <div><span className="text-white font-display text-2xl normal-case tracking-normal mr-2">12</span>départements</div>
                <div><span className="text-white font-display text-2xl normal-case tracking-normal mr-2">77</span>communes</div>
                <div className="hidden sm:block"><span className="text-white font-display text-2xl normal-case tracking-normal mr-2">UNESCO</span>Abomey</div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Diapositive ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${i === slideIndex ? "w-8 bg-white" : "w-3 bg-white/30"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative border-t border-white/10 py-6 bg-[var(--background)]">
        <motion.div
          className="flex gap-16 whitespace-nowrap text-white/40 font-display text-2xl md:text-4xl"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span>Dahomey</span><span className="text-white/20">·</span>
              <span>Vodún</span><span className="text-white/20">·</span>
              <span>Amazones</span><span className="text-white/20">·</span>
              <span>Ganvié</span><span className="text-white/20">·</span>
              <span>Pendjari</span><span className="text-white/20">·</span>
              <span>Ouidah</span><span className="text-white/20">·</span>
              <span>Abomey</span><span className="text-white/20">·</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CHAPTERS */}
      <section className="relative pt-8 md:pt-10 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4">Chapitres</div>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            Un pays,
            <span className="font-script text-6xl md:text-8xl text-white/90 ml-3 align-middle">mille récits.</span>
          </h2>
          <p className="max-w-2xl text-white/60 text-lg">
            De la côte atlantique aux savanes du nord, chaque région du Bénin déploie son propre univers.
          </p>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <Link href={s.href}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden bg-[var(--secondary)] aspect-[4/5] cursor-pointer ring-1 ring-white/0 hover:ring-white/10 transition-all duration-500"
                >
                  <motion.img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-65 transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="text-[10px] tracking-[0.4em] uppercase text-white mb-3">{s.kicker}</div>
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-3">{s.title}</h3>
                    <p className="text-sm text-white/70 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 ease-out">
                      {s.text}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Découvrir <span>→</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 text-[10px] font-mono text-white/60">
                    {String(i + 1).padStart(2, "0")} / {String(CHAPTERS.length).padStart(2, "0")}
                  </div>
                  <div className="absolute top-4 right-4 w-1.5 h-6 bg-gradient-flag-v rounded-sm" />
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-adinkra opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              src={mask.src}
              alt="Masque cérémoniel béninois"
              loading="lazy"
              className="w-full max-w-md mx-auto drop-shadow-[0_30px_60px_rgba(255,255,255,0.08)]"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute -inset-10 -z-10 rounded-full bg-white/5 blur-3xl" />
          </motion.div>
          <Reveal>
            <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4">Le masque parle</div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              <span className="font-script text-6xl md:text-7xl block">Quand le bois</span>
              devient esprit.
            </h2>
            <p className="mt-8 text-lg text-white/70 leading-relaxed">
              Au Bénin, le masque n'est pas un objet : c'est un passage. Sculpté par des mains
              initiées, il porte la voix des ancêtres, danse les saisons, et relie le vivant
              à l'invisible. Egungun, Guèlèdè, Zangbéto — chaque masque est une mémoire.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
              {[["54", "Groupes ethniques"], ["UNESCO", "Palais d'Abomey"], ["10 janv.", "Fête du Vodún"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-white">{n}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">{l}</div>
                </div>
              ))}
            </div>
            <Link href="/culture" className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-white border-b border-white/30 hover:border-white pb-1">
              Explorer la culture →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FESTIVAL CTA */}
      <section className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm ring-1 ring-white/5">
            <img src={festival.src} alt="Festival béninois" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/40 to-transparent" />
            <div className="relative p-12 md:p-20">
              <div className="text-[10px] tracking-[0.4em] uppercase text-white/70 mb-4">Festivals & rythmes</div>
              <h2 className="font-display text-4xl md:text-6xl max-w-2xl leading-tight">
                Toute l'année, le Bénin vibre au rythme des tambours.
              </h2>
              <p className="mt-6 max-w-xl text-white/70">
                Vodun Days en janvier, Nonvitcha en mai, Gani à Nikki en novembre :
                chaque saison a son festival, sa transe et ses récits.
              </p>
              <Link
                href="/culture"
                className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-white text-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all"
              >
                Voir les festivals →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FEMMES BÉNINOISES */}
      <section className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4">Force & Élégance</div>
            <h2 className="font-display text-5xl md:text-7xl mb-8 leading-tight">
              L'âme du Bénin est <br />
              <span className="font-script text-6xl md:text-8xl text-white/90">une femme.</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Des redoutables Amazones du Dahomey aux commerçantes dynamiques des marchés de Dantokpa,
              la femme béninoise est le pilier de la nation. Gardienne des traditions et moteur de l'économie,
              elle incarne une résilience et une grâce qui forgent l'identité du pays.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-white font-display">01</div>
                <div>
                  <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-1">Héritage des Agoodjié</h4>
                  <p className="text-sm text-white/50">L'unique armée féminine au monde, symbole de bravoure universel.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-white font-display">02</div>
                <div>
                  <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-1">Influence Culturelle</h4>
                  <p className="text-sm text-white/50">Maitresses de l'art culinaire et des chants traditionnels sacrés.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-sm">
              <img src={femme.src} alt="Femme béninoise" className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -inset-4 border border-white/5 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-flag opacity-10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* AFRIQUE & BÉNIN */}
      <section className="relative py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 relative flex justify-center group/africa"
            >
              <img
                src={africa.src}
                alt="Afrique"
                className="w-full max-w-sm opacity-80 mix-blend-screen grayscale group-hover/africa:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 to-transparent pointer-events-none" />
            </motion.div>

            <div className="lg:col-span-3">
              <Reveal>
                <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4">Le Quartier Latin de l'Afrique</div>
                <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
                  Petit par la taille, <br />
                  <span className="text-white/40 italic font-light">grand par l'esprit.</span>
                </h2>
                <p className="text-xl text-white/80 leading-relaxed mb-10 italic">
                  "Le Bénin est à l'Afrique ce que le sel est à la cuisine : une essence indispensable qui donne toute sa saveur au continent."
                </p>
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h3 className="text-white font-display text-2xl">Un Phare Culturel</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Malgré sa modeste superficie, le Bénin rayonne sur toute l'Afrique par sa stabilité démocratique,
                      son excellence intellectuelle et la profondeur de ses racines spirituelles qui ont traversé l'Atlantique.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-white font-display text-2xl">Carrefour des Mondes</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      De l'ancien Dahomey à la nation moderne, le pays sert de pont entre le Sahel et l'Océan,
                      entre les traditions ancestrales et l'innovation numérique africaine.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}