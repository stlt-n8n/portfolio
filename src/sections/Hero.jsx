import { ArrowDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/useLanguage.js';

function Hero() {
  const { content, t } = useLanguage();
  const { profile } = content;
  return (
    <section className="hero section" id="top">
      <div className="hero-grid">
        <div className="hero-copy reveal is-visible">
          <div className="hero-identity">
            <span className="eyebrow">{t('Portfolio')}</span>
            <span className="hero-role">{profile.name}</span>
          </div>
          <h1>{profile.title}</h1>
          <p>{profile.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              {t('View Projects')}
              <ArrowDown size={18} />
            </Link>
            <Link className="button button-secondary" to="/#contact">
              {t('Contact Me')}
              <Mail size={18} />
            </Link>
          </div>
        </div>

        <div className="hero-panel reveal is-visible" aria-label={t('Portfolio focus areas')}>
          <div className="panel-topline">
            <span>
              <span className="status-dot" />
              {t('Automation Stack')}
            </span>
            <span>2026</span>
          </div>
          <div className="signal-map">
            <span className="signal-core">
              <strong>{t('Build')}</strong>
              <small>{t('automate / connect / support')}</small>
            </span>
            <span className="signal-ring signal-ring-one" />
            <span className="signal-ring signal-ring-two" />
            <span className="signal-line signal-line-one" />
            <span className="signal-line signal-line-two" />
            <span className="signal-node node-ai">AI</span>
            <span className="signal-node node-api">API</span>
            <span className="signal-node node-flow">FLOW</span>
            <span className="signal-node node-it">IT</span>
          </div>
          <div className="panel-metrics">
            <div>
              <strong>01</strong>
              <span>{t('Map the workflow')}</span>
            </div>
            <div>
              <strong>02</strong>
              <span>{t('Build the automation')}</span>
            </div>
            <div>
              <strong>03</strong>
              <span>{t('Make it usable')}</span>
            </div>
          </div>
          <div className="panel-console" aria-label={t('Automation process preview')}>
            <span>{t('Manual task')}</span>
            <span>{t('Workflow')}</span>
            <span>{t('Insight')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
