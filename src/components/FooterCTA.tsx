'use client'
import { useState } from 'react'

export default function FooterCTA() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  return (
    <section id="contact" className="bg-driven-dark py-24 relative overflow-hidden">
      {/* Blue gradient decoration */}
      <div className="absolute right-0 top-0 w-[700px] h-[500px] opacity-15 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at right top, #1F61F1 0%, #4A9BFF 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1174px] mx-auto px-6">
        <div className="mb-8">
          <h2 className="font-archivo font-normal text-4xl text-white mb-4">
            Unfold uw case
          </h2>
          <p className="font-dm-sans text-base text-white leading-relaxed max-w-[828px]">
            Krijg directe helderheid over uw zaak, contracten of risico's.<br />
            Geen onnodige lagen. Geen verrassingen. Gewoon een systeem dat werkt.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Email input */}
          <div className="relative flex-1 max-w-[571px]">
            <div className="absolute -top-3 left-3 flex items-center gap-1">
              <span className="bg-driven-blue text-white font-dm-sans text-xs font-bold px-2 py-0.5 rounded">
                E-mailadres
              </span>
              <span className="text-red-500 text-sm">*</span>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vul hier je e-mailadres in"
              className="w-full h-[52px] bg-white rounded-lg px-4 font-dm-sans text-sm text-[#9EA1AF] placeholder:text-[#9EA1AF] outline-none focus:ring-2 focus:ring-driven-blue text-gray-800"
            />
          </div>

          {/* Agree + Submit */}
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
                  agreed ? 'bg-driven-gold border-driven-gold' : 'bg-white border-white'
                }`}
              >
                {agreed && (
                  <svg className="w-3 h-3 text-driven-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="font-dm-sans text-sm text-white">
                Ik ga akkoord met het privacystatement
              </span>
            </label>
            <button
              disabled={!agreed || !email}
              className="flex items-center gap-2 bg-driven-gold text-driven-dark px-5 py-3 rounded font-dm-sans text-sm font-bold w-fit hover:bg-driven-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-rounded text-lg">download</span>
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
