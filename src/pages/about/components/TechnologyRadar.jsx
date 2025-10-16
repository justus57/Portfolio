import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Cloud, Calendar, Target, BookMarked, Star } from 'lucide-react';

const TechnologyRadar = ({ technologies }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const getIcon = (iconName) => {
    const icons = {
      BookOpen: BookOpen,
      TrendingUp: TrendingUp,
      Cloud: Cloud
    };
    const IconComponent = icons[iconName] || BookOpen;
    return <IconComponent size={20} />;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'learning':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'exploring':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'mastering':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'expert':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getInterestStars = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={i < level ? 'text-yellow-400 fill-current' : 'text-slate-600'}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Category Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {technologies?.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedCategory === index
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'
            }`}>
            
            <div className="w-5 h-5 flex items-center justify-center">
              {getIcon(category.icon)}
            </div>
            <span className="font-medium">{category.category}</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded">
              {category.items?.length}
            </span>
          </button>
        ))}
      </div>

      {/* Selected Category Content */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies?.[selectedCategory]?.items?.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">

              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h3>
                <div className={`px-2 py-1 rounded-full border text-xs font-medium ${getStatusColor(tech.status)}`}>
                  {tech.status}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Calendar size={14} />
                    <span>Started: {tech.startDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Target size={14} />
                    <span>Target: {tech.estimatedCompletion}</span>
                  </div>
                </div>
              </div>

              {/* Interest Level */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-400">Interest Level</span>
                  <div className="flex items-center space-x-1">
                    {getInterestStars(tech.interestLevel)}
                  </div>
                </div>
              </div>

              {/* Current Project */}
              {tech.currentProject && (
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <BookMarked size={14} className="text-blue-400" />
                    <span className="text-sm font-medium text-slate-400">Current Project</span>
                  </div>
                  <p className="text-sm text-slate-300 bg-slate-700/30 rounded-lg p-2">
                    {tech.currentProject}
                  </p>
                </div>
              )}

              {/* Learning Resources */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen size={14} className="text-emerald-400" />
                  <span className="text-sm font-medium text-slate-400">Learning Resources</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tech.learningResources?.map((resource, resourceIndex) => (
                    <span 
                      key={resourceIndex}
                      className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">
                      {resource}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Progress</span>
                  <span>
                    {tech.status === 'expert' ? '100%' : 
                     tech.status === 'mastering' ? '75%' : 
                     tech.status === 'learning' ? '50%' : '25%'}
                  </span>
                </div>
                <div className="mt-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ 
                      width: tech.status === 'expert' ? '100%' : 
                             tech.status === 'mastering' ? '75%' : 
                             tech.status === 'learning' ? '50%' : '25%'
                    }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className={`h-full ${
                      tech.status === 'expert' ? 'bg-purple-500' :
                      tech.status === 'mastering' ? 'bg-emerald-500' :
                      tech.status === 'learning' ? 'bg-blue-500' : 'bg-yellow-500'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Learning Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6">
        
        <h3 className="text-lg font-bold text-white mb-4">Learning Journey</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">12+</div>
            <div className="text-sm text-slate-400">Technologies Tracking</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">5</div>
            <div className="text-sm text-slate-400">Active Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">3</div>
            <div className="text-sm text-slate-400">Mastering</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400">4.2</div>
            <div className="text-sm text-slate-400">Avg Interest Level</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologyRadar;