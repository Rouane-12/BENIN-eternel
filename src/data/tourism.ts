export type Attraction = {
  id: string;
  nom: string;
  categorie: string;
  ville: string;
  description: string;
  img: string;
  highlights: string[];
};

export const TOURISME: Attraction[] = [
  {
    id: "ganvie",
    nom: "Village lacustre de Ganvié",
    categorie: "Site",
    ville: "Ganvié",
    description: "La cité lacustre suspendue sur le lac Nokoué, souvent appelée la 'Venise de l'Afrique'.",
    img: "/ganvie.webp",
    highlights: [
      "Visite en pirogue",
      "Marché flottant",
      "Habitations sur pilotis",
    ],
  },
  {
    id: "pendjari",
    nom: "Parc National de la Pendjari",
    categorie: "Nature",
    ville: "Natitingou",
    description: "Parc national classé UNESCO, avec éléphants, lions, guépards et baobabs millénaires.",
    img: "/pendjari.jpg",
    highlights: [
      "Safari",
      "Faune africaine",
      "Paysages savanne",
    ],
  },
  {
    id: "tata-somba",
    nom: "Tata Somba",
    categorie: "Culture",
    ville: "Natitingou",
    description: "Habitations-forteresses en terre battue des peuples Otammari.",
    img: "/somba.png",
    highlights: [
      "Architecture traditionnelle",
      "Visite de villages",
      "Artisanat local",
    ],
  },
  {
    id: "nikki",
    nom: "Nikki et la Gaani",
    categorie: "Culture",
    ville: "Nikki",
    description: "Royaume bariba et sa grande fête annuelle de la Gaani.",
    img: "/nikki.webp",
    highlights: [
      "Fête de la Gaani",
      "Cavalcade royale",
      "Palais royal",
    ],
  },
];
