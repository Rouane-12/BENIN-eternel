'use client';
import { cn } from '@/lib/utils';

export interface Tab {
    key: string;
    label: string;
}

interface SegmentedTabsProps {
    tabs: Tab[];
    active: string;
    onChange: (key: string) => void;
    className?: string;
}

export function SegmentedTabs({ tabs, active, onChange, className }: SegmentedTabsProps) {
    return (
        <div className={cn('flex flex-wrap gap-3 justify-center', className)}>
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => onChange(tab.key)}
                    className={cn(
                        'px-7 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase transition-all duration-300 border',
                        active === tab.key
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-white/50 border-white/10 hover:border-white/25 hover:text-white/80'
                    )}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}