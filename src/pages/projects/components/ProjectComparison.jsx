import React from 'react';
import { motion } from 'framer-motion';
import { 
  X, Star, Github, ExternalLink, Clock, Users, 
  TrendingUp, Building, Target, Award, CheckCircle, 
  XCircle, Code, Database, Globe, Smartphone
} from 'lucide-react';

const ProjectComparison = ({ projects, onClose, onRemoveProject }) => {
  const maxProjects = 3;
  
  const complexityConfig = {
    simple: { color: 'text-green-400', label: 'Simple' },
    complex: { color: 'text-yellow-400', label: 'Complex' },
    enterprise: { color: 'text-red-400', label: 'Enterprise' }
  };

  const industryConfig = {
    fintech: { color: 'text-blue-400', icon: TrendingUp, label: 'FinTech' },
    banking: { color: 'text-green-400', icon: Building, label: 'Banking' },
    payments: { color: 'text-purple-400', icon: Target, label: 'Payments' },
    regulatory: { color: 'text-orange-400', icon: Award, label: 'Regulatory' }
  };

  const statusConfig = {
    completed: { color: 'text-green-400', label: 'Completed' },
    'in-progress': { color: 'text-blue-400', label: 'In Progress' },
    planned: { color: 'text-yellow-400', label: 'Planned' }
  };

  const getComparisonRows = () => {
    return [
      {
        label: 'Basic Information',
        isHeader: true
      },
      {
        label: 'Project Title',
        getValue: (project) => project.title
      },
      {
        label: 'Industry',
        getValue: (project) => {
          const config = industryConfig[project.industry];
          const Icon = config?.icon || Building;
          return (
            <div className="flex items-center gap-2">
              <Icon size={16} className={config?.color} />
              <span>{config?.label || project.industry}</span>
            </div>
          );
        }
      },
      {
        label: 'Complexity',
        getValue: (project) => (
          <span className={complexityConfig[project.complexity]?.color}>
            {complexityConfig[project.complexity]?.label}
          </span>
        )
      },
      {
        label: 'Status',
        getValue: (project) => (
          <span className={statusConfig[project.status]?.color}>
            {statusConfig[project.status]?.label}
          </span>
        )
      },
      {
        label: 'Rating',
        getValue: (project) => (
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span>{project.rating}</span>
          </div>
        )
      },
      {
        label: 'Project Details',
        isHeader: true
      },
      {
        label: 'Duration',
        getValue: (project) => (
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-slate-400" />
            <span>{project.duration}</span>
          </div>
        )
      },
      {
        label: 'Team Size',
        getValue: (project) => (
          <div className="flex items-center gap-2">
            <Users size={16} className="text-slate-400" />
            <span>{project.teamSize}</span>
          </div>
        )
      },
      {
        label: 'Technologies',
        getValue: (project) => (
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )
      },
      {
        label: 'Key Metrics',
        isHeader: true
      },
      ...(() => {
        // Find all unique metric labels across projects
        const allMetricLabels = new Set();
        projects.forEach(project => {
          if (project.metrics) {
            project.metrics.forEach(metric => allMetricLabels.add(metric.label));
          }
        });
        
        return Array.from(allMetricLabels).map(metricLabel => ({
          label: metricLabel,
          getValue: (project) => {
            const metric = project.metrics?.find(m => m.label === metricLabel);
            return metric ? (
              <div className="text-center">
                <div className="text-lg font-bold text-white">{metric.value}</div>
              </div>
            ) : (
              <div className="text-center text-slate-500">-</div>
            );
          }
        }));
      })(),
      {
        label: 'Key Features',
        isHeader: true
      },
      {
        label: 'Top Features',
        getValue: (project) => (
          <div className="space-y-1">
            {project.keyFeatures?.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
            {project.keyFeatures && project.keyFeatures.length > 3 && (
              <div className="text-xs text-slate-400">
                +{project.keyFeatures.length - 3} more features
              </div>
            )}
          </div>
        )
      },
      {
        label: 'Links & Resources',
        isHeader: true
      },
      {
        label: 'GitHub',
        getValue: (project) => project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <Github size={16} />
            <span>View Code</span>
          </a>
        ) : (
          <span className="text-slate-500">Not Available</span>
        )
      },
      {
        label: 'Live Demo',
        getValue: (project) => project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            <ExternalLink size={16} />
            <span>View Live</span>
          </a>
        ) : (
          <span className="text-slate-500">Not Available</span>
        )
      }
    ];
  };

  const comparisonRows = getComparisonRows();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-800 rounded-xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Project Comparison</h2>
              <p className="text-slate-400">
                Compare up to {maxProjects} projects side by side. 
                Currently comparing {projects.length} project{projects.length !== 1 ? 's' : ''}.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="flex-1 overflow-auto">
          {projects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-slate-400 mb-4">No projects selected for comparison</div>
              <p className="text-slate-500">Select projects from the grid to compare them here.</p>
            </div>
          ) : (
            <div className="p-6">
              {/* Project Headers */}
              <div className="grid grid-cols-1 gap-4 mb-6" style={{ gridTemplateColumns: `300px repeat(${projects.length}, 1fr)` }}>
                <div className="font-semibold text-slate-300">Project</div>
                {projects.map((project) => (
                  <div key={project.id} className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-300 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveProject(project.id)}
                        className="p-1 hover:bg-slate-600 text-slate-400 hover:text-white rounded transition-colors ml-2">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="aspect-video bg-slate-600 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              <div className="space-y-2">
                {comparisonRows.map((row, index) => (
                  <div
                    key={index}
                    className={`grid gap-4 ${row.isHeader ? 'py-3' : 'py-2'}`}
                    style={{ gridTemplateColumns: `300px repeat(${projects.length}, 1fr)` }}>
                    
                    <div className={`${row.isHeader ? 'font-semibold text-white bg-slate-700 px-4 py-2 rounded-lg' : 'text-slate-300 px-4 py-2'}`}>
                      {row.label}
                    </div>
                    
                    {row.isHeader ? (
                      // Header row - span across all project columns
                      Array.from({ length: projects.length }).map((_, colIndex) => (
                        <div key={colIndex} className="bg-slate-700 rounded-lg"></div>
                      ))
                    ) : (
                      // Data row
                      projects.map((project) => (
                        <div key={project.id} className="px-4 py-2 bg-slate-800/50 rounded-lg">
                          {typeof row.getValue(project) === 'string' ? (
                            <span className="text-slate-300">{row.getValue(project)}</span>
                          ) : (
                            row.getValue(project)
                          )}
                        </div>
                      ))
                    )}
                  </div>
                ))}
              </div>

              {/* Business Outcomes Comparison */}
              {projects.some(p => p.businessOutcomes) && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Business Outcomes</h3>
                  <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${projects.length}, 1fr)` }}>
                    {projects.map((project) => (
                      <div key={project.id} className="bg-slate-700 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-3">{project.title}</h4>
                        {project.businessOutcomes ? (
                          <div className="space-y-2">
                            {project.businessOutcomes.slice(0, 4).map((outcome, index) => (
                              <div key={index} className="flex items-start gap-2 text-sm">
                                <CheckCircle size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">{outcome}</span>
                              </div>
                            ))}
                            {project.businessOutcomes.length > 4 && (
                              <div className="text-xs text-slate-400">
                                +{project.businessOutcomes.length - 4} more outcomes
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-slate-500 text-sm">No business outcomes data available</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700 bg-slate-800/50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">
              Select up to {maxProjects} projects to compare features, metrics, and technologies side by side.
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => projects.forEach(p => onRemoveProject(p.id))}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors">
                Clear All
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectComparison;