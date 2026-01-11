export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", color: "#111" }}>
      {/* Top bar */}
      <header style={{
        maxWidth: 1100, margin: "0 auto", padding: "20px 16px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🚀</span>
          <strong style={{ fontSize: 20, letterSpacing: 0.2 }}>Experio</strong>
        </div>

        <nav style={{ display: "flex", gap: 14, fontSize: 14 }}>
          <a href="#explore" style={{ color: "#111", textDecoration: "none" }}>Explore</a>
          <a href="#categories" style={{ color: "#111", textDecoration: "none" }}>Categories</a>
          <a href="#why" style={{ color: "#111", textDecoration: "none" }}>Why Experio</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px 10px" }}>
        <div style={{
          borderRadius: 18,
          padding: "38px 22px",
          background: "linear-gradient(135deg, #f5f7ff 0%, #f8fff7 100%)",
          border: "1px solid #eef0ff"
        }}>
          <p style={{
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: 999,
            background: "#fff",
            border: "1px solid #eee",
            fontSize: 13,
            margin: 0
          }}>
            New • A global platform for real experiences
          </p>

          <h1 style={{ fontSize: 40, margin: "14px 0 10px", lineHeight: 1.1 }}>
            Share experiences that actually help people.
          </h1>

          <p style={{ fontSize: 16, margin: 0, maxWidth: 720, color: "#333", lineHeight: 1.6 }}>
            Experio organizes experiences in <b>Travel</b>, <b>Work</b>, and <b>Health</b> — with search, structure,
            and credibility. No noise. Just useful stories.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
            <a href="#explore" style={{
              padding: "10px 14px", borderRadius: 12, background: "#111", color: "#fff",
              textDecoration: "none", fontSize: 14
            }}>
              Explore experiences
            </a>

            <a href="#categories" style={{
              padding: "10px 14px", borderRadius: 12, background: "#fff", color: "#111",
              textDecoration: "none", fontSize: 14, border: "1px solid #e6e6e6"
            }}>
              Browse categories
            </a>

            <span style={{ fontSize: 13, color: "#444", alignSelf: "center" }}>
              ✅ Site is running successfully
            </span>
          </div>
        </div>
      </section>

      {/* Quick search mock */}
      <section id="explore" style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 16px 0" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            placeholder="Search experiences (e.g., Rome visa, remote work, vitamin D)..."
            style={{
              flex: "1 1 420px", padding: "12px 12px", borderRadius: 12,
              border: "1px solid #e6e6e6", fontSize: 14
            }}
          />
          <button
            style={{
              padding: "12px 14px", borderRadius: 12, border: "1px solid #e6e6e6",
              background: "#fff", cursor: "pointer", fontSize: 14
            }}
          >
            Filters
          </button>
          <button
            style={{
              padding: "12px 14px", borderRadius: 12, border: "0",
              background: "#111", color: "#fff", cursor: "pointer", fontSize: 14
            }}
          >
            Search
          </button>
        </div>

        <p style={{ marginTop: 10, fontSize: 13, color: "#555" }}>
          Next step: we’ll connect this to Supabase and show real posts.
        </p>
      </section>

      {/* Categories */}
      <section id="categories" style={{ maxWidth: 1100, margin: "0 auto", padding: "26px 16px" }}>
        <h2 style={{ fontSize: 22, margin: "0 0 12px" }}>Core categories</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
          {[
            { title: "Travel", icon: "🌍", desc: "Routes, visas, budgets, cities, tips you can trust." },
            { title: "Work", icon: "💼", desc: "Careers, remote work, interviews, business lessons." },
            { title: "Health", icon: "❤️", desc: "Practical health experiences (not medical claims)." },
          ].map((c) => (
            <div key={c.title} style={{
              border: "1px solid #eee", borderRadius: 16, padding: 16, background: "#fff"
            }}>
              <div style={{ fontSize: 22 }}>{c.icon}</div>
              <h3 style={{ margin: "10px 0 6px" }}>{c.title}</h3>
              <p style={{ margin: 0, color: "#444", lineHeight: 1.55, fontSize: 14 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 16px 40px" }}>
        <h2 style={{ fontSize: 22, margin: "0 0 12px" }}>Why Experio will be different</h2>
        <ul style={{ margin: 0, paddingLeft: 18, color: "#333", lineHeight: 1.7 }}>
          <li>Structured posts (summary, steps, cost/time, pros/cons).</li>
          <li>Search-first experience (avoid endless scrolling and noise).</li>
          <li>Credibility signals (profiles, history, community moderation).</li>
          <li>Arabic + English from day one.</li>
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid #eee", padding: "18px 16px", color: "#666" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: 13 }}>
          © {new Date().getFullYear()} Experio • Built for useful human experiences.
        </div>
      </footer>
    </main>
  );
}
