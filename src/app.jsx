import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { HeroSection } from './Components/HeroSection'
import { Features } from './Components/Features'
import Testimonials from './Components/Testimonials'
import { Pricing } from './Components/Pricing'
import { Footer } from './Components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </Router>
  )
}

export { App }
