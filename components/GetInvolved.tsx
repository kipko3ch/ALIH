import React from 'react';
import { Handshake, HeartHandshake, Briefcase, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const opportunities = [
  {
    icon: Handshake,
    title: "Partnerships",
    desc: "Join forces with us as a corporate partner, NGO, or donor to scale our impact in inclusive education across Rwanda.",
    cta: "Partner with us"
  },
  {
    icon: HeartHandshake,
    title: "Volunteering",
    desc: "Offer your skills locally or remotely. From teaching support to admin assistance, every hour matters to our families.",
    cta: "Join the team"
  },
  {
    icon: Briefcase,
    title: "Careers",
    desc: "Looking for a purpose-driven career? Explore professional roles in special education, advocacy, and social work.",
    cta: "Get in touch"
  }
];

const GetInvolved: React.FC = () => {
  return (
    <section className="relative pt-0 pb-24" id="contact">
      {/* Engagement Cards (Overlapping previous section) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-20 mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.2} direction="up">
              <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col items-start group">
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                  <item.icon className="text-slate-900 group-hover:text-white" size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{item.desc}</p>
                <a href="#/contact" className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  {item.cta} <ArrowRight size={18} />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="bg-surface rounded-[3rem] overflow-hidden p-8 md:p-12 lg:p-20 shadow-sm border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: CTA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Ready to Make a Difference?</h2>
              <p className="text-slate-600 mb-10 text-lg">
                Whether you want to partner, volunteer, or support our programs — we'd love to connect with you. Reach out and let's create lasting change together.
              </p>

              <div className="space-y-6 mb-10">
                <a href="mailto:abilitylinkimpact@gmail.com" className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-medium text-slate-900">abilitylinkimpact@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+250798555877" className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-lg font-medium text-slate-900">+250 798 555 877</p>
                  </div>
                </a>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-lg font-medium text-slate-900">Head Office — Kabuga, Gako Cell, Kicukiro District</p>
                    <p className="text-sm text-slate-500 mt-1">Main Community Hub, Rwamagana District, Eastern Province</p>
                  </div>
                </div>
              </div>

              <a
                href="#/contact"
                className="inline-flex items-center gap-3 bg-primary text-secondary font-bold text-lg py-4 px-8 rounded-2xl hover:bg-primary-dark transition-all active:scale-[0.99]"
              >
                Get in Touch
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Right: Image */}
            <div className="flex flex-col gap-6">
              <div className="relative rounded-3xl overflow-hidden flex-1">
                <img
                  className="w-full h-full object-cover"
                  src="/salieu-inclusive-education.png"
                  alt="Inclusive education in action"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden h-48">
                <img
                  className="w-full h-full object-cover"
                  src="/high-angle-view-disable-black-260nw-1629745840.jpg"
                  alt="Child with disability in classroom"
                />
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GetInvolved;