import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import WorkFlow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
   <Navbar />
   <div className="max-w-7xl mx-auto pt-20 px-6">
   <HeroSection />
   <section id='Features'>
   <FeatureSection />
   </section>
   <section id='Workflow'>
   <WorkFlow />
   </section>
   <section id='Pricing'>
   <Pricing />
   </section>
   <section id='Testimonials'>
   <Testimonials />
   </section>
   <Footer />
   </div>
   </>
  )
}

export default App
