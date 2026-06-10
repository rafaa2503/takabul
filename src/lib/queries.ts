export interface SanityImageValue {
  _type?: 'image'
  asset?: { _ref: string; _type: 'reference' }
}

// Hero
export interface HeroContent {
  heroBgImage?: SanityImageValue
  heroArabicText?: string
  heroBismillahLatin?: string
  heroClaim?: string
  heroTitleLine1?: string
  heroTitleLine2?: string
  heroTitleNaseeb?: string
  heroSubtitle?: string
  heroCtaPrimary?: string
  heroCtaSecondary?: string
}

export const heroQuery = `*[_type == "content"][0]{
  heroBgImage,
  heroArabicText,
  heroBismillahLatin,
  heroClaim,
  heroTitleLine1,
  heroTitleLine2,
  heroTitleNaseeb,
  heroSubtitle,
  heroCtaPrimary,
  heroCtaSecondary
}`

// About
export interface AboutContent {
  aboutImage?: SanityImageValue
  aboutLabel?: string
  aboutTitlePart1?: string
  aboutTitleAccent?: string
  aboutBody1?: string
  aboutBody2?: string
  aboutCta?: string
}

export const aboutQuery = `*[_type == "content"][0]{
  aboutImage,
  aboutLabel,
  aboutTitlePart1,
  aboutTitleAccent,
  aboutBody1,
  aboutBody2,
  aboutCta
}`

// Events
export interface EventsContent {
  eventsImage?: SanityImageValue
  eventsLabel?: string
  eventsTitleLine1?: string
  eventsTitleLine2?: string
  eventsBody?: string
  eventsCta?: string
}

export const eventsQuery = `*[_type == "content"][0]{
  eventsImage,
  eventsLabel,
  eventsTitleLine1,
  eventsTitleLine2,
  eventsBody,
  eventsCta
}`

// Naseeb quote
export interface NaseebContent {
  naseebBgImage?: SanityImageValue
  naseebLabel?: string
  naseebQuoteLine1?: string
  naseebQuoteLine2?: string
  naseebCta?: string
}

export const naseebQuery = `*[_type == "content"][0]{
  naseebBgImage,
  naseebLabel,
  naseebQuoteLine1,
  naseebQuoteLine2,
  naseebCta
}`

// Spiritual blessing
export interface BlessingContent {
  blessingLabel?: string
  blessingQuoteBefore?: string
  blessingQuoteBismillah?: string
  blessingQuoteMiddle?: string
  blessingQuoteBarakah?: string
  blessingQuoteAfter?: string
}

export const blessingQuery = `*[_type == "content"][0]{
  blessingLabel,
  blessingQuoteBefore,
  blessingQuoteBismillah,
  blessingQuoteMiddle,
  blessingQuoteBarakah,
  blessingQuoteAfter
}`

// Why Takabul
export interface WhyContent {
  whyBgImage?: SanityImageValue
  whyLabel?: string
  whyTitle?: string
  whyReason1Title?: string
  whyReason1Desc?: string
  whyReason2Title?: string
  whyReason2Desc?: string
  whyReason3Title?: string
  whyReason3Desc?: string
  whyReason4Title?: string
  whyReason4Desc?: string
}

export const whyQuery = `*[_type == "content"][0]{
  whyBgImage,
  whyLabel,
  whyTitle,
  whyReason1Title,
  whyReason1Desc,
  whyReason2Title,
  whyReason2Desc,
  whyReason3Title,
  whyReason3Desc,
  whyReason4Title,
  whyReason4Desc
}`

// Ticket shop
export interface TicketShopContent {
  ticketShopLabel?: string
  ticketShopTitle?: string
  ticketShopDesc?: string
}

export const ticketShopQuery = `*[_type == "content"][0]{
  ticketShopLabel,
  ticketShopTitle,
  ticketShopDesc
}`

// Nav
export interface NavContent {
  logoImage?: SanityImageValue
  navLinkKonzept?: string
  navLinkEvents?: string
  navLinkWarum?: string
  navLinkTickets?: string
  navLinkStart?: string
}

export const navQuery = `*[_type == "content"][0]{
  logoImage,
  navLinkKonzept,
  navLinkEvents,
  navLinkWarum,
  navLinkTickets,
  navLinkStart
}`

// Footer
export interface FooterContent {
  logoImage?: SanityImageValue
  footerTagline1?: string
  footerTagline2?: string
  footerNavTitle?: string
  navLinkStart?: string
  navLinkEvents?: string
  navLinkTickets?: string
  footerAboutLink?: string
  footerContactTitle?: string
  contactEmail?: string
  footerImpressumLink?: string
  footerDatenschutzLink?: string
  footerCopyright?: string
  footerMotto?: string
}

export const footerQuery = `*[_type == "content"][0]{
  logoImage,
  footerTagline1,
  footerTagline2,
  footerNavTitle,
  navLinkStart,
  navLinkEvents,
  navLinkTickets,
  footerAboutLink,
  footerContactTitle,
  contactEmail,
  footerImpressumLink,
  footerDatenschutzLink,
  footerCopyright,
  footerMotto
}`

// Tickets page (hero + Ablauf)
export interface TicketsPageContent {
  ticketsPageLabel?: string
  ticketsPageTitle?: string
  ticketsPageIntro?: string
  ablaufTitle?: string
  ablaufStep1Title?: string
  ablaufStep1Desc?: string
  ablaufStep2Title?: string
  ablaufStep2Desc?: string
  ablaufStep3Title?: string
  ablaufStep3Desc?: string
  ablaufStep4Title?: string
  ablaufStep4Desc?: string
}

export const ticketsPageQuery = `*[_type == "content"][0]{
  ticketsPageLabel,
  ticketsPageTitle,
  ticketsPageIntro,
  ablaufTitle,
  ablaufStep1Title,
  ablaufStep1Desc,
  ablaufStep2Title,
  ablaufStep2Desc,
  ablaufStep3Title,
  ablaufStep3Desc,
  ablaufStep4Title,
  ablaufStep4Desc
}`

// Impressum page
export interface ImpressumContent {
  backLinkLabel?: string
  impressumTitle?: string
  impressumAnbieterTitle?: string
  companyName?: string
  companyCountry?: string
  impressumKontaktTitle?: string
  contactEmail?: string
  impressumHinweisTitle?: string
  impressumHinweisText?: string
}

export const impressumQuery = `*[_type == "content"][0]{
  backLinkLabel,
  impressumTitle,
  impressumAnbieterTitle,
  companyName,
  companyCountry,
  impressumKontaktTitle,
  contactEmail,
  impressumHinweisTitle,
  impressumHinweisText
}`

// Datenschutz page
export interface DatenschutzContent {
  backLinkLabel?: string
  datenschutzTitle?: string
  datenschutzVerantwortlicherTitle?: string
  companyName?: string
  companyCountry?: string
  contactEmail?: string
  datenschutzHostingTitle?: string
  datenschutzHostingText?: string
  datenschutzCookiesTitle?: string
  datenschutzCookiesText?: string
  datenschutzTrackingTitle?: string
  datenschutzTrackingText?: string
  datenschutzSchriftenTitle?: string
  datenschutzSchriftenText?: string
  datenschutzKontaktformularTitle?: string
  datenschutzKontaktformularText?: string
  datenschutzRechteTitle?: string
  datenschutzRechteText?: string
  datenschutzAenderungenTitle?: string
  datenschutzAenderungenText?: string
  datenschutzStand?: string
}

export const datenschutzQuery = `*[_type == "content"][0]{
  backLinkLabel,
  datenschutzTitle,
  datenschutzVerantwortlicherTitle,
  companyName,
  companyCountry,
  contactEmail,
  datenschutzHostingTitle,
  datenschutzHostingText,
  datenschutzCookiesTitle,
  datenschutzCookiesText,
  datenschutzTrackingTitle,
  datenschutzTrackingText,
  datenschutzSchriftenTitle,
  datenschutzSchriftenText,
  datenschutzKontaktformularTitle,
  datenschutzKontaktformularText,
  datenschutzRechteTitle,
  datenschutzRechteText,
  datenschutzAenderungenTitle,
  datenschutzAenderungenText,
  datenschutzStand
}`
