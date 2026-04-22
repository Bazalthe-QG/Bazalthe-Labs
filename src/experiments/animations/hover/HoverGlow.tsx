// Hover glow effect
export default function HoverGlow() {
  return (
    <div className="w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(109,40,217,0.5)]"
      style={{ background: 'var(--c-accent)' }}>
      <span className="text-lg">⚡</span>
    </div>
  )
}
