import React from 'react';
import { Mail, MapPin, Phone, Users, Heart, Shield, ArrowRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const ContactPage: React.FC = () => {
    return (
        <div className="pb-12">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full mb-16 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src="/about.png"
                    alt="Our Team & Mission"
                    className="absolute inset-0 w-full h-full object-cover top-0"
                />
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Who We Are</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                        A Dedicated Team Behind Every Impact
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                        We are a passionate group of educators, social workers, advocates, and community leaders creating an inclusive Rwanda.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our People</span>
                        <h2 className="text-3xl font-display font-bold text-slate-900">
                            Meet the Changemakers
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mb-16">
                        <AnimatedSection delay={0.1} direction="up">
                            <div className="bg-surface rounded-3xl p-8 sm:p-10 text-center hover:shadow-lg transition-shadow duration-300 group">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <Users className="w-7 h-7 sm:w-9 sm:h-9 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3">Community Workers</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Our frontline team members embedded in local communities, ensuring every family gets the personalized support they need.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} direction="up">
                            <div className="bg-surface rounded-3xl p-8 sm:p-10 text-center hover:shadow-lg transition-shadow duration-300 group">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <Heart className="w-7 h-7 sm:w-9 sm:h-9 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3">Special Educators</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Trained professionals who develop tailored learning plans and adapt school environments for children with diverse abilities.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3} direction="up">
                            <div className="bg-surface rounded-3xl p-8 sm:p-10 text-center hover:shadow-lg transition-shadow duration-300 group sm:col-span-2 md:col-span-1">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <Shield className="w-7 h-7 sm:w-9 sm:h-9 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-3">Advocacy Leaders</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Policy experts and advocates who work with government and partners to advance disability rights and inclusive policies.</p>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Team Image Grid */}
                    <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                            <img src="/024--.jpg" alt="Children in inclusive classroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                            <img src="/salieu-inclusive-education.png" alt="Student learning in inclusive environment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                            <img src="/high-angle-view-disable-black-260nw-1629745840.jpg" alt="Child with disability in school" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                            <img src="/download.jpeg" alt="Young person from community" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 sm:py-24 bg-surface" id="contact-form">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Contact Us</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                            Let's Make an Impact Together
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                            Whether you want to partner, volunteer, donate, or just learn more — we'd love to hear from you.
                        </p>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            <AnimatedSection delay={0.1} direction="up">
                                <a href="mailto:abilitylinkimpact@gmail.com" className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
                                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                        <Mail size={18} className="text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email Us</p>
                                        <p className="text-sm font-medium text-slate-900 truncate">abilitylinkimpact@gmail.com</p>
                                    </div>
                                </a>
                            </AnimatedSection>

                            <AnimatedSection delay={0.15} direction="up">
                                <a href="tel:+250798555877" className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all group">
                                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                        <Phone size={18} className="text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Call Us</p>
                                        <p className="text-sm font-medium text-slate-900">+250 798 555 877</p>
                                    </div>
                                </a>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2} direction="up">
                                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm">
                                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={18} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Visit Us</p>
                                        <p className="text-sm font-medium text-slate-900">Kabuga, Gako Cell, Rwamagana</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.25} direction="up">
                                <a href="https://wa.me/250798555877" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-[#25D366] rounded-2xl shadow-sm hover:shadow-md transition-all text-white group">
                                    <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-white">
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.8-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.5z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-sm">Chat on WhatsApp</p>
                                        <p className="text-white/80 text-xs">Quick responses</p>
                                    </div>
                                    <ArrowRight size={16} className="ml-auto shrink-0 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </AnimatedSection>
                        </div>

                        {/* Contact Form */}
                        <AnimatedSection delay={0.2} className="lg:col-span-3">
                            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
                                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-2">Send us a Message</h3>
                                <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

                                <form className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3.5 rounded-xl bg-surface focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300 border border-slate-200 focus:border-primary text-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3.5 rounded-xl bg-surface focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300 border border-slate-200 focus:border-primary text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                                        <select className="w-full px-4 py-3.5 rounded-xl bg-surface focus:ring-2 focus:ring-primary outline-none transition-all text-slate-600 cursor-pointer border border-slate-200 focus:border-primary text-sm">
                                            <option>Partnership Inquiry</option>
                                            <option>Volunteering Opportunity</option>
                                            <option>Donation Question</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-3.5 rounded-xl bg-surface focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-300 resize-none border border-slate-200 focus:border-primary text-sm"
                                        ></textarea>
                                    </div>

                                    <button className="w-full bg-primary text-secondary font-bold text-base py-3.5 rounded-xl hover:bg-primary-dark transition-all active:scale-[0.99]">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
