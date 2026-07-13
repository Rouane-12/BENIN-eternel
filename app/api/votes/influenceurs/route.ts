// src/app/api/votes/influenceurs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import fs from "node:fs/promises";
import path from "node:path";

const redis = Redis.fromEnv();
const DATA_FILE = path.join(process.cwd(), "src", "data", "influenceurs.json");
const VOTES_KEY = "votes:influenceurs"; // hash { [id]: count }

interface Influenceur {
    id: string;
    votes: number;
    [key: string]: unknown;
}

async function getBaseData(): Promise<Influenceur[]> {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
}

async function getMergedData(): Promise<Influenceur[]> {
    const base = await getBaseData();
    const votes = (await redis.hgetall<Record<string, number>>(VOTES_KEY)) ?? {};
    return base.map((i) => ({
        ...i,
        votes: Number(votes[i.id] ?? i.votes ?? 0),
    }));
}

export async function GET() {
    try {
        const data = await getMergedData();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json(
            { error: "Impossible de lire les votes" },
            { status: 500 },
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();
        if (!id || typeof id !== "string") {
            return NextResponse.json({ error: "id manquant" }, { status: 400 });
        }

        const base = await getBaseData();
        const item = base.find((i) => i.id === id);
        if (!item) {
            return NextResponse.json(
                { error: "Influenceur introuvable" },
                { status: 404 },
            );
        }

        const newCount = await redis.hincrby(VOTES_KEY, id, 1);
        return NextResponse.json({ ...item, votes: newCount });
    } catch {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();
        if (!id || typeof id !== "string") {
            return NextResponse.json({ error: "id manquant" }, { status: 400 });
        }

        const base = await getBaseData();
        const item = base.find((i) => i.id === id);
        if (!item) {
            return NextResponse.json({ error: "Influenceur introuvable" }, { status: 404 });
        }

        const current = (await redis.hget<number>(VOTES_KEY, id)) ?? 0;
        if (current <= 0) {
            return NextResponse.json({ ...item, votes: 0 });
        }

        const newCount = await redis.hincrby(VOTES_KEY, id, -1);
        return NextResponse.json({ ...item, votes: Math.max(0, newCount) });
    } catch {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}