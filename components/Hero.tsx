import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image scale in
      gsap.from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      });

      // Text stagger up
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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH7DE7YBFUeo65Ez0ze6eVztljsKAHmG2x08x7c7UjLFXN6Ot1iI1z7FyOIUJJVfjj4aCad5rHDfkdSDBVoxtavJd4zyKK88AHkqDQOov9UcVDyeVk4h_zqTkLTGK6Pw8-iDjRdurr4rKHhhvd16wa9IC9n3PWozQnBa1mcZm8ZJ9wY_2TNs-b4aEwmHsSR3X71p5paNK2cDTbmz5v5N6gcjaDcLoS5MY3WjUSEXCtuTItKG-H59t0NzSFS_c3uWt1cb0UoRkU3E8"
          alt="Rwandan hills and children walking"
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
            <button className="group bg-primary hover:bg-white text-secondary px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(19,236,91,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)]">
              Support Our Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-white text-secondary flex items-center justify-center">
                <Play className="w-3 h-3 ml-0.5 fill-current" />
              </div>
              Watch Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <ArrowRight className="w-6 h-6 rotate-90" />
      </div>
    </header>
  );
};

export default Hero;