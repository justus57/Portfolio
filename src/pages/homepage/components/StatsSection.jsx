import React from 'react'
import { motion } from 'framer-motion'

const StatsSection = () => {
  const stats = [
    {
      icon: '📊',
      number: '84+',
      label: 'GitHub Repositories',
      description: 'Active projects showcasing diverse technical expertise'
    },
    {
      icon: '🎯',
      number: '6+',
      label: 'Followers',
      description: 'Growing developer community and professional network'
    },
    {
      icon: '⚡',
      number: '5+',
      label: 'Years Experience',
      description: 'Deep expertise in FinTech and enterprise solutions'
    },
    {
      icon: '✨',
      number: '100%',
      label: 'Project Success',
      description: 'Consistent delivery of functional, scalable solutions'
    }
  ]

  const companies = [
    'DahabshiilWallet',
    'Microsoft Azure', 
    'FinTech Solutions',
    'Payment Systems',
    'Enterprise Apps'
  ]

  return (
    <section className="section-padding bg-dark-800/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that reflect commitment to excellence and client success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-dark-900 border border-white/10 rounded-2xl hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {stat.label}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-8">Technologies and domains I work with</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-gray-300 font-medium hover:text-white hover:border-primary-500/30 transition-all duration-300"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection