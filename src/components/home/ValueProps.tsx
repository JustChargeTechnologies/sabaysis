type ServiceItem = {
  title: string;
  description: string;
  ctaLabel: string;
  imageUrl: string;
  imageAlt: string;
};

const services: ServiceItem[] = [
  {
    title: 'Sports Net Installation',
    description:
      'Our sports nets are designed for various applications, ensuring safety and superior performance for sports like cricket, tennis, and football. Whether you need nets for residential, recreational, or professional settings, we provide custom solutions to suit your needs.',
    ctaLabel: 'VIEW MORE',
    imageUrl:
      'https://images.unsplash.com/photo-1526401485004-2fa806b5e4de?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sports net on a court under stadium lights',
  },
  {
    title: 'Football Turf Solutions',
    description:
      'Get the best out of your football turf with our expertly designed and installed artificial grass. Whether for professional use or community sports facilities, our synthetic football turfs provide a consistent playing surface all year round.',
    ctaLabel: 'VIEW MORE',
    imageUrl:
      'https://images.unsplash.com/photo-1518091043644-c1f4c3a4e9a8?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Football turf field under bright lights',
  },
  {
    title: 'Landscape Grass Installation',
    description:
      'Transform your outdoor spaces with our realistic landscape turf. Our synthetic grass solutions are ideal for lawns, gardens, and decorative landscaping, offering a lush green look without the hassle of maintenance.',
    ctaLabel: 'VIEW MORE',
    imageUrl:
      'https://images.unsplash.com/photo-1433696993243-4e2a45a81ee5?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Lush green landscaped garden with synthetic grass',
  },
  {
    title: 'Cricket Turf Construction',
    description:
      'Our premium cricket turfs are built to meet the highest standards of play. Designed for both professional and amateur cricket players, our synthetic turfs ensure consistent bounce, durability, and performance.',
    ctaLabel: 'VIEW MORE',
    imageUrl:
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e87e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Cricket pitch with stumps on synthetic turf',
  },
  {
    title: 'Swimming Pool Design & Construction',
    description:
      'Looking to install a swimming pool? Whether residential or commercial, we offer complete swimming pool design, construction, and maintenance services tailored to your specifications, ensuring a perfect pool for every need.',
    ctaLabel: 'VIEW MORE',
    imageUrl:
      'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Modern swimming pool with clear blue water',
  },
  {
    title: 'Multisport Tracks & Running Tracks',
    description:
      'Our multisport tracks and running tracks are ideal for schools, sports complexes, and athletic clubs. Built to the highest standards, they provide a safe, durable, and smooth surface for running, training, and sports events.',
    ctaLabel: 'VIEW MORE',
    imageUrl:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Running track in a stadium at sunset',
  },
];

export function ValueProps() {
  return (
    <section className="animate-fade-in-up">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          Our Services Include
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          End‑to‑end sports & infrastructure solutions
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-500">
          From turf to tracks and pools to playgrounds, we design, build, and maintain
          high‑performance spaces tailored to your requirements.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/60 shadow-sm transition hover:-translate-y-1 hover:border-slate-900/10 hover:shadow-lg"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.imageAlt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-900 transition group-hover:text-emerald-600">
                  {service.ctaLabel}
                  <span className="ml-2 h-px w-8 bg-slate-300 transition group-hover:w-10 group-hover:bg-emerald-500" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
