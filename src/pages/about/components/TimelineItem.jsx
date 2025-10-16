import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Building, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const TimelineItem = ({ item, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex">

      {/* Timeline Line */}
      <div className="flex flex-col items-center mr-8">
        <div className={`w-4 h-4 rounded-full ${item.isCurrentRole ? 'bg-blue-500' : 'bg-slate-600'} border-4 border-slate-900 z-10`} />
        {!isLast && <div className="w-0.5 h-full bg-slate-700 mt-2" />}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{item.position}</h3>
              <div className="flex items-center space-x-2 text-blue-400 mb-2">
                <Building size={16} />
                <span className="font-semibold">{item.company}</span>
              </div>
            </div>
            
            <div className="flex flex-col lg:items-end space-y-1">
              <div className="flex items-center space-x-2 text-slate-400">
                <Calendar size={16} />
                <span>{item.duration}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin size={16} />
                <span>{item.location}</span>
              </div>
            </div>
          </div>

          {/* Current Role Badge */}
          {item.isCurrentRole && (
            <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-4">
              Current Position
            </div>
          )}

          {/* Summary */}
          <p className="text-slate-300 mb-4 leading-relaxed">
            {item.summary}
          </p>

          {/* Key Achievements */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.keyAchievements?.map((achievement, idx) => (
              <span key={idx} className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full">
                {achievement}
              </span>
            ))}
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies?.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-sm rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
            <span className="text-sm">{isExpanded ? 'Show Less' : 'Show More Details'}</span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Expanded Content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden">

            {isExpanded && (
              <div className="mt-6 space-y-6">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {item.responsibilities?.map((responsibility, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Major Projects */}
                {item.majorProjects && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Major Projects</h4>
                    <div className="space-y-4">
                      {item.majorProjects.map((project, idx) => (
                        <div key={idx} className="bg-slate-700/30 rounded-lg p-4">
                          <h5 className="font-semibold text-blue-400 mb-2">{project.name}</h5>
                          <p className="text-slate-300 text-sm mb-2">{project.description}</p>
                          <div className="text-emerald-400 text-sm font-medium">
                            Impact: {project.impact}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Team Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-center space-x-2 text-slate-400 mb-2 sm:mb-0">
                    <Users size={16} />
                    <span>Team Size: {item.teamSize}</span>
                  </div>
                  <div className="text-slate-400 text-sm">
                    Reporting to: {item.reportingTo}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;