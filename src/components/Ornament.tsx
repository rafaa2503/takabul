import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Props {
  color?: string
  opacity?: number
}

export default function Ornament({ color = '#C99455', opacity = 0.5 }: Props) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scaleX: 0.2,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        transformOrigin: 'center',
        scrollTrigger: { trigger: ref.current, start: 'top 88%' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <svg ref={ref} className="ornament" viewBox="0 0 400 24" fill="none">
      <line x1="0" y1="12" x2="155" y2="12"
        stroke={color} strokeWidth="0.5" strokeOpacity={opacity * 0.7} />
      <path d="M170 12 L180 4 L190 12 L180 20 Z"
        stroke={color} strokeWidth="0.8" strokeOpacity={opacity} fill="none" />
      <circle cx="200" cy="12" r="3"
        stroke={color} strokeWidth="0.8" strokeOpacity={opacity} fill="none" />
      <path d="M210 12 L220 4 L230 12 L220 20 Z"
        stroke={color} strokeWidth="0.8" strokeOpacity={opacity} fill="none" />
      <line x1="245" y1="12" x2="400" y2="12"
        stroke={color} strokeWidth="0.5" strokeOpacity={opacity * 0.7} />
    </svg>
  )
}
