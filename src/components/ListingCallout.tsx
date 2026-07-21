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
        <div className={`mt-20 p-10 border border-white/10 bg-white/[0.02] text-center max-w-2xl mx-auto ${className ?? ''}`}>
            <span className="text-[9px] tracking-[0.35em] uppercase text-white/30 block mb-4">
                {eyebrow}
            </span>
            <h3 className="font-display text-2xl mb-4">{title}</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-7">{description}</p>


            <a href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 px-7 py-3 border border-white/15 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-[10px] tracking-[0.25em] uppercase"
            >
                <Mail className="w-3.5 h-3.5" />
                {email}
            </a>
        </div>
    );
}