import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Nav from '../components/Nav'
import Events from '../components/Events'
import TicketShop from '../components/TicketShop'
import Footer from '../components/Footer'
import { sanityClient } from '../lib/sanityClient'
import { ticketsPageQuery, type TicketsPageContent } from '../lib/queries'

const defaultContent: TicketsPageContent = {
  ticketsPageLabel: 'TICKETS & ABLAUF',
  ticketsPageTitle: 'Für wen ist TAKABUL?',
  ticketsPageIntro:
    'Für muslimische Singles, die mit klaren Absichten neue Menschen kennenlernen möchten, auf eine respektvolle Weise, die mit islamischen Werten vereinbar ist.',
  ablaufTitle: 'Der Ablauf',
  ablaufStep1Title: 'Begrüssung & Einführung',
  ablaufStep1Desc:
    'Unsere Moderatorin empfängt dich herzlich und erklärt den Ablauf des Abends. Du kannst ankommen, durchatmen und dich in Ruhe einleben.',
  ablaufStep2Title: 'Respektvolle, persönliche Gesprächsrunden',
  ablaufStep2Desc:
    'Mehrere kurze Gespräche von jeweils ca. 7–10 Minuten ermöglichen dir, verschiedene Menschen auf eine natürliche und entspannte Weise kennenzulernen.',
  ablaufStep3Title: 'Entspannte Begleitung',
  ablaufStep3Desc:
    'Dank unserer Moderatorin, die für eine angenehme Atmosphäre sorgt, fühlst du dich zu keinem Zeitpunkt allein oder unwohl.',
  ablaufStep4Title: 'Anonyme Entscheidung',
  ablaufStep4Desc:
    'Du entscheidest nach dem Event anonym und diskret, wen du gerne wiedersehen möchtest. Nur wenn die Sympathie auf beiden Seiten da ist, werden die Kontakte ausgetauscht.',
}

export default function Tickets() {
  const ablaufRef = useRef<HTMLElement>(null)
  const [content, setContent] = useState<TicketsPageContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<TicketsPageContent>(ticketsPageQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ablauf-step', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ablauf-steps', start: 'top 75%' },
      })
    }, ablaufRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    { num: '01', title: content.ablaufStep1Title, desc: content.ablaufStep1Desc },
    { num: '02', title: content.ablaufStep2Title, desc: content.ablaufStep2Desc },
    { num: '03', title: content.ablaufStep3Title, desc: content.ablaufStep3Desc },
    { num: '04', title: content.ablaufStep4Title, desc: content.ablaufStep4Desc },
  ]

  return (
    <>
      <Nav />

      <section className="page-hero" data-loading={loading}>
        <p className="section-label">{content.ticketsPageLabel}</p>
        <h1>{content.ticketsPageTitle}</h1>
        <p>{content.ticketsPageIntro}</p>
      </section>

      <section className="ablauf" ref={ablaufRef}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2>{content.ablaufTitle}</h2>
          <div className="ablauf-steps">
            {steps.map(step => (
              <div key={step.num} className="ablauf-step">
                <div className="ablauf-step-num">{step.num}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Events />
      <TicketShop />

      <Footer />
    </>
  )
}
