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
    id: "place-amazone",
    nom: "Place de l'Amazone",
    ville: "Cotonou",
    description:
      "Monument géant représentant les Amazones du Dahomey. Un des sites les plus visités de Cotonou. Très beau de jour comme de nuit grâce à l'éclairage.",
    img: "/amazone.webp",
  },
  {
    id: "place-bio-guera",
    nom: "Place Bio Guéra",
    ville: "Cotonou",
    description:
      "Grande place publique au cœur de Cotonou, dédiée au héros national Bio Guéra. Utilisée pour des événements et rassemblements majeurs.",
    img: "/bguerra.webp",
  },
  {
    id: "temple-pythons",
    nom: "Temple des Pythons",
    ville: "Ouidah",
    description:
      "Site culturel et religieux très célèbre, dédié au culte du python. Attraction incontournable pour les visiteurs étrangers et les initiés.",
    img: "/tpython.webp",
    lieuId: "temple-pythons",
  },
  {
    id: "plage-grand-popo",
    nom: "Plage de Grand-Popo",
    ville: "Grand-Popo",
    description: "Longue plage sauvage à l'embouchure du Mono. Cocoteraies, lodges et embarcadères de pirogues.",
    img: "/g-popo.webp",
    lieuId: "plage-grand-popo",
  },
  {
    id: "plage-fidjrosse",
    nom: "Plage de Fidjrossè",
    ville: "Cotonou",
    description: "Plage urbaine de Cotonou, centre de la vie sociale, paillotes et soirées au coucher du soleil.",
    img: "/f.webp",
    lieuId: "plage-fidjrosse",
  },
  {
    id: "route-des-peches",
    nom: "Route des Pêches",
    ville: "Atlantique",
    description: "Trente kilomètres de côte jalonnés de villages de pêcheurs et de nouveaux aménagements touristiques.",
    img: "/rdp.webp",
  },
  {
    id: "place-etoile-rouge",
    nom: "Place de l'Étoile Rouge",
    ville: "Cotonou",
    description: "Ancien symbole de la période révolutionnaire, aujourd'hui carrefour emblématique et repère central de la ville.",
    img: "/etoile.png",
  },
  {
    id: "porte-non-retour",
    nom: "Porte du Non-Retour",
    ville: "Ouidah",
    description:
      "Mémorial en bord de mer marquant le dernier point de départ des esclaves vers les Amériques. Lieu de mémoire majeur du Bénin.",
    img: "/ouidah.png",
    lieuId: "porte-non-retour",
  },
  {
    id: "palais-royaux-abomey",
    nom: "Palais Royal d'Abomey",
    ville: "Abomey",
    description:
      "Ancien siège du royaume du Dahomey, classé au patrimoine mondial de l'UNESCO. Bas-reliefs et trônes royaux.",
    img: "/abomey.webp",
    lieuId: "palais-royaux-abomey",
  },
  {
    id: "ganvie",
    nom: "Village Lacustre de Ganvié",
    ville: "Lac Nokoué",
    description: "Cité lacustre construite sur pilotis, surnommée la Venise de l'Afrique. Accessible en pirogue.",
    img: "/ganvie.webp",
    lieuId: "ganvie",
  },
  {
    id: "marche-dantokpa",
    nom: "Marché Dantokpa",
    ville: "Cotonou",
    description: "Plus grand marché à ciel ouvert d'Afrique de l'Ouest. Textiles, épices, artisanat et vie locale intense.",
    img: "/dantokpa.png",
    lieuId: "marche-dantokpa",
  },
  {
    id: "place-souvenir",
    nom: "Place du Souvenir",
    ville: "Cotonou",
    description: "Esplanade en bord de lagune dédiée à la mémoire collective, prisée pour les promenades en soirée.",
    img: "/martyr.png",
  },
  {
    id: "place-jean-bayol",
    nom: "Place Jean Bayol",
    ville: "Cotonou",
    description:
      "Place historique proche du marché Dantokpa, portant le nom de l'explorateur français ayant négocié avec le roi Béhanzin.",
    img: "/pbayol.png",
  },
  {
    id: "parc-pendjari",
    nom: "Parc National de la Pendjari",
    ville: "Atacora",
    description:
      "Réserve naturelle emblématique du Nord, refuge des éléphants, lions et buffles. Un des derniers grands écosystèmes sauvages d'Afrique de l'Ouest.",
    img: "/pendjari.jpg",
    lieuId: "parc-pendjari",
  },
];
