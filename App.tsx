import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Programs from './components/Programs';
import Strategy from './components/Strategy';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-surface overflow-x-hidden selection:bg-primary selection:text-secondary">
      <Navbar />
      {currentPage === 'home' ? (
        <main>
          <Hero />
          <Stats />
          <About />
          <Programs />
          <Strategy />
          <GetInvolved />
        </main>
      ) : (
        <main>
          <ContactPage />
        </main>
      )}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;