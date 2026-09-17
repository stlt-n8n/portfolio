import { useEffect } from 'react';
import About from '../sections/About.jsx';
import Contact from '../sections/Contact.jsx';
import CurrentlyBuilding from '../sections/CurrentlyBuilding.jsx';
import Hero from '../sections/Hero.jsx';
import Process from '../sections/Process.jsx';
import Projects from '../sections/Projects.jsx';
import Skills from '../sections/Skills.jsx';
import { useLanguage } from '../i18n/useLanguage.js';

function HomePage() {
  const { language, t } = useLanguage();
  useEffect(() => {
    document.title = t('Vladyslav Lukianov — AI Automation & IT Specialist');
  }, [language, t]);

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Process />
      <Skills />
      <CurrentlyBuilding />
      <Contact />
    </main>
  );
}

export default HomePage;
