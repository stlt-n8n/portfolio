import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../i18n/useLanguage.js';

function Process() {
  const { content, t } = useLanguage();
  const { processSteps } = content;
  return (
    <section className="section process-section" id="process">
      <div className="section-shell">
        <SectionHeader
          eyebrow={t('Process')}
          title={t('A simple process for useful automation.')}
          description={t('The goal is not to automate everything. The goal is to understand the work, then build the smallest reliable system that improves it.')}
        />

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <article className="process-step reveal" style={{ '--reveal-delay': `${index * 70}ms` }} key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
