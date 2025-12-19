import { usePageTitle } from '@/hooks/usePageTitle';

export function About() {
  usePageTitle('About');
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 mx-auto flex min-h-[260px] w-full max-w-6xl flex-col justify-center gap-6 px-4 py-12 text-center text-white md:min-h-[360px] md:px-6 md:py-16 md:text-left lg:min-h-[420px]">
          <div className="inline-flex items-center justify-center self-center rounded-full border border-emerald-200/70 bg-emerald-500/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-100 md:self-start">
            Sabaysis Sports &amp; Infra
          </div>
          <div className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.6em] text-emerald-100">
                The future-forged path to
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Success &bull; Ignite &bull; Breakthrough
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-slate-100/90 md:text-base">
                At <span className="font-semibold">SABAYSIS Sports &amp; Infra</span>, we stand as
                pioneers in artificial grass and sports area solutions &mdash; redefining outdoor
                spaces with technology, aesthetics, durability, and performance at the core.
              </p>
            </div>
            <div className="rounded-3xl border border-white/25 bg-slate-900/40 p-6 shadow-sm backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-100">
                Snapshot
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-100/90">
                <li>
                  <span className="font-semibold text-white">Artificial grass specialists</span> for
                  sports arenas, schools, clubs, and landscapes.
                </li>
                <li>
                  <span className="font-semibold text-white">End-to-end execution</span> from
                  consultation and design to construction and maintenance.
                </li>
                <li>
                  <span className="font-semibold text-white">Quality &amp; sustainability</span>{' '}
                  embedded into every material and process we choose.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:px-6 py-16 md:py-20">
        {/* About Us */}
        <section className="grid gap-12 md:grid-cols-[3fr,2fr] md:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              About Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              SABAYSIS Sports &amp; Infra is dedicated to transforming outdoor spaces with
              high‑performance synthetic surfaces. We go beyond traditional standards to create
              environments that feel natural, perform under pressure, and stand the test of time.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Every project we deliver carries our commitment to cutting‑edge technology, aesthetic
              detail, and long‑term reliability. From sports arenas and schools to residential
              lawns and commercial landscapes, we design surfaces that are built for real‑world
              play and everyday use.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Why clients choose us
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Deep domain expertise in sports infrastructure and synthetic turf.</li>
              <li>Reliable timelines with professional project management.</li>
              <li>Surfaces engineered for safety, comfort, and performance.</li>
              <li>Long‑term partnership mindset with maintenance support.</li>
            </ul>
          </div>
        </section>

        {/* Quality Control */}
        <section className="space-y-12">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
              Quality Control
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Engineered quality in every fibre and finish.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              At SABAYSIS Sports &amp; Infra, quality is a disciplined process &mdash; from
              selecting raw materials to on‑ground installation, every step is measured, inspected,
              and improved.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  01
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Stringent material selection
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We rigorously evaluate every component for durability, eco‑friendliness, UV
                  resistance, and player safety. Only materials that meet our benchmarks are
                  approved for production.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  02
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Precision manufacturing
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  State‑of‑the‑art machinery and strict process controls ensure consistent tufting,
                  backing, and finishing so every roll of turf performs exactly as designed.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  03
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Comprehensive final inspections
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Each batch is inspected for colour consistency, pile height, tuft bind, and
                  overall finish before it leaves our facilities, ensuring reliable performance on
                  the field.
                </p>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  04
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Continuous improvement
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We invest in R&amp;D and feedback from live projects, constantly refining our
                  systems and products in line with global standards and new technologies.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid gap-8 md:gap-10 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Our Mission</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              Our mission is to revolutionize outdoor spaces globally with premium artificial grass
              and sports area solutions that exceed customer expectations. We aim to set new
              benchmarks for innovation, sustainability, and customer satisfaction, creating spaces
              that inspire healthy, active communities.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Our Vision</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              Our vision is to be a global leader in sports and landscape infrastructure, known not
              just for manufacturing excellence but for driving positive change. We see a future
              where every outdoor space is functional, beautiful, and in harmony with nature.
            </p>
          </article>
        </section>

        {/* Social Responsibility */}
        <section className="space-y-12">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-700">
              Social Responsibility
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Creating impact beyond the playing field.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              SABAYSIS Sports &amp; Infra is committed to responsible growth &mdash; for the
              environment, our people, and the communities we work with every day.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Environmental stewardship
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Designing greener futures
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We prioritise eco‑friendly materials, energy‑efficient manufacturing, and
                  responsible waste management to reduce our overall ecological footprint.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>
            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Employee welfare
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  People at the centre
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Our teams are our greatest asset. We foster a safe, inclusive, and growth‑oriented
                  workplace with training, recognition, and a healthy work‑life balance.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>
            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Transparency &amp; ethics
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Built on trust
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We operate with integrity and clear communication, ensuring accountability in our
                  decisions and long‑term trust with clients, partners, and suppliers.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>
            <article className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-lg">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Community engagement
                </p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">
                  Uplifting local communities
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We support initiatives around education, health, and sports infrastructure,
                  helping create safe, inspiring spaces that benefit neighbourhoods for years to
                  come.
                </p>
              </div>
              <div className="mt-4 h-px w-10 bg-emerald-500 transition group-hover:w-16" />
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}


