import {
  ArrowRight,
  ArrowUpRight,
  Database,
  FileSearch,
  Github,
  Network,
  ShieldCheck,
} from 'lucide-react';
import TechIcon from './TechIcon.jsx';

function mediaByTitle(project, title) {
  return project.media.find((item) => item.title === title);
}

function RagImageLink({ media, label, className = '' }) {
  return (
    <a
      className={`rag-image-panel ${className}`}
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
  const workflow = mediaByTitle(project, 'RAG Architecture');
  const vectorStore = mediaByTitle(project, 'Supabase Vector Store');
  const semanticSearch = mediaByTitle(project, 'Semantic Search');
  const groundedAnswer = mediaByTitle(project, 'Grounded Answer');
  const fallback = mediaByTitle(project, 'Missing-Knowledge Fallback');

  return (
    <article className="case-study rag-case-study reveal" id={project.id}>
      <div className="rag-case-intro">
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

        <div className="rag-hero-visuals">
          <figure className="rag-banner-card">
            <img
              src={project.image}
              alt={`${project.title} project banner`}
              width={project.imageWidth}
              height={project.imageHeight}
              loading="eager"
              decoding="async"
            />
          </figure>
          <div className="rag-system-summary" aria-label="RAG system structure">
            <span>Knowledge ingestion</span>
            <ArrowRight size={15} aria-hidden="true" />
            <span>Vector retrieval</span>
            <ArrowRight size={15} aria-hidden="true" />
            <span>Grounded answer</span>
          </div>
        </div>
      </div>

      <section className="rag-problem-band">
        <div>
          <span className="project-kicker">Business Problem</span>
          <h4>Internal knowledge is useful only when people can find it</h4>
          <p>{project.problem}</p>
        </div>
        <div className="rag-retrieval-principle">
          <FileSearch size={26} aria-hidden="true" />
          <span>Retrieval principle</span>
          <p>Find company-specific context before asking the model to answer.</p>
        </div>
        <div>
          <span className="project-kicker">Solution</span>
          <h4>A searchable policy assistant, not a generic chatbot</h4>
          <p>{project.solution}</p>
        </div>
      </section>

      <section className="rag-architecture-section">
        <div className="case-study-block-header">
          <span className="project-kicker">RAG Architecture</span>
          <h4>Two separate paths share one knowledge layer</h4>
          <p>{workflow.description}</p>
        </div>

        <div className="rag-path-grid">
          <ArchitecturePath
            eyebrow="Path 01"
            title="Knowledge Ingestion"
            steps={project.ingestionFlow}
            icon={Database}
            accent="is-ingestion"
          />
          <ArchitecturePath
            eyebrow="Path 02"
            title="Question Answering"
            steps={project.answeringFlow}
            icon={Network}
            accent="is-answering"
          />
        </div>

        <RagImageLink media={workflow} label="Open workflow" className="rag-image-panel-workflow" />
      </section>

      <section className="rag-ingestion-section">
        <div className="rag-ingestion-copy">
          <span className="project-kicker">Knowledge Ingestion</span>
          <h4>Policies are prepared once, then stored for later retrieval</h4>
          <p>
            The demo ingestion path is started manually. Each fictional policy is loaded, converted
            into an OpenAI embedding, and stored in Supabase. Ingestion does not run again for every
            employee question, and the current project does not synchronize documents automatically.
          </p>
          <div className="rag-policy-grid" aria-label="Fictional demo policies">
            {project.policies.map((policy) => (
              <span key={policy}>{policy}</span>
            ))}
          </div>
        </div>
        <div className="rag-vector-store-copy">
          <span className="project-kicker">Supabase Vector Store</span>
          <h4>Content, metadata, and vector embeddings</h4>
          <p>{vectorStore.description}</p>
          <dl className="rag-store-schema">
            <div>
              <dt>content</dt>
              <dd>Policy text</dd>
            </div>
            <div>
              <dt>metadata</dt>
              <dd>Document context</dd>
            </div>
            <div>
              <dt>embedding</dt>
              <dd>pgvector representation</dd>
            </div>
          </dl>
        </div>
        <RagImageLink
          media={vectorStore}
          label="Open vector store"
          className="rag-image-panel-vector"
        />
      </section>

      <section className="rag-search-section">
        <RagImageLink
          media={semanticSearch}
          label="Open semantic search"
          className="rag-image-panel-search"
        />
        <div className="rag-search-copy">
          <span className="project-kicker">Semantic Search</span>
          <h4>Retrieve by meaning, not only by exact wording</h4>
          <p>{semanticSearch.description}</p>
          <p>
            Keyword matching depends on the same terms appearing in both the question and document.
            Vector similarity can retrieve related policy content when an employee uses different but
            semantically similar language.
          </p>
          <div className="rag-context-chain" aria-label="Context retrieval sequence">
            {['Question', 'Embedding', 'Relevant documents', 'Aggregated context'].map(
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
          <span className="project-kicker">Grounded Answers & Missing-Knowledge Fallback</span>
          <h4>Retrieved context determines whether the assistant can answer</h4>
          <p>
            The assistant receives only the retrieved demo-policy context. A supported question can
            produce a grounded response; when the relevant policy is unavailable, the workflow is
            instructed to say that the information was not found. This reduces unsupported answers
            without claiming an absolute guarantee against hallucinations.
          </p>
        </div>

        <div className="rag-answer-grid">
          <article className="rag-answer-card is-supported">
            <div className="rag-answer-heading">
              <ShieldCheck size={22} aria-hidden="true" />
              <div>
                <span>Supported question</span>
                <h5>Relevant IT policy context found</h5>
              </div>
            </div>
            <p>{groundedAnswer.description}</p>
            <RagImageLink media={groundedAnswer} label="Open grounded answer" />
          </article>
          <article className="rag-answer-card is-unknown">
            <div className="rag-answer-heading">
              <FileSearch size={22} aria-hidden="true" />
              <div>
                <span>Unknown question</span>
                <h5>Relevant policy unavailable</h5>
              </div>
            </div>
            <p>{fallback.description}</p>
            <RagImageLink media={fallback} label="Open fallback response" />
          </article>
        </div>
      </section>

      <section className="rag-demo-section">
        <div>
          <span className="project-kicker">Demo Knowledge Base</span>
          <h4>Fictional policies for a transparent portfolio walkthrough</h4>
          <p>
            The examples demonstrate the architecture without exposing real internal company data.
            They are sample policies, not confidential documents or production deployments.
          </p>
        </div>
        <div className="rag-policy-orbit" aria-label="Demo knowledge base documents">
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
          <span className="project-kicker">Prototype Scope</span>
          <h4>What the current demo includes and omits</h4>
          <RagList items={project.scopeLimitations} />
        </div>
        <div className="rag-scope-card is-evolution">
          <span className="project-kicker">Production Evolution</span>
          <h4>Practical next steps</h4>
          <RagList items={project.futureImprovements} />
        </div>
      </section>

      <section className="rag-application-grid">
        <div className="rag-application-card">
          <span className="project-kicker">Potential Use Cases</span>
          <h4>Where this retrieval pattern could be applied</h4>
          <div className="rag-use-case-list">
            {project.useCases.map((useCase) => (
              <span key={useCase}>{useCase}</span>
            ))}
          </div>
        </div>
        <div className="rag-application-card is-security">
          <span className="project-kicker">Security & Privacy</span>
          <h4>Demo-safe credentials and content</h4>
          <RagList items={project.securityNotes} />
        </div>
      </section>

      <section className="rag-footer-panel">
        <div>
          <span className="project-kicker">Technologies</span>
          <h4>Retrieval and grounded-answer stack</h4>
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

export default KnowledgeRagCaseStudy;
