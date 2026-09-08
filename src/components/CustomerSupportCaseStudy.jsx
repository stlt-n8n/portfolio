import { ArrowUpRight, Github } from 'lucide-react';
import TechIcon from './TechIcon.jsx';

function mediaByTitle(project, title) {
  return project.media.find((item) => item.title === title);
}

function SupportImagePanel({ media, label, className = '' }) {
  return (
    <a
      className={`support-image-panel ${className}`}
      href={media.src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${media.title} screenshot`}
    >
      <img
        src={media.src}
        alt={`${media.title} screenshot`}
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

function BulletList({ items }) {
  return (
    <ul className="support-detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function TechnologyBadges({ project }) {
  return (
    <div className="badge-list" aria-label={`${project.title} technologies`}>
      {project.technologies.map((technology) => (
        <span className="badge" key={technology}>
          <TechIcon name={technology} />
          {technology}
        </span>
      ))}
    </div>
  );
}

function CustomerSupportCaseStudy({ project }) {
  const workflow = mediaByTitle(project, 'Workflow Overview');
  const webhook = mediaByTitle(project, 'Webhook Response');
  const orders = mediaByTitle(project, 'Orders Data');
  const products = mediaByTitle(project, 'Products Data');
  const interactions = mediaByTitle(project, 'Interaction Logs');
  const leads = mediaByTitle(project, 'Sales Leads');
  const refundAlert = mediaByTitle(project, 'Refund Alert');
  const salesAlert = mediaByTitle(project, 'Sales Lead Alert');

  return (
    <article className="case-study support-case-study reveal" id={project.id}>
      <div className="support-case-intro">
        <div className="case-study-copy">
          <span className="project-kicker">Featured case study</span>
          <h3>{project.title}</h3>
          <span className="project-status">{project.subtitle}</span>
          <p>{project.description}</p>

          <TechnologyBadges project={project} />

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

        <figure className="support-banner-card">
          <img
            src={project.image}
            alt={`${project.title} workflow banner`}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>

      <div className="case-study-split support-problem-solution">
        <section className="case-study-note">
          <span>Business Problem</span>
          <p>{project.problem}</p>
        </section>
        <section className="case-study-note is-solution">
          <span>Solution</span>
          <p>{project.solution}</p>
        </section>
      </div>

      <section className="support-feature-block">
        <div className="case-study-block-header">
          <span className="project-kicker">How It Works</span>
          <h4>From customer message to a structured response</h4>
          <p>
            Each request follows a defined route while keeping data lookup, logging, and human
            escalation visible as separate operational steps.
          </p>
        </div>

        <ol className="support-flow-list">
          {project.flow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="support-feature-block">
        <div className="case-study-block-header">
          <span className="project-kicker">Supported Intents</span>
          <h4>Five focused routing paths</h4>
          <p>
            OpenAI classifies the request and extracts an order ID or product name when that context
            is available.
          </p>
        </div>

        <div className="support-intent-grid">
          {project.intents.map((intent) => (
            <article key={intent.name}>
              <code>{intent.name}</code>
              <p>{intent.purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="support-feature-block">
        <div className="case-study-block-header">
          <span className="project-kicker">Workflow</span>
          <h4>Intent-based n8n architecture</h4>
          <p>{workflow.description}</p>
        </div>
        <SupportImagePanel media={workflow} label="Open workflow" className="support-image-panel-wide" />
      </section>

      <section className="support-feature-grid">
        <div className="support-feature-copy">
          <span className="project-kicker">Example Webhook Response</span>
          <h4>Consistent output for the calling system</h4>
          <p>{webhook.description}</p>
          <p>
            The response keeps the resolved intent and customer-facing message in a predictable
            structure that another interface can consume.
          </p>
        </div>
        <SupportImagePanel media={webhook} label="Open response" className="support-image-panel-compact" />
      </section>

      <section className="support-feature-block">
        <div className="case-study-block-header">
          <span className="project-kicker">Mock Data</span>
          <h4>Grounded order and product lookups</h4>
          <p>
            Google Sheets acts as a transparent mock e-commerce data source for this portfolio-ready
            automation example.
          </p>
        </div>
        <div className="support-media-grid">
          <SupportImagePanel media={orders} label="Open order data" />
          <SupportImagePanel media={products} label="Open product data" />
        </div>
      </section>

      <section className="support-feature-block">
        <div className="case-study-block-header">
          <span className="project-kicker">Operational Logging</span>
          <h4>Support history and lead capture</h4>
          <p>
            The workflow records processed interactions and stores sales opportunities separately for
            a clear human follow-up path.
          </p>
        </div>
        <div className="support-media-grid">
          <SupportImagePanel media={interactions} label="Open interaction logs" />
          <SupportImagePanel media={leads} label="Open sales leads" />
        </div>
      </section>

      <section className="support-feature-block">
        <div className="case-study-block-header">
          <span className="project-kicker">Human Escalation</span>
          <h4>Telegram alerts for cases that need attention</h4>
          <p>
            Refund or return requests and new sales leads generate targeted notifications. The alerts
            support a human handoff; they do not replace a ticketing system or perform refunds.
          </p>
        </div>
        <div className="support-media-grid support-alert-grid">
          <SupportImagePanel media={refundAlert} label="Open refund alert" className="support-image-panel-compact" />
          <SupportImagePanel media={salesAlert} label="Open sales alert" className="support-image-panel-compact" />
        </div>
      </section>

      <section className="support-scope-grid">
        <div className="support-scope-card">
          <span className="project-kicker">Prototype Scope</span>
          <h4>What the current workflow demonstrates</h4>
          <BulletList items={project.scopeLimitations} />
        </div>
        <div className="support-scope-card is-evolution">
          <span className="project-kicker">Production Evolution</span>
          <h4>Practical next steps</h4>
          <BulletList items={project.futureImprovements} />
        </div>
      </section>

      <section className="support-tech-row">
        <div>
          <span className="project-kicker">Technologies</span>
          <h4>Workflow stack</h4>
        </div>
        <TechnologyBadges project={project} />
      </section>

      <section className="support-github-panel">
        <div>
          <span className="project-kicker">GitHub</span>
          <h4>View the documented workflow repository</h4>
        </div>
        <a
          className="button button-secondary"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} repository on GitHub`}
        >
          <Github size={18} />
          View Repository
        </a>
      </section>
    </article>
  );
}

export default CustomerSupportCaseStudy;
