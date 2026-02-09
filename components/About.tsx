import React from 'react';
import { Eye, Target } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const About: React.FC = () => {
  return (
    <section className="py-32 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <AnimatedSection direction="right" className="relative order-2 lg:order-1">
             {/* Decorative blob */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADbZf5-_Fk1rAqdBClAiC8B3nuKq4f5pgBDHc4i-ucfewGou1Kc2QvtqtICpdUiI4Ze8CBJ5fIqfpHQNx4gkVRlaK3yRmUJSHdHW0oq-_HBJQ-hORjOYcH1BzvMYDaDQzUkm9ZhIpdfQtCywtcQuzBb5uDIydTvKSMRP6CIMUck9w6RQ-d6xXMEeUcuu9j--bkRF8QY6wCaMQZA_LKVsXEuJyecQWQQBRCCJNEpjgq4HHFLGDpelYQhPqbx9jOElSGuy6FDeOnO5k" 
                alt="Community meeting under a tree" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="font-medium italic">"Community is the root of resilience."</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="order-1 lg:order-2">
            <AnimatedSection direction="up" delay={0.2}>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                Building a more inclusive Rwanda, one family at a time.
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                AbilityLink Impact Hub emerged from the belief that disability should never be a barrier to dignity. We work at the intersection of education, health, and economic empowerment to create ecosystems where every child can thrive.
              </p>

              <div className="space-y-6">
                <div className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Eye className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 font-display">Our Vision</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">A Rwanda where every person with a disability is valued, included, and empowered to reach their full potential.</p>
                  </div>
                </div>

                <div className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Target className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 font-display">Our Mission</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">To provide holistic support to vulnerable families and children through inclusive education, advocacy, and sustainable development.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;