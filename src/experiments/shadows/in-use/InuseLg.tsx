// LG shadow card
export default function InuseLg() {
  return (
    <div
      className="w-full p-3 rounded-xl"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 10px 15px rgba(0,0,0,0.07), 0 20px 25px rgba(0,0,0,0.1)',
      }}
    >
      <div className="h-3 rounded mb-2" style={{ background: 'var(--c-border)' }} />
      <div className="h-2.5 w-3/4 rounded" style={{ background: 'var(--c-border)' }} />
    </div>
  )
}
