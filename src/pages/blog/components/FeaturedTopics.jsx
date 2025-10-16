import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUp } from 'lucide-react';

const FeaturedTopics = ({ topics, onTopicClick }) => {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <TrendingUp size={20} className="mr-2 text-blue-400" />
        Trending Topics
      </h3>
      
      <div className="space-y-3">
        {topics.map((topic, index) => (
          <motion.button
            key={topic.slug}
            onClick={() => onTopicClick(topic.slug)}
            className="w-full text-left p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5 }}>
            
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                {topic.name}
              </h4>
              <div className={`w-3 h-3 rounded-full ${topic.color}`}></div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">
                {topic.articleCount} articles
              </span>
              <div className="flex items-center gap-1 text-green-400">
                <ArrowUp size={12} />
                <span>+{topic.weeklyGrowth}%</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/20">
        <h4 className="font-medium text-white mb-2">💡 Pro Tip</h4>
        <p className="text-sm text-slate-300">
          Click on any trending topic to explore related articles and stay ahead of FinTech innovations.
        </p>
      </div>
    </div>
  );
};

export default FeaturedTopics;