import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import SelectedWork from './sections/SelectedWork';
import Skills from './sections/Skills';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#F3F0E8] text-[#20211F]">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
