import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { sanityClient, urlFor } from '../lib/sanityClient'
import { naseebQuery, type NaseebContent } from '../lib/queries'

const defaultContent: NaseebContent = {
  naseebLabel: 'Naseeb',
  naseebQuoteLine1: 'Nicht jede Chance kommt zweimal.',
  naseebQuoteLine2: 'Manchmal beginnt etwas Besonderes mit einem einzigen Gespräch.',
  naseebCta: 'Jetzt Ticket sichern',
}

export default function NaseebQuote() {
  const ref = useRef<HTMLElement>(null)
  const [content, setContent] = useState<NaseebContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<NaseebContent>(naseebQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: '.naseeb-quote', start: 'top 70%' },
      })
        .from('.quote-label',  { opacity: 0, y: 24, duration: 0.7 })
        .from('.quote-line-1', { y: '110%', duration: 1.1, ease: 'power4.out' }, '-=0.3')
        .from('.quote-line-2', { y: '110%', duration: 1.1, ease: 'power4.out' }, '-=0.85')
        .from('.naseeb-cta',   { opacity: 0, y: 20, duration: 0.7 }, '-=0.4')
    }, ref)
    return () => ctx.revert()
  }, [])

  const bgImageSrc = content.naseebBgImage?.asset
    ? urlFor(content.naseebBgImage).width(1920).url()
    : '/img/4.png'

  return (
    <section className="naseeb-quote" ref={ref} data-loading={loading}>
      <img className="naseeb-bg" src={bgImageSrc} alt="" aria-hidden="true" />
      <div className="naseeb-overlay" />
      <div className="container">
        <p className="quote-label">{content.naseebLabel}</p>
        <h2 className="quote-text">
          <span className="quote-line-wrapper">
            <span className="quote-line-1">{content.naseebQuoteLine1}</span>
          </span>
          <span className="quote-line-wrapper">
            <em className="quote-line-2">{content.naseebQuoteLine2}</em>
          </span>
        </h2>
        <a href="#tickets" className="btn btn-primary naseeb-cta">
          {content.naseebCta}
        </a>
      </div>
    </section>
  )
}
