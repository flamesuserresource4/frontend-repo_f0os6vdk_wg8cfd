import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Portals() {
  return (
    <section className="relative bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/customers" className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8 hover:border-blue-400/30 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-sm font-medium">Attendees</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">Customer Access</h3>
                <p className="mt-2 text-slate-300 text-sm max-w-md">View agenda, venue info, and manage your registration.</p>
              </div>
              <ArrowRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link to="/sponsors" className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8 hover:border-emerald-400/30 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-300 text-sm font-medium">Partners</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">Sponsor Access</h3>
                <p className="mt-2 text-slate-300 text-sm max-w-md">Explore packages, brand opportunities, and meetings.</p>
              </div>
              <ArrowRight className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
