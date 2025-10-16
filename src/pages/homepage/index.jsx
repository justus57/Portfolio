import React from 'react'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import FeaturedProjects from './components/FeaturedProjects'
import TechStack from './components/TechStack'
import CallToAction from './components/CallToAction'

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <TechStack />
      <CallToAction />
    </div>
  )
}

export default Homepage