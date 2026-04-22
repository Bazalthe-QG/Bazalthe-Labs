// Extra small shadow
export default function ElevXs() {
  return (
    <div
      className="w-16 h-16 rounded-xl transition-shadow"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)',
      }}
      title="XS"
    />
  )
}
