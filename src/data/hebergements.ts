export type Hebergement = {
  id: string;
  nom: string;
  type: "Hôtel" | "Villa" | "Agence";
  categorie?: "luxe" | "milieu" | "plage";
  ville: string;
  localisation: string;
  lat: number; // latitude
  lng: number; // longitude
  telephone: string;
  telephone2?: string;
  whatsapp?: string;
  description?: string;
  image?: string;
  etoiles?: number;
  zonesCouverts?: string[];
};

export const HEBERGEMENTS: Hebergement[] = [
  // ─── HÔTELS LUXE ───────────────────────────────────────────────
  {
    id: "sofitel",
    nom: "Sofitel Cotonou Marina Hotel & Spa",
    type: "Hôtel",
    categorie: "luxe",
    ville: "Cotonou",
    localisation: "Boulevard de la Marina, Cotonou",
    lat: 6.3495485,
    lng: 2.3936833,
    telephone: "+229 01 20 90 04 61",
    description:
      "Le fleuron de l'hôtellerie béninoise. Face à l'Océan Atlantique, cet établissement 5 étoiles propose des suites panoramiques, un spa de référence et une restauration gastronomique.",
    image: "/sofitel.webp",
    etoiles: 5,
  },
  {
    id: "golden-tulip",
    nom: "Golden Tulip Le Diplomate",
    type: "Hôtel",
    categorie: "luxe",
    ville: "Cotonou",
    localisation: "Boulevard de la Marina, Cotonou",
    lat: 6.3489871,
    lng: 2.4032299,
    telephone: "+229 01 98 30 02 00",
    description:
      "Hôtel de prestige apprécié par la communauté diplomatique et les voyageurs d'affaires internationaux. Piscine extérieure, centre de conférences et restaurant panoramique.",
    image: "/gtulip.webp",
    etoiles: 4,
  },
  {
    id: "novotel",
    nom: "Novotel Cotonou Orisha",
    type: "Hôtel",
    categorie: "luxe",
    ville: "Cotonou",
    localisation: "Boulevard de la Marina, Cotonou",
    lat: 6.3483196,
    lng: 2.4016819,
    telephone: "+229 01 21 30 56 62",
    description:
      "Design contemporain inspiré de la culture Vodoun, vue mer et accès direct à la plage. Idéal pour les longs séjours professionnels avec appartements équipés.",
    image: "/novotel.webp",
    etoiles: 4,
  },
  // {
  //   id: "benin-royal",
  //   nom: "Bénin Royal Hôtel",
  //   type: "Hôtel",
  //   categorie: "luxe",
  //   ville: "Cotonou",
  //   localisation: "Quartier Maro-Militaire, Cotonou",
  //   lat: 6.3600, lng: 2.4150,
  //   telephone: "+229 01 65 89 89 89",
  //   description:
  //     "Institution cotonoise depuis des décennies, le Bénin Royal conjugue confort 4 étoiles et authenticité locale. Salle de banquet et service personnalisé.",
  //   image: "/brh.webp",
  //   etoiles: 4,
  // },
  // {
  //   id: "azalai",
  //   nom: "Azalaï Hôtel de la Plage",
  //   type: "Hôtel",
  //   categorie: "luxe",
  //   ville: "Cotonou",
  //   localisation: "Quartier Ganhi, Cotonou",
  //   lat: 6.3580, lng: 2.4230,
  //   telephone: "+229 01 21 31 72 00",
  //   description:
  //     "Chaîne panafricaine d'excellence. Vue mer, piscine à débordement et restaurant de fruits de mer font de cet hôtel un refuge prisé des cadres expatriés.",
  //   image: "/azalai.webp",
  //   etoiles: 4,
  // },

  // ─── HÔTELS BON RAPPORT QUALITÉ-PRIX ──────────────────────────
  {
    id: "riviera",
    nom: "Riviera Hotel Benin",
    type: "Hôtel",
    categorie: "milieu",
    ville: "Cotonou",
    localisation: "Tokpa Hoho, Cotonou",
    lat: 6.3607764,
    lng: 2.437305,
    telephone: "+229 21 31 26 20",
    telephone2: "+229 96 45 48 48",
    description:
      "Établissement bien situé dans le centre animé de Cotonou. Chambres climatisées, restaurant intérieur et accueil chaleureux. Bon point de départ pour explorer la ville.",
    image: "/riviera.webp",
    etoiles: 3,
  },
  {
    id: "paradisia",
    nom: "Paradisia Hotel",
    type: "Hôtel",
    categorie: "milieu",
    ville: "Cotonou",
    localisation: "Godomey, Cotonou",
    lat: 6.3845804,
    lng: 2.3458319,
    telephone: "+229 94 46 28 28",
    description:
      "Hôtel moderne à Godomey, quartier en plein essor. Piscine, salle de sport et restaurant à l'atmosphère paisible. Parfait pour les séjours de moyenne durée.",
    image: "/paradisia.webp",
    etoiles: 4,
  },
  {
    id: "maison-rouge",
    nom: "Maison Rouge Cotonou",
    type: "Hôtel",
    categorie: "milieu",
    ville: "Cotonou",
    localisation: "Marina, Cotonou",
    lat: 6.347515,
    lng: 2.3908822,
    telephone: "+229 01 65 12 69 89",
    description:
      "Boutique-hôtel au style colonial revisité. Terrasse avec vue sur la lagune, bar à cocktails et atmosphère intimiste. Favori des journalistes et des créatifs de passage.",
    image: "/mr.webp",
    etoiles: 4,
  },
  // {
  //   id: "hotel-du-lac",
  //   nom: "Hotel du Lac",
  //   type: "Hôtel",
  //   categorie: "milieu",
  //   ville: "Cotonou",
  //   localisation: "Bord du lac, Cotonou",
  //   lat: 6.3750, lng: 2.4150,
  //   telephone: "+229 21 33 19 19",
  //   description:
  //     "Niché au bord du lac, cet hôtel offre un calme insolite au cœur de la capitale économique. Terrasse sur pilotis et cuisine béninoise authentique.",
  //   image: "/hl.webp",
  //   etoiles: 4,
  // },
  // {
  //   id: "la-casa-cielo",
  //   nom: "Hotel La Casa Cielo",
  //   type: "Hôtel",
  //   categorie: "milieu",
  //   ville: "Cotonou",
  //   localisation: "Cotonou",
  //   lat: 6.3700, lng: 2.4200,
  //   telephone: "+229 67 86 72 72",
  //   description:
  //     "Ambiance méditerranéenne sous les tropiques. Patio fleuri, piscine privée et cuisines internationale et locale font de cet hôtel une halte appréciée des voyageurs indépendants.",
  //   image: "/hc.webp",
  //   etoiles: 3,
  // },

  // ─── HÔTELS PLAGE ──────────────────────────────────────────────
  {
    id: "casa-del-papa",
    nom: "La Casa Del Papa",
    type: "Hôtel",
    categorie: "plage",
    ville: "Ouidah",
    localisation: "Ouidah Plage",
    lat: 6.3140053,
    lng: 2.0365343,
    telephone: "+229 95 95 39 04",
    description:
      "Éco-lodge de charme directement sur la plage de Ouidah. Bungalows en matériaux naturels, hamacs sous les cocotiers et ambiance décontractée pour un dépaysement total.",
    image: "/cp.webp",
    etoiles: 3,
  },
  {
    id: "nature-luxury-lodge",
    nom: "Nature Luxury Lodge",
    type: "Hôtel",
    categorie: "plage",
    ville: "Ouidah",
    localisation: "Ouidah",
    lat: 6.36,
    lng: 2.08,
    telephone: "+33 7 88 78 23 40",
    description:
      "Luxe discret face à l'Atlantique. Suites en bois exotique, piscine à débordement sur l'océan et cuisine franco-béninoise raffinée. Une adresse d'exception.",
    image: "/nll.webp",
    etoiles: 4,
  },
  {
    id: "awale-plage",
    nom: "Awalé Plage",
    type: "Hôtel",
    categorie: "plage",
    ville: "Grand-Popo",
    localisation: "Grand-Popo",
    lat: 6.285,
    lng: 1.83,
    telephone: "+229 95 50 29 15",
    description:
      "Resort familial sur la plage de Grand-Popo. Bungalows spacieux, activités nautiques et accueil bienveillant dans ce village de pêcheurs devenu destination prisée.",
    image: "/awale.webp",
    etoiles: 3,
  },
  // {
  //   id: "village-kirikou",
  //   nom: "Village Kirikou Grand-Popo",
  //   type: "Hôtel",
  //   categorie: "plage",
  //   ville: "Grand-Popo",
  //   localisation: "Grand-Popo",
  //   lat: 6.2820, lng: 1.8350,
  //   telephone: "+229 01 61 25 99 96",
  //   description:
  //     "Village de cases africaines authentiques les pieds dans le sable. Idéal pour les familles et les groupes souhaitant s'immerger dans la culture locale tout en profitant de la plage.",
  //   image: "/kirikou.webp",
  //   etoiles: 3,
  // },

  // ─── VILLAS ────────────────────────────────────────────────────
  {
    id: "villa-fidjrosse",
    nom: "Villa Prestige Fidjrossè",
    type: "Villa",
    ville: "Cotonou",
    localisation: "Fidjrossè-Kpota, Cotonou",
    lat: 6.33,
    lng: 2.385,
    telephone: "+229 01 96 97 37 37",
    description:
      "Villa standing 4 chambres avec piscine privée, groupe électrogène et gardien 24h. À 5 min de la plage de Fidjrossè. Idéal pour expatriés et familles en longue durée.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "villa-akpakpa",
    nom: "Villa Luxe Akpakpa",
    type: "Villa",
    ville: "Cotonou",
    localisation: "Akpakpa Le Bélier, Cotonou",
    lat: 6.375,
    lng: 2.45,
    telephone: "+229 01 97 20 11 07",
    description:
      "Grande villa 5 chambres en résidence sécurisée. Piscine, cuisine équipée, parking et salle de réception. Entourage végétal et calme absolu à Akpakpa.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "villa-vue-mer",
    nom: "Villa Vue Mer Cotonou",
    type: "Villa",
    ville: "Cotonou",
    localisation: "Bord de mer, Cotonou",
    lat: 6.354,
    lng: 2.426,
    telephone: "+229 01 62 25 27 25",
    description:
      "Villa d'architecte en front de mer, 3 chambres en suite, terrasse panoramique et accès direct à la plage privée. Location semaine ou mois, disponible toute l'année.",
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1200&auto=format&fit=crop",
  },

  // ─── AGENCES ───────────────────────────────────────────────────
  {
    id: "benin-house",
    nom: "Bénin House",
    type: "Agence",
    ville: "Cotonou",
    localisation: "Fidjrossè-Kpota, Cotonou",
    lat: 6.331,
    lng: 2.385,
    telephone: "+229 01 67 82 82 68",
    whatsapp: "+229 01 95 39 03 03",
    description:
      "Agence immobilière de référence pour la location de villas de luxe et d'appartements meublés au Bénin.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    zonesCouverts: [
      "Fidjrossè",
      "Akpakpa",
      "Cadjèhoun",
      "Haie Vive",
      "Cotonou nord",
    ],
  },
  {
    id: "benin-immo",
    nom: "Bénin-Immo",
    type: "Agence",
    ville: "Cotonou",
    localisation: "Fidjrossè, Cotonou",
    lat: 6.329,
    lng: 2.383,
    telephone: "+229 01 66 44 84 84",
    whatsapp: "+229 66 44 84 84",
    description:
      "Spécialiste de l'immobilier résidentiel et commercial. Large choix de propriétés à Cotonou et ses environs.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    zonesCouverts: ["Fidjrossè", "Haie Vive", "Mènontin", "Godomey", "Calavi"],
  },
  {
    id: "ladynad-immo",
    nom: "Ladynad Immo",
    type: "Agence",
    ville: "Cotonou",
    localisation: "Fidjrossè Jacquot, Cotonou",
    lat: 6.332,
    lng: 2.386,
    telephone: "+229 01 96 61 26 49",
    whatsapp: "+229 01 96 61 26 49",
    description:
      "Votre partenaire de confiance pour trouver l'hébergement idéal, de la petite chambre à la villa de prestige.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
    zonesCouverts: ["Fidjrossè", "Jacquot", "Bénin Marina", "Akpakpa"],
  },
  // {
  //   id: "orbite-benin",
  //   nom: "Orbite Bénin Immobilier",
  //   type: "Agence",
  //   ville: "Cotonou",
  //   localisation: "Fidjrossè Jacquot, Cotonou",
  //   lat: 6.3320, lng: 2.3860,
  //   telephone: "+229 01 96 42 72 48",
  //   whatsapp: "+229 01 96 42 72 48",
  //   description: "Expertise immobilière locale pour vous accompagner dans vos projets d'achat ou de location au Bénin.",
  //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  //   zonesCouverts: ["Fidjrossè", "Haie Vive", "Cadjèhoun", "Cotonou sud"],
  // },
  // {
  //   id: "ganda-immo",
  //   nom: "GANDA Immobilier",
  //   type: "Agence",
  //   ville: "Cotonou",
  //   localisation: "Cotonou & Abomey-Calavi",
  //   lat: 6.3700, lng: 2.4200,
  //   telephone: "+229 01 54 90 08 05",
  //   whatsapp: "+229 01 54 90 08 05",
  //   description: "Service de gestion immobilière et location saisonnière couvrant Cotonou et Abomey-Calavi.",
  //   image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1200&auto=format&fit=crop",
  //   zonesCouverts: ["Cotonou", "Abomey-Calavi", "Godomey", "Calavi"],
  // },
  // {
  //   id: "jemah-business",
  //   nom: "Jemah Business Immobilier",
  //   type: "Agence",
  //   ville: "Cotonou",
  //   localisation: "Cotonou",
  //   lat: 6.3700, lng: 2.4200,
  //   telephone: "+229 01 61 93 91 18",
  //   telephone2: "+229 01 61 90 92 16",
  //   whatsapp: "+229 01 61 93 91 18",
  //   description: "Solutions immobilières sur mesure pour particuliers et entreprises à Cotonou centre.",
  //   image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
  //   zonesCouverts: ["Akogbato", "Houéyiho", "Fidjrossè", "Cotonou centre"],
  // },
  // {
  //   id: "residence-aidjedo",
  //   nom: "Résidence Meublée Aidjèdo",
  //   type: "Agence",
  //   ville: "Cotonou",
  //   localisation: "Aidjèdo, Cotonou",
  //   lat: 6.3600, lng: 2.4100,
  //   telephone: "+229 61 19 19 19",
  //   whatsapp: "+229 61 19 19 19",
  //   description: "Gestion d'appartements meublés tout confort dans les quartiers résidentiels de Cotonou.",
  //   image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
  //   zonesCouverts: ["Aidjèdo", "Mènontin", "Houéyiho"],
  // },
];
