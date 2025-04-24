import React, { useState, useEffect } from 'react';

export const Navbar1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to detect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className={`${isScrolled ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300' : 'bg-white shadow-sm'} w-full transition-all duration-300`}>
      <div className="container-padding flex items-center justify-between h-16 max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <span className="text-xl font-gt font-bold text-premium-charcoal">AppSwifts</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-premium-charcoal hover:text-primary transition-colors duration-300">Home</a>
          <a href="#services" className="text-premium-charcoal hover:text-primary transition-colors duration-300">Services</a>
          <a href="#portfolio" className="text-premium-charcoal hover:text-primary transition-colors duration-300">Portfolio</a>
          <a href="#contact" className="text-premium-charcoal hover:text-primary transition-colors duration-300">Contact</a>
        </div>
        <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2 px-4 shadow-lg">
          <div className="flex flex-col space-y-3 py-3">
            <a href="#" className="text-premium-charcoal hover:text-primary transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-100">Home</a>
            <a href="#services" className="text-premium-charcoal hover:text-primary transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-100">Services</a>
            <a href="#portfolio" className="text-premium-charcoal hover:text-primary transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-100">Portfolio</a>
            <a href="#contact" className="text-premium-charcoal hover:text-primary transition-colors duration-300 py-2 px-3 rounded-md hover:bg-gray-100">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;