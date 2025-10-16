import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Mail, Download } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900/20 via-dark-900 to-dark-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a startup looking to build your MVP or an enterprise 
            needing to scale your existing systems, I'm here to help transform 
            your ideas into robust, scalable solutions.
          </p>
        </motion.div>

        {/* CTA Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Schedule Call */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-dark-800 border border-white/10 rounded-2xl p-8 text-center hover:border-primary-500/30 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/30 transition-colors">
              <Calendar className="text-primary-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Schedule a Call
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss your project requirements and how we can work together
            </p>
            <button className="btn btn-primary w-full group">
              Book Meeting
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Send Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-dark-800 border border-white/10 rounded-2xl p-8 text-center hover:border-primary-500/30 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/30 transition-colors">
              <Mail className="text-primary-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Send a Message
            </h3>
            <p className="text-gray-400 mb-6">
              Have a quick question? Drop me a line and I'll get back to you soon
            </p>
            <button className="btn btn-outline w-full text-white border-white/20 hover:bg-white/10 group">
              Send Email
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* View Work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-dark-800 border border-white/10 rounded-2xl p-8 text-center hover:border-primary-500/30 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/30 transition-colors">
              <Download className="text-primary-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              View My Work
            </h3>
            <p className="text-gray-400 mb-6">
              Explore detailed case studies and see examples of my development approach
            </p>
            <a 
              href="/projects" 
              className="btn btn-ghost w-full text-gray-300 hover:text-white group"
            >
              Browse Projects
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-dark-800 border border-white/10 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
              <span className="text-white font-semibold">
                Currently Available for New Projects
              </span>
            </div>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm accepting new client projects starting January 2025. 
            Let's discuss your timeline and requirements.
          </p>

          {/* Quick Features */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              Response within 24 hours
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              Available worldwide (UTC-5)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              Free initial consultation
            </div>
          </div>

          {/* Final CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button className="btn btn-primary text-lg px-8 py-4">
              Start a Conversation
            </button>
            <a 
              href="/resume.pdf" 
              className="btn btn-outline text-lg px-8 py-4 text-white border-white/20 hover:bg-white/10"
              download
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction