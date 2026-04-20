const privacyPoints = [
  '100% Europese infrastructuur',
  'Geen Amerikaanse cloudleveranciers',
  'AI die uw data niet traint',
  'Volledige verwerkersovereenkomst',
]

export default function DataPrivacy() {
  return (
    <section id="privacy" className="bg-driven-dark py-24">
      <div className="max-w-[1248px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Visual / Objects placeholder */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-square max-w-[500px] w-full rounded-xl bg-driven-card2 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                {/* Abstract security visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full border-2 border-driven-gold/30 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-2 border-driven-gold/50 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-driven-gold/20 flex items-center justify-center">
                          <span className="material-symbols-rounded text-driven-gold text-3xl">shield</span>
                        </div>
                      </div>
                    </div>
                    {/* Orbiting dots */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-driven-gold" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-driven-blue" />
                    <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 rounded-full bg-driven-blue" />
                    <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full bg-driven-gold/60" />
                  </div>
                </div>
                {/* EU flag overlay */}
                <div className="absolute bottom-8 right-8 bg-blue-900/80 rounded px-3 py-1 flex items-center gap-2">
                  <span className="text-xl">🇪🇺</span>
                  <span className="font-dm-sans text-xs text-white">EU Hosted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:w-1/2 max-w-[507px]">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-dm-sans text-[22px] font-medium text-white">
                Uw dossier blijft veilig in Europa
              </h2>
              <span className="text-2xl">🇪🇺</span>
            </div>

            <p className="font-dm-sans text-base text-driven-text leading-relaxed mb-8">
              Als advocatenkantoor werken wij met vertrouwelijke informatie. Dat legt ons een bijzondere verplichting. Wij kiezen bewust voor een volledig Europese infrastructuur. Geen Microsoft, geen Google Workspace, geen Amazon. Uw gegevens staan op servers in Nederland en Duitsland, onderworpen aan Europees recht.
            </p>

            <ul className="space-y-4 mb-10">
              {privacyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="text-driven-gold font-bold text-sm font-dm-sans">//</span>
                  <span className="font-dm-sans text-base text-white">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#privacy"
              className="flex items-center gap-2 bg-[#454545] text-white px-5 py-3 rounded font-dm-sans text-sm font-bold w-fit hover:bg-[#555] transition-colors"
            >
              <span className="material-symbols-rounded text-lg">download</span>
              Bekijk onze veiligsheidseisen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
