// Medium shadow elevation
export default function ElevMd() {
  return (
    <div
      className="w-16 h-16 rounded-xl transition-shadow"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.07), 0 10px 15px rgba(0,0,0,0.1)',
      }}
      title="MD"
    />
  )
}
