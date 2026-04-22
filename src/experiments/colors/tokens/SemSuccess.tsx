// Success semantic token

// Positive states color
export default function SemSuccess() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: '#10b981', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          #10b981
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Positive states
        </p>
      </div>
    </div>
  )
}
