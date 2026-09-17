import { ArrowUpRight, Github } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage.js';
import TechIcon from './TechIcon.jsx';

function ProjectCaseStudy({ project }) {
  const { t } = useLanguage();
  const workflowText = project.flow.join(' → ');
  const [workflowImage, outputImage] = project.media;
  const introTechnologies = [
    'n8n',
    'OpenAI API',
    'Google Sheets',
    'AI Agent',
    'Structured Output Parser',
  ];

  return (
    <article className="case-study reveal" id={project.id}>
      <div className="case-study-intro">
        <div className="case-study-copy">
          <span className="project-kicker">{t('Featured case study')}</span>
          <h3>{project.title}</h3>
          <span className="project-status">{project.subtitle}</span>
          <p>{project.description}</p>

          <div className="badge-list" aria-label={t('{title} core technologies', { title: project.title })}>
            {introTechnologies.map((technology) => (
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
              GitHub
            </a>
          </div>
        </div>

        <figure className="case-study-cover">
          <img
            src={project.image}
            alt={t('{title} project cover', { title: project.title })}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
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
          <span className="project-kicker">{t('Real workflow')}</span>
          <h4>{t('n8n workflow architecture')}</h4>
          <p>{workflowText}</p>
        </div>

        <a
          className="case-study-image-link"
          href={workflowImage.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('Open AI Job Match Analyzer workflow screenshot')}
        >
          <img
            src={workflowImage.src}
            alt={t('{title} n8n workflow', { title: project.title })}
            width={workflowImage.width}
            height={workflowImage.height}
            loading="lazy"
            decoding="async"
          />
          <span>
            {t('Open full workflow')}
            <ArrowUpRight size={16} />
          </span>
        </a>
      </section>

      <section className="case-study-block">
        <div className="case-study-block-header">
          <span className="project-kicker">{t('Structured Output')}</span>
          <h4>{t('Google Sheets result')}</h4>
          <p>{project.output}</p>
        </div>

        <a
          className="case-study-image-link case-study-output"
          href={outputImage.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('Open AI Job Match Analyzer Google Sheets output screenshot')}
        >
          <img
            src={outputImage.src}
            alt={t('{title} Google Sheets output', { title: project.title })}
            width={outputImage.width}
            height={outputImage.height}
            loading="lazy"
            decoding="async"
          />
          <span>
            {t('Open full output')}
            <ArrowUpRight size={16} />
          </span>
        </a>
      </section>

      <div className="case-study-footer">
        <div className="badge-list" aria-label={t('{title} technologies', { title: project.title })}>
          {project.technologies.map((technology) => (
            <span className="badge" key={technology}>
              <TechIcon name={technology} />
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCaseStudy;
