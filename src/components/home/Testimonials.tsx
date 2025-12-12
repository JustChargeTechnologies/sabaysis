const testimonials = [
  {
    quote:
      'Azar modernized our logistics backbone in under six months, cutting emissions by 18% while improving throughput.',
    author: 'Mahima Rao',
    role: 'COO, Horizon Ports',
  },
  {
    quote:
      'The integrated clean-energy stack let us scale data centers sustainably without compromising uptime or safety.',
    author: 'Dev Malhotra',
    role: 'CTO, Nimbus Grid',
  },
];

export function Testimonials() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-slate-500">Voices</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">Trusted partners speak.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.author} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <p className="text-lg text-slate-800">“{item.quote}”</p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">{item.author}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

