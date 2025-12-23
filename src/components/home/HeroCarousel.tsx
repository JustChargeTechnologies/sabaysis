import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import banner1 from '../../assets/Hero/banner1.jpg';

const slides = [
  {
    id: 1,
    // subtitle: 'Sabaysis Sports & Infra',
    // title: "Building India's Next-Gen Sports Infrastructure",
    image: banner1,
  },
  {
    id: 2,
    subtitle: 'Advanced Surfaces',
    title: 'FIFA-Standard Artificial Turf Solutions',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 3,
    subtitle: 'Integrated Facilities',
    title: 'From Multisport Courts to Olympic Tracks',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 4,
    subtitle: 'Eco-Friendly',
    title: 'Sustainable Infrastructure for a Greener Future',
    image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=2000&q=80',
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    let startTime = Date.now();
    const duration = 10000;
    
    setProgress(0);
    startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      const showThumbnailStart = 2000; 
      const showThumbnailEnd = duration - 2000; 
      const shouldShow = elapsed < showThumbnailStart || elapsed > showThumbnailEnd;
      setShowThumbnails(shouldShow);

      if (elapsed >= duration) {
         handleNext();
         startTime = Date.now();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] w-full overflow-hidden bg-slate-900 text-white">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
      ))}
      <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-20 md:px-16 md:pb-24 lg:w-2/3">
        <div className="max-w-3xl transform transition-all duration-700">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {slides[activeIndex].title}
          </h1>
          <p className="mt-4 text-lg font-medium tracking-wide text-slate-300 md:text-xl">
            {slides[activeIndex].subtitle}
          </p>
          <button className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:border-white hover:bg-white hover:text-slate-900 min-h-[48px] min-w-[160px] justify-center">
            Know More
          </button>
        </div>
      </div>

      <div 
        className={`absolute bottom-24 right-8 z-20 hidden items-end gap-4 transition-opacity duration-500 lg:flex ${showThumbnails ? 'opacity-100' : 'opacity-0'}`}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className={`group relative h-64 w-40 overflow-hidden rounded-sm border transition-all duration-500 hover:w-48 ${
              activeIndex === index
                ? 'border-white opacity-100 scale-100 ring-2 ring-white/20'
                : 'border-white/30 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 transition-colors duration-300 ${activeIndex === index ? 'bg-transparent' : 'bg-black/40'}`} />
          </button>
        ))}
      </div>

      <div className="absolute bottom-10 right-8 z-20 flex items-center gap-8 md:right-16">
        <div className="relative h-[2px] w-32 bg-white/20 md:w-48">
          <div
            className="absolute left-0 top-0 h-full bg-white transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="rounded-full border border-white/30 p-3.5 text-white transition-all hover:border-white hover:bg-white hover:text-slate-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border border-white/30 p-3.5 text-white transition-all hover:border-white hover:bg-white hover:text-slate-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Next Slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
