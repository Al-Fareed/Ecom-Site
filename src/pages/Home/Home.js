import React from 'react'
import './Home.css'
import HeroSection from './HeroSection'
import WhyMe from './WhyMe'
const Home = () => {
  return (
    <div className='home-container'>
      <HeroSection/>
      <WhyMe/>
    </div>
  )
}

export default Home
