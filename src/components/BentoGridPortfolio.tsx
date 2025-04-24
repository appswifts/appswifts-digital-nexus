import React from 'react';
import { Section } from '@/components/ui/Section';
import { SimpleBentoGrid, SimpleBentoCard } from '@/components/ui/simple-bento-grid';
import { MobileAppCard } from '@/components/ui/mobile-app-card';
import { VideoBackgroundCard } from '@/components/ui/video-background-card';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  link: string;
  className: string;
  category?: string;
  type?: 'default' | 'mobile-app' | 'video-background';
  videoUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Kigali Tourism Portal",
    description: "A comprehensive tourism portal for Kigali City, showcasing attractions, accommodations, and experiences.",
    image: "https://images.unsplash.com/photo-1612869538502-9a1d196a0e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-4",
    category: "Web Development",
    type: "video-background",
    videoUrl: "https://cdn.dribbble.com/userupload/16663918/file/original-3964a33253910865be7106957020f28f.mp4",
  },
  {
    title: "E-commerce Platform",
    description: "An e-commerce platform for fresh produce delivery in Nairobi.",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    category: "E-commerce",
  },
  {
    title: "Transit App",
    description: "A mobile application for navigating public transportation in Kampala.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    category: "Mobile App",
    type: "mobile-app",
    videoUrl: "https://cdn.dribbble.com/userupload/16663918/file/original-3964a33253910865be7106957020f28f.mp4",
  },
  {
    title: "Wildlife Conservation",
    description: "A digital platform for Tanzania's wildlife conservation efforts.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    category: "Web Development",
  },
  {
    title: "Fashion Brand Identity",
    description: "Complete brand identity design for a premium fashion label based in Kigali.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    category: "Branding",
  },
];

export const BentoGridPortfolio = () => {
  return (
    <Section
      id="portfolio"
      title="Our Work"
      subtitle="Portfolio"
      description="Explore our diverse range of projects across East Africa."
      background="dark"
    >
      <SimpleBentoGrid className="lg:grid-rows-3">
        {portfolioItems.map((item, index) => {
          if (item.type === "mobile-app") {
            return (
              <MobileAppCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                className={item.className}
                category={item.category}
                videoUrl={item.videoUrl || ""}
              />
            );
          } else if (item.type === "video-background") {
            return (
              <VideoBackgroundCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                className={item.className}
                category={item.category}
                videoUrl={item.videoUrl || ""}
              />
            );
          } else {
            return (
              <SimpleBentoCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                className={item.className}
                category={item.category}
              />
            );
          }
        })}
      </SimpleBentoGrid>
    </Section>
  );
};

export default BentoGridPortfolio;
