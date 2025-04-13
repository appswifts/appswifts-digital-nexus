
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-premium-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <a href="/" className="inline-block mb-8">
              <span className="text-3xl font-monument tracking-tight text-white">
                APP<span className="text-primary">SWIFTS</span>
              </span>
            </a>
            <p className="text-gray-400 mb-8 font-actief leading-relaxed">
              Premium digital solutions for businesses in Rwanda and across East Africa. Innovation, quality, and results-driven strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-premium-charcoal border border-gray-700 hover:bg-primary hover:border-primary p-2 rounded-full transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-premium-charcoal border border-gray-700 hover:bg-primary hover:border-primary p-2 rounded-full transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-premium-charcoal border border-gray-700 hover:bg-primary hover:border-primary p-2 rounded-full transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-premium-charcoal border border-gray-700 hover:bg-primary hover:border-primary p-2 rounded-full transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-2xl font-gt mb-8">Services</h4>
            <ul className="space-y-5 font-actief">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Branding & Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Domain & Hosting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Software Marketplace</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-gt mb-8">Quick Links</h4>
            <ul className="space-y-5 font-actief">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-gt mb-8">Newsletter</h4>
            <p className="text-gray-400 mb-6 font-actief">
              Subscribe to our newsletter to receive the latest updates and digital insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-premium-charcoal text-white px-4 py-3 rounded-l-lg border border-gray-700 focus:outline-none focus:border-primary w-full font-actief"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white px-4 rounded-r-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 font-actief">
            &copy; {new Date().getFullYear()} APPSWIFTS. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors font-actief">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors font-actief">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="bg-premium-charcoal border border-gray-700 hover:bg-primary hover:border-primary p-3 rounded-full transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
