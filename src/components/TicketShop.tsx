import { useEffect, useState } from 'react'
import { sanityClient } from '../lib/sanityClient'
import { ticketShopQuery, type TicketShopContent } from '../lib/queries'

const SHOP_URL = 'https://infomaniak.events/de-ch/shop/takabul-AM5MBV8124'

const defaultContent: TicketShopContent = {
  ticketShopLabel: 'TICKETS',
  ticketShopTitle: 'Tickets sichern',
  ticketShopDesc: 'Wähle deinen TAKABUL Abend und sichere dir dein Ticket direkt online.',
}

export default function TicketShop() {
  const [content, setContent] = useState<TicketShopContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch<TicketShopContent>(ticketShopQuery)
      .then(data => {
        if (data) setContent({ ...defaultContent, ...data })
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="tickets" className="ticket-shop-section" data-loading={loading}>
      <div className="container">
        <div className="ticket-shop-header">
          <p className="section-label ticket-shop-label">{content.ticketShopLabel}</p>
          <h2 className="ticket-shop-title">{content.ticketShopTitle}</h2>
          <p className="ticket-shop-desc">{content.ticketShopDesc}</p>
        </div>

        <div className="ticket-shop-box">
          <iframe
            src={SHOP_URL}
            className="ticket-shop-embed"
            title="TAKABUL Ticketshop"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
