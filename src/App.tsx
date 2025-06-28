import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;