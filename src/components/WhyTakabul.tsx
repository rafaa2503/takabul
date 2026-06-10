import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { sanityClient, urlFor } from '../lib/sanityClient'
import { whyQuery, type WhyContent } from '../lib/queries'

const defaultContent: WhyContent = {
  whyLabel: 'WARUM TAKABUL',
  whyTitle: 'Warum du dabei sein solltest',
  whyReason1Title: 'Mehrere Begegnungen an einem Abend',
  whyReason1Desc:
    'Lerne an einem Abend mehrere muslimische Singles kennen — authentisch, persönlich und ohne endloses Schreiben im Voraus.',
  whyReason2Title: 'Strukturierte, entspannte Atmosphäre',
  whyReason2Desc:
    'Klare Gesprächsrunden nehmen den Druck raus und schaffen einen Rahmen, der auch für zurückhaltende Personen angenehm ist.',
  whyReason3Title: 'Anonyme Entscheidung nach dem Event',
  whyReason3Desc:
    'Du entscheidest in Ruhe und vollständig anonym, wen du gerne wiedersehen möchtest. Diskret und auf deinem Tempo.',
  whyReason4Title: 'Ehrliche Menschen, ernsthafte Absichten',
  whyReason4Desc:
    'Du triffst auf Menschen, die wie du nach etwas Ernsthaftem suchen — mit Werten, die du teilst.',
}

export default function WhyTakabul() {
  const ref = useRef<HTMLElement>(null)
  const [content, setContent] = useState<WhyContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<WhyContent>(whyQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Count-up animation on numbers
      ref.current?.querySelectorAll<HTMLElement>('.why-num[data-num]').forEach(el => {
        const target = parseInt(el.dataset.num ?? '0')
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.2,
          ease: 'power2.out',
          onUpdate() {
            el.textContent = String(Math.round(obj.val)).padStart(2, '0')
          },
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })

      // Cards stagger
      gsap.from('.why-card', {
        y: 70,
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.why-grid', start: 'top 75%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const bgImageSrc = content.whyBgImage?.asset
    ? urlFor(content.whyBgImage).width(1920).url()
    : '/img/1.png'

  const reasons = [
    { num: 1, title: content.whyReason1Title, desc: content.whyReason1Desc },
    { num: 2, title: content.whyReason2Title, desc: content.whyReason2Desc },
    { num: 3, title: content.whyReason3Title, desc: content.whyReason3Desc },
    { num: 4, title: content.whyReason4Title, desc: content.whyReason4Desc },
  ]

  return (
    <section className="why" id="warum" ref={ref} data-loading={loading}>
      <img className="why-bg" src={bgImageSrc} alt="" aria-hidden="true" />
      <div className="why-overlay" />
      <div className="container">
        <div className="why-header">
          <p className="section-label">{content.whyLabel}</p>
          <h2>{content.whyTitle}</h2>
        </div>
        <div className="why-grid">
          {reasons.map(r => (
            <div key={r.num} className="why-card">
              <span className="why-num" data-num={r.num}>00</span>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
