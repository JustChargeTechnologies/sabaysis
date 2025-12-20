import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (isAdmin) return;

    import('gsap/ScrollSmoother')
      .then((module) => {
        const ScrollSmoother = module.ScrollSmoother;
        gsap.registerPlugin(ScrollSmoother);

        const smoother = ScrollSmoother.create({
          smooth: 2,
          effects: true,
          normalizeScroll: true,
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
        });

        (window as any).__scrollSmoother = smoother;

        return () => {
          if (smoother) {
            smoother.kill();
          }
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      })
      .catch((error) => {
        console.warn('ScrollSmoother not available. Using standard scrolling.', error);
      });

    return () => {
      if ((window as any).__scrollSmoother) {
        (window as any).__scrollSmoother.kill();
        (window as any).__scrollSmoother = null;
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}

