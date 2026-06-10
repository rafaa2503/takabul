import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { sanityClient, urlFor } from '../lib/sanityClient'
import { navQuery, type NavContent } from '../lib/queries'

const defaultContent: NavContent = {
  navLinkKonzept: 'Konzept',
  navLinkEvents: 'Events',
  navLinkWarum: 'Warum TAKABUL',
  navLinkTickets: 'Tickets',
  navLinkStart: 'Start',
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [content, setContent] = useState<NavContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<NavContent>(navQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

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

  const logoSrc = content.logoImage?.asset
    ? urlFor(content.logoImage).width(240).url()
    : '/logo/takabul-logo.svg'

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} data-loading={loading}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={close}>
            <img src={logoSrc} alt="TAKABUL" />
          </Link>
          <ul className="nav-links">
            <li><a href="/#konzept" className="nav-link">{content.navLinkKonzept}</a></li>
            <li><a href="/#events" className="nav-link">{content.navLinkEvents}</a></li>
            <li><a href="/#warum" className="nav-link">{content.navLinkWarum}</a></li>
            <li><a href="/#tickets" className="nav-link">{content.navLinkTickets}</a></li>
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
        <a href="/" className="nav-link" onClick={close}>{content.navLinkStart}</a>
        <a href="/#konzept" className="nav-link" onClick={close}>{content.navLinkKonzept}</a>
        <a href="/#events" className="nav-link" onClick={close}>{content.navLinkEvents}</a>
        <a href="/#warum" className="nav-link" onClick={close}>{content.navLinkWarum}</a>
        <a href="/#tickets" className="nav-link" onClick={close}>{content.navLinkTickets}</a>
      </div>
    </>
  )
}
