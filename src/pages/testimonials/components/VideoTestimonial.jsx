import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, Pause, Star, MapPin, Calendar, ExternalLink, 
  Volume2, VolumeX, Maximize, Clock, Building 
} from 'lucide-react';

const VideoTestimonial = ({ testimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-slate-600'}
      />
    ));
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control the video player
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    // In a real implementation, this would control the video volume
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">

      {/* Video Player Section */}
      <div 
        className="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={handlePlayPause}>

        {/* Video Thumbnail */}
        <img 
          src={testimonial.thumbnail} 
          alt={testimonial.thumbnailAlt}
          className="w-full h-full object-cover"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
            {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
          </motion.button>
        </div>

        {/* Video Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          
          <div className="flex items-center justify-between">
            {/* Duration */}
            <div className="flex items-center space-x-2 text-white text-sm">
              <Clock size={14} />
              <span>{testimonial.duration}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleMuteToggle();
                }}
                className="text-white hover:text-blue-400 transition-colors">
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              
              <button
                onClick={(e) => e.stopPropagation()}
                className="text-white hover:text-blue-400 transition-colors">
                <Maximize size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Playing Indicator */}
        {isPlaying && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-red-600/90 backdrop-blur-sm rounded-full text-white text-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>LIVE</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Client Info */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500/30">
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
          </div>

          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-1">
              {renderStars(testimonial.rating)}
            </div>
            <div className="flex items-center space-x-1 text-slate-400 text-sm">
              <Calendar size={12} />
              <span>{testimonial.date}</span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-slate-300 text-lg leading-relaxed mb-4 italic border-l-4 border-blue-500/30 pl-4">
          "{testimonial.quote}"
        </blockquote>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {testimonial.projectTags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-600">
          <div className="flex items-center space-x-2 text-slate-400 text-sm">
            <MapPin size={14} />
            <span>{testimonial.client.location}</span>
            <Building size={14} className="ml-2" />
            <span>Banking</span>
          </div>

          <motion.a
            href={testimonial.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-600/30 transition-colors">
            <span>Watch Full Video</span>
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </div>

      {/* Video Progress Bar (Simulated) */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 30, ease: "linear" }}
            className="h-full bg-blue-500"
          />
        </div>
      )}
    </motion.div>
  );
};

export default VideoTestimonial;