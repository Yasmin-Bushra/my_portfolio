import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import SelectedWork from './sections/SelectedWork';
import Skills from './sections/Skills';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light',
  );

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  return (
    <div id="top" data-theme={theme} className="portfolio-shell relative min-h-screen overflow-hidden bg-[#FFF8F0] text-[#282329]">
      <div aria-hidden="true" className="portfolio-glow pointer-events-none absolute inset-0" />
      <div className="relative z-10">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  );
}
