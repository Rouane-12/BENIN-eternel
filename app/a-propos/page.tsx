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
  vert: "oklch(0.55 0.14 152)",
  or: "oklch(0.88 0.17 92)",
  rouge: "oklch(0.56 0.23 27)",
} as const;

const TEAM = [
  {
    nom: "Meryl",
    role: "SUPERVISEUR DESIGNER",
    email: "amoussoumeryl0@gmail.com",
    phone: "+2290146463623",
    accent: FLAG.vert,
    description:
      "Direction artistique, identité visuelle et cohérence UI/UX de l’expérience.",
    tags: ["UI/UX", "Identité visuelle", "Direction artistique"],
  },
  {
    nom: "Rouane",
    role: "DEV PRINCIPAL",
    email: "djossouvirouane6@gmail.com",
    phone: "+2290146449300",
    accent: FLAG.or,
    description:
      "Développement principal de l’application et intégration des composants majeurs.",
    tags: ["Frontend", "Intégration", "Performance"],
  },
  {
    nom: "Prince",
    role: "DEV SECONDAIRE",
    email: "princedossou465@gmail.com",
    phone: "+2290151879255",
    accent: FLAG.rouge,
    description:
      "Support développement, ajustements techniques et renfort sur les livrables.",
    tags: ["Support dev", "Maintenance", "Optimisation"],
  },
  {
    nom: "Crepin",
    role: "DESIGNER 1",
    email: "sewadecrepin0@gmail.com",
    phone: "+2290156454729",
    accent: FLAG.vert,
    description:
      "Création d’éléments visuels, mise en forme des interfaces et harmonie graphique.",
    tags: ["Graphisme", "Maquettes", "UI"],
  },
  {
    nom: "Zod",
    role: "DESIGNER 2",
    email: "nephtalitossah4@gmail.com",
    phone: "+2290154206835",
    accent: FLAG.or,
    description:
      "Aide au design, finitions visuelles et renforcement de l’univers graphique.",
    tags: ["Design", "Finitions", "Créativité"],
  },
  {
    nom: "Evans",
    role: "SUPERVISEUR DEV",
    email: "johnsonevans686@gmail.com",
    phone: "+2290194677352",
    accent: FLAG.rouge,
    description:
      "Coordination technique, supervision du développement et cohérence globale de l’application.",
    tags: ["Direction technique", "Architecture", "Supervision"],
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
      className="group relative mx-auto h-full w-full max-w-[340px] overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 sm:p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
      style={{
        boxShadow:
          "0 24px 70px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_40%)] opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full min-w-0 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-white/10 text-base font-bold text-white shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.10))`,
              }}
            >
              {initials(nom)}
            </div>

            <div className="min-w-0">
              <h3 className="font-display text-[1.2rem] sm:text-[1.35rem] text-white leading-tight">
                {nom}
              </h3>
              <p
                className="mt-1 text-[10px] uppercase tracking-[0.28em] font-medium"
                style={{ color: accent }}
              >
                {role}
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-white/70">
            Team
          </span>
        </div>

        <p className="mt-4 max-w-[32rem] text-[13px] sm:text-sm leading-6 sm:leading-7 text-white/72">
          {description}
        </p>

        <div className="mt-5 flex w-full flex-col gap-2">
          <a
            href={`mailto:${email}`}
            className="flex w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <span className="shrink-0 text-[9px] uppercase tracking-wider text-white/45">
              Email
            </span>
            <span className="min-w-0 flex-1 truncate text-right text-[10px] sm:text-[11px] text-white">
              {email}
            </span>
          </a>

          <a
            href={`tel:${phone}`}
            className="flex w-full min-w-0 items-center justify-between gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <span className="shrink-0 text-[9px] uppercase tracking-wider text-white/45">
              Tél
            </span>
            <span className="min-w-0 flex-1 truncate text-right text-[10px] sm:text-[11px] text-white">
              {phone}
            </span>
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-white/65"
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
        image="/festival.webp"
      />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-12 lg:px-0">
        <Reveal>
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 sm:p-6 lg:p-10 text-white/75 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <div className="mb-8 flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                style={{ background: FLAG.or }}
              />
              <span className="text-[10px] uppercase tracking-[0.38em] text-white/45">
                Présentation
              </span>
            </div>

            <div className="lg:gap-10">
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
              <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-white">« Mi kúabɔ̀ Bénin »</p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                Bienvenue au Bénin.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="border-t border-white/5" />

      <section className="mx-auto max-w-6xl overflow-x-hidden px-4 sm:px-6 py-10 md:py-14 lg:px-8">
        <Reveal>
          <div className="mb-10 grid gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:grid-cols-3 lg:gap-4">
            <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 sm:p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Vision</p>
              <p className="mt-2 text-sm sm:text-[15px] leading-6 text-white/75">
                Créer une expérience digitale élégante et cohérente autour du Bénin.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 sm:p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Design</p>
              <p className="mt-2 text-sm sm:text-[15px] leading-6 text-white/75">
                Garder une identité premium, sombre, moderne et immersive.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 sm:p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">Exécution</p>
              <p className="mt-2 text-sm sm:text-[15px] leading-6 text-white/75">
                Transformer les idées en interface claire, fluide et performante.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid w-full justify-items-center gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
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