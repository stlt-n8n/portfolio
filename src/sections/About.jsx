import SectionHeader from '../components/SectionHeader.jsx';
import { profile } from '../data/siteContent.js';

function About() {
  return (
    <section className="section" id="about">
      <div className="section-shell about-layout">
        <SectionHeader
          eyebrow="About"
          title="Practical automation for real operational work."
          description="I care about systems that save time, reduce repetitive work, and make information easier to act on."
        />

        <div className="about-card reveal">
          <p>{profile.about}</p>
          <div className="about-highlights">
            <span>Automation thinking</span>
            <span>Operational workflows</span>
            <span>IT problem solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
