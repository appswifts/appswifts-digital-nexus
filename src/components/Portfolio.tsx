
import React, { useState, useEffect } from 'react';
import { Section } from '@/components/ui/Section';
import { ProjectCard, ProjectCardProps } from '@/components/ui/ProjectCard';
import { FilterBar } from '@/components/ui/FilterBar';
import { projects } from '@/data/projects';
import Masonry from 'react-masonry-css';

// Add CSS for Masonry layout
import './masonry.css';

export const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState<ProjectCardProps[]>(projects);
  const [filters, setFilters] = useState({
    search: '',
    country: '',
    category: '',
    year: '',
  });

  // Breakpoints for the masonry layout
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  useEffect(() => {
    const filtered = projects.filter((project) => {
      // Search filter (case insensitive)
      const searchMatch = !filters.search ||
        project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase());

      // Country filter
      const countryMatch = !filters.country ||
        project.country.toLowerCase() === filters.country.toLowerCase();

      // Category filter
      const categoryMatch = !filters.category ||
        project.category.toLowerCase().replace(/\s+/g, '-') === filters.category.toLowerCase();

      // Year filter
      const yearMatch = !filters.year || project.year === filters.year;

      return searchMatch && countryMatch && categoryMatch && yearMatch;
    });

    setFilteredProjects(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <Section
      id="portfolio"
      title="Recent Work"
      subtitle="Our Portfolio"
      description="Explore our diverse range of projects across East Africa. Filter by country, category, or year to find specific work examples."
      background="white"
    >
      <FilterBar onFilterChange={handleFilterChange} />

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> of {projects.length} projects
        </p>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold mb-2">No projects found</h3>
          <p className="text-gray-600">Try adjusting your filters to see more results.</p>
        </div>
      ) : (
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Portfolio;
