import { ArrowDown, Mail } from 'lucide-react';
import { profile } from '../data/siteContent.js';
import RevealOnScroll from '../components/RevealOnScroll.jsx';

function Hero() {
  return (
    <section className="hero section" id="top">
      <RevealOnScroll />
      <div className="hero-grid">
        <div className="hero-copy reveal is-visible">
          <span className="eyebrow">Personal Portfolio</span>
          <h1>{profile.title}</h1>
          <p>{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects
              <ArrowDown size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
              <Mail size={18} />
            </a>
          </div>
          <div className="hero-focus-list" aria-label="Portfolio focus">
            <span>AI workflows</span>
            <span>Business automation</span>
            <span>IT systems</span>
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
            <span className="signal-line signal-line-one" />
            <span className="signal-line signal-line-two" />
            <span className="signal-node node-ai">AI</span>
            <span className="signal-node node-api">API</span>
            <span className="signal-node node-flow">FLOW</span>
            <span className="signal-node node-it">IT</span>
          </div>
          <div className="panel-metrics">
            <div>
              <strong>AI</strong>
              <span>Practical systems</span>
            </div>
            <div>
              <strong>Ops</strong>
              <span>Clean workflows</span>
            </div>
            <div>
              <strong>IT</strong>
              <span>Reliable support</span>
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
