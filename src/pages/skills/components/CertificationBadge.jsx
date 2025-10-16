import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, CheckCircle, AlertCircle } from 'lucide-react';

const CertificationBadge = ({ certifications }) => {
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <CheckCircle size={16} className="text-emerald-400" />;
      case 'expired':
        return <AlertCircle size={16} className="text-red-400" />;
      default:
        return <Award size={16} className="text-blue-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'border-emerald-500/50 bg-emerald-500/10';
      case 'expired':
        return 'border-red-500/50 bg-red-500/10';
      default:
        return 'border-blue-500/50 bg-blue-500/10';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Professional Certifications</h2>
        <p className="text-lg text-slate-400">
          Industry-recognized certifications validating technical expertise and professional competency
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications?.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 bg-slate-700 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={cert.badgeUrl} 
                  alt={cert.badgeAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={`px-2 py-1 rounded-full border ${getStatusColor(cert.status)} flex items-center space-x-1`}>
                {getStatusIcon(cert.status)}
                <span className="text-xs font-medium capitalize">{cert.status}</span>
              </div>
            </div>

            {/* Certification Name */}
            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
              {cert.name}
            </h3>

            {/* Issuer */}
            <p className="text-blue-400 font-medium mb-4">{cert.issuer}</p>

            {/* Skills Covered */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-400 mb-2">Skills Covered</h4>
              <div className="flex flex-wrap gap-1">
                {cert.skills?.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Calendar size={14} />
                  <span>Issued:</span>
                </div>
                <span className="text-white">{cert.issueDate}</span>
              </div>
              
              {cert.expiryDate && (
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Calendar size={14} />
                    <span>Expires:</span>
                  </div>
                  <span className="text-white">{cert.expiryDate}</span>
                </div>
              )}
              
              <div className="text-xs text-slate-500">
                ID: {cert.credentialId}
              </div>
            </div>

            {/* Verification Link */}
            <motion.a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium group/link w-full justify-center py-2 border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors">
              
              <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
              <span>Verify Credential</span>
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Certification Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-6">
        
        <h3 className="text-lg font-bold text-white mb-4">Certification Summary</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-400">{certifications?.length || 0}</div>
            <div className="text-sm text-slate-400">Total Certifications</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">
              {certifications?.filter(cert => cert.status.toLowerCase() === 'active')?.length || 0}
            </div>
            <div className="text-sm text-slate-400">Active</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">
              {new Set(certifications?.flatMap(cert => cert.skills)).size || 0}
            </div>
            <div className="text-sm text-slate-400">Skills Validated</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">
              {new Set(certifications?.map(cert => cert.issuer)).size || 0}
            </div>
            <div className="text-sm text-slate-400">Issuers</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationBadge;