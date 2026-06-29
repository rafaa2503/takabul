const team = [
  { name: 'Ahmed Mokdad', role: 'Organizer' },
  { name: 'Juliette Michel', role: 'Content' },
  { name: 'Haaroon Hussain', role: 'Backend' },
  { name: 'Korab Bejta', role: 'Frontend' },
]

export default function About() {
  return (
    <section id="about" className="ss-about">
      <div className="ss-about__inner">
        <div className="ss-about__content">
          <h2>Über uns</h2>
          <p>
            Wir sind ein Team aus Schülerinnen und Schülern, Lehrpersonen und Administratoren,
            das sich für faire Bildungschancen in der Schweiz einsetzt.
          </p>
          <p>
            StudySwiss ist speziell für die Aufnahmeprüfungen an Gymnasien, WMS (HMS), IMS und FMS
            in der Schweiz konzipiert. Wir bieten Übungen und Materialien für die Prüfungen in den
            Kantonen Zürich, Bern und weiteren.
          </p>
          <p>Fächer: Französisch, Deutsch, Englisch, Mathematik.</p>
        </div>

        <div>
          <h3 className="ss-about__team-title">Unser Team</h3>
          <div className="ss-team-grid">
            {team.map(member => (
              <div key={member.name} className="ss-team-card">
                <div className="ss-team-card__avatar">{member.name[0]}</div>
                <div className="ss-team-card__name">{member.name}</div>
                <div className="ss-team-card__role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
