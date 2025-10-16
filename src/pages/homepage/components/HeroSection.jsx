import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Code2, Database, FileCode, Cloud, Server, CreditCard, FolderOpen, Calendar, Download, ChevronDown, Zap } from 'lucide-react'
import ScheduleCallModal from '../../../components/ui/ScheduleCallModal'

const HeroSection = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const codeSnippets = [
    `const developer = {
  name: "Joseph K Justus",
  expertise: ["React", "C#", ".NET"],
  passion: "Building FinTech solutions"
};`,
    `async function integratePayment() {
  const solution = await buildSecure();
  return solution.deploy();
}`,
    `class FinTechExpert {
  constructor() {
    this.skills = new Set(['Frontend', 'Backend']);
    this.results = 'Enterprise Grade';
  }
}`
  ]

  const technologies = [
    { name: 'React 18', icon: Code2 },
    { name: 'C# / .NET', icon: Database },
    { name: 'TypeScript', icon: FileCode },
    { name: 'Azure', icon: Cloud },
    { name: 'SQL Server', icon: Server },
    { name: 'FinTech APIs', icon: CreditCard }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeSnippet((prev) => (prev + 1) % codeSnippets.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-2xl"
          variants={floatingVariants}
          animate="animate"
        >
          <pre className="text-xs text-slate-400 font-mono">
            {codeSnippets[currentCodeSnippet]}
          </pre>
        </motion.div>

        <motion.div
          className="absolute top-40 right-16 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-3 shadow-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <div className="flex items-center space-x-2">
            <Code2 size={16} className="text-blue-400" />
            <span className="text-sm font-mono text-white">Enterprise Ready</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-lg p-3 shadow-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        >
          <div className="flex items-center space-x-2">
            <Zap size={16} className="text-green-400" />
            <span className="text-sm font-mono text-white">Performance Optimized</span>
          </div>
        </motion.div>
      </div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed w-6 h-6 bg-blue-400/10 rounded-full pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">Available for New Projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Crafting{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
            <br />
            That Scale & Perform
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate Software Developer specializing in{' '}
            <span className="text-blue-400 font-semibold">Payment Systems</span>,{' '}
            <span className="text-blue-400 font-semibold">C#/.NET</span>, and{' '}
            <span className="text-blue-400 font-semibold">FinTech integrations</span>.
            Transforming complex requirements into elegant, scalable solutions that deliver measurable business impact.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  className="flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 hover:border-blue-400/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon size={16} className="text-blue-400" />
                  <span className="text-sm font-medium text-white">{tech.name}</span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FolderOpen size={18} />
              View My Projects
            </motion.a>
            
            <motion.button
              onClick={() => setIsScheduleModalOpen(true)}
              className="flex items-center gap-2 border border-slate-600 hover:border-slate-500 text-white font-medium px-8 py-4 rounded-lg transition-colors hover:bg-slate-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={18} />
              Schedule a Call
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 text-green-400 hover:text-green-300 font-medium px-8 py-4 rounded-lg transition-colors hover:bg-green-400/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col items-center"
          >
            <span className="text-sm text-slate-400 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={24} className="text-slate-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Schedule Call Modal */}
      <ScheduleCallModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </section>
  )
}

export default HeroSection