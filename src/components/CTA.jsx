export default function CTA() {
  return (
    <section id="register" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-emerald-500/10 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-blue-400/20 bg-slate-900 text-white p-8 sm:p-12 shadow-2xl shadow-emerald-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold">Join the Global Medical Congress</h3>
              <p className="mt-3 text-slate-300">Reserve your seat and receive the full agenda, venue access details, and 1:1 meeting scheduler.</p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a href="/customers" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">Customer Portal</a>
              <a href="/sponsors" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white font-medium transition-colors">Sponsor Portal</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
