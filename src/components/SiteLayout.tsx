import { useEffect, useState, type ReactNode } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Globe3D } from "./Globe3D";

export function SiteLayout({ children, showGlobe = true }: { children: ReactNode; showGlobe?: boolean }) {
  const { scrollYProgress } = useScroll();
  const [p, setP] = useState(0);

  useEffect(() => scrollYProgress.on("change", setP), [scrollYProgress]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.8, 0.95, 0.95, 0.8]
  );

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden min-h-screen relative">
      {/* Arrière-plan global stylisé */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/fond4.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.07] grayscale scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />
        <div className="absolute inset-0 noise opacity-20" />
      </div>

      <Nav />
      {showGlobe && (
        <motion.div
          aria-hidden
          style={{ opacity }}
          className="hidden lg:block fixed top-1/2 -right-[10vw] -translate-y-1/2 w-[38vw] max-w-[550px] aspect-square z-0 pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Globe3D scrollProgress={p} />
            {/* Glow plus large et plus visible en fond */}
            <div className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] blur-[180px]" />
            <div className="absolute inset-10 -z-10 rounded-full bg-white/[0.05] blur-[120px]" />
          </div>
        </motion.div>
      )}
      <main className="relative z-10 pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  script,
  intro,
  image,
}: {
  kicker: string;
  title: string;
  script?: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/60 to-[var(--background)]" />
        </>
      )}
      <div className="absolute inset-0 noise" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-10 h-[2px] bg-gradient-flag" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-white/70">{kicker}</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
          {title}
          {script && (
            <span className="block font-script text-6xl md:text-8xl text-white/95 mt-2">{script}</span>
          )}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">{intro}</p>
      </div>
    </section>
  );
}