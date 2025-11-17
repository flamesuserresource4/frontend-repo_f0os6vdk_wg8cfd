import { Link } from 'react-router-dom'

export function CustomersPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-3xl sm:text-4xl font-bold">Attendee Portal</h1>
        <p className="mt-2 text-slate-300">Access your pass, see the agenda, and prepare for the day.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-slate-900">
            <h3 className="text-lg font-semibold">Agenda at a Glance</h3>
            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Opening Keynote — 09:00</li>
              <li>Innovation Showcase — 11:00</li>
              <li>Sponsor Roundtables — 14:30</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-slate-900">
            <h3 className="text-lg font-semibold">What to Bring</h3>
            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Government ID</li>
              <li>Digital ticket (QR)</li>
              <li>Business cards</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/" className="inline-flex px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500">Back to Landing</Link>
        </div>
      </div>
    </div>
  )
}

export function SponsorsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-3xl sm:text-4xl font-bold">Sponsor Portal</h1>
        <p className="mt-2 text-slate-300">Browse packages, logistics, and brand activations.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-slate-900">
            <h3 className="text-lg font-semibold">Packages</h3>
            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Platinum — Headline branding + keynote presence</li>
              <li>Gold — Booth + session sponsorship</li>
              <li>Silver — Branded experiences</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-slate-900">
            <h3 className="text-lg font-semibold">Logistics</h3>
            <ul className="mt-3 list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Move-in: 07:00 - 08:30</li>
              <li>Booth size: 3m x 3m</li>
              <li>Power & Wi-Fi available</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/" className="inline-flex px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400">Back to Landing</Link>
        </div>
      </div>
    </div>
  )
}
