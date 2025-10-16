import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Calendar, FileText, ExternalLink, 
  Phone, Mail, Award, Zap, Shield, TrendingUp 
} from 'lucide-react';

const TestimonialCTA = () => {
  const ctaFeatures = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "7+ years delivering FinTech solutions for Kenya's leading banks",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "100% PCI DSS compliance and bank-grade security standards",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "50M+ transactions processed with 99.9% system uptime",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Rapid Delivery",
      description: "Average 7.2 months project delivery with 100% success rate",
      color: "orange"
    }
  ];

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "Start a Discussion",
      description: "Let's talk about your FinTech project requirements",
      action: "Send Message",
      href: "mailto:justuskasyoki57@gmail.com?subject=Project Discussion&body=Hi Joseph,%0D%0A%0D%0AI'm interested in discussing a FinTech project with you.%0D%0A%0D%0AProject Details:%0D%0A- Type: %0D%0A- Timeline: %0D%0A- Budget Range: %0D%0A%0D%0ABest regards",
      color: "blue",
      primary: true
    },
    {
      icon: Calendar,
      title: "Book Teams Meeting",
      description: "Schedule a free 30-minute Microsoft Teams consultation",
      action: "Book Meeting",
      href: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_joseph_justus@teams.com",
      color: "purple",
      primary: false
    },
    {
      icon: Phone,
      title: "Call Directly",
      description: "Speak with me directly about your project needs",
      action: "Call Now",
      href: "tel:+254748106202",
      color: "green",
      primary: false
    },
    {
      icon: FileText,
      title: "Request Proposal",
      description: "Get a detailed project proposal and timeline",
      action: "Request Quote",
      href: "mailto:justuskasyoki57@gmail.com?subject=Project Proposal Request&body=Hi Joseph,%0D%0A%0D%0AI would like to request a detailed proposal for my project.%0D%0A%0D%0AProject Details:%0D%0A- Industry: %0D%0A- Project Type: %0D%0A- Expected Timeline: %0D%0A- Budget Range: %0D%0A- Key Requirements: %0D%0A%0D%0APlease let me know if you need any additional information.%0D%0A%0D%0ABest regards",
      color: "orange",
      primary: false
    }
  ];

  const getColorClasses = (color, isPrimary = false) => {
    const colors = {
      blue: {
        bg: isPrimary ? "bg-blue-600" : "bg-blue-500/20",
        text: isPrimary ? "text-white" : "text-blue-400",
        border: "border-blue-500/30",
        hover: isPrimary ? "hover:bg-blue-700" : "hover:bg-blue-500/30"
      },
      purple: {
        bg: isPrimary ? "bg-purple-600" : "bg-purple-500/20",
        text: isPrimary ? "text-white" : "text-purple-400",
        border: "border-purple-500/30",
        hover: isPrimary ? "hover:bg-purple-700" : "hover:bg-purple-500/30"
      },
      green: {
        bg: isPrimary ? "bg-green-600" : "bg-green-500/20",
        text: isPrimary ? "text-white" : "text-green-400",
        border: "border-green-500/30",
        hover: isPrimary ? "hover:bg-green-700" : "hover:bg-green-500/30"
      },
      orange: {
        bg: isPrimary ? "bg-orange-600" : "bg-orange-500/20",
        text: isPrimary ? "text-white" : "text-orange-400",
        border: "border-orange-500/30",
        hover: isPrimary ? "hover:bg-orange-700" : "hover:bg-orange-500/30"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8 lg:p-12">

      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Partner with Joseph K Justus to build your next FinTech solution. 
            From mobile payment systems to core banking modernization, 
            let's create measurable impact for your financial institution.
          </p>
        </motion.div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {ctaFeatures.map((feature, index) => {
          const IconComponent = feature.icon;
          const colorClasses = getColorClasses(feature.color);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center">
              
              <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4 border ${colorClasses.border}`}>
                <IconComponent size={24} className={colorClasses.text} />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {contactOptions.map((option, index) => {
          const IconComponent = option.icon;
          const colorClasses = getColorClasses(option.color, option.primary);
          
          return (
            <motion.a
              key={index}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : '_self'}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`block p-6 ${colorClasses.bg} border ${colorClasses.border} rounded-xl ${colorClasses.hover} transition-all duration-300 group`}>

              <div className="flex items-start space-x-4">
                <div className={`p-3 ${option.primary ? 'bg-white/20' : colorClasses.bg} rounded-lg border ${colorClasses.border}`}>
                  <IconComponent size={24} className={option.primary ? 'text-white' : colorClasses.text} />
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-lg font-bold mb-2 ${option.primary ? 'text-white' : colorClasses.text}`}>
                    {option.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${option.primary ? 'text-white/80' : 'text-slate-400'}`}>
                    {option.description}
                  </p>
                  
                  <div className={`inline-flex items-center space-x-2 font-medium ${option.primary ? 'text-white' : colorClasses.text} group-hover:translate-x-1 transition-transform`}>
                    <span>{option.action}</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-slate-800/50 border border-slate-600 rounded-xl p-6 text-center">
        
        <h3 className="text-xl font-bold text-white mb-4">Direct Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center space-x-3">
            <Mail size={20} className="text-blue-400" />
            <div>
              <div className="text-sm text-slate-400">Email</div>
              <div className="text-white font-medium">justuskasyoki57@gmail.com</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <Phone size={20} className="text-green-400" />
            <div>
              <div className="text-sm text-slate-400">Phone (Kenya)</div>
              <div className="text-white font-medium">+254 700 000 000</div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-600">
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="font-semibold text-white">Average Response Time:</span> Within 24 hours | 
            <span className="font-semibold text-blue-400 ml-2">Timezone:</span> East Africa Time (EAT) | 
            <span className="font-semibold text-green-400 ml-2">Languages:</span> English, Swahili
          </p>
        </div>
      </motion.div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mt-8 pt-8 border-t border-slate-600">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">24hrs</div>
            <div className="text-xs text-slate-400">Response Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">100%</div>
            <div className="text-xs text-slate-400">Project Success</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">15+</div>
            <div className="text-xs text-slate-400">Banking Clients</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">7+</div>
            <div className="text-xs text-slate-400">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">5.0/5</div>
            <div className="text-xs text-slate-400">Client Rating</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TestimonialCTA;