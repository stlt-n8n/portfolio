import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage.js';
import TechIcon from './TechIcon.jsx';

function ShowcaseScreenshot({ media, t }) {
  return (
    <figure className="showcase-screenshot">
      <a className="case-study-image-link" href={media.src} target="_blank" rel="noopener noreferrer" aria-label={t('Open {title} screenshot', { title: media.title })}>
        <img src={media.src} alt={media.description} width={media.width} height={media.height} loading="lazy" decoding="async" />
        <span>{t('Open screenshot')} <ArrowUpRight size={16} /></span>
      </a>
      <figcaption><strong>{media.title}</strong><p>{media.description}</p></figcaption>
    </figure>
  );
}

function ShowcaseCaseStudy({ project, number }) {
  const { t } = useLanguage();
  return (
    <article className="case-study showcase-case-study reveal" id={project.id}>
      <div className="case-study-intro">
        <div className="case-study-copy">
          <span className="project-kicker">{t('Project')} {String(number).padStart(2, '0')} · {t('Case Study')}</span>
          <h1>{project.title}</h1>
          <span className="project-status">{project.subtitle}</span>
          <p>{project.description}</p>
          <div className="badge-list" aria-label={t('{title} technologies', { title: project.title })}>
            {project.technologies.map((technology) => <span className="badge" key={technology}><TechIcon name={technology} />{technology}</span>)}
          </div>
          <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={t('Open {title} repository on GitHub', { title: project.title })}><Github size={18} />{t('View on GitHub')}</a>
        </div>
        <figure className="case-study-cover">
          <img src={project.image} alt={t('{title} project banner', { title: project.title })} width={project.imageWidth} height={project.imageHeight} loading="eager" decoding="async" />
        </figure>
      </div>
      <div className="case-study-split">
        <section className="case-study-note"><h2>{t('Problem')}</h2><p>{project.problem}</p></section>
        <section className="case-study-note is-solution"><h2>{t('Solution')}</h2><p>{project.solution}</p></section>
      </div>
      {project.sections.map((section) => (
        <section className="case-study-block" key={section.id}>
          <div className="case-study-block-header"><span className="project-kicker">{section.eyebrow}</span><h2>{section.title}</h2></div>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.flow && <ol className="showcase-flow">{section.flow.map((step) => <li key={step}>{step}</li>)}</ol>}
          {section.items && <ul className="showcase-detail-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          {section.media && <div className={`showcase-media-grid${section.portrait ? ' is-portrait' : ''}${section.media.length === 1 ? ' is-single' : ''}`}>{section.media.map((media) => <ShowcaseScreenshot key={media.src} media={media} t={t} />)}</div>}
        </section>
      ))}
      <div className="case-study-footer">
        {project.scopeNote && <p><small>{project.scopeNote}</small></p>}
        <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={18} />{t('View on GitHub')}</a>
      </div>
    </article>
  );
}

export default ShowcaseCaseStudy;
