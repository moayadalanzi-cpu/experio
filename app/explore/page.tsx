const MOCK_EXPERIENCES = [
  {
    id: "1",
    title: "Rome student life: what I wish I knew",
    category: "Travel",
    summary: "Housing, transport, documents, and how to avoid common mistakes in the first month.",
    country: "Italy",
    city: "Rome",
    rating: 4.8,
    readTime: "6 min",
  },
  {
    id: "2",
    title: "Remote work setup that actually increased focus",
    category: "Work",
    summary: "A practical system: schedule blocks, tools, and a simple KPI method for weekly progress.",
    country: "Spain",
    city: "Castellón",
    rating: 4.6,
    readTime: "5 min",
  },
  {
    id: "3",
    title: "Vitamin D deficiency: symptoms and what helped",
    category: "Health",
    summary: "My experience with tests, sunlight routine, supplements, and how long it took to feel better.",
    country: "Iraq",
    city: "Erbil",
    rating: 4.7,
    readTime: "4 min",
  },
  {
    id: "4",
    title: "Road trip planning: Iraq to Europe (real checklist)",
    category: "Travel",
    summary: "Borders, insurance, documents, and what to pack. A checklist that saved us time and money.",
    country: "Iraq",
    city: "Mosul",
    rating: 4.9,
    readTime: "7 min",
  },
];

const CATEGORIES = ["All", "Travel", "Work", "Health"] as const;

function Badge({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid #e6e6e6",
        background: "#fff",
        fontSize: 12,
        color: "#111",
      }}
    >
      {text}
    </span>
  );
}

function Card({
  title,
  category,
  summary,
  country,
  city,
  rating,
  readTime,
}: {
  title: string;
  category: string;
  summary: string;
  country: string;
  city: string;
  rating: number;
  readTime: string;
}) {
  return (
    <article
      style={{
        border: "1px solid #eee",
        borderRadius: 18,
        padding: 16,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        minHeight: 170,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <Badge text={category} />
        <span style={{ fontSize: 12, color: "#444" }}>⭐ {rating.toFixed(1)} • {readTime}</span>
      </div>

      <h3 style={{ margin: 0, fontSize: 18, lineHeight: 1.25 }}>{title}</h3>

      <p style={{ margin: 0, color: "#444", lineHeight: 1.55, fontSize: 14 }}>
        {summary}
      </p>

      <div style={{ display: "flex", gap: 10, marginTop: "auto", alignItems: "center" }}>
        <span style={{ fontSize: 13, color: "#555" }}>
          📍 {city}, {country}
        </span>
        <span style={{ marginLeft: "auto", fontSize: 13, color: "#111" }}>
          Read →
        </span>
      </div>
    </article>
  );
}

export default function ExplorePage() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        color: "#111",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "20px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#111" }}>
          <span style={{ fontSize: 22 }}>🚀</span>
          <strong style={{ fontSize: 20, letterSpacing: 0.2 }}>Experio</strong>
        </a>

        <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
          <a href="/explore" style={{ color: "#111", textDecoration: "none" }}>Explore</a>
          <a href="/#categories" style={{ color: "#111", textDecoration: "none" }}>Categories</a>
          <a href="/#why" style={{ color: "#111", textDecoration: "none" }}>Why Experio</a>
        </nav>
      </header>

      {/* Header */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 16px 0" }}>
        <div
          style={{
            borderRadius: 18,
            padding: "18px 18px",
            border: "1px solid #eee",
            background: "linear-gradient(135deg, #f5f7ff 0%, #f8fff7 100%)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: 28 }}>Explore experiences</h1>
          <p style={{ margin: "8px 0 0", color: "#444", lineHeight: 1.6, fontSize: 14, maxWidth: 780 }}>
            Discover real stories in Travel, Work, and Health — structured, searchable, and useful.
            (Next step: connect to Supabase for real posts.)
          </p>
        </div>
      </section>

      {/* Controls (UI فقط حالياً) */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 16px 0" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            placeholder="Search experiences…"
            style={{
              flex: "1 1 420px",
              padding: "12px 12px",
              borderRadius: 12,
              border: "1px solid #e6e6e6",
              fontSize: 14,
              background: "#fff",
            }}
          />
          <select
            defaultValue="All"
            style={{
              padding: "12px 12px",
              borderRadius: 12,
              border: "1px solid #e6e6e6",
              background: "#fff",
              fontSize: 14,
            }}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <button
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "0",
              background: "#111",
              color: "#fff",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Search
          </button>
        </div>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 16px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
          }}
        >
          {MOCK_EXPERIENCES.map((x) => (
            <Card
              key={x.id}
              title={x.title}
              category={x.category}
              summary={x.summary}
              country={x.country}
              city={x.city}
              rating={x.rating}
              readTime={x.readTime}
            />
          ))}
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #eee", padding: "18px 16px", color: "#666" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: 13 }}>
          © {new Date().getFullYear()} Experio • Explore
        </div>
      </footer>
    </main>
  );
}
