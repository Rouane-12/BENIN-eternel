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
} as const;

const EQUIPE = {
  fondateur: {
    nom: "Evans DJOSSOUVI",
    role: "Fondateur & Superviseur",
    bio: "À l’origine de l’idée du projet, il structure la vision du site, guide sa direction numérique et met en valeur l’identité du Bénin à travers une expérience moderne et cohérente.",
    skills: ["Leadership", "React / Next.js", "Node.js", "Product Thinking"],
    photo: "/team/evans-djossouvi.webp",
    accent: FLAG.or,
  },
  groupes: [
    {
      pole: "Développement Web & Mobile",
      couleur: FLAG.vert,
      description: "Ce pôle développe les expériences web et mobile du projet sur le temps libre de l’équipe.",
      membres: [
        {
          nom: "DJOSSOUVI Rouane",
          role: "Développeur Web Frontend",
          bio: "Basé à Gbodjè, il met l’accent sur des interfaces claires et performantes avec React et Next.js, tout en gardant une forte sensibilité au mobile.",
          skills: ["React", "Next.js", "MongoDB", "Python"],
          photo: "/team/rouane-djossouvi.jpg",
        },
        {
          nom: "DOSSOU Prince",
          role: "Développeur Web & Mobile",
          bio: "Polyvalent et ancré à Cococodji, il conçoit des applications web et mobiles modernes, du front au back, avec une vraie sensibilité produit.",
          skills: ["React / Next.js", "React Native", "Node.js", "Prisma"],
          photo: "/team/prince-dossou.png",
        },
      ],
    },
    {
      pole: "Design UI/UX",
      couleur: FLAG.rouge,
      description: "Ce pôle donne au projet sa cohérence visuelle, son rythme éditorial et son caractère mémorable.",
      membres: [
        {
          nom: "Meryl AMOUSSOU",
          role: "Graphic Design UI/UX",
          bio: "Designer sensible au storytelling visuel, elle structure des expériences élégantes, accessibles et porteuses d’émotion.",
          skills: ["UI Design", "UX Thinking", "Branding", "Figma"],
          photo: "/team/meryl-amoussou.jpeg",
        },
        {
          nom: "SEWADE Creprin",
          role: "Graphic Design UI/UX",
          bio: "À l’aise entre identité visuelle et expérience numérique, elle cherche à rendre chaque interface à la fois claire et forte.",
          skills: ["Visual Design", "Wireframes", "Design Systems", "Prototypage"],
          photo: "/team/creprin-sewade.png",
        },
        {
          nom: "TOSSAH Zod",
          role: "Graphic Design UI/UX",
          bio: "Designer créatif qui combine sensibilité graphique et logique de parcours pour produire des interfaces sobres et engageantes.",
          skills: ["Interface Design", "Motion", "UX Writing", "Prototype"],
          photo: "/team/zod-tossa.jpeg",
        },
      ],
    },
  ],
} as const;

function initials(nom: string) {
  return nom
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function AProposPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Notre mission"
        title="À propos"
        script="de Bénin Éternel"
        intro="Une plateforme premium dédiée à la découverte, à la transmission et à la mise en valeur du patrimoine béninois — naturel, historique et culturel."
        image="/festival.jpg"
      />
      <section className="max-w-3xl mx-auto px-6 lg:px-0 py-12 space-y-6 text-white/75 leading-relaxed text-lg">
        <Reveal>
          <p>
            Bénin Éternel a été conçu comme une bibliothèque numérique vivante. Notre ambition est
            simple : offrir aux voyageurs, aux étudiants, aux chercheurs et aux Béninois eux-mêmes
            une plateforme contemporaine, fluide et émotionnelle pour redécouvrir le pays.
          </p>
          <p>
            De l'histoire des rois du Dahomey à la cuisine de rue de Cotonou, de la cité lacustre de
            Ganvié aux Tata Somba de l'Atacora, chaque page est pensée comme un chapitre d'un grand
            récit en mouvement.
          </p>
          <p className="font-script text-4xl text-white">« Mi kúabɔ̀ Bénin »</p>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">Bienvenue au Bénin.</p>
        </Reveal>
      </section>

      <div className="border-t border-white/5" />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-12 md:py-16">
        <Reveal>
          <div className="flex items-center gap-3 mb-10 justify-center">
            <span
              className="inline-block w-8 h-[2px]"
              style={{ background: `linear-gradient(90deg, ${FLAG.or}, ${FLAG.rouge})` }}
            />
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">L'équipe</span>
            <span
              className="inline-block w-8 h-[2px]"
              style={{ background: `linear-gradient(90deg, ${FLAG.rouge}, ${FLAG.or})` }}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-10 flex justify-center">
            <article
              className="w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
              style={{ boxShadow: `0 24px 70px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                <img
                  src={EQUIPE.fondateur.photo}
                  alt={EQUIPE.fondateur.nom}
                  className="h-100 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div
                  className="absolute bottom-4 left-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white"
                  style={{ background: `linear-gradient(90deg, ${FLAG.or}, rgba(255,255,255,0.16))` }}
                >
                  Fondateur & superviseur
                </div>
                <div
                  data-fallback
                  className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-white/12 via-transparent to-white/5 text-5xl font-display text-white"
                >
                  {initials(EQUIPE.fondateur.nom)}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">Vision & direction</p>
                    <h3 className="mt-2 font-display text-2xl text-white">{EQUIPE.fondateur.nom}</h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.28em]" style={{ color: FLAG.or }}>
                      {EQUIPE.fondateur.role}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/70">
                    01
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/72">{EQUIPE.fondateur.bio}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {EQUIPE.fondateur.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {EQUIPE.groupes.map((groupe, groupIndex) => (
            <Reveal key={groupe.pole} delay={groupIndex * 0.05}>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 md:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[10px] font-medium uppercase tracking-[0.3em]"
                    style={{ color: groupe.couleur }}
                  >
                    {groupe.pole.split(" ")[0][0]}
                  </span>
                  <div>
                    <p
                      className="text-[11px] tracking-[0.2em] uppercase"
                      style={{ color: groupe.couleur }}
                    >
                      {groupe.pole}
                    </p>
                    <p className="text-sm text-white/45">{groupe.description}</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {groupe.membres.map((membre, index) => (
                    <Reveal key={membre.nom} delay={index * 0.04}>
                      <article className="group overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
                        <div className="relative h-44 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                          <img
                            src={membre.photo}
                            alt={membre.nom}
                            loading="lazy"
                            className="h-100 w-full object-center object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div
                            className="absolute bottom-4 left-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white"
                            style={{ background: `linear-gradient(90deg, ${groupe.couleur}, rgba(255,255,255,0.14))` }}
                          >
                            {groupe.pole}
                          </div>
                          <div
                            data-fallback
                            className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-white/10 via-transparent to-white/5 text-5xl font-display text-white"
                          >
                            {initials(membre.nom)}
                          </div>
                        </div>

                        <div className="p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="font-display text-xl text-white">{membre.nom}</h3>
                              <p className="mt-1 text-[11px] uppercase tracking-[0.25em]" style={{ color: groupe.couleur }}>
                                {membre.role}
                              </p>
                            </div>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[11px] uppercase tracking-[0.2em] text-white/60">
                              {index + 1}
                            </span>
                          </div>

                          <p className="mt-4 text-sm leading-6 text-white/70">{membre.bio}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {membre.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}