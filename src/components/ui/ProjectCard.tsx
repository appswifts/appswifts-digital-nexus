import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  country: string;
  year: string;
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  country,
  year,
  link,
}) => {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden rounded-xl border border-gray-100 flex flex-col h-full hover:border-primary/20">
      <figure className="w-full h-48 md:h-56 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/80 text-white backdrop-blur-sm">
            {category}
          </span>
        </div>
      </figure>
      <div className="card-body p-5 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
              {country}
            </span>
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
              {year}
            </span>
          </div>
          <h3 className="card-title text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{description}</p>
        </div>
        <div className="card-actions justify-end mt-auto">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              View Project <ExternalLink size={16} />
            </a>
          ) : (
            <button className="btn bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors">
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
