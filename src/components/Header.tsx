import React, { useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLHeaderElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    gsap.fromTo(headerRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 2.2 }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-light text-xl tracking-wider">
            LUXE
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors duration-300">Home</a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-300">About</a>
            <a href="#products" className="text-white hover:text-gray-300 transition-colors duration-300">Products</a>
            <a href="#faq" className="text-white hover:text-gray-300 transition-colors duration-300">FAQ</a>
            <button className="bg-white text-black px-6 py-2 hover:bg-gray-200 transition-colors duration-300">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-gray-300 transition-colors duration-300">Home</a>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-300">About</a>
              <a href="#products" className="text-white hover:text-gray-300 transition-colors duration-300">Products</a>
              <a href="#faq" className="text-white hover:text-gray-300 transition-colors duration-300">FAQ</a>
              <button className="bg-white text-black px-6 py-2 hover:bg-gray-200 transition-colors duration-300 w-fit">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;