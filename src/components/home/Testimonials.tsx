import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote:
      'They delivered our FIFA-size football turf and cricket nets on time and exactly to spec. Maintenance has been effortless since installation.',
    author: 'Rahul S.',
    role: 'Owner, Metro Sports Arena',
  },
  {
    quote:
      'From design to handover, the team handled our school running track, basketball court, and landscape grass as a single, well-managed project.',
    author: 'Priya Menon',
    role: 'Principal, Greenfield International School',
  },
  {
    quote:
      'Our rooftop football turf and multi-sport area have become a huge hit with members. Play quality is excellent even after heavy weekly usage.',
    author: 'Imran Khan',
    role: 'Director, Skyline Fitness & Sports Club',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="space-y-10 md:space-y-12">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-slate-500">Testimonials</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">
          Built for real sports & infrastructure projects.
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((item) => (
            <article key={item.author} className="w-full shrink-0 px-0 md:px-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg md:p-10">
                <p className="text-lg leading-relaxed text-slate-800 md:text-xl">
                  “{item.quote}”
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-900">{item.author}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.author}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-slate-900' : 'w-3 bg-slate-300'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
