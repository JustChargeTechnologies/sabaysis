import { FeaturedServices } from '@/components/home/FeaturedServices';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { PrimaryCTA } from '@/components/home/PrimaryCTA';
import { UnifiedSportsTurf } from '@/components/home/UnifiedSportsTurf';
import { Testimonials } from '@/components/home/Testimonials';
import { ValueProps } from '@/components/home/ValueProps';
import { usePageTitle } from '@/hooks/usePageTitle';

export function Home() {
  usePageTitle('Home');
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <HeroCarousel />
      <main className="flex flex-col">
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <FeaturedServices />
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <ValueProps />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <UnifiedSportsTurf />
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <Testimonials />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4">
            <PrimaryCTA />
          </div>
        </section>
      </main>
    </div>
  );
}

