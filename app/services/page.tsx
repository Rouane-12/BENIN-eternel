'use client';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { SERVICES_PUBLICS, ServicePublic } from '@/data/services-publics';
import { useState, useMemo } from 'react';
import { Search, Phone, Mail, MapPin, Clock, ExternalLink, ChevronRight } from 'lucide-react';

function ServiceCard({ service, index }: { service: ServicePublic; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = Boolean(service.email || service.horaires || (service.services?.length ?? 0) > 0);

  return (
    <Reveal delay={index * 0.05}>
      <article className={`group relative bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 rounded-sm overflow-hidden flex flex-col ${expanded ? 'row-span-2' : ''}`}>
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 bg-white/5 px-2 py-1 rounded-sm">
              {service.categorie}
            </span>
            <div className="w-1 h-6 bg-gradient-to-b from-oklch(0.55 0.14 152) to-oklch(0.88 0.17 92)" />
          </div>

          <h3 className="font-display text-2xl mb-1 group-hover:text-white transition-colors">
            {service.sigle}
          </h3>
          <p className="text-[10px] uppercase tracking-[0.1em] text-white/30 mb-4 line-clamp-1">
            {service.nom}
          </p>

          <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-3 group-hover:text-white/80 transition-colors">
            {service.description}
          </p>

          <div className="space-y-3">
            {service.adresse && (
              <div className="flex items-start gap-3 text-[11px] text-white/50">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>{service.adresse}</span>
              </div>
            )}
            {service.telephone && (
              <div className="flex items-center gap-3 text-[11px] text-white/50">
                <Phone size={14} className="flex-shrink-0" />
                <span>{service.telephone}</span>
              </div>
            )}
          </div>

          {hasMore && (
            <div className={`mt-6 pt-6 border-t border-white/5 space-y-4 overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {service.email && (
                <div className="flex items-center gap-3 text-[11px] text-white/50">
                  <Mail size={14} className="flex-shrink-0" />
                  <span>{service.email}</span>
                </div>
              )}
              {service.horaires && (
                <div className="flex items-start gap-3 text-[11px] text-white/50">
                  <Clock size={14} className="mt-0.5 flex-shrink-0" />
                  <span>{service.horaires}</span>
                </div>
              )}
              {(service.services?.length ?? 0) > 0 && (
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2">Services principaux :</p>
                  <div className="flex flex-wrap gap-2">
                    {(service.services ?? []).map((s) => (
                      <span key={s} className="text-[10px] px-2 py-1 bg-white/5 rounded-sm text-white/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            {hasMore ? (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white flex items-center gap-2 transition-colors"
              >
                {expanded ? "Moins d'infos" : "Plus d'infos"}
                <ChevronRight size={12} className={`transition-transform duration-300 ${expanded ? '-rotate-90' : 'rotate-90'}`} />
              </button>
            ) : (
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                Infos
              </span>
            )}

            {service.site_web && (
              <a
                href={service.site_web}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/60 hover:text-white transition-all"
                title="Visiter le site web"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Toutes");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(SERVICES_PUBLICS.map((s) => s.categorie)));
    return ["Toutes", ...cats.sort()];
  }, []);

  const filteredServices = useMemo(() => {
    return SERVICES_PUBLICS.filter((s) => {
      const matchesSearch =
        s.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.sigle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "Toutes" || s.categorie === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <SiteLayout>
      <PageHero
        kicker="Annuaire Officiel"
        title="Services"
        script="Publics"
        intro="Retrouvez les informations essentielles sur les organismes publics, agences gouvernementales et entreprises d'État du Bénin."
        image="/f2.webp"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-end">
            <div className="flex-1 w-full">
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 block">Rechercher un service</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input
                  type="text"
                  placeholder="Ex: SBEE, Impôts, Santé..."
                  className="w-full bg-white/5 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-white/30 transition-colors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full md:w-64">
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 block">Catégorie</label>
              <select
                className="w-full bg-white/5 border border-white/10 rounded-sm py-4 px-4 text-sm focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#0a0a0a]">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 font-display text-xl">Aucun service trouvé pour votre recherche.</p>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
