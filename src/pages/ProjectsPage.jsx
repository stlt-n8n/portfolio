import { useEffect } from 'react';
import ProjectGrid from '../components/ProjectGrid.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../i18n/useLanguage.js';

function ProjectsPage() {
  const { content, language, t } = useLanguage();
  const { projects } = content;
  useEffect(() => {
    document.title = t('Projects | Vladyslav Lukianov');
  }, [language, t]);

  return (
    <main>
      <section className="section section-muted projects-page-section">
        <div className="section-shell">
          <SectionHeader
            eyebrow={t('Projects')}
            title={t('Selected work built around practical workflows.')}
            description={t('Automation projects spanning company knowledge retrieval, invoice review, customer support, order operations, business analytics, and AI-powered job analysis.')}
          />
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
