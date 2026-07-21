'use client';
import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

interface AudioContextValue {
    playing: boolean;
    volume: number;
    muted: boolean;
    togglePlay: () => void;
    setVolume: (v: number) => void;
    toggleMute: () => void;
}

const AudioCtx = createContext<AudioContextValue | null>(null);

const VOLUME_KEY = 'benin-bg-music-volume';
const MUTED_KEY = 'benin-bg-music-muted';

export function AudioProvider({ src, children }: { src: string; children: ReactNode }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolumeState] = useState(0.2);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        const savedVolume = localStorage.getItem(VOLUME_KEY);
        const savedMuted = localStorage.getItem(MUTED_KEY);
        if (savedVolume) setVolumeState(Number(savedVolume));
        if (savedMuted) setMuted(savedMuted === 'true');
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = muted;
        }
    }, [muted]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (playing) {
            audio.pause();
            setPlaying(false);
        } else {
            audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        }
    };

    const setVolume = (v: number) => {
        setVolumeState(v);
        localStorage.setItem(VOLUME_KEY, String(v));
        if (v === 0) {
            setMuted(true);
            localStorage.setItem(MUTED_KEY, 'true');
        } else if (muted) {
            setMuted(false);
            localStorage.setItem(MUTED_KEY, 'false');
        }
    };

    const toggleMute = () => {
        setMuted((prev) => {
            const next = !prev;
            localStorage.setItem(MUTED_KEY, String(next));
            return next;
        });
    };

    return (
        <AudioCtx.Provider value={{ playing, volume, muted, togglePlay, setVolume, toggleMute }}>
            <audio ref={audioRef} src={src} loop preload="none" />
            {children}
        </AudioCtx.Provider>
    );
}

export function useAudio() {
    const ctx = useContext(AudioCtx);
    if (!ctx) throw new Error('useAudio doit être utilisé dans un AudioProvider');
    return ctx;
}