
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-premium-charcoal text-white split-background container-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-freight font-bold mb-8 text-white">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to elevate your digital presence? Contact us today to discuss how we can help your business grow in the digital landscape.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call Us</h3>
                  <p className="text-gray-300">+250 788 123 456</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-gray-300">info@appswifts.rw</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-300">Kigali Heights, 3rd Floor<br />Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-premium-charcoal rounded-2xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl font-freight font-bold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex justify-center items-center"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
