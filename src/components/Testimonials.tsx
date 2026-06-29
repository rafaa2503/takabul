const testimonials = [
  {
    quote: 'Die App ist übersichtlich gestaltet und funktioniert einwandfrei.',
    name: 'Sarah P.',
    role: 'Lehrerin, Bern',
  },
  {
    quote: 'Die App hilft mir, gezielter zu üben. Ich sehe sofort, wo ich noch Lücken habe.',
    name: 'Thomas R.',
    role: 'Schüler, Zürich',
  },
  {
    quote: 'Unsere Klasse fand das Üben mit StudySwiss motivierend und abwechslungsreich.',
    name: 'Marco K.',
    role: 'Schüler, Bern',
  },
  {
    quote: 'StudySwiss macht das Lernen klar und strukturiert. Genau das, was ich gebraucht habe.',
    name: 'Lisa M.',
    role: 'Schülerin, Bern',
  },
]

export default function Testimonials() {
  return (
    <section className="ss-testimonials">
      <div className="ss-section-header" style={{ maxWidth: '1152px', margin: '0 auto 3.5rem', padding: '0 1.5rem' }}>
        <h2>Was unsere Nutzer sagen</h2>
      </div>
      <div className="ss-testimonials__grid">
        {testimonials.map(t => (
          <div key={t.name} className="ss-testimonial">
            <svg className="ss-testimonial__quote-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="ss-testimonial__text">&ldquo;{t.quote}&rdquo;</p>
            <div>
              <div className="ss-testimonial__name">{t.name}</div>
              <div className="ss-testimonial__role">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
