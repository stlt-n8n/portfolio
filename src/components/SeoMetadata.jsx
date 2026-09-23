import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/useLanguage.js';

const SITE_ORIGIN = 'https://portfolio-stlt-n8n1.vercel.app';
const ASSISTANT_ROUTE = '/projects/ai-portfolio-assistant';

function SeoMetadata() {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const url = `${SITE_ORIGIN}${pathname}`;
    const isAssistantPage = pathname === ASSISTANT_ROUTE;
    const title = isAssistantPage
      ? `${t('AI Portfolio Assistant & Lead Qualification')} | Vladyslav Lukianov`
      : t('Vladyslav Lukianov — AI Automation & IT Specialist');
    const description = isAssistantPage
      ? t('AI portfolio assistant built with n8n, OpenAI, Supabase and RAG, featuring intent routing, contextual follow-ups and lead qualification.')
      : t('Vladyslav Lukianov is an AI Automation & IT Specialist who builds practical n8n workflows, business automations, and operational tools.');
    const socialDescription = isAssistantPage
      ? description
      : t('Explore practical AI automation, n8n workflows, Google Sheets, Telegram, and operational reporting projects by Vladyslav Lukianov.');
    const twitterDescription = isAssistantPage
      ? description
      : t('Practical AI automation, n8n workflow, and IT projects by Vladyslav Lukianov.');

    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', socialDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', twitterDescription);
  }, [pathname, t]);

  return null;
}

export default SeoMetadata;
