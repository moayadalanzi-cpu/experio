"use client";

import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  console.log("Supabase:", supabase);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-zinc-900" />
            <div>
              <div className="text-lg font-semibold leading-5">Experio</div>
              <div className="text-xs text-zinc-500">Travel • Work • Health</div>
            </div>
          </div>

          {/* Nav */}
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

      {/* Main */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* Hero */}
        <section className="rounded-3xl border p-10">
          <h1 className="text-4xl font-bold leading-tight">
            شارك تجربتك... وخليها تفيد العالم
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600 leading-8">
            Experio منصة اجتماعية لمشاركة التجارب في السفر والعمل والصحة.
            قريبًا ستتمكن من نشر قصتك، متابعة الآخرين، وحفظ التجارب المفيدة.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/create"
              className="rounded-2xl bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-800"
            >
              إنشاء منشور
            </a>
            <a
              href="#sections"
              className="rounded-2xl border px-6 py-3 hover:bg-zinc-50"
            >
              استعرض الأقسام
            </a>
          </div>
        </section>

        {/* Sections */}
        <section
          id="sections"
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="rounded-3xl border p-8">
            <div className="text-xl font-semibold">✈️ السفر</div>
            <p className="mt-3 text-zinc-600 leading-7">
              تجارب السفر، الفنادق، الطرق، النصائح، ومواقف حقيقية.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <div className="text-xl font-semibold">💼 العمل</div>
            <p className="mt-3 text-zinc-600 leading-7">
              تجارب الوظائف، المشاريع، مقابلات العمل، والنجاح والفشل.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <div className="text-xl font-semibold">🏥 الصحة</div>
            <p className="mt-3 text-zinc-600 leading-7">
              تجارب صحية، تغذية، رياضة، وطرق التعامل مع الحالات المختلفة.
            </p>
          </div>
        </section>

        {/* Status Box */}
        <section className="mt-10 rounded-3xl border p-8">
          <div className="text-xl font-semibold">حالة المشروع</div>
          <ul className="mt-4 space-y-3 text-zinc-700">
            <li>✅ Vercel تم نشر الموقع على</li>
            <li>✅ تم تجهيز Supabase وربط المتغيرات في Vercel</li>
            <li>⏳ الخطوة القادمة: صفحة تسجيل الدخول وربط المستخدمين</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
