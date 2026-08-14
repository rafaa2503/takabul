export default function Hero() {
  return (
    <section id="home" className="ss-hero">
      <div className="ss-hero__inner">
        <span className="ss-hero__badge">Für Schweizer Schülerinnen und Schüler</span>

        <h1 className="ss-hero__headline">
          Sei vorbereitet für die{' '}
          <span>Aufnahmeprüfung</span>
        </h1>

        <p className="ss-hero__sub">
          Dein Begleiter bis zur Prüfung: Übungen, Lernkarten, verständliche Erklärungen und vieles mehr.
        </p>

        <p className="ss-hero__tagline">
          Gebaut persönlich für dich. Folge deinen Lernweg vom Anfang bis an der Prüfung mit StudySwiss.
        </p>

        <div className="ss-hero__actions" id="download">
          <a href="#download" className="ss-btn ss-btn--primary">
            Jetzt herunterladen
          </a>
          <a href="#features" className="ss-btn ss-btn--outline">
            Mehr erfahren
          </a>
        </div>
      </div>
    </section>
  )
}
