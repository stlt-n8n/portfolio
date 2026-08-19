import { ArrowUpRight, Github, Image } from 'lucide-react';
import TechIcon from './TechIcon.jsx';
import WorkflowDiagram from './WorkflowDiagram.jsx';

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
        <img src={project.image} alt="" loading="lazy" />
        <WorkflowDiagram steps={project.flow} variant={project.variant} />
        <div className="screenshot-label">
          <Image size={16} />
          <span>{project.evidenceLabel}</span>
        </div>
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
              >
                <Github size={18} />
                {project.githubLabel || 'GitHub'}
              </a>
            ) : null}
            {hasCaseStudyLink ? (
              <a className="button button-primary" href={project.caseStudyUrl}>
                View Case Study
                <ArrowUpRight size={18} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
