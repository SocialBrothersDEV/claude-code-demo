const services = [
  {
    icon: 'contract',
    iconBg: 'bg-[#FFB9B9]',
    title: 'Contractuele geschillen',
    description: 'Wij procederen over nakoming, ontbinding en schadevergoeding bij complexe commerciële overeenkomsten. Snelle analyse, scherpe strategie — gericht op het beste resultaat voor uw organisatie.',
  },
  {
    icon: 'stroke_partial',
    iconBg: 'bg-[#FFE7A7]',
    title: 'Aandeelhoudersgeschillen',
    description: 'Van deadlocks en uitstoting tot geschillen over dividendbeleid en bestuursbesluiten. Wij beschermen de belangen van aandeelhouders en vennootschappen met precisie en diepgaande kennis van het ondernemingsrecht.',
  },
  {
    icon: 'person',
    iconBg: 'bg-[#B6E3FF]',
    title: 'Bestuurdersaansprakelijkheid',
    description: 'Wij adviseren en procederen over interne en externe aansprakelijkheidsvraagstukken — zowel in verdediging van bestuurders als namens vennootschappen en schuldeisers die verhaal zoeken.',
  },
  {
    icon: 'money_range',
    iconBg: 'bg-[#ACFEB2]',
    title: 'Arbitrage & mediatie',
    description: 'Wij vertegenwoordigen cliënten in nationale en internationale arbitrageprocedures en begeleiden complexe mediationtrajecten. Efficiënte geschilbeslechting buiten de rechter om, met volledige regie over het proces.',
  },
  {
    icon: 'partner_exchange',
    iconBg: 'bg-[#FFB7E2]',
    title: 'Overnameprocesdures & M&A geschillen',
    description: 'Post-closing geschillen, garantieclausules, earn-outmechanismen en misleidings-vorderingen bij fusies en overnames. In elke fase van het overnameproces.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-driven-dark py-24">
      <div className="max-w-[1254px] mx-auto px-6">
        <h2 className="font-archivo font-normal text-4xl text-white mb-12">
          Gespecialiseerd in corporate litigation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-driven-card rounded-xl p-6 flex flex-col gap-5"
            >
              <div className={`w-10 h-10 rounded-lg ${service.iconBg} flex items-center justify-center`}>
                <span className="material-symbols-rounded text-[#121212] text-2xl">{service.icon}</span>
              </div>
              <div>
                <h3 className="font-dm-sans text-[22px] font-medium text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-dm-sans text-base text-driven-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-driven-card rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative graphic */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-driven-blue/40" />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-blue-400/30" />
            </div>
            <div className="relative z-10">
              <div className="flex mb-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-driven-card2 border-2 border-driven-card flex items-center justify-center">
                    <span className="material-symbols-rounded text-white text-sm">person</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-driven-blue border-2 border-driven-card flex items-center justify-center">
                    <span className="material-symbols-rounded text-white text-sm">person</span>
                  </div>
                </div>
              </div>
              <h3 className="font-dm-sans text-[22px] font-medium text-white mb-2">
                Geinteresseerd?
              </h3>
              <p className="font-dm-sans text-base text-driven-text leading-relaxed mb-6">
                Onze consultant legt graag uit hoe het werkt vanaf de eerste stap.
              </p>
            </div>
            <a
              href="#contact"
              className="relative z-10 flex items-center gap-2 bg-driven-gold text-driven-dark px-5 py-3 rounded font-dm-sans text-sm font-bold w-fit hover:bg-driven-gold/90 transition-colors"
            >
              Plan een afspraak in
              <span className="material-symbols-rounded text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
