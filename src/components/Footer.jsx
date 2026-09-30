import TricolorBar from "./TricolorBar"

export default function Footer() {
  return (
    <footer className="mt-auto bg-leather">
      <TricolorBar className="border-t" />
      <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 md:py-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display font-bold text-base text-ink md:text-lg md:mb-2">
            MSR Sellerie.
          </div>
          <p className="hidden sm:block text-ink/75">
            Le savoir-faire se voit. La qualité se ressent.
          </p>
        </div>

        <div className="font-mono text-ink/75 space-y-0.5 text-xs md:space-y-1 md:text-sm">
          <p className="text-ink uppercase tracking-wider text-xs mb-1 md:mb-2">Contact</p>
          <p>Imp. du Riou, 31700 Blagnac</p>
          <p>07 60 48 57 61</p>
        </div>

        <div className="font-mono text-ink/75 space-y-0.5 text-xs md:space-y-1 md:text-sm">
          <p className="text-ink uppercase tracking-wider text-xs mb-1 md:mb-2">Horaires</p>
          <p>Lun – Sam · 07h00 – 19h00</p>
          <p>Dim · Fermé</p>
        </div>
      </div>
      <div className="text-center text-xs text-ink/60 pb-2 md:pb-4 font-mono">
        © {new Date().getFullYear()} MSR Sellerie. Tous droits réservés.
      </div>
    </footer>
  )
}