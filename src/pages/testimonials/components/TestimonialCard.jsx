import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp,
  Award, TrendingUp, Clock, Code, Building, Users
} from 'lucide-react';

const TestimonialCard = ({ testimonial, isExpanded, onToggle }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-slate-600'}
      />
    ));
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'fintech':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'enterprise':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'mobile':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'startup':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getIndustryIcon = (industry) => {
    switch (industry) {
      case 'financial':
      case 'banking':
      case 'payments':
        return <Building size={16} />;
      case 'technology':
        return <Code size={16} />;
      case 'healthcare':
        return <Users size={16} />;
      default:
        return <Award size={16} />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">

      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500/30">
            <img 
              src={testimonial.client.avatar} 
              alt={testimonial.client.avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-white text-lg">{testimonial.client.name}</h3>
            <p className="text-blue-400 font-medium">{testimonial.client.position}</p>
            <p className="text-slate-400">{testimonial.client.company}</p>
            
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1 text-slate-400 text-sm">
                <MapPin size={14} />
                <span>{testimonial.client.location}</span>
              </div>
              <div className="flex items-center space-x-1 text-slate-400 text-sm">
                <Calendar size={14} />
                <span>{testimonial.date}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-1">
              {renderStars(testimonial.rating)}
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(testimonial.type)}`}>
              {getIndustryIcon(testimonial.industry)}
              <span className="ml-1 capitalize">{testimonial.type}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <blockquote className="text-slate-300 text-lg leading-relaxed mb-6 italic">
          "{testimonial.content}"
        </blockquote>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {testimonial.projectTags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {testimonial.metrics.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-slate-700/30 rounded-lg">
              <div className="text-lg font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs text-slate-400 mb-1">{metric.label}</div>
              <div className="text-xs text-slate-500">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => onToggle(testimonial.id)}
          className="w-full flex items-center justify-center space-x-2 py-3 text-blue-400 hover:text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors">
          <span>{isExpanded ? 'Hide' : 'Show'} Project Details</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-slate-700 space-y-6">

              {/* Project Overview */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <Award size={20} className="text-blue-400" />
                  <span>Project Overview</span>
                </h4>
                <p className="text-slate-300 leading-relaxed">{testimonial.projectDetails.overview}</p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <Code size={20} className="text-purple-400" />
                  <span>Technologies Used</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {testimonial.projectDetails.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <Clock size={20} className="text-green-400" />
                    <span>Timeline</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-white">{testimonial.projectDetails.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Completed:</span>
                      <span className="text-white">{testimonial.projectDetails.completedDate}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <TrendingUp size={20} className="text-cyan-400" />
                    <span>Impact Metrics</span>
                  </h4>
                  <div className="space-y-2">
                    {testimonial.metrics.slice(0, 2).map((metric, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-slate-400">{metric.label}:</span>
                        <span className="text-cyan-400 font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-white font-medium mb-1">Interested in similar results?</h5>
                    <p className="text-slate-400 text-sm">Let's discuss your project requirements</p>
                  </div>
                  <motion.a
                    href="mailto:justuskasyoki57@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <span>Get in Touch</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;