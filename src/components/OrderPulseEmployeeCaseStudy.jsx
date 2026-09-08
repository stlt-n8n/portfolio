import { ArrowUpRight, Github } from 'lucide-react';
import TechIcon from './TechIcon.jsx';

function mediaByTitle(project, title) {
  return project.media.find((item) => item.title === title);
}

function EmployeeImagePanel({ media, title, label, className = '' }) {
  return (
    <a
      className={`employee-image-panel ${className}`}
      href={media.src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} screenshot`}
    >
      <img
        src={media.src}
        alt={`${title} screenshot`}
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
  const workflow = mediaByTitle(project, 'Workflow Overview');
  const queue = mediaByTitle(project, 'Processing Queue');
  const dashboard = mediaByTitle(project, 'Employee Dashboard');
  const telegram = mediaByTitle(project, 'Telegram Report');

  return (
    <article className="case-study employee-case-study reveal" id={project.id}>
      <div className="employee-case-intro">
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
            <a
              className="button button-secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} repository on GitHub`}
            >
              <Github size={18} />
              {project.githubLabel}
            </a>
          </div>
        </div>

        <figure className="employee-banner-card">
          <img
            src={project.image}
            alt={`${project.title} banner`}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <div className="employee-focus-row">
        <section>
          <span>Operational Problem</span>
          <p>{project.problem}</p>
        </section>
        <section>
          <span>Role-Focused Solution</span>
          <p>{project.solution}</p>
        </section>
        <section>
          <span>Operational View</span>
          <p>
            The project focuses on employee reporting, active processing orders, product statistics,
            report history, and queue synchronization.
          </p>
        </section>
      </div>

      <section className="employee-workflow-section">
        <div className="case-study-block-header">
          <span className="project-kicker">Workflow Overview</span>
          <h4>From shared order data to a focused operational report</h4>
          <p>{workflow.description}</p>
        </div>

        <div className="employee-workflow-layout">
          <EmployeeImagePanel
            media={workflow}
            title="OrderPulse Employee Workflow overview"
            label="Open workflow"
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
          <span className="project-kicker">Processing Queue</span>
          <h4>Active orders in a dedicated queue</h4>
          <p>{queue.description}</p>
        </div>

        <EmployeeImagePanel
          media={queue}
          title="OrderPulse Employee Processing Queue"
          label="Open queue"
          className="employee-image-panel-wide"
        />
      </section>

      <section className="employee-dashboard-section">
        <EmployeeImagePanel
          media={dashboard}
          title="OrderPulse Employee Dashboard"
          label="Open dashboard"
          className="employee-image-panel-dashboard"
        />
        <div className="employee-section-copy employee-metrics-panel">
          <span className="project-kicker">Employee Dashboard</span>
          <h4>Operational metrics for daily review</h4>
          <p>{dashboard.description}</p>
          <EmployeePillList items={project.metrics} />
        </div>
      </section>

      <section className="employee-telegram-section">
        <div className="employee-section-copy">
          <span className="project-kicker">Automated Telegram Report</span>
          <h4>Report delivery without manual preparation</h4>
          <p>{telegram.description}</p>
          <EmployeePillList items={project.metrics} />
        </div>

        <EmployeeImagePanel
          media={telegram}
          title="OrderPulse Employee Telegram Report"
          label="Open report"
          className="employee-image-panel-report"
        />
      </section>

      <section className="employee-value-panel">
        <div>
          <span className="project-kicker">Operational Value</span>
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

      <section className="employee-github-panel">
        <div>
          <span className="project-kicker">GitHub</span>
          <h4>View the workflow repository</h4>
        </div>
        <a
          className="button button-secondary"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} repository on GitHub`}
        >
          <Github size={18} />
          Open GitHub
        </a>
      </section>
    </article>
  );
}

export default OrderPulseEmployeeCaseStudy;
