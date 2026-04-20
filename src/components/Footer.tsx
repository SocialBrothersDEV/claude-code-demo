import Logo from './Logo'

export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Tarieven', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-driven-dark overflow-hidden">
      {/* Blue gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-0 bottom-0 w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at right bottom, rgba(31,97,241,0.3) 0%, rgba(53,129,252,0.15) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute left-0 bottom-0 w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at left bottom, rgba(31,97,241,0.15) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-[1197px] mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <Logo />

          <nav className="flex flex-wrap gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-inter text-sm font-light text-[#D1D5DC] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-inter text-sm font-medium text-white">
              Unfold your legal complexity
            </p>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-driven-gold text-driven-dark px-5 py-3 rounded font-dm-sans text-sm font-bold w-fit hover:bg-driven-gold/90 transition-colors"
            >
              Plan een afspraak in
              <span className="material-symbols-rounded text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-[1197px] mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <p className="font-inter text-xs font-light text-[#F4F5F8]">
            © DRIVEN // LAWYERS
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-inter text-xs font-light text-[#F4F5F8] hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="font-inter text-xs font-light text-[#F4F5F8] hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
