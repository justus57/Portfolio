import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye, ChevronRight } from 'lucide-react';

const RecentPosts = ({ posts }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Clock size={20} className="mr-2 text-blue-400" />
        Recent Posts
      </h3>
      
      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5 }}>
            
            <div className="flex gap-3">
              {/* Thumbnail */}
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors line-clamp-2 text-sm mb-2">
                  {post.title}
                </h4>
                
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{formatDate(post.publishedAt)}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={10} />
                    <span>{post.readTime}m</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={10} />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
              
              {/* Arrow */}
              <ChevronRight 
                size={16} 
                className="text-slate-400 group-hover:text-blue-400 transition-all group-hover:translate-x-1 flex-shrink-0 mt-1" 
              />
            </div>
          </motion.article>
        ))}
      </div>

      <motion.button
        className="w-full mt-6 py-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
        whileHover={{ scale: 1.02 }}>
        View All Articles →
      </motion.button>
    </div>
  );
};

export default RecentPosts;