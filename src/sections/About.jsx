import SectionHeader from '../components/SectionHeader.jsx';
import { profile } from '../data/siteContent.js';

function About() {
  return (
    <section className="section" id="about">
      <div className="section-shell about-layout">
        <SectionHeader
          eyebrow="About"
          title="Focused on useful automation, clear systems, and reliable execution."
          description="This area is intentionally easy to edit when you want to add your experience, certifications, or preferred industries."
        />

        <div className="about-card reveal">
          <p>{profile.about}</p>
          <div className="about-highlights">
            <span>AI workflows</span>
            <span>Business processes</span>
            <span>IT problem solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
