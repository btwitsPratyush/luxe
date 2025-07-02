import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Ethereal Web Platform",
    description: "A revolutionary e-commerce platform that redefines online shopping with immersive 3D product visualization and AI-powered recommendations.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Quantum Mobile App",
    description: "Next-generation mobile application featuring advanced biometric security and seamless cross-platform synchronization.",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Mobile Development"
  },
  {
    id: 3,
    title: "Nexus Brand Identity",
    description: "Complete brand transformation including logo design, visual identity system, and comprehensive brand guidelines.",
    image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Brand Design"
  }
];

const ProductSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(sectionRef.current?.children, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
      }
    });
  }, []);

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProduct();
    }
    if (isRightSwipe) {
      prevProduct();
    }
  };

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest projects that showcase innovation and exceptional craftsmanship
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-3">
                <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
                <h3 className="text-2xl font-light">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View with Slider */}
        <div className="lg:hidden">
          <div 
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentProduct * 100}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-4">
                    <div className="relative overflow-hidden mb-6">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="space-y-3 text-center">
                      <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
                      <h3 className="text-2xl font-light">{product.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevProduct}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextProduct}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProduct(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProduct ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;