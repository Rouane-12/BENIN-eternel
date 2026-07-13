import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

const DATA_FILE = path.join(process.cwd(), "src", "data", "artistes.json");

interface Artiste {
  id: string;
  votes: number;
  [key: string]: unknown;
}

let writeQueue: Promise<unknown> = Promise.resolve();
function queueWrite<T>(task: () => Promise<T>): Promise<T> {
  const result = writeQueue.then(task, task);
  writeQueue = result.catch(() => {});
  return result;
}

async function readData(): Promise<Artiste[]> {
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

async function writeData(data: Artiste[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 4), "utf-8");
}

export async function GET() {
  try {
    const data = await readData();
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

    const updatedItem = await queueWrite(async () => {
      const data = await readData();
      const item = data.find((a) => a.id === id);
      if (!item) return null;
      item.votes += 1;
      await writeData(data);
      return item;
    });

    if (!updatedItem) {
      return NextResponse.json(
        { error: "Artiste introuvable" },
        { status: 404 },
      );
    }
    return NextResponse.json(updatedItem);
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
