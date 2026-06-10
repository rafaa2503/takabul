import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export const lenis = new Lenis({
  lerp: 0.08,
  wheelMultiplier: 0.9,
  smoothWheel: true,
})

gsap.ticker.add((t: number) => lenis.raf(t * 1000))
gsap.ticker.lagSmoothing(0)
lenis.on('scroll', () => ScrollTrigger.update())

export function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = (anchor as HTMLAnchorElement).getAttribute('href')
      if (!href) return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.5 })
      }
    })
  })
}
