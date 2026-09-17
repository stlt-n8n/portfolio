import SectionHeader from '../components/SectionHeader.jsx';
import SkillGroup from '../components/SkillGroup.jsx';
import { useLanguage } from '../i18n/useLanguage.js';

function Skills() {
  const { content, t } = useLanguage();
  const { skillCategories } = content;
  return (
    <section className="section" id="skills">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t('Skills')}
          title={t('A practical toolkit for automation and IT work.')}
          description={t('Tools and systems I use to build automations, connect business workflows, and solve IT problems.')}
        />

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillGroup category={category} index={index} key={category.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
