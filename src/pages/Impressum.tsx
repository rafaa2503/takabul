import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { sanityClient } from '../lib/sanityClient'
import { impressumQuery, type ImpressumContent } from '../lib/queries'

const defaultContent: ImpressumContent = {
  backLinkLabel: '← Zurück zur Startseite',
  impressumTitle: 'Impressum',
  impressumAnbieterTitle: 'Anbieter',
  companyName: 'TAKABUL',
  companyCountry: 'Schweiz',
  impressumKontaktTitle: 'Kontakt',
  contactEmail: 'salam@takabul.com',
  impressumHinweisTitle: 'Hinweis',
  impressumHinweisText: 'Diese Website dient der Information über TAKABUL Islamic Speed Dating Events.',
}

export default function Impressum() {
  const [content, setContent] = useState<ImpressumContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<ImpressumContent>(impressumQuery)
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
        <h1>{content.impressumTitle}</h1>

        <h2>{content.impressumAnbieterTitle}</h2>
        <p>
          {content.companyName}<br />
          {content.companyCountry}
        </p>

        <h2>{content.impressumKontaktTitle}</h2>
        <p>
          E-Mail: <a href={`mailto:${content.contactEmail}`}>{content.contactEmail}</a>
        </p>

        <h2>{content.impressumHinweisTitle}</h2>
        <p>{content.impressumHinweisText}</p>
      </div>
      <Footer />
    </>
  )
}
