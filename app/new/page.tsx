"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function NewPostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Travel");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from("posts").insert([
      {
        title,
        description,
        category,
      },
    ]);

    if (error) {
      setMsg(error.message);
      return;
    }

    router.push("/");
  };

  return (
    <main style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h1>New Post</h1>

      {msg && <p style={{ color: "red" }}>{msg}</p>}

      <form onSubmit={handleSubmit}>

        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            style={{ width: "100%", marginBottom: "20px" }}
          />
        </div>

        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <option value="Travel">Travel</option>
            <option value="Work">Work</option>
            <option value="Health">Health</option>
          </select>
        </div>

        <div>
          <label>Description</label>
          <textarea
            rows={6}
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            style={{ width: "100%", marginBottom: "20px" }}
          />
        </div>

        <button type="submit">
          Publish
        </button>

      </form>
    </main>
  );
}
