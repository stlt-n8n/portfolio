import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechIcon from './TechIcon.jsx';

function ProjectCard({ project, index }) {
  const hasGithubLink = project.githubUrl && project.githubUrl !== '#';
  const hasCaseStudyLink = project.caseStudyUrl && project.caseStudyUrl !== '#';
  const projectNumber = project.displayNumber ?? index + 1;

  return (
    <article
      className="project-card reveal"
      id={project.id}
      style={{ '--reveal-delay': `${index * 90}ms` }}
    >
      <div className={`project-image-wrap project-visual-${project.variant}`}>
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-content">
        <div>
          <span className="project-kicker">Project {String(projectNumber).padStart(2, '0')}</span>
          <h3>{project.title}</h3>
          <span className="project-status">{project.subtitle || 'Workflow case study'}</span>
          <p>{project.description}</p>
        </div>

        <div className="badge-list" aria-label={`${project.title} technologies`}>
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
                aria-label={`Open ${project.title} repository on GitHub`}
              >
                <Github size={18} />
                {project.githubLabel || 'GitHub'}
              </a>
            ) : null}
            {hasCaseStudyLink ? (
              <Link className="button button-primary" to={project.caseStudyUrl}>
                View Case Study
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
