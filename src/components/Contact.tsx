
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-premium-charcoal text-white split-background container-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-gt mb-10 text-white leading-tight">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 font-actief leading-relaxed">
              Ready to elevate your digital presence? Contact us today to discuss how we can help your business grow in the digital landscape.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary rounded-full p-4 text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-gt mb-2">Call Us</h3>
                  <p className="text-gray-300 font-actief">+250 788 123 456</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-primary rounded-full p-4 text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-gt mb-2">Email Us</h3>
                  <p className="text-gray-300 font-actief">info@appswifts.rw</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-primary rounded-full p-4 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-gt mb-2">Visit Us</h3>
                  <p className="text-gray-300 font-actief">Kigali Heights, 3rd Floor<br />Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-premium-charcoal rounded-3xl shadow-xl p-10 md:p-12">
            <h3 className="text-3xl font-gt mb-8">Send Us a Message</h3>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 font-actief">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-actief"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 font-actief">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-actief"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 font-actief">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-actief"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 font-actief">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-actief"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex justify-center items-center"
              >
                Send Message <Send size={20} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
