import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Star, Award, TrendingUp, Building, Smartphone, 
  Code, DollarSign, Clock, Shield, Target, Zap 
} from 'lucide-react';

const StatsOverview = ({ testimonials }) => {
  // Calculate dynamic stats from testimonials
  const stats = {
    totalClients: testimonials?.length || 0,
    averageRating: testimonials?.length > 0 
      ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
      : 0,
    totalProjects: testimonials?.length || 0,
    successRate: "100%",
    avgProjectDuration: "7.2 months",
    clientSatisfaction: "98.5%",
    totalTransactions: "50M+",
    systemUptime: "99.9%"
  };

  const statCards = [
    {
      id: 1,
      title: "Banking Clients",
      value: stats.totalClients,
      subtitle: "Leading Financial Institutions",
      icon: Building,
      color: "blue",
      trend: "+25%",
      description: "Major Kenyan banks and FinTech companies"
    },
    {
      id: 2,
      title: "Average Rating",
      value: `${stats.averageRating}/5`,
      subtitle: "Client Satisfaction Score",
      icon: Star,
      color: "yellow",
      trend: "Excellent",
      description: "Consistently high client ratings"
    },
    {
      id: 3,
      title: "Project Success Rate",
      value: stats.successRate,
      subtitle: "On-time & On-budget Delivery",
      icon: Target,
      color: "green",
      trend: "Perfect",
      description: "All projects delivered successfully"
    },
    {
      id: 4,
      title: "Transactions Processed",
      value: stats.totalTransactions,
      subtitle: "Through Built Systems",
      icon: TrendingUp,
      color: "purple",
      trend: "+180%",
      description: "Daily transaction volume growth"
    },
    {
      id: 5,
      title: "System Uptime",
      value: stats.systemUptime,
      subtitle: "Platform Reliability",
      icon: Shield,
      color: "cyan",
      trend: "Stable",
      description: "Enterprise-grade reliability"
    },
    {
      id: 6,
      title: "Client Satisfaction",
      value: stats.clientSatisfaction,
      subtitle: "Overall Experience Rating",
      icon: Award,
      color: "orange",
      trend: "+15%",
      description: "Continuous improvement in service"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/20",
        text: "text-blue-400",
        border: "border-blue-500/30",
        icon: "text-blue-400"
      },
      yellow: {
        bg: "bg-yellow-500/20",
        text: "text-yellow-400",
        border: "border-yellow-500/30",
        icon: "text-yellow-400"
      },
      green: {
        bg: "bg-green-500/20",
        text: "text-green-400",
        border: "border-green-500/30",
        icon: "text-green-400"
      },
      purple: {
        bg: "bg-purple-500/20",
        text: "text-purple-400",
        border: "border-purple-500/30",
        icon: "text-purple-400"
      },
      cyan: {
        bg: "bg-cyan-500/20",
        text: "text-cyan-400",
        border: "border-cyan-500/30",
        icon: "text-cyan-400"
      },
      orange: {
        bg: "bg-orange-500/20",
        text: "text-orange-400",
        border: "border-orange-500/30",
        icon: "text-orange-400"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          
          <h2 className="text-3xl font-bold text-white mb-4">Impact & Performance Metrics</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Real numbers showcasing the tangible results and client satisfaction achieved 
            through Joseph's FinTech expertise and professional service delivery
          </p>
        </motion.div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {statCards.map((stat, index) => {
          const IconComponent = stat.icon;
          const colorClasses = getColorClasses(stat.color);
          
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">

              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${colorClasses.bg} border ${colorClasses.border}`}>
                  <IconComponent size={24} className={colorClasses.icon} />
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses.bg} ${colorClasses.text} border ${colorClasses.border}`}>
                  {stat.trend}
                </div>
              </div>

              {/* Value */}
              <div className="mb-3">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-lg font-medium text-slate-300">{stat.title}</div>
                <div className="text-sm text-slate-400">{stat.subtitle}</div>
              </div>

              {/* Description */}
              <div className="text-xs text-slate-500 leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8">

        <h3 className="text-2xl font-bold text-white mb-6 text-center">Project Excellence Overview</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Project Types */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <Code size={24} className="text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-2">
              {new Set(testimonials?.map(t => t.type))?.size || 0}
            </div>
            <div className="text-sm text-slate-400">Project Types</div>
            <div className="text-xs text-slate-500 mt-1">FinTech, Enterprise, Mobile</div>
          </div>

          {/* Industries Served */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
              <Building size={24} className="text-green-400" />
            </div>
            <div className="text-2xl font-bold text-green-400 mb-2">
              {new Set(testimonials?.map(t => t.industry))?.size || 0}
            </div>
            <div className="text-sm text-slate-400">Industries</div>
            <div className="text-xs text-slate-500 mt-1">Banking, Payments, Financial</div>
          </div>

          {/* Average Project Duration */}
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
              <Clock size={24} className="text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-2">{stats.avgProjectDuration}</div>
            <div className="text-sm text-slate-400">Avg Duration</div>
            <div className="text-xs text-slate-500 mt-1">Efficient delivery timeline</div>
          </div>

          {/* Technologies */}
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
              <Zap size={24} className="text-orange-400" />
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-2">15+</div>
            <div className="text-sm text-slate-400">Technologies</div>
            <div className="text-xs text-slate-500 mt-1">Modern tech stack</div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-8 pt-6 border-t border-slate-600 text-center">
          <p className="text-slate-300 leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold text-white">7+ years</span> of specialized FinTech experience, 
            delivering mission-critical payment systems for <span className="font-semibold text-blue-400">Kenya's leading financial institutions</span>.
            From M-Pesa integrations to core banking modernization, Joseph consistently delivers 
            <span className="font-semibold text-green-400"> enterprise-grade solutions</span> with 
            <span className="font-semibold text-purple-400"> measurable business impact</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsOverview;