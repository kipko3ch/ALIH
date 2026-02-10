import React from 'react';
import { Lightbulb, Rocket, HandHeart } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Strategy: React.FC = () => {
  return (
    <section className="py-32 bg-secondary text-white relative overflow-hidden clip-path-slant pb-48" id="strategy">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-24">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Strategy</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Our Pathway to Impact</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/30 via-primary/30 to-transparent z-0"></div>

          {/* Step 1 */}
          <AnimatedSection direction="up" delay={0.1} className="relative z-10 text-center group">
            <div className="w-24 h-24 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center mx-auto mb-8 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(19,236,91,0.1)]">
              <Lightbulb className="w-10 h-10 text-primary" />
            </div>
            <h5 className="text-xl font-display font-bold mb-4 text-primary">Identify & Engage</h5>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">Targeting the most vulnerable families and assessing specific needs through community outreach.</p>
          </AnimatedSection>

          {/* Step 2 */}
          <AnimatedSection direction="up" delay={0.3} className="relative z-10 text-center group">
            <div className="w-24 h-24 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center mx-auto mb-8 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(19,236,91,0.1)]">
              <HandHeart className="w-10 h-10 text-primary" />
            </div>
            <h5 className="text-xl font-display font-bold mb-4 text-primary">Holistic Support</h5>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">Providing tailored education plans, healthcare access, and economic tools for parents.</p>
          </AnimatedSection>

          {/* Step 3 */}
          <AnimatedSection direction="up" delay={0.5} className="relative z-10 text-center group">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-[0_0_50px_rgba(19,236,91,0.4)]">
              <Rocket className="w-10 h-10 text-secondary fill-current" />
            </div>
            <h5 className="text-xl font-display font-bold mb-4 text-primary">Long-term Dignity</h5>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">Creating self-sustaining families and fully integrated community members.</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Strategy;