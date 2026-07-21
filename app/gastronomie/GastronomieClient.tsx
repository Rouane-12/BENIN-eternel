'use client';
import { useState, useMemo } from 'react';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';


const PLATS = [
  {
    name: 'Amíwò',
    origin: 'Pays fon',
    desc: 'Pâte de maïs rouge préparée avec de la tomate et de l’huile de palme, servie avec du poulet, du poisson ou de la viande.',
    image: '/plats/amiwo.webp'
  },
  {
    name: 'Akassa',
    origin: 'Pays fon et goun',
    desc: 'Pâte fermentée de maïs blanc, accompagnée de sauces au poisson ou à la viande.',
    image: '/plats/akassa.webp'
  },
  {
    name: 'Ablɔ',
    origin: 'Pays fon',
    desc: 'Petit pain de maïs cuit à la vapeur, légèrement sucré, servi avec des sauces ou du poisson.',
    image: '/plats/ablo.webp'
  },
  {
    name: 'Atassi',
    origin: 'Pays yoruba',
    desc: 'Riz mélangé aux haricots niébé, un grand classique de la cuisine béninoise.',
    image: '/plats/atassi.webp'
  },
  {
    name: 'Agoun',
    origin: 'Centre et Sud du Bénin',
    desc: 'Igname pilée au mortier jusqu’à obtenir une pâte souple, servie avec différentes sauces traditionnelles.',
    image: '/plats/agoun.webp'
  },
  {
    name: 'Wassa-Wassa',
    origin: 'Nord du Bénin',
    desc: 'Semoule de manioc cuite à la vapeur, servie avec une sauce tomate, de la viande ou du poisson.',
    image: '/plats/wassa-wassa.webp'
  },
  {
    name: 'Wagashi',
    origin: 'Pays peulh',
    desc: 'Fromage frais de lait de vache, souvent grillé ou frit avant d’être dégusté.',
    image: '/plats/wagashi.webp'
  },
  {
    name: 'Abobo',
    origin: 'Pays fon',
    desc: 'Haricots cuits assaisonnés d’huile rouge, d’oignons et de piment.',
    image: '/plats/haricot.webp'
  },
  {
    name: 'Yovo Doko',
    origin: 'Pays fon',
    desc: 'Petits beignets sucrés de farine, très populaires dans les rues du Bénin.',
    image: '/plats/doco.webp'
  },
  {
    name: 'Igname bouillie',
    origin: 'Tout le Bénin',
    desc: 'Igname cuite à l’eau, servie avec une sauce tomate, du poisson, de la viande ou des œufs.',
    image: '/plats/igname.webp'
  },
  {
    name: 'Poisson braisé',
    origin: 'Côte béninoise',
    desc: 'Poisson mariné aux épices puis grillé au feu de bois, servi avec de l’akassa, de l’ablo ou de l’igname.',
    image: '/plats/braisé.webp'
  },
  {
    name: 'Poulet bicyclette',
    origin: 'Tout le Bénin',
    desc: 'Poulet fermier mariné puis grillé, accompagné d’igname, d’attiéké ou de pâte.',
    image: '/plats/poulet.webp'
  },
  {
    name: 'Dakouin',
    origin: 'Pays fon',
    desc: 'Préparation traditionnelle à base de maïs et de niébé, héritée de la cuisine ancienne.',
    image: '/plats/dakouin.webp'
  }
];

const CATEGORIES = [
  { id: 'tous', label: 'Toutes les adresses' },
  { id: 'traditionnel', label: 'Béninois & traditionnel' },
  { id: 'mer', label: 'Fruits de mer & grillades' },
  { id: 'asiatique', label: 'Cuisine asiatique' },
  { id: 'glacier', label: 'Glaciers & desserts' },
  { id: 'international', label: 'International & fine dining' },
];

const ADRESSES = [
  { name: 'Face à la Mer', city: 'Cotonou', category: 'international', tag: 'Franco-italien', rating: 4.8, reviews: 356, price: '€€€', location: 'Haie Vive, front de mer', phone: '+229 21 30 12 45', desc: 'Table de référence de la capitale, cuisine méditerranéenne raffinée face à l\'Atlantique.' },
  { name: 'La Cabane du Pêcheur', city: 'Cotonou', category: 'mer', tag: 'Fruits de mer', rating: 4.6, reviews: 210, price: '€€', location: 'Fidjrossè, route des pêches', phone: '+229 21 30 45 10', desc: 'Poissons, langoustes et gambas dans une ambiance festive de bord de mer. Barbecue tous les dimanches.' },
  { name: 'Obama Beach', city: 'Cotonou', category: 'mer', tag: 'Grillades & plage', rating: 4.4, reviews: 128, price: '€', location: 'Fidjrossè', phone: '+229 97 12 33 08', desc: 'Restaurant-paillote les pieds dans le sable, poissons grillés et ambiance reggae.' },
];

//  { name: 'Le Lieu Unique', city: 'Cotonou', category: 'international', tag: 'Cuisine fusion', rating: 4.5, reviews: 94, price: '€€€', location: 'Cotonou centre', phone: '+229 21 31 20 60', desc: 'Carte fusion ouest-africaine et française dans une ambiance lounge sous les étoiles.' },
//   { name: 'Kobe Sushi Bar', city: 'Cotonou', category: 'asiatique', tag: 'Japonais · Sushi', rating: 4.7, reviews: 142, price: '€€€', location: 'Karé Ébène Boutik Hôtel, centre-ville', phone: '+229 01 52 40 40 40', desc: 'Live sushi station et carte japonaise raffinée signée de la cheffe Gina, sashimis et poke bowls.' },
//   { name: 'Wasabi Sushi Bar', city: 'Cotonou', category: 'asiatique', tag: 'Japonais · Sushi', rating: 4.3, reviews: 36, price: '€€', location: 'Entrée du pavé, Haie-Vive', phone: '+229 64 07 07 07', desc: 'Nems croustillants, sushis maison et mochis glacés dans un cadre propre et chaleureux.' },
//   { name: 'Restaurant Hai King', city: 'Cotonou', category: 'asiatique', tag: 'Chinois', rating: 3.9, reviews: 29, price: '€€', location: 'Cadjéhoun', phone: '+229 21 30 88 14', desc: 'Cuisine mandarine authentique, réputée comme l\'une des meilleures tables chinoises de la ville.' },
//   { name: 'Glacé Bénin', city: 'Cotonou', category: 'glacier', tag: 'Glaces artisanales', rating: 4.6, reviews: 89, price: '€', location: 'Pavés de la Haie-Vive, face au Calypso', phone: '+229 62 06 00 00', desc: 'Glaces artisanales, gaufres, milkshakes et pâtisserie maison. Ouvert tard le soir.' },
//   { name: 'Glacier Ci Gusta', city: 'Cotonou', category: 'glacier', tag: 'Glacier · Snack', rating: 4.0, reviews: 61, price: '€', location: 'Cotonou centre', phone: '+229 21 31 55 02', desc: 'Grand choix de parfums de glace, pizzas et pâtisseries dans une salle climatisée lumineuse.' },
//   { name: 'Festival des Glaces', city: 'Cotonou', category: 'glacier', tag: 'Glacier · Fast-food', rating: 4.1, reviews: 73, price: '€', location: 'Avenue Steinmetz', phone: '+229 21 31 40 22', desc: 'Institution cotonoise réputée pour ses glaces, ouverte tous les jours de 7h à 1h du matin.' },
//   { name: 'Au Super Pili-Pili', city: 'Cotonou', category: 'traditionnel', tag: 'Béninois', rating: 4.3, reviews: 3, price: '€€', location: 'Boulevard Saint-Michel', phone: '+229 97 95 64 84', desc: 'Poulet et poisson pili-pili emblématiques, une des adresses préférées des Cotonois.' },
//   { name: 'Chez Maman Bénin', city: 'Cotonou', category: 'traditionnel', tag: 'Marmite historique', rating: 4.0, reviews: 47, price: '€', location: 'Rue 201A', phone: '+229 21 32 33 38', desc: 'L\'une des plus vieilles marmites du pays. Poisson braisé, escargots, agouti, riz et aloco.' },
//   { name: 'Le Maquis du Port', city: 'Cotonou', category: 'traditionnel', tag: 'Béninois', rating: 4.2, reviews: 58, price: '€', location: 'Ganhi, face à la Loterie Nationale', phone: '+229 97 91 52 01', desc: 'Ancien maquis devenu restaurant reconnu, cadre aéré pour découvrir la cuisine africaine.' },
//   { name: 'African Foodseum', city: 'Porto-Novo', category: 'traditionnel', tag: 'Musée gastronomique', rating: 4.5, reviews: 52, price: '€€', location: 'Centre historique', phone: '+229 21 21 30 14', desc: 'Restaurant-musée dédié à la gastronomie ouest-africaine, entre héritage et transmission.' },
//   { name: 'Art Residence', city: 'Porto-Novo', category: 'international', tag: 'Table d\'auteur', rating: 4.3, reviews: 8, price: '€€€', location: 'Maison afro-brésilienne, centre-ville', phone: '+229 21 21 44 09', desc: 'Cuisine béninoise revisitée servie dans un cadre patrimonial afro-brésilien.' },
//   { name: 'Hakuna Matata', city: 'Ouidah', category: 'mer', tag: 'Plage privée', rating: 4.4, reviews: 66, price: '€€', location: 'Plage de Ouidah', phone: '+229 21 34 12 07', desc: 'Table créole-béninoise les pieds dans le sable, cadre idéal pour un déjeuner face à l\'océan.' },
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    <span className="text-sm font-medium">{rating.toFixed(1)}</span>
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-3 h-3" fill={i < Math.round(rating) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  </div>
);

const AdresseCard = ({ a }: { a: typeof ADRESSES[number] }) => (
  <article className="group border border-white/10 hover:border-white/40 transition flex flex-col">
    <div className="relative p-5 pb-4 border-b border-white/5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40">{a.tag}</span>
        <span className="text-[11px] text-white/50">{a.price}</span>
      </div>
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-display text-xl leading-tight">{a.name}</h4>
        <StarRating rating={a.rating} />
      </div>
      <div className="mt-3 w-8 h-[2px] bg-gradient-flag" />
    </div>
    <div className="p-5 flex flex-col gap-3 flex-1">
      <p className="text-sm text-white/65 leading-relaxed flex-1">{a.desc}</p>
      <div className="pt-3 border-t border-white/5 space-y-1.5 text-xs text-white/50">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 18s6-5.2 6-9.6A6 6 0 004 8.4C4 12.8 10 18 10 18z" />
            <circle cx="10" cy="8.4" r="2" />
          </svg>
          <span>{a.city} · {a.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h3l1.5 4-2 1.3a10 10 0 004.2 4.2L12 12l4 1.5v3a1 1 0 01-1 1C8 17.5 2.5 12 2.5 5a1 1 0 011-1H4z" />
          </svg>
          <span>{a.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/40">{a.reviews} avis</span>
        </div>
      </div>
    </div>
  </article>
);

export default function GastronomieClient() {
  const [active, setActive] = useState('tous');
  const filtered = useMemo(
    () => (active === 'tous' ? ADRESSES : ADRESSES.filter((a) => a.category === active)),
    [active]
  );

  return (
    <SiteLayout>
      <PageHero
        kicker="Saveurs"
        title="Gastronomie"
        script="béninoise"
        intro="Une cuisine de partage, riche, généreuse, ancrée dans les sols rouges et les pirogues de l'Atlantique."
        image="/food.jpg"
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <Reveal><h2 className="font-display text-3xl md:text-5xl mb-10">Plats emblématiques</h2></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLATS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.05}>
              <article className="relative overflow-hidden border border-white/10 hover:border-white/40 transition h-full min-h-[240px]">
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">{p.origin}</span>
                    <span className="w-1 h-5 bg-gradient-flag-v" />
                  </div>
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <p className="text-sm text-white/70 mt-3 leading-relaxed">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block w-8 h-[2px] bg-gradient-flag" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Sélection</span>
          </div>
        </Reveal>
        <Reveal><h2 className="font-display text-3xl md:text-5xl mb-10">Adresses gourmandes</h2></Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-4 py-2 text-xs tracking-[0.1em] uppercase border transition ${active === c.id
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white'
                  }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((a, i) => (
            <Reveal key={a.name} delay={(i % 3) * 0.05}>
              <AdresseCard a={a} />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}