// Error semantic token

// Negative states color
export default function SemError() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: '#ef4444', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          #ef4444
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Negative states
        </p>
      </div>
    </div>
  )
}
