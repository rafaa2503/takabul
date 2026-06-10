import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { sanityClient, urlFor } from '../lib/sanityClient'
import { heroQuery, type HeroContent } from '../lib/queries'

const defaultContent: HeroContent = {
  heroArabicText: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
  heroBismillahLatin: 'BISMILLAH AR-RAHMAN AR-RAHIM',
  heroClaim: 'ISLAMIC SPEED DATING',
  heroTitleLine1: 'Willkommen — finde',
  heroTitleLine2: 'dein',
  heroTitleNaseeb: 'naseeb',
  heroSubtitle:
    'Willkommen zu einem respektvollen Abend für muslimische Singles mit ehrlichen Absichten. In entspannter und persönlicher Atmosphäre entstehen hier echte Begegnungen — ohne Druck, dafür mit Klarheit, Respekt und Offenheit.',
  heroCtaPrimary: 'Nächste Events ansehen',
  heroCtaSecondary: 'Mehr erfahren',
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [content, setContent] = useState<HeroContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<HeroContent>(heroQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

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

  const bgImageSrc = content.heroBgImage?.asset
    ? urlFor(content.heroBgImage).width(1920).url()
    : '/img/6.png'

  return (
    <section className="hero" ref={ref} data-loading={loading}>
      <div className="hero-bg">
        <img className="hero-bg-img" src={bgImageSrc} alt="Warme Abendstimmung" />
        <div className="hero-overlay" />
      </div>

      {/* TOP: Bismillah + Logo */}
      <div className="hero-top">
        <p className="hero-arabic">{content.heroArabicText}</p>
        <p className="hero-bismillah-latin">{content.heroBismillahLatin}</p>
        <p className="hero-claim">{content.heroClaim}</p>
      </div>

      {/* SPACER */}
      <div className="hero-spacer" />

      {/* BOTTOM: Title + Subtitle + CTA */}
      <div className="hero-bottom">
        <h1 className="hero-title">
          <div className="hero-line-wrapper">
            <span className="hero-line">{content.heroTitleLine1}</span>
          </div>
          <div className="hero-line-wrapper">
            <span className="hero-line">{content.heroTitleLine2}</span>
          </div>
          <div className="hero-line-wrapper">
            <em className="hero-line hero-naseeb">{content.heroTitleNaseeb}</em>
          </div>
        </h1>
        <p className="hero-subtitle">{content.heroSubtitle}</p>
        <div className="hero-cta-group">
          <a className="btn btn-primary" href="#tickets">{content.heroCtaPrimary}</a>
          <a className="btn btn-outline-light" href="#konzept">{content.heroCtaSecondary}</a>
        </div>
      </div>
    </section>
  )
}
