const features = [
  {
    title: 'AI-first aanpak',
    description: 'We gebruiken AI om sneller tot de kern te komen, zodat er minder tijd verloren gaat aan handwerk en meer focus ligt op wat echt belangrijk is',
  },
  {
    title: 'Van recht naar resultaat',
    description: 'Geen lange, onoverzichtelijke documenten, maar heldere inzichten en concrete beslissingen waar je direct mee verder kunt',
  },
  {
    title: 'Vaste prijzen',
    description: 'je weet vooraf waar je aan toe bent, zonder verrassingen achteraf of onvoorspelbare kosten',
  },
  {
    title: 'Ontvouwen van complexiteit',
    description: 'wij halen onnodige lagen weg en maken het recht weer begrijpelijk, overzichtelijk en toepasbaar',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-driven-dark py-24 overflow-hidden">
      {/* Decorative blue gradient */}
      <div
        className="absolute left-0 bottom-0 w-[700px] h-[500px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left bottom, #1F61F1 0%, #4A9BFF 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1248px] mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-[506px]">
            <h2 className="font-archivo font-normal text-4xl text-white mb-4">
              Waarom kiezen voor ons
            </h2>
            <p className="font-dm-sans text-base text-white leading-relaxed">
              Wij geloven niet in onnodige complexiteit. Waar traditionele kantoren blijven bouwen op lagen, halen wij ze juist weg.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-driven-gold text-driven-dark px-5 py-3 rounded font-dm-sans text-sm font-bold hover:bg-driven-gold/90 transition-colors"
            >
              Afspraak inplannen
              <span className="material-symbols-rounded text-lg">arrow_forward</span>
            </a>
            <div className="flex gap-2">
              <button className="w-11 h-11 rounded border border-white/20 flex items-center justify-center text-white hover:border-white/60 transition-colors">
                <span className="material-symbols-rounded text-lg">arrow_back</span>
              </button>
              <button className="w-11 h-11 rounded border border-white/20 flex items-center justify-center text-white hover:border-white/60 transition-colors">
                <span className="material-symbols-rounded text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-driven-card2 rounded-lg overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="w-full h-[244px] bg-gradient-to-br from-driven-card to-driven-card2" />
              <div className="p-6">
                <h3 className="font-dm-sans text-lg font-medium text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-dm-sans text-sm text-driven-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
