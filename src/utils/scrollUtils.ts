import { gsap } from 'gsap';

/**
 * Scroll utility functions using GSAP ScrollSmoother
 * Note: ScrollSmoother requires a GSAP Club membership
 */

export function scrollToElement(selector: string, smooth = true, position = 'center center') {
  const smoother = (window as any).__scrollSmoother;
  
  if (smoother) {
    // Use ScrollSmoother if available
    smoother.scrollTo(selector, smooth, position);
  } else {
    // Fallback to native scrollIntoView
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'center' });
    }
  }
}

export function scrollToPosition(scrollTop: number, duration = 1) {
  const smoother = (window as any).__scrollSmoother;
  
  if (smoother) {
    // Use GSAP animation with ScrollSmoother
    gsap.to(smoother, {
      scrollTop: scrollTop,
      duration,
    });
  } else {
    // Fallback to native scroll
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth',
    });
  }
}

