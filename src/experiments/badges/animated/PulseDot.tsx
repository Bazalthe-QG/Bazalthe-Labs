// Pulsing emerald status dot
export default function PulseDot() {
  return (
    <div className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
    </div>
  )
}
