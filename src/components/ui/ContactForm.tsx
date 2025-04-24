import React from 'react';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  return (
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
  );
};
