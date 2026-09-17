import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import { useLanguage } from '../i18n/useLanguage.js';

const contactIcons = [Github, Linkedin, Mail];

function Contact() {
  const { content, t } = useLanguage();
  const { contactLinks, profile } = content;
  return (
    <section className="section contact-section" id="contact">
      <div className="section-shell contact-layout">
        <SectionHeader
          eyebrow={t('Contact')}
          title={t('Let’s connect around practical automation work.')}
          description={profile.availability}
        />

        <div className="contact-list reveal">
          {contactLinks.map((link, index) => {
            const Icon = contactIcons[index] || ArrowUpRight;
            const opensInNewTab = true;

            return (
              <a
                className="contact-link"
                href={link.href}
                key={link.label}
                target={opensInNewTab ? '_blank' : undefined}
                rel={opensInNewTab ? 'noopener noreferrer' : undefined}
                aria-label={t('{label}: {value}. Opens in a new tab.', { label: link.label, value: link.value })}
              >
                <span className="contact-icon">
                  <Icon size={20} />
                </span>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.value}</small>
                </span>
                <ArrowUpRight size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
