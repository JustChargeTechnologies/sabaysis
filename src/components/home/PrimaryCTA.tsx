export function PrimaryCTA() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-900 bg-slate-900 px-8 py-16 text-white">
      <div className="mx-auto flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-white/70">Ready to scale</p>
          <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">
            Book a discovery session or explore pricing instantly.
          </h2>
          <p className="text-sm text-white/70">
            Our architects tailor a blueprint in under 10 days—covering design, deployment, and financing options.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 transition hover:bg-slate-200">
            Book Now
          </button>
          <button className="rounded-full border border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

