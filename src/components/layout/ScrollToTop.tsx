import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const scrollSmoother = (window as any).__scrollSmoother;

    if (scrollSmoother) {
        scrollSmoother.scrollTop(0); 
    } else {
        window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
