import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import OrderPulseBusinessCaseStudy from '../components/OrderPulseBusinessCaseStudy.jsx';
import OrderPulseEmployeeCaseStudy from '../components/OrderPulseEmployeeCaseStudy.jsx';
import ProjectCaseStudy from '../components/ProjectCaseStudy.jsx';
import { projects } from '../data/siteContent.js';

function ProjectCaseStudyContent({ project }) {
  if (project.caseStudyType === 'orderpulse-business') {
    return <OrderPulseBusinessCaseStudy project={project} />;
  }

  if (project.caseStudyType === 'orderpulse-employee') {
    return <OrderPulseEmployeeCaseStudy project={project} />;
  }

  return <ProjectCaseStudy project={project} />;
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Vladyslav Lukianov`;
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main>
      <section className="section project-page-section">
        <div className="section-shell">
          <div className="project-page-actions">
            <Link className="button button-secondary" to="/projects">
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>
          <ProjectCaseStudyContent project={project} />
        </div>
      </section>
    </main>
  );
}

export default ProjectPage;
