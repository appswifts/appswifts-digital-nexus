
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 container-padding bg-premium-offwhite">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <span className="inline-block mb-6 text-sm font-bold tracking-widest uppercase text-accent">Premium Digital Agency</span>
            <h1 className="text-[64px] md:text-[80px] lg:text-[96px] font-gt leading-[1.1] mb-10">
              Smart Digital <br /><span className="text-primary">Solutions</span> for Rwanda
            </h1>
            <p className="text-xl md:text-2xl text-premium-gray mb-12 font-actief leading-relaxed max-w-xl">
              We create exceptional digital experiences that help Rwandan businesses grow, innovate, and thrive in the digital economy.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#services" className="btn-primary">
                Explore Services <ArrowRight size={20} className="ml-1" />
              </a>
              <a href="#portfolio" className="btn-outline">
                View Our Work
              </a>
            </div>
            <div className="mt-16 flex flex-wrap items-center gap-12">
              <div>
                <p className="text-sm uppercase tracking-wider text-premium-gray mb-2 font-actief">Trusted by</p>
                <p className="text-2xl font-gt">200+ Rwandan Businesses</p>
              </div>
              <div className="h-16 w-px bg-gray-300 hidden sm:block"></div>
              <div>
                <p className="text-sm uppercase tracking-wider text-premium-gray mb-2 font-actief">Experience</p>
                <p className="text-2xl font-gt">10+ Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="relative animate-zoom-in hidden lg:block">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 rounded-full"></div>
            <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Digital Solutions" 
                className="rounded-2xl w-full h-full object-cover"
              />
              <div className="absolute bottom-12 left-12 right-12 bg-white/80 backdrop-blur-md p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <p className="text-lg font-medium font-actief">Smart solutions for modern businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
