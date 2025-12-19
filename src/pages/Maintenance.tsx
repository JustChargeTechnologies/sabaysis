import { usePageTitle } from '@/hooks/usePageTitle';

export function Maintenance() {
  usePageTitle('Maintenance');
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative z-10 mx-auto flex min-h-[240px] w-full max-w-6xl flex-col justify-center gap-6 px-4 py-12 text-center text-white md:min-h-[320px] md:px-6 md:py-16 md:text-left lg:min-h-[380px]">
          <div className="inline-flex items-center justify-center self-center rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-100 md:self-start">
            Sabaysis Sports &amp; Infra
          </div>
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.6em] text-emerald-100">
                Our Maintenance Service
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Track &amp; sports facility maintenance.
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-slate-100/90 md:text-base">
                At Sabaysis Sports &amp; Infra, we keep your multisport tracks, running tracks,
                football turfs, sports courts, landscape turf, and pools performing at their best
                &mdash; safe, durable, and ready for every game.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-slate-900/40 p-6 shadow-sm backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-100">
                Why maintenance matters
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-100/90">
                <li>Extends the life of your sports infrastructure.</li>
                <li>Improves athlete safety and consistent performance.</li>
                <li>Reduces downtime and unexpected repair costs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:px-6 py-16 md:py-20">
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Comprehensive care for every surface.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Maintaining your facilities is crucial for performance, safety, and longevity. Our
            specialised maintenance programs are tailored for tracks, courts, turfs, landscapes,
            and aquatic zones to keep them in peak condition all year round.
          </p>
        </section>

        {/* Maintenance Services */}
        <section className="space-y-10">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Sports Track Maintenance
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Multisport &amp; running track care
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Regular maintenance of multisport and running tracks is essential to ensure a safe,
                  high-performance surface. Our services include deep cleaning, crack repair,
                  resurfacing, and precision line marking to keep your tracks competition-ready.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>

            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Football Turf Maintenance
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Durable, match‑ready turf
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We provide expert maintenance for football turfs including routine cleaning,
                  grooming / brushing, infill levelling, re‑turfing, and edge repair. This keeps
                  your surface safe, consistent, and suitable for all levels of play.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>

            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Sports Court Maintenance
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Courts that play like new
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  For basketball, tennis, and multi‑sport courts, we handle surface cleaning, crack
                  repairs, anti‑skid recoating, and line marking. Our goal is to maintain grip,
                  safety, and visual clarity on every court.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>

            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Landscape Turf Care
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Always‑green outdoor spaces
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We keep your landscape turf lush and vibrant with routine cleaning, joint and seam
                  repairs, infill top‑ups, and UV damage checks, enhancing both aesthetics and
                  longevity of your artificial grass.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>

            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Swimming Pool Maintenance
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Clean, safe, and swim‑ready
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Our pool maintenance covers routine cleaning, water testing and balancing,
                  filtration checks, and equipment inspection to keep both residential and
                  commercial pools safe, hygienic, and fully operational.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>

            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Inspections &amp; Surface Repairs
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Preventive checks &amp; drainage care
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Preventive maintenance helps you avoid costly failures. We provide annual
                  facility inspections, drainage system checks, and surface repairs for tracks,
                  courts, and turfs to prevent water damage and maintain optimal play conditions.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 text-center shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Need a maintenance plan for your facility?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            Share details about your tracks, courts, turfs, or pools and our team will design a
            tailored maintenance schedule that fits your usage and budget.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-10 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800 min-h-[48px] min-w-[160px]"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}


