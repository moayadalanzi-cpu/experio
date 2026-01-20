import { createClient } from "@/lib/supabaseClient";

export default async function HomePage() {
  const supabase = createClient();

  const { data: experiences } = await supabase
    .from("experiences")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Latest Experiences</h1>
        <p className="text-slate-400 mb-8">
          Real stories from people about travel, work, and health.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences?.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-900 rounded-2xl p-5 hover:shadow-xl hover:shadow-cyan-500/10 transition"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                  {exp.category || "General"}
                </span>
                <span className="text-xs text-slate-500">
                  {new Date(exp.created_at).toLocaleDateString()}
