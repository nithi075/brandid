import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Manifesto from './components/Manifesto/Manifesto'
import Symphony from './components/Symphony/Symphony'
import Services from './components/Services/Services'
import Workflow from './components/Workflow/Workflow'
import Industries from './components/Industries/Industries'
import Testimonials from './components/testimonials/Testimonials'
import BrickAgency from './components/BrickAgency/BrickAgency'
import CTA from './components/CTA/CTA'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Symphony />
        <Services />
        <Workflow />
        <Industries />
        <Testimonials />
        <BrickAgency />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
