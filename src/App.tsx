import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Tickets from './pages/Tickets'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import { lenis } from './lib/gsap-setup'
import './styles/global.css'
import './styles/components.css'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0 })
      return
    }

    window.setTimeout(() => {
      const target = document.querySelector(location.hash)
      if (target instanceof HTMLElement) {
        const top = target.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top, behavior: 'auto' })
        lenis.scrollTo(target, { offset: -72, duration: 1.2 })
      }
    }, 100)
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </BrowserRouter>
  )
}
