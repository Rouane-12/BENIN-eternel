export type PlacePublique = {
  id: string;
  nom: string;
  ville: string;
  description: string;
  img: string;
  lieuId?: string;
};

export const PLACES_PUBLIQUES: PlacePublique[] = [
  {
    id: "place-toffa",
    nom: "Place Toffa",
    ville: "Porto-Novo",
    description: "Cœur cérémoniel de la capitale, dominée par la statue du roi Toffa Iᵉʳ.",
    img: "/etoile.png",
    lieuId: "place-toffa",
  },
  {
    id: "marche-dantokpa",
    nom: "Marché Dantokpa",
    ville: "Cotonou",
    description: "Plus grand marché d'Afrique de l'Ouest, avec des milliers de stands et commerces.",
    img: "/dantokpa.png",
    lieuId: "marche-dantokpa",
  },
  {
    id: "place-de-l-etoile-rouge",
    nom: "Place de l'Étoile Rouge",
    ville: "Cotonou",
    description: "Place centrale de Cotonou, lieu de rassemblement et de manifestations.",
    img: "/Place_de_Etoile_rouge.jpg",
  },
  {
    id: "foret-sacree-kpasse",
    nom: "Forêt sacrée de Kpassè",
    ville: "Ouidah",
    description: "Bois sacré où, selon la tradition, le roi Kpassè se serait métamorphosé en arbre iroko.",
    img: "/foret.webp",
    lieuId: "foret-sacree-kpasse",
  },
];
