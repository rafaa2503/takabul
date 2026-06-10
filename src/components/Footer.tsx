import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img className="footer-logo" src="/logo/takabul-logo.svg" alt="TAKABUL" />
            <p>Islamic Speed Dating</p>
            <p>Ein respektvoller Rahmen für ehrliche Begegnungen.</p>
          </div>

          <div className="footer-col">
            <p className="footer-nav-title">Navigation</p>
            <Link to="/">Start</Link>
            <a href="/#events">Events</a>
            <a href="/#tickets">Tickets</a>
            <a href="/#konzept">Über TAKABUL</a>
          </div>

          <div className="footer-col">
            <p className="footer-nav-title">Kontakt</p>
            <a href="mailto:salam@takabul.com">salam@takabul.com</a>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TAKABUL. Alle Rechte vorbehalten.</p>
          <p>Bismillah · Barakah · Naseeb</p>
        </div>
      </div>
    </footer>
  )
}
