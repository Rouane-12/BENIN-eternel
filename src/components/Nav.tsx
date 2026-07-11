
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { BeninIcon } from "./BeninIcon";
import { Button } from "./ui/button";

const NAV_GROUPS = [
  {
    label: "Héritage",
    links: [
      { href: "/histoire", label: "Histoire" },
      { href: "/culture", label: "Culture & Arts" },
      { href: "/artistes", label: "Artistes" },
      { href: "/stars-du-benin", label: "Influenceurs" },
      { href: "/gastronomie", label: "Gastronomie" },
    ],
  },
  {
    label: "Évasion",
    links: [
      { href: "/tourisme", label: "Tourisme" },
      { href: "/hebergement", label: "Hébergement" },
      { href: "/monuments", label: "Monuments" },
      { href: "/places-publiques", label: "Places Publiques" },
      { href: "/evenements", label: "Événements" },
    ],
  },
  {
    label: "Pratique",
    links: [
      { href: "/communes", label: "Communes" },
      { href: "/services", label: "Services Publics" },
      { href: "/carte", label: "Carte" },
      { href: "/a-propos", label: "À propos" },
    ],
  },
];

const ALL_LINKS = [
  { href: "/", label: "Accueil" },
  ...NAV_GROUPS.flatMap((g) => g.links),
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveGroup(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleGroup = (label: string) => {
    setActiveGroup(activeGroup === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[var(--background)]/85 backdrop-blur-xl border-b border-white/5 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 group relative z-10" onClick={() => { setOpen(false); setActiveGroup(null); }}>
          <div className="relative">
            <BeninIcon className="w-8 h-10 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-display tracking-[0.3em] uppercase text-sm leading-tight text-white">Bénin</span>
            <span className="font-script text-lg text-white/80 -mt-1">Éternel</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav ref={navRef} className="hidden xl:flex items-center gap-2">
          {NAV_GROUPS.map((group) => (
            <div
              key={group.label}
              className="relative px-4 py-2"
            >
              <button
                onClick={() => toggleGroup(group.label)}
                className={`flex items-center gap-1.5 text-[11px] tracking-[0.25em] uppercase transition-colors ${activeGroup === group.label ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {group.label}
                <ChevronDown size={10} className={`transition-transform duration-300 ${activeGroup === group.label ? "rotate-180" : ""}`} />
              </button>

              {activeGroup === group.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[var(--background)]/95 backdrop-blur-2xl border border-white/10 p-2 rounded-sm shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <div className="grid gap-1">
                    {group.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="group flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors text-[10px] tracking-[0.2em] text-white/70 hover:text-white rounded-sm"
                        onClick={() => setActiveGroup(null)}
                      >
                        {l.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="w-[1px] h-4 bg-white/10 mx-4" />

          <Button asChild variant="outline" className="rounded-full px-6 border-white/20 text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 h-9">
            <Link href="/carte" onClick={() => setActiveGroup(null)}>
              Explorer la Carte
            </Link>
          </Button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="xl:hidden text-white/80 p-2 relative z-10"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="fixed inset-0 z-40 xl:hidden bg-[var(--background)]/98 backdrop-blur-2xl flex flex-col justify-center px-10 animate-in fade-in">
          <nav className="flex flex-col gap-6 text-2xl font-display tracking-[0.1em] uppercase">
            {ALL_LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-all hover:pl-4"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col gap-4">
            <div className="text-[10px] tracking-[0.4em] uppercase text-white/30">Réseaux sociaux</div>
            <div className="flex gap-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

