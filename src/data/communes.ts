export type Departement = { name: string; capital: string; communes: string[] };

export const DEPARTEMENTS: Departement[] = [
  { name: "Alibori", capital: "Kandi", communes: ["Banikoara", "Gogounou", "Kandi", "Karimama", "Malanville", "Ségbana"] },
  { name: "Atacora", capital: "Natitingou", communes: ["Boukombé", "Cobly", "Kérou", "Kouandé", "Matéri", "Natitingou", "Péhunco", "Tanguiéta", "Toucountouna"] },
  { name: "Atlantique", capital: "Allada", communes: ["Abomey-Calavi", "Allada", "Kpomassè", "Ouidah", "Sô-Ava", "Toffo", "Tori-Bossito", "Zè"] },
  { name: "Borgou", capital: "Parakou", communes: ["Bembéréké", "Kalalé", "N'Dali", "Nikki", "Parakou", "Pèrèrè", "Sinendé", "Tchaourou"] },
  { name: "Collines", capital: "Dassa-Zoumè", communes: ["Bantè", "Dassa-Zoumè", "Glazoué", "Ouèssè", "Savalou", "Savè"] },
  { name: "Couffo", capital: "Aplahoué", communes: ["Aplahoué", "Djakotomey", "Dogbo", "Klouékanmè", "Lalo", "Toviklin"] },
  { name: "Donga", capital: "Djougou", communes: ["Bassila", "Copargo", "Djougou", "Ouaké"] },
  { name: "Littoral", capital: "Cotonou", communes: ["Cotonou"] },
  { name: "Mono", capital: "Lokossa", communes: ["Athiémé", "Bopa", "Comè", "Grand-Popo", "Houéyogbé", "Lokossa"] },
  { name: "Ouémé", capital: "Porto-Novo", communes: ["Adjarra", "Adjohoun", "Aguégués", "Akpro-Missérété", "Avrankou", "Bonou", "Dangbo", "Porto-Novo", "Sèmè-Kpodji"] },
  { name: "Plateau", capital: "Pobè", communes: ["Adja-Ouèrè", "Ifangni", "Kétou", "Pobè", "Sakété"] },
  { name: "Zou", capital: "Abomey", communes: ["Abomey", "Agbangnizoun", "Bohicon", "Covè", "Djidja", "Ouinhi", "Zagnanado", "Za-Kpota", "Zogbodomey"] },
];

export const FLAG_GRADIENT_STOPS = ["#008751", "#FCD116", "#E8112D"];