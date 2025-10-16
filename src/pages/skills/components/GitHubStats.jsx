import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, GitBranch, Star, Eye, Users, Code, Calendar, 
  TrendingUp, GitCommit, ExternalLink, Download, Award 
} from 'lucide-react';

const GitHubStats = ({ githubStats }) => {
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num?.toString() || '0';
  };

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Python': '#3572A5',
      'C#': '#239120',
      'Java': '#b07219',
      'HTML': '#e34c26',
      'CSS': '#1572B6',
      'SQL': '#336791',
      'Shell': '#89e051',
      'Vue': '#2c3e50',
      'React': '#61dafb',
      'Node.js': '#68a063'
    };
    return colors[language] || '#6b7280';
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">GitHub Analytics & Contributions</h2>
        <p className="text-lg text-slate-400">
          Real-time insights into open source contributions and development activity
        </p>
      </div>

      {/* GitHub Profile Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
            <img 
              src={githubStats?.profile?.avatar} 
              alt="GitHub Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">{githubStats?.profile?.name}</h3>
            <p className="text-slate-400 mb-2">@{githubStats?.profile?.username}</p>
            <p className="text-slate-300">{githubStats?.profile?.bio}</p>
          </div>
          
          <motion.a
            href={githubStats?.profile?.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Github size={20} />
            <span>View Profile</span>
            <ExternalLink size={16} />
          </motion.a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
            <div className="text-2xl font-bold text-blue-400">{githubStats?.overview?.totalRepos}</div>
            <div className="text-sm text-slate-400">Repositories</div>
          </div>
          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
            <div className="text-2xl font-bold text-green-400">{githubStats?.overview?.totalCommits}</div>
            <div className="text-sm text-slate-400">Commits</div>
          </div>
          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
            <div className="text-2xl font-bold text-yellow-400">{githubStats?.overview?.totalStars}</div>
            <div className="text-sm text-slate-400">Stars Earned</div>
          </div>
          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
            <div className="text-2xl font-bold text-purple-400">{githubStats?.overview?.followers}</div>
            <div className="text-sm text-slate-400">Followers</div>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-slate-800/50 backdrop-blur-sm rounded-lg p-1">
        {['overview', 'repositories', 'activity'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
            }`}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6">

            {/* Language Distribution */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Language Distribution</h3>
              <div className="space-y-3">
                {githubStats?.languages?.map((lang, index) => (
                  <div key={lang.name} className="flex items-center space-x-4">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: getLanguageColor(lang.name) }}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-white font-medium">{lang.name}</span>
                        <span className="text-slate-400">{lang.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-2 rounded-full"
                          style={{ backgroundColor: getLanguageColor(lang.name) }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution Activity */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <GitCommit size={24} className="text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">{githubStats?.activity?.commitsThisWeek}</div>
                  <div className="text-sm text-slate-400">Commits This Week</div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <TrendingUp size={24} className="text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">{githubStats?.activity?.streak}</div>
                  <div className="text-sm text-slate-400">Day Streak</div>
                </div>
                <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                  <Award size={24} className="text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-400">{githubStats?.activity?.contributionsThisYear}</div>
                  <div className="text-sm text-slate-400">Contributions This Year</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'repositories' && (
          <motion.div
            key="repositories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {githubStats?.repositories?.slice(0, 9)?.map((repo, index) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedRepo(selectedRepo === repo.name ? null : repo.name)}>

                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-white text-lg truncate">{repo.name}</h3>
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Star size={16} />
                      <span className="text-sm">{repo.stars}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{repo.description}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      <span className="text-sm text-slate-400">{repo.language}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-slate-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <GitBranch size={14} />
                        <span>{repo.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={14} />
                        <span>{repo.watchers}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Updated {repo.lastUpdate}</span>
                    <motion.a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-400 hover:text-blue-300">
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'activity' && (
          <motion.div
            key="activity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">

            <h3 className="text-xl font-bold text-white mb-6">Contribution Timeline</h3>
            
            <div className="space-y-4">
              {githubStats?.timeline?.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg">
                  
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <GitCommit size={20} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{activity.action}</h4>
                    <p className="text-slate-400 text-sm">{activity.repository}</p>
                  </div>
                  
                  <div className="text-slate-400 text-sm">{activity.date}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GitHubStats;