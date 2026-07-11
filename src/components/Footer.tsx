
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-32">
      <div className="h-1 bg-gradient-flag" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-2.5 h-7 bg-gradient-flag-v rounded-sm" />
            <span className="font-display tracking-[0.25em] uppercase">Bénin&nbsp;Éternel</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            La plateforme premium dédiée à la découverte du Bénin : son histoire, sa culture,
            ses royaumes et ses merveilles naturelles.
          </p>
          <p className="mt-6 font-script text-4xl text-white/70">« Ayi we mi mɔ »</p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-2">Bienvenue en pays Fon</p>
        </div>
        <div>
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">Découvrir</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/histoire", "Histoire & Rois"],
              ["/culture", "Culture & Arts"],
              ["/tourisme", "Tourisme"],
              ["/monuments", "Monuments"],
              ["/plages", "Plages"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/70 hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">Explorer</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/gastronomie", "Gastronomie"],
              ["/communes", "Communes & Départements"],
              ["/carte", "Carte interactive"],
              ["/a-propos", "À propos"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/70 hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">Newsletter</h4>
          <p className="text-sm text-white/60 mb-4">Recevez nos récits et itinéraires.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
              if (input?.value) input.value = "";
            }}
            className="flex"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="votre@email.com"
              className="flex-1 bg-white/5 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-white/40"
            />
            <button className="px-4 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-white/90">
              OK
            </button>
          </form>
          <div className="flex gap-4 mt-6 text-white/60">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="Youtube"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-[10px] uppercase tracking-[0.3em] text-white/40">
        © {new Date().getFullYear()} Bénin Éternel — Tous droits réservés
      </div>
    </footer>
  );
}
