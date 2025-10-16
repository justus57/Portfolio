import React from 'react'
import { motion } from 'framer-motion'

const TechStack = () => {
  const categories = [
    {
      title: 'Backend Excellence',
      description: 'Robust server-side solutions and APIs',
      technologies: [
        { name: 'C# / .NET Core', proficiency: 95 },
        { name: 'ASP.NET Core', proficiency: 93 },
        { name: 'Node.js', proficiency: 85 },
        { name: 'Python', proficiency: 88 }
      ],
      average: 90,
      icon: '⚙️'
    },
    {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces',
      technologies: [
        { name: 'React.js', proficiency: 88 },
        { name: 'JavaScript', proficiency: 92 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'HTML/CSS', proficiency: 90 }
      ],
      average: 89,
      icon: '⚛️'
    },
    {
      title: 'Mobile & Cloud',
      description: 'Cross-platform mobile and cloud solutions',
      technologies: [
        { name: 'Flutter', proficiency: 87 },
        { name: 'Dart', proficiency: 85 },
        { name: 'Azure', proficiency: 89 },
        { name: 'Firebase', proficiency: 82 }
      ],
      average: 86,
      icon: '📱'
    }
  ]

  const additionalSkills = [
    'Payment Systems', 'FinTech APIs', 'OAuth 2.0', 'GraphQL', 'SQL Server',
    'MongoDB', 'Express.js', 'Bootstrap', 'Git/GitHub', 'Visual Studio',
    'Postman', 'Clean Architecture', 'Microservices', 'REST APIs'
  ]

  return (
    <section className="section-padding bg-dark-800/30">
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
            Technology Stack & Proficiency
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full development lifecycle, from modern 
            frontend frameworks to enterprise backend systems and cloud infrastructure.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-900 border border-white/10 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {category.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-4 mb-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {tech.name}
                      </span>
                      <span className="text-primary-400 font-bold">
                        {tech.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Average */}
              <div className="text-center pt-4 border-t border-white/10">
                <span className="text-gray-400 text-sm">Avg. Proficiency</span>
                <div className="text-2xl font-bold text-primary-400 mt-1">
                  {category.average}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-dark-700 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-primary-500/30 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack