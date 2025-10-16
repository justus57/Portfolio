import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Star, Github, ExternalLink, Clock, Users, Calendar,
  TrendingUp, Building, Target, Award, CheckCircle, 
  Code, Database, Globe, Smartphone, ChevronLeft, ChevronRight,
  Play, Eye, Download, Share2, BookOpen, Zap, Shield
} from 'lucide-react';

const ProjectDetailModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const {
    title,
    description,
    fullDescription,
    image,
    imageAlt,
    technologies,
    industry,
    complexity,
    status,
    duration,
    teamSize,
    rating,
    githubUrl,
    liveUrl,
    keyFeatures,
    challengesSolved,
    metrics,
    gallery,
    technicalDetails,
    codeSnippet,
    architectureDescription,
    techStack,
    challengeDetails,
    businessOutcomes
  } = project;

  const complexityConfig = {
    simple: { color: 'text-green-400', bg: 'bg-green-400/10', label: 'Simple' },
    complex: { color: 'text-yellow-400', bg: 'bg-yellow-400/10', label: 'Complex' },
    enterprise: { color: 'text-red-400', bg: 'bg-red-400/10', label: 'Enterprise' }
  };

  const industryConfig = {
    fintech: { color: 'text-blue-400', bg: 'bg-blue-400/10', icon: TrendingUp, label: 'FinTech' },
    banking: { color: 'text-green-400', bg: 'bg-green-400/10', icon: Building, label: 'Banking' },
    payments: { color: 'text-purple-400', bg: 'bg-purple-400/10', icon: Target, label: 'Payments' },
    regulatory: { color: 'text-orange-400', bg: 'bg-orange-400/10', icon: Award, label: 'Regulatory' }
  };

  const statusConfig = {
    completed: { color: 'text-green-400', bg: 'bg-green-400/10', label: 'Completed' },
    'in-progress': { color: 'text-blue-400', bg: 'bg-blue-400/10', label: 'In Progress' },
    planned: { color: 'text-yellow-400', bg: 'bg-yellow-400/10', label: 'Planned' }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'technical', label: 'Technical Details', icon: Code },
    { id: 'challenges', label: 'Challenges & Solutions', icon: Zap },
    { id: 'gallery', label: 'Gallery', icon: Globe }
  ];

  const IndustryIcon = industryConfig[industry]?.icon || Building;

  const nextImage = () => {
    if (gallery && gallery.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    if (gallery && gallery.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-800 rounded-xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="p-6 border-b border-slate-700 flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${industryConfig[industry]?.bg}`}>
                  <IndustryIcon size={20} className={industryConfig[industry]?.color} />
                </div>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusConfig[status]?.bg} ${statusConfig[status]?.color}`}>
                    {statusConfig[status]?.label}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${complexityConfig[complexity]?.bg} ${complexityConfig[complexity]?.color}`}>
                    {complexityConfig[complexity]?.label}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
              <p className="text-lg text-slate-300 mb-4">{description}</p>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>{teamSize}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={industryConfig[industry]?.color}>
                    {industryConfig[industry]?.label}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors">
                  <Github size={20} />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  <ExternalLink size={20} />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-3 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-3 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-700 flex-shrink-0">
          <div className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-400/5'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}>
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-auto p-6">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8">

                {/* Full Description */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <BookOpen size={20} />
                    Project Overview
                  </h3>
                  <div className="text-slate-300 leading-relaxed">
                    {fullDescription?.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {keyFeatures && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg">
                          <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-slate-700 text-slate-300 rounded-lg font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Business Outcomes */}
                {businessOutcomes && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Business Outcomes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {businessOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                          <TrendingUp size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'technical' && (
              <motion.div
                key="technical"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8">

                {/* Architecture */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Architecture Overview</h3>
                  <p className="text-slate-300 leading-relaxed">{architectureDescription}</p>
                </div>

                {/* Tech Stack */}
                {techStack && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Technology Stack</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.entries(techStack).map(([category, technologies]) => (
                        <div key={category} className="p-4 bg-slate-700/30 rounded-lg">
                          <h4 className="font-semibold text-white mb-3 capitalize">{category}</h4>
                          <div className="space-y-2">
                            {technologies.map((tech, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <span className="text-slate-300">{tech}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Code Snippet */}
                {codeSnippet && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Code Highlight</h3>
                    <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm">
                      <code className="text-slate-300">{codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {/* Technical Details */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Implementation Details</h3>
                  <p className="text-slate-300 leading-relaxed">{technicalDetails}</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'challenges' && (
              <motion.div
                key="challenges"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8">

                {/* Challenge Overview */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Challenge Overview</h3>
                  <p className="text-slate-300 leading-relaxed">{challengesSolved}</p>
                </div>

                {/* Detailed Challenges */}
                {challengeDetails && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Detailed Challenges & Solutions</h3>
                    <div className="space-y-6">
                      {challengeDetails.map((challenge, index) => (
                        <div key={index} className="p-6 bg-slate-700/30 rounded-lg border border-slate-600">
                          <h4 className="text-lg font-semibold text-white mb-3">{challenge.challenge}</h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-orange-400 mb-2">Problem:</h5>
                              <p className="text-slate-300">{challenge.description}</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-green-400 mb-2">Solution:</h5>
                              <p className="text-slate-300">{challenge.solution}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8">

                {gallery && gallery.length > 0 ? (
                  <>
                    {/* Main Image */}
                    <div className="relative">
                      <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden">
                        <img
                          src={gallery[activeImageIndex]?.url || image}
                          alt={gallery[activeImageIndex]?.alt || imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {gallery.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors">
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors">
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-white font-medium">
                            {gallery[activeImageIndex]?.caption || 'Project Screenshot'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Thumbnail Grid */}
                    {gallery.length > 1 && (
                      <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                        {gallery.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImageIndex(index)}
                            className={`aspect-square bg-slate-700 rounded-lg overflow-hidden border-2 transition-all ${
                              activeImageIndex === index
                                ? 'border-blue-400 ring-2 ring-blue-400/20'
                                : 'border-transparent hover:border-slate-500'
                            }`}>
                            <img
                              src={item.url}
                              alt={item.alt}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-16">
                    <Globe size={64} className="text-slate-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">No Gallery Available</h3>
                    <p className="text-slate-400">
                      Additional project images and screenshots are not available for this project.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailModal;