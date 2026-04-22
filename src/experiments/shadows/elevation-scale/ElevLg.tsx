// Large shadow elevation
export default function ElevLg() {
  return (
    <div
      className="w-16 h-16 rounded-xl transition-shadow"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 10px 15px rgba(0,0,0,0.07), 0 20px 25px rgba(0,0,0,0.1)',
      }}
      title="LG"
    />
  )
}
