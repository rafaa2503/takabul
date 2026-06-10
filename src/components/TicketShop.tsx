const SHOP_URL = 'https://infomaniak.events/de-ch/shop/takabul-AM5MBV8124'

export default function TicketShop() {
  return (
    <section id="tickets" className="ticket-shop-section">
      <div className="container">
        <div className="ticket-shop-header">
          <p className="section-label ticket-shop-label">TICKETS</p>
          <h2 className="ticket-shop-title">Tickets sichern</h2>
          <p className="ticket-shop-desc">
            Wähle deinen TAKABUL Abend und sichere dir dein Ticket direkt online.
          </p>
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
