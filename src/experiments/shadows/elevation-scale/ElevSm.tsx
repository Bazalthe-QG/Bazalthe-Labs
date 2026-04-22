// Small shadow elevation
export default function ElevSm() {
  return (
    <div
      className="w-16 h-16 rounded-xl transition-shadow"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.07)',
      }}
      title="SM"
    />
  )
}
