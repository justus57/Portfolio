import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Target, Milestone, ExternalLink, Calendar, MapPin, Tag } from 'lucide-react';

const AchievementGallery = ({ achievements }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'award':
        return <Trophy size={20} className="text-yellow-400" />;
      case 'certification':
        return <Award size={20} className="text-blue-400" />;
      case 'milestone':
        return <Target size={20} className="text-emerald-400" />;
      case 'project':
        return <Milestone size={20} className="text-purple-400" />;
      default:
        return <Award size={20} className="text-slate-400" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'award':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'certification':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'milestone':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'project':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getLevelBadge = (level) => {
    const colors = {
      'International': 'bg-red-500/20 text-red-400',
      'Industry': 'bg-purple-500/20 text-purple-400',
      'Company': 'bg-blue-500/20 text-blue-400',
      'Professional': 'bg-emerald-500/20 text-emerald-400',
      'Community': 'bg-cyan-500/20 text-cyan-400',
      'Global': 'bg-orange-500/20 text-orange-400'
    };
    return colors[level] || 'bg-slate-500/20 text-slate-400';
  };

  const filterOptions = [
    { value: 'all', label: 'All Achievements' },
    { value: 'award', label: 'Awards' },
    { value: 'project', label: 'Projects' },
    { value: 'milestone', label: 'Milestones' },
    { value: 'certification', label: 'Certifications' }
  ];

  const filteredAchievements = selectedFilter === 'all' 
    ? achievements 
    : achievements?.filter(achievement => achievement.type === selectedFilter);

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedFilter(filter.value)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedFilter === filter.value
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'
            }`}>
            {filter.label}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {filteredAchievements?.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setSelectedAchievement(achievement)}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">

            {/* Image */}
            {achievement.image && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={achievement.image}
                  alt={achievement.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(achievement.type)}
                  <span className={`px-2 py-1 rounded-full border text-xs font-medium ${getTypeColor(achievement.type)}`}>
                    {achievement.type}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getLevelBadge(achievement.level)}`}>
                  {achievement.level}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                {achievement.title}
              </h3>

              {/* Organization & Date */}
              <div className="space-y-1 mb-3">
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <MapPin size={14} />
                  <span>{achievement.organization}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400 text-sm">
                  <Calendar size={14} />
                  <span>{achievement.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                {achievement.description}
              </p>

              {/* Impact */}
              {achievement.impact && (
                <div className="mb-4">
                  <div className="text-emerald-400 text-sm font-medium">
                    Impact: {achievement.impact}
                  </div>
                </div>
              )}

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {achievement.relatedSkills?.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                  {achievement.relatedSkills?.length > 3 && (
                    <span className="px-2 py-1 bg-slate-600 text-slate-400 text-xs rounded">
                      +{achievement.relatedSkills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Verification Link */}
              {achievement.verificationUrl && (
                <motion.a
                  href={achievement.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium group/link">
                  
                  <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                  <span>View Details</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAchievement(null)}>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            
            {/* Modal Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedAchievement.title}</h2>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full border text-sm font-medium ${getTypeColor(selectedAchievement.type)}`}>
                      {selectedAchievement.type}
                    </span>
                    <span className={`px-3 py-1 rounded text-sm font-medium ${getLevelBadge(selectedAchievement.level)}`}>
                      {selectedAchievement.level}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="text-slate-400 hover:text-white text-2xl">&times;</button>
              </div>

              {selectedAchievement.image && (
                <img 
                  src={selectedAchievement.image}
                  alt={selectedAchievement.imageAlt}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400">Organization:</span>
                    <div className="text-white font-medium">{selectedAchievement.organization}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Date:</span>
                    <div className="text-white font-medium">{selectedAchievement.date}</div>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400">Description:</span>
                  <p className="text-slate-300 mt-1">{selectedAchievement.description}</p>
                </div>

                {selectedAchievement.impact && (
                  <div>
                    <span className="text-slate-400">Impact:</span>
                    <div className="text-emerald-400 font-medium mt-1">{selectedAchievement.impact}</div>
                  </div>
                )}

                <div>
                  <span className="text-slate-400">Related Skills:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedAchievement.relatedSkills?.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedAchievement.verificationUrl && (
                  <a
                    href={selectedAchievement.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium">
                    <ExternalLink size={16} />
                    <span>Verification Link</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-500/20 rounded-xl p-6">
        
        <h3 className="text-lg font-bold text-white mb-4">Achievement Summary</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-yellow-400">{achievements?.length || 0}</div>
            <div className="text-sm text-slate-400">Total Achievements</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">
              {achievements?.filter(a => a.type === 'project')?.length || 0}
            </div>
            <div className="text-sm text-slate-400">Major Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">
              {achievements?.filter(a => a.level === 'Industry')?.length || 0}
            </div>
            <div className="text-sm text-slate-400">Industry Recognition</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">
              {achievements?.filter(a => a.type === 'milestone')?.length || 0}
            </div>
            <div className="text-sm text-slate-400">Milestones</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementGallery;