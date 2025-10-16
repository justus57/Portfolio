import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, Eye, Calendar, ChevronRight, User,
  TrendingUp, Building, Code2, Smartphone, Shield, Globe
} from 'lucide-react';

const BlogCard = ({ post, featured = false }) => {
  const {
    title,
    slug,
    excerpt,
    category,
    image,
    imageAlt,
    author,
    publishedAt,
    readTime,
    views,
    tags
  } = post;

  const categoryConfig = {
    'FinTech': { color: 'text-blue-400', bg: 'bg-blue-400/10', icon: TrendingUp },
    'Banking': { color: 'text-green-400', bg: 'bg-green-400/10', icon: Building },
    'Machine Learning': { color: 'text-purple-400', bg: 'bg-purple-400/10', icon: Code2 },
    'Mobile Development': { color: 'text-cyan-400', bg: 'bg-cyan-400/10', icon: Smartphone },
    'Compliance': { color: 'text-orange-400', bg: 'bg-orange-400/10', icon: Shield },
    'Payment Systems': { color: 'text-pink-400', bg: 'bg-pink-400/10', icon: Globe }
  };

  const CategoryIcon = categoryConfig[category]?.icon || Code2;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.article
      className={`bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 group ${
        featured ? 'lg:flex lg:gap-8' : ''
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}>

      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : 'w-full h-48'}`}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${categoryConfig[category]?.bg} ${categoryConfig[category]?.color}`}>
            <CategoryIcon size={14} />
            {category}
          </div>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-between' : ''}`}>
        <div>
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={14} />
              <span>{views} views</span>
            </div>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {title}
          </h3>

          {/* Excerpt */}
          <p className={`text-slate-300 leading-relaxed mb-4 ${
            featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'
          }`}>
            {excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md">
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded-md">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700">
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <User size={16} color="white" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">{author.name}</div>
              <div className="text-xs text-slate-400">{author.role}</div>
            </div>
          </div>

          {/* Read More */}
          <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
            <span className="text-sm font-medium">Read More</span>
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;