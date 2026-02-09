import React from 'react';
import { School, Users, HeartPulse, Globe } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const programs = [
  {
    icon: School,
    title: "Inclusive Education",
    desc: "Adapting school environments and training teachers to ensure every child has access to quality learning."
  },
  {
    icon: Users,
    title: "Family Empowerment",
    desc: "Providing vocational training and micro-loans to caregivers to build resilient households."
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    desc: "Facilitating access to rehabilitation, therapy, and basic healthcare for children with special needs."
  },
  {
    icon: Globe,
    title: "Community Inclusion",
    desc: "Reducing stigma through awareness campaigns and local policy advocacy at the district level."
  }
];

const Programs: React.FC = () => {
  return (
    <section className="py-24 bg-white relative" id="programs">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 skew-x-12 transform origin-top-right"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Focus Areas</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Empowerment Through Action</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className="h-full">
              <div className="group h-full p-8 bg-surface rounded-3xl border border-slate-100 hover:border-primary/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 text-slate-700">
                  <program.icon size={28} />
                </div>
                <h4 className="text-xl font-bold font-display mb-4 text-slate-900">{program.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                  {program.desc}
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Learn more
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;