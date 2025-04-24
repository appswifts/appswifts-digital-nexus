import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';

interface FilterBarProps {
  onFilterChange: (filters: {
    search: string;
    country: string;
    category: string;
    year: string;
  }) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: '',
    country: '',
    category: '',
    year: '',
  });

  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const countries = [
    { value: '', label: 'All Countries' },
    { value: 'rwanda', label: 'Rwanda' },
    { value: 'kenya', label: 'Kenya' },
    { value: 'uganda', label: 'Uganda' },
    { value: 'tanzania', label: 'Tanzania' },
  ];

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'branding', label: 'Branding' },
    { value: 'ecommerce', label: 'E-commerce' },
  ];

  const years = [
    { value: '', label: 'All Years' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
  ];

  return (
    <div className="w-full mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="relative w-full md:w-auto flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            name="search"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>
        
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors md:w-auto w-full justify-center"
        >
          <Filter size={20} />
          <span>Filters</span>
          <span className="bg-primary text-white text-xs rounded-full px-2 py-1 ml-2">
            {Object.values(filters).filter(val => val !== '').length}
          </span>
        </button>
      </div>
      
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100 mb-8 animate-in fade-in duration-300">
          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <select
              name="country"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={filters.country}
              onChange={handleFilterChange}
            >
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={filters.category}
              onChange={handleFilterChange}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Year</label>
            <select
              name="year"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={filters.year}
              onChange={handleFilterChange}
            >
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
