import services from '@/data/services';

export default function Services() {
  return (
    <section>
      <div className="service-pane">
        {
          services.map(s => {
            const IconComponent = s.icon;
            return (
              <div className="service-offering" key={s.id}>
                <IconComponent className="size-20 font-thin" />
                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
