'use client';

import { Mail } from 'lucide-react';

interface ListingCalloutProps {
  eyebrow?: string;
  title: string;
  description: string;
  email: string;
  className?: string;
}

export function ListingCallout({
  eyebrow = 'Vous y êtes ?',
  title,
  description,
  email,
  className,
}: ListingCalloutProps) {
  return (
    <div className={`mt-20 p-6 sm:p-10 border border-white/10 bg-white/[0.02] text-center max-w-2xl mx-auto ${className ?? ''}`}>
      <span className="text-[9px] tracking-[0.35em] uppercase text-white/30 block mb-4">
        {eyebrow}
      </span>

      <h3 className="font-display text-xl sm:text-2xl mb-4">{title}</h3>

      <p className="text-sm text-white/45 leading-relaxed mb-7">{description}</p>

      <a
        href={`mailto:${email}`}
        className="mx-auto inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/15 px-4 sm:px-6 py-3 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
      >
        <Mail className="h-3.5 w-3.5 shrink-0" />
        <span className="min-w-0 truncate">{email}</span>
      </a>
    </div>
  );
}