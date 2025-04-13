
import React from 'react';
import { Code, Globe, PenTool, Bot, Server, ShoppingBag, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn("premium-card group premium-hover border border-gray-100", className)}>
      <div className="mb-8 text-primary group-hover:text-accent transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-gt mb-4">{title}</h3>
      <p className="text-premium-gray mb-8 font-actief">{description}</p>
      <a 
        href={`#${title.toLowerCase().replace(/\s+/g, '-')}`} 
        className="inline-flex items-center font-bold text-primary group-hover:text-accent transition-colors duration-300"
      >
        Learn More <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={52} />,
      title: "Website & Software Development",
      description: "Custom websites and software solutions tailored to your business needs with modern technology stack."
    },
    {
      icon: <PenTool size={52} />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive traffic, generate leads and increase your brand visibility."
    },
    {
      icon: <PenTool size={52} />,
      title: "Branding & Design",
      description: "Create a powerful brand identity with professional logo design, visual elements, and brand guidelines."
    },
    {
      icon: <Bot size={52} />,
      title: "AI Solutions & Automation",
      description: "Implement cutting-edge AI technology to automate processes and enhance customer experiences."
    },
    {
      icon: <Server size={52} />,
      title: "Domain & Hosting",
      description: "Secure your online presence with reliable domain registration and high-performance hosting services."
    },
    {
      icon: <ShoppingBag size={52} />,
      title: "Software Marketplace",
      description: "Access a curated collection of premium software solutions designed for Rwandan businesses."
    }
  ];

  return (
    <section id="services" className="py-24 bg-premium-offwhite container-padding">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-heading">Our Premium Services</h2>
          <p className="section-subheading">
            We deliver high-quality digital solutions that help Rwandan businesses establish a strong online presence and achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
