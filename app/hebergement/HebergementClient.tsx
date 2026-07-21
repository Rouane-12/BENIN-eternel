'use client';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { HEBERGEMENTS } from '@/data/hebergements';
import { Phone, MapPin, Star, Building2, Hotel, MessageCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { SegmentedTabs, type Tab } from '@/components/SegmentedTabs';
import { ListingCallout } from '@/components/ListingCallout';

const HOTEL_CATEGORIES = [
  { key: 'luxe', label: 'Hôtels Luxe', description: "4 à 5 étoiles — Diplomates, cadres & voyageurs d'exception" },
  { key: 'milieu', label: 'Hôtels Confort', description: 'Excellent rapport qualité-prix au cœur de Cotonou' },
  { key: 'plage', label: 'Escapades Balnéaires', description: 'Ouidah & Grand-Popo — pieds dans le sable' },
];

const TABS: Tab[] = [
  ...HOTEL_CATEGORIES.map((c) => ({ key: c.key, label: c.label })),
  { key: 'agence', label: 'Agences' },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function PhoneLink({ tel, label }: { tel: string; label?: string }) {
  return (
    <a href={`tel:${tel.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
      {label ?? tel}
    </a>
  );
}

function WhatsAppLink({ wa }: { wa: string }) {
  const num = wa.replace(/[^0-9]/g, '');
  return (
    <a
      href={`https://wa.me/${num}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors text-xs"
    >
      <MessageCircle className="w-3.5 h-3.5" />
      WhatsApp
    </a>
  );
}

function HotelCard({ h, index }: { h: typeof HEBERGEMENTS[number]; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group bg-white/[0.03] border border-white/10 hover:border-white/25 transition-all duration-500 overflow-hidden flex flex-col h-full">
        <div className="relative h-56 overflow-hidden">
          <img
            src={h.image}
            alt={h.nom}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 flex items-center gap-1.5 rounded-full border border-white/10">
            <Hotel className="w-3 h-3 text-white/70" />
            <span className="text-[9px] tracking-[0.2em] uppercase text-white/80">Hôtel</span>
          </div>
          {h.etoiles && (
            <div className="absolute top-4 right-4">
              <StarRating count={h.etoiles} />
            </div>
          )}
          <div className="absolute bottom-4 left-4">
            <span className="text-[9px] tracking-[0.25em] uppercase text-white/50">{h.ville}</span>
          </div>
        </div>

        <div className="p-7 flex flex-col flex-1">
          <h3 className="font-display text-xl leading-tight mb-3 group-hover:text-white/90 transition-colors">
            {h.nom}
          </h3>
          <p className="text-[13px] text-white/55 leading-relaxed mb-6 flex-1">{h.description}</p>

          <div className="space-y-2.5 pt-5 border-t border-white/5 text-[12px] text-white/60">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-white/25 shrink-0" />
              <span>{h.localisation}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-white/25 shrink-0" />
              <PhoneLink tel={h.telephone} />
            </div>
            {h.telephone2 && (
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-white/25 shrink-0" />
                <PhoneLink tel={h.telephone2} />
              </div>
            )}
          </div>


          <a
            href={`tel:${h.telephone.replace(/\s/g, '')}`}
            className="mt-6 block w-full py-3.5 text-center bg-white/[0.04] hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-400 text-[9px] tracking-[0.3em] uppercase"
          >
            Réserver
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function AgencyCard({ h, index }: { h: typeof HEBERGEMENTS[number]; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 p-7 flex flex-col gap-5 h-full">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-white/30" />
              <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">Agence immobilière</span>
            </div>
            <h3 className="font-display text-xl group-hover:text-white transition-colors">{h.nom}</h3>
          </div>
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent shrink-0" />
        </div>

        {h.zonesCouverts && (
          <div className="flex-1">
            <p className="text-[9px] tracking-[0.2em] uppercase text-white/30 mb-3">Zones couvertes</p>
            <div className="flex flex-wrap gap-1.5">
              {h.zonesCouverts.map((zone) => (
                <span key={zone} className="inline-flex items-center gap-1 px-2.5 py-1 border border-white/10 text-[10px] text-white/60 rounded-full">
                  <CheckCircle className="w-2.5 h-2.5 text-white/30" />
                  {zone}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="pt-5 border-t border-white/5 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-[12px] text-white/60">
              <MapPin className="w-3.5 h-3.5 text-white/25 shrink-0" />
              <span>{h.localisation}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-[12px] text-white/60">
              <Phone className="w-3.5 h-3.5 text-white/25 shrink-0" />
              <PhoneLink tel={h.telephone} />
            </div>
            {h.whatsapp && <WhatsAppLink wa={h.whatsapp} />}
          </div>
          {h.telephone2 && (
            <div className="flex items-center gap-2.5 text-[12px] text-white/60">
              <Phone className="w-3.5 h-3.5 text-white/25 shrink-0" />
              <PhoneLink tel={h.telephone2} />
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <span className="text-[9px] tracking-[0.35em] uppercase text-white/30 block mb-3">{eyebrow}</span>
      <h2 className="font-display text-4xl lg:text-5xl mb-4">{title}</h2>
      {subtitle && <p className="text-sm text-white/45 max-w-xl">{subtitle}</p>}
    </div>
  );
}

export default function HebergementClient() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].key);

  const activeCategory = HOTEL_CATEGORIES.find((c) => c.key === activeTab);
  const isAgence = activeTab === 'agence';

  const hotels = activeCategory
    ? HEBERGEMENTS.filter((h) => h.type === 'Hôtel' && h.categorie === activeCategory.key)
    : [];
  const agences = HEBERGEMENTS.filter((h) => h.type === 'Agence');

  return (
    <SiteLayout>
      <PageHero
        kicker="Séjour"
        title="Hébergement"
        script="d'exception"
        intro="Hôtels de luxe, villas privées ou appartements meublés — une sélection rigoureuse pour chaque profil de voyageur au Bénin."
        image="/plan.jpg"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <SegmentedTabs tabs={TABS} active={activeTab} onChange={setActiveTab} className="mb-16" />

        {activeCategory && (
          <div id="hotels">
            <SectionHeader eyebrow="Hôtels" title={activeCategory.label} subtitle={activeCategory.description} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((h, i) => (
                <HotelCard key={h.id} h={h} index={i} />
              ))}
            </div>
          </div>
        )}

        {isAgence && (
          <div id="agences">
            <SectionHeader
              eyebrow="Agences"
              title="Appartements meublés"
              subtitle="Ces agences sérieuses proposent des appartements meublés et des villas en location longue durée, idéales pour expatriés, missions et familles."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agences.map((h, i) => (
                <AgencyCard key={h.id} h={h} index={i} />
              ))}
            </div>

            <div className="mt-10 p-6 border border-white/5 bg-white/[0.02]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-3">
                Contacts directs — appartements meublés
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { label: 'Fidjrossè', tel: '+229 01 96 97 37 37' },
                  { label: 'Cotonou centre', tel: '+229 01 97 20 11 07' },
                  { label: 'Cotonou / Bénin', tel: '+229 01 62 25 27 25' },
                  { label: 'Résidence Aidjèdo', tel: '+229 61 19 19 19' },
                ].map((c) => (
                  <div key={c.tel} className="flex items-center justify-between gap-3 px-4 py-3 border border-white/5 text-[12px]">
                    <span className="text-white/40">{c.label}</span>
                    <a href={`tel:${c.tel.replace(/\s/g, '')}`} className="text-white/70 hover:text-white transition-colors">
                      {c.tel}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <ListingCallout
          title="Votre hôtel, appartement ou résidence mérite sa place ici"
          description="Vous gérez un établissement au Bénin et souhaitez apparaître sur cette page ? Écrivez-nous, nous étudierons votre demande avec plaisir."
          email="djossouvirouane@gmail.com"
        />
      </section>
    </SiteLayout>
  );
}