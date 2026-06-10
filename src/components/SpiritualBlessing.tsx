import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Ornament from './Ornament'
import { sanityClient } from '../lib/sanityClient'
import { blessingQuery, type BlessingContent } from '../lib/queries'

const defaultContent: BlessingContent = {
  blessingLabel: 'SPIRITUELLER SEGEN',
  blessingQuoteBefore: '„Tretet mit ',
  blessingQuoteBismillah: 'Bismillah',
  blessingQuoteMiddle: ' und dem rechten Fuss ein — möge Allah ﷻ diesen Anlass mit ',
  blessingQuoteBarakah: 'Barakah',
  blessingQuoteAfter: ' segnen."',
}

export default function SpiritualBlessing() {
  const ref = useRef<HTMLElement>(null)
  const [content, setContent] = useState<BlessingContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<BlessingContent>(blessingQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

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
    <section className="blessing" id="konzept" ref={ref} data-loading={loading}>
      <div className="container">
        <p className="section-label">{content.blessingLabel}</p>
        <Ornament color="rgba(201,148,85,0.6)" opacity={0.7} />
        <blockquote className="blessing-quote">
          {content.blessingQuoteBefore}<em>{content.blessingQuoteBismillah}</em>{content.blessingQuoteMiddle}<em>{content.blessingQuoteBarakah}</em>{content.blessingQuoteAfter}
        </blockquote>
      </div>
    </section>
  )
}
