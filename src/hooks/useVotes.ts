import { useState, useEffect, useCallback } from "react";

export function useVotes<T extends { id: string; votes: number }>(
  apiPath: string,
  initialData: T[],
  scope: string = "global",
): [T[], (id: string) => void, Set<string>, boolean] {
  const votedKey = `${apiPath}-voted-item-${scope}`;

  const [items, setItems] = useState<T[]>(initialData);
  const [loading, setLoading] = useState(true);
  const [votedId, setVotedId] = useState<string | null>(null);

  useEffect(() => {
    setVotedId(null);
    try {
      const saved = localStorage.getItem(votedKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setVotedId(parsed[0] ?? null);
        } else if (typeof parsed === "string") {
          setVotedId(parsed);
        }
      }
    } catch (e) {
      console.error("Erreur lecture votes locaux:", e);
    }
  }, [votedKey]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch(`${apiPath}?scope=${encodeURIComponent(scope)}`)
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
  }, [apiPath, scope]);

  const persistVotedId = useCallback(
    (id: string | null) => {
      if (id) {
        localStorage.setItem(votedKey, JSON.stringify(id));
      } else {
        localStorage.removeItem(votedKey);
      }
    },
    [votedKey],
  );

  const handleVote = useCallback(
    async (id: string) => {
      const previousId = votedId;

      if (previousId === id) {
        setVotedId(null);
        persistVotedId(null);

        setItems((prev) =>
          prev
            .map((item) =>
              item.id === id ? { ...item, votes: Math.max(0, item.votes - 1) } : item,
            )
            .sort((a, b) => b.votes - a.votes),
        );

        try {
          const res = await fetch(apiPath, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, scope }),
          });
          if (!res.ok) throw new Error("Annulation du vote refusée par le serveur");
          const updated: T = await res.json();
          setItems((prev) =>
            prev
              .map((item) => (item.id === id ? { ...item, votes: updated.votes } : item))
              .sort((a, b) => b.votes - a.votes),
          );
        } catch (e) {
          console.error(e);
          setVotedId(id);
          persistVotedId(id);
          setItems((prev) =>
            prev
              .map((item) => (item.id === id ? { ...item, votes: item.votes + 1 } : item))
              .sort((a, b) => b.votes - a.votes),
          );
        }
        return;
      }

      setVotedId(id);
      persistVotedId(id);

      setItems((prev) =>
        prev
          .map((item) => {
            if (item.id === id) return { ...item, votes: item.votes + 1 };
            if (previousId && item.id === previousId) return { ...item, votes: Math.max(0, item.votes - 1) };
            return item;
          })
          .sort((a, b) => b.votes - a.votes),
      );

      try {
        const res = await fetch(apiPath, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, scope }),
        });
        if (!res.ok) throw new Error("Vote refusé par le serveur");
        const updated: T = await res.json();

        setItems((prev) =>
          prev
            .map((item) => (item.id === id ? { ...item, votes: updated.votes } : item))
            .sort((a, b) => b.votes - a.votes),
        );

        if (previousId) {
          fetch(apiPath, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: previousId, scope }),
          })
            .then((res) => (res.ok ? res.json() : null))
            .then((updatedPrev: T | null) => {
              if (updatedPrev) {
                setItems((prev) =>
                  prev
                    .map((item) => (item.id === previousId ? { ...item, votes: updatedPrev.votes } : item))
                    .sort((a, b) => b.votes - a.votes),
                );
              }
            })
            .catch((e) => console.error("Erreur annulation ancien vote:", e));
        }
      } catch (e) {
        console.error(e);
        setVotedId(previousId);
        persistVotedId(previousId);
        setItems((prev) =>
          prev
            .map((item) => {
              if (item.id === id) return { ...item, votes: Math.max(0, item.votes - 1) };
              if (previousId && item.id === previousId) return { ...item, votes: item.votes + 1 };
              return item;
            })
            .sort((a, b) => b.votes - a.votes),
        );
      }
    },
    [apiPath, votedId, persistVotedId, scope],
  );

  const votedItems = new Set<string>(votedId ? [votedId] : []);

  return [items, handleVote, votedItems, loading];
}