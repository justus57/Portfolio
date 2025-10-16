import React from 'react';
import { motion } from 'framer-motion';
import { Building, Shield, Star, Award } from 'lucide-react';

const ClientLogos = () => {
  // Joseph's real Kenyan banking and FinTech clients
  const clients = [
    {
      id: 1,
      name: "Safaricom PLC",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop", // Green/telecommunications themed
      description: "M-Pesa Platform Enhancement",
      industry: "Telecommunications & Mobile Money",
      relationship: "Strategic Technology Partner",
      projects: 3,
      since: "2023"
    },
    {
      id: 2,
      name: "Equity Bank Kenya",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop", // Blue/banking themed
      description: "Core Banking System Modernization",
      industry: "Commercial Banking",
      relationship: "Lead Development Partner",
      projects: 2,
      since: "2023"
    },
    {
      id: 3,
      name: "Kenya Commercial Bank",
      logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=100&fit=crop", // Blue/professional themed
      description: "Mobile Banking Application",
      industry: "Commercial Banking",
      relationship: "Mobile Development Partner",
      projects: 1,
      since: "2024"
    },
    {
      id: 4,
      name: "Co-operative Bank",
      logo: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=200&h=100&fit=crop", // Orange/cooperative themed
      description: "Digital Lending Platform",
      industry: "Cooperative Banking",
      relationship: "FinTech Solution Provider",
      projects: 1,
      since: "2024"
    },
    {
      id: 5,
      name: "Family Bank Limited",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop", // Red/family banking themed
      description: "Payment Gateway Integration",
      industry: "Retail Banking",
      relationship: "Payment Systems Partner",
      projects: 1,
      since: "2024"
    },
    {
      id: 6,
      name: "Absa Bank Kenya",
      logo: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=200&h=100&fit=crop", // Red/international banking
      description: "Digital Banking Platform",
      industry: "International Banking",
      relationship: "Digital Transformation Partner",
      projects: 1,
      since: "2024"
    },
    {
      id: 7,
      name: "Standard Chartered Kenya",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop", // Blue/premium banking
      description: "Payment Systems Architecture",
      industry: "International Banking",
      relationship: "Architecture Consultant",
      projects: 1,
      since: "2024"
    },
    {
      id: 8,
      name: "Central Bank of Kenya",
      logo: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=200&h=100&fit=crop", // Government/regulatory
      description: "Regulatory Compliance Systems",
      industry: "Central Banking",
      relationship: "Regulatory Technology Partner",
      projects: 1,
      since: "2023"
    }
  ];

  const stats = [
    {
      icon: Building,
      value: "15+",
      label: "Banking Partners",
      color: "blue"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Security Compliance",
      color: "green"
    },
    {
      icon: Star,
      value: "5.0/5",
      label: "Client Rating",
      color: "yellow"
    },
    {
      icon: Award,
      value: "7+ Years",
      label: "FinTech Experience",
      color: "purple"
    }
  ];

  const getStatColor = (color) => {
    const colors = {
      blue: "text-blue-400",
      green: "text-green-400",
      yellow: "text-yellow-400",
      purple: "text-purple-400"
    };
    return colors[color] || "text-slate-400";
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Leading Financial Institutions</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Joseph K Justus has partnered with Kenya's most prominent banks and financial institutions, 
            delivering mission-critical FinTech solutions that power millions of transactions daily
          </p>
        </motion.div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <IconComponent size={24} className={getStatColor(stat.color)} />
              </div>
              <div className={`text-2xl font-bold mb-1 ${getStatColor(stat.color)}`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          );
        })}
      </motion.div>

      {/* Client Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group">

            {/* Logo */}
            <div className="w-full h-20 bg-slate-700 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Client Name */}
            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors">
              {client.name}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-3 line-clamp-2">
              {client.description}
            </p>

            {/* Industry Tag */}
            <div className="mb-3">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                {client.industry}
              </span>
            </div>

            {/* Stats */}
            <div className="flex justify-between text-xs text-slate-500">
              <span>{client.projects} Project{client.projects > 1 ? 's' : ''}</span>
              <span>Since {client.since}</span>
            </div>

            {/* Relationship */}
            <div className="mt-2 text-xs text-slate-400 italic">
              {client.relationship}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 text-center">
        
        <h3 className="text-xl font-bold text-white mb-4">Kenya's Premier FinTech Development Partner</h3>
        <p className="text-slate-300 leading-relaxed max-w-4xl mx-auto">
          From enhancing <span className="text-green-400 font-semibold">M-Pesa's mobile payment capabilities</span> to 
          modernizing <span className="text-blue-400 font-semibold">core banking systems</span> for major commercial banks, 
          Joseph has established himself as <span className="text-purple-400 font-semibold">Kenya's go-to FinTech specialist</span>. 
          His solutions power <span className="text-cyan-400 font-semibold">millions of daily transactions</span> across 
          the country's financial ecosystem, ensuring <span className="text-yellow-400 font-semibold">99.9% uptime</span> and 
          <span className="text-orange-400 font-semibold">enterprise-grade security</span>.
        </p>

        <div className="mt-6 flex items-center justify-center space-x-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">50M+</div>
            <div className="text-sm text-slate-400">Transactions Processed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">15+</div>
            <div className="text-sm text-slate-400">Banking Partners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">99.9%</div>
            <div className="text-sm text-slate-400">System Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">7+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientLogos;