import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Events from './components/Events'
import Portals from './components/Portals'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Portals />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
