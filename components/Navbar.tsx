import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Our Strategy', href: '#strategy' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleHashChange = () => {
      setIsContactPage(window.location.hash === '#/contact');
    };

    handleHashChange();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // On the contact page, always show the dark/solid navbar
  const showSolidNav = isScrolled || isContactPage;

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (window.location.hash === '#/contact' && href.startsWith('#') && href !== '#/contact') {
      window.location.hash = '';
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${showSolidNav
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group cursor-pointer"
            onClick={() => { window.location.hash = ''; }}
          >
            <img
              src="/logo.png"
              alt="AbilityLink Impact Hub Logo"
              className="w-12 h-12 rounded-xl object-contain transform group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${showSolidNav ? 'text-slate-600' : 'text-slate-200'
                  }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#/contact"
              className="bg-primary hover:bg-primary-dark text-secondary px-6 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95"
            >
              Get Involved
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${showSolidNav ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 py-4 px-6 md:hidden shadow-xl flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 font-medium py-2 block hover:text-primary"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#/contact"
            className="w-full bg-primary text-secondary px-6 py-3 rounded-xl font-bold text-sm text-center block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Involved
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;