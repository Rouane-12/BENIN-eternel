import { useState, useEffect, useCallback } from "react";

export function useVotes<T extends { id: string; votes: number }>(
  apiPath: string,
  initialData: T[],
): [T[], (id: string) => void, Set<string>, boolean] {
  const votedKey = `${apiPath}-voted-items`;

  const [items, setItems] = useState<T[]>(initialData);
  const [loading, setLoading] = useState(true);

  // Lecture du localStorage déplacée dans l'initialiseur paresseux (pas d'effet nécessaire)
  const [votedItems, setVotedItems] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set(); // sécurité SSR
    try {
      const saved = localStorage.getItem(votedKey);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      console.error("Erreur lecture votes locaux:", e);
      return new Set();
    }
  });

  // Ici on garde l'effet uniquement pour le fetch (vrai appel externe asynchrone)
  useEffect(() => {
    let cancelled = false;

    fetch(apiPath)
      .then((res) => res.json())
      .then((data: T[]) => {
        if (!cancelled) {
          setItems([...data].sort((a, b) => b.votes - a.votes));
        }
      })
      .catch((e) => console.error("Erreur chargement des votes:", e))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [apiPath]);

  const handleVote = useCallback(
    async (id: string) => {
      if (votedItems.has(id)) return;

      const newVotedItems = new Set(votedItems).add(id);
      setVotedItems(newVotedItems);
      localStorage.setItem(votedKey, JSON.stringify([...newVotedItems]));

      // mise à jour optimiste de l'UI
      setItems((prev) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, votes: item.votes + 1 } : item,
          )
          .sort((a, b) => b.votes - a.votes),
      );

      try {
        const res = await fetch(apiPath, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        if (!res.ok) throw new Error("Vote refusé par le serveur");
        const updated: T = await res.json();

        setItems((prev) =>
          prev
            .map((item) =>
              item.id === id ? { ...item, votes: updated.votes } : item,
            )
            .sort((a, b) => b.votes - a.votes),
        );
      } catch (e) {
        console.error(e);
        // rollback si l'API échoue
        newVotedItems.delete(id);
        setVotedItems(new Set(newVotedItems));
        localStorage.setItem(votedKey, JSON.stringify([...newVotedItems]));
        setItems((prev) =>
          prev
            .map((item) =>
              item.id === id ? { ...item, votes: item.votes - 1 } : item,
            )
            .sort((a, b) => b.votes - a.votes),
        );
      }
    },
    [apiPath, votedItems, votedKey],
  );

  return [items, handleVote, votedItems, loading];
}
