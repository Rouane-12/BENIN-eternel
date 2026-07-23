"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { BeninIcon } from "./BeninIcon";
import { Button } from "./ui/button";
import Image from "next/image";

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
      { href: "/a-propos", label: "À propos" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(NAV_GROUPS[0].label);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleGroup = (label: string) => {
    setActiveGroup(activeGroup === label ? null : label);
  };

  const toggleMobileGroup = (label: string) => {
    setMobileOpenGroup(mobileOpenGroup === label ? null : label);
  };

  const mobileMenu = (
    <div className="fixed inset-0 z-[100] xl:hidden bg-[var(--background)] overflow-y-auto animate-in fade-in">
      <div className="min-h-full px-6 pt-24 pb-12 flex flex-col">
        <button
          className="absolute top-5 right-6 text-white/80 p-2"
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
        >
          <X size={24} />
        </button>

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors pb-5 mb-5 border-b border-white/10"
        >
          Accueil
        </Link>

        <nav className="flex flex-col gap-1">
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="border-b border-white/10">
              <button
                onClick={() => toggleMobileGroup(group.label)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-sm tracking-[0.2em] uppercase text-white font-medium">
                  {group.label}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-white/50 transition-transform duration-300 ${mobileOpenGroup === group.label ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${mobileOpenGroup === group.label ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-0.5 pb-4 pl-3">
                    {group.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="text-[13px] tracking-[0.1em] text-white/60 hover:text-white transition-colors py-2.5"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-10 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="text-[10px] tracking-[0.4em] uppercase text-white/30">Réseaux sociaux</div>
            <div className="flex gap-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Facebook</a>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 border border-white/15 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-colors"
          >
            <X size={16} />
            <span className="text-[11px] tracking-[0.3em] uppercase">Fermer le menu</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[var(--background)]/85 backdrop-blur-xl border-b border-white/5 py-5"
        : "bg-transparent py-5"
        } ${open ? "!bg-[var(--background)] !py-5" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-4 group relative z-10"
          onClick={() => {
            setOpen(false);
            setActiveGroup(null);
          }}
        >
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Logo Bénin"
              width={40}
              height={40}
              className="transition-transform duration-500 group-hover:scale-110 object-contain"
              priority
            />
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="flex flex-col">
            <span className="font-display tracking-[0.3em] uppercase text-sm leading-tight text-white">
              Bénin
            </span>
            <span className="font-script text-lg text-white/80 -mt-1">
              Éternel
            </span>
          </div>
        </Link>

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

        <button
          className="xl:hidden text-white/80 p-2 relative z-10"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mounted && open && createPortal(mobileMenu, document.body)}
    </header>
  );
}