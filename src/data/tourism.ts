export type SiteTouristique = {
  name: string;
  type: string;
  region: string;
  coords: string;
  desc: string;
  img: string;
};

export const SITES_TOURISTIQUES: SiteTouristique[] = [
  { name: "Ganvié", type: "Patrimoine", region: "Atlantique", coords: "6.466°N, 2.416°E", desc: "Cité lacustre sur pilotis, la \"Venise africaine\", patrimoine vivant des Tofinou.", img: "/ganvie.webp" },
  { name: "Ouidah", type: "Histoire", region: "Atlantique", coords: "6.362°N, 2.085°E", desc: "Route des Esclaves, Porte du Non-Retour, temple des Pythons et Forêt sacrée de Kpassè.", img: "/ouidah.webp" },
  { name: "Grand-Popo", type: "Plage", region: "Mono", coords: "6.280°N, 1.830°E", desc: "Plage atlantique sauvage, embouchure du Mono, hôtels de charme et pirogues colorées.", img: "/g-popo.webp" },
  { name: "Route des Pêches", type: "Plage", region: "Atlantique", coords: "6.34°N, 2.30°E", desc: "Trente kilomètres de plage entre Cotonou et Ouidah, longés de cocoteraies.", img: "/rdp.webp" },
  { name: "Parc de la Pendjari", type: "Nature", region: "Atacora", coords: "11.40°N, 1.40°E", desc: "L'un des plus beaux parcs d'Afrique de l'Ouest : éléphants, lions, guépards, hippopotames.", img: "/pendjari.jpg" },
  { name: "Parc W du Bénin", type: "Nature", region: "Alibori", coords: "12.10°N, 2.30°E", desc: "Réserve transfrontalière inscrite à l'UNESCO, dunes, savanes et faune protégée.", img: "/pw.webp" },
  { name: "Natitingou", type: "Culture", region: "Atacora", coords: "10.317°N, 1.379°E", desc: "Porte d'entrée du pays Otammari et des Tata Somba.", img: "/festival.jpg" },
  { name: "Dassa-Zoumè", type: "Pèlerinage", region: "Collines", coords: "7.78°N, 2.18°E", desc: "Collines sacrées, basilique Notre-Dame d'Arigbo, haut lieu marial africain.", img: "/colline.webp" },
  { name: "Nikki", type: "Tradition", region: "Borgou", coords: "9.94°N, 3.21°E", desc: "Cour royale bariba, festival de la Gani et cavaliers traditionnels.", img: "/nikki.webp" },
  { name: "Lac Nokoué", type: "Nature", region: "Atlantique", coords: "6.45°N, 2.50°E", desc: "Plus grand lac du Bénin, écosystème lagunaire, pêche traditionnelle aux acadjas.", img: "/nokoue.webp" },
  { name: "Tata Somba", type: "Patrimoine", region: "Atacora", coords: "10.50°N, 1.10°E", desc: "Châteaux-fortins en banco des Otammari, architecture vernaculaire unique.", img: "/somba.png" },
  { name: "Abomey", type: "UNESCO", region: "Zou", coords: "7.186°N, 1.991°E", desc: "Palais royaux du Dahomey, classés UNESCO, musée historique et bas-reliefs.", img: "/abomey.webp" },
];

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
    highlights: ["Visite en pirogue", "Marché flottant", "Habitations sur pilotis"],
  },
  {
    id: "pendjari",
    nom: "Parc National de la Pendjari",
    categorie: "Nature",
    ville: "Natitingou",
    description: "Parc national classé UNESCO, avec éléphants, lions, guépards et baobabs millénaires.",
    img: "/pendjari.jpg",
    highlights: ["Safari", "Faune africaine", "Paysages savanne"],
  },
  {
    id: "tata-somba",
    nom: "Tata Somba",
    categorie: "Culture",
    ville: "Natitingou",
    description: "Habitations-forteresses en terre battue des peuples Otammari.",
    img: "/somba.png",
    highlights: ["Architecture traditionnelle", "Visite de villages", "Artisanat local"],
  },
  {
    id: "nikki",
    nom: "Nikki et la Gaani",
    categorie: "Culture",
    ville: "Nikki",
    description: "Royaume bariba et sa grande fête annuelle de la Gaani.",
    img: "/nikki.webp",
    highlights: ["Fête de la Gaani", "Cavalcade royale", "Palais royal"],
  },
];
