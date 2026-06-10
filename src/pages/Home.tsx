import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SpiritualBlessing from '../components/SpiritualBlessing'
import AboutTakabul from '../components/AboutTakabul'
import Events from '../components/Events'
import TicketShop from '../components/TicketShop'
import WhyTakabul from '../components/WhyTakabul'
import NaseebQuote from '../components/NaseebQuote'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SpiritualBlessing />
      <AboutTakabul />
      <Events />
      <TicketShop />
      <WhyTakabul />
      <NaseebQuote />
      <Footer />
    </>
  )
}
