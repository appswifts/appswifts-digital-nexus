
import React from 'react';
import { Section } from '@/components/ui/Section';
import { SimpleCard } from '@/components/ui/SimpleCard';
import { Code, Smartphone, Palette, BrainCircuit } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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
      <div className="w-full relative px-4 md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/3">
                <SimpleCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className="h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="relative inset-auto h-10 w-10" />
            <CarouselNext className="relative inset-auto h-10 w-10" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
};

export default Services;
