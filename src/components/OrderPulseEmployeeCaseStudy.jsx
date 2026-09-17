import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage.js';
import TechIcon from './TechIcon.jsx';

function EmployeeImagePanel({ media, title, label, className = '', t }) {
  return (
    <a
      className={`employee-image-panel ${className}`}
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

function EmployeePillList({ items }) {
  return (
    <ul className="employee-pill-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function OrderPulseEmployeeCaseStudy({ project }) {
  const { t } = useLanguage();
  const [workflow, queue, dashboard, telegram] = project.media;

  return (
    <article className="case-study employee-case-study reveal" id={project.id}>
      <div className="employee-case-intro">
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

        <figure className="employee-banner-card">
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

      <div className="employee-focus-row">
        <section>
          <span>{t('Operational Problem')}</span>
          <p>{project.problem}</p>
        </section>
        <section>
          <span>{t('Role-Focused Solution')}</span>
          <p>{project.solution}</p>
        </section>
        <section>
          <span>{t('Operational View')}</span>
          <p>{t('The project focuses on employee reporting, active processing orders, product statistics, report history, and queue synchronization.')}</p>
        </section>
      </div>

      <section className="employee-workflow-section">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Workflow Overview')}</span>
          <h4>{t('From shared order data to a focused operational report')}</h4>
          <p>{workflow.description}</p>
        </div>

        <div className="employee-workflow-layout">
          <EmployeeImagePanel
            media={workflow}
            title={t('OrderPulse Employee Workflow overview')}
            label={t('Open workflow')}
            t={t}
            className="employee-image-panel-workflow"
          />

          <ol className="employee-flow-list">
            {project.flow.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="employee-queue-section">
        <div className="employee-section-copy">
          <span className="project-kicker">{t('Processing Queue')}</span>
          <h4>{t('Active orders in a dedicated queue')}</h4>
          <p>{queue.description}</p>
        </div>

        <EmployeeImagePanel
          media={queue}
          title="OrderPulse Employee Processing Queue"
          label={t('Open queue')}
          t={t}
          className="employee-image-panel-wide"
        />
      </section>

      <section className="employee-dashboard-section">
        <EmployeeImagePanel
          media={dashboard}
          title={t('OrderPulse Employee Dashboard')}
          label={t('Open dashboard')}
          t={t}
          className="employee-image-panel-dashboard"
        />
        <div className="employee-section-copy employee-metrics-panel">
          <span className="project-kicker">{t('Employee Dashboard')}</span>
          <h4>{t('Operational metrics for daily review')}</h4>
          <p>{dashboard.description}</p>
          <EmployeePillList items={project.metrics} />
        </div>
      </section>

      <section className="employee-telegram-section">
        <div className="employee-section-copy">
          <span className="project-kicker">{t('Automated Telegram Report')}</span>
          <h4>{t('Report delivery without manual preparation')}</h4>
          <p>{telegram.description}</p>
          <EmployeePillList items={project.metrics} />
        </div>

        <EmployeeImagePanel
          media={telegram}
          title={t('OrderPulse Employee Telegram Report')}
          label={t('Open report')}
          t={t}
          className="employee-image-panel-report"
        />
      </section>

      <section className="employee-value-panel">
        <div>
          <span className="project-kicker">{t('Operational Value')}</span>
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

      <section className="employee-github-panel">
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

export default OrderPulseEmployeeCaseStudy;
