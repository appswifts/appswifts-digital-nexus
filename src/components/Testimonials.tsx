
import React from 'react';
import { Quote } from 'lucide-react';
import { AnimatedTestimonialsDemo } from "@/components/ui/demo";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-r from-primary/10 to-accent/10 container-padding">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-subheading">
            Hear from businesses across Rwanda about their experience working with APPSWIFTS.
          </p>
        </div>
        
        <AnimatedTestimonialsDemo />
      </div>
    </section>
  );
};

export default Testimonials;
