const metrics = [
  { value: '98%', label: 'Schüler Zufriedenheit' },
  { value: '12+', label: 'Anzahl Kurse' },
  { value: '5K+', label: 'Schüler' },
  { value: '8+', label: 'Kantone erreicht' },
]

export default function Metrics() {
  return (
    <section className="ss-metrics">
      <div className="ss-metrics__inner">
        {metrics.map(m => (
          <div key={m.label}>
            <div className="ss-metrics__value">{m.value}</div>
            <div className="ss-metrics__label">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
