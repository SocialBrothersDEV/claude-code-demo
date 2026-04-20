export default function Team() {
  return (
    <section id="team" className="bg-driven-dark py-24">
      <div className="max-w-[1254px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Lawyer photos */}
          <div className="lg:w-[616px] flex-shrink-0">
            <h2 className="font-archivo font-normal text-4xl text-white mb-8">Ontmoet ons team</h2>
            <div className="flex gap-4">
              <div className="flex-1 h-[350px] rounded-xl bg-driven-card overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-driven-dark/60 to-transparent" />
                <div className="w-full h-full bg-gradient-to-br from-driven-card to-driven-card2 flex items-end p-4">
                  <div>
                    <p className="font-dm-sans font-medium text-white text-sm">Partner</p>
                    <p className="font-dm-sans text-driven-text text-xs">Corporate Litigation</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[350px] rounded-xl bg-driven-card overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-driven-dark/60 to-transparent" />
                <div className="w-full h-full bg-gradient-to-br from-driven-card2 to-driven-card flex items-end p-4">
                  <div>
                    <p className="font-dm-sans font-medium text-white text-sm">Partner</p>
                    <p className="font-dm-sans text-driven-text text-xs">Legal Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="max-w-[506px]">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-driven-gold font-bold text-xl">//</span>
            </div>
            <p className="font-dm-sans text-base text-white leading-relaxed mb-8">
              DRIVEN // LAWYERS is de samenwerking tussen DRIVEN lawyers advocatenkantoor en BY DEFINITION, een legal technology bedrijf. Samen opereren wij als één geïntegreerde organisatie, ontworpen voor de eisen van de moderne rechtspraktijk.
            </p>
            <p className="font-dm-sans text-base text-white leading-relaxed mb-8">
              Wij geloven dat juridische dienstverlening van de hoogste kwaliteit gepaard moet gaan met volledige transparantie. Door technologie en juridische expertise te integreren, leveren wij diepgaande analyses en scherpe adviezen.
            </p>
            <a
              href="#team"
              className="flex items-center gap-2 bg-[#454545] text-white px-5 py-3 rounded font-dm-sans text-sm font-bold w-fit hover:bg-[#555] transition-colors"
            >
              <span className="material-symbols-rounded text-lg">arrow_forward</span>
              Over ons
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
