export function FeaturedServices() {
  return (
    <section className="relative w-full px-4 py-16 lg:px-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:gap-16 lg:flex-row lg:items-center">
        {/* Left: intro content */}
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
            Redefining Outdoor Spaces
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Exceptional <span className="text-emerald-600">artificial grass</span> solutions
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
            <p>
              <span className="font-semibold text-slate-900">Sabaysis Sports &amp; Infra</span> stands as the foremost
              destination for exceptional artificial grass solutions, where quality seamlessly meets innovation. With
              unmatched expertise and state-of-the-art manufacturing, we redefine outdoor spaces, offering customized
              solutions that exceed expectations.
            </p>
            <p>
              Committed to global quality standards,&nbsp;
              <span className="font-semibold text-slate-900">Sabaysis Sports &amp; Infra</span> ensures durability,
              resilience, and aesthetic appeal in every product. Our dedication to sustainability is reflected in
              eco‑friendly practices and the use of recyclable materials.
            </p>
            <p>
              From lush residential lawns to cutting‑edge sports surfaces,&nbsp;
              <span className="font-semibold text-slate-900">Sabaysis Sports &amp; Infra</span> provides a comprehensive
              range of products tailored to diverse needs, setting a new standard in the artificial grass industry.
            </p>
          </div>
        </div>

        {/* Right: brand + CTA card */}
        <div className="flex-1">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-1 rounded-full bg-emerald-600" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                  Sabaysis Sports &amp; Infra
                </h3>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                  Excellence in Sports Infrastructure
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  What we deliver
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>High‑performance sports turfs.</li>
                  <li>Premium landscape grass solutions.</li>
                  <li>End‑to‑end design &amp; execution.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Why clients choose us
                </p>
                <ul className="mt-2 space-y-1.5">
                  <li>Global quality benchmarks.</li>
                  <li>Sustainable, eco‑friendly practices.</li>
                  <li>Proven track record across sectors.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center justify-center rounded-full border-2 border-emerald-600 px-10 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 transition-all duration-200 hover:bg-emerald-600 hover:text-white active:scale-[0.98] min-h-[48px] min-w-[200px]">
                Drop Your Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
