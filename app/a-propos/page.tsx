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
    </SiteLayout>
  );
}
