import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../i18n/useLanguage.js';

function CurrentlyBuilding() {
  const { content, t } = useLanguage();
  const { currentlyBuilding } = content;
  return (
    <section className="section current-section" id="current">
      <div className="section-shell current-layout">
        <SectionHeader
          eyebrow={t('Currently Building')}
          title={t('Turning project work into clearer proof.')}
          description={t('The portfolio is set up for real screenshots, workflow decisions, and stronger project documentation as the work develops.')}
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
