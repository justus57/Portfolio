import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Code, Database, Zap, GitBranch, Layers, TrendingUp, Clock } from 'lucide-react';

const TechnologyTimeline = ({ timeline }) => {
  const [selectedYear, setSelectedYear] = useState(null);

  const getIconForCategory = (category) => {
    switch (category.toLowerCase()) {
      case 'programming':
        return <Code size={16} />;
      case 'database':
        return <Database size={16} />;
      case 'framework':
        return <Layers size={16} />;
      case 'devops':
        return <GitBranch size={16} />;
      case 'cloud':
        return <Zap size={16} />;
      default:
        return <TrendingUp size={16} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'programming':
        return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'database':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'framework':
        return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      case 'devops':
        return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'cloud':
        return 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30';
      default:
        return 'text-slate-400 bg-slate-500/20 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Technology Evolution Timeline</h2>
        <p className="text-lg text-slate-400">
          A chronological journey through technology adoption and mastery over the years
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

        <div className="space-y-8">
          {timeline?.map((entry, index) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative">

              {/* Year Marker */}
              <div className="absolute left-0 top-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedYear(selectedYear === entry.year ? null : entry.year)}
                  className="w-16 h-16 bg-slate-800 border-2 border-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{entry.year}</div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="ml-24">
                <motion.div
                  layout
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{entry.year}</h3>
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Clock size={16} />
                      <span className="text-sm">{entry.technologies?.length} technologies</span>
                    </div>
                  </div>

                  {/* Phase Description */}
                  <p className="text-slate-300 mb-6">{entry.phase}</p>

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {entry.technologies?.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="bg-slate-700/50 rounded-lg p-4 border border-slate-600 hover:border-blue-500/50 transition-all duration-300 group">

                        {/* Tech Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2 rounded-lg border ${getCategoryColor(tech.category)}`}>
                            {getIconForCategory(tech.category)}
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(tech.category)}`}>
                            {tech.category}
                          </span>
                        </div>

                        {/* Tech Name */}
                        <h4 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {tech.name}
                        </h4>

                        {/* Purpose */}
                        <p className="text-sm text-slate-400 mb-3">{tech.purpose}</p>

                        {/* Proficiency Bar */}
                        <div className="mb-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-400">Proficiency</span>
                            <span className="text-white">{tech.proficiency}%</span>
                          </div>
                          <div className="w-full bg-slate-600 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.proficiency}%` }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            />
                          </div>
                        </div>

                        {/* Impact Badge */}
                        <div className="flex items-center space-x-2">
                          <TrendingUp size={12} className="text-green-400" />
                          <span className="text-xs text-green-400">{tech.impact}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {selectedYear === entry.year && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-slate-600">

                        <h4 className="text-lg font-semibold text-white mb-4">Key Achievements & Milestones</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {entry.milestones?.map((milestone, idx) => (
                            <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                              <h5 className="font-medium text-blue-400 mb-2">{milestone.title}</h5>
                              <p className="text-sm text-slate-400">{milestone.description}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6">
        
        <h3 className="text-lg font-bold text-white mb-4">Evolution Summary</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">
              {timeline?.length || 0}
            </div>
            <div className="text-sm text-slate-400">Years Tracked</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">
              {timeline?.reduce((acc, entry) => acc + (entry.technologies?.length || 0), 0) || 0}
            </div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">
              {timeline?.[timeline.length - 1]?.year - timeline?.[0]?.year + 1 || 0}
            </div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">
              {new Set(timeline?.flatMap(entry => entry.technologies?.map(tech => tech.category))).size || 0}
            </div>
            <div className="text-sm text-slate-400">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">
              {Math.round(timeline?.reduce((acc, entry) => 
                acc + (entry.technologies?.reduce((techAcc, tech) => techAcc + tech.proficiency, 0) || 0) / (entry.technologies?.length || 1), 0
              ) / (timeline?.length || 1)) || 0}%
            </div>
            <div className="text-sm text-slate-400">Avg Proficiency</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechnologyTimeline;