import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectGrid from '../components/ProjectGrid.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../i18n/useLanguage.js';

function Projects() {
  const { content, t } = useLanguage();
  const { projects } = content;
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="section section-muted" id="projects">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t('Projects')}
          title={t('Featured projects built around practical workflows.')}
          description={t('A closer look at AI automation projects spanning job analysis, customer support, invoice review, and grounded company knowledge retrieval.')}
        />

        <ProjectGrid projects={featuredProjects} />

        <div className="featured-project-actions reveal">
          <Link className="button button-primary" to="/projects">
            {t('View All Projects')}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
