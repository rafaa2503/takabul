import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={close}>
            <img src="/logo/takabul-logo.svg" alt="TAKABUL" />
          </Link>
          <ul className="nav-links">
            <li><a href="/#konzept" className="nav-link">Konzept</a></li>
            <li><a href="/#events" className="nav-link">Events</a></li>
            <li><a href="/#warum" className="nav-link">Warum TAKABUL</a></li>
            <li><a href="/#tickets" className="nav-link">Tickets</a></li>
          </ul>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Menü öffnen"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-overlay${menuOpen ? ' open' : ''}`}>
        <button className="nav-overlay-close" onClick={close} aria-label="Schliessen">×</button>
        <a href="/" className="nav-link" onClick={close}>Start</a>
        <a href="/#konzept" className="nav-link" onClick={close}>Konzept</a>
        <a href="/#events" className="nav-link" onClick={close}>Events</a>
        <a href="/#warum" className="nav-link" onClick={close}>Warum TAKABUL</a>
        <a href="/#tickets" className="nav-link" onClick={close}>Tickets</a>
      </div>
    </>
  )
}
