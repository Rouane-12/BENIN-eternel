'use client';
import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Music2 } from 'lucide-react';
import { useAudio } from '@/context/AudioContext';

export function BackgroundMusicWidget() {
    const { playing, volume, muted, togglePlay, setVolume, toggleMute } = useAudio();
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-2 py-2 transition-all duration-300"
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            <button
                onClick={togglePlay}
                className="flex-shrink-0 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
            >
                {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            <div
                className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${expanded ? 'max-w-[160px] opacity-100 pl-1' : 'max-w-0 opacity-0'
                    }`}
            >
                <Music2 className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
                <button onClick={toggleMute} className="text-white/50 hover:text-white/80 transition-colors flex-shrink-0">
                    {muted || volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={muted ? 0 : volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-16 accent-white/70"
                />
            </div>
        </div>
    );
}