import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import { contactLinks, profile } from '../data/siteContent.js';

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-shell contact-layout">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s connect around practical automation work."
          description={profile.availability}
        />

        <div className="contact-list reveal">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.label] || ArrowUpRight;
            const opensInNewTab = true;

            return (
              <a
                className="contact-link"
                href={link.href}
                key={link.label}
                target={opensInNewTab ? '_blank' : undefined}
                rel={opensInNewTab ? 'noopener noreferrer' : undefined}
                aria-label={`${link.label}: ${link.value}. Opens in a new tab.`}
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
