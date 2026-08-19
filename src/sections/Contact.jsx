import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import { contactLinks } from '../data/siteContent.js';

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
          title="Open to roles, collaborations, and automation projects."
          description="Replace the placeholders below with your real profiles when you are ready."
        />

        <div className="contact-list reveal">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.label] || ArrowUpRight;

            return (
              <a className="contact-link" href={link.href} key={link.label}>
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
