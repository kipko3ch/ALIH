import React from 'react';
import { HeartHandshake, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="AbilityLink Impact Hub Logo"
                className="w-14 h-14 rounded-xl object-contain"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Registered NGO in Rwanda dedicated to inclusive education and community empowerment for children with disabilities.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-secondary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h6 className="font-display font-bold text-white mb-6">Navigation</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              {['About Us', 'Our Projects', 'Impact Stories', 'Donate'].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-display font-bold text-white mb-6">Get Involved</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Volunteer', 'Careers', 'Sponsorship', 'Transparency'].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-display font-bold text-white mb-6">Legal</h6>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Safeguarding Policy'].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
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