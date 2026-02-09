import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Programs from './components/Programs';
import Strategy from './components/Strategy';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface overflow-x-hidden selection:bg-primary selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Strategy />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}

export default App;