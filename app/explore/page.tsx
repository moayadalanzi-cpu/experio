import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Experience = {
  id: string;
  created_at: string;
  title: string;
  category: string;
  summary: string;
  country: string;
  city: string;
  rating: number;
  readTime: string;
};

export default async function ExplorePage() {
  const { data, error } = await supabase
    .from("experiences")
    .select("id, created_at, title, category, summary, country, city, rating, readTime")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main style={{ padding: 24 }}>
        <h2>Supabase error</h2>
        <pre>{error.message}</pre>
      </main>
    );
  }

  const experiences = (data ?? []) as Experience[];

  return (
    <main style={{ padding: 24 }}>
      <h1>Explore experiences</h1>

      {experiences.length === 0 ? (
        <p>No experiences yet.</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {experiences.map((x) => (
            <article key={x.id} style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                <strong>{x.category}</strong>
                <span>★ {Number(x.rating).toFixed(1)} • {x.readTime}</span>
              </div>

              <h3 style={{ margin: "8px 0" }}>{x.title}</h3>
              <p style={{ margin: 0 }}>{x.summary}</p>
              <div style={{ marginTop: 10, color: "#555" }}>
                {x.city}, {x.country}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
