import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Monitor, Smartphone, CreditCard, ChevronDown, ChevronUp, Calendar, Briefcase } from 'lucide-react';

const SkillsProgress = ({ skills }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const getIcon = (iconName) => {
    const icons = {
      Server: Server,
      Monitor: Monitor,
      Smartphone: Smartphone,
      CreditCard: CreditCard
    };
    const IconComponent = icons[iconName] || Server;
    return <IconComponent size={20} />;
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'from-emerald-500 to-green-400';
    if (level >= 80) return 'from-blue-500 to-cyan-400';
    if (level >= 70) return 'from-yellow-500 to-orange-400';
    return 'from-red-500 to-pink-400';
  };

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {skills?.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">

          {/* Category Header */}
          <div 
            onClick={() => toggleCategory(categoryIndex)}
            className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-700/30 transition-colors">
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                {getIcon(category.icon)}
              </div>
              <h3 className="text-xl font-bold text-white">{category.category}</h3>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm">
                {category.items?.length} skills
              </span>
              {expandedCategory === categoryIndex ? 
                <ChevronUp size={20} className="text-slate-400" /> : 
                <ChevronDown size={20} className="text-slate-400" />
              }
            </div>
          </div>

          {/* Skills List */}
          <motion.div
            initial={false}
            animate={{ 
              height: expandedCategory === categoryIndex ? 'auto' : 0,
              opacity: expandedCategory === categoryIndex ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden">

            <div className="px-6 pb-6">
              <div className="space-y-4">
                {category.items?.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    className="group">

                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-2xl font-bold text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{skill.yearsExperience}y exp</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.2 }}
                        className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full relative`}>
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
                      </motion.div>
                    </div>

                    {/* Recent Projects */}
                    <div className="flex items-center space-x-2">
                      <Briefcase size={14} className="text-slate-500" />
                      <span className="text-sm text-slate-400">Recent projects:</span>
                      <div className="flex flex-wrap gap-1">
                        {skill.recentProjects?.map((project, projectIndex) => (
                          <span 
                            key={projectIndex}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6">
        
        <h3 className="text-lg font-bold text-white mb-4">Skills Overview</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">95%</div>
            <div className="text-sm text-slate-400">Average Proficiency</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">15+</div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">7+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">50+</div>
            <div className="text-sm text-slate-400">Projects Completed</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsProgress;