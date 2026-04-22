// Inner inset shadow
export default function ElevInner() {
  return (
    <div
      className="w-16 h-16 rounded-xl transition-shadow"
      style={{ background: 'var(--c-surface)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)' }}
      title="Inner"
    />
  )
}
