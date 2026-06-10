import sanityCli from 'sanity/cli'

const client = sanityCli.getCliClient()

const fields = {
  // shared
  backLinkLabel: '← Zurück zur Startseite',
  companyName: 'TAKABUL',
  companyCountry: 'Schweiz',
  contactEmail: 'salam@takabul.com',

  // nav
  navLinkKonzept: 'Konzept',
  navLinkEvents: 'Events',
  navLinkWarum: 'Warum TAKABUL',
  navLinkTickets: 'Tickets',
  navLinkStart: 'Start',

  // hero
  heroArabicText: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
  heroBismillahLatin: 'BISMILLAH AR-RAHMAN AR-RAHIM',
  heroClaim: 'ISLAMIC SPEED DATING',
  heroTitleLine1: 'Willkommen — finde',
  heroTitleLine2: 'dein',
  heroTitleNaseeb: 'naseeb',
  heroSubtitle:
    'Willkommen zu einem respektvollen Abend für muslimische Singles mit ehrlichen Absichten. In entspannter und persönlicher Atmosphäre entstehen hier echte Begegnungen — ohne Druck, dafür mit Klarheit, Respekt und Offenheit.',
  heroCtaPrimary: 'Nächste Events ansehen',
  heroCtaSecondary: 'Mehr erfahren',

  // about
  aboutLabel: 'ÜBER TAKABUL',
  aboutTitlePart1: 'Ein Tag, der vielleicht mehr verändert,',
  aboutTitleAccent: 'als du erwartest.',
  aboutBody1:
    'Takabul bietet dir einen geschützten Raum, um andere muslimische Singles in der Schweiz persönlich kennenzulernen — respektvoll, strukturiert und auf Augenhöhe. Kein endloses Schreiben, kein unverbindliches Wischen. Nur echte Gespräche mit echten Menschen.',
  aboutBody2:
    'Manche Begegnungen brauchen nur einen Abend, um etwas zu beginnen, das ein Leben lang andauert. Vielleicht ist deiner dabei.',
  aboutCta: 'Events ansehen',

  // events
  eventsLabel: 'ANSTEHENDE EVENTS',
  eventsTitleLine1: 'Schweizweit.',
  eventsTitleLine2: 'Unvergesslich.',
  eventsBody:
    'Von Zürich bis Genf — TAKABUL bringt dich an exklusiven Locations zusammen mit gleichgesinnten Muslims auf der Suche nach etwas Echtem.',
  eventsCta: 'Tickets sichern',

  // blessing
  blessingLabel: 'SPIRITUELLER SEGEN',
  blessingQuoteBefore: '„Tretet mit ',
  blessingQuoteBismillah: 'Bismillah',
  blessingQuoteMiddle: ' und dem rechten Fuss ein — möge Allah ﷻ diesen Anlass mit ',
  blessingQuoteBarakah: 'Barakah',
  blessingQuoteAfter: ' segnen."',

  // why
  whyLabel: 'WARUM TAKABUL',
  whyTitle: 'Warum du dabei sein solltest',
  whyReason1Title: 'Mehrere Begegnungen an einem Abend',
  whyReason1Desc:
    'Lerne an einem Abend mehrere muslimische Singles kennen — authentisch, persönlich und ohne endloses Schreiben im Voraus.',
  whyReason2Title: 'Strukturierte, entspannte Atmosphäre',
  whyReason2Desc:
    'Klare Gesprächsrunden nehmen den Druck raus und schaffen einen Rahmen, der auch für zurückhaltende Personen angenehm ist.',
  whyReason3Title: 'Anonyme Entscheidung nach dem Event',
  whyReason3Desc:
    'Du entscheidest in Ruhe und vollständig anonym, wen du gerne wiedersehen möchtest. Diskret und auf deinem Tempo.',
  whyReason4Title: 'Ehrliche Menschen, ernsthafte Absichten',
  whyReason4Desc:
    'Du triffst auf Menschen, die wie du nach etwas Ernsthaftem suchen — mit Werten, die du teilst.',

  // naseeb
  naseebLabel: 'Naseeb',
  naseebQuoteLine1: 'Nicht jede Chance kommt zweimal.',
  naseebQuoteLine2: 'Manchmal beginnt etwas Besonderes mit einem einzigen Gespräch.',
  naseebCta: 'Jetzt Ticket sichern',

  // ticket shop
  ticketShopLabel: 'TICKETS',
  ticketShopTitle: 'Tickets sichern',
  ticketShopDesc: 'Wähle deinen TAKABUL Abend und sichere dir dein Ticket direkt online.',

  // footer
  footerTagline1: 'Islamic Speed Dating',
  footerTagline2: 'Ein respektvoller Rahmen für ehrliche Begegnungen.',
  footerNavTitle: 'Navigation',
  footerAboutLink: 'Über TAKABUL',
  footerContactTitle: 'Kontakt',
  footerImpressumLink: 'Impressum',
  footerDatenschutzLink: 'Datenschutz',
  footerCopyright: '© 2026 TAKABUL. Alle Rechte vorbehalten.',
  footerMotto: 'Bismillah · Barakah · Naseeb',

  // tickets page
  ticketsPageLabel: 'TICKETS & ABLAUF',
  ticketsPageTitle: 'Für wen ist TAKABUL?',
  ticketsPageIntro:
    'Für muslimische Singles, die mit klaren Absichten neue Menschen kennenlernen möchten, auf eine respektvolle Weise, die mit islamischen Werten vereinbar ist.',
  ablaufTitle: 'Der Ablauf',
  ablaufStep1Title: 'Begrüssung & Einführung',
  ablaufStep1Desc:
    'Unsere Moderatorin empfängt dich herzlich und erklärt den Ablauf des Abends. Du kannst ankommen, durchatmen und dich in Ruhe einleben.',
  ablaufStep2Title: 'Respektvolle, persönliche Gesprächsrunden',
  ablaufStep2Desc:
    'Mehrere kurze Gespräche von jeweils ca. 7–10 Minuten ermöglichen dir, verschiedene Menschen auf eine natürliche und entspannte Weise kennenzulernen.',
  ablaufStep3Title: 'Entspannte Begleitung',
  ablaufStep3Desc:
    'Dank unserer Moderatorin, die für eine angenehme Atmosphäre sorgt, fühlst du dich zu keinem Zeitpunkt allein oder unwohl.',
  ablaufStep4Title: 'Anonyme Entscheidung',
  ablaufStep4Desc:
    'Du entscheidest nach dem Event anonym und diskret, wen du gerne wiedersehen möchtest. Nur wenn die Sympathie auf beiden Seiten da ist, werden die Kontakte ausgetauscht.',

  // impressum
  impressumTitle: 'Impressum',
  impressumAnbieterTitle: 'Anbieter',
  impressumKontaktTitle: 'Kontakt',
  impressumHinweisTitle: 'Hinweis',
  impressumHinweisText: 'Diese Website dient der Information über TAKABUL Islamic Speed Dating Events.',

  // datenschutz
  datenschutzTitle: 'Datenschutzerklärung',
  datenschutzVerantwortlicherTitle: 'Verantwortlicher',
  datenschutzHostingTitle: 'Hosting',
  datenschutzHostingText:
    'Diese Website wird gehostet bei Infomaniak Network SA, Schweiz. Infomaniak verarbeitet beim Aufruf dieser Website technisch notwendige Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite) im Rahmen ihrer Datenschutzrichtlinien.',
  datenschutzCookiesTitle: 'Cookies',
  datenschutzCookiesText:
    'Diese Website verwendet ausschliesslich technisch notwendige Cookies. Es werden keine Marketing-, Analyse- oder Tracking-Cookies eingesetzt.',
  datenschutzTrackingTitle: 'Tracking & Analyse',
  datenschutzTrackingText:
    'Auf dieser Website sind keine Tracking-Tools und kein Google Analytics eingebunden. Es werden keine Nutzerprofile erstellt und keine Daten an Dritte für Werbezwecke weitergegeben.',
  datenschutzSchriftenTitle: 'Schriften',
  datenschutzSchriftenText:
    'Diese Website lädt Schriftarten (Cormorant Garamond, Inter) von Google Fonts. Dabei wird Ihre IP-Adresse an die Server von Google übertragen. Wenn Sie dies vermeiden möchten, können Sie in Ihrem Browser einen geeigneten Blocker einsetzen.',
  datenschutzKontaktformularTitle: 'Kontaktformular',
  datenschutzKontaktformularText:
    'Diese Website enthält kein Kontaktformular. Bei Kontaktanfragen per E-Mail werden die übermittelten Daten ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.',
  datenschutzRechteTitle: 'Ihre Rechte',
  datenschutzRechteText:
    'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten gemäss dem schweizerischen Datenschutzgesetz (DSG) sowie der Datenschutz-Grundverordnung (DSGVO), sofern anwendbar. Für Anfragen wenden Sie sich bitte an: ',
  datenschutzAenderungenTitle: 'Änderungen',
  datenschutzAenderungenText:
    'Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Es gilt jeweils die auf der Website veröffentlichte aktuelle Fassung.',
  datenschutzStand: 'Stand: Mai 2026',
}

async function run() {
  const existingId = await client.fetch('*[_type == "content"][0]._id')

  if (existingId) {
    await client.patch(existingId).set(fields).commit()
    console.log('Updated existing "content" document:', existingId)
  } else {
    const result = await client.create({ _id: 'siteContent', _type: 'content', ...fields })
    console.log('Created "content" document:', result._id)
  }
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
