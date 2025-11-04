import React from 'react';

export default function ContactSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-white" id="kontak">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Mari Berkolaborasi</h2>
          <p className="mt-2 text-slate-300">
            Punya proyek atau ide yang ingin dieksekusi? Kirim pesan singkat di bawah.
          </p>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form).entries());
              if (!data.nama || !data.email || !data.pesan) {
                alert('Mohon lengkapi semua field.');
                return;
              }
              alert('Terima kasih! Pesan Anda telah terkirim.');
              form.reset();
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="nama" className="text-sm text-slate-200">
                  Nama
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Nama lengkap"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="email@domain.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              <label htmlFor="pesan" className="text-sm text-slate-200">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Ceritakan kebutuhan Anda secara singkat"
                required
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-emerald-400 transition hover:bg-emerald-400 hover:shadow-emerald-500/25"
              >
                Kirim Pesan
              </button>
              <div className="text-xs text-slate-400">
                atau email langsung ke <a href="mailto:hello@portfolio.dev" className="text-emerald-400 underline">hello@portfolio.dev</a>
              </div>
            </div>
          </form>
          <div className="text-center text-sm text-slate-400">
            Ikuti saya di
            {' '}
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">LinkedIn</a>
            ,
            {' '}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">GitHub</a>
            , dan
            {' '}
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">Dribbble</a>.
          </div>
        </div>
      </div>
    </section>
  );
}
