import { useEffect } from 'react';
import ProjectGrid from '../components/ProjectGrid.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/siteContent.js';

function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | Vladyslav Lukianov';
  }, []);

  return (
    <main>
      <section className="section section-muted projects-page-section">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work built around practical workflows."
            description="Automation projects spanning invoice review, customer support, order operations, business analytics, and AI-powered job match analysis."
          />
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
