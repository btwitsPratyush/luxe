import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What makes your design approach unique?",
    answer: "Our design philosophy combines luxury aesthetics with cutting-edge technology. We focus on creating experiences that are not only visually stunning but also functionally superior, ensuring every interaction feels premium and purposeful."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard website typically takes 4-6 weeks, while comprehensive brand identity projects may require 8-12 weeks. We provide detailed timelines during our initial consultation."
  },
  {
    id: 3,
    question: "Do you work with international clients?",
    answer: "Absolutely! We work with clients worldwide and have experience collaborating across different time zones. Our digital-first approach ensures seamless communication regardless of location."
  },
  {
    id: 4,
    question: "What's included in your design packages?",
    answer: "Our packages are tailored to each client's needs but typically include strategy consultation, design concepts, development, testing, and post-launch support. We provide detailed proposals outlining all deliverables."
  },
  {
    id: 5,
    question: "Can you help with ongoing maintenance?",
    answer: "Yes, we offer comprehensive maintenance packages including regular updates, security monitoring, performance optimization, and content management support to keep your digital presence running smoothly."
  }
];

const FAQSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(sectionRef.current?.children, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" }
        );
      }
    });
  }, []);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  useEffect(() => {
    faqs.forEach(faq => {
      const content = document.getElementById(`faq-content-${faq.id}`);
      if (content) {
        if (openFAQ === faq.id) {
          gsap.to(content, {
            height: 'auto',
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut"
          });
        } else {
          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut"
          });
        }
      }
    });
  }, [openFAQ]);

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6">Frequently Asked</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-gray-600 transition-colors duration-300"
              >
                <h3 className="text-lg md:text-xl font-light pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <Minus size={20} className="transition-transform duration-300" />
                  ) : (
                    <Plus size={20} className="transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              <div 
                id={`faq-content-${faq.id}`}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <div className="pb-6 pr-8">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;