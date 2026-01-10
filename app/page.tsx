"use client";

import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  console.log("Supabase:", supabase);

  return (
    <div className="min-h-screen bg-white text-zinc-900">

      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-zinc-900" />
            <div>
              <div className="text-lg font-semibold leading-5">Experio</div>
              <div className="text-xs text-zinc-500">
                Travel • Work • Health
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <a
              href="/login"
              className="rounded-full border px-4 py-2 text-sm hover:bg-zinc-50"
            >
              تسجيل الدخول
            </a>
            <a
              href="/signup"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
            >
              إنشاء حساب
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="mb-4 text-3xl font-bold">
          شارك تجربتك... وخليها تفيد العالم
        </h1>
        <p className="text-zinc-600">
          منصة لمشاركة التجارب في السفر والعمل والصحة.
        </p>
      </main>

    </div>
  );
}
