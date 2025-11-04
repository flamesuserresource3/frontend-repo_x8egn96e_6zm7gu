import React from 'react';
import { Paintbrush, Code, Layers } from 'lucide-react';

const services = [
  {
    title: 'Desain Grafis',
    description: 'Identitas visual, poster, sosial media, dan materi pemasaran yang kuat dan konsisten.',
    icon: Paintbrush,
  },
  {
    title: 'Web Development',
    description: 'Website cepat, responsif, dan SEO-friendly menggunakan stack modern.',
    icon: Code,
  },
  {
    title: 'Branding',
    description: 'Membangun brand yang bernilai melalui strategi visual dan komunikasi menyeluruh.',
    icon: Layers,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white" id="layanan">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Layanan</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Solusi end-to-end dari pemikiran kreatif hingga implementasi teknis.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
