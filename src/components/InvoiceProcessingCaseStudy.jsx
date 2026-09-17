import { ArrowUpRight, CheckCircle2, Github, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage.js';
import TechIcon from './TechIcon.jsx';

function InvoiceImageLink({ media, label, className = '' }) {
  const { t } = useLanguage();
  return (
    <a
      className={`invoice-image-panel ${className}`}
      href={media.src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('Open {title} screenshot', { title: media.title })}
    >
      <img
        src={media.src}
        alt={t('{title} screenshot', { title: media.title })}
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
  const { t } = useLanguage();
  return (
    <div className="badge-list" aria-label={t('{title} technologies', { title: project.title })}>
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
  const { t } = useLanguage();
  const [workflow, extraction, invoices, reviewQueue, telegram, sampleInvoice] = project.media;

  return (
    <article className="case-study invoice-case-study reveal" id={project.id}>
      <div className="invoice-case-intro">
        <div className="case-study-copy">
          <span className="project-kicker">{t('Featured case study')}</span>
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
              aria-label={t('Open {title} repository on GitHub', { title: project.title })}
            >
              <Github size={18} />
              {project.githubLabel}
            </a>
          </div>
        </div>

        <figure className="invoice-banner-card">
          <img
            src={project.image}
            alt={t('{title} workflow banner', { title: project.title })}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>

      <section className="invoice-problem-layout">
        <div className="invoice-problem-card">
          <span className="project-kicker">{t('Business Problem')}</span>
          <h4>{t('Automation without exception handling creates risk')}</h4>
          <p>{project.problem}</p>
        </div>
        <div className="invoice-solution-card">
          <span className="project-kicker">{t('Solution')}</span>
          <h4>{t('Structured extraction with a visible human checkpoint')}</h4>
          <p>{project.solution}</p>
          <blockquote>
            {t('AI handles repeatable extraction. Uncertain invoice data remains visible to a person.')}
          </blockquote>
        </div>
      </section>

      <section className="invoice-workflow-section">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Workflow Architecture')}</span>
          <h4>{t('One extraction flow, two controlled outcomes')}</h4>
          <p>{workflow.description}</p>
        </div>

        <InvoiceImageLink media={workflow} label={t('Open workflow')} className="invoice-image-panel-wide" />

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
          label={t('Open extraction')}
          className="invoice-image-panel-extraction"
        />
        <div className="invoice-extraction-copy">
          <span className="project-kicker">{t('Structured Invoice Extraction')}</span>
          <h4>{t('Predictable fields from unstructured invoice text')}</h4>
          <p>{extraction.description}</p>
          <div className="invoice-field-grid" aria-label={t('Extracted invoice fields')}>
            {project.extractedFields.map((field) => (
              <code key={field}>{field}</code>
            ))}
          </div>
        </div>
      </section>

      <section className="invoice-decision-section">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Human Review Decision')}</span>
          <h4>{t('Confidence controls visibility, not final approval')}</h4>
          <p>
            {t('Important missing fields or confidence below 0.8 set')} <code>needs_review = true</code>.
            {' '}{t('Final correction, approval, rejection, and payment always remain manual.')}
          </p>
        </div>

        <div className="invoice-decision-grid">
          <article className="invoice-decision-card is-accepted">
            <CheckCircle2 size={24} aria-hidden="true" />
            <span>{t('Accepted path')}</span>
            <code>needs_review = false</code>
            <p>{t('Append the normalized record to the processed invoices sheet.')}</p>
          </article>
          <article className="invoice-decision-card is-review">
            <ShieldAlert size={24} aria-hidden="true" />
            <span>{t('Review path')}</span>
            <code>needs_review = true</code>
            <p>{t('Save to review_queue, mark the record pending, and notify the reviewer.')}</p>
          </article>
        </div>
      </section>

      <section className="invoice-ledger-row">
        <div className="invoice-ledger-copy">
          <span className="project-kicker">{t('Processed Invoices')}</span>
          <h4>{t('Complete records stay separate')}</h4>
          <p>{invoices.description}</p>
        </div>
        <InvoiceImageLink media={invoices} label={t('Open invoices')} className="invoice-image-panel-ledger" />
      </section>

      <section className="invoice-ledger-row is-review-row">
        <div className="invoice-ledger-copy">
          <span className="project-kicker">{t('Review Queue')}</span>
          <h4>{t('Exceptions remain visible')}</h4>
          <p>{reviewQueue.description}</p>
        </div>
        <InvoiceImageLink media={reviewQueue} label={t('Open review queue')} className="invoice-image-panel-ledger" />
      </section>

      <section className="invoice-evidence-section">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Reviewer Alert & Demo Invoice')}</span>
          <h4>{t('Human context without implying PDF ingestion')}</h4>
        </div>

        <div className="invoice-evidence-grid">
          <InvoiceImageLink
            media={telegram}
            label={t('Open Telegram alert')}
            className="invoice-image-panel-portrait"
          />
          <div className="invoice-demo-note">
            <span className="project-kicker">{t('Current Demo Boundary')}</span>
            <h4>{t('Invoice text is the actual workflow input')}</h4>
            <p>{t('The sample invoice demonstrates the fictional business data used in this portfolio walkthrough. The current workflow receives')} <code>invoice_text</code> {t('through a webhook rather than directly uploading or parsing PDF files.')}</p>
            <p>{t('Telegram is a notification channel for the reviewer, not an approval interface or a payment system.')}</p>
          </div>
          <InvoiceImageLink
            media={sampleInvoice}
            label={t('Open demo invoice')}
            className="invoice-image-panel-document"
          />
        </div>
      </section>

      <section className="invoice-scope-grid">
        <div className="invoice-scope-card">
          <span className="project-kicker">{t('Prototype Scope')}</span>
          <h4>{t('What the current demo covers')}</h4>
          <ScopeList items={project.scopeLimitations} />
        </div>
        <div className="invoice-scope-card is-evolution">
          <span className="project-kicker">{t('Production Evolution')}</span>
          <h4>{t('Engineering next steps')}</h4>
          <ScopeList items={project.futureImprovements} />
        </div>
      </section>

      <section className="invoice-footer-panel">
        <div>
          <span className="project-kicker">{t('Technologies')}</span>
          <h4>{t('Extraction and review workflow stack')}</h4>
          <TechnologyBadges project={project} />
        </div>
        <a
          className="button button-secondary"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('Open {title} repository on GitHub', { title: project.title })}
        >
          <Github size={18} />
          {t('View Repository')}
        </a>
      </section>
    </article>
  );
}

export default InvoiceProcessingCaseStudy;
