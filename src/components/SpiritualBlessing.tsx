import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Ornament from './Ornament'

export default function SpiritualBlessing() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blessing .section-label', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        scrollTrigger: { trigger: '.blessing', start: 'top 70%' },
      })
      gsap.from('.blessing-quote', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.blessing', start: 'top 65%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section className="blessing" id="konzept" ref={ref}>
      <div className="container">
        <p className="section-label">SPIRITUELLER SEGEN</p>
        <Ornament color="rgba(201,148,85,0.6)" opacity={0.7} />
        <blockquote className="blessing-quote">
          „Tretet mit <em>Bismillah</em> und dem rechten Fuss ein —
          möge Allah ﷻ diesen Anlass mit <em>Barakah</em> segnen."
        </blockquote>
      </div>
    </section>
  )
}
