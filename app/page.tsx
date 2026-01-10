"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  useEffect(() => {
    console.log("✅ Supabase client (browser):", supabase);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-zinc-900" />
            <div>
              <div className="text-lg font-semibold leading-5">Experio</div>
              <div className="text-xs text-zinc-500">Travel • Work • Health</div>
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
      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* Debug badge يظهر داخل الصفحة */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          Client OK — Supabase loaded
        </div>

        {/* Hero */}
        <section className="rounded-3xl border p-10">
          <h1 className="mb-4 text-4xl font-bold leading-tight">
            شارك تجربتك... وخليها تفيد العالم
          </h1>
          <p className="max-w-2xl text-zinc-600 leading-8">
            منصة اجتماعية لمشاركة التجارب في السفر والعمل والصحة. قريباً ستتمكن من نشر قصتك،
            متابعة الآخرين، وحفظ التجارب المفيدة.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/create"
              className="rounded-full bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800"
            >
              إنشاء منشور
            </a>
            <a
              href="#sections"
              className="rounded-full border px-6 py-3 hover:bg-zinc-50"
            >
              استعرض الأقسام
            </a>
          </div>
        </section>

        {/* Sections */}
        <section id="sections" className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border p-6">
            <div className="mb-2 text-lg font-semibold">✈️ السفر</div>
            <p className="text-zinc-600">
              تجارب السفر، الفنادق، الطرق، النصائح، ومواقف حقيقية.
            </p>
          </div>

          <div className="rounded-3xl border p-6">
            <div className="mb-2 text-lg font-semibold">💼 العمل</div>
            <p className="text-zinc-600">
              تجارب الوظائف، المشاريع، مقابلات العمل، والنجاح والفشل.
            </p>
          </div>

          <div className="rounded-3xl border p-6">
            <div className="mb-2 text-lg font-semibold">🧑‍⚕️ الصحة</div>
            <p className="text-zinc-600">
              تجارب صحية، تغذية، رياضة، وطرق التعامل مع الحالات المختلفة.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
