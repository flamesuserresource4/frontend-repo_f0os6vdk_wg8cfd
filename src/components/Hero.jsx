import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] w-full overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-emerald-300/90 bg-emerald-500/10 ring-1 ring-emerald-400/30 px-3 py-1 rounded-full text-sm mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            1 Day • 3 Impactful Events
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Global Medical Congress 2025
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90">
            Where healthcare leaders, innovators, and sponsors connect to shape the future of medicine.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#register" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 transition-colors">
              Register as Attendee
            </a>
            <a href="#sponsor" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white font-medium shadow-lg shadow-emerald-500/20 transition-colors">
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
