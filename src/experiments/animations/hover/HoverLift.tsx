// Hover lift effect
export default function HoverLift() {
  return (
    <div className="w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg"
      style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}>
      <span className="text-lg">🚀</span>
    </div>
  )
}
