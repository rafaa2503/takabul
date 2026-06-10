import { defineField, defineType } from 'sanity'

export const content = defineType({
  name: 'content',
  title: 'Site Content',
  type: 'document',
  groups: [
    { name: 'shared', title: 'Shared / Brand' },
    { name: 'nav', title: 'Navigation' },
    { name: 'hero', title: 'Hero' },
    { name: 'about', title: 'About Takabul' },
    { name: 'events', title: 'Events Teaser' },
    { name: 'blessing', title: 'Spiritual Blessing' },
    { name: 'why', title: 'Why Takabul' },
    { name: 'naseeb', title: 'Naseeb Quote' },
    { name: 'ticketShop', title: 'Ticket Shop' },
    { name: 'footer', title: 'Footer' },
    { name: 'ticketsPage', title: 'Tickets Page' },
    { name: 'impressum', title: 'Impressum' },
    { name: 'datenschutz', title: 'Datenschutz' },
  ],
  fields: [
    // ---- Shared / Brand ----
    defineField({
      name: 'logoImage',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      group: 'shared',
    }),
    defineField({
      name: 'companyName',
      title: 'Company name',
      type: 'string',
      group: 'shared',
    }),
    defineField({
      name: 'companyCountry',
      title: 'Company country',
      type: 'string',
      group: 'shared',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      group: 'shared',
    }),
    defineField({
      name: 'backLinkLabel',
      title: 'Back-to-home link label',
      type: 'string',
      group: 'shared',
    }),

    // ---- Navigation ----
    defineField({ name: 'navLinkKonzept', title: 'Nav link: Konzept', type: 'string', group: 'nav' }),
    defineField({ name: 'navLinkEvents', title: 'Nav link: Events', type: 'string', group: 'nav' }),
    defineField({ name: 'navLinkWarum', title: 'Nav link: Warum TAKABUL', type: 'string', group: 'nav' }),
    defineField({ name: 'navLinkTickets', title: 'Nav link: Tickets', type: 'string', group: 'nav' }),
    defineField({ name: 'navLinkStart', title: 'Nav link: Start', type: 'string', group: 'nav' }),

    // ---- Hero ----
    defineField({
      name: 'heroBgImage',
      title: 'Background image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({ name: 'heroArabicText', title: 'Arabic Bismillah', type: 'string', group: 'hero' }),
    defineField({ name: 'heroBismillahLatin', title: 'Bismillah (Latin)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroClaim', title: 'Claim', type: 'string', group: 'hero' }),
    defineField({ name: 'heroTitleLine1', title: 'Title line 1', type: 'string', group: 'hero' }),
    defineField({ name: 'heroTitleLine2', title: 'Title line 2', type: 'string', group: 'hero' }),
    defineField({ name: 'heroTitleNaseeb', title: 'Title line 3 (naseeb)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroSubtitle', title: 'Subtitle', type: 'text', rows: 4, group: 'hero' }),
    defineField({ name: 'heroCtaPrimary', title: 'Primary CTA label', type: 'string', group: 'hero' }),
    defineField({ name: 'heroCtaSecondary', title: 'Secondary CTA label', type: 'string', group: 'hero' }),

    // ---- About Takabul ----
    defineField({
      name: 'aboutImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      group: 'about',
    }),
    defineField({ name: 'aboutLabel', title: 'Section label', type: 'string', group: 'about' }),
    defineField({ name: 'aboutTitlePart1', title: 'Title (part 1)', type: 'string', group: 'about' }),
    defineField({ name: 'aboutTitleAccent', title: 'Title (accent part)', type: 'string', group: 'about' }),
    defineField({ name: 'aboutBody1', title: 'Body paragraph 1', type: 'text', rows: 4, group: 'about' }),
    defineField({ name: 'aboutBody2', title: 'Body paragraph 2', type: 'text', rows: 3, group: 'about' }),
    defineField({ name: 'aboutCta', title: 'CTA label', type: 'string', group: 'about' }),

    // ---- Events teaser ----
    defineField({
      name: 'eventsImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      group: 'events',
    }),
    defineField({ name: 'eventsLabel', title: 'Section label', type: 'string', group: 'events' }),
    defineField({ name: 'eventsTitleLine1', title: 'Title line 1', type: 'string', group: 'events' }),
    defineField({ name: 'eventsTitleLine2', title: 'Title line 2', type: 'string', group: 'events' }),
    defineField({ name: 'eventsBody', title: 'Body text', type: 'text', rows: 3, group: 'events' }),
    defineField({ name: 'eventsCta', title: 'CTA label', type: 'string', group: 'events' }),

    // ---- Spiritual blessing ----
    defineField({ name: 'blessingLabel', title: 'Section label', type: 'string', group: 'blessing' }),
    defineField({
      name: 'blessingQuoteBefore',
      title: 'Quote (before first emphasis)',
      type: 'string',
      group: 'blessing',
    }),
    defineField({ name: 'blessingQuoteBismillah', title: 'Quote: "Bismillah"', type: 'string', group: 'blessing' }),
    defineField({
      name: 'blessingQuoteMiddle',
      title: 'Quote (between emphasis words)',
      type: 'string',
      group: 'blessing',
    }),
    defineField({ name: 'blessingQuoteBarakah', title: 'Quote: "Barakah"', type: 'string', group: 'blessing' }),
    defineField({
      name: 'blessingQuoteAfter',
      title: 'Quote (after second emphasis)',
      type: 'string',
      group: 'blessing',
    }),

    // ---- Why Takabul ----
    defineField({
      name: 'whyBgImage',
      title: 'Background image',
      type: 'image',
      options: { hotspot: true },
      group: 'why',
    }),
    defineField({ name: 'whyLabel', title: 'Section label', type: 'string', group: 'why' }),
    defineField({ name: 'whyTitle', title: 'Title', type: 'string', group: 'why' }),
    defineField({ name: 'whyReason1Title', title: 'Reason 1 title', type: 'string', group: 'why' }),
    defineField({ name: 'whyReason1Desc', title: 'Reason 1 description', type: 'text', rows: 3, group: 'why' }),
    defineField({ name: 'whyReason2Title', title: 'Reason 2 title', type: 'string', group: 'why' }),
    defineField({ name: 'whyReason2Desc', title: 'Reason 2 description', type: 'text', rows: 3, group: 'why' }),
    defineField({ name: 'whyReason3Title', title: 'Reason 3 title', type: 'string', group: 'why' }),
    defineField({ name: 'whyReason3Desc', title: 'Reason 3 description', type: 'text', rows: 3, group: 'why' }),
    defineField({ name: 'whyReason4Title', title: 'Reason 4 title', type: 'string', group: 'why' }),
    defineField({ name: 'whyReason4Desc', title: 'Reason 4 description', type: 'text', rows: 3, group: 'why' }),

    // ---- Naseeb quote ----
    defineField({
      name: 'naseebBgImage',
      title: 'Background image',
      type: 'image',
      options: { hotspot: true },
      group: 'naseeb',
    }),
    defineField({ name: 'naseebLabel', title: 'Section label', type: 'string', group: 'naseeb' }),
    defineField({ name: 'naseebQuoteLine1', title: 'Quote line 1', type: 'string', group: 'naseeb' }),
    defineField({ name: 'naseebQuoteLine2', title: 'Quote line 2', type: 'text', rows: 2, group: 'naseeb' }),
    defineField({ name: 'naseebCta', title: 'CTA label', type: 'string', group: 'naseeb' }),

    // ---- Ticket shop ----
    defineField({ name: 'ticketShopLabel', title: 'Section label', type: 'string', group: 'ticketShop' }),
    defineField({ name: 'ticketShopTitle', title: 'Title', type: 'string', group: 'ticketShop' }),
    defineField({ name: 'ticketShopDesc', title: 'Description', type: 'text', rows: 2, group: 'ticketShop' }),

    // ---- Footer ----
    defineField({ name: 'footerTagline1', title: 'Tagline 1', type: 'string', group: 'footer' }),
    defineField({ name: 'footerTagline2', title: 'Tagline 2', type: 'string', group: 'footer' }),
    defineField({ name: 'footerNavTitle', title: 'Navigation column title', type: 'string', group: 'footer' }),
    defineField({ name: 'footerAboutLink', title: 'Link label: About', type: 'string', group: 'footer' }),
    defineField({ name: 'footerContactTitle', title: 'Contact column title', type: 'string', group: 'footer' }),
    defineField({ name: 'footerImpressumLink', title: 'Link label: Impressum', type: 'string', group: 'footer' }),
    defineField({ name: 'footerDatenschutzLink', title: 'Link label: Datenschutz', type: 'string', group: 'footer' }),
    defineField({ name: 'footerCopyright', title: 'Copyright line', type: 'string', group: 'footer' }),
    defineField({ name: 'footerMotto', title: 'Motto', type: 'string', group: 'footer' }),

    // ---- Tickets page ----
    defineField({ name: 'ticketsPageLabel', title: 'Page label', type: 'string', group: 'ticketsPage' }),
    defineField({ name: 'ticketsPageTitle', title: 'Page title', type: 'string', group: 'ticketsPage' }),
    defineField({ name: 'ticketsPageIntro', title: 'Intro text', type: 'text', rows: 4, group: 'ticketsPage' }),
    defineField({ name: 'ablaufTitle', title: '"Ablauf" title', type: 'string', group: 'ticketsPage' }),
    defineField({ name: 'ablaufStep1Title', title: 'Step 1 title', type: 'string', group: 'ticketsPage' }),
    defineField({ name: 'ablaufStep1Desc', title: 'Step 1 description', type: 'text', rows: 3, group: 'ticketsPage' }),
    defineField({ name: 'ablaufStep2Title', title: 'Step 2 title', type: 'string', group: 'ticketsPage' }),
    defineField({ name: 'ablaufStep2Desc', title: 'Step 2 description', type: 'text', rows: 3, group: 'ticketsPage' }),
    defineField({ name: 'ablaufStep3Title', title: 'Step 3 title', type: 'string', group: 'ticketsPage' }),
    defineField({ name: 'ablaufStep3Desc', title: 'Step 3 description', type: 'text', rows: 3, group: 'ticketsPage' }),
    defineField({ name: 'ablaufStep4Title', title: 'Step 4 title', type: 'string', group: 'ticketsPage' }),
    defineField({ name: 'ablaufStep4Desc', title: 'Step 4 description', type: 'text', rows: 3, group: 'ticketsPage' }),

    // ---- Impressum ----
    defineField({ name: 'impressumTitle', title: 'Page title', type: 'string', group: 'impressum' }),
    defineField({ name: 'impressumAnbieterTitle', title: '"Anbieter" title', type: 'string', group: 'impressum' }),
    defineField({ name: 'impressumKontaktTitle', title: '"Kontakt" title', type: 'string', group: 'impressum' }),
    defineField({ name: 'impressumHinweisTitle', title: '"Hinweis" title', type: 'string', group: 'impressum' }),
    defineField({ name: 'impressumHinweisText', title: '"Hinweis" text', type: 'text', rows: 3, group: 'impressum' }),

    // ---- Datenschutz ----
    defineField({ name: 'datenschutzTitle', title: 'Page title', type: 'string', group: 'datenschutz' }),
    defineField({
      name: 'datenschutzVerantwortlicherTitle',
      title: '"Verantwortlicher" title',
      type: 'string',
      group: 'datenschutz',
    }),
    defineField({ name: 'datenschutzHostingTitle', title: '"Hosting" title', type: 'string', group: 'datenschutz' }),
    defineField({ name: 'datenschutzHostingText', title: '"Hosting" text', type: 'text', rows: 4, group: 'datenschutz' }),
    defineField({ name: 'datenschutzCookiesTitle', title: '"Cookies" title', type: 'string', group: 'datenschutz' }),
    defineField({ name: 'datenschutzCookiesText', title: '"Cookies" text', type: 'text', rows: 3, group: 'datenschutz' }),
    defineField({ name: 'datenschutzTrackingTitle', title: '"Tracking & Analyse" title', type: 'string', group: 'datenschutz' }),
    defineField({ name: 'datenschutzTrackingText', title: '"Tracking & Analyse" text', type: 'text', rows: 3, group: 'datenschutz' }),
    defineField({ name: 'datenschutzSchriftenTitle', title: '"Schriften" title', type: 'string', group: 'datenschutz' }),
    defineField({ name: 'datenschutzSchriftenText', title: '"Schriften" text', type: 'text', rows: 4, group: 'datenschutz' }),
    defineField({ name: 'datenschutzKontaktformularTitle', title: '"Kontaktformular" title', type: 'string', group: 'datenschutz' }),
    defineField({ name: 'datenschutzKontaktformularText', title: '"Kontaktformular" text', type: 'text', rows: 3, group: 'datenschutz' }),
    defineField({ name: 'datenschutzRechteTitle', title: '"Ihre Rechte" title', type: 'string', group: 'datenschutz' }),
    defineField({
      name: 'datenschutzRechteText',
      title: '"Ihre Rechte" text (up to contact email)',
      type: 'text',
      rows: 4,
      group: 'datenschutz',
    }),
    defineField({ name: 'datenschutzAenderungenTitle', title: '"Änderungen" title', type: 'string', group: 'datenschutz' }),
    defineField({ name: 'datenschutzAenderungenText', title: '"Änderungen" text', type: 'text', rows: 3, group: 'datenschutz' }),
    defineField({ name: 'datenschutzStand', title: 'Last updated note', type: 'string', group: 'datenschutz' }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Content' }),
  },
})
