import { useState, useEffect } from "react";

export function useVotes<T extends { id: string | number; votes: number }>(
  key: string,
  initialData: T[]
): [T[], (id: string | number) => void, Set<string | number>] {
  const [items, setItems] = useState<T[]>(initialData);
  const [votedItems, setVotedItems] = useState<Set<string | number>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedVotesStr = localStorage.getItem(key);
    const savedVotedItemsStr = localStorage.getItem(`${key}-voted-items`);
    if (savedVotesStr) {
      try {
        const savedVotes: Record<string | number, number> = JSON.parse(savedVotesStr);
        const updatedData = initialData
          .map((item) => ({
            ...item,
            votes: savedVotes[item.id] ?? item.votes,
          }))
          .sort((a, b) => b.votes - a.votes);
        setItems(updatedData);
      } catch (e) {
        console.error("Error parsing saved votes:", e);
      }
    }
    if (savedVotedItemsStr) {
      try {
        const savedVoted: string[] = JSON.parse(savedVotedItemsStr);
        setVotedItems(new Set(savedVoted));
      } catch (e) {
        console.error("Error parsing saved voted items:", e);
      }
    }
  }, [key, initialData]);

  const handleVote = (id: string | number) => {
    if (votedItems.has(id)) return; // Prevent multiple votes

    const newVotedItems = new Set(votedItems);
    newVotedItems.add(id);
    setVotedItems(newVotedItems);

    const updated = items
      .map((item) => {
        if (item.id === id) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      })
      .sort((a, b) => b.votes - a.votes);

    setItems(updated);

    const votesObject = updated.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.votes }),
      {}
    );
    localStorage.setItem(key, JSON.stringify(votesObject));
    localStorage.setItem(`${key}-voted-items`, JSON.stringify([...newVotedItems]));
  };

  return [items, handleVote, votedItems];
}
