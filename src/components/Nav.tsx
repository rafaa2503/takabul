import { useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Über uns' },
  { href: '#features', label: 'Kernfunktionen' },
  { href: '#download', label: 'Herunterladen' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontakt' },
  { href: '#investors', label: 'Investoren' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="ss-nav">
      <div className="ss-nav__inner">
        <a href="#home" className="ss-nav__logo">
          <span className="ss-nav__logo-study">Study</span>
          <span className="ss-nav__logo-swiss">Swiss</span>
        </a>

        <ul className="ss-nav__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="ss-nav__link">{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="ss-nav__link ss-nav__cta">Kontaktiere uns</a>
          </li>
        </ul>

        <button
          className="ss-nav__hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Menü öffnen"
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      <div className={`ss-nav__mobile ${open ? 'is-open' : ''}`}>
        <ul className="ss-nav__mobile-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="ss-nav__link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="ss-nav__link ss-nav__cta" onClick={() => setOpen(false)}>
              Kontaktiere uns
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
