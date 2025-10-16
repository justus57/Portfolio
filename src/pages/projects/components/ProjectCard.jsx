import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Github, ExternalLink, Clock, Users, 
  TrendingUp, Building, Code, Award, Target,
  ChevronRight, Eye, GitBranch
} from 'lucide-react';

const ProjectCard = ({ project, onViewDetails, isSelected, onCompare }) => {
  const {
    title,
    description,
    image,
    imageAlt,
    technologies,
    industry,
    complexity,
    duration,
    teamSize,
    rating,
    githubUrl,
    liveUrl,
    metrics,
    status,
    keyFeatures,
    businessOutcomes
  } = project;

  const complexityConfig = {
    simple: { color: 'text-green-400', bg: 'bg-green-400/10', label: 'Simple' },
    complex: { color: 'text-yellow-400', bg: 'bg-yellow-400/10', label: 'Complex' },
    enterprise: { color: 'text-red-400', bg: 'bg-red-400/10', label: 'Enterprise' }
  };

  const industryConfig = {
    fintech: { color: 'text-blue-400', bg: 'bg-blue-400/10', icon: TrendingUp },
    banking: { color: 'text-green-400', bg: 'bg-green-400/10', icon: Building },
    payments: { color: 'text-purple-400', bg: 'bg-purple-400/10', icon: Target },
    regulatory: { color: 'text-orange-400', bg: 'bg-orange-400/10', icon: Award }
  };

  const statusConfig = {
    completed: { color: 'text-green-400', bg: 'bg-green-400/10', label: 'Completed' },
    'in-progress': { color: 'text-blue-400', bg: 'bg-blue-400/10', label: 'In Progress' },
    planned: { color: 'text-yellow-400', bg: 'bg-yellow-400/10', label: 'Planned' }
  };

  const IndustryIcon = industryConfig[industry]?.icon || Building;

  return (
    <motion.div
      className={`bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border ${
        isSelected ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-700 hover:border-slate-600'
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[status]?.bg} ${statusConfig[status]?.color}`}>
            {statusConfig[status]?.label}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${complexityConfig[complexity]?.bg} ${complexityConfig[complexity]?.color}`}>
            {complexityConfig[complexity]?.label}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className={`p-2 rounded-full ${industryConfig[industry]?.bg}`}>
            <IndustryIcon size={16} className={industryConfig[industry]?.color} />
          </div>
        </div>
        {isSelected && (
          <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Selected for Comparison
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 flex-1">
            {title}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-white">{rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md">
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded-md">
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Key Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {metrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="text-center p-2 bg-slate-700/50 rounded-lg">
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="text-xs text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock size={14} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Users size={14} />
            <span>{teamSize}</span>
          </div>
        </div>

        {/* Key Features Preview */}
        {keyFeatures && keyFeatures.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
            <ul className="text-xs text-slate-300 space-y-1">
              {keyFeatures.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ChevronRight size={12} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
              {keyFeatures.length > 2 && (
                <li className="text-slate-400 text-xs">
                  +{keyFeatures.length - 2} more features
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                onClick={(e) => e.stopPropagation()}>
                <Github size={16} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors"
                onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCompare(project.id);
              }}
              className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                isSelected
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white'
              }`}>
              {isSelected ? 'Selected' : 'Compare'}
            </button>
            <button
              onClick={() => onViewDetails(project)}
              className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1">
              <Eye size={14} />
              Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;