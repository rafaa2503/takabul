const features = [
  {
    icon: '🎯',
    title: 'Massgeschneidert für deinen Erfolg',
    desc: 'Personalisierte Lernpfade, die sich deinem Tempo und deinen Stärken anpassen.',
  },
  {
    icon: '🃏',
    title: 'Wissen, das auf den Punkt trifft',
    desc: 'Von Experten erstellte Lernkarten mit wissenschaftlich fundierten Methoden.',
  },
  {
    icon: '📊',
    title: 'Deine Erfolge immer im Blick',
    desc: 'Detaillierte Fortschrittsstatistiken, die zeigen, wie weit du schon gekommen bist.',
  },
  {
    icon: '🧩',
    title: 'Wissen spielerisch überprüfen',
    desc: 'Interaktive Selbsttests mit sofortigem Feedback für effektives Lernen.',
  },
  {
    icon: '💡',
    title: 'Komplexe Themen, einfach verstanden',
    desc: 'Schritt-für-Schritt-Erklärungen machen schwierige Konzepte verständlich.',
  },
  {
    icon: '📈',
    title: 'Wachsen mit jeder Herausforderung',
    desc: 'Anpassbare Schwierigkeitsgrade, die mit deinen Fähigkeiten wachsen.',
  },
]

export default function Features() {
  return (
    <section id="features" className="ss-features">
      <div className="ss-features__inner">
        <div className="ss-section-header">
          <h2>Kernfunktionen</h2>
          <p>Alles, was du brauchst, um optimal auf deine Aufnahmeprüfung vorbereitet zu sein.</p>
        </div>
        <div className="ss-features__grid">
          {features.map(f => (
            <div key={f.title} className="ss-feature-card">
              <span className="ss-feature-card__icon">{f.icon}</span>
              <h3 className="ss-feature-card__title">{f.title}</h3>
              <p className="ss-feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
