
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kigali Tech Hub",
    category: "Website",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Modern website for Rwanda's leading tech innovation center"
  },
  {
    id: 2,
    title: "Rwanda Tourism App",
    category: "Software",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    description: "Mobile application showcasing Rwanda's beautiful destinations"
  },
  {
    id: 3,
    title: "Akagera Logistics",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Complete rebrand for Rwanda's fastest growing logistics company"
  },
  {
    id: 4,
    title: "RwandAI Assistant",
    category: "AI",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "AI-powered virtual assistant for customer support"
  },
  {
    id: 5,
    title: "Rwandan Coffee Exports",
    category: "Marketing",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    description: "Digital marketing campaign for premium coffee exporters"
  },
  {
    id: 6,
    title: "Kinyarwanda Learning Platform",
    category: "Software",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    description: "Interactive language learning platform for Kinyarwanda"
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", "Website", "Software", "Branding", "Marketing", "AI"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-premium-charcoal text-white container-padding">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-heading text-white">Our Portfolio</h2>
          <p className="section-subheading text-gray-300">
            Explore our collection of successful projects delivered to businesses across Rwanda and beyond.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 font-actief",
                filter === category
                  ? "bg-primary text-white"
                  : "bg-premium-charcoal text-gray-300 border border-gray-700 hover:border-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl premium-hover"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <span className="text-primary text-sm font-bold uppercase tracking-wider font-actief">
                  {project.category}
                </span>
                <h3 className="text-3xl font-gt mt-2">{project.title}</h3>
                <p className="text-gray-300 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-actief">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
