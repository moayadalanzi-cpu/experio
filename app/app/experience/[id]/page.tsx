"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Experience = {
  id: string;
  title: string;
  category: string | null;
  created_at: string;
};

export default function ExperiencePage({ params }: { params: { id: string } }) {
  const [item, setItem] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("experiences")
        .select("*")
        .eq("id", params.id)
        .single();

      setItem(data);
      setLoading(false);
    };

    load();
  }, [params.id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!item) return <p className="p-6">Not found</p>;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        {item.category || "Uncategorized"} •{" "}
        {new Date(item.created_at).toLocaleString()}
      </div>
    </main>
  );
}
