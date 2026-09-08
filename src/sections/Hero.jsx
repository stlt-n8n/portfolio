import { ArrowDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/siteContent.js';

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-grid">
        <div className="hero-copy reveal is-visible">
          <div className="hero-identity">
            <span className="eyebrow">Portfolio</span>
            <span className="hero-role">{profile.name}</span>
          </div>
          <h1>{profile.title}</h1>
          <p>{profile.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              View Projects
              <ArrowDown size={18} />
            </Link>
            <Link className="button button-secondary" to="/#contact">
              Contact Me
              <Mail size={18} />
            </Link>
          </div>
        </div>

        <div className="hero-panel reveal is-visible" aria-label="Portfolio focus areas">
          <div className="panel-topline">
            <span>
              <span className="status-dot" />
              Automation Stack
            </span>
            <span>2026</span>
          </div>
          <div className="signal-map">
            <span className="signal-core">
              <strong>Build</strong>
              <small>automate / connect / support</small>
            </span>
            <span className="signal-ring signal-ring-one" />
            <span className="signal-ring signal-ring-two" />
            <span className="signal-line signal-line-one" />
            <span className="signal-line signal-line-two" />
            <span className="signal-node node-ai">AI</span>
            <span className="signal-node node-api">API</span>
            <span className="signal-node node-flow">FLOW</span>
            <span className="signal-node node-it">IT</span>
          </div>
          <div className="panel-metrics">
            <div>
              <strong>01</strong>
              <span>Map the workflow</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Build the automation</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Make it usable</span>
            </div>
          </div>
          <div className="panel-console" aria-label="Automation process preview">
            <span>Manual task</span>
            <span>Workflow</span>
            <span>Insight</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
