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
          description="Tools and systems I use to build automations, connect business workflows, and solve IT problems."
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
