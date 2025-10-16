import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye, Mail, Calendar, Star, CheckCircle } from 'lucide-react';

const DownloadResume = () => {
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [isDownloading, setIsDownloading] = useState(false);

  const resumeFormats = [
    {
      type: 'pdf',
      label: 'PDF Resume',
      description: 'Professional format for applications',
      icon: FileText,
      size: '245 KB',
      features: ['ATS Optimized', 'Print Ready', 'Universal Format'],
      downloadUrl: '/Joseph-Justus-Resume.pdf'
    },
    {
      type: 'detailed',
      label: 'Detailed PDF',
      description: 'Comprehensive portfolio document',
      icon: FileText,
      size: '245 KB',
      features: ['Project Gallery', 'Technical Deep Dive', 'References'],
      downloadUrl: '/Joseph-Justus-Resume.pdf'
    }
  ];

  const resumeHighlights = [
    { label: 'Experience', value: '7+ Years', icon: Calendar },
    { label: 'Projects', value: '50+ Completed', icon: Star },
    { label: 'Technologies', value: '15+ Mastered', icon: CheckCircle },
    { label: 'Specialization', value: 'FinTech & Payment Systems', icon: Star }
  ];

  const handleDownload = async (format) => {
    setIsDownloading(true);
    
    try {
      // Find the selected format configuration
      const selectedResume = resumeFormats.find(resume => resume.type === format);
      
      if (selectedResume && selectedResume.downloadUrl) {
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = selectedResume.downloadUrl;
        link.download = 'Joseph-Justus-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log(`Downloaded ${format} resume successfully`);
      }
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePreview = () => {
    // Open the resume PDF in a new tab for preview
    window.open('/Joseph-Justus-Resume.pdf', '_blank');
  };

  const handleContactRequest = () => {
    window.location.href = 'mailto:justuskasyoki57@gmail.com?subject=Resume Request&body=Hi Joseph, I would like to request your resume.';
  };

  return (
    <div className="space-y-6">
      {/* Resume Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-xl p-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resumeHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <IconComponent size={20} className="text-blue-400" />
                </div>
                <div className="text-lg font-bold text-white">{highlight.value}</div>
                <div className="text-sm text-slate-400">{highlight.label}</div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Format Selection */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {resumeFormats.map((format) => {
          const IconComponent = format.icon;
          const isSelected = selectedFormat === format.type;
          
          return (
            <motion.div
              key={format.type}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedFormat(format.type)}
              className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                isSelected 
                  ? 'border-blue-500 bg-blue-500/10' 
                  : 'border-slate-700 hover:border-blue-500/50'
              }`}>
              
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-blue-500' : 'bg-slate-700'
                }`}>
                  <IconComponent size={24} color="white" />
                </div>
                
                <div className="flex-1">
                  <h3 className={`font-bold text-lg mb-1 ${
                    isSelected ? 'text-blue-400' : 'text-white'
                  }`}>
                    {format.label}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">{format.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{format.size}</span>
                    {isSelected && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} color="white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-3 space-y-1">
                    {format.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                        <span className="text-xs text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4">
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleDownload(selectedFormat)}
          disabled={isDownloading}
          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
          
          {isDownloading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Downloading...</span>
            </>
          ) : (
            <>
              <Download size={20} />
              <span>Download Resume</span>
            </>
          )}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePreview}
          className="flex items-center justify-center space-x-2 bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors">
          
          <Eye size={20} />
          <span>Preview</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleContactRequest}
          className="flex items-center justify-center space-x-2 border-2 border-blue-500 text-blue-400 font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
          
          <Mail size={20} />
          <span>Request via Email</span>
        </motion.button>
      </motion.div>

      {/* Resume Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
        
        <h3 className="text-lg font-bold text-white mb-4">Resume Information</h3>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Last Updated:</span>
            <span className="text-white">October 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Version:</span>
            <span className="text-white">v2.4</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Focus Areas:</span>
            <span className="text-white">Payment Systems, FinTech, .NET Development</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Languages:</span>
            <span className="text-white">English</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-700">
          <p className="text-slate-400 text-xs">
            This resume showcases 7+ years of experience in Payment Systems Development, 
            FinTech solutions, and .NET Framework Technologies. Includes detailed project 
            information, technical skills, and professional achievements.
          </p>
        </div>
      </motion.div>

      {/* Contact Note */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center">
        
        <p className="text-slate-400 text-sm">
          For custom resume formats or additional information, feel free to{' '}
          <a 
            href="mailto:justuskasyoki57@gmail.com"
            className="text-blue-400 hover:text-blue-300 underline">
            contact me directly
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default DownloadResume;