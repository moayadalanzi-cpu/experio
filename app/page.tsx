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
              <div className="text-xs text-zinc-500">Travel • Work • Health</div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <a
              href="/login"
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-50"
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
        <section className="rounded-3xl border border-zinc-200 p-8">
          <h1 className="text-4xl font-bold leading-snug">
            شارك تجربتك… وخليها تفيد العالم
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-600 leading-8">
            Experio منصة اجتماعية لمشاركة التجارب في السفر والعمل والصحة.
            قريباً تقدر تنشر قصتك، تتابع الآخرين، وتحفظ التجارب المفيدة.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/create"
              className="rounded-full bg-zinc-900 px-5 py-3 text-sm text-white hover:bg-zinc-800"
            >
              إنشاء منشور
            </a>
            <a
              href="#sections"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm hover:bg-zinc-50"
            >
              استعرض الأقسام
            </a>
          </div>
        </section>

        {/* Sections */}
        <section id="sections" className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 p-6">
            <div className="text-lg font-semibold">✈️ السفر</div>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              تجارب السفر، الفنادق، الطرق، النصائح، ومواقف حقيقية.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-6">
            <div className="text-lg font-semibold">💼 العمل</div>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              تجارب الوظائف، المشاريع، مقابلات العمل، النجاح والفشل.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-6">
            <div className="text-lg font-semibold">🩺 الصحة</div>
            <p className="mt-2 text-sm text-zinc-600 leading-7">
              تجارب صحية، تغذية، رياضة، وطرق التعامل مع الحالات المختلفة.
            </p>
          </div>
        </section>

        {/* Status */}
        <section className="mt-8 rounded-3xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold">حالة المشروع</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>✅ Vercel: تم نشر الموقع</li>
            <li>✅ Supabase / Vercel: تم تجهيز متغيرات البيئة</li>
            <li>⏳ الخطوة القادمة: صفحة تسجيل الدخول وربط المستخدمين</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
