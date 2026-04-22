// No shadow box
export default function ElevNone() {
  return (
    <div
      className="w-16 h-16 rounded-xl transition-shadow"
      style={{ background: 'var(--c-surface)', boxShadow: 'none' }}
      title="None"
    />
  )
}
