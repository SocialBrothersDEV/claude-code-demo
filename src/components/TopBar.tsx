export default function TopBar() {
  return (
    <div className="bg-driven-dark border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="text-driven-muted text-xs font-dm-sans">Gebasseerd in Amsterdam</span>
          <a href="#" className="text-driven-muted text-xs font-dm-sans hover:text-white transition-colors">Werken bij</a>
          <a href="#" className="text-driven-muted text-xs font-dm-sans hover:text-white transition-colors">Events</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-driven-text text-xs font-dm-sans">NL</span>
          <span className="text-driven-muted text-xs font-dm-sans">/</span>
          <a href="#" className="text-driven-muted text-xs font-dm-sans hover:text-white transition-colors">EN</a>
        </div>
      </div>
    </div>
  )
}
