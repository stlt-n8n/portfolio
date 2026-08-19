import SectionHeader from '../components/SectionHeader.jsx';
import { currentlyBuilding } from '../data/siteContent.js';

function CurrentlyBuilding() {
  return (
    <section className="section current-section" id="current">
      <div className="section-shell current-layout">
        <SectionHeader
          eyebrow="Currently Building"
          title="Turning project work into clearer proof."
          description="The portfolio is set up for real screenshots, workflow decisions, and stronger project documentation as the work develops."
        />

        <div className="current-list reveal">
          {currentlyBuilding.map((item, index) => (
            <div className="current-item" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentlyBuilding;
