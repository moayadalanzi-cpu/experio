"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Experience = {
  id: string;
  title: string;
  category: string | null;
  created_at: string;
};

export default function Page() {
  const [items, setItems] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("experiences")
        .select("id, title, category, created_at")
        .order("created_at", { ascending: false });

      if (error) setError(error.message);
      else setItems(data || []);

      setLoading(false);
    };

    load();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Experiences</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((x) => (
          <div
            key={x.id}
            className="rounded-xl border p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="text-xs text-gray-500 mb-1">
              {x.category || "Uncategorized"}
            </div>
            <h2 className="font-semibold text-lg mb-2">{x.title}</h2>
            <div className="text-xs text-gray-400">
              {new Date(x.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
