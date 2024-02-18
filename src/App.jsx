import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Banner />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default App