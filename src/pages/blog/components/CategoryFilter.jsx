import React from 'react';
import { motion } from 'framer-motion';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-2 border border-slate-700">
      <div className="flex flex-wrap items-center gap-2">
        {/* All Categories */}
        <motion.button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          All Articles
        </motion.button>

        {/* Category Buttons */}
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.slug;
          
          return (
            <motion.button
              key={category.slug}
              onClick={() => onCategoryChange(category.slug)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Icon size={16} />
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isActive 
                  ? 'bg-white/20 text-white' 
                  : 'bg-slate-600 text-slate-400'
              }`}>
                {category.count}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;