// Inset pressed shadow
export default function Pressed() {
  return (
    <div
      className="w-20 h-20 rounded-xl flex items-center justify-center"
      style={{ background: 'var(--c-surface)', boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.15)' }}
    >
      <div className="w-6 h-6 rounded-md" style={{ background: 'var(--c-border)' }} />
    </div>
  )
}
