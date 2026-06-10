import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Impressum() {
  return (
    <>
      <Nav />
      <div className="simple-page">
        <Link to="/" className="back-link">← Zurück zur Startseite</Link>
        <h1>Impressum</h1>

        <h2>Anbieter</h2>
        <p>
          TAKABUL<br />
          Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:salam@takabul.com">salam@takabul.com</a>
        </p>

        <h2>Hinweis</h2>
        <p>
          Diese Website dient der Information über TAKABUL Islamic Speed Dating Events.
        </p>
      </div>
      <Footer />
    </>
  )
}
