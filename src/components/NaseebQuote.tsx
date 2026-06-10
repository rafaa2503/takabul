import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function NaseebQuote() {
  const ref = useRef<HTMLElement>(null)

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

  return (
    <section className="naseeb-quote" ref={ref}>
      <img className="naseeb-bg" src="/img/4.png" alt="" aria-hidden="true" />
      <div className="naseeb-overlay" />
      <div className="container">
        <p className="quote-label">Naseeb</p>
        <h2 className="quote-text">
          <span className="quote-line-wrapper">
            <span className="quote-line-1">Nicht jede Chance kommt zweimal.</span>
          </span>
          <span className="quote-line-wrapper">
            <em className="quote-line-2">
              Manchmal beginnt etwas Besonderes mit einem einzigen Gespräch.
            </em>
          </span>
        </h2>
        <a href="#tickets" className="btn btn-primary naseeb-cta">
          Jetzt Ticket sichern
        </a>
      </div>
    </section>
  )
}
