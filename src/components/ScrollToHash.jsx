import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        requestAnimationFrame(() => target.scrollIntoView());
        return undefined;
      }
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [hash, pathname]);

  return null;
}

export default ScrollToHash;
