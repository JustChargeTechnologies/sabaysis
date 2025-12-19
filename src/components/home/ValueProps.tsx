import sportsNetImg from '@/assets/HomeImages/Sports-Net.jpg';
import footballTurfImg from '@/assets/HomeImages/steptodown.com652452.jpg';
import landscapeGrassImg from '@/assets/HomeImages/Untitled-design-25.png';
import cricketTurfImg from '@/assets/HomeImages/cricket.jpg';
import swimmingPoolImg from '@/assets/HomeImages/swiming.png';
import multisportTrackImg from '@/assets/HomeImages/running.png';

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
    imageUrl: sportsNetImg,
    imageAlt: 'Sports net on a court under stadium lights',
  },
  {
    title: 'Football Turf Solutions',
    description:
      'Get the best out of your football turf with our expertly designed and installed artificial grass. Whether for professional use or community sports facilities, our synthetic football turfs provide a consistent playing surface all year round.',
    ctaLabel: 'VIEW MORE',
    imageUrl: footballTurfImg,
    imageAlt: 'Football turf field under bright lights',
  },
  {
    title: 'Landscape Grass Installation',
    description:
      'Transform your outdoor spaces with our realistic landscape turf. Our synthetic grass solutions are ideal for lawns, gardens, and decorative landscaping, offering a lush green look without the hassle of maintenance.',
    ctaLabel: 'VIEW MORE',
    imageUrl: landscapeGrassImg,
    imageAlt: 'Lush green landscaped garden with synthetic grass',
  },
  {
    title: 'Cricket Turf Construction',
    description:
      'Our premium cricket turfs are built to meet the highest standards of play. Designed for both professional and amateur cricket players, our synthetic turfs ensure consistent bounce, durability, and performance.',
    ctaLabel: 'VIEW MORE',
    imageUrl: cricketTurfImg,
    imageAlt: 'Cricket pitch with stumps on synthetic turf',
  },
  {
    title: 'Swimming Pool Design & Construction',
    description:
      'Looking to install a swimming pool? Whether residential or commercial, we offer complete swimming pool design, construction, and maintenance services tailored to your specifications, ensuring a perfect pool for every need.',
    ctaLabel: 'VIEW MORE',
    imageUrl: swimmingPoolImg,
    imageAlt: 'Modern swimming pool with clear blue water',
  },
  {
    title: 'Multisport Tracks & Running Tracks',
    description:
      'Our multisport tracks and running tracks are ideal for schools, sports complexes, and athletic clubs. Built to the highest standards, they provide a safe, durable, and smooth surface for running, training, and sports events.',
    ctaLabel: 'VIEW MORE',
    imageUrl: multisportTrackImg,
    imageAlt: 'Running track in a stadium at sunset',
  },
];

export function ValueProps() {
  return (
    <section className="animate-fade-in-up">
      {/* Section heading */}
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
          Our Services Include
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          End‑to‑end sports &amp; infrastructure solutions
        </h2>
        <p className="mt-3 mx-auto max-w-2xl text-sm text-slate-600">
          From turf to tracks, pools to playgrounds, we design, build and maintain high‑performance spaces tailored to
          your requirements.
        </p>
      </div>

      {/* Services cards */}
      <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.imageAlt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                  Sabaysis Service
                </p>
                <p className="mt-1 text-sm font-medium text-white line-clamp-1">{service.title}</p>
              </div>
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
              <div className="mt-6 flex items-center justify-between">
                <button className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 transition group-hover:text-emerald-600 min-h-[44px] px-2 -ml-2 rounded-lg hover:bg-emerald-50">
                  {service.ctaLabel}
                  <span className="ml-2 h-px w-8 bg-emerald-300 transition group-hover:w-10 group-hover:bg-emerald-500" />
                </button>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  Learn more
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
