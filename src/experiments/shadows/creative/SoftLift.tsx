// Soft lift shadow
export default function SoftLift() {
  return (
    <div
      className="w-20 h-20 rounded-xl flex items-center justify-center"
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <div className="w-6 h-6 rounded-md" style={{ background: 'var(--c-border)' }} />
    </div>
  )
}
