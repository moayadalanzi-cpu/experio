export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-zinc-900" />
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

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="rounded-2xl border bg-zinc-50 p-8">
          <h1 className="text-3xl font-semibold leading-tight">
            شارك تجربتك… وخلّيها تفيد العالم
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Experio منصة اجتماعية لمشاركة التجارب في السفر والعمل والصحة. قريباً ستتمكن
            من نشر قصتك، متابعة الآخرين، وحفظ التجارب المفيدة.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/create"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              إنشاء منشور
            </a>
            <a
              href="#sections"
              className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-white"
            >
              استعرض الأقسام
            </a>
          </div>
        </section>

        <section id="sections" className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <div className="text-sm font-semibold">✈️ السفر</div>
            <p className="mt-2 text-sm text-zinc-600">
              تجارب السفر، الفنادق، الطرق، النصائح، ومواقف حقيقية.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <div className="text-sm font-semibold">💼 العمل</div>
            <p className="mt-2 text-sm text-zinc-600">
              تجارب الوظائف، المشاريع، مقابلات العمل، والنجاح والفشل.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <div className="text-sm font-semibold">🏥 الصحة</div>
            <p className="mt-2 text-sm text-zinc-600">
              تجارب صحية، تغذية، رياضة، وطرق التعامل مع الحالات المختلفة.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border p-6">
          <div className="text-sm font-semibold">حالة المشروع</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600">
            <li>✅ تم نشر الموقع على Vercel</li>
            <li>✅ تم تجهيز متغيرات Supabase في Vercel</li>
            <li>⏳ الخطوة القادمة: صفحة تسجيل الدخول وربط المستخدمين</li>
          </ul>
        </section>
      </main>

      <footer className="mt-10 border-t">
        <div className="mx-auto max-w-5xl px-6 py-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Experio — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
