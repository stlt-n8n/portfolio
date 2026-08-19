import SectionHeader from '../components/SectionHeader.jsx';
import SkillGroup from '../components/SkillGroup.jsx';
import { skillCategories } from '../data/siteContent.js';

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A practical toolkit for automation and IT work."
          description="The categories are separated from the interface, so adding or removing skills later is straightforward."
        />

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <SkillGroup category={category} key={category.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
