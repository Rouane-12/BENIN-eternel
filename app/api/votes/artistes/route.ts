import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import fs from "node:fs/promises";
import path from "node:path";

const redis = Redis.fromEnv();
const DATA_FILE = path.join(process.cwd(), "src", "data", "artistes.json");

interface Artiste {
  id: string;
  votes: number;
  [key: string]: unknown;
}

function getVotesKey(scope: string) {
  return `votes:artistes:${scope}`;
}

async function getBaseData(): Promise<Artiste[]> {
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

async function getMergedData(scope: string): Promise<Artiste[]> {
  const base = await getBaseData();
  const votes = (await redis.hgetall<Record<string, number>>(getVotesKey(scope))) ?? {};
  return base.map((a) => ({
    ...a,
    votes: Number(votes[a.id] ?? 0),
  }));
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const scope = searchParams.get("scope") || "global";
    const data = await getMergedData(scope);
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
    const { id, scope } = await req.json();
    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "id manquant" }, { status: 400 });
    }
    const finalScope = typeof scope === "string" && scope ? scope : "global";

    const base = await getBaseData();
    const item = base.find((a) => a.id === id);
    if (!item) {
      return NextResponse.json(
        { error: "Artiste introuvable" },
        { status: 404 },
      );
    }

    const newCount = await redis.hincrby(getVotesKey(finalScope), id, 1);
    return NextResponse.json({ ...item, votes: newCount });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id, scope } = await req.json();
    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "id manquant" }, { status: 400 });
    }
    const finalScope = typeof scope === "string" && scope ? scope : "global";

    const base = await getBaseData();
    const item = base.find((a) => a.id === id);
    if (!item) {
      return NextResponse.json({ error: "Artiste introuvable" }, { status: 404 });
    }

    const current = (await redis.hget<number>(getVotesKey(finalScope), id)) ?? 0;
    if (current <= 0) {
      return NextResponse.json({ ...item, votes: 0 });
    }

    const newCount = await redis.hincrby(getVotesKey(finalScope), id, -1);
    return NextResponse.json({ ...item, votes: Math.max(0, newCount) });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}