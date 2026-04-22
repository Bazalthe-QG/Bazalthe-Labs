// Violet glow shadow
export default function VioletGlow() {
  return (
    <div
      className="w-20 h-20 rounded-xl flex items-center justify-center"
      style={{ background: 'var(--c-surface)', boxShadow: '0 0 20px rgba(109,40,217,0.5)' }}
    >
      <div className="w-6 h-6 rounded-md" style={{ background: 'var(--c-border)' }} />
    </div>
  )
}
