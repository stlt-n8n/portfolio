import ProjectCard from './ProjectCard.jsx';

function ProjectGrid({ projects, className = '' }) {
  return (
    <div className={`project-grid ${className}`.trim()}>
      {projects.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.slug} />
      ))}
    </div>
  );
}

export default ProjectGrid;
