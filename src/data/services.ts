export type Service = {
  id: string;
  nom: string;
  categorie: string;
  ville: string;
  telephone: string;
  description: string;
  img: string;
  siteWeb?: string;
};

export const SERVICES: Service[] = [
  {
    id: "sbee",
    nom: "Société Béninoise d'Énergie Électrique",
    categorie: "Énergie",
    ville: "Cotonou",
    telephone: "+229 21 31 22 63",
    description: "Entreprise publique chargée de la distribution de l'électricité aux particuliers, entreprises et administrations.",
    img: "/hero-benin.jpg",
    siteWeb: "https://sbee.bj",
  },
  {
    id: "soneb",
    nom: "Société Nationale des Eaux du Bénin",
    categorie: "Eau",
    ville: "Cotonou",
    telephone: "+229 21 31 51 02",
    description: "Organisme public responsable de la production et de la distribution de l'eau potable au Bénin.",
    img: "/hero.jpg",
    siteWeb: "https://web.soneb.bj",
  },
  {
    id: "anip",
    nom: "Agence Nationale d'Identification des Personnes",
    categorie: "Identification",
    ville: "Cotonou",
    telephone: "+229 21 30 11 11",
    description: "Gère l'identification des citoyens et la délivrance des actes d'état civil et cartes d'identité.",
    img: "/martyr.png",
    siteWeb: "https://anip.bj",
  },
  {
    id: "cnss",
    nom: "Caisse Nationale de Sécurité Sociale",
    categorie: "Protection Sociale",
    ville: "Cotonou",
    telephone: "+229 21 31 22 22",
    description: "Assure la gestion des cotisations sociales, retraites, allocations familiales et prestations sociales.",
    img: "/Benin app/benin-eternal/src/assets/msilva.png",
    siteWeb: "https://cnss.bj",
  },
];
