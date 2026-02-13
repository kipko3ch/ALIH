import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      });

      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={containerRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10" />
        <img
          ref={imageRef}
          className="w-full h-full object-cover"
          src="/024--.jpg"
          alt="Children in inclusive classroom in Rwanda"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 lg:pt-40">
        <div ref={textRef} className="max-w-3xl">

          <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Linking Ability, <br />
            <span className="text-primary italic">Dignity</span>, & Opportunity
          </h1>

          <p className="hero-text text-xl text-slate-200 mb-12 leading-relaxed max-w-2xl font-light">
            Empowering children with disabilities and vulnerable families through inclusive education and sustainable community-led initiatives in the heart of Rwanda.
          </p>

          <div className="hero-text flex flex-col sm:flex-row gap-5">
            <a
              href="#/contact"
              className="group bg-primary hover:bg-white text-secondary px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300"
            >
              Support Our Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>


    </header>
  );
};

export default Hero;