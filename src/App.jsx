import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div class="bg-[#f6f6f8] dark:bg-[#0a0a0f] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Header />
      <main class="pt-20">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;