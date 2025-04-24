import React from 'react';
import { Section } from '@/components/ui/Section';

// Temporarily commented out for debugging
/*const portfolioItems = [
  {
    Icon: GlobeIcon,
    name: "Kigali Tourism Portal",
    description: "A comprehensive tourism portal for Kigali City, showcasing attractions, accommodations, and experiences.",
    href: "https://example.com/kigali-tourism",
    cta: "View Project",
    background: (
      <img
        src="https://images.unsplash.com/photo-1612869538502-9a1d196a0e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Kigali Tourism Portal"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
    ),
    className: "md:col-span-2 lg:row-span-2",
  },
  {
    Icon: ShoppingCartIcon,
    name: "E-commerce Platform",
    description: "An e-commerce platform for fresh produce delivery in Nairobi.",
    href: "https://example.com/nairobi-fresh",
    cta: "View Project",
    background: (
      <img
        src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="E-commerce Platform"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
    ),
    className: "md:col-span-1",
  },
  {
    Icon: MobileIcon,
    name: "Transit App",
    description: "A mobile application for navigating public transportation in Kampala.",
    href: "https://example.com/kampala-transit",
    cta: "View Project",
    background: (
      <img
        src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Transit App"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
    ),
    className: "md:col-span-1",
  },
  {
    Icon: CodeIcon,
    name: "Wildlife Conservation",
    description: "A digital platform for Tanzania's wildlife conservation efforts.",
    href: "https://example.com/tanzania-wildlife",
    cta: "View Project",
    background: (
      <img
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Wildlife Conservation"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
    ),
    className: "md:col-span-1 lg:col-span-2",
  },
  {
    Icon: PaletteIcon,
    name: "Fashion Brand Identity",
    description: "Complete brand identity design for a premium fashion label based in Kigali.",
    href: "https://example.com/kigali-fashion",
    cta: "View Project",
    background: (
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Fashion Brand Identity"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
    ),
    className: "md:col-span-1",
  },
];*/

export const BentoPortfolio = () => {
  return (
    <Section
      id="portfolio"
      title="Our Work"
      subtitle="Portfolio"
      description="Explore our diverse range of projects across East Africa."
      background="white"
    >
      <div className="p-8 bg-gray-100 rounded-lg">
        <p>Simple portfolio section for debugging</p>
      </div>
    </Section>
  );
};

export default BentoPortfolio;
