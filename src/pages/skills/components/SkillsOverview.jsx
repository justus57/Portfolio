import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Award, FolderOpen, TrendingUp } from 'lucide-react';

const SkillsOverview = ({ overview }) => {
  const getIcon = (iconName) => {
    const icons = {
      Code2: Code2,
      Layers: Layers,
      Award: Award,
      FolderOpen: FolderOpen
    };
    const IconComponent = icons[iconName] || Code2;
    return <IconComponent size={24} />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {overview?.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
          
          {/* Icon and Trend */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              {getIcon(item.icon)}
            </div>
            {item.trend && (
              <div className="flex items-center space-x-1 text-emerald-400 text-sm">
                <TrendingUp size={14} />
                <span>+{item.trend}%</span>
              </div>
            )}
          </div>

          {/* Value */}
          <div className="text-3xl font-bold text-white mb-2">
            {item.value}
          </div>

          {/* Label */}
          <div className="text-lg font-semibold text-blue-400 mb-2">
            {item.label}
          </div>

          {/* Description */}
          <div className="text-sm text-slate-400">
            {item.description}
          </div>

          {/* Progress indicator */}
          <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsOverview;