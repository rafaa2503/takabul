import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const reasons = [
  {
    num: 1,
    title: 'Mehrere Begegnungen an einem Abend',
    desc: 'Lerne an einem Abend mehrere muslimische Singles kennen — authentisch, persönlich und ohne endloses Schreiben im Voraus.',
  },
  {
    num: 2,
    title: 'Strukturierte, entspannte Atmosphäre',
    desc: 'Klare Gesprächsrunden nehmen den Druck raus und schaffen einen Rahmen, der auch für zurückhaltende Personen angenehm ist.',
  },
  {
    num: 3,
    title: 'Anonyme Entscheidung nach dem Event',
    desc: 'Du entscheidest in Ruhe und vollständig anonym, wen du gerne wiedersehen möchtest. Diskret und auf deinem Tempo.',
  },
  {
    num: 4,
    title: 'Ehrliche Menschen, ernsthafte Absichten',
    desc: 'Du triffst auf Menschen, die wie du nach etwas Ernsthaftem suchen — mit Werten, die du teilst.',
  },
]

export default function WhyTakabul() {
  const ref = useRef<HTMLElement>(null)

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

  return (
    <section className="why" id="warum" ref={ref}>
      <img className="why-bg" src="/img/1.png" alt="" aria-hidden="true" />
      <div className="why-overlay" />
      <div className="container">
        <div className="why-header">
          <p className="section-label">WARUM TAKABUL</p>
          <h2>Warum du dabei sein solltest</h2>
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
