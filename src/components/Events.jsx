import { CalendarDays, Clock, MapPin } from 'lucide-react'

const events = [
  {
    title: 'Opening Keynote: The Future of AI in Healthcare',
    time: '09:00 - 10:30',
    location: 'Main Hall A',
    description: 'Insights from leading clinicians and AI researchers on clinical impact, safety, and patient outcomes.'
  },
  {
    title: 'Clinical Innovation Showcase',
    time: '11:00 - 13:00',
    location: 'Innovation Theater',
    description: 'Live demos of breakthrough devices, digital therapeutics, and robotics redefining care pathways.'
  },
  {
    title: 'Sponsorship Roundtables & Networking',
    time: '14:30 - 17:00',
    location: 'Executive Lounge',
    description: 'Curated discussions between sponsors and institutions exploring partnerships and impact investing.'
  },
]

export default function Events() {
  return (
    <section id="events" className="relative bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">One Day. Three Experiences.</h2>
          <p className="mt-3 text-slate-300">A focused program designed for maximum collaboration and momentum.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 hover:border-emerald-400/30 transition-colors">
              <h3 className="text-white font-semibold text-lg leading-snug">{e.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{e.description}</p>
              <div className="mt-4 flex items-center gap-3 text-slate-300/90 text-sm">
                <CalendarDays size={16} className="text-emerald-400" />
                <span>Same Day Program</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-slate-300/90 text-sm">
                <Clock size={16} className="text-blue-400" />
                <span>{e.time}</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-slate-300/90 text-sm">
                <MapPin size={16} className="text-emerald-400" />
                <span>{e.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
