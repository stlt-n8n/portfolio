import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/useLanguage.js';
import TechIcon from './TechIcon.jsx';

function ProjectCard({ project, index }) {
  const { t } = useLanguage();
  const hasGithubLink = project.githubUrl && project.githubUrl !== '#';
  const hasCaseStudyLink = project.caseStudyUrl && project.caseStudyUrl !== '#';
  const projectNumber = index + 1;

  return (
    <article
      className="project-card reveal"
      id={project.id}
      style={{ '--reveal-delay': `${index * 90}ms` }}
    >
      <div className={`project-image-wrap project-visual-${project.variant}`}>
        <img
          src={project.image}
          alt={t('{title} project preview', { title: project.title })}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-content">
        <div>
          <span className="project-kicker">{t('Project')} {String(projectNumber).padStart(2, '0')}</span>
          <h3>{project.title}</h3>
          <span className="project-status">{project.subtitle || t('Workflow case study')}</span>
          <p>{project.description}</p>
        </div>

        <div className="badge-list" aria-label={t('{title} technologies', { title: project.title })}>
          {project.technologies.map((technology) => (
            <span className="badge" key={technology}>
              <TechIcon name={technology} />
              {technology}
            </span>
          ))}
        </div>

        {hasGithubLink || hasCaseStudyLink ? (
          <div className="project-actions">
            {hasGithubLink ? (
              <a
                className="button button-secondary"
                href={project.githubUrl}
                target={project.githubUrl.startsWith('http') ? '_blank' : undefined}
                rel={project.githubUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={t('Open {title} repository on GitHub', { title: project.title })}
              >
                <Github size={18} />
                {project.githubLabel || 'GitHub'}
              </a>
            ) : null}
            {hasCaseStudyLink ? (
              <Link className="button button-primary" to={project.caseStudyUrl}>
                {t('View Case Study')}
                <ArrowUpRight size={18} />
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
