import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white" id="home">
      <div className="relative h-[70vh] md:h-[80vh] w-full">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        <div className="absolute inset-0 z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Portfolio • Interactive • Modern
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Menciptakan Visual yang Berarti & Website yang Cepat
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Saya menggabungkan desain yang tajam dengan pengembangan web yang solid untuk menghadirkan pengalaman digital yang elegan dan berkinerja tinggi.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-emerald-400 transition hover:bg-emerald-400 hover:shadow-emerald-500/25"
            >
              Lihat Karya
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
