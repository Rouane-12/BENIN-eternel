// src/app/api/votes/artistes/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import fs from "node:fs/promises";
import path from "node:path";

const redis = Redis.fromEnv();
const DATA_FILE = path.join(process.cwd(), "src", "data", "artistes.json");
const VOTES_KEY = "votes:artistes"; // hash { [id]: count }

interface Artiste {
  id: string;
  votes: number;
  [key: string]: unknown;
}

async function getBaseData(): Promise<Artiste[]> {
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

// Fusionne les données statiques (json, lu en lecture seule) avec les votes stockés dans Redis
async function getMergedData(): Promise<Artiste[]> {
  const base = await getBaseData();
  const votes = (await redis.hgetall<Record<string, number>>(VOTES_KEY)) ?? {};
  return base.map((a) => ({
    ...a,
    votes: Number(votes[a.id] ?? a.votes ?? 0),
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
    const exists = base.some((a) => a.id === id);
    if (!exists) {
      return NextResponse.json(
        { error: "Artiste introuvable" },
        { status: 404 },
      );
    }

    const newCount = await redis.hincrby(VOTES_KEY, id, 1);
    const item = base.find((a) => a.id === id)!;

    return NextResponse.json({ ...item, votes: newCount });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}