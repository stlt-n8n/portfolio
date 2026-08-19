import { ArrowUpRight, Github } from 'lucide-react';
import TechIcon from './TechIcon.jsx';

function mediaByTitle(project, title) {
  return project.media.find((item) => item.title === title);
}

function ImagePanel({ media, title, label, className = '' }) {
  return (
    <a
      className={`business-image-panel ${className}`}
      href={media.src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} screenshot`}
    >
      <img src={media.src} alt={`${title} screenshot`} loading="lazy" />
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
  const workflow = mediaByTitle(project, 'Workflow Architecture');
  const telegram = mediaByTitle(project, 'Telegram Reporting');
  const dashboard = mediaByTitle(project, 'Analytics Dashboard');
  const queue = mediaByTitle(project, 'Processing Queue');

  const telegramItems = [
    'Active Orders',
    'Revenue',
    'Average Order Value',
    'Processing Items',
    'Top Employees',
    'Top Product',
    'Timestamp',
  ];

  const dashboardItems = [
    'Total Orders',
    'Processing Orders',
    'Revenue',
    'Order Status Distribution',
    'Business Metrics',
    'Top Employees',
  ];

  return (
    <article className="case-study business-case-study reveal" id={project.id}>
      <div className="business-case-intro">
        <div className="case-study-copy">
          <span className="project-kicker">Featured case study</span>
          <h3>{project.title}</h3>
          <span className="project-status">{project.subtitle}</span>
          <p>{project.description}</p>

          <div className="badge-list" aria-label={`${project.title} core technologies`}>
            {project.technologies.map((technology) => (
              <span className="badge" key={technology}>
                <TechIcon name={technology} />
                {technology}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <a className="button button-primary" href={project.caseStudyUrl}>
              {project.caseStudyLabel}
              <ArrowUpRight size={18} />
            </a>
            <a
              className="button button-secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              {project.githubLabel}
            </a>
          </div>
        </div>

        <figure className="business-banner-card">
          <img src={project.image} alt={`${project.title} banner`} loading="lazy" />
        </figure>
      </div>

      <div className="case-study-split business-problem-solution">
        <section className="case-study-note">
          <span>Problem</span>
          <p>{project.problem}</p>
        </section>
        <section className="case-study-note is-solution">
          <span>Solution</span>
          <p>{project.solution}</p>
        </section>
      </div>

      <section className="business-feature-block business-workflow-block">
        <div className="case-study-block-header">
          <span className="project-kicker">Workflow Architecture</span>
          <h4>Automated reporting flow</h4>
          <p>
            The workflow moves from order collection to KPI calculation, report history, Telegram
            delivery, and Processing Queue synchronization.
          </p>
        </div>

        <ImagePanel media={workflow} title="OrderPulse workflow architecture" label="Open workflow" />

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
          <span className="project-kicker">Telegram Reporting</span>
          <h4>Formatted operational report</h4>
          <p>{telegram.description}</p>
          <DetailList items={telegramItems} />
        </div>
        <ImagePanel
          media={telegram}
          title="OrderPulse Telegram report"
          label="Open report"
          className="business-image-panel-portrait"
        />
      </section>

      <section className="business-feature-block">
        <div className="case-study-block-header">
          <span className="project-kicker">Analytics Dashboard</span>
          <h4>Google Sheets business dashboard</h4>
          <p>{dashboard.description}</p>
        </div>

        <ImagePanel
          media={dashboard}
          title="OrderPulse analytics dashboard"
          label="Open dashboard"
          className="business-image-panel-wide"
        />

        <DetailList items={dashboardItems} />
      </section>

      <section className="business-feature-grid business-feature-grid-reverse">
        <ImagePanel
          media={queue}
          title="OrderPulse Processing Queue"
          label="Open queue"
          className="business-image-panel-wide"
        />
        <div className="business-feature-copy">
          <span className="project-kicker">Processing Queue</span>
          <h4>Focused view for active orders</h4>
          <p>
            The workflow automatically maintains a dedicated Processing Queue containing only active
            orders. This view can support operational review without implying a confirmed external
            deployment.
          </p>
          <DetailList items={project.useCases} />
        </div>
      </section>

      <section className="business-value-row">
        <div>
          <span className="project-kicker">Business Value</span>
          <p>{project.value}</p>
        </div>
        <div>
          <span className="project-kicker">Technologies</span>
          <div className="badge-list" aria-label={`${project.title} technologies`}>
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
          <h4>View the workflow repository</h4>
        </div>
        <a
          className="button button-secondary"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
          Open GitHub
        </a>
      </section>
    </article>
  );
}

export default OrderPulseBusinessCaseStudy;
