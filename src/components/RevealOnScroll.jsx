import { useEffect } from 'react';

function RevealOnScroll() {
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
  }, []);

  return null;
}

export default RevealOnScroll;
