import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'DahabshiilWalletApp',
      description: 'Mobile wallet application built with Flutter for secure financial transactions and payments. Features modern UI/UX design with comprehensive payment functionalities.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=360&fit=crop',
      tags: ['Flutter', 'Dart', 'Mobile Development', 'FinTech'],
      metrics: [
        { label: 'Platform', value: 'Mobile' },
        { label: 'Status', value: 'Active' },
        { label: 'Category', value: 'FinTech' }
      ],
      rating: 4.9,
      status: 'Live Production',
      category: 'Mobile FinTech',
      githubUrl: 'https://github.com/justus57/DahabshiilWalletApp'
    },
    {
      id: 2,
      title: 'Clean Architecture .NET Core',
      description: 'Implementation of clean architecture pattern in .NET Core, demonstrating best practices for scalable enterprise applications with proper separation of concerns.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=360&fit=crop',
      tags: ['C#', '.NET Core', 'Clean Architecture', 'Enterprise'],
      metrics: [
        { label: 'Pattern', value: 'Clean' },
        { label: 'Type', value: 'Enterprise' },
        { label: 'Language', value: 'C#' }
      ],
      rating: 4.8,
      status: 'Enterprise Architecture',
      category: 'Backend',
      githubUrl: 'https://github.com/justus57/Clean-Architecture-Dotnet-Core'
    },
    {
      id: 3,
      title: 'MicroServices Architecture',
      description: 'Sample microservices architecture implementation showcasing distributed system design patterns, API gateways, and service communication strategies.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&fit=crop',
      tags: ['C#', 'Microservices', 'Docker', 'API Gateway'],
      metrics: [
        { label: 'Services', value: 'Multiple' },
        { label: 'Pattern', value: 'Distributed' },
        { label: 'License', value: 'MIT' }
      ],
      rating: 4.7,
      status: 'Architecture Sample',
      category: 'Microservices',
      githubUrl: 'https://github.com/justus57/MicroServices'
    }
  ]

  return (
    <section className="section-padding">
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
            Projects That Make an Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore some of our most successful projects that demonstrate technical 
            excellence, scalable architecture, and measurable business results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(project.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-primary-400">
                    {project.rating}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-4 bg-dark-800 rounded-lg border border-white/10">
                      <div className="text-lg font-bold text-primary-400">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-700 border border-white/10 rounded-lg text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button className="btn btn-primary">
                    View Details
                  </button>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline text-white border-white/20 hover:bg-white/10"
                  >
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                  <button className="btn btn-ghost text-gray-300 hover:text-white">
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="/projects" 
            className="btn btn-primary text-lg px-8 py-4"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects