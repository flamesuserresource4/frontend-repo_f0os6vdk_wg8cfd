import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-emerald-400" />
              <span className="text-white font-semibold tracking-tight">MedTech Congress</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#events" className="text-slate-100/80 hover:text-white transition-colors">Events</a>
              <Link to="/customers" className="text-slate-100/80 hover:text-white transition-colors">For Attendees</Link>
              <Link to="/sponsors" className="text-slate-100/80 hover:text-white transition-colors">For Sponsors</Link>
              <a href="/test" className="text-slate-100/60 hover:text-white transition-colors">System Test</a>
              <a href="#register" className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-100 transition-transform">Register</a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Toggle menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/95 border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            <a href="#events" onClick={() => setOpen(false)} className="block text-slate-100/80">Events</a>
            <Link to="/customers" onClick={() => setOpen(false)} className="block text-slate-100/80">For Attendees</Link>
            <Link to="/sponsors" onClick={() => setOpen(false)} className="block text-slate-100/80">For Sponsors</Link>
            <a href="#register" onClick={() => setOpen(false)} className="block text-slate-100/80">Register</a>
          </div>
        </div>
      )}
    </header>
  )
}
