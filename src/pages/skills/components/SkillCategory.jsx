import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, Briefcase, Star } from 'lucide-react';

const SkillCategory = ({ category, skills, isExpanded, onToggle }) => {
  const getLevelColor = (proficiency) => {
    if (proficiency >= 90) return 'from-emerald-500 to-green-400';
    if (proficiency >= 80) return 'from-blue-500 to-cyan-400';
    if (proficiency >= 70) return 'from-yellow-500 to-orange-400';
    return 'from-red-500 to-pink-400';
  };

  const getLevelText = (proficiency) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">

      {/* Category Header */}
      <div 
        onClick={onToggle}
        className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-700/30 transition-colors">
        
        <div className="flex items-center space-x-3">
          <h3 className="text-xl font-bold text-white">{category}</h3>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
            {skills?.length} skills
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-slate-400 text-sm">
            Avg: {Math.round(skills?.reduce((acc, skill) => acc + skill.proficiency, 0) / skills?.length)}%
          </div>
          {isExpanded ? 
            <ChevronUp size={20} className="text-slate-400" /> : 
            <ChevronDown size={20} className="text-slate-400" />
          }
        </div>
      </div>

      {/* Skills List */}
      <motion.div
        initial={false}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden">

        <div className="px-6 pb-6">
          <div className="space-y-6">
            {skills?.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                className="group">

                {/* Skill Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-semibold text-white text-lg group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                      {getLevelText(skill.proficiency)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < Math.floor(skill.proficiency / 20) ? 'fill-current' : 'text-slate-600'}
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-blue-400">
                      {skill.proficiency}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: skillIndex * 0.2 }}
                    className={`h-full bg-gradient-to-r ${getLevelColor(skill.proficiency)} rounded-full relative`}>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
                  </motion.div>
                </div>

                {/* Experience and Projects */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Calendar size={14} />
                    <span>{skill.yearsExperience} years experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Briefcase size={14} />
                    <span>{skill.projects?.length || 0} projects</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                  {skill.description}
                </p>

                {/* Recent Projects */}
                {skill.projects && skill.projects.length > 0 && (
                  <div>
                    <div className="text-sm font-medium text-slate-400 mb-2">Recent Projects:</div>
                    <div className="flex flex-wrap gap-2">
                      {skill.projects.map((project, projectIndex) => (
                        <span 
                          key={projectIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;