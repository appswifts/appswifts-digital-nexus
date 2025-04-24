
import React from 'react';
import { Section } from '@/components/ui/Section';
import { AnimatedTestimonialsDemo } from "@/components/ui/demo";

const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="What Our Clients Say"
      description="Hear from businesses across Rwanda about their experience working with APPSWIFTS."
      background="gradient"
    >
      <AnimatedTestimonialsDemo />
    </Section>
  );
};

export default Testimonials;
