import {
  ArrowRight,
  ArrowUpRight,
  Database,
  FileSearch,
  Github,
  Network,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage.js';
import TechIcon from './TechIcon.jsx';

function RagImageLink({ media, label, className = '' }) {
  const { t } = useLanguage();
  return (
    <a
      className={`rag-image-panel ${className}`}
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

function RagList({ items }) {
  return (
    <ul className="rag-detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ArchitecturePath({ eyebrow, title, steps, icon: Icon, accent }) {
  return (
    <article className={`rag-path-card ${accent}`}>
      <div className="rag-path-heading">
        <Icon size={22} aria-hidden="true" />
        <div>
          <span>{eyebrow}</span>
          <h5>{title}</h5>
        </div>
      </div>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{step}</p>
            {index < steps.length - 1 ? <ArrowRight size={14} aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
    </article>
  );
}

function KnowledgeRagCaseStudy({ project }) {
  const { t } = useLanguage();
  const [workflow, vectorStore, semanticSearch, groundedAnswer, fallback] = project.media;

  return (
    <article className="case-study rag-case-study reveal" id={project.id}>
      <div className="rag-case-intro">
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

        <div className="rag-hero-visuals">
          <figure className="rag-banner-card">
            <img
              src={project.image}
              alt={t('{title} project banner', { title: project.title })}
              width={project.imageWidth}
              height={project.imageHeight}
              loading="eager"
              decoding="async"
            />
          </figure>
          <div className="rag-system-summary" aria-label={t('RAG system structure')}>
            <span>{t('Knowledge ingestion')}</span>
            <ArrowRight size={15} aria-hidden="true" />
            <span>{t('Vector retrieval')}</span>
            <ArrowRight size={15} aria-hidden="true" />
            <span>{t('Grounded answer')}</span>
          </div>
        </div>
      </div>

      <section className="rag-problem-band">
        <div>
          <span className="project-kicker">{t('Business Problem')}</span>
          <h4>{t('Internal knowledge is useful only when people can find it')}</h4>
          <p>{project.problem}</p>
        </div>
        <div className="rag-retrieval-principle">
          <FileSearch size={26} aria-hidden="true" />
          <span>{t('Retrieval principle')}</span>
          <p>{t('Find company-specific context before asking the model to answer.')}</p>
        </div>
        <div>
          <span className="project-kicker">{t('Solution')}</span>
          <h4>{t('A searchable policy assistant, not a generic chatbot')}</h4>
          <p>{project.solution}</p>
        </div>
      </section>

      <section className="rag-architecture-section">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('RAG Architecture')}</span>
          <h4>{t('Two separate paths share one knowledge layer')}</h4>
          <p>{workflow.description}</p>
        </div>

        <div className="rag-path-grid">
          <ArchitecturePath
            eyebrow={t('Path 01')}
            title={t('Knowledge Ingestion')}
            steps={project.ingestionFlow}
            icon={Database}
            accent="is-ingestion"
          />
          <ArchitecturePath
            eyebrow={t('Path 02')}
            title={t('Question Answering')}
            steps={project.answeringFlow}
            icon={Network}
            accent="is-answering"
          />
        </div>

        <RagImageLink media={workflow} label={t('Open workflow')} className="rag-image-panel-workflow" />
      </section>

      <section className="rag-ingestion-section">
        <div className="rag-ingestion-copy">
          <span className="project-kicker">{t('Knowledge Ingestion')}</span>
          <h4>{t('Policies are prepared once, then stored for later retrieval')}</h4>
          <p>{t('The demo ingestion path is started manually. Each fictional policy is loaded, converted into an OpenAI embedding, and stored in Supabase. Ingestion does not run again for every employee question, and the current project does not synchronize documents automatically.')}</p>
          <div className="rag-policy-grid" aria-label={t('Fictional demo policies')}>
            {project.policies.map((policy) => (
              <span key={policy}>{policy}</span>
            ))}
          </div>
        </div>
        <div className="rag-vector-store-copy">
          <span className="project-kicker">{t('Supabase Vector Store')}</span>
          <h4>{t('Content, metadata, and vector embeddings')}</h4>
          <p>{vectorStore.description}</p>
          <dl className="rag-store-schema">
            <div>
              <dt>content</dt>
              <dd>{t('Policy text')}</dd>
            </div>
            <div>
              <dt>metadata</dt>
              <dd>{t('Document context')}</dd>
            </div>
            <div>
              <dt>embedding</dt>
              <dd>{t('pgvector representation')}</dd>
            </div>
          </dl>
        </div>
        <RagImageLink
          media={vectorStore}
          label={t('Open vector store')}
          className="rag-image-panel-vector"
        />
      </section>

      <section className="rag-search-section">
        <RagImageLink
          media={semanticSearch}
          label={t('Open semantic search')}
          className="rag-image-panel-search"
        />
        <div className="rag-search-copy">
          <span className="project-kicker">{t('Semantic Search')}</span>
          <h4>{t('Retrieve by meaning, not only by exact wording')}</h4>
          <p>{semanticSearch.description}</p>
          <p>{t('Keyword matching depends on the same terms appearing in both the question and document. Vector similarity can retrieve related policy content when an employee uses different but semantically similar language.')}</p>
          <div className="rag-context-chain" aria-label={t('Context retrieval sequence')}>
            {[t('Question'), t('Embedding'), t('Relevant documents'), t('Aggregated context')].map(
              (step, index, steps) => (
                <span key={step}>
                  {step}
                  {index < steps.length - 1 ? <ArrowRight size={13} aria-hidden="true" /> : null}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="rag-grounding-section">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Grounded Answers & Missing-Knowledge Fallback')}</span>
          <h4>{t('Retrieved context determines whether the assistant can answer')}</h4>
          <p>{t('The assistant receives only the retrieved demo-policy context. A supported question can produce a grounded response; when the relevant policy is unavailable, the workflow is instructed to say that the information was not found. This reduces unsupported answers without claiming an absolute guarantee against hallucinations.')}</p>
        </div>

        <div className="rag-answer-grid">
          <article className="rag-answer-card is-supported">
            <div className="rag-answer-heading">
              <ShieldCheck size={22} aria-hidden="true" />
              <div>
                <span>{t('Supported question')}</span>
                <h5>{t('Relevant IT policy context found')}</h5>
              </div>
            </div>
            <p>{groundedAnswer.description}</p>
            <RagImageLink media={groundedAnswer} label={t('Open grounded answer')} />
          </article>
          <article className="rag-answer-card is-unknown">
            <div className="rag-answer-heading">
              <FileSearch size={22} aria-hidden="true" />
              <div>
                <span>{t('Unknown question')}</span>
                <h5>{t('Relevant policy unavailable')}</h5>
              </div>
            </div>
            <p>{fallback.description}</p>
            <RagImageLink media={fallback} label={t('Open fallback response')} />
          </article>
        </div>
      </section>

      <section className="rag-demo-section">
        <div>
          <span className="project-kicker">{t('Demo Knowledge Base')}</span>
          <h4>{t('Fictional policies for a transparent portfolio walkthrough')}</h4>
          <p>{t('The examples demonstrate the architecture without exposing real internal company data. They are sample policies, not confidential documents or production deployments.')}</p>
        </div>
        <div className="rag-policy-orbit" aria-label={t('Demo knowledge base documents')}>
          {project.policies.map((policy, index) => (
            <span key={policy}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              {policy}
            </span>
          ))}
        </div>
      </section>

      <section className="rag-scope-grid">
        <div className="rag-scope-card">
          <span className="project-kicker">{t('Prototype Scope')}</span>
          <h4>{t('What the current demo includes and omits')}</h4>
          <RagList items={project.scopeLimitations} />
        </div>
        <div className="rag-scope-card is-evolution">
          <span className="project-kicker">{t('Production Evolution')}</span>
          <h4>{t('Practical next steps')}</h4>
          <RagList items={project.futureImprovements} />
        </div>
      </section>

      <section className="rag-application-grid">
        <div className="rag-application-card">
          <span className="project-kicker">{t('Potential Use Cases')}</span>
          <h4>{t('Where this retrieval pattern could be applied')}</h4>
          <div className="rag-use-case-list">
            {project.useCases.map((useCase) => (
              <span key={useCase}>{useCase}</span>
            ))}
          </div>
        </div>
        <div className="rag-application-card is-security">
          <span className="project-kicker">{t('Security & Privacy')}</span>
          <h4>{t('Demo-safe credentials and content')}</h4>
          <RagList items={project.securityNotes} />
        </div>
      </section>

      <section className="rag-footer-panel">
        <div>
          <span className="project-kicker">{t('Technologies')}</span>
          <h4>{t('Retrieval and grounded-answer stack')}</h4>
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

export default KnowledgeRagCaseStudy;
