export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© 2025 MedTech Congress. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-400 hover:text-white">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white">Terms</a>
            <a href="#events" className="text-slate-400 hover:text-white">Agenda</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
