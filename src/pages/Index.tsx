
import React from 'react';
import { Navbar1 } from '@/components/ui/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BentoGridPortfolio from '@/components/BentoGridPortfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';



const Index = () => {
  return (
    <div className="flex flex-col min-h-screen w-full scroll-pt-16" style={{ scrollPaddingTop: '4rem' }}>
      <Navbar1 />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <div className="space-y-8 md:space-y-0 w-full">
          <Services />
          <BentoGridPortfolio />

          <Testimonials />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
