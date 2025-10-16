import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ScheduleCallModal from '../ui/ScheduleCallModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/90 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-white hover:text-primary-400 transition-colors"
          >
            Joseph K Justus
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary-400 ${
                  location.pathname === item.path 
                    ? 'text-primary-400' 
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsScheduleModalOpen(true)}
              className="btn btn-outline text-white border-white/20 hover:bg-white/10"
            >
              Schedule Call
            </button>
            <a 
              href="/Joseph-Justus-Resume.pdf" 
              className="btn btn-primary"
              download="Joseph-Justus-Resume.pdf"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-primary-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark-800/95 backdrop-blur-lg border-b border-white/10">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={`px-4 py-3 font-medium transition-colors hover:bg-white/10 ${
                    location.pathname === item.path 
                      ? 'text-primary-400 bg-white/5' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3 space-y-2">
                <button 
                  onClick={() => {
                    setIsScheduleModalOpen(true);
                    toggleMenu();
                  }}
                  className="btn btn-outline w-full text-white border-white/20"
                >
                  Schedule Call
                </button>
                <a 
                  href="/Joseph-Justus-Resume.pdf" 
                  className="btn btn-primary w-full"
                  download="Joseph-Justus-Resume.pdf"
                  onClick={toggleMenu}
                >
                  Download CV
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Schedule Call Modal */}
      <ScheduleCallModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </header>
  )
}

export default Header