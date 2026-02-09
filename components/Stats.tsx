import React from 'react';
import AnimatedSection from './ui/AnimatedSection';

const stats = [
  { value: "500+", label: "Families Supported" },
  { value: "12", label: "Inclusive Schools" },
  { value: "2.5k", label: "Lives Impacted" },
  { value: "15+", label: "Local Partners" },
];

const Stats: React.FC = () => {
  return (
    <section className="relative -mt-24 z-30 px-6 max-w-7xl mx-auto" id="impact">
      <AnimatedSection className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 md:p-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center pt-8 md:pt-0 ${index % 2 === 0 ? '' : 'pl-0'}`}>
              <div className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Stats;