import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "À propos — Bénin Éternel",
  description: "Bénin Éternel est une plateforme premium de découverte du Bénin.",
  openGraph: {
    url: "/a-propos",
  },
  alternates: {
    canonical: "/a-propos",
  },
};

const FLAG = {
  or: "oklch(0.88 0.17 92)",
  vert: "oklch(0.55 0.14 152)",
  rouge: "oklch(0.56 0.23 27)",
  bleu: "oklch(0.62 0.16 250)",
} as const;

const TEAM = [
  {
    nom: "Evans",
    role: "SUPERVISEUR DEV",
    email: "johnsonevans686@gmail.com",
    phone: "+2290194677352",
    accent: FLAG.or,
    description:
      "Coordination technique, supervision du développement et cohérence globale de l’application.",
    tags: ["Direction technique", "Architecture", "Supervision"],
  },
  {
    nom: "Meryl",
    role: "SUPERVISEUR DESIGNER",
    email: "amoussoumeryl0@gmail.com",
    phone: "+2290146463623",
    accent: FLAG.rouge,
    description:
      "Direction artistique, identité visuelle et cohérence UI/UX de l’expérience.",
    tags: ["UI/UX", "Identité visuelle", "Direction artistique"],
  },
  {
    nom: "Rouane",
    role: "DEV PRINCIPAL",
    email: "djossouvirouane6@gmail.com",
    phone: "+2290146449300",
    accent: FLAG.vert,
    description:
      "Développement principal de l’application et intégration des composants majeurs.",
    tags: ["Frontend", "Intégration", "Performance"],
  },
  {
    nom: "Prince",
    role: "DEV SECONDAIRE",
    email: "princedossou465@gmail.com",
    phone: "+2290151879255",
    accent: FLAG.bleu,
    description:
      "Support développement, ajustements techniques et renfort sur les livrables.",
    tags: ["Support dev", "Maintenance", "Optimisation"],
  },
  {
    nom: "Crepin",
    role: "DESIGNER 1",
    email: "sewadecrepin0@gmail.com",
    phone: "+2290156454729",
    accent: FLAG.or,
    description:
      "Création d’éléments visuels, mise en forme des interfaces et harmonie graphique.",
    tags: ["Graphisme", "Maquettes", "UI"],
  },
  {
    nom: "Zod",
    role: "DESIGNER 2",
    email: "nephtalitossah4@gmail.com",
    phone: "+2290154206835",
    accent: FLAG.rouge,
    description:
      "Aide au design, finitions visuelles et renforcement de l’univers graphique.",
    tags: ["Design", "Finitions", "Créativité"],
  },
] as const;

function initials(nom: string) {
  return nom
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function TeamCard({
  nom,
  role,
  email,
  phone,
  accent,
  description,
  tags,
}: (typeof TEAM)[number]) {
  return (
    <article
      className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 sm:p-7 lg:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
      style={{
        boxShadow:
          "0 28px 80px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_40%)] opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] border border-white/10 text-lg font-bold text-white shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.10))`,
              }}
            >
              {initials(nom)}
            </div>

            <div className="min-w-0">
              <h3 className="font-display text-[1.4rem] sm:text-[1.55rem] lg:text-[1.7rem] text-white leading-tight">
                {nom}
              </h3>
              <p
                className="mt-1 text-[11px] sm:text-[12px] uppercase tracking-[0.34em] font-medium"
                style={{ color: accent }}
              >
                {role}
              </p>
            </div>
          </div>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/70">
            Team
          </span>
        </div>

        <p className="mt-6 max-w-[36rem] text-sm sm:text-[15px] leading-7 sm:leading-8 text-white/72">
          {description}
        </p>

        <div className="mt-7 grid gap-3">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <span className="text-white/45">Email</span>
            <span className="min-w-0 truncate text-right text-white">{email}</span>
          </a>

          <a
            href={`tel:${phone}`}
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <span className="text-white/45">Téléphone</span>
            <span className="min-w-0 truncate text-right text-white">{phone}</span>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/65"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function AProposPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Notre mission"
        title="À propos"
        script="de Bénin Éternel"
        intro="Une plateforme dédiée à la découverte, à la transmission et à la mise en valeur du patrimoine béninois — naturel, historique et culturel."
        image="/festival.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-0">
        <Reveal>
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 sm:p-8 lg:p-10 text-white/75 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <div className="mb-8 flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                style={{ background: FLAG.or }}
              />
              <span className="text-[10px] uppercase tracking-[0.38em] text-white/45">
                Présentation
              </span>
            </div>

            <div className=" lg:gap-10">
              <p className="text-sm sm:text-base lg:text-[15px] leading-7 sm:leading-8 text-white/78">
                Bénin Éternel a été conçu comme une bibliothèque numérique vivante. Notre ambition est
                simple : offrir aux voyageurs, aux étudiants, aux chercheurs et aux Béninois eux-mêmes
                une plateforme contemporaine, fluide et émotionnelle pour découvrir le pays.
                <br />
                <br />
                De l’histoire des rois du Dahomey à la cuisine de rue de Cotonou, de la cité lacustre de
                Ganvié aux Tata Somba de l’Atacora, chaque page est pensée comme un chapitre d’un grand
                récit en mouvement.
              </p>


            </div>

            <div className="mt-8 flex flex-col gap-2">
              <p className="font-script text-4xl sm:text-5xl text-white">« Mi kúabɔ̀ Bénin »</p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                Bienvenue au Bénin.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="border-t border-white/5" />

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-10">
        <Reveal>
          <div className="mb-12 grid gap-4 rounded-[32px] border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:grid-cols-3 lg:p-7">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Vision</p>
              <p className="mt-3 text-sm sm:text-[15px] leading-7 text-white/75">
                Créer une expérience digitale élégante et cohérente autour du Bénin.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Design</p>
              <p className="mt-3 text-sm sm:text-[15px] leading-7 text-white/75">
                Garder une identité premium, sombre, moderne et immersive.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Exécution</p>
              <p className="mt-3 text-sm sm:text-[15px] leading-7 text-white/75">
                Transformer les idées en interface claire, fluide et performante.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {TEAM.map((member, index) => (
            <Reveal key={member.nom} delay={index * 0.05}>
              <TeamCard {...member} />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}