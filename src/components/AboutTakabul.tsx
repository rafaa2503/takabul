import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { sanityClient, urlFor } from '../lib/sanityClient'
import { aboutQuery, type AboutContent } from '../lib/queries'

const defaultContent: AboutContent = {
  aboutLabel: 'ÜBER TAKABUL',
  aboutTitlePart1: 'Ein Tag, der vielleicht mehr verändert,',
  aboutTitleAccent: 'als du erwartest.',
  aboutBody1:
    'Takabul bietet dir einen geschützten Raum, um andere muslimische Singles in der Schweiz persönlich kennenzulernen — respektvoll, strukturiert und auf Augenhöhe. Kein endloses Schreiben, kein unverbindliches Wischen. Nur echte Gespräche mit echten Menschen.',
  aboutBody2:
    'Manche Begegnungen brauchen nur einen Abend, um etwas zu beginnen, das ein Leben lang andauert. Vielleicht ist deiner dabei.',
  aboutCta: 'Events ansehen',
}

export default function AboutTakabul() {
  const ref = useRef<HTMLElement>(null)
  const [content, setContent] = useState<AboutContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<AboutContent>(aboutQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

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

  const imageSrc = content.aboutImage?.asset
    ? urlFor(content.aboutImage).width(1200).url()
    : '/img/2.png'

  return (
    <section className="about" id="konzept-detail" ref={ref} data-loading={loading}>
      <div className="about-text">
        <p className="section-label">{content.aboutLabel}</p>
        <h2 className="about-title">
          {content.aboutTitlePart1}{' '}
          <span className="accent-red">{content.aboutTitleAccent}</span>
        </h2>
        <p className="about-body">{content.aboutBody1}</p>
        <p className="about-body">{content.aboutBody2}</p>
        <a className="btn btn-primary" href="#tickets">{content.aboutCta}</a>
      </div>

      <div className="about-visual">
        <div className="about-visual-overlay" />
        <img
          className="about-img"
          src={imageSrc}
          alt="Gedeckter Tisch mit roten Rosen und Kerzen"
        />
      </div>
    </section>
  )
}
