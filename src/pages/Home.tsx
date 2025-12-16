import { FeaturedServices } from '@/components/home/FeaturedServices';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { PrimaryCTA } from '@/components/home/PrimaryCTA';
import { Testimonials } from '@/components/home/Testimonials';
import { ValueProps } from '@/components/home/ValueProps';
import { usePageTitle } from '@/hooks/usePageTitle';

export function Home() {
  usePageTitle('Home');
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <HeroCarousel />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16">
        <FeaturedServices />
        <ValueProps />
        <Testimonials />
        <section className="animate-zoom-in text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-slate-500">
            Azar • shaping the future
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            Coming Soon
          </h1>
          <div className="mt-10 flex flex-col items-center gap-3">
            <span className="text-sm uppercase tracking-[0.5em] text-slate-500">
              Launching Q1 • 2026
            </span>
            <span className="h-px w-24 bg-slate-200" />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-slate-900 px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-slate-800">
              Notify Me
            </button>
            <button className="rounded-full border border-slate-300 px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate-900 transition hover:border-slate-900">
              Press Kit
            </button>
          </div>
        </section>
        <PrimaryCTA />
      </main>
    </div>
  );
}

