// Extra large shadow
export default function ElevXl() {
  return (
    <div
      className="w-16 h-16 rounded-xl transition-shadow"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 20px 25px rgba(0,0,0,0.08), 0 40px 50px rgba(0,0,0,0.1)',
      }}
      title="XL"
    />
  )
}
