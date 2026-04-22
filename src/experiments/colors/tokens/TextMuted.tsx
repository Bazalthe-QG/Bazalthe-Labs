// Muted text token

// Secondary/placeholder text color
export default function TextMuted() {
  return (
    <div className="w-full space-y-2">
      <div
        className="h-10 rounded-xl border"
        style={{ background: 'var(--c-muted)', borderColor: 'var(--c-border)' }}
      />
      <div>
        <p className="text-[10px] font-mono" style={{ color: 'var(--c-accent)' }}>
          --c-muted
        </p>
        <p className="text-[10px]" style={{ color: 'var(--c-muted)' }}>
          Secondary/placeholder
        </p>
      </div>
    </div>
  )
}
