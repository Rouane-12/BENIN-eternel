'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { SiteLayout, PageHero } from '@/components/SiteLayout';
import { Reveal } from '@/components/Reveal';
import { KINGS } from '@/data/kings';

export default function KingPage() {
  const { slug } = useParams();
  if (!slug || typeof slug !== 'string') return notFound();

  const king = KINGS.find((k) => k.slug === slug);
  if (!king) return notFound();

  const idx = KINGS.findIndex((x) => x.slug === king.slug);
  const prev = KINGS[idx - 1];
  const next = KINGS[idx + 1];

  return (
    <SiteLayout>
      <PageHero
        kicker={king.reign}
        title={king.name}
        script={king.epithet}
        intro={king.summary}
        image="/abomey.jpg"
      />
      <article className="max-w-3xl mx-auto px-6 lg:px-0 py-16">
        <Reveal>
          <div className="space-y-7 text-lg text-white/80 leading-[1.85] font-serif">
            {king.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-14 p-8 border-l-2 border-white bg-white/[0.02]">
            <div className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-2">Héritage</div>
            <p className="font-display text-xl">{king.legacy}</p>
          </div>
        </Reveal>

        <nav className="mt-16 grid sm:grid-cols-2 gap-4">
          {prev && (
            <Link
              href={`/rois/${prev.slug}`}
              className="p-5 border border-white/10 hover:border-white/40 transition"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">← Précédent</div>
              <div className="font-display text-xl mt-1">{prev.name}</div>
            </Link>
          )}
          {next && (
            <Link
              href={`/rois/${next.slug}`}
              className="p-5 border border-white/10 hover:border-white/40 transition sm:text-right"
            >
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">Suivant →</div>
              <div className="font-display text-xl mt-1">{next.name}</div>
            </Link>
          )}
        </nav>
        <div className="mt-8 text-center">
          <Link href="/histoire" className="text-xs tracking-[0.3em] uppercase text-white/60 hover:text-white">
            ↑ Tous les rois
          </Link>
        </div>
      </article>
    </SiteLayout>
  );
}
