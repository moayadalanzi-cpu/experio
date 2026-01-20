"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Experience = {
  id: string;
  title: string;
  category: string | null;
  created_at: string;
};

export default function Home() {
  const [items, setItems] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("experiences")
        .select("id, title, category, created_at")
        .order("created_at", { ascending: false });

      setItems(data || []);
      setLoading(false);
    };

    load();
  }, []);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Latest Experiences</h2>

      {loading && <p>Loading...</p>}

      <div className="grid md:grid-cols-2 gap-4">
        {
