
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "py-4 bg-white/90 backdrop-blur-md shadow-md" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-monument text-premium-charcoal">
            APP<span className="text-primary">SWIFTS</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-gtamerica font-medium hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="font-gtamerica font-medium hover:text-primary transition-colors">Portfolio</a>
          <a href="#testimonials" className="font-gtamerica font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="#blog" className="font-gtamerica font-medium hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="btn-primary">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-premium-charcoal focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed top-[72px] left-0 w-full h-screen bg-white shadow-lg transition-transform duration-300 transform",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-8">
          <a href="#services" className="text-xl font-gtamerica font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Services</a>
          <a href="#portfolio" className="text-xl font-gtamerica font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Portfolio</a>
          <a href="#testimonials" className="text-xl font-gtamerica font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Testimonials</a>
          <a href="#blog" className="text-xl font-gtamerica font-medium hover:text-primary transition-colors" onClick={toggleMenu}>Blog</a>
          <a href="#contact" className="btn-primary w-full text-center" onClick={toggleMenu}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
