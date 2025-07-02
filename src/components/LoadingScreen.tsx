import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 300);
      }
    });

    // Initial setup
    gsap.set([logoRef.current, progressRef.current], { opacity: 0, y: 30 });

    // Animation sequence
    tl.to([logoRef.current, progressRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    })
    .to(progressRef.current?.querySelector('.progress-bar'), {
      width: '100%',
      duration: 1.2,
      ease: "power2.inOut"
    }, "-=0.3")
    .to([logoRef.current, progressRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.inOut"
    }, "+=0.3")
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut"
    }, "-=0.2");

  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <div ref={logoRef} className="mb-8">
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-wider">
            LUXE
          </h1>
          <p className="text-gray-400 text-sm tracking-[0.3em] mt-2">STUDIO</p>
        </div>
        
        <div ref={progressRef} className="w-64 mx-auto">
          <div className="h-px bg-gray-800 relative overflow-hidden">
            <div className="progress-bar h-full bg-white absolute left-0 top-0 w-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;