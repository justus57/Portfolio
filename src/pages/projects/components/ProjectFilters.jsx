import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, X, ChevronDown, Users, Clock, 
  Star, Code, Building, Target, TrendingUp, Award,
  SlidersHorizontal, RotateCcw, GitCompare
} from 'lucide-react';

const ProjectFilters = ({
  filters,
  onFiltersChange,
  onClearFilters,
  projectCount,
  isCompareMode,
  onToggleCompareMode,
  compareCount
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState(filters.search);

  const technologyOptions = [
    'C#', '.NET Core', 'React', 'Angular', 'React Native', 'TypeScript',
    'SQL Server', 'PostgreSQL', 'Redis', 'Azure', 'Entity Framework',
    'SignalR', 'Machine Learning', 'Power BI', 'Firebase'
  ];

  const industryOptions = [
    { value: 'fintech', label: 'FinTech', icon: TrendingUp, color: 'text-blue-400' },
    { value: 'banking', label: 'Banking', icon: Building, color: 'text-green-400' },
    { value: 'payments', label: 'Payments', icon: Target, color: 'text-purple-400' },
    { value: 'regulatory', label: 'Regulatory', icon: Award, color: 'text-orange-400' }
  ];

  const complexityOptions = [
    { value: 'simple', label: 'Simple', color: 'text-green-400' },
    { value: 'complex', label: 'Complex', color: 'text-yellow-400' },
    { value: 'enterprise', label: 'Enterprise', color: 'text-red-400' }
  ];

  const statusOptions = [
    { value: 'completed', label: 'Completed', color: 'text-green-400' },
    { value: 'in-progress', label: 'In Progress', color: 'text-blue-400' },
    { value: 'planned', label: 'Planned', color: 'text-yellow-400' }
  ];

  const ratingOptions = [
    { value: '5', label: '5 Stars Only' },
    { value: '4+', label: '4+ Stars' },
    { value: '3+', label: '3+ Stars' }
  ];

  const handleFilterChange = (key, value) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onFiltersChange({ ...filters, search: value });
  };

  const hasActiveFilters = Object.values(filters).some(filter => 
    filter !== '' && filter !== 'all'
  );

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={20} className="text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Project Filters</h3>
          </div>
          <div className="text-sm text-slate-400">
            {projectCount} project{projectCount !== 1 ? 's' : ''} found
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Compare Mode Toggle */}
          <button
            onClick={onToggleCompareMode}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isCompareMode 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
            }`}>
            <GitCompare size={16} />
            Compare {compareCount > 0 && `(${compareCount})`}
          </button>

          {/* Expand/Collapse */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-colors">
            <Filter size={16} />
            {isExpanded ? 'Collapse' : 'Expand'}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}>
              <ChevronDown size={16} />
            </motion.div>
          </button>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              <RotateCcw size={16} />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search projects, technologies, or descriptions..."
          value={searchValue}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
        {searchValue && (
          <button
            onClick={() => {
              setSearchValue('');
              handleFilterChange('search', '');
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Basic Filters Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
        {/* Technology Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Technology</label>
          <select
            value={filters.technology}
            onChange={(e) => handleFilterChange('technology', e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="all">All Technologies</option>
            {technologyOptions.map((tech) => (
              <option key={tech} value={tech.toLowerCase()}>{tech}</option>
            ))}
          </select>
        </div>

        {/* Industry Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Industry</label>
          <select
            value={filters.industry}
            onChange={(e) => handleFilterChange('industry', e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="all">All Industries</option>
            {industryOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Complexity Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Complexity</label>
          <select
            value={filters.complexity}
            onChange={(e) => handleFilterChange('complexity', e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="all">All Levels</option>
            {complexityOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Status</label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="all">All Status</option>
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Rating</label>
          <select
            value={filters.rating}
            onChange={(e) => handleFilterChange('rating', e.target.value)}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="all">All Ratings</option>
            {ratingOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-700 pt-4">

            <h4 className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-2">
              <SlidersHorizontal size={16} />
              Advanced Filters
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Team Size Range */}
              <div className="col-span-1 lg:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  <Users size={16} />
                  Team Size
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minTeamSize}
                    onChange={(e) => handleFilterChange('minTeamSize', e.target.value)}
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="flex items-center text-slate-400">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxTeamSize}
                    onChange={(e) => handleFilterChange('maxTeamSize', e.target.value)}
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Duration Range */}
              <div className="col-span-1 lg:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  <Clock size={16} />
                  Duration (months)
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minDuration}
                    onChange={(e) => handleFilterChange('minDuration', e.target.value)}
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="flex items-center text-slate-400">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxDuration}
                    onChange={(e) => handleFilterChange('maxDuration', e.target.value)}
                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Industry Tags */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Filter by Industry (Quick Select)
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleFilterChange('industry', 'all')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filters.industry === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}>
                  All Industries
                </button>
                {industryOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleFilterChange('industry', option.value)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        filters.industry === option.value
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}>
                      <Icon size={16} className={option.color} />
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Complexity Tags */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Filter by Complexity (Quick Select)
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleFilterChange('complexity', 'all')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filters.complexity === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}>
                  All Levels
                </button>
                {complexityOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleFilterChange('complexity', option.value)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filters.complexity === option.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}>
                    <div className={`w-2 h-2 rounded-full ${option.color.replace('text-', 'bg-')}`}></div>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Filter size={16} />
              Active Filters:
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(filters).map(([key, value]) => {
                if (value && value !== 'all' && value !== '') {
                  return (
                    <span
                      key={key}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-md">
                      {key}: {value}
                      <button
                        onClick={() => handleFilterChange(key, key === 'search' ? '' : 'all')}
                        className="hover:text-blue-100 transition-colors">
                        <X size={12} />
                      </button>
                    </span>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;