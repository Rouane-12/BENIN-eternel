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

export type CategorieStars =
  | "Tous"
  | "Humour"
  | "Musique / Cinéma"
  | "Lifestyle / Mode / Beauté"
  | "Divertissement"
  | "Cuisine / Food"
  | "Entrepreneuriat"
  | "Actualité"
  | "Agriculture";

export const CATEGORIES_STARS: CategorieStars[] = [
  "Tous",
  "Humour",
  "Musique / Cinéma",
  "Lifestyle / Mode / Beauté",
  "Divertissement",
  "Cuisine / Food",
  "Entrepreneuriat",
  "Actualité",
  "Agriculture",
];

export type Influenceur = {
  nom: string;
  categorie: string;
  bio: string;
  img?: string;
};

export const INFLUENCEURS: Influenceur[] = [
  {
    nom: "Axel Merryl",
    categorie: "Humour, Musique, Cinéma",
    bio: "Humoriste, chanteur, acteur et créateur de contenu béninois. Il s'est fait connaître grâce à ses vidéos humoristiques avant de devenir l'un des artistes les plus influents d'Afrique francophone.",
  },
  {
    nom: "Jojo le Comédien",
    categorie: "Humour, Sketchs",
    bio: "Comédien et créateur de contenu béninois reconnu pour ses sketchs humoristiques inspirés du quotidien et ses nombreuses collaborations avec des créateurs africains.",
  },
  {
    nom: "Manouton",
    categorie: "Humour",
    bio: "Créateur de contenu béninois spécialisé dans les vidéos humoristiques et les collaborations avec d'autres influenceurs.",
  },
  {
    nom: "Lachichi Oyono",
    categorie: "Lifestyle, Mode, Divertissement",
    bio: "Influenceuse et créatrice de contenu partageant des vidéos lifestyle, mode et divertissement auprès d'une communauté active.",
  },
  {
    nom: "Ery Ery",
    categorie: "Humour",
    bio: "Humoriste béninois produisant des vidéos courtes inspirées des situations du quotidien et de la culture locale.",
  },
  {
    nom: "Régie Boyzz'er",
    categorie: "Humour, Collectif",
    bio: "Collectif de créateurs de contenu connu pour ses productions humoristiques, ses mises en scène originales et ses collaborations.",
  },
  {
    nom: "Yénalia Lédémin",
    categorie: "Lifestyle, Beauté",
    bio: "Créatrice de contenu spécialisée dans le lifestyle, la beauté, la mode et la valorisation de la culture béninoise.",
  },
  {
    nom: "Alain Kenneth",
    categorie: "Divertissement",
    bio: "Créateur de contenu et animateur digital proposant des vidéos de divertissement destinées principalement à la jeunesse.",
  },
  {
    nom: "Madara Dusal",
    categorie: "Humour",
    bio: "Influenceur connu pour ses personnages humoristiques, ses vidéos virales et son univers décalé.",
  },
  {
    nom: "Théma Yorou",
    categorie: "Lifestyle, Danse",
    bio: "Créatrice de contenu mettant en avant la danse, le lifestyle et les tendances des réseaux sociaux.",
  },
  {
    nom: "Jules Citonne",
    categorie: "Humour",
    bio: "Humoriste béninois apprécié pour ses sketchs spontanés et ses vidéos inspirées de la vie quotidienne.",
  },
  {
    nom: "Esther Zoumenou",
    categorie: "Beauté, Lifestyle",
    bio: "Influenceuse digitale partageant des contenus autour de la beauté, du lifestyle et de l'entrepreneuriat féminin.",
  },
  {
    nom: "Chris David",
    categorie: "Divertissement",
    bio: "Créateur de contenu spécialisé dans le divertissement, les vidéos humoristiques et les collaborations digitales.",
  },
  {
    nom: "Gros et Metis",
    categorie: "Humour",
    bio: "Duo humoristique béninois connu pour ses sketchs mettant en scène des situations comiques de la vie quotidienne.",
  },
  {
    nom: "Edwige la folle",
    categorie: "Humour",
    bio: "Humoriste béninoise reconnue pour son personnage excentrique, son énergie et ses vidéos humoristiques populaires.",
  },
  {
    nom: "Frido Ido",
    categorie: "Humour",
    bio: "Créateur de contenu membre de Team Prodige, spécialisé dans les vidéos humoristiques et les productions collaboratives.",
  },
  {
    nom: "Jausuer",
    categorie: "Divertissement",
    bio: "Créateur digital publiant des vidéos humoristiques et des contenus destinés aux réseaux sociaux.",
  },
  {
    nom: "Shade Store",
    categorie: "Mode, E-commerce",
    bio: "Marque active sur les réseaux sociaux spécialisée dans la vente de produits tendance et la communication digitale.",
  },
  {
    nom: "Abib Ahandessi",
    categorie: "Divertissement",
    bio: "Créateur de contenu et influenceur proposant des vidéos axées sur les tendances et le divertissement.",
  },
  {
    nom: "2* Aressif",
    categorie: "Musique, Humour",
    bio: "Artiste et créateur de contenu mêlant musique, humour et divertissement sur les plateformes sociales.",
  },
  {
    nom: "Boris Vital",
    categorie: "Lifestyle, Divertissement",
    bio: "Influenceur digital produisant des contenus lifestyle, humoristiques et collaboratifs.",
  },
  {
    nom: "Maman Dilara",
    categorie: "Humour, Famille",
    bio: "Créatrice de contenu appréciée pour ses vidéos inspirées de la vie familiale, de l'humour et de la culture béninoise.",
  },
  {
    nom: "Yvon BOKO",
    categorie: "Entrepreneuriat",
    bio: "Entrepreneur digital et créateur de contenu intervenant sur l'innovation, la communication et le développement personnel.",
  },
  {
    nom: "Edern Food",
    categorie: "Cuisine, Food",
    bio: "Créateur de contenu spécialisé dans la gastronomie, les découvertes culinaires et la promotion des spécialités locales.",
  },
  {
    nom: "Yedjadouwemin",
    categorie: "Humour",
    bio: "Créateur de contenu humoristique mettant en scène des situations inspirées du quotidien et de la culture béninoise.",
  },
  {
    nom: "Griot1",
    categorie: "Actualité, Divertissement",
    bio: "Créateur de contenu connu pour ses commentaires sur l'actualité, ses analyses et ses vidéos de divertissement.",
  },
  {
    nom: "Tranqillin",
    categorie: "Humour",
    bio: "Créateur digital proposant des contenus humoristiques destinés à divertir un public jeune.",
  },
  {
    nom: "Ricko Officiel",
    categorie: "Humour, Divertissement",
    bio: "Créateur de contenu reconnu pour ses vidéos humoristiques et ses collaborations avec d'autres influenceurs.",
  },
  {
    nom: "Agriculteurs Modernes",
    categorie: "Agriculture",
    bio: "Plateforme de création de contenu valorisant l'agriculture moderne, l'innovation agricole et les producteurs africains.",
  },
];
