import { useState } from 'react'

const faqs = [
  {
    q: 'Für welche Prüfungen ist StudySwiss geeignet?',
    a: 'StudySwiss ist speziell für die Aufnahmeprüfungen an Gymnasien, WMS (HMS), IMS und FMS in der Schweiz konzipiert. Wir bieten Übungen und Materialien für die Prüfungen in den Kantonen Zürich, Bern und weiteren.',
  },
  {
    q: 'Welche Fächer werden abgedeckt?',
    a: 'Aktuell bieten wir Übungen und Lernmaterialien für Französisch, Deutsch, Englisch und Mathematik an.',
  },
  {
    q: 'Ist StudySwiss kostenlos?',
    a: 'Wir bieten einen kostenlosen Basiszugang an. Premium-Funktionen sind über ein Abonnement erhältlich.',
  },
  {
    q: 'Wie kann ich die App herunterladen?',
    a: 'StudySwiss ist im App Store und Google Play Store erhältlich. Klicke auf "Jetzt herunterladen" um direkt zum Download zu gelangen.',
  },
  {
    q: 'In welchen Kantonen ist StudySwiss verfügbar?',
    a: 'StudySwiss ist aktuell für die Kantone Zürich und Bern optimiert. Wir arbeiten kontinuierlich daran, weitere Kantone einzubeziehen.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="ss-faq__item">
      <button className="ss-faq__question" onClick={() => setOpen(o => !o)}>
        {q}
        <svg
          className={`ss-faq__chevron ${open ? 'is-open' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`ss-faq__answer ${open ? 'is-open' : ''}`}>{a}</div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="ss-faq">
      <div
        className="ss-section-header"
        style={{ maxWidth: '720px', margin: '0 auto 3.5rem', padding: '0 1.5rem' }}
      >
        <h2>Häufige Fragen</h2>
        <p>Hast du Fragen? Wir haben die Antworten.</p>
      </div>
      <div className="ss-faq__list">
        {faqs.map(item => (
          <FAQItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  )
}
