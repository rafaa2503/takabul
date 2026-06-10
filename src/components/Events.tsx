import { useEffect, useState } from 'react'
import { sanityClient, urlFor } from '../lib/sanityClient'
import { eventsQuery, type EventsContent } from '../lib/queries'

const defaultContent: EventsContent = {
  eventsLabel: 'ANSTEHENDE EVENTS',
  eventsTitleLine1: 'Schweizweit.',
  eventsTitleLine2: 'Unvergesslich.',
  eventsBody:
    'Von Zürich bis Genf — TAKABUL bringt dich an exklusiven Locations zusammen mit gleichgesinnten Muslims auf der Suche nach etwas Echtem.',
  eventsCta: 'Tickets sichern',
}

export default function Events() {
  const [content, setContent] = useState<EventsContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<EventsContent>(eventsQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const imageSrc = content.eventsImage?.asset
    ? urlFor(content.eventsImage).width(1200).url()
    : '/img/3.png'

  return (
    <section className="events-split" id="events" data-loading={loading}>
      <div className="events-split-text">
        <p className="section-label">{content.eventsLabel}</p>
        <h2>{content.eventsTitleLine1}<br />{content.eventsTitleLine2}</h2>
        <p className="events-split-body">{content.eventsBody}</p>
        <a href="#tickets" className="btn btn-primary">
          {content.eventsCta}
        </a>
      </div>
      <div className="events-split-image">
        <img src={imageSrc} alt="TAKABUL Event Atmosphäre" />
        <div className="events-split-overlay" />
      </div>
    </section>
  )
}
