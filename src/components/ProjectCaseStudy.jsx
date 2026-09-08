import { ArrowUpRight, Github } from 'lucide-react';
import TechIcon from './TechIcon.jsx';

function ProjectCaseStudy({ project }) {
  const workflowText = project.flow.join(' → ');
  const workflowImage = project.media.find((item) => item.title === 'Workflow');
  const outputImage = project.media.find((item) => item.title === 'Structured Output');
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
          <span className="project-kicker">Featured case study</span>
          <h3>{project.title}</h3>
          <span className="project-status">{project.subtitle}</span>
          <p>{project.description}</p>

          <div className="badge-list" aria-label={`${project.title} core technologies`}>
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
              aria-label={`Open ${project.title} repository on GitHub`}
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

        <figure className="case-study-cover">
          <img
            src={project.image}
            alt={`${project.title} project cover`}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <div className="case-study-split">
        <section className="case-study-note">
          <span>Problem</span>
          <p>{project.problem}</p>
        </section>
        <section className="case-study-note is-solution">
          <span>Solution</span>
          <p>{project.solution}</p>
        </section>
      </div>

      <section className="case-study-block">
        <div className="case-study-block-header">
          <span className="project-kicker">Real workflow</span>
          <h4>n8n workflow architecture</h4>
          <p>{workflowText}</p>
        </div>

        <a
          className="case-study-image-link"
          href={workflowImage.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open AI Job Match Analyzer workflow screenshot"
        >
          <img
            src={workflowImage.src}
            alt={`${project.title} n8n workflow`}
            width={workflowImage.width}
            height={workflowImage.height}
            loading="lazy"
            decoding="async"
          />
          <span>
            Open full workflow
            <ArrowUpRight size={16} />
          </span>
        </a>
      </section>

      <section className="case-study-block">
        <div className="case-study-block-header">
          <span className="project-kicker">Structured Output</span>
          <h4>Google Sheets result</h4>
          <p>{project.output}</p>
        </div>

        <a
          className="case-study-image-link case-study-output"
          href={outputImage.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open AI Job Match Analyzer Google Sheets output screenshot"
        >
          <img
            src={outputImage.src}
            alt={`${project.title} Google Sheets output`}
            width={outputImage.width}
            height={outputImage.height}
            loading="lazy"
            decoding="async"
          />
          <span>
            Open full output
            <ArrowUpRight size={16} />
          </span>
        </a>
      </section>

      <div className="case-study-footer">
        <div className="badge-list" aria-label={`${project.title} technologies`}>
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
