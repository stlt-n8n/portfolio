import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_ORIGIN = 'https://portfolio-stlt-n8n1.vercel.app';

function SeoMetadata() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const url = `${SITE_ORIGIN}${pathname}`;

    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
  }, [pathname]);

  return null;
}

export default SeoMetadata;
