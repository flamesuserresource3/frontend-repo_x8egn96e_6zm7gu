import React from 'react';

const projects = [
  {
    id: 'proj-1',
    title: 'Landing Page Tech Startup',
    cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    category: 'Web Development',
    tags: ['Next.js', 'Tailwind', 'SEO'],
  },
  {
    id: 'proj-2',
    title: 'Brand Identity – Minimalist',
    cover: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop',
    category: 'Desain Grafis',
    tags: ['Logo', 'Brandbook', 'Typography'],
  },
  {
    id: 'proj-3',
    title: 'E-Commerce UI Kit',
    cover: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop',
    category: 'Desain Grafis',
    tags: ['UI', 'Figma', 'System'],
  },
  {
    id: 'proj-4',
    title: 'Portfolio Dev – Dark Minimal',
    cover: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
    category: 'Web Development',
    tags: ['React', 'A11y', 'Performance'],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white" id="portfolio">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Proyek Unggulan</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Beberapa karya terbaik yang menonjolkan pendekatan desain dan teknik.
            </p>
          </div>
          <a
            href="#portfolio"
            className="hidden rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400/40 hover:bg-white/10 sm:inline-block"
          >
            Lihat Semua
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 4).map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-75" />
                <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-medium text-slate-900 shadow">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
