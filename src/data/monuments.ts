export type Monument = {
  id: string;
  nom: string;
  ville: string;
  description: string;
  img: string;
  lieuId?: string;
};

export const MONUMENTS: Monument[] = [
  {
    id: "porte-non-retour",
    nom: "Porte du Non-Retour",
    ville: "Ouidah",
    description: "Monument emblématique à la mémoire des millions de captifs déportés vers l'Amérique. Dressée face à l'Atlantique au bout de la Route des Esclaves.",
    img: "/ouidah.webp",
    lieuId: "porte-non-retour",
  },
  {
    id: "palais-royaux-abomey",
    nom: "Palais Royaux d'Abomey",
    ville: "Abomey",
    description: "Classés UNESCO depuis 1985, dix palais successifs des rois du Dahomey avec bas-reliefs en banco, trônes et tentures historiques.",
    img: "/histoire.jpg",
    lieuId: "palais-royaux-abomey",
  },
  {
    id: "temple-pythons",
    nom: "Temple des Pythons",
    ville: "Ouidah",
    description: "Sanctuaire dédié au vodun Dangbé, où vivent en liberté plusieurs dizaines de pythons sacrés, symbole de la culture vodun.",
    img: "/art.jpg",
    lieuId: "temple-pythons",
  },
  {
    id: "basilique-ouidah",
    nom: "Basilique de l'Immaculée Conception",
    ville: "Ouidah",
    description: "Édifice religieux important de la ville de Ouidah.",
    img: "/ba.png",
    lieuId: "basilique-ouidah",
  },
  {
    id: "grande-mosquee-porto-novo",
    nom: "Grande Mosquée de Porto-Novo",
    ville: "Porto-Novo",
    description: "Édifice du XIXᵉ siècle aux façades roses et vertes inspirées du style afro-brésilien de Bahia.",
    img: "/culture-beninoise.jpg",
    lieuId: "grande-mosquee-porto-novo",
  },
  {
    id: "basilique-arigbo",
    nom: "Basilique Notre-Dame d'Arigbo",
    ville: "Dassa-Zoumè",
    description: "Haut lieu de pèlerinage marial, niché entre les collines sacrées des Idaatcha.",
    img: "/gaani.jpg",
    lieuId: "basilique-arigbo",
  },
];
