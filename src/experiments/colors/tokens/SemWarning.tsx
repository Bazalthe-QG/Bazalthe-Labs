// Warning semantic token

// Caution states color
export default function SemWarning() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: '#f59e0b', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          #f59e0b
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Caution states
        </p>
      </div>
    </div>
  )
}
