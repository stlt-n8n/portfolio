import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/useLanguage.js';

function RevealOnScroll() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal'));

    const revealItemsAlreadyInView = () => {
      items.forEach((item) => {
        const bounds = item.getBoundingClientRect();
        const isInViewport = bounds.bottom > 0 && bounds.top < window.innerHeight;

        if (isInViewport) {
          item.classList.add('is-visible');
        }
      });
    };

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 },
    );

    items.forEach((item) => observer.observe(item));

    // Language-specific arrays can replace reveal elements without changing
    // the current route. Re-check the freshly rendered nodes on the next frame
    // so an in-view element can never remain in its initial hidden state.
    const animationFrame = window.requestAnimationFrame(revealItemsAlreadyInView);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [language, pathname]);

  return null;
}

export default RevealOnScroll;
