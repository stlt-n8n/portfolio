import { ArrowUpRight, CheckCircle2, Github, ShieldAlert } from 'lucide-react';
import TechIcon from './TechIcon.jsx';

function mediaByTitle(project, title) {
  return project.media.find((item) => item.title === title);
}

function InvoiceImageLink({ media, label, className = '' }) {
  return (
    <a
      className={`invoice-image-panel ${className}`}
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

function ScopeList({ items }) {
  return (
    <ul className="invoice-scope-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function InvoiceProcessingCaseStudy({ project }) {
  const workflow = mediaByTitle(project, 'Workflow Overview');
  const extraction = mediaByTitle(project, 'Structured Extraction');
  const invoices = mediaByTitle(project, 'Processed Invoices');
  const reviewQueue = mediaByTitle(project, 'Review Queue');
  const telegram = mediaByTitle(project, 'Telegram Review Alert');
  const sampleInvoice = mediaByTitle(project, 'Fictional Demo Invoice');

  return (
    <article className="case-study invoice-case-study reveal" id={project.id}>
      <div className="invoice-case-intro">
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

        <figure className="invoice-banner-card">
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

      <section className="invoice-problem-layout">
        <div className="invoice-problem-card">
          <span className="project-kicker">Business Problem</span>
          <h4>Automation without exception handling creates risk</h4>
          <p>{project.problem}</p>
        </div>
        <div className="invoice-solution-card">
          <span className="project-kicker">Solution</span>
          <h4>Structured extraction with a visible human checkpoint</h4>
          <p>{project.solution}</p>
          <blockquote>
            AI handles repeatable extraction. Uncertain invoice data remains visible to a person.
          </blockquote>
        </div>
      </section>

      <section className="invoice-workflow-section">
        <div className="case-study-block-header">
          <span className="project-kicker">Workflow Architecture</span>
          <h4>One extraction flow, two controlled outcomes</h4>
          <p>{workflow.description}</p>
        </div>

        <InvoiceImageLink media={workflow} label="Open workflow" className="invoice-image-panel-wide" />

        <ol className="invoice-stage-line">
          {project.flow.slice(0, 5).map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="invoice-extraction-section">
        <InvoiceImageLink
          media={extraction}
          label="Open extraction"
          className="invoice-image-panel-extraction"
        />
        <div className="invoice-extraction-copy">
          <span className="project-kicker">Structured Invoice Extraction</span>
          <h4>Predictable fields from unstructured invoice text</h4>
          <p>{extraction.description}</p>
          <div className="invoice-field-grid" aria-label="Extracted invoice fields">
            {project.extractedFields.map((field) => (
              <code key={field}>{field}</code>
            ))}
          </div>
        </div>
      </section>

      <section className="invoice-decision-section">
        <div className="case-study-block-header">
          <span className="project-kicker">Human Review Decision</span>
          <h4>Confidence controls visibility, not final approval</h4>
          <p>
            Important missing fields or confidence below 0.8 set <code>needs_review = true</code>.
            Final correction, approval, rejection, and payment always remain manual.
          </p>
        </div>

        <div className="invoice-decision-grid">
          <article className="invoice-decision-card is-accepted">
            <CheckCircle2 size={24} aria-hidden="true" />
            <span>Accepted path</span>
            <code>needs_review = false</code>
            <p>Append the normalized record to the processed invoices sheet.</p>
          </article>
          <article className="invoice-decision-card is-review">
            <ShieldAlert size={24} aria-hidden="true" />
            <span>Review path</span>
            <code>needs_review = true</code>
            <p>Save to review_queue, mark the record pending, and notify the reviewer.</p>
          </article>
        </div>
      </section>

      <section className="invoice-ledger-row">
        <div className="invoice-ledger-copy">
          <span className="project-kicker">Processed Invoices</span>
          <h4>Complete records stay separate</h4>
          <p>{invoices.description}</p>
        </div>
        <InvoiceImageLink media={invoices} label="Open invoices" className="invoice-image-panel-ledger" />
      </section>

      <section className="invoice-ledger-row is-review-row">
        <div className="invoice-ledger-copy">
          <span className="project-kicker">Review Queue</span>
          <h4>Exceptions remain visible</h4>
          <p>{reviewQueue.description}</p>
        </div>
        <InvoiceImageLink media={reviewQueue} label="Open review queue" className="invoice-image-panel-ledger" />
      </section>

      <section className="invoice-evidence-section">
        <div className="case-study-block-header">
          <span className="project-kicker">Reviewer Alert & Demo Invoice</span>
          <h4>Human context without implying PDF ingestion</h4>
        </div>

        <div className="invoice-evidence-grid">
          <InvoiceImageLink
            media={telegram}
            label="Open Telegram alert"
            className="invoice-image-panel-portrait"
          />
          <div className="invoice-demo-note">
            <span className="project-kicker">Current Demo Boundary</span>
            <h4>Invoice text is the actual workflow input</h4>
            <p>
              The sample invoice demonstrates the fictional business data used in this portfolio
              walkthrough. The current workflow receives <code>invoice_text</code> through a webhook
              rather than directly uploading or parsing PDF files.
            </p>
            <p>
              Telegram is a notification channel for the reviewer, not an approval interface or a
              payment system.
            </p>
          </div>
          <InvoiceImageLink
            media={sampleInvoice}
            label="Open demo invoice"
            className="invoice-image-panel-document"
          />
        </div>
      </section>

      <section className="invoice-scope-grid">
        <div className="invoice-scope-card">
          <span className="project-kicker">Prototype Scope</span>
          <h4>What the current demo covers</h4>
          <ScopeList items={project.scopeLimitations} />
        </div>
        <div className="invoice-scope-card is-evolution">
          <span className="project-kicker">Production Evolution</span>
          <h4>Engineering next steps</h4>
          <ScopeList items={project.futureImprovements} />
        </div>
      </section>

      <section className="invoice-footer-panel">
        <div>
          <span className="project-kicker">Technologies</span>
          <h4>Extraction and review workflow stack</h4>
          <TechnologyBadges project={project} />
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

export default InvoiceProcessingCaseStudy;
