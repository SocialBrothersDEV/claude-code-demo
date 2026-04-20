'use client'
import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'Wat we doen', href: '#services' },
    { label: 'Werkwijze', href: '#process' },
    { label: 'Tarieven', href: '#pricing' },
    { label: 'Data & Privacy', href: '#privacy' },
    { label: 'Over ons', href: '#team' },
  ]

  return (
    <header className="bg-driven-dark/95 backdrop-blur-sm sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-[1248px] mx-auto px-6 h-[92px] flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-dm-sans text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-driven-gold text-driven-dark px-5 py-3 rounded font-dm-sans text-sm font-bold hover:bg-driven-gold/90 transition-colors"
        >
          Contact
          <span className="material-symbols-rounded text-lg">arrow_forward</span>
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="material-symbols-rounded">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-driven-darker border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-dm-sans text-sm text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-driven-gold text-driven-dark px-5 py-3 rounded font-dm-sans text-sm font-bold w-fit"
            onClick={() => setMobileOpen(false)}
          >
            Contact
            <span className="material-symbols-rounded text-lg">arrow_forward</span>
          </a>
        </div>
      )}
    </header>
  )
}
