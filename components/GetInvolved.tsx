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
    cta: "View Openings"
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
                <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  {item.cta} <ArrowRight size={18} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="bg-surface rounded-[3rem] overflow-hidden p-8 md:p-12 lg:p-20 shadow-sm border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-10 text-lg">Have questions about our programs or want to support our work? Send us a message.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all text-slate-600 cursor-pointer appearance-none">
                    <option>Partnership Inquiry</option>
                    <option>Volunteering Opportunity</option>
                    <option>Donation Question</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-primary text-secondary font-bold text-lg py-4 rounded-2xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 active:scale-[0.99]">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Info & Map */}
            <div className="flex flex-col gap-10">
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-medium text-slate-900">contact@abilitylink.rw</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-lg font-medium text-slate-900">Main Community Hub,<br />Rwamagana District, Eastern Province</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-lg font-medium text-slate-900">+250 788 000 000</p>
                  </div>
                </div>
              </div>

              {/* Styled Map Image */}
              <div className="relative rounded-3xl overflow-hidden h-64 shadow-lg mt-auto group">
                <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7-9vdB4d8g1mwsiPW1MSB4xQVjVMFlICT0l6qC6ii9uCr-YQWl0RLtNk2OWjQrAII4V1PQkDC2CIhdlWlqCrOjp8CHYwjQtAywR11XDdFKVfT8iBErkr8J18c64id1WR0_FL2Kg6Gl8caixl8gQJTWALP-2asUGDGZvcYLtovUGt2uL4_lw1o2yYDy4XaKQcy6dABbH0DGy7vofxkm2hkG2R958AXo3ziryzsev_CvaerbPrBYobw2AsNXCL54HcISrtOMX5jFvw"
                  alt="Map of Eastern Province"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
                  📍 Eastern Province Hub
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GetInvolved;