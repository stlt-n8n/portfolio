import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/siteContent.js';

function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work prepared for case studies."
          description="Each card is ready for real project details, links, screenshots, and results once you want to expand it."
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
