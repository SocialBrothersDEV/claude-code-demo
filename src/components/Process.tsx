'use client'
import { useState } from 'react'

const steps = [
  {
    number: '1',
    title: 'U stelt uw vraag',
    detail: 'U brengt uw vraag of casus bij ons in. Dit kan via een kort gesprek, een e-mail of een gestructureerde intake. Wij luisteren, stellen de juiste vragen en zorgen dat we de kern van uw situatie helder hebben.',
  },
  {
    number: '2',
    title: 'Wij brengen uw situatie in kaart',
    detail: 'Samen vertalen we de ambitie naar een concreet plan van aanpak met duidelijke doelen, rollen en prioriteiten. Geen dikke rapporten, maar een praktische roadmap die uitvoerbaar is.',
  },
  {
    number: '3',
    title: 'U beslist hoe we verdergaan',
    detail: 'Op basis van onze analyse presenteren wij u de opties. U beslist welke richting het beste aansluit bij uw doelstellingen. Geen verrassingen — alles vooraf transparant.',
  },
  {
    number: '4',
    title: 'Volledige transparantie onderweg',
    detail: 'Gedurende het hele traject heeft u altijd inzage in uw dossier, documenten en voortgang. Vaste prijzen, heldere communicatie, geen onverwachte kosten.',
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="bg-driven-dark py-24">
      <div className="max-w-[1254px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Steps list */}
          <div className="lg:w-[404px] flex-shrink-0">
            <h2 className="font-archivo font-normal text-4xl text-white mb-3">
              Van vraag naar oplossing — helder
            </h2>
            <p className="font-dm-sans text-base text-driven-text mb-10">
              Hoe ziet een proces (of case) er bij ons uit, en wat zijn de voordelen
            </p>

            <div className="flex flex-col gap-4">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-4 p-4 rounded-lg text-left transition-colors ${
                    activeStep === index ? 'bg-driven-card' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="w-8 h-8 rounded bg-driven-gold flex items-center justify-center flex-shrink-0">
                    <span className="font-dm-sans text-lg font-medium text-white">{step.number}</span>
                  </div>
                  <span className="font-dm-sans text-[22px] font-medium text-white">
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detail panel */}
          <div className="flex-1 bg-driven-card2 rounded-xl overflow-hidden">
            <div className="w-full h-[280px] bg-gradient-to-br from-driven-card to-driven-darker relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-driven-gold/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-driven-gold/40 flex items-center justify-center">
                    <span className="font-dm-sans text-2xl font-bold text-driven-gold">
                      {steps[activeStep].number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-dm-sans text-2xl font-semibold text-white mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="font-dm-sans text-base text-white leading-relaxed">
                {steps[activeStep].detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
