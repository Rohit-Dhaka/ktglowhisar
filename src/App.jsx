
import './App.css'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import IndustriesSection from './components/IndustriesSection'
import Navbar from './components/Navbar'
import ProductsSection from './components/ProductsSection'
import StatsSection from './components/StatsSection'

import WhyChooseUs from './components/WhyChooseUs'
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <StatsSection/>
      <AboutSection/>
      <ProductsSection/>
      <WhyChooseUs/>
      <IndustriesSection/>      
      <Footer/>
    </>
  )
}

export default App
