import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Metrics from '../components/Metrics'
import Features from '../components/Features'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Features />
        <About />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
