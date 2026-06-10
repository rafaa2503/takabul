import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Nav from '../components/Nav'
import Events from '../components/Events'
import TicketShop from '../components/TicketShop'
import Footer from '../components/Footer'

const steps = [
  {
    num: '01',
    title: 'Begrüssung & Einführung',
    desc: 'Unsere Moderatorin empfängt dich herzlich und erklärt den Ablauf des Abends. Du kannst ankommen, durchatmen und dich in Ruhe einleben.',
  },
  {
    num: '02',
    title: 'Respektvolle, persönliche Gesprächsrunden',
    desc: 'Mehrere kurze Gespräche von jeweils ca. 7–10 Minuten ermöglichen dir, verschiedene Menschen auf eine natürliche und entspannte Weise kennenzulernen.',
  },
  {
    num: '03',
    title: 'Entspannte Begleitung',
    desc: 'Dank unserer Moderatorin, die für eine angenehme Atmosphäre sorgt, fühlst du dich zu keinem Zeitpunkt allein oder unwohl.',
  },
  {
    num: '04',
    title: 'Anonyme Entscheidung',
    desc: 'Du entscheidest nach dem Event anonym und diskret, wen du gerne wiedersehen möchtest. Nur wenn die Sympathie auf beiden Seiten da ist, werden die Kontakte ausgetauscht.',
  },
]

export default function Tickets() {
  const ablaufRef = useRef<HTMLElement>(null)

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

  return (
    <>
      <Nav />

      <section className="page-hero">
        <p className="section-label">TICKETS & ABLAUF</p>
        <h1>Für wen ist TAKABUL?</h1>
        <p>
          Für muslimische Singles, die mit klaren Absichten neue Menschen
          kennenlernen möchten, auf eine respektvolle Weise, die mit islamischen
          Werten vereinbar ist.
        </p>
      </section>

      <section className="ablauf" ref={ablaufRef}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2>Der Ablauf</h2>
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
