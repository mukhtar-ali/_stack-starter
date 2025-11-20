import Link from "next/link";
import { ExampleQuerySection } from "@/components/ExampleQuerySection";

export function Hero() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-16 md:px-0">
      <header className="rounded-3xl border border-slate-200/60 bg-white/80 p-10 text-center shadow-xl backdrop-blur">
        <p className="mx-auto inline-flex rounded-full border border-brand/20 bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand">Stack Starter</p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Build modern product experiences faster.
        </h1>
        <p className="mt-4 text-lg text-slate-600 md:text-xl">
          A ready-to-ship Next.js foundation with Tailwind CSS, TanStack Query, Storybook, and Jest.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/docs"
            className="gradient-border inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:-translate-y-0.5"
          >
            Read the docs
          </Link>
          <Link
            href="https://storybook.js.org/"
            className="inline-flex items-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
          >
            Explore components
          </Link>
        </div>
      </header>
      <ExampleQuerySection />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Tailwind utility playground</h3>
          <p className="mt-2 text-sm text-slate-600">
            Compose responsive layouts with Tailwind&#39;s utility-first classes, showcased throughout this starter.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Testing ready</h3>
          <p className="mt-2 text-sm text-slate-600">
            Jest and Testing Library are pre-configured so you can ship confidently with robust component coverage.
          </p>
        </div>
      </div>
    </div>
  );
}
