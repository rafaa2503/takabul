const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer id="contact" className="ss-footer">
      <div className="ss-footer__inner">
        <div className="ss-footer__top">
          <div>
            <a href="#home" className="ss-footer__logo">
              <span className="ss-footer__logo-study">Study</span>
              <span className="ss-footer__logo-swiss">Swiss</span>
            </a>
            <p className="ss-footer__tagline">
              Dein Lernbegleiter für die Schweizer Aufnahmeprüfung.
              Für Gymnasium, WMS, IMS und FMS.
            </p>
          </div>

          <div>
            <h4 className="ss-footer__col-title">Navigation</h4>
            <ul className="ss-footer__links">
              {['Home', 'Über uns', 'Kernfunktionen', 'FAQ', 'Investoren'].map(label => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase().replace(/ /g, '-')}`}
                    className="ss-footer__link"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="ss-footer__col-title">Kontakt & Legal</h4>
            <ul className="ss-footer__links">
              <li>
                <a href="mailto:info@studyswiss.ch" className="ss-footer__link">
                  info@studyswiss.ch
                </a>
              </li>
              <li><a href="#contact" className="ss-footer__link">Kontaktformular</a></li>
              <li><a href="#" className="ss-footer__link">Datenschutzerklärung</a></li>
              <li><a href="#" className="ss-footer__link">Impressum</a></li>
            </ul>
          </div>
        </div>

        <div className="ss-footer__bottom">
          © {currentYear} StudySwiss. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
