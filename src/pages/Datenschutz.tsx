import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { sanityClient } from '../lib/sanityClient'
import { datenschutzQuery, type DatenschutzContent } from '../lib/queries'

const defaultContent: DatenschutzContent = {
  backLinkLabel: '← Zurück zur Startseite',
  datenschutzTitle: 'Datenschutzerklärung',
  datenschutzVerantwortlicherTitle: 'Verantwortlicher',
  companyName: 'TAKABUL',
  companyCountry: 'Schweiz',
  contactEmail: 'salam@takabul.com',
  datenschutzHostingTitle: 'Hosting',
  datenschutzHostingText:
    'Diese Website wird gehostet bei Infomaniak Network SA, Schweiz. Infomaniak verarbeitet beim Aufruf dieser Website technisch notwendige Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite) im Rahmen ihrer Datenschutzrichtlinien.',
  datenschutzCookiesTitle: 'Cookies',
  datenschutzCookiesText:
    'Diese Website verwendet ausschliesslich technisch notwendige Cookies. Es werden keine Marketing-, Analyse- oder Tracking-Cookies eingesetzt.',
  datenschutzTrackingTitle: 'Tracking & Analyse',
  datenschutzTrackingText:
    'Auf dieser Website sind keine Tracking-Tools und kein Google Analytics eingebunden. Es werden keine Nutzerprofile erstellt und keine Daten an Dritte für Werbezwecke weitergegeben.',
  datenschutzSchriftenTitle: 'Schriften',
  datenschutzSchriftenText:
    'Diese Website lädt Schriftarten (Cormorant Garamond, Inter) von Google Fonts. Dabei wird Ihre IP-Adresse an die Server von Google übertragen. Wenn Sie dies vermeiden möchten, können Sie in Ihrem Browser einen geeigneten Blocker einsetzen.',
  datenschutzKontaktformularTitle: 'Kontaktformular',
  datenschutzKontaktformularText:
    'Diese Website enthält kein Kontaktformular. Bei Kontaktanfragen per E-Mail werden die übermittelten Daten ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.',
  datenschutzRechteTitle: 'Ihre Rechte',
  datenschutzRechteText:
    'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten gemäss dem schweizerischen Datenschutzgesetz (DSG) sowie der Datenschutz-Grundverordnung (DSGVO), sofern anwendbar. Für Anfragen wenden Sie sich bitte an: ',
  datenschutzAenderungenTitle: 'Änderungen',
  datenschutzAenderungenText:
    'Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Es gilt jeweils die auf der Website veröffentlichte aktuelle Fassung.',
  datenschutzStand: 'Stand: Mai 2026',
}

export default function Datenschutz() {
  const [content, setContent] = useState<DatenschutzContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<DatenschutzContent>(datenschutzQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <>
      <Nav />
      <div className="simple-page" data-loading={loading}>
        <Link to="/" className="back-link">{content.backLinkLabel}</Link>
        <h1>{content.datenschutzTitle}</h1>

        <h2>{content.datenschutzVerantwortlicherTitle}</h2>
        <p>
          {content.companyName}<br />
          {content.companyCountry}<br />
          E-Mail: <a href={`mailto:${content.contactEmail}`}>{content.contactEmail}</a>
        </p>

        <h2>{content.datenschutzHostingTitle}</h2>
        <p>{content.datenschutzHostingText}</p>

        <h2>{content.datenschutzCookiesTitle}</h2>
        <p>{content.datenschutzCookiesText}</p>

        <h2>{content.datenschutzTrackingTitle}</h2>
        <p>{content.datenschutzTrackingText}</p>

        <h2>{content.datenschutzSchriftenTitle}</h2>
        <p>{content.datenschutzSchriftenText}</p>

        <h2>{content.datenschutzKontaktformularTitle}</h2>
        <p>{content.datenschutzKontaktformularText}</p>

        <h2>{content.datenschutzRechteTitle}</h2>
        <p>
          {content.datenschutzRechteText}
          <a href={`mailto:${content.contactEmail}`}>{content.contactEmail}</a>
        </p>

        <h2>{content.datenschutzAenderungenTitle}</h2>
        <p>{content.datenschutzAenderungenText}</p>

        <p style={{ marginTop: '2rem', color: 'rgba(58,11,11,0.45)', fontSize: '0.8rem' }}>
          {content.datenschutzStand}
        </p>
      </div>
      <Footer />
    </>
  )
}
