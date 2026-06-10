import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on background image
      gsap.to('.hero-bg-img', {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Top section fade in
      gsap.from('.hero-top > *', {
        opacity: 0,
        y: 16,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.1,
        ease: 'power3.out',
      })

      // Title clip-reveal
      gsap.from('.hero-line', {
        y: '110%',
        duration: 1.2,
        stagger: 0.18,
        delay: 0.3,
        ease: 'power4.out',
      })

      // Subtitle + CTA fade
      gsap.from(['.hero-subtitle', '.hero-cta-group'], {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        delay: 0.8,
        ease: 'power3.out',
      })
    }, ref)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === '.hero') t.kill()
      })
    }
  }, [])

  return (
    <section className="hero" ref={ref}>
      <div className="hero-bg">
        <img className="hero-bg-img" src="/img/6.png" alt="Warme Abendstimmung" />
        <div className="hero-overlay" />
      </div>

      {/* TOP: Bismillah + Logo */}
      <div className="hero-top">
        <p className="hero-arabic">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
        <p className="hero-bismillah-latin">BISMILLAH AR-RAHMAN AR-RAHIM</p>
        <p className="hero-claim">ISLAMIC SPEED DATING</p>
      </div>

      {/* SPACER */}
      <div className="hero-spacer" />

      {/* BOTTOM: Title + Subtitle + CTA */}
      <div className="hero-bottom">
        <h1 className="hero-title">
          <div className="hero-line-wrapper">
            <span className="hero-line">Willkommen — finde</span>
          </div>
          <div className="hero-line-wrapper">
            <span className="hero-line">dein</span>
          </div>
          <div className="hero-line-wrapper">
            <em className="hero-line hero-naseeb">naseeb</em>
          </div>
        </h1>
        <p className="hero-subtitle">
          Willkommen zu einem respektvollen Abend für muslimische Singles
          mit ehrlichen Absichten. In entspannter und persönlicher Atmosphäre
          entstehen hier echte Begegnungen — ohne Druck, dafür mit Klarheit,
          Respekt und Offenheit.
        </p>
        <div className="hero-cta-group">
          <a className="btn btn-primary" href="#tickets">Nächste Events ansehen</a>
          <a className="btn btn-outline-light" href="#konzept">Mehr erfahren</a>
        </div>
      </div>
    </section>
  )
}
