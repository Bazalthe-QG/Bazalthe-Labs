// Blue glow shadow
export default function BlueGlow() {
  return (
    <div
      className="w-20 h-20 rounded-xl flex items-center justify-center"
      style={{ background: 'var(--c-surface)', boxShadow: '0 0 20px rgba(59,130,246,0.5)' }}
    >
      <div className="w-6 h-6 rounded-md" style={{ background: 'var(--c-border)' }} />
    </div>
  )
}
