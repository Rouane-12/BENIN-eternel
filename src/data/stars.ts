export type Star = {
  id: string;
  nom: string;
  domaine: string;
  description: string;
  img: string;
};

export const STARS: Star[] = [
  {
    id: "ange-hugues-ragondji",
    nom: "Ange Hugues Ragondji",
    domaine: "Musique",
    description: "Chanteur et auteur-compositeur béninois, connu pour son style afro-pop.",
    img: "/f1.jpg",
  },
  {
    id: "zeynab",
    nom: "Zeynab",
    domaine: "Musique",
    description: "Artiste béninoise à succès, figure du showbiz béninois.",
    img: "/f2.jpg",
  },
  {
    id: "dj-mix",
    nom: "DJ Mix",
    domaine: "DJing",
    description: "DJ et producteur béninois, pionnier du mouvement urbain au Bénin.",
    img: "/mr.webp",
  },
  {
    id: "kiki-diva",
    nom: "Kiki Diva",
    domaine: "Musique",
    description: "Chanteuse béninoise reconnue pour sa voix et son style unique.",
    img: "/hl.webp",
  },
];
