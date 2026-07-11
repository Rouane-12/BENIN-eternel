export type Plage = {
  id: string;
  nom: string;
  ville: string;
  description: string;
  img: string;
  lieuId?: string;
};

export const PLAGES: Plage[] = [
  {
    id: "plage-fidjrosse",
    nom: "Plage de Fidjrossè",
    ville: "Cotonou",
    description: "Plage principale de Cotonou, avec ses cabanes et son ambiance festive.",
    img: "/erevan.webp",
    lieuId: "plage-fidjrosse",
  },
  {
    id: "plage-grand-popo",
    nom: "Plage de Grand-Popo",
    ville: "Grand-Popo",
    description: "Plage sauvage et calme, idéale pour la détente et les balades.",
    img: "/g-popo.webp",
    lieuId: "plage-grand-popo",
  },
  {
    id: "plage-ouidah",
    nom: "Plage de Ouidah",
    ville: "Ouidah",
    description: "Plage historique près de la Porte du Non-Retour.",
    img: "/riviera.webp",
  },
  {
    id: "plage-paradisia",
    nom: "Plage Paradisia",
    ville: "Cotonou",
    description: "Plage avec un cadre paradisiaque et des installations pour les touristes.",
    img: "/paradisia.webp",
  },
];
