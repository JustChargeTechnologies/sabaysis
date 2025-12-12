const props = [
  {
    title: 'Faster rollout',
    description: 'Modular playbooks with on-ground teams in 40+ cities.',
    icon: '⚡️',
  },
  {
    title: 'Trusted quality',
    description: 'ISO-compliant processes and 24/7 command centers.',
    icon: '🛡️',
  },
  {
    title: 'Best economics',
    description: 'Unified procurement and financing assistance.',
    icon: '💹',
  },
];

export function ValueProps() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-slate-500">Why Azar</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Value that compounds.</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {props.map((item) => (
          <article key={item.title} className="space-y-3 rounded-2xl border border-slate-100 p-6 text-center">
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

