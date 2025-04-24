
import React from 'react';
import { ContactInfo } from '@/components/ui/ContactInfo';
import { ContactForm } from '@/components/ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-premium-charcoal text-white split-background container-padding flex justify-center w-full">
      <div className="container mx-auto w-full max-w-screen-xl">
        <div className="text-center mb-16">
          <div className="section-title mb-4 inline-flex items-center group bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent border-white/5 text-gray-300">
            Get in Touch <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
          <h2 className="text-white mb-6">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-actief leading-relaxed">
            Ready to elevate your digital presence? Contact us today to discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <ContactInfo />
          </div>

          <div className="bg-white text-premium-charcoal rounded-3xl shadow-xl p-10 md:p-12">
            <h3 className="mb-8">Send Us a <span className="text-primary">Message</span></h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
