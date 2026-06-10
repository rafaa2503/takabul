export interface Event {
  city: string
  date: string
  time: string
  age: string
  img: string
  imgPos: string
  cta: 'ticket' | 'waitlist'
}

export const events: Event[] = [
  { city: 'Zürich', date: '14.03.2026', time: '18:00 Uhr', age: '20 – 29 Jahre',
    img: '/img/3.png', imgPos: 'center center', cta: 'ticket' },
  { city: 'Bern',   date: '25.04.2026', time: '18:30 Uhr', age: '30 – 45 Jahre',
    img: '/img/5.png', imgPos: 'center center', cta: 'ticket' },
  { city: 'Basel',  date: '16.05.2026', time: '17:30 Uhr', age: '50+ Jahre',
    img: '/img/1.png', imgPos: 'center top',   cta: 'ticket' },
  { city: 'Genf',   date: '13.06.2026', time: '18:00 Uhr', age: '25 – 35 Jahre',
    img: '/img/2.png', imgPos: 'center center', cta: 'waitlist' },
]
