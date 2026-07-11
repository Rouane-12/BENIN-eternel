export type CategorieLieu = "plage" | "monument" | "restaurant" | "musee" | "marche" | "hebergement" | "site" | "culture";

export interface Lieu {
  id: string;
  nom: string;
  categorie: CategorieLieu;
  lat: number;
  lng: number;
  description?: string;
  ville: string;
}

export const LIEUX: Lieu[] = [
  { id: "porte-non-retour", nom: "Porte du Non-Retour", categorie: "monument", lat: 6.3578, lng: 2.0855, ville: "Ouidah", description: "Monument à la mémoire des millions de captifs déportés. Dressée face à l'Atlantique au bout des 4 km de la Route des Esclaves." },
  { id: "musee-fondation-zinsou", nom: "Fondation Zinsou", categorie: "musee", lat: 6.3654, lng: 2.4183, ville: "Cotonou" },
  { id: "ganvie", nom: "Village lacustre de Ganvié", categorie: "site", lat: 6.4667, lng: 2.4167, ville: "Ganvié" },
  { id: "palais-royaux-abomey", nom: "Palais Royaux d'Abomey", categorie: "monument", lat: 7.1833, lng: 1.9833, ville: "Abomey", description: "Classés UNESCO depuis 1985, dix palais successifs des rois du Dahomey, bas-reliefs en banco, trônes et tentures historiques." },
  { id: "plage-fidjrosse", nom: "Plage de Fidjrossè", categorie: "plage", lat: 6.3389, lng: 2.3667, ville: "Cotonou" },
  { id: "marche-dantokpa", nom: "Marché Dantokpa", categorie: "marche", lat: 6.3653, lng: 2.4334, ville: "Cotonou" },
  { id: "basilique-ouidah", nom: "Basilique de l'Immaculée Conception", categorie: "monument", lat: 6.3606, lng: 2.0847, ville: "Ouidah" },
  { id: "temple-pythons", nom: "Temple des Pythons", categorie: "culture", lat: 6.3620, lng: 2.0860, ville: "Ouidah", description: "Sanctuaire dédié au vodun Dangbé, où vivent en liberté plusieurs dizaines de pythons sacrés." },
  { id: "plage-grand-popo", nom: "Plage de Grand-Popo", categorie: "plage", lat: 6.2800, lng: 1.8300, ville: "Grand-Popo" },
  { id: "parc-pendjari", nom: "Parc National de la Pendjari", categorie: "site", lat: 11.4000, lng: 1.4000, ville: "Natitingou" },
  { id: "grande-mosquee-porto-novo", nom: "Grande Mosquée de Porto-Novo", categorie: "monument", lat: 6.4969, lng: 2.6289, ville: "Porto-Novo", description: "Édifice du XIXᵉ siècle aux façades roses et vertes inspirées du style afro-brésilien de Bahia." },
  { id: "musee-honme", nom: "Musée Honmè", categorie: "musee", lat: 6.4950, lng: 2.6250, ville: "Porto-Novo", description: "Ancien palais royal du roi Toffa, devenu musée d'histoire de la dynastie de Hogbonou." },
  { id: "place-toffa", nom: "Place Toffa", categorie: "site", lat: 6.4970, lng: 2.6270, ville: "Porto-Novo", description: "Cœur cérémoniel de la capitale, dominée par la statue du roi Toffa Iᵉʳ." },
  { id: "foret-sacree-kpasse", nom: "Forêt sacrée de Kpassè", categorie: "site", lat: 6.3600, lng: 2.0800, ville: "Ouidah", description: "Bois sacré où, selon la tradition, le roi Kpassè se serait métamorphosé en arbre iroko." },
  { id: "basilique-arigbo", nom: "Basilique Notre-Dame d'Arigbo", categorie: "monument", lat: 7.7500, lng: 2.1800, ville: "Dassa-Zoumè", description: "Haut lieu de pèlerinage marial, niché entre les collines sacrées des Idaatcha." },
]; 
