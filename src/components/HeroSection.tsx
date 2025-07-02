import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.5 });

    // Initial setup
    gsap.set([titleRef.current, subtitleRef.current, paragraphRef.current, ctaRef.current], {
      opacity: 0,
      y: 50
    });

    // Hero entrance animation
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(paragraphRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.4");

    // Paragraph word-by-word animation on scroll
    if (paragraphRef.current) {
      const words = paragraphRef.current.textContent?.split(' ') || [];
      paragraphRef.current.innerHTML = words.map(word => 
        `<span class="word opacity-30">${word}</span>`
      ).join(' ');

      const wordElements = paragraphRef.current.querySelectorAll('.word');

      ScrollTrigger.create({
        trigger: paragraphRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(wordElements, {
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
          });
        }
      });
    }

  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-6">
            Crafting Digital
            <br />
            <span className="italic font-normal">Excellence</span>
          </h1>
          
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 mb-8 font-light tracking-wide">
            Where luxury meets innovation
          </p>
          
          <p ref={paragraphRef} className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            We create extraordinary digital experiences that push the boundaries of design and technology. 
            Every pixel is crafted with precision, every interaction designed with purpose.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Explore Our Work
            </button>
            <button className="border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;