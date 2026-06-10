import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <div className="simple-page">
        <Link to="/" className="back-link">← Zurück zur Startseite</Link>
        <h1>Datenschutzerklärung</h1>

        <h2>Verantwortlicher</h2>
        <p>
          TAKABUL<br />
          Schweiz<br />
          E-Mail: <a href="mailto:salam@takabul.com">salam@takabul.com</a>
        </p>

        <h2>Hosting</h2>
        <p>
          Diese Website wird gehostet bei Infomaniak Network SA, Schweiz.
          Infomaniak verarbeitet beim Aufruf dieser Website technisch notwendige
          Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite) im Rahmen
          ihrer Datenschutzrichtlinien.
        </p>

        <h2>Cookies</h2>
        <p>
          Diese Website verwendet ausschliesslich technisch notwendige Cookies.
          Es werden keine Marketing-, Analyse- oder Tracking-Cookies eingesetzt.
        </p>

        <h2>Tracking & Analyse</h2>
        <p>
          Auf dieser Website sind keine Tracking-Tools und kein Google Analytics
          eingebunden. Es werden keine Nutzerprofile erstellt und keine Daten
          an Dritte für Werbezwecke weitergegeben.
        </p>

        <h2>Schriften</h2>
        <p>
          Diese Website lädt Schriftarten (Cormorant Garamond, Inter) von
          Google Fonts. Dabei wird Ihre IP-Adresse an die Server von Google
          übertragen. Wenn Sie dies vermeiden möchten, können Sie in Ihrem
          Browser einen geeigneten Blocker einsetzen.
        </p>

        <h2>Kontaktformular</h2>
        <p>
          Diese Website enthält kein Kontaktformular. Bei Kontaktanfragen per
          E-Mail werden die übermittelten Daten ausschliesslich zur Bearbeitung
          Ihrer Anfrage verwendet.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten gemäss
          dem schweizerischen Datenschutzgesetz (DSG) sowie der Datenschutz-
          Grundverordnung (DSGVO), sofern anwendbar. Für Anfragen wenden Sie
          sich bitte an: <a href="mailto:salam@takabul.com">salam@takabul.com</a>
        </p>

        <h2>Änderungen</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
          Es gilt jeweils die auf der Website veröffentlichte aktuelle Fassung.
        </p>

        <p style={{ marginTop: '2rem', color: 'rgba(58,11,11,0.45)', fontSize: '0.8rem' }}>
          Stand: Mai 2026
        </p>
      </div>
      <Footer />
    </>
  )
}
