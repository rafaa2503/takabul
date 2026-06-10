import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AboutTakabul() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Curtain reveal on image
      gsap.timeline({
        scrollTrigger: { trigger: '.about-visual', start: 'top 70%' },
      })
        .to('.about-visual-overlay', {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 1.3,
          ease: 'power4.inOut',
        })
        .from('.about-img', {
          scale: 1.15,
          duration: 1.3,
          ease: 'power4.inOut',
        }, '<')

      // Text stagger
      gsap.from('.about-text > *', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: '.about-text', start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="about" id="konzept-detail" ref={ref}>
      <div className="about-text">
        <p className="section-label">ÜBER TAKABUL</p>
        <h2 className="about-title">
          Ein Tag, der vielleicht mehr verändert,{' '}
          <span className="accent-red">als du erwartest.</span>
        </h2>
        <p className="about-body">
          Takabul bietet dir einen geschützten Raum, um andere muslimische
          Singles in der Schweiz persönlich kennenzulernen — respektvoll,
          strukturiert und auf Augenhöhe. Kein endloses Schreiben, kein
          unverbindliches Wischen. Nur echte Gespräche mit echten Menschen.
        </p>
        <p className="about-body">
          Manche Begegnungen brauchen nur einen Abend, um etwas zu beginnen,
          das ein Leben lang andauert. Vielleicht ist deiner dabei.
        </p>
        <a className="btn btn-primary" href="#tickets">Events ansehen</a>
      </div>

      <div className="about-visual">
        <div className="about-visual-overlay" />
        <img
          className="about-img"
          src="/img/2.png"
          alt="Gedeckter Tisch mit roten Rosen und Kerzen"
        />
      </div>
    </section>
  )
}
