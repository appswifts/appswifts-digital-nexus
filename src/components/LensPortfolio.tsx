import React, { useState, useEffect } from 'react';
import { Section } from '@/components/ui/Section';
import { LensPortfolioCard, LensPortfolioCardProps } from '@/components/ui/LensPortfolioCard';
import { FilterBar } from '@/components/ui/FilterBar';
import { lensProjects } from '@/data/lens-projects';

// Add CSS for the grid layout
import './portfolio-grid.css';

export const LensPortfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState<LensPortfolioCardProps[]>(lensProjects);
  const [filters, setFilters] = useState({
    search: '',
    country: '',
    category: '',
    year: '',
  });
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Filter and sort projects
  useEffect(() => {
    // First filter the projects
    let filtered = lensProjects.filter((project) => {
      // Search filter (case insensitive)
      const searchMatch = !filters.search ||
        project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase());

      // Country filter
      const countryMatch = !filters.country ||
        project.country.toLowerCase() === filters.country.toLowerCase();

      // Category filter
      const categoryMatch = !filters.category ||
        project.category.toLowerCase().replace(/\\s+/g, '-') === filters.category.toLowerCase();

      // Year filter
      const yearMatch = !filters.year || project.year === filters.year;

      return searchMatch && countryMatch && categoryMatch && yearMatch;
    });
    
    // Then sort the filtered projects
    filtered = [...filtered].sort((a, b) => {
      if (sortOrder === 'newest') {
        return parseInt(b.year) - parseInt(a.year);
      } else {
        return parseInt(a.year) - parseInt(b.year);
      }
    });

    setFilteredProjects(filtered);
  }, [filters, sortOrder]);

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
          Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> of {lensProjects.length} projects
        </p>
        <div className="flex gap-2">
          <button 
            className={`px-3 py-1 rounded border ${sortOrder === 'newest' ? 'bg-primary text-white border-primary' : 'border-gray-200 hover:bg-gray-50'} text-sm transition-colors`}
            onClick={() => setSortOrder('newest')}
          >
            Newest First
          </button>
          <button 
            className={`px-3 py-1 rounded border ${sortOrder === 'oldest' ? 'bg-primary text-white border-primary' : 'border-gray-200 hover:bg-gray-50'} text-sm transition-colors`}
            onClick={() => setSortOrder('oldest')}
          >
            Oldest First
          </button>
        </div>
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
              <LensPortfolioCard {...project} />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default LensPortfolio;
