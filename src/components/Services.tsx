
import React from 'react';
import { Section } from '@/components/ui/Section';
import { SimpleCard } from '@/components/ui/SimpleCard';
import { Code, Smartphone, Palette, BrainCircuit } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites built for performance and user experience.',
    icon: <Code size={24} />
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android.',
    icon: <Smartphone size={24} />
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful interfaces designed for usability and conversion.',
    icon: <Palette size={24} />
  },
  {
    title: 'AI Solutions & Automation',
    description: 'Smart AI-powered solutions to automate and enhance your business processes.',
    icon: <BrainCircuit size={24} />
  }
];

export const Services = () => {
  return (
    <Section
      id="services"
      title="What We Offer"
      subtitle="Our Services"
      description="We offer a range of digital services to help your business grow."
      background="offwhite"
      className="mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <SimpleCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
