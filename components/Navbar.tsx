import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Programs', href: '#programs' },
  { label: 'Get Involved', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center group cursor-pointer">
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
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-slate-600' : 'text-slate-200'
                  }`}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-primary hover:bg-primary-dark text-secondary px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-primary/30 active:scale-95">
              Support Our Work
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 py-4 px-6 md:hidden shadow-xl flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 font-medium py-2 block hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="w-full bg-primary text-secondary px-6 py-3 rounded-xl font-bold text-sm">
            Support Our Work
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;