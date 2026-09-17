import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../i18n/useLanguage.js';

function About() {
  const { content, t } = useLanguage();
  const { profile } = content;
  return (
    <section className="section" id="about">
      <div className="section-shell about-layout">
        <SectionHeader
          eyebrow={t('About')}
          title={t('Practical automation for real operational work.')}
          description={t('I care about systems that save time, reduce repetitive work, and make information easier to act on.')}
        />

        <div className="about-card reveal">
          <p>{profile.about}</p>
          <div className="about-highlights">
            <span>{t('Automation thinking')}</span>
            <span>{t('Operational workflows')}</span>
            <span>{t('IT problem solving')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
