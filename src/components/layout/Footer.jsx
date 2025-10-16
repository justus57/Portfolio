import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Twitter, Phone } from 'lucide-react'
import ScheduleCallModal from '../ui/ScheduleCallModal'

const Footer = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/justus57', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/joseph-justus-68232037b', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:justuskasyoki57@gmail.com', 
      label: 'Email' 
    },
    { 
      icon: Phone, 
      href: 'tel:+254748106202', 
      label: 'Phone' 
    },
  ]

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' },
  ]

  return (
    <footer className="bg-dark-800 border-t border-white/10">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link 
                to="/" 
                className="text-xl font-bold text-white hover:text-primary-400 transition-colors"
              >
                Joseph K Justus
              </Link>
              <p className="text-gray-400 text-sm">
                Software Developer specializing in Payment Systems, FinTech, and .NET Technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-primary-400 transition-colors rounded-lg hover:bg-white/5"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">Specializations</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Payment Systems Development</li>
                <li>FinTech Applications</li>
                <li>.NET Framework Solutions</li>
                <li>Mobile App Development</li>
                <li>Cloud Integration</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Available for new projects</p>
                <p>Phone: +254 748 106 202</p>
                <p>Response within 24 hours</p>
                <p>Worldwide (UTC+3)</p>
              </div>
              <button
                onClick={() => setIsScheduleModalOpen(true)}
                className="inline-block mt-4 btn btn-primary text-sm"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Joseph K Justus. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Call Modal */}
      <ScheduleCallModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </footer>
  )
}

export default Footer