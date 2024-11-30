import services from '@/data/services';

export default function Services() {
  return (
    <section>
      <div className="service-pane">

        <h2>Service Offerings</h2>
        <p>We offer the best-in-class web services to small businesses.</p>
        <div className="offerings">
          {
            services.map(s => {
              const IconComponent = s.icon;
              return (
                <div className="service-offering" key={s.id}>
                  <IconComponent className="size-20 rotate-0 hover:rotate-6 transition-transform" />
                  <h3>{s.name}</h3>
                  <p className="description">{s.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
