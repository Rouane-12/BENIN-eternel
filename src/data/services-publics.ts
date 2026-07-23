export type ServicePublic = {
  slug: string;
  categorie: string;
  sigle: string;
  nom: string;
  description: string;
  adresse?: string;
  telephone?: string;
  email?: string;
  horaires?: string;
  services?: string[];
  site_web?: string;
};

export type Service = {
  slug: string;
  title: string;
  href?: string;
  description: string;
  details?: string[];
};

export const SERVICES_PUBLICS: ServicePublic[] = [
  {
    slug: "impots-dgi",
    categorie: "Fiscalité",
    sigle: "DGI / DGID",
    nom: "Impôts — Direction générale des impôts et des droits",
    site_web: "https://www.impots.bj",
    description: "E-services, paiement en ligne, fiscalité.",
    services: ["Déclarations", "Paiement en ligne", "Informations fiscales"],
  },
  {
    slug: "immatriculation-cnam",
    categorie: "Identité",
    sigle: "CNAM",
    nom: "Immatriculation (CNAM)",
    site_web: "https://www.cnam.bj",
    description: "Carte nationale d'identification biométrique (CNIB), état civil.",
    services: ["CNIB", "État civil"],
  },
  {
    slug: "douanes",
    categorie: "Administration",
    sigle: "Douanes",
    nom: "Douanes du Bénin",
    site_web: "https://www.douanes.bj",
    description: "Formalités portuaires et frontalières, administration douanière.",
    services: ["Formalités", "Réglementation", "Procédures"],
  },
  {
    slug: "poste-benin",
    categorie: "Services",
    sigle: "Poste",
    nom: "La Poste du Bénin",
    site_web: "https://www.lapostebenin.bj",
    description: "Services postaux, colis, correspondance, timbres, MoneyGram.",
    services: ["Courrier", "Colis", "Transferts"],
  },
  {
    slug: "snte",
    categorie: "Énergie & Eau",
    sigle: "SNTE",
    nom: "SNTE (eau)",
    site_web: "https://www.snte.bj",
    description: "Abonnement, facturation, dépannage.",
    services: ["Abonnement", "Facturation", "Dépannage"],
  },
  {
    slug: "see",
    categorie: "Énergie & Eau",
    sigle: "SBEE",
    nom: "SBEE (électricité)",
    site_web: "https://www.sbee.bj",
    description: "Société béninoise d'énergie électrique.",
    services: ["Abonnement", "Facturation", "Assistance"],
  },
  {
    slug: "airbenin",
    categorie: "Transport",
    sigle: "Aéroport",
    nom: "Aéroport international de Cotonou — Cadjehoun",
    site_web: "https://www.airbenin.aero",
    description: "Horaires, vols, services aéroport.",
    services: ["Horaires", "Vols", "Infos voyageurs"],
  },
  {
    slug: "port-autonome-cotonou",
    categorie: "Transport",
    sigle: "PAC",
    nom: "Port autonome de Cotonou",
    site_web: "https://www.pac.bj",
    description: "Plateforme portuaire et services logistiques.",
    services: ["Infos port", "Procédures", "Services"],
  },
  {
    slug: "mairie-cotonou",
    categorie: "Collectivités",
    sigle: "Mairie",
    nom: "Mairie de Cotonou",
    description: "Services municipaux de la capitale économique.",
    services: ["État civil", "Services municipaux"],
  },
  {
    slug: "mairie-porto-novo",
    categorie: "Collectivités",
    sigle: "Mairie",
    nom: "Mairie de Porto-Novo",
    description: "Services municipaux de la capitale administrative.",
    services: ["État civil", "Services municipaux"],
  },
  {
    slug: "passports-consulats",
    categorie: "Diplomatie",
    sigle: "Consulats",
    nom: "Passeports, visas et consulats",
    site_web: "https://www.beninconsulats.org",
    description: "Plateforme du réseau consulaire du Bénin.",
    services: ["Passeports", "Visas", "Réseau consulaire"],
  },
];

export const ASSOCIATIONS_ET_ORGANISMES: Service[] = [
  {
    slug: "anfb",
    title: "ANFB (Association nationale des femmes du Bénin)",
    description: "Organisation féministe historique de défense des droits des femmes.",
  },
  {
    slug: "lsdhb",
    title: "LSDHB (Ligue syrienne des droits de l'homme du Bénin)",
    description: "Organisation de défense des droits humains.",
    details: [
      "Note : Le terme « syrienne » correspond ici à une dénomination locale historique ; cette Ligue est une organisation béninoise.",
    ],
  },
  {
    slug: "amnesty-benin",
    title: "Amnistie internationale — section béninoise",
    description: "Branche nationale d'Amnistie internationale.",
  },
  {
    slug: "ong-jeunesse",
    title: "ONG jeunesse et citoyenneté",
    description: "Plateformes et associations de jeunes.",
  },
];

export const CULTURE_ET_PATRIMOINE: Service[] = [
  {
    slug: "mcc",
    title: "Ministère de la Culture et de la Communication",
    description: "Politique culturelle nationale.",
  },
  {
    slug: "inpat",
    title: "INPAT (Institut national du patrimoine)",
    description: "Protection et valorisation des monuments et sites.",
  },
  {
    slug: "if-cotonou",
    title: "Institut français du Bénin (Cotonou)",
    href: "https://www.institutfrancais.bj",
    description: "Centre culturel français, cinéma, expositions, ateliers.",
  },
  {
    slug: "cc-borgou",
    title: "Centre culturel du Borgou",
    description: "Espace culturel à Parakou.",
  },
  {
    slug: "cc-atacora",
    title: "Centre culturel de l'Atacora",
    description: "Espace culturel à Natitingou.",
  },
  {
    slug: "cc-ouem",
    title: "Centre culturel de l'Ouémé",
    description: "Espace culturel à Porto-Novo.",
  },
];

export const FORMATION_ET_SCOLARITE: Service[] = [
  {
    slug: "mesrs",
    title: "MESRS (Ministère de l'Enseignement supérieur et de la recherche scientifique)",
    description: "Politique de l'enseignement supérieur.",
  },
  {
    slug: "mep",
    title: "MEP (Ministère de l'Éducation nationale et de l'alphabétisation)",
    description: "École primaire, secondaire, alphabétisation.",
  },
  {
    slug: "unab",
    title: "UNAB (Université nationale d'agriculture de Porto-Novo)",
    description: "Université publique spécialisée en sciences agronomiques.",
  },
  {
    slug: "uac",
    title: "UAC (Université d'Abomey-Calavi)",
    description: "Principale université publique du Bénin.",
  },
  {
    slug: "ensea",
    title: "ENSEA (École nationale supérieure de statistique et d'économie appliquée)",
    description: "École d'ingénieurs en statistique et économie.",
  },
  {
    slug: "esp",
    title: "ESP (École supérieure polytechnique)",
    description: "École d'ingénieurs polytechnique.",
  },
  {
    slug: "ensep",
    title: "ENSEP (École normale supérieure de Porto-Novo)",
    description: "Formation des enseignants du supérieur et du secondaire.",
  },
  {
    slug: "crm",
    title: "CRM (Centre de recherches mathématiques)",
    description: "Recherche en mathématiques à Abomey-Calavi.",
  },
  {
    slug: "irsa",
    title: "IRSA (Institut de recherches et de services agricoles)",
    description: "Recherche agronomique.",
  },
];

export const SANTE_ET_SOLIDARITE: Service[] = [
  {
    slug: "ms",
    title: "Ministère de la Santé",
    description: "Politique de santé publique, hôpitaux, centres de santé.",
  },
  {
    slug: "cnamu",
    title: "CNAMU (Caisse nationale d'assurance maladie universelle)",
    description: "Couverture maladie universelle.",
  },
  {
    slug: "hkm",
    title: "HKM (Hôpital Kpodjo Mègnon)",
    description: "Hôpital de référence à Cotonou.",
  },
  {
    slug: "chu-cotonou",
    title: "CHU de Cotonou",
    description: "Centre hospitalier universitaire.",
  },
  {
    slug: "pam",
    title: "PAM (Programme alimentaire mondial) au Bénin",
    description: "Assistance alimentaire.",
  },
  {
    slug: "unicef-benin",
    title: "UNICEF au Bénin",
    description: "Protection de l'enfance.",
  },
  {
    slug: "oms-benin",
    title: "OMS au Bénin (Organisation mondiale de la santé)",
    description: "Bureau pays de l'OMS.",
  },
];

export const TELECOMS_ET_INTERNET: Service[] = [
  {
    slug: "mtn",
    title: "MTN Benin",
    href: "https://www.mtn.bj",
    description: "Opérateur mobile — Orange Money, MoMo, abonnements, data.",
  },
  {
    slug: "orange-benin",
    title: "Orange Benin",
    href: "https://www.orange.bj",
    description: "Opérateur mobile et Internet.",
  },
  {
    slug: "moov",
    title: "Moov Africa Benin",
    href: "https://www.moovafrica.bj",
    description: "Opérateur mobile.",
  },
];

export const BANQUES_ET_FINANCE: Service[] = [
  {
    slug: "bceao",
    title: "BCEAO (Banque centrale des États de l'Afrique de l'Ouest)",
    href: "https://www.bceao.int",
    description: "Banque centrale, franc CFA, politique monétaire.",
  },
  {
    slug: "biciab",
    title: "BICICAB (Banque internationale pour le commerce et l'industrie de l'Afrique occidentale du Bénin)",
    description: "Banque commerciale.",
  },
  {
    slug: "boa-benin",
    title: "BOA (Bank of Africa Bénin)",
    description: "Réseau bancaire panafricain.",
  },
  {
    slug: "ecobank",
    title: "Ecobank Bénin",
    description: "Groupe bancaire panafricain.",
  },
  {
    slug: "ubsi",
    title: "UBSI (Union bancaire du Sahel et de l'Indus)",
    description: "Banque régionale.",
  },
];

export const AGENCES_DE_VOYAGE: Service[] = [
  {
    slug: "travel-benin",
    title: "Agences de voyage locales et de réceptif",
    description: "Réservations, circuits, accompagnement.",
  },
  {
    slug: "benin-receptive",
    title: "Réceptif tourisme au Bénin",
    description: "Guides, visites culturelles, circuits royaux, safari Pendjari.",
  },
];

export const SERVICES_PRATIQUES: Service[] = [
  {
    slug: "etat-civil",
    title: "État civil",
    description: "Naissances, mariages, décès, extraits, certificats.",
  },
  {
    slug: "notaires",
    title: "Notaires",
    description: "Authentications, contrats, successions, donations.",
  },
  {
    slug: "avocats",
    title: "Avocats et barreaux",
    description: "Barreau de Cotonou, barreau de Porto-Novo, défense devant les tribunaux.",
  },
  {
    slug: "police-judiciaire",
    title: "Police judiciaire et gendarmerie",
    description: "Commissariats, brigades, dépôts de plainte.",
  },
  {
    slug: "pompiers",
    title: "Sapeurs-pompiers",
    description: "Numéro d'urgence, interventions, sécurité civile.",
  },
];

export const SERVICES_PRESSES: Service[] = [
  {
    slug: "ortb",
    title: "ORTB (Office de radiodiffusion et de télévision du Bénin)",
    href: "https://www.ortb.bj",
    description: "Chaîne publique nationale.",
  },
  {
    slug: "la-nation",
    title: "La Nation (quotidien national)",
    description: "Journal officiel du Bénin.",
  },
  {
    slug: "le-matin",
    title: "Le Matin",
    description: "Quotidien indépendant.",
  },
  {
    slug: "l-investigateur",
    title: "L'Investigateur",
    description: "Journal d'investigation.",
  },
  {
    slug: "capitale-fm",
    title: "Capitale FM",
    description: "Radio privée d'information générale.",
  },
  {
    slug: "france-24",
    title: "France 24 (reception locale)",
    description: "Chaîne internationale d'information en français.",
  },
  {
    slug: "rfi",
    title: "RFI (Radio France Internationale)",
    description: "Radio internationale francophone.",
  },
  {
    slug: "bbc-afrique",
    title: "BBC Afrique",
    description: "Service africain de la BBC.",
  },
  {
    slug: "voa-afrique",
    title: "VOA Afrique",
    description: "Voix de l'Amérique — service pour l'Afrique.",
  },
];

export const AIDES_ET_PARTENARIATS: Service[] = [
  {
    slug: "afd-benin",
    title: "AFD (Agence française de développement) au Bénin",
    href: "https://www.afd.fr/fr/benin",
    description: "Prêts et subventions pour le développement.",
  },
  {
    slug: "bid-benin",
    title: "BID (Banque internationale pour le développement) — Bureau du Bénin",
    description: "Financement de projets d'infrastructures.",
  },
  {
    slug: "ufa-benin",
    title: "UfA (Union financière africaine)",
    description: "Institutions de microfinance et de crédit.",
  },
  {
    slug: "snv-benin",
    title: "SNV Pays-Bas (organisation de développement) au Bénin",
    description: "Appui technique à l'agriculture et à l'eau.",
  },
  {
    slug: "giz-benin",
    title: "GIZ (coopération allemande) au Bénin",
    description: "Appui technique et renforcement de capacités.",
  },
  {
    slug: "dfid-benin",
    title: "DFID / FCDO (coopération britannique) au Bénin",
    description: "Aide publique au développement du Royaume-Uni.",
  },
  {
    slug: "usaid-benin",
    title: "USAID au Bénin",
    description: "Agence américaine pour le développement international.",
  },
  {
    slug: "acdi-benin",
    title: "ACDI (Agence canadienne pour le développement international) au Bénin",
    description: "Aide publique canadienne.",
  },
  {
    slug: "coop-japon-benin",
    title: "Coopération japonaise (JICA) au Bénin",
    description: "Coopération technique et financière.",
  },
];

export const ECONOMIE_ET_ENTREPRISES: Service[] = [
  {
    slug: "ccib",
    title: "CCIB (Chambre de commerce et d'industrie du Bénin)",
    href: "https://www.ccib.bj",
    description: "Représentation des entreprises.",
  },
  {
    slug: "onip",
    title: "ONIP (Office national de l'investissement et de la promotion du secteur privé)",
    description: "Investissements et création d'entreprises.",
  },
  {
    slug: "apipa",
    title: "APIPA (Agence de promotion de l'investissement et des exportations)",
    description: "Aides à l'exportation.",
  },
  {
    slug: "fonds-sme",
    title: "Fonds de soutien aux PME",
    description: "Subventions, garanties et crédits pour les petites et moyennes entreprises.",
  },
  {
    slug: "syndicats-patronaux",
    title: "Syndicats patronaux",
    description: "Organisations professionnelles, négociations sociales.",
  },
  {
    slug: "syndicats-salaries",
    title: "Syndicats de salariés",
    description: "Défense des droits des travailleurs.",
  },
];

export const ENVIRONNEMENT_ET_EAU: Service[] = [
  {
    slug: "mddecc",
    title: "Ministère du Développement durable, de l'Environnement et de la lutte contre le changement climatique",
    description: "Politique environnementale nationale.",
  },
  {
    slug: "anae",
    title: "ANAE (Agence nationale de l'eau)",
    description: "Gestion des ressources en eau.",
  },
  {
    slug: "ond",
    title: "OND (Office national des déserts)",
    description: "Lutte contre la désertification dans le nord.",
  },
  {
    slug: "sogeb",
    title: "SOGEB (Société de gestion des bassins du Mono et de l'Ouémé)",
    description: "Gestion des bassins versants.",
  },
  {
    slug: "fonape",
    title: "FONAPE (Fonds national pour l'environnement)",
    description: "Financement de projets écologiques.",
  },
];

export const AGRICULTURE_ET_ELEVAGE: Service[] = [
  {
    slug: "maep",
    title: "MAEP (Ministère de l'Agriculture, de l'Élevage et de la Pêche)",
    description: "Politique agricole nationale.",
  },
  {
    slug: "onca",
    title: "ONCA (Office national du coton et de l'arachide)",
    description: "Organisation de la filière coton.",
  },
  {
    slug: "sofib",
    title: "SOFIB (Société financière béninoise)",
    description: "Crédit agricole.",
  },
  {
    slug: "cnp",
    title: "CNP (Confédération nationale des paysans)",
    description: "Organisation paysanne.",
  },
];

export const TOURISME: Service[] = [
  {
    slug: "mpt",
    title: "Ministère du Tourisme",
    description: "Politique touristique nationale.",
  },
  {
    slug: "ont",
    title: "ONT (Office national du tourisme)",
    description: "Promotion du tourisme béninois.",
  },
  {
    slug: "sites-unesco",
    title: "Sites classés au patrimoine mondial",
    description: "Palais d'Abomey, paysages du Koutammakou, pendjari, etc.",
  },
  {
    slug: "guides-touristiques",
    title: "Guides touristiques agréés",
    description: "Accompagnement professionnel.",
  },
];

export const DROITS_HUMAINS_ET_CITOYENNETE: Service[] = [
  {
    slug: "cndh",
    title: "CNDH (Commission nationale des droits de l'homme)",
    description: "Institution nationale indépendante de protection des droits de l'homme.",
  },
  {
    slug: "ouddh",
    title: "OUDDH (Observatoire des droits de l'homme et de la démocratie)",
    description: "Organisation indépendante de suivi et de veille.",
  },
];

export const ELETTIONS_ET_VOTE: Service[] = [
  {
    slug: "cena",
    title: "CENA (Commission électorale nationale autonome)",
    href: "https://www.cena.bj",
    description: "Organisation des élections, cartes électorales, résultats.",
  },
  {
    slug: "ins",
    title: "INS (Institut national de la statistique)",
    href: "https://www.ins.bj",
    description: "Recensements, données statistiques nationales.",
  },
];
