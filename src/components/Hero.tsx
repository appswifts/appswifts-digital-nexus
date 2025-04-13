
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 container-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-freight font-bold leading-tight mb-8">
            Smart Digital <span className="text-primary">Solutions</span> for Rwanda
          </h1>
          <p className="text-xl md:text-2xl text-premium-gray mb-10">
            We create exceptional digital experiences that help Rwandan businesses grow, innovate, and thrive in the digital economy.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn-primary">
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn-outline">
              View Our Work
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-premium-gray mb-1">Trusted by</p>
              <p className="text-xl font-bold">200+ Rwandan Businesses</p>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            <div>
              <p className="text-sm uppercase tracking-wider text-premium-gray mb-1">Experience</p>
              <p className="text-xl font-bold">10+ Years of Excellence</p>
            </div>
          </div>
        </div>
        <div className="relative animate-zoom-in hidden lg:block">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/10 rounded-full"></div>
          <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
              alt="Digital Solutions" 
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <p className="text-sm font-medium">Smart solutions for modern businesses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
