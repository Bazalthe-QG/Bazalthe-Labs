// Info semantic token

// Informational states color
export default function SemInfo() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: '#3b82f6', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          #3b82f6
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Informational
        </p>
      </div>
    </div>
  )
}
