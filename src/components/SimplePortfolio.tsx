import React from 'react';
import { Section } from '@/components/ui/Section';

export const SimplePortfolio = () => {
  return (
    <Section
      id="portfolio"
      title="Our Work"
      subtitle="Portfolio"
      description="Explore our diverse range of projects across East Africa."
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1612869538502-9a1d196a0e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Kigali Tourism Portal"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Kigali Tourism Portal</h3>
            <p className="text-gray-600 mb-4">A comprehensive tourism portal for Kigali City, showcasing attractions, accommodations, and experiences.</p>
            <a 
              href="#" 
              className="text-primary font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="E-commerce Platform"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
            <p className="text-gray-600 mb-4">An e-commerce platform for fresh produce delivery in Nairobi.</p>
            <a 
              href="#" 
              className="text-primary font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Transit App"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Transit App</h3>
            <p className="text-gray-600 mb-4">A mobile application for navigating public transportation in Kampala.</p>
            <a 
              href="#" 
              className="text-primary font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SimplePortfolio;
