
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { FooterColumn } from '@/components/ui/FooterColumn';

const services = [
  { name: 'Website Development', href: '#' },
  { name: 'Digital Marketing', href: '#' },
  { name: 'Branding & Design', href: '#' },
  { name: 'AI Solutions', href: '#' },
  { name: 'Domain & Hosting', href: '#' },
  { name: 'Software Marketplace', href: '#' },
];

const quickLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Contact Us', href: '#contact' },
];

const socialLinks = [
  { icon: <Facebook size={20} />, href: '#' },
  { icon: <Twitter size={20} />, href: '#' },
  { icon: <Instagram size={20} />, href: '#' },
  { icon: <Linkedin size={20} />, href: '#' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-premium-charcoal text-white pt-24 md:pt-32 pb-12 flex justify-center w-full">
      <div className="container mx-auto px-8 md:px-16 w-full max-w-screen-xl">
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
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-premium-charcoal border border-gray-700 hover:bg-primary hover:border-primary p-2 rounded-full transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services">
            <ul className="space-y-5 font-actief">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-400 hover:text-primary transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Quick Links">
            <ul className="space-y-5 font-actief">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Newsletter">
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
          </FooterColumn>
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
