export default function Hero() {
  const tags = [
    { icon: 'bolt', label: 'Reactie binnen 24 uur' },
    { icon: 'security', label: 'Uw data blijft in Europa' },
    { icon: 'payments', label: 'Fixed fee' },
    { icon: 'content_copy', label: 'Altijd inzage in uw document' },
  ]

  return (
    <section className="relative bg-driven-dark overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(16,23,39,0) 0%, rgba(16,23,39,0.7) 60%, rgba(16,23,39,1) 100%), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1440&q=80')`,
        }}
      />

      <div className="relative z-10 max-w-[1248px] mx-auto px-6 pt-24 pb-0">
        {/* Main content */}
        <div className="max-w-[634px]">
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1">
              <span className="text-driven-gold text-xs font-bold">//</span>
            </div>
            <p className="font-dm-sans text-sm text-driven-gold tracking-widest uppercase">
              AI-gedreven precisie. Menselijke expertise. Europees verankerd.
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-archivo font-light text-5xl lg:text-[60px] leading-tight text-white mb-8">
            Wij ontvouwen recht<br />tot resultaat.
          </h1>

          {/* Description */}
          <p className="font-dm-sans text-base text-driven-text leading-relaxed mb-10 max-w-[580px]">
            DRIVEN // LAWYERS is een AI-first advocatenkantoor voor bedrijven die snelheid, voorspelbaarheid en kwaliteit verwachten. Geen legal theater. Gewoon een betere manier van werken.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#454545] text-white px-5 py-3 rounded font-dm-sans text-sm font-bold hover:bg-[#555] transition-colors"
            >
              <span className="material-symbols-rounded text-lg">mail</span>
              Laten we praten
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded font-dm-sans text-sm font-bold hover:border-white/60 transition-colors"
            >
              Ik wil meer weten
              <span className="material-symbols-rounded text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* Feature tags bar */}
      <div className="relative z-10 mt-20 bg-driven-darker border-t border-white/10">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="flex items-center gap-8 py-5 flex-wrap">
            {tags.map((tag) => (
              <div key={tag.label} className="flex items-center gap-2">
                <span className="material-symbols-rounded text-driven-gold text-lg">{tag.icon}</span>
                <span className="font-dm-sans text-sm text-driven-text">{tag.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
