// XS shadow card
export default function InuseXs() {
  return (
    <div
      className="w-full p-3 rounded-xl"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      <div className="h-3 rounded mb-2" style={{ background: 'var(--c-border)' }} />
      <div className="h-2.5 w-3/4 rounded" style={{ background: 'var(--c-border)' }} />
    </div>
  )
}
