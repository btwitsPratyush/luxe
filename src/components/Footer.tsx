import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-6 tracking-wider">LUXE</h3>
            <p className="text-gray-400 leading-relaxed">
              Crafting exceptional digital experiences that push the boundaries of design and technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Web Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Brand Identity</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Digital Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail size={16} className="mr-3" />
                <span>hello@luxestudio.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-3" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Luxe Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;