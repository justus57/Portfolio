import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Page imports
import Homepage from './pages/homepage'
import Projects from './pages/projects'
import About from './pages/about'
import Skills from './pages/skills'
import Testimonials from './pages/testimonials'
import Blog from './pages/blog'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App