import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import Client from './sections/Clients.jsx';

import WorkExperience from './sections/Experience.jsx';
import { Projector } from 'three-stdlib';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
};

export default App;
