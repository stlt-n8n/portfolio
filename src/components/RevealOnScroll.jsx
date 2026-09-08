import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal'));

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
      { threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

export default RevealOnScroll;
