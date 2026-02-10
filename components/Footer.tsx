import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center mb-6" onClick={() => { window.location.hash = ''; }}>
              <img
                src="/logo.png"
                alt="AbilityLink Impact Hub Logo"
                className="w-14 h-14 rounded-xl object-contain"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Registered NGO in Rwanda dedicated to inclusive education and community empowerment for children with disabilities.
            </p>
          </div>

          <div>
            <h6 className="font-display font-bold text-white mb-6">Navigation</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">Our Programs</a></li>
              <li><a href="#strategy" className="hover:text-primary transition-colors">Our Strategy</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-display font-bold text-white mb-6">Get Involved</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#/contact" className="hover:text-primary transition-colors">Partner With Us</a></li>
              <li><a href="#/contact" className="hover:text-primary transition-colors">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-display font-bold text-white mb-6">Contact</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="mailto:abilitylinkimpact@gmail.com" className="hover:text-primary transition-colors">
                  abilitylinkimpact@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+250798555877" className="hover:text-primary transition-colors">
                  +250 798 555 877
                </a>
              </li>
              <li>
                <a href="https://wa.me/250798555877" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.8-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.5z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="text-slate-500">
                Head Office: Kabuga, Gako Cell, Kicukiro District<br />Community Hub: Rwamagana District, Eastern Province
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 AbilityLink Impact Hub. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-primary transition-colors group"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;