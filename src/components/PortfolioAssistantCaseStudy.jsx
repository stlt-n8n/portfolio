import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage.js';
import TechIcon from './TechIcon.jsx';

function Screenshot({ media }) {
  const { t } = useLanguage();

  return (
    <figure className="portfolio-assistant-screenshot">
      <a
        className="case-study-image-link"
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
        <span>{t('Open screenshot')} <ArrowUpRight size={16} /></span>
      </a>
      <figcaption>
        <strong>{media.title}</strong>
        <p>{media.description}</p>
      </figcaption>
    </figure>
  );
}

function PortfolioAssistantCaseStudy({ project }) {
  const { t } = useLanguage();
  const chatMedia = project.media.slice(0, 3);
  const technicalMedia = project.media.slice(3);

  return (
    <article className="case-study portfolio-assistant-case-study reveal" id={project.id}>
      <div className="case-study-intro">
        <div className="case-study-copy">
          <span className="project-kicker">{t('Project 07 · Case Study')}</span>
          <h3>{project.title}</h3>
          <span className="project-status">{project.subtitle}</span>
          <p>{project.description}</p>
          <div className="badge-list" aria-label={t('{title} technologies', { title: project.title })}>
            {project.cardTechnologies.map((technology) => (
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
        <figure className="case-study-cover">
          <img
            src={project.heroImage}
            alt={t('{title} project banner', { title: project.title })}
            width={project.heroImageWidth}
            height={project.heroImageHeight}
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>

      <div className="case-study-split">
        <section className="case-study-note">
          <span>{t('Problem')}</span>
          <p>{project.problem}</p>
        </section>
        <section className="case-study-note is-solution">
          <span>{t('Solution')}</span>
          <p>{project.solution}</p>
        </section>
      </div>

      <section className="case-study-block">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Assistant in action')}</span>
          <h4>{t('Portfolio answers, follow-ups, and lead inquiries')}</h4>
          <p>{t('Real chat examples show the visitor experience; the public site currently displays a demo preview.')}</p>
        </div>
        <div className="portfolio-assistant-chat-grid">
          {chatMedia.map((media) => <Screenshot key={media.src} media={media} />)}
        </div>
      </section>

      <section className="case-study-block">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Architecture')}</span>
          <h4>{t('One entry point, three intent paths')}</h4>
          <p>{project.architecture}</p>
        </div>
        <div className="portfolio-assistant-route-grid">
          {project.intentRoutes.map((route) => (
            <div className="case-study-note" key={route.name}>
              <span>{route.name}</span>
              <p>{route.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="case-study-block">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('RAG & Knowledge Base')}</span>
          <h4>{t('Curated facts before generated answers')}</h4>
          <p>{project.knowledge}</p>
        </div>
        <div className="case-study-split portfolio-assistant-detail-grid">
          <div className="case-study-note">
            <span>{t('Conversation Context')}</span>
            <p>{project.context}</p>
          </div>
          <div className="case-study-note is-solution">
            <span>{t('Lead Qualification')}</span>
            <p>{project.lead}</p>
          </div>
        </div>
      </section>

      <section className="case-study-block">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Workflow Evidence')}</span>
          <h4>{t('The routing and ingestion workflows')}</h4>
          <p>{t('These n8n screenshots document the backend paths behind the chat examples.')}</p>
        </div>
        <div className="portfolio-assistant-workflow-grid">
          {technicalMedia.map((media) => <Screenshot key={media.src} media={media} />)}
        </div>
      </section>

      <section className="case-study-block">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Current MVP Limitations')}</span>
          <h4>{t('What remains before a production rollout')}</h4>
        </div>
        <ul className="portfolio-assistant-limitations">
          {project.scopeLimitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
        </ul>
        <p>{project.nextSteps}</p>
      </section>

      <div className="case-study-footer">
        <span className="project-kicker">{t('Technologies')}</span>
        <div className="badge-list" aria-label={t('{title} technologies', { title: project.title })}>
          {project.technologies.map((technology) => (
            <span className="badge" key={technology}>
              <TechIcon name={technology} />
              {technology}
            </span>
          ))}
        </div>
        <a
          className="button button-secondary"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
          {t('View Repository')}
        </a>
      </div>
    </article>
  );
}

export default PortfolioAssistantCaseStudy;
