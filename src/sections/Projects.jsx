import ProjectCard from '../components/ProjectCard.jsx';
import OrderPulseBusinessCaseStudy from '../components/OrderPulseBusinessCaseStudy.jsx';
import OrderPulseEmployeeCaseStudy from '../components/OrderPulseEmployeeCaseStudy.jsx';
import ProjectCaseStudy from '../components/ProjectCaseStudy.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/siteContent.js';

function Projects() {
  const compactProjects = projects.filter((project) => !project.featured);
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="section section-muted" id="projects">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work built around practical workflows."
          description="A closer look at automation projects focused on order handling, business analytics, and AI-powered job match analysis."
        />

        <div className="featured-project-stack">
          {featuredProjects.map((project) => {
            if (project.caseStudyType === 'orderpulse-business') {
              return <OrderPulseBusinessCaseStudy project={project} key={project.id} />;
            }

            if (project.caseStudyType === 'orderpulse-employee') {
              return <OrderPulseEmployeeCaseStudy project={project} key={project.id} />;
            }

            return <ProjectCaseStudy project={project} key={project.id} />;
          })}
        </div>

        {compactProjects.length > 0 ? (
          <div className="project-grid compact-project-grid">
            {compactProjects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.title} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Projects;
