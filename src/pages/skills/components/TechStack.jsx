import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const TechStack = ({ stacks }) => {
  const getSuccessRateColor = (rate) => {
    if (rate >= 95) return 'text-emerald-400';
    if (rate >= 90) return 'text-blue-400';
    if (rate >= 85) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Technology Stacks</h2>
        <p className="text-lg text-slate-400">
          Proven technology combinations with track record of successful project delivery
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stacks?.map((stack, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Package size={24} color="white" />
              </div>
              <div className={`flex items-center space-x-1 ${getSuccessRateColor(stack.successRate)}`}>
                <CheckCircle size={16} />
                <span className="text-sm font-medium">{stack.successRate}%</span>
              </div>
            </div>

            {/* Title and Description */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {stack.name}
            </h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              {stack.description}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <div className="text-sm font-medium text-slate-400 mb-2">Tech Stack:</div>
              <div className="flex flex-wrap gap-2">
                {stack.technologies?.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Users size={14} />
                  <span>Projects:</span>
                </div>
                <span className="text-white font-medium">{stack.projectCount}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-slate-400">
                  <TrendingUp size={14} />
                  <span>Success Rate:</span>
                </div>
                <span className={`font-medium ${getSuccessRateColor(stack.successRate)}`}>
                  {stack.successRate}%
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Clock size={14} />
                  <span>Avg Delivery:</span>
                </div>
                <span className="text-white font-medium">{stack.avgDelivery}</span>
              </div>
            </div>

            {/* Progress Bar for Success Rate */}
            <div className="mt-4 pt-4 border-t border-slate-700">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Success Rate</span>
                <span>{stack.successRate}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stack.successRate}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-full rounded-full ${
                    stack.successRate >= 95 ? 'bg-emerald-500' :
                    stack.successRate >= 90 ? 'bg-blue-500' :
                    stack.successRate >= 85 ? 'bg-yellow-500' : 'bg-orange-500'
                  }`}
                />
              </div>
            </div>

            {/* Hover Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100"
            />
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6 mt-8">
        
        <h3 className="text-lg font-bold text-white mb-4">Technology Stack Performance</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">
              {stacks?.reduce((acc, stack) => acc + stack.projectCount, 0) || 0}
            </div>
            <div className="text-sm text-slate-400">Total Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">
              {stacks?.length || 0}
            </div>
            <div className="text-sm text-slate-400">Tech Stacks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">
              {Math.round(stacks?.reduce((acc, stack) => acc + stack.successRate, 0) / stacks?.length) || 0}%
            </div>
            <div className="text-sm text-slate-400">Avg Success Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400">
              {stacks?.reduce((acc, stack) => acc + stack.technologies.length, 0) || 0}
            </div>
            <div className="text-sm text-slate-400">Total Technologies</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;