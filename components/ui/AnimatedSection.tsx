import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up',
  id
}) => {
  const el = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = el.current;
    if (!element) return;

    let fromVars: gsap.TweenVars = {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: delay
    };

    if (direction === 'up') fromVars.y = 50;
    if (direction === 'left') fromVars.x = -50;
    if (direction === 'right') fromVars.x = 50;
    
    gsap.fromTo(element, 
      fromVars,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [direction, delay]);

  return (
    <div ref={el} className={className} id={id}>
      {children}
    </div>
  );
};

export default AnimatedSection;