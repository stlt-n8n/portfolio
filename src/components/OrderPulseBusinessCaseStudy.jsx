import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage.js';
import TechIcon from './TechIcon.jsx';

function ImagePanel({ media, title, label, className = '', t }) {
  return (
    <a
      className={`business-image-panel ${className}`}
      href={media.src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('Open {title} screenshot', { title })}
    >
      <img
        src={media.src}
        alt={t('{title} screenshot', { title })}
        width={media.width}
        height={media.height}
        loading="lazy"
        decoding="async"
      />
      <span>
        {label}
        <ArrowUpRight size={16} />
      </span>
    </a>
  );
}

function DetailList({ items }) {
  return (
    <ul className="business-detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function OrderPulseBusinessCaseStudy({ project }) {
  const { t } = useLanguage();
  const [workflow, telegram, dashboard, queue] = project.media;

  const telegramItems = [
    t('Active Orders'),
    t('Revenue'),
    t('Average Order Value'),
    t('Processing Items'),
    t('Top Employees'),
    t('Top Product'),
    t('Timestamp'),
  ];

  const dashboardItems = [
    t('Total Orders'),
    t('Processing Orders'),
    t('Revenue'),
    t('Order Status Distribution'),
    t('Business Metrics'),
    t('Top Employees'),
  ];

  return (
    <article className="case-study business-case-study reveal" id={project.id}>
      <div className="business-case-intro">
        <div className="case-study-copy">
          <span className="project-kicker">{t('Featured case study')}</span>
          <h3>{project.title}</h3>
          <span className="project-status">{project.subtitle}</span>
          <p>{project.description}</p>

          <div className="badge-list" aria-label={t('{title} core technologies', { title: project.title })}>
            {project.technologies.map((technology) => (
              <span className="badge" key={technology}>
                <TechIcon name={technology} />
                {technology}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <a
              className="button button-secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('Open {title} repository on GitHub', { title: project.title })}
            >
              <Github size={18} />
              {project.githubLabel}
            </a>
          </div>
        </div>

        <figure className="business-banner-card">
          <img
            src={project.image}
            alt={t('{title} banner', { title: project.title })}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <div className="case-study-split business-problem-solution">
        <section className="case-study-note">
          <span>{t('Problem')}</span>
          <p>{project.problem}</p>
        </section>
        <section className="case-study-note is-solution">
          <span>{t('Solution')}</span>
          <p>{project.solution}</p>
        </section>
      </div>

      <section className="business-feature-block business-workflow-block">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Workflow Architecture')}</span>
          <h4>{t('Automated reporting flow')}</h4>
          <p>{t('The workflow moves from order collection to KPI calculation, report history, Telegram delivery, and Processing Queue synchronization.')}</p>
        </div>

        <ImagePanel media={workflow} title={t('OrderPulse workflow architecture')} label={t('Open workflow')} t={t} />

        <ol className="business-flow-list">
          {project.flow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="business-feature-grid">
        <div className="business-feature-copy">
          <span className="project-kicker">{t('Telegram Reporting')}</span>
          <h4>{t('Formatted operational report')}</h4>
          <p>{telegram.description}</p>
          <DetailList items={telegramItems} />
        </div>
        <ImagePanel
          media={telegram}
          title={t('OrderPulse Telegram report')}
          label={t('Open report')}
          t={t}
          className="business-image-panel-portrait"
        />
      </section>

      <section className="business-feature-block">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Analytics Dashboard')}</span>
          <h4>{t('Google Sheets business dashboard')}</h4>
          <p>{dashboard.description}</p>
        </div>

        <ImagePanel
          media={dashboard}
          title={t('OrderPulse analytics dashboard')}
          label={t('Open dashboard')}
          t={t}
          className="business-image-panel-wide"
        />

        <DetailList items={dashboardItems} />
      </section>

      <section className="business-feature-grid business-feature-grid-reverse">
        <ImagePanel
          media={queue}
          title="OrderPulse Processing Queue"
          label={t('Open queue')}
          t={t}
          className="business-image-panel-wide"
        />
        <div className="business-feature-copy">
          <span className="project-kicker">{t('Processing Queue')}</span>
          <h4>{t('Focused view for active orders')}</h4>
          <p>{t('The workflow automatically maintains a dedicated Processing Queue containing only active orders. This view can support operational review without implying a confirmed external deployment.')}</p>
          <DetailList items={project.useCases} />
        </div>
      </section>

      <section className="business-value-row">
        <div>
          <span className="project-kicker">{t('Business Value')}</span>
          <p>{project.value}</p>
        </div>
        <div>
          <span className="project-kicker">{t('Technologies')}</span>
          <div className="badge-list" aria-label={t('{title} technologies', { title: project.title })}>
            {project.technologies.map((technology) => (
              <span className="badge" key={technology}>
                <TechIcon name={technology} />
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="business-github-panel">
        <div>
          <span className="project-kicker">GitHub</span>
          <h4>{t('View the workflow repository')}</h4>
        </div>
        <a
          className="button button-secondary"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('Open {title} repository on GitHub', { title: project.title })}
        >
          <Github size={18} />
          {t('Open GitHub')}
        </a>
      </section>
    </article>
  );
}

export default OrderPulseBusinessCaseStudy;
