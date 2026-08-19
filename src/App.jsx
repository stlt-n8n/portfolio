import Header from './components/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
