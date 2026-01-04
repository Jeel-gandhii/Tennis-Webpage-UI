import React from 'react'
import Header from './Components/Header.jsx'
import HeroSection from './Components/herosection.jsx'
import AboutSection from './Components/aboutsection.jsx'
import Services from './Components/services.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <AboutSection/>
      <Services/>
    </div>
  )
}

export default App
