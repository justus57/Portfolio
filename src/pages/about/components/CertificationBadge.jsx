import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const CertificationBadge = ({ certification, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!certification) return null;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <CheckCircle size={16} className="text-emerald-400" />;
      case 'pending':
        return <Clock size={16} className="text-yellow-400" />;
      case 'expired':
        return <AlertCircle size={16} className="text-red-400" />;
      default:
        return <Award size={16} className="text-blue-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'border-emerald-500/50 bg-emerald-500/10';
      case 'pending':
        return 'border-yellow-500/50 bg-yellow-500/10';
      case 'expired':
        return 'border-red-500/50 bg-red-500/10';
      default:
        return 'border-blue-500/50 bg-blue-500/10';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group">

      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-slate-700 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src={certification.logo} 
                alt={certification.logoAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg leading-tight group-hover:text-blue-400 transition-colors">
                {certification.name}
              </h3>
              <p className="text-slate-400 text-sm">{certification.issuer}</p>
            </div>
          </div>
          
          <div className={`px-2 py-1 rounded-full border ${getStatusColor(certification.status)} flex items-center space-x-1`}>
            {getStatusIcon(certification.status)}
            <span className="text-xs font-medium capitalize">{certification.status}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {certification.description}
        </p>

        {/* Skills Covered */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-400 mb-2">Skills Covered</h4>
          <div className="flex flex-wrap gap-1">
            {certification.skillsCovered?.map((skill, idx) => (
              <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Dates & Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-slate-400">
              <Calendar size={14} />
              <span>Issued: {certification.issueDate}</span>
            </div>
            {certification.score && (
              <span className="text-emerald-400 font-medium">Score: {certification.score}</span>
            )}
          </div>
          
          {certification.expiryDate && (
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <Calendar size={14} />
              <span>Expires: {certification.expiryDate}</span>
            </div>
          )}
          
          {certification.credentialId && (
            <div className="text-xs text-slate-500">
              ID: {certification.credentialId}
            </div>
          )}
        </div>

        {/* Verification Link */}
        {certification.verificationUrl && (
          <motion.a
            href={certification.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium group/link">
            
            <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
            <span>Verify Credential</span>
          </motion.a>
        )}

        {/* Hover Effect Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

export default CertificationBadge;