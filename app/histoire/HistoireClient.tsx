'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { KINGS, OTHER_KINGDOMS, PEOPLES_AND_CHIEFDOMS } from '@/data/kings';

const TIMELINE = [
  { year: 'v. 1600', title: 'Fondation du Dahomey', text: 'Gangnihessou pose les fondations de la dynastie fon sur le plateau d\'Abomey.' },
  { year: '1645 – 1685', title: 'Houégbadja bâtit l\'État', text: 'Premier palais royal d\'Abomey, codification des institutions et de la coutume.' },
  { year: '1724 – 1727', title: 'Conquêtes d\'Allada et Ouidah', text: 'Agaja ouvre le royaume à l\'Atlantique et au commerce mondial.' },
  { year: '1823', title: 'Victoire sur l\'empire Oyo', text: 'Guézo libère le Dahomey du tribut centenaire à Oyo.' },
  { year: '1890 – 1894', title: 'Résistance de Béhanzin', text: 'Deux guerres franco-dahoméennes ; reddition du roi le 25 janvier 1894.' },
  { year: '1958', title: 'République autonome', text: 'Le Dahomey devient une république autonome au sein de la Communauté française.' },
  { year: '1960', title: 'Indépendance', text: 'Le 1ᵉʳ août 1960, le Dahomey accède à la souveraineté internationale.' },
  { year: '1975', title: 'Naissance du Bénin', text: 'Le pays change de nom : la République populaire du Bénin remplace le Dahomey.' },
  { year: '1990', title: 'Conférence nationale', text: 'Première transition démocratique pacifique d\'Afrique francophone.' },
  { year: '2021', title: 'Restitution des trésors royaux', text: '26 œuvres pillées en 1892 reviennent d\'Abomey, ouvrant un nouveau cycle patrimonial.' },
];

export default function HistoireClient() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Mémoire du Bénin"
        title="L'Histoire"
        script="éternelle"
        intro="Du plateau d'Abomey aux côtes atlantiques, parcourez quatre siècles de royaumes, de résistances et de renaissance. Une bibliothèque numérique vivante consacrée à la grande histoire du Bénin."
        image="/histoire.jpg"
      />

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <Reveal>
          <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4">Chronologie</div>
          <h2 className="font-display text-4xl md:text-5xl mb-12">Du Dahomey au Bénin moderne</h2>
        </Reveal>
        <ol className="relative border-l border-white/15 pl-8 space-y-12">
          {TIMELINE.map((t, i) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.04 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <span className="absolute -left-[42px] top-1 w-3 h-3 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.1)]" />
              <div className="text-[11px] tracking-[0.3em] uppercase text-white/50">{t.year}</div>
              <h3 className="font-display text-2xl mt-1">{t.title}</h3>
              <p className="text-white/70 mt-2 leading-relaxed">{t.text}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* KINGS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <Reveal>
          <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4">Les Grands Rois du Dahomey</div>
          <h2 className="font-display text-4xl md:text-6xl mb-4">
            Treize souverains, <span className="font-script text-5xl md:text-7xl text-white/90">trois siècles.</span>
          </h2>
          <p className="text-white/60 max-w-3xl">
            Chaque roi du Dahomey a sa page dédiée : règne, faits d'armes, héritage culturel.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {KINGS.map((k, i) => (
            <Reveal key={k.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/rois/${k.slug}`}
                className="group block p-6 border border-white/10 hover:border-white/40 hover:bg-white/[0.02] transition-all h-full"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">{k.reign}</span>
                  <span className="w-1 h-5 bg-gradient-flag-v" />
                </div>
                <h3 className="font-display text-2xl group-hover:text-white">{k.name}</h3>
                <div className="text-xs italic text-white/50 mt-1">{k.epithet}</div>
                <p className="text-sm text-white/65 mt-4 leading-relaxed line-clamp-3">{k.summary}</p>
                <div className="mt-5 text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white">Lire la page →</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OTHER KINGDOMS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <Reveal>
          <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4">Autres royaumes</div>
          <h2 className="font-display text-4xl md:text-5xl mb-8">Le Bénin avant le Bénin</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {OTHER_KINGDOMS.map((k) => (
            <Reveal key={k.slug}>
              <article className={`p-6 border border-white/10 hover:border-white/30 transition-colors ${k.slug === 'toffa-ier' ? 'md:col-span-2 bg-white/[0.02]' : ''}`}>
                <h3 className="font-display text-2xl">{k.name}</h3>
                <p className="text-white/70 mt-3 leading-relaxed">{k.summary}</p>
                {k.rulers && k.rulers.length > 0 && (
                  <div className="mt-4">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Souverains connus</div>
                    <div className="flex flex-wrap gap-2">
                      {k.rulers.map((ruler, i) => (
                        <span key={i} className="px-2 py-1 border border-white/30 text-xs text-white/70">
                          {ruler}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PEOPLES AND CHIEFDOMS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <Reveal>
          <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4">La mosaïque des peuples du Bénin</div>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Des sociétés sans roi, mais avec toute leur histoire</h2>
          <p className="text-white/60 max-w-3xl mb-8">
            Tous ces peuples n'ont pas eu de monarchie centralisée unique, mais leur organisation sociale — chefferies, clans, communautés — est tout aussi légitime et riche.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PEOPLES_AND_CHIEFDOMS.map((p) => (
            <Reveal key={p.slug}>
              <article className="p-6 border border-white/10 hover:border-white/30 transition-colors">
                <h3 className="font-display text-xl">{p.name}</h3>
                <p className="text-white/70 mt-3 leading-relaxed text-sm">{p.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AMAZONES */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <Reveal>
          <div className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4">Les Amazones du Dahomey</div>
          <h2 className="font-display text-4xl md:text-6xl mb-8">
            Mino — <span className="font-script text-5xl md:text-7xl">nos mères.</span>
          </h2>
          <div className="space-y-6 text-white/75 text-lg leading-relaxed">
            <p>
              Les Mino, que les Européens du XIXᵉ siècle appelèrent Amazones du Dahomey, forment l'un des plus
              extraordinaires corps militaires féminins de toute l'histoire. Apparues dès la fin du XVIIᵉ siècle
              comme gardes royales, elles sont institutionnalisées par Agaja, structurées par Tegbessou et
              transformées en véritable armée d'élite par Guézo au XIXᵉ siècle.
            </p>
            <p>
              Recrutées parmi les jeunes filles libres, parfois données par leurs familles, parfois engagées
              volontaires, elles vivaient au palais d'Abomey sous statut de "femmes du roi", célibataires à vie,
              soumises à une discipline implacable. Trois régiments — fusilières, archères et chasseuses
              d'éléphants — composaient le corps principal. Leur entraînement combinait tir, escalade, jeûne
              et endurance à la douleur.
            </p>
            <p>
              Sous Guézo puis Glèlè, elles peuvent compter jusqu'à 4 000 combattantes. Elles participent à toutes
              les grandes campagnes contre les Yoruba, mènent les premières charges contre les positions françaises
              en 1890 et 1892, et combattent souvent jusqu'à l'épuisement complet. Leur courage frappe durablement
              les officiers européens, qui en feront des récits stupéfaits dans leurs mémoires.
            </p>
            <p>
              Décimées par la conquête de 1892-1894, dispersées par la défaite de Béhanzin, les Mino restent dans
              la mémoire collective comme la preuve qu'au cœur d'un royaume guerrier d'Afrique de l'Ouest, les
              femmes ont occupé un rôle militaire, politique et symbolique de tout premier plan. Leur héritage
              inspire aujourd'hui artistes, historiennes et cinéastes du monde entier.
            </p>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
