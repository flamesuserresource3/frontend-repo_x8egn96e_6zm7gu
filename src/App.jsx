import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeaturedProjects from './components/FeaturedProjects';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight">
            <span className="text-emerald-400">/</span>
            <span>Portfolio</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#portfolio" className="transition hover:text-white">Karya</a>
            <a href="#layanan" className="transition hover:text-white">Layanan</a>
            <a href="#kontak" className="transition hover:text-white">Kontak</a>
          </nav>
          <a
            href="#kontak"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-900 ring-1 ring-emerald-400 transition hover:bg-emerald-400"
          >
            Mulai Proyek
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedProjects />
        <ContactSection />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} — Portofolio. Dibuat dengan cinta, desain yang rapi, dan kode yang bersih.
      </footer>
    </div>
  );
}

export default App;
