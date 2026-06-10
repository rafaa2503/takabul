import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { sanityClient, urlFor } from '../lib/sanityClient'
import { footerQuery, type FooterContent } from '../lib/queries'

const defaultContent: FooterContent = {
  footerTagline1: 'Islamic Speed Dating',
  footerTagline2: 'Ein respektvoller Rahmen für ehrliche Begegnungen.',
  footerNavTitle: 'Navigation',
  navLinkStart: 'Start',
  navLinkEvents: 'Events',
  navLinkTickets: 'Tickets',
  footerAboutLink: 'Über TAKABUL',
  footerContactTitle: 'Kontakt',
  contactEmail: 'salam@takabul.com',
  footerImpressumLink: 'Impressum',
  footerDatenschutzLink: 'Datenschutz',
  footerCopyright: '© 2026 TAKABUL. Alle Rechte vorbehalten.',
  footerMotto: 'Bismillah · Barakah · Naseeb',
}

export default function Footer() {
  const [content, setContent] = useState<FooterContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<FooterContent>(footerQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const logoSrc = content.logoImage?.asset
    ? urlFor(content.logoImage).width(240).url()
    : '/logo/takabul-logo.svg'

  return (
    <footer className="footer" data-loading={loading}>
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img className="footer-logo" src={logoSrc} alt="TAKABUL" />
            <p>{content.footerTagline1}</p>
            <p>{content.footerTagline2}</p>
          </div>

          <div className="footer-col">
            <p className="footer-nav-title">{content.footerNavTitle}</p>
            <Link to="/">{content.navLinkStart}</Link>
            <a href="/#events">{content.navLinkEvents}</a>
            <a href="/#tickets">{content.navLinkTickets}</a>
            <a href="/#konzept">{content.footerAboutLink}</a>
          </div>

          <div className="footer-col">
            <p className="footer-nav-title">{content.footerContactTitle}</p>
            <a href={`mailto:${content.contactEmail}`}>{content.contactEmail}</a>
            <Link to="/impressum">{content.footerImpressumLink}</Link>
            <Link to="/datenschutz">{content.footerDatenschutzLink}</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{content.footerCopyright}</p>
          <p>{content.footerMotto}</p>
        </div>
      </div>
    </footer>
  )
}
