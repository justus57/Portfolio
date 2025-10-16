import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SortAsc, Building, Code, Smartphone, Zap, Users } from 'lucide-react';

const FilterBar = ({ 
  activeFilter, 
  onFilterChange, 
  activeIndustry, 
  onIndustryChange, 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange 
}) => {
  
  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'fintech', label: 'FinTech', icon: Building },
    { id: 'enterprise', label: 'Enterprise', icon: Code },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'startup', label: 'Startups', icon: Zap }
  ];

  const industries = [
    { id: 'all', label: 'All Industries', icon: Users },
    { id: 'financial', label: 'Financial Services', icon: Building },
    { id: 'banking', label: 'Banking', icon: Building },
    { id: 'payments', label: 'Payments', icon: Code },
    { id: 'technology', label: 'Technology', icon: Code }
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent' },
    { id: 'rating', label: 'Highest Rated' },
    { id: 'alphabetical', label: 'Alphabetical' },
    { id: 'impact', label: 'Impact Metrics' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-8">

      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search testimonials, clients, or technologies..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-colors"
          />
        </div>

        {/* Filter Buttons */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 mb-3">Project Type</h3>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              const isActive = activeFilter === filter.id;
              
              return (
                <motion.button
                  key={filter.id}
                  onClick={() => onFilterChange(filter.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white border border-blue-500'
                      : 'bg-slate-700/50 text-slate-300 border border-slate-600 hover:bg-slate-700 hover:text-white hover:border-slate-500'
                  }`}>
                  <IconComponent size={16} />
                  <span>{filter.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Industry Filter */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 mb-3">Industry</h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              const isActive = activeIndustry === industry.id;
              
              return (
                <motion.button
                  key={industry.id}
                  onClick={() => onIndustryChange(industry.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-600 text-white border border-purple-500'
                      : 'bg-slate-700/50 text-slate-300 border border-slate-600 hover:bg-slate-700 hover:text-white hover:border-slate-500'
                  }`}>
                  <IconComponent size={16} />
                  <span>{industry.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-400 mb-3">Sort By</h3>
            <div className="flex items-center space-x-2">
              <SortAsc size={16} className="text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="text-right">
            <h3 className="text-sm font-semibold text-slate-400 mb-1">Quick Stats</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div>
                <span className="text-blue-400 font-semibold">5.0</span>
                <span className="text-slate-400 ml-1">Avg Rating</span>
              </div>
              <div>
                <span className="text-green-400 font-semibold">15+</span>
                <span className="text-slate-400 ml-1">Banking Clients</span>
              </div>
              <div>
                <span className="text-purple-400 font-semibold">50M+</span>
                <span className="text-slate-400 ml-1">Transactions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(activeFilter !== 'all' || activeIndustry !== 'all' || searchTerm) && (
          <div className="border-t border-slate-600 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-400">Active filters:</span>
                <div className="flex items-center space-x-2">
                  {activeFilter !== 'all' && (
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded border border-blue-500/30">
                      Type: {filters.find(f => f.id === activeFilter)?.label}
                    </span>
                  )}
                  {activeIndustry !== 'all' && (
                    <span className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded border border-purple-500/30">
                      Industry: {industries.find(i => i.id === activeIndustry)?.label}
                    </span>
                  )}
                  {searchTerm && (
                    <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded border border-green-500/30">
                      Search: "{searchTerm}"
                    </span>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => {
                  onFilterChange('all');
                  onIndustryChange('all');
                  onSearchChange('');
                  onSortChange('recent');
                }}
                className="text-sm text-slate-400 hover:text-white transition-colors">
                Clear all
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FilterBar;