import { ArrowUpRight, Github } from 'lucide-react';

function ProjectCard({ project, index }) {
  return (
    <article className="project-card reveal">
      <div className="project-image-wrap">
        <img src={project.image} alt="" loading="lazy" />
      </div>

      <div className="project-content">
        <div>
          <span className="project-kicker">Project {String(index + 1).padStart(2, '0')}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="badge-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <span className="badge" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a className="button button-secondary" href={project.githubUrl}>
            <Github size={18} />
            GitHub
          </a>
          <a className="button button-primary" href={project.caseStudyUrl}>
            View Case Study
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
